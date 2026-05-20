import { useState, useEffect } from "react";

/**
 * Reiner Hinweis-Banner.
 *
 * Diese Website setzt KEINE Tracking-, Analyse- oder Marketing-Cookies.
 * Es wird ausschließlich ein technisch notwendiger Eintrag im localStorage
 * gespeichert ("cookie-consent"), damit dieser Hinweis nach Bestätigung
 * nicht erneut angezeigt wird (§ 25 Abs. 2 Nr. 2 TDDDG).
 *
 * Externe Inhalte (z. B. Google Maps auf der Kontakt-Seite) werden
 * ausschließlich per 2-Klick-Lösung mit aktiver Einwilligung geladen.
 */
const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const dismiss = () => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({ necessary: true, acknowledgedAt: new Date().toISOString() }),
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-banner fixed bottom-0 left-0 right-0 z-50 rounded-t-xl shadow-2xl"
      style={{ backgroundColor: "hsl(210, 68%, 27%, 0.97)" }}
      role="dialog"
      aria-label="Datenschutz-Hinweis"
    >
      <div className="container mx-auto px-6 py-5">
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#fef4ec" }}>
          Diese Website verwendet <strong>keine Tracking-, Analyse- oder Marketing-Cookies</strong>.
          Schriftarten und Bilder werden lokal ausgeliefert. Externe Inhalte (z. B. Google Maps)
          werden ausschließlich nach Ihrem aktiven Klick geladen. Mehr erfahren Sie in unserer{" "}
          <a href="/datenschutz" className="underline" style={{ color: "#b8943e" }}>
            Datenschutzerklärung
          </a>
          .
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={dismiss}
            className="px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#b8943e", color: "#ffffff" }}
          >
            Verstanden
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
