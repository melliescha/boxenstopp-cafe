#!/usr/bin/env node
/**
 * Static prerender step for SEO / Social preview crawlers.
 *
 * Vite builds a single SPA `dist/index.html`. Non-JS crawlers (LinkedIn,
 * Facebook, Slack, WhatsApp, X, older Google fetchers) only read that file
 * and therefore see the Home tags on every route. This script clones
 * `dist/index.html` into `dist/<route>/index.html` and rewrites the
 * `<title>`, `<meta name="description">`, `<link rel="canonical">`, and
 * all `og:*` / `twitter:*` tags per route.
 *
 * Runtime behaviour is unchanged: React still hydrates and `SEO.tsx`
 * still updates the head on client navigations. This just guarantees the
 * first HTML byte a crawler sees is correct.
 */
import { readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist");
const SITE_URL = "https://bistro-boxenstopp.de";
const SITE_NAME = "Bistro Boxenstopp";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

/** Kept in sync with `<SEO />` props in src/pages/*.tsx. */
const routes = [
  {
    path: "/",
    title: "Bistro Boxenstopp Hergatz | Kaffee & Flammkuchen",
    description:
      "Barista-Kaffee, ofenfrische Flammkuchen und Hüttenbrot in Hergatz – Euer Stopp am Bodensee-Königssee-Radweg im Westallgäu.",
    type: "restaurant.restaurant",
    image: `${SITE_URL}/og-image.jpg`,
  },
  {
    path: "/speisekarte",
    title: "Speisekarte – Bistro Boxenstopp Hergatz",
    description:
      "Unsere Karte: Flammkuchen, Pizza-Snacks, Brote, Barista-Kaffee, Matcha, Proteinshakes und der berühmte Boxenstopp-Spezial mit Kollagen.",
    image: `${SITE_URL}/og/speisekarte.jpg`,
  },
  {
    path: "/ueber-uns",
    title: "Über uns – Familie Schall | Bistro Boxenstopp",
    description:
      "Hinter dem Bistro Boxenstopp im Westallgäu steht die Familie Schall: bodenständig, ehrlich, mit Leidenschaft für gute Küche und Gemeinschaft.",
    image: `${SITE_URL}/og/ueber-uns.jpg`,
  },
  {
    path: "/partner",
    title: "Unsere Partner | Bistro Boxenstopp",
    description:
      "Wir arbeiten mit Cup&Cino (Foundation für sauberes Wasser), Herbalife Nutrition und Perplex Pizza & Baguette Deutschland zusammen.",
    image: `${SITE_URL}/og/partner.jpg`,
  },
  {
    path: "/galerie",
    title: "Galerie – Bistro Boxenstopp Hergatz",
    description:
      "Eindrücke aus unserem Bistro im Allgäu: Kaffeespezialitäten, Flammkuchen, Atmosphäre.",
    image: `${SITE_URL}/og/galerie.jpg`,
  },
  {
    path: "/bewertungen",
    title: "Bewertungen – Bistro Boxenstopp Hergatz",
    description:
      "Bewertet das Bistro Boxenstopp in Hergatz auf Google, TripAdvisor und Instagram.",
  },
  {
    path: "/kontakt",
    title: "Anfahrt & Kontakt | Bistro Boxenstopp",
    description:
      "So findet ihr das Bistro Boxenstopp in Hergatz/Wohmbrechts: Anfahrt mit Auto, Rad oder Bahn. Direkt am Bodensee-Königssee-Radweg und an der Leiblachroute.",
  },
  {
    path: "/faq",
    title: "Häufige Fragen | Bistro Boxenstopp Hergatz im Westallgäu",
    description:
      "Alle Antworten rund um euren Besuch im Bistro Boxenstopp: Anfahrt, Öffnungszeiten, Speisen, Partner, Radfahrer Infos und mehr.",
  },
  {
    path: "/blog/bodensee-koenigssee-radweg-hergatz",
    title: "Bodensee-Königssee-Radweg: Etappe Hergatz im Westallgäu",
    description:
      "Rast am Bodensee-Königssee-Radweg in Hergatz/Wohmbrechts: Duschen, E-Bike-Ladestation, Barista-Kaffee & Flammkuchen im Bistro Boxenstopp. Tipps für deine Etappe.",
    type: "article",
    image: `${SITE_URL}/og/galerie.jpg`,
  },
  {
    path: "/fites-allgaeu",
    title: "FITES Allgäu Hergatz | Kostenloses Probetraining bis Dezember",
    description:
      "Fitnessstudio in Hergatz: HYROX, Fitness-Boxen, Tabata & HIIT. Persönliche Betreuung von Eugen, kleine Gruppen, Wellpass-Partner. Jetzt kostenloses Probetraining sichern.",
    image: `${SITE_URL}/og-image.jpg`,
  },
  {
    path: "/impressum",
    title: "Impressum – Bistro Boxenstopp",
    description: "Impressum und Anbieterkennzeichnung.",
  },
  {
    path: "/datenschutz",
    title: "Datenschutz – Bistro Boxenstopp",
    description: "Datenschutzerklärung gemäß DSGVO.",
  },
];

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Replace the value of an existing tag, or insert it before </head>. */
function upsertTag(html, matcher, replacement) {
  if (matcher.test(html)) return html.replace(matcher, replacement);
  return html.replace(/<\/head>/i, `    ${replacement}\n  </head>`);
}

function applyRouteMeta(html, route) {
  const url = `${SITE_URL}${route.path === "/" ? "/" : route.path}`;
  const image = route.image ?? DEFAULT_IMAGE;
  const type = route.type ?? "website";
  const title = escape(route.title);
  const description = escape(route.description);

  let out = html;

  // <title>
  out = out.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);

  // description
  out = upsertTag(
    out,
    /<meta\s+name="description"[^>]*>/i,
    `<meta name="description" content="${description}" />`,
  );

  // canonical
  out = upsertTag(
    out,
    /<link\s+rel="canonical"[^>]*>/i,
    `<link rel="canonical" href="${url}" />`,
  );

  // Open Graph
  const og = [
    ["og:title", title],
    ["og:description", description],
    ["og:url", url],
    ["og:image", image],
    ["og:type", type],
    ["og:site_name", SITE_NAME],
    ["og:locale", "de_DE"],
  ];
  for (const [prop, val] of og) {
    out = upsertTag(
      out,
      new RegExp(`<meta\\s+property="${prop}"[^>]*>`, "i"),
      `<meta property="${prop}" content="${val}" />`,
    );
  }

  // Twitter
  const tw = [
    ["twitter:card", "summary_large_image"],
    ["twitter:title", title],
    ["twitter:description", description],
    ["twitter:image", image],
  ];
  for (const [name, val] of tw) {
    out = upsertTag(
      out,
      new RegExp(`<meta\\s+name="${name}"[^>]*>`, "i"),
      `<meta name="${name}" content="${val}" />`,
    );
  }

  return out;
}

