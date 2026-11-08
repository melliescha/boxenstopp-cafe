// Saisonale Konfiguration. Alles beginnt und endet automatisch (Monat 0-indexiert).
export const season = {
  autumnEnd: new Date(2026, 10, 7, 23, 59), // Herbstlook früh beendet (07.11.2026)
  halloweenEnd: new Date(2026, 10, 1), // Halloween-Hinweis bis 31.10.2026
  closedDay: new Date(2026, 9, 31), // 31.10.2026 geschlossen
  closedLabel: "31. Oktober",
  winterStart: new Date(2026, 10, 8), // Winter-Wonderland-Look ab 08.11.2026
  winterEnd: new Date(2027, 0, 6, 23, 59), // ... bis 06.01.2027 (Heilige Drei Könige)
};

// Winterpause: geschlossen vom 24.12.2026 bis einschließlich 10.01.2027.
// Hinweise verschwinden automatisch ab dem Wiedereröffnungstag.
export const winterBreak = {
  start: new Date(2026, 11, 24),
  end: new Date(2027, 0, 10, 23, 59),
  reopenDate: new Date(2027, 0, 11),
  startLabel: "24.12.2026",
  endLabel: "10.01.2027",
  reopenLabel: "11.01.2027",
};

export const isAutumnActive = (now: Date = new Date()) => now <= season.autumnEnd;
export const isHalloweenActive = (now: Date = new Date()) => now < season.halloweenEnd;
export const isWinterActive = (now: Date = new Date()) => now >= season.winterStart && now <= season.winterEnd;
export const isWinterBreakActive = (now: Date = new Date()) => now >= winterBreak.start && now <= winterBreak.end;
// Banner oben ersetzt ab sofort den Standard-Hinweis und läuft bis zur Wiedereröffnung.
export const isWinterBreakAnnounced = (now: Date = new Date()) => now < winterBreak.reopenDate;
