/**
 * Registry aller KI-generierten oder KI-bearbeiteten Bilder, auf denen
 * realistisch aussehende Personen zu sehen sind.
 *
 * Grundlage: Art. 50 Abs. 4 der Verordnung (EU) 2024/1689 („EU AI Act").
 * Solche Bilder müssen sichtbar gekennzeichnet werden. Auf dieser Website
 * geschieht das über <AiBadge /> (klickbares Label „KI generiert" direkt im Bild).
 *
 * WICHTIG: Neue KI-Bilder mit Personen hier eintragen. Das Skript
 * `scripts/check-ai-badges.mjs` läuft bei jedem Build und bricht ab,
 * wenn ein Bild aus dieser Liste ohne Kennzeichnung eingebunden wird.
 */
export interface AiPersonImage {
  /** Dateiname bzw. Pfadfragment des Assets (wie im Import verwendet) */
  asset: string;
  /** Kurzbeschreibung für die Dokumentation */
  note: string;
}

export const AI_PERSON_IMAGES: AiPersonImage[] = [
  { asset: "hero-bistro.jpg", note: "Titelbild Startseite, KI-Motiv mit Personen im Innenraum" },
  { asset: "about-hero-family.jpg", note: "Hero Ueber uns, KI-Motiv mit Familienszene" },
  { asset: "about-cafe-interior.jpg", note: "Abschnitt Der Traum, KI-Motiv mit Personen" },
  { asset: "about-terrace-cyclists.jpg", note: "Abschnitt Warum Boxenstopp, KI-Motiv mit Radfahrern" },
];

/**
 * Dateien, in denen ein gut sichtbarer Sammelhinweis (Fußnote mit Link auf
 * /ki-transparenz) statt eines Badges pro Bild ausreicht.
 */
export const AI_COLLECTIVE_NOTICE_FILES: string[] = ["src/pages/Gallery.tsx"];
