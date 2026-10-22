# AGENTS.md

Regeln für dieses Projekt. Werte und Vorlieben des Nutzers stehen im Projektgedächtnis (mem://), nicht hier.

## Rules
- Saisonale Looks sind datengetrieben: Zeitfenster in `src/lib/season.ts`, Motive in `src/components/SeasonMotifs.tsx`. Komponenten enthalten keine harten Daten, damit jeder Look automatisch beginnt und endet.
- Die Saisonklasse wird in `Layout.tsx` auf `document.documentElement` gesetzt, nicht auf einen inneren Wrapper: `body` liest das `--background`-Token und braucht sonst die Überschreibung nicht.
- Saison-Deko ist Inline-SVG in `currentColor` mit `aria-hidden` und respektiert `prefers-reduced-motion`. Warum: keine zusätzlichen Bilddateien, keine Emoji-Deko, ruhigere Seite für bewegungsempfindliche Nutzer.
- Keine externen Schriften und keine Drittanbieter-Skripte; nur lokale Schriften unter `public/fonts`. Kartenansichten erst nach bewusster Zustimmung. Warum: DSGVO-Konformität ist harte Anforderung.
- Titel und Kurzbeschreibungen einer Seite müssen in `scripts/prerender.mjs` und `public/sitemap.xml` übereinstimmen, sonst sehen Crawler ohne JavaScript andere Texte als die App.
- Bilder mit Personen, die KI-generiert sind, brauchen ein Kennzeichen und einen Alt-Text mit „KI generiert:"-Präfix. `scripts/check-ai-badges.mjs` läuft vor jedem Build.
- Rechts- und Datenschutztexte nennen nur Tatsachen, die nachweisbar stimmen (Anbieter, Schriftarten, Speicherdauer, Nummerierungen).
