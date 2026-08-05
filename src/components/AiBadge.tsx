import { Link } from "react-router-dom";

interface AiBadgeProps {
  /** "overlay" = klein auf dem Bild (Hero), "caption" = kleines AI-Logo unter dem Bild */
  variant?: "overlay" | "caption";
  className?: string;
}

/**
 * Minimaler KI-Hinweis gem. Art. 50 EU AI Act (VO 2024/1689).
 * Kleines „AI"-Rundlogo, klickbar → ausführlicher KI-Hinweis in der Datenschutzerklärung.
 */
const AiBadge = ({ variant = "caption", className = "" }: AiBadgeProps) => {
  const title =
    "Dieses Bild wurde mit KI erstellt oder bearbeitet, klick für den ausführlichen KI-Hinweis";

  if (variant === "overlay") {
    return (
      <Link
        to="/datenschutz#ki-hinweis"
        title={title}
        aria-label={title}
        className={`absolute bottom-2 right-3 z-20 inline-flex items-center justify-center rounded-full font-bold hover:scale-125 transition-transform ${className}`}
        style={{
          width: 22,
          height: 22,
          fontSize: 9,
          letterSpacing: "0.02em",
          color: "#fff",
          backgroundColor: "rgba(0,0,0,0.55)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.7)",
          border: "1px solid rgba(255,255,255,0.35)",
        }}
      >
        AI
      </Link>
    );
  }

  return (
    <div className={`mt-1 flex justify-end pr-2 ${className}`}>
      <Link
        to="/datenschutz#ki-hinweis"
        title={title}
        aria-label={title}
        className="inline-flex items-center justify-center rounded-full font-bold hover:opacity-70 transition-opacity"
        style={{
          width: 22,
          height: 22,
          fontSize: 9,
          letterSpacing: "0.02em",
          color: "#fff",
          backgroundColor: "#9E7C4E",
          border: "1px solid rgba(158,124,78,0.4)",
        }}
      >
        AI
      </Link>
    </div>
  );
};

export default AiBadge;
