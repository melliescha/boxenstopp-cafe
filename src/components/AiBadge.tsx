import { Link } from "react-router-dom";

interface AiBadgeProps {
  /** "overlay" = klein auf dem Bild (Hero), "caption" = kleines * unter dem Bild */
  variant?: "overlay" | "caption";
  className?: string;
}

/**
 * Minimaler KI-Hinweis gem. Art. 50 EU AI Act (VO 2024/1689).
 * Kleines Sternchen, klickbar → ausführlicher KI-Hinweis in der Datenschutzerklärung.
 */
const AiBadge = ({ variant = "caption", className = "" }: AiBadgeProps) => {
  const title =
    "Dieses Bild wurde mit KI erstellt oder bearbeitet – klick für den ausführlichen KI-Hinweis";

  if (variant === "overlay") {
    return (
      <Link
        to="/datenschutz#ki-hinweis"
        title={title}
        aria-label={title}
        className={`absolute bottom-2 right-3 z-20 inline-flex items-center justify-center text-lg leading-none font-bold hover:scale-125 transition-transform ${className}`}
        style={{
          color: "#fff",
          textShadow: "0 1px 3px rgba(0,0,0,0.7)",
          width: 20,
          height: 20,
        }}
      >
        *
      </Link>
    );
  }

  return (
    <div className={`mt-1 flex justify-end pr-2 ${className}`}>
      <Link
        to="/datenschutz#ki-hinweis"
        title={title}
        aria-label={title}
        className="inline-flex items-center justify-center text-base leading-none font-bold hover:opacity-70 transition-opacity"
        style={{ color: "#9E7C4E" }}
      >
        *
      </Link>
    </div>
  );
};

export default AiBadge;
