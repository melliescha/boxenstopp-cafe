import { Link } from "react-router-dom";

interface AiBadgeProps {
  /** Beide Varianten rendern das Label direkt als Overlay auf dem Bild. */
  variant?: "overlay" | "caption";
  className?: string;
}

/**
 * Minimaler KI-Hinweis gem. Art. 50 EU AI Act (VO 2024/1689).
 * Kleines „KI generiert"-Label, immer direkt auf dem Bild, 60 % Deckkraft
 * mit einem Backdrop-Blur-Hintergrund, der sich dezent an jedes Bild anpasst.
 * Klickbar → ausführlicher KI-Hinweis in der Datenschutzerklärung.
 */
const AiBadge = ({ variant: _variant = "overlay", className = "" }: AiBadgeProps) => {
  const title =
    "Dieses Bild wurde mit KI erstellt oder bearbeitet, klick für den ausführlichen KI-Hinweis";
  const label = "KI generiert";

  return (
    <Link
      to="/datenschutz#ki-hinweis"
      title={title}
      aria-label={title}
      className={`absolute bottom-2 right-2 z-20 inline-flex items-center justify-center rounded-full font-semibold backdrop-blur-md hover:!opacity-100 transition-opacity ${className}`}
      style={{
        padding: "3px 9px",
        fontSize: 10,
        letterSpacing: "0.04em",
        lineHeight: 1.2,
        color: "#fff",
        backgroundColor: "rgba(20, 20, 20, 0.45)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.5)",
        border: "1px solid rgba(255,255,255,0.25)",
        opacity: 0.6,
      }}
    >
      {label}
    </Link>
  );
};

export default AiBadge;
