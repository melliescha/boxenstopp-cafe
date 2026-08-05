import { useCallback, useEffect, useState } from "react";
import {
  CONSENT_VERSION,
  DEFAULT_DECISIONS,
  OPEN_SETTINGS_EVENT,
  readConsent,
  saveConsent,
  type ConsentDecisions,
} from "@/lib/consent";

const NAVY = "hsl(210, 68%, 27%)";
const CREAM = "#fef4ec";
const BRONZE = "#b8943e";

/**
 * Cookie-Banner mit echtem Opt-in.
 *
 * - Optionale Kategorien (externe Inhalte, Analytics) sind vorab AUS.
 * - „Nur notwendige“ und „Alle akzeptieren“ sind gleichwertig gestaltet.
 * - Die Entscheidung wird mit Zeitstempel, Version und Methode gespeichert
 *   (Nachweis nach Art. 7 Abs. 1 DSGVO), rein lokal, ohne Serverübertragung.
 * - Widerruf jederzeit über „Cookie-Einstellungen“ im Footer.
 */
const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [draft, setDraft] = useState<ConsentDecisions>(DEFAULT_DECISIONS);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      setVisible(true);
    } else {
      setDraft({ ...existing, necessary: true });
    }
    const open = () => {
      const current = readConsent();
      if (current) setDraft({ ...current, necessary: true });
      setShowSettings(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    setShowSettings(false);
  }, []);

  const acceptAll = () => {
    saveConsent({ externalMedia: true, analytics: true }, "accept_all");
    close();
  };

  const rejectAll = () => {
    saveConsent({ externalMedia: false, analytics: false }, "reject_all");
    close();
  };

  const saveSelection = () => {
    saveConsent({ externalMedia: draft.externalMedia, analytics: draft.analytics }, "custom");
    close();
  };

  if (!visible) return null;

  const toggle = (key: "externalMedia" | "analytics") =>
    setDraft((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 rounded-t-xl shadow-2xl max-h-[85vh] overflow-y-auto"
      style={{ backgroundColor: "hsl(210, 68%, 27%, 0.98)" }}
      role="dialog"
      aria-modal="true"
      aria-label="Datenschutz-Einstellungen"
    >
      <div className="container mx-auto px-6 py-5 max-w-3xl">
        <h2 className="font-serif text-lg font-bold mb-2" style={{ color: CREAM }}>
          Datenschutz
        </h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: CREAM }}>
          Externe Inhalte (Google Maps) und Statistik laden wir nur mit Ihrer Einwilligung.
          Widerruf jederzeit im Footer.{" "}
          <a href="/datenschutz" className="underline" style={{ color: BRONZE }}>
            Datenschutzerklärung
          </a>
        </p>


        {showSettings && (
          <div className="space-y-3 mb-5">
            <div
              className="rounded-lg p-4"
              style={{ backgroundColor: "rgba(254,244,236,0.08)", border: "1px solid rgba(254,244,236,0.2)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold" style={{ color: CREAM }}>
                    Technisch notwendig
                  </p>
                  <p className="text-xs mt-1" style={{ color: "rgba(254,244,236,0.75)" }}>
                    Speichert nur Ihre Datenschutz-Entscheidung im Browser. Ohne diese Speicherung
                    würde der Hinweis bei jedem Besuch erscheinen (§ 25 Abs. 2 Nr. 2 TDDDG).
                  </p>
                </div>
                <span className="text-xs whitespace-nowrap mt-1" style={{ color: BRONZE }}>
                  Immer aktiv
                </span>
              </div>
            </div>

            <label
              className="block rounded-lg p-4 cursor-pointer"
              style={{ backgroundColor: "rgba(254,244,236,0.08)", border: "1px solid rgba(254,244,236,0.2)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold" style={{ color: CREAM }}>
                    Externe Inhalte (Google Maps)
                  </p>
                  <p className="text-xs mt-1" style={{ color: "rgba(254,244,236,0.75)" }}>
                    Lädt die Karte auf der Kontakt-Seite. Dabei wird Ihre IP-Adresse an Google
                    Ireland Ltd. übertragen (Drittlandtransfer USA, Art. 49 Abs. 1 lit. a DSGVO).
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={draft.externalMedia}
                  onChange={() => toggle("externalMedia")}
                  className="mt-1 w-5 h-5 shrink-0"
                  aria-label="Externe Inhalte erlauben"
                />
              </div>
            </label>

            <label
              className="block rounded-lg p-4 cursor-pointer"
              style={{ backgroundColor: "rgba(254,244,236,0.08)", border: "1px solid rgba(254,244,236,0.2)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold" style={{ color: CREAM }}>
                    Statistik / Reichweitenmessung
                  </p>
                  <p className="text-xs mt-1" style={{ color: "rgba(254,244,236,0.75)" }}>
                    Anonyme Auswertung der Seitennutzung. Derzeit ist kein Analyse-Dienst aktiv,
                    ohne Ihre Einwilligung wird auch künftig keiner geladen.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={draft.analytics}
                  onChange={() => toggle("analytics")}
                  className="mt-1 w-5 h-5 shrink-0"
                  aria-label="Statistik erlauben"
                />
              </div>
            </label>

            <p className="text-[11px]" style={{ color: "rgba(254,244,236,0.6)" }}>
              Einwilligungs-Version {CONSENT_VERSION} · Ihre Entscheidung wird mit Zeitstempel
              lokal in Ihrem Browser gespeichert und nicht an uns übertragen.
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-stretch gap-3">
          <button
            onClick={rejectAll}
            className="px-6 py-2.5 rounded-lg text-sm font-medium min-h-[44px] hover:opacity-90 transition-opacity"
            style={{ backgroundColor: CREAM, color: NAVY }}
          >
            Nur notwendige
          </button>
          <button
            onClick={acceptAll}
            className="px-6 py-2.5 rounded-lg text-sm font-medium min-h-[44px] hover:opacity-90 transition-opacity"
            style={{ backgroundColor: BRONZE, color: "#ffffff" }}
          >
            Alle akzeptieren
          </button>
          {showSettings ? (
            <button
              onClick={saveSelection}
              className="px-6 py-2.5 rounded-lg text-sm font-medium min-h-[44px] underline"
              style={{ color: CREAM }}
            >
              Auswahl speichern
            </button>
          ) : (
            <button
              onClick={() => setShowSettings(true)}
              className="px-6 py-2.5 rounded-lg text-sm font-medium min-h-[44px] underline"
              style={{ color: CREAM }}
            >
              Einstellungen
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
