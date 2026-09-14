#!/usr/bin/env python3
"""Holt Foto und Text eines Instagram-Beitrags und legt daraus einen News-Eintrag an.

Aufruf:
    python3 scripts/instagram-news.py <instagram-url> --slug <slug> \
        --title "Titel" --category "Neu auf der Karte" [--date 2026-09-14] [--dry-run]

Das Foto wird nach src/assets/news/<slug>.jpg gespeichert (selbst gehostet, DSGVO-konform),
der Beitrag wird oben in src/data/newsPosts.ts eingefuegt.
"""
import argparse
import asyncio
import datetime
import pathlib
import re
import sys
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[1]
ASSETS = ROOT / "src" / "assets" / "news"
DATA = ROOT / "src" / "data" / "newsPosts.ts"

MONTHS = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember",
]

UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)


def shortcode(url: str) -> str:
    m = re.search(r"/(?:p|reel)/([A-Za-z0-9_-]+)", url)
    if not m:
        sys.exit("Konnte den Beitrags-Code nicht aus der URL lesen.")
    return m.group(1)


async def scrape(code: str):
    from playwright.async_api import async_playwright

    embed = f"https://www.instagram.com/p/{code}/embed/captioned/"
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1280, "height": 1800}, user_agent=UA)
        page = await context.new_page()
        await page.goto(embed, wait_until="domcontentloaded")
        await page.wait_for_timeout(4000)
        images = await page.eval_on_selector_all(
            "img",
            """els => els.map(e => ({
                src: e.currentSrc || e.src,
                srcset: e.getAttribute('srcset') || '',
                w: e.naturalWidth,
                h: e.naturalHeight,
                cls: e.className,
            }))""",
        )
        caption = await page.eval_on_selector_all(
            ".Caption, .EmbedCaption",
            "els => els.map(e => e.innerText).join('\\n')",
        )
        await browser.close()
    return images, caption


def best_image(images):
    candidates = []
    for img in images:
        for entry in [img["src"], *[s.strip().split(" ")[0] for s in img["srcset"].split(",") if s.strip()]]:
            if not entry or "t51.82787-19" in entry or "static.cdninstagram" in entry:
                continue  # Profilbild oder UI-Grafik
            m = re.search(r"[ps](\d{3,4})x\d{3,4}", entry)
            width = int(m.group(1)) if m else max(img["w"], 1080)
            candidates.append((width, entry))
    if not candidates:
        sys.exit("Kein Beitragsfoto gefunden, Instagram hat die Vorschau blockiert.")
    candidates.sort(key=lambda c: c[0], reverse=True)
    return candidates[0][1]


def clean_caption(raw: str) -> list[str]:
    text = re.sub(r"^.*?bistro\.boxenstopp\s*", "", raw, flags=re.S).strip()
    text = re.sub(r"(A post shared by|Ein Beitrag geteilt von).*$", "", text, flags=re.S)
    text = re.sub(r"#\S+", "", text)
    # Emojis und Gedankenstriche entfernen (Design-Konvention der Website)
    text = re.sub(
        "[\U0001F000-\U0001FAFF\u2600-\u27BF\uFE0F\u2b00-\u2bff\U0001F1E6-\U0001F1FF\U0001F3FB-\U0001F3FF]",
        "",
        text,
    )
    text = text.replace("–", ",").replace("—", ",")
    parts = [re.sub(r"\s+", " ", p).strip() for p in text.split("\n")]
    return [p for p in parts if len(p) > 25]


def ts_entry(post: dict) -> str:
    body = "\n".join(f'      "{p}",' for p in post["body"])
    image = f'    image: {post["importName"]},\n' if post.get("importName") else ""
    alt = f'    imageAlt: "{post["imageAlt"]}",\n' if post.get("imageAlt") else ""
    return (
        "  {\n"
        f'    slug: "{post["slug"]}",\n'
        f'    title: "{post["title"]}",\n'
        f'    date: "{post["date"]}",\n'
        f'    dateLabel: "{post["dateLabel"]}",\n'
        f'    category: "{post["category"]}",\n'
        f'    excerpt:\n      "{post["excerpt"]}",\n'
        f"    body: [\n{body}\n    ],\n"
        f"{image}{alt}"
        f'    instagramUrl: "{post["instagramUrl"]}",\n'
        "  },\n"
    )


def insert_post(post: dict):
    source = DATA.read_text(encoding="utf-8")
    if f'slug: "{post["slug"]}"' in source:
        sys.exit(f"Beitrag {post['slug']} steht schon in newsPosts.ts.")
    if post.get("importName"):
        import_line = f'import {post["importName"]} from "@/assets/news/{post["slug"]}.jpg";\n'
        source = import_line + source
    marker = "export const newsPosts: NewsPost[] = [\n"
    source = source.replace(marker, marker + ts_entry(post), 1)
    DATA.write_text(source, encoding="utf-8")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("url")
    ap.add_argument("--slug", required=True)
    ap.add_argument("--title", required=True)
    ap.add_argument("--category", default="Aktuelles")
    ap.add_argument("--date", default=datetime.date.today().isoformat())
    ap.add_argument("--alt")
    ap.add_argument("--no-image", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    code = shortcode(args.url)
    images, caption = asyncio.run(scrape(code))
    body = clean_caption(caption)
    if not body:
        sys.exit("Kein Text im Beitrag gefunden, bitte Text manuell ergaenzen.")

    image_name = None
    if not args.no_image:
        url = best_image(images)
        ASSETS.mkdir(parents=True, exist_ok=True)
        target = ASSETS / f"{args.slug}.jpg"
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=60) as resp:
            target.write_bytes(resp.read())
        image_name = re.sub(r"[^a-zA-Z0-9]", " ", args.slug).title().replace(" ", "")
        image_name = image_name[0].lower() + image_name[1:] + "Image"
        print(f"Foto gespeichert: {target.relative_to(ROOT)} ({target.stat().st_size // 1024} KB)")

    d = datetime.date.fromisoformat(args.date)
    post = {
        "slug": args.slug,
        "title": args.title,
        "date": args.date,
        "dateLabel": f"{d.day}. {MONTHS[d.month - 1]} {d.year}",
        "category": args.category,
        "excerpt": body[0][:200],
        "body": body,
        "importName": image_name,
        "imageAlt": args.alt or f"{args.title}, Foto aus dem Bistro Boxenstopp in Hergatz",
        "instagramUrl": f"https://www.instagram.com/p/{code}/",
    }
    if args.dry_run:
        print(ts_entry(post))
        return
    insert_post(post)
    print(f"Beitrag {args.slug} in src/data/newsPosts.ts ergaenzt.")


if __name__ == "__main__":
    main()
