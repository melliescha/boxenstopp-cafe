// Saisonale Konfiguration. Alles verschwindet automatisch nach den Enddaten (Monat 0-indexiert).
export const season = {
  autumnEnd: new Date(2026, 10, 30, 23, 59), // Herbstlook bis 30.11.2026
  halloweenEnd: new Date(2026, 10, 1), // Halloween-Hinweis bis 31.10.2026
  closedDay: new Date(2026, 9, 31), // 31.10.2026 geschlossen
  closedLabel: "31. Oktober",
};

export const isAutumnActive = (now: Date = new Date()) => now <= season.autumnEnd;
export const isHalloweenActive = (now: Date = new Date()) => now < season.halloweenEnd;