async function main() {
  const indexPath = path.join(DIST, "index.html");
  if (!existsSync(indexPath)) {
    console.error(`[prerender] ${indexPath} not found — run \`vite build\` first.`);
    process.exit(1);
  }

  const template = await readFile(indexPath, "utf8");
  let count = 0;

  for (const route of routes) {
    const html = applyRouteMeta(template, route);
    const target =
      route.path === "/"
        ? indexPath
        : path.join(DIST, route.path.replace(/^\//, ""), "index.html");
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, html, "utf8");
    count++;
    console.log(`[prerender] ${route.path.padEnd(16)} → ${path.relative(DIST, target)}`);
  }

  // 404 fallback — some hosts serve `dist/404.html` for unknown routes.
  const notFound = applyRouteMeta(template, {
    path: "/404",
    title: "Seite nicht gefunden | Bistro Boxenstopp",
    description: "Die aufgerufene Seite existiert nicht.",
  }).replace(/<\/head>/i, `    <meta name="robots" content="noindex" />\n  </head>`);
  await writeFile(path.join(DIST, "404.html"), notFound, "utf8");

  console.log(`[prerender] wrote ${count} route(s) + 404.html`);
}

main().catch((err) => {
  console.error("[prerender] failed:", err);
  process.exit(1);
});
