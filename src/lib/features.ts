// Zentrale Feature-Konfiguration. Ändere das Datum, um die Sichtbarkeit zu steuern.
export const shower = {
  // Ab diesem Datum wird die Dusch-Info auf der Website angezeigt.
  // Standard: 14 Tage ab dem aktuellen Stand (24.07.2026). Anpassbar.
  visibleFrom: new Date(2026, 6, 24),
  price: "3,00 €",
  kidsAge: 10,
};

export const isShowerFeatureVisible = (now: Date = new Date()) =>
  now >= shower.visibleFrom;
