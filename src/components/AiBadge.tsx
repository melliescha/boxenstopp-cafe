import { Link } from "react-router-dom";

interface AiBadgeProps {
  /** "overlay"/"caption": Label "KI generiert". "edited": nur Kreis mit "KI" (KI-bearbeitet). */
  variant?: "overlay" | "caption" | "edited";
  /** true = rendert ein <span> statt eines Links (fuer Bilder innerhalb von Buttons). */
  asText?: boolean;
  className?: string;
}

/**
 * Minimaler KI-Hinweis gem. Art. 50 EU AI Act (VO 2024/1689).
 * Kleines „KI generiert"-Label, immer direkt auf dem Bild, 60 % Deckkraft
 * mit einem Backdrop-Blur-Hintergrund, der sich dezent an jedes Bild anpasst.
 * Klickbar → ausführlicher KI-Hinweis in der Datenschutzerklärung.
 */
const AiBadge = ({ variant = "overlay", asText = false, className = "" }: AiBadgeProps) => {
  const edited = variant === "edited";
  const title = edited
    ? "Dieses Bild wurde mit KI bearbeitet, klick für den ausführlichen KI-Hinweis"
    : "Dieses Bild wurde mit KI erstellt oder bearbeitet, klick für den ausführlichen KI-Hinweis";
  const label = edited ? "KI" : "KI generiert";

  const sharedClassName = {`absolute bottom-2 right-2 z-20 inline-flex items-center justify-center rounded-full font-semibold backdrop-blur-md hover:!opacity-100 transition-opacity ${className}`;
  const sharedStyle = {
        padding: edited ? 0 : "3px 9px",
        width: edited ? 26 : undefined,
        height: edited ? 26 : undefined,
        fontSize: 10,
        letterSpacing: "0.04em",
        lineHeight: 1.2,
        color: "#fff",
        backgroundColor: "rgba(20, 20, 20, 0.45)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.5)",
        border: "1px solid rgba(255,255,255,0.25)",
    opacity: 0.6,
  } as const;

  if (asText) {
    return (
      <span className={sharedClassName} style={sharedStyle} title={title} aria-label={title}>
        {label}
      </span>
    );
  }

  return (
    <Link
      to="/datenschutz#ki-hinweis"
      title={title}
      aria-label={title}
      className={sharedClassName}
      style={sharedStyle}
    >
      {label}
    </Link>
  );
};

export default AiBadge;
