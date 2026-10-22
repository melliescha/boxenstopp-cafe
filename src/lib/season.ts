// Saisonale Konfiguration. Alles beginnt und endet automatisch (Monat 0-indexiert).
export const season = {
  autumnEnd: new Date(2026, 10, 30, 23, 59), // Herbstlook bis 30.11.2026
  halloweenEnd: new Date(2026, 10, 1), // Halloween-Hinweis bis 31.10.2026
  closedDay: new Date(2026, 9, 31), // 31.10.2026 geschlossen
  closedLabel: "31. Oktober",
  winterStart: new Date(2026, 11, 1), // Winter-Wonderland-Look ab 01.12.2026
  winterEnd: new Date(2027, 0, 6, 23, 59), // ... bis 06.01.2027 (Heilige Drei Könige)
};

export const isAutumnActive = (now: Date = new Date()) => now <= season.autumnEnd;
export const isHalloweenActive = (now: Date = new Date()) => now < season.halloweenEnd;
export const isWinterActive = (now: Date = new Date()) => now >= season.winterStart && now <= season.winterEnd;
