/**
 * DSGVO-/TDDDG-konforme Einwilligungsverwaltung.
 *
 * Grundsätze:
 * - Opt-in: Alle nicht notwendigen Kategorien sind standardmäßig AUS.
 *   Es wird nichts geladen und nichts gespeichert, bevor eine Entscheidung
 *   getroffen wurde (außer dem Einwilligungs-Datensatz selbst,
 *   § 25 Abs. 2 Nr. 2 TDDDG).
 * - Nachweisbarkeit (Art. 7 Abs. 1 DSGVO): Es werden Zeitpunkt, Version des
 *   Einwilligungstextes und die einzelnen Entscheidungen protokolliert,
 *   lokal im Browser des Nutzers, ohne Personenbezug und ohne Serverübertragung.
 * - Widerruf jederzeit gleich einfach möglich (Art. 7 Abs. 3 DSGVO):
 *   über „Cookie-Einstellungen“ im Footer.
 */

export const CONSENT_STORAGE_KEY = "boxenstopp-consent-v2";
/** Version des Einwilligungstextes/der Kategorien, bei Änderung neu abfragen. */
export const CONSENT_VERSION = 2;

export type ConsentCategory = "necessary" | "externalMedia" | "analytics";

export interface ConsentDecisions {
  /** Technisch notwendig, nicht abwählbar (Art. 6 Abs. 1 lit. f / § 25 Abs. 2 TDDDG). */
  necessary: true;
  /** Externe Inhalte wie Google Maps (2-Klick-Lösung). */
  externalMedia: boolean;
  /** Reichweitenmessung/Analytics, aktuell nicht im Einsatz. */
  analytics: boolean;
}

export interface ConsentRecord extends ConsentDecisions {
  version: number;
  /** ISO-Zeitstempel der Einwilligung/Ablehnung. */
  timestamp: string;
  /** Wie die Entscheidung zustande kam, für den Nachweis. */
  method: "accept_all" | "reject_all" | "custom" | "withdrawn";
  /** Historie aller Entscheidungen (Nachweis nach Art. 7 Abs. 1 DSGVO). */
  history: Array<{
    timestamp: string;
    method: ConsentRecord["method"];
    externalMedia: boolean;
    analytics: boolean;
    version: number;
  }>;
}

export const DEFAULT_DECISIONS: ConsentDecisions = {
  necessary: true,
  externalMedia: false,
  analytics: false,
};

const CONSENT_EVENT = "boxenstopp:consent-changed";

const isBrowser = () => typeof window !== "undefined";

export function readConsent(): ConsentRecord | null {
  if (!isBrowser()) return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed?.version !== CONSENT_VERSION) return null;
    return { ...parsed, necessary: true };
  } catch {
    return null;
  }
}

export function saveConsent(
  decisions: Partial<ConsentDecisions>,
  method: ConsentRecord["method"],
): ConsentRecord {
  const previous = readConsent();
  const entry = {
    timestamp: new Date().toISOString(),
    method,
    externalMedia: decisions.externalMedia ?? false,
    analytics: decisions.analytics ?? false,
    version: CONSENT_VERSION,
  };
  const record: ConsentRecord = {
    necessary: true,
    externalMedia: entry.externalMedia,
    analytics: entry.analytics,
    version: CONSENT_VERSION,
    timestamp: entry.timestamp,
    method,
    history: [...(previous?.history ?? []), entry].slice(-20),
  };
  if (isBrowser()) {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
    } catch {
      /* Speicher nicht verfügbar (z. B. Privatmodus), Einwilligung gilt nur für die Sitzung. */
    }
    window.dispatchEvent(new CustomEvent<ConsentRecord>(CONSENT_EVENT, { detail: record }));
  }
  return record;
}

/** Widerruf: alle optionalen Kategorien zurücksetzen (Art. 7 Abs. 3 DSGVO). */
export function withdrawConsent(): ConsentRecord {
  return saveConsent({ externalMedia: false, analytics: false }, "withdrawn");
}

export function hasConsent(category: ConsentCategory): boolean {
  if (category === "necessary") return true;
  const record = readConsent();
  return Boolean(record?.[category]);
}

export function onConsentChange(listener: (record: ConsentRecord) => void): () => void {
  if (!isBrowser()) return () => undefined;
  const handler = (event: Event) => listener((event as CustomEvent<ConsentRecord>).detail);
  window.addEventListener(CONSENT_EVENT, handler);
  return () => window.removeEventListener(CONSENT_EVENT, handler);
}

/** Öffnet die Einstellungen (z. B. aus dem Footer). */
export const OPEN_SETTINGS_EVENT = "boxenstopp:open-consent-settings";
export function openConsentSettings() {
  if (isBrowser()) window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
