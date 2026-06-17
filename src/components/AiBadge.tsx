import { Link } from "react-router-dom";

interface AiBadgeProps {
  /** "overlay" = absolut auf dem Bild (für Hero), "caption" = kleine Bildunterschrift */
  variant?: "overlay" | "caption";
  className?: string;
}

/**
 * Hinweis auf KI-generierte Bilder gemäß Art. 50 EU AI Act (VO 2024/1689).
 * Klein, dezent, aber klar lesbar und mit Link zur Datenschutzerklärung.
 */
const AiBadge = ({ variant = "caption", className = "" }: AiBadgeProps) => {
  if (variant === "overlay") {
    return (
      <div
        className={`absolute bottom-2 right-2 z-20 rounded-md px-2 py-1 text-[11px] leading-none backdrop-blur-sm ${className}`}
        style={{ backgroundColor: "rgba(0,0,0,0.55)", color: "#fff" }}
      >
        <Link to="/datenschutz" className="hover:underline" title="Hinweis zu KI-generierten Bildern">
          * KI-generiertes Bild
        </Link>
      </div>
    );
  }

  return (
    <p
      className={`mt-2 text-[11px] italic text-muted-foreground text-right ${className}`}
    >
      <Link
        to="/datenschutz"
        className="hover:underline"
        title="Hinweis zu KI-generierten Bildern"
      >
        * Bild KI-generiert
      </Link>
    </p>
  );
};

export default AiBadge;
