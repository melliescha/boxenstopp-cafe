import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    setVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  };

  const acceptNecessary = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  };

  const saveCustom = () => {
    saveConsent(preferences);
  };

  if (!visible) return null;

  return (
    <>
      {/* Settings Overlay */}
      {showSettings && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl max-w-lg w-full p-6 shadow-2xl relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setShowSettings(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              aria-label="Schließen"
            >
              <X size={20} />
            </button>
            <h3 className="font-serif text-xl font-bold text-foreground mb-4">Cookie-Einstellungen</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Hier kannst du auswählen, welche Cookies du zulassen möchtest.
            </p>

            <div className="space-y-4">
              {/* Necessary */}
              <div className="flex items-start justify-between gap-4 p-3 bg-secondary/50 rounded-lg">
                <div>
                  <p className="font-medium text-foreground text-sm">Notwendig</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Diese Cookies sind für die Funktion der Website erforderlich und können nicht deaktiviert werden.
                  </p>
                </div>
                <input type="checkbox" checked disabled className="mt-1 accent-bronze" />
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4 p-3 bg-secondary/50 rounded-lg">
                <div>
                  <p className="font-medium text-foreground text-sm">Analyse</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Helfen uns zu verstehen, wie Besucher unsere Website nutzen.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="mt-1 accent-bronze"
                />
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4 p-3 bg-secondary/50 rounded-lg">
                <div>
                  <p className="font-medium text-foreground text-sm">Marketing</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Werden verwendet, um Werbung relevanter für dich zu gestalten.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="mt-1 accent-bronze"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={saveCustom}
                className="flex-1 bg-accent text-accent-foreground px-4 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Auswahl speichern
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Banner */}
      <div className="cookie-banner fixed bottom-0 left-0 right-0 z-50 rounded-t-xl shadow-2xl"
        style={{ backgroundColor: "hsl(210, 68%, 27%, 0.97)" }}
      >
        <div className="container mx-auto px-6 py-5">
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#fef4ec" }}>
            Wir nutzen Cookies, um dir die bestmögliche Erfahrung auf unserer Website zu bieten.
            Manche Cookies sind für die Funktion der Seite notwendig, andere helfen uns, die Website zu verbessern.{" "}
            <a href="/datenschutz" className="underline" style={{ color: "#b8943e" }}>
              Mehr erfahren
            </a>
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={acceptAll}
              className="px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#b8943e", color: "#ffffff" }}
            >
              Alle akzeptieren
            </button>
            <button
              onClick={acceptNecessary}
              className="px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity border"
              style={{ borderColor: "#fef4ec", color: "#fef4ec", backgroundColor: "transparent" }}
            >
              Nur notwendige
            </button>
            <button
              onClick={() => setShowSettings(true)}
              className="px-4 py-2.5 text-sm font-medium hover:underline transition-all"
              style={{ color: "#fef4ec" }}
            >
              Einstellungen
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
