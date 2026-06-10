// Zentrale Urlaubs-Konfiguration. Banner/Hinweise/Popup verschwinden automatisch ab vacationEnd.
export const vacation = {
  startLabel: "16.06.2026",
  endLabel: "23.06.2026",
  reopenLabel: "24.06.2026",
  // Wieder geöffnet ab diesem Datum (Monat 0-indexiert: 5 = Juni)
  reopenDate: new Date(2026, 5, 24),
};

export const isVacationActive = (now: Date = new Date()) => now < vacation.reopenDate;
