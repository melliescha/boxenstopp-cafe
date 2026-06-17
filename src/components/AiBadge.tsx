import { Link } from "react-router-dom";

interface AiBadgeProps {
  /** "overlay" = klein auf dem Bild (Hero), "caption" = kleines Chip unter dem Bild */
  variant?: "overlay" | "caption";
  className?: string;
}

/**
 * Dezenter KI-Hinweis gem. Art. 50 EU AI Act (VO 2024/1689).
 * Kleines "KI"-Chip, klickbar → Datenschutzerklärung mit Erklärung.
 */
const AiBadge = ({ variant = "caption", className = "" }: AiBadgeProps) => {
  const title =
    "KI-generiertes oder KI-bearbeitetes Bild – klick für mehr Infos in der Datenschutzerklärung";

  if (variant === "overlay") {
    return (
      <Link
        to="/datenschutz"
        title={title}
        aria-label={title}
        className={`absolute bottom-2 right-2 z-20 inline-flex items-center justify-center rounded-full text-[10px] font-semibold tracking-wider backdrop-blur-sm hover:scale-110 transition-transform ${className}`}
        style={{
          width: 24,
          height: 24,
          backgroundColor: "rgba(0,0,0,0.55)",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.5)",
        }}
      >
        KI
      </Link>
    );
  }

  return (
    <div className={`mt-2 flex justify-end ${className}`}>
      <Link
        to="/datenschutz"
        title={title}
        aria-label={title}
        className="inline-flex items-center justify-center rounded-full text-[10px] font-semibold tracking-wider hover:opacity-80 transition-opacity"
        style={{
          width: 22,
          height: 22,
          backgroundColor: "#9E7C4E",
          color: "#fff",
        }}
      >
        KI
      </Link>
    </div>
  );
};

export default AiBadge;
