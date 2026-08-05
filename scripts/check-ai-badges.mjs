#!/usr/bin/env node
/**
 * Automatische Prüfung der KI-Kennzeichnung (EU AI Act, Art. 50 Abs. 4).
 *
 * Für jedes in src/data/aiPersonImages.ts registrierte KI-Bild mit Personen
 * wird geprüft, ob an der Einbindungsstelle ein sichtbares Sternchen
 * (<AiBadge />) steht, bzw. ob die Datei einen zugelassenen Sammelhinweis hat.
 *
 * Läuft automatisch vor jedem Build (npm run build). Exit-Code 1 = Veröffentlichung
 * sollte nicht erfolgen, bis die Kennzeichnung ergänzt wurde.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const SRC = join(ROOT, "src");
const REGISTRY = join(SRC, "data", "aiPersonImages.ts");
/** Zeilen-Fenster nach dem <img src={...}>, in dem das Sternchen stehen muss */
const LOOKAHEAD = 30;

function fail(msg) {
  console.error(`\n❌ KI-Kennzeichnung (EU AI Act) fehlerhaft:\n${msg}\n`);
  process.exit(1);
}

// --- Registry einlesen (ohne TS-Compiler, simples Parsing) ---
let registrySource;
try {
  registrySource = readFileSync(REGISTRY, "utf8");
} catch {
  fail(`Registry ${relative(ROOT, REGISTRY)} nicht gefunden.`);
}

const assets = [...registrySource.matchAll(/asset:\s*"([^"]+)"/g)].map((m) => m[1]);
const collectiveFiles = [
  ...(registrySource.match(/AI_COLLECTIVE_NOTICE_FILES[^[]*\[([^\]]*)\]/s)?.[1] ?? "").matchAll(
    /"([^"]+)"/g,
  ),
].map((m) => m[1]);

if (assets.length === 0) {
  fail("Die Registry AI_PERSON_IMAGES ist leer, es kann nichts geprüft werden.");
}

// --- alle Quelldateien sammeln ---
function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.(tsx|ts)$/.test(entry)) out.push(full);
  }
  return out;
}

const files = walk(SRC).map((f) => ({ path: relative(ROOT, f).replace(/\\/g, "/"), text: readFileSync(f, "utf8") }));

const problems = [];
const checked = [];

for (const asset of assets) {
  let usedAnywhere = false;

  for (const file of files) {
    if (file.path.endsWith("src/data/aiPersonImages.ts")) continue;

    const lines = file.text.split("\n");

    // Importvariablen für dieses Asset finden
    const importVars = [
      ...file.text.matchAll(
        new RegExp(`import\\s+(\\w+)\\s+from\\s+["'][^"']*${asset.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`, "g"),
      ),
    ].map((m) => m[1]);

    // direkte String-Referenzen (z. B. src="/assets/foo.jpg")
    const directRefs = importVars.length === 0 && file.text.includes(asset);
    if (importVars.length === 0 && !directRefs) continue;

    usedAnywhere = true;

    const isCollective = collectiveFiles.includes(file.path);
    const hasCollectiveNotice = /datenschutz#ki-hinweis/.test(file.text);

    if (isCollective) {
      if (!hasCollectiveNotice) {
        problems.push(
          `${file.path}: Sammelhinweis erwartet, aber kein Link auf /datenschutz#ki-hinweis gefunden (Asset ${asset}).`,
        );
      } else {
        checked.push(`${asset} → ${file.path} (Sammelhinweis)`);
      }
      continue;
    }

    const usageLines = [];
    lines.forEach((line, i) => {
      const usesVar = importVars.some((v) => new RegExp(`(src|image|img|url)\\s*[=:]\\s*[{"']?${v}\\b`).test(line));
      const usesPath = directRefs && line.includes(asset) && !/^\s*import\s/.test(line);
      if (usesVar || usesPath) usageLines.push(i);
    });

    if (usageLines.length === 0) continue;

    for (const idx of usageLines) {
      const window = lines.slice(idx, idx + LOOKAHEAD + 1).join("\n");
      if (/<AiBadge\b/.test(window)) {
        checked.push(`${asset} → ${file.path}:${idx + 1} (Sternchen)`);
      } else {
        problems.push(
          `${file.path}:${idx + 1}: KI-Personenbild "${asset}" wird eingebunden, aber innerhalb der nächsten ${LOOKAHEAD} Zeilen fehlt <AiBadge /> (Sternchen-Kennzeichnung).`,
        );
      }
    }
  }

  if (!usedAnywhere) {
    problems.push(
      `Asset "${asset}" ist in der Registry eingetragen, wird aber nirgends im Code verwendet. Bitte Registry aufräumen.`,
    );
  }
}

if (problems.length > 0) {
  fail(problems.map((p) => `  • ${p}`).join("\n"));
}

console.log(
  `✅ KI-Kennzeichnung geprüft (EU AI Act, Art. 50): ${checked.length} Einbindung(en) korrekt gekennzeichnet.`,
);
for (const c of checked) console.log(`   • ${c}`);
