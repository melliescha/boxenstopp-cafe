import type { ReactNode } from "react";
import { isAutumnActive, isWinterActive } from "@/lib/season";

type MarkProps = { className?: string };

/** Kürbis als feine Linienzeichnung, ohne Füllung. */
export const PumpkinMark = ({ className = "h-5 w-5" }: MarkProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.1}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 7C8.4 6.2 4.6 8.6 4.4 12.8c-.2 4.1 3 7.6 7.6 7.6s7.8-3.5 7.6-7.6C19.4 8.6 15.6 6.2 12 7Z" />
    <path d="M9.2 7.7c-1.3 3.7-1.3 8.5 0 12" />
    <path d="M14.8 7.7c1.3 3.7 1.3 8.5 0 12" />
    <path d="M12 7c.2-1.4-.2-2.8-1.2-3.8" />
    <path d="M12.7 6c1.7-1.1 3.6-.2 3.1 1.5-.3.9-1.4.9-1.7.1" />
  </svg>
);

/** Längliches Blatt mit Mittelrippe und Seitenadern. */
export const LeafMark = ({ className = "h-5 w-5" }: MarkProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.3}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 2.6c-5 4.5-6 10.3 0 17.9 6-7.6 5-13.4 0-17.9Z" />
    <path d="M12 5.2v13.6" />
    <path d="M12 9.4 8.7 11.9M12 9.4l3.3 2.5M12 13.9l-3 2.2M12 13.9l3 2.2" />
  </svg>
);

/** Schneeflocke als feine Linienzeichnung mit sechs Armen. */
export const SnowflakeMark = ({ className = "h-5 w-5" }: MarkProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 2.6v18.8" />
    <path d="M3.9 7.3 20.1 16.7" />
    <path d="M20.1 7.3 3.9 16.7" />
    <path d="M12 7.1 9.7 5.2M12 7.1l2.3-1.9M12 16.9 9.7 18.8M12 16.9l2.3 1.9" />
    <path d="M8.1 9.6 7.6 7.1M8.1 9.6 5.7 9M15.9 14.4l.5 2.5M15.9 14.4l2.4.6" />
    <path d="M15.9 9.6l2.4-.6M15.9 9.6l.5-2.5M8.1 14.4l-2.4.6M8.1 14.4l-.5 2.5" />
  </svg>
);

/** Stern als feine Linienzeichnung. */
export const StarMark = ({ className = "h-5 w-5" }: MarkProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 3.2 14.5 9.1 20.8 9.5 15.9 13.5 17.5 19.6 12 16.2 6.5 19.6 8.1 13.5 3.2 9.5 9.5 9.1Z" />
  </svg>
);

type DriftSpec = {
  left: string;
  top: number;
  size: number;
  duration: number;
  delay: number;
  sway: number;
  drift: number;
  spin: number;
  tone: string;
  shape: "leaf" | "flake" | "star" | "dot";
};

/** Herbst: fallende Blätter. */
const LEAVES: DriftSpec[] = [
  { left: "4%", top: -14, size: 34, duration: 24, delay: -3, sway: 4.6, drift: 70, spin: 220, tone: "text-warm-gold/70", shape: "leaf" },
  { left: "15%", top: -26, size: 22, duration: 19, delay: -11, sway: 3.4, drift: -50, spin: -180, tone: "text-bronze/65", shape: "leaf" },
  { left: "27%", top: -8, size: 40, duration: 28, delay: -18, sway: 5.2, drift: 95, spin: 260, tone: "text-warm-gold/55", shape: "leaf" },
  { left: "38%", top: -20, size: 20, duration: 17, delay: -6, sway: 3.1, drift: 40, spin: 150, tone: "text-bronze/70", shape: "leaf" },
  { left: "50%", top: -30, size: 30, duration: 22, delay: -14, sway: 4.1, drift: -80, spin: -240, tone: "text-warm-gold/65", shape: "leaf" },
  { left: "62%", top: -10, size: 24, duration: 20, delay: -2, sway: 3.7, drift: 60, spin: 190, tone: "text-bronze/60", shape: "leaf" },
  { left: "74%", top: -22, size: 36, duration: 26, delay: -20, sway: 4.9, drift: -65, spin: -200, tone: "text-warm-gold/60", shape: "leaf" },
  { left: "85%", top: -16, size: 26, duration: 21, delay: -9, sway: 3.9, drift: 45, spin: 230, tone: "text-bronze/70", shape: "leaf" },
  { left: "21%", top: -34, size: 28, duration: 25, delay: -22, sway: 4.4, drift: 85, spin: 200, tone: "text-warm-gold/60", shape: "leaf" },
  { left: "69%", top: -28, size: 20, duration: 18, delay: -16, sway: 3.3, drift: -55, spin: -160, tone: "text-warm-gold/70", shape: "leaf" },
];

/** Winter: Schnee mit einzelnen Sternen und Flocken. */
const SNOW: DriftSpec[] = [
  { left: "6%", top: -10, size: 8, duration: 26, delay: -4, sway: 5.0, drift: 50, spin: 0, tone: "text-primary/35", shape: "dot" },
  { left: "14%", top: -22, size: 18, duration: 30, delay: -12, sway: 6.2, drift: -40, spin: 90, tone: "text-primary/45", shape: "flake" },
  { left: "23%", top: -6, size: 5, duration: 22, delay: -18, sway: 4.4, drift: 60, spin: 0, tone: "text-primary/30", shape: "dot" },
  { left: "31%", top: -28, size: 14, duration: 34, delay: -8, sway: 5.6, drift: 70, spin: -120, tone: "text-warm-gold/55", shape: "star" },
  { left: "40%", top: -14, size: 7, duration: 24, delay: -2, sway: 4.8, drift: -55, spin: 0, tone: "text-primary/40", shape: "dot" },
  { left: "48%", top: -30, size: 20, duration: 32, delay: -20, sway: 6.6, drift: 45, spin: 140, tone: "text-primary/40", shape: "flake" },
  { left: "56%", top: -8, size: 6, duration: 21, delay: -14, sway: 4.2, drift: 65, spin: 0, tone: "text-primary/35", shape: "dot" },
  { left: "63%", top: -20, size: 12, duration: 28, delay: -6, sway: 5.4, drift: -60, spin: 100, tone: "text-warm-gold/50", shape: "star" },
  { left: "71%", top: -26, size: 9, duration: 25, delay: -16, sway: 4.6, drift: 55, spin: 0, tone: "text-primary/30", shape: "dot" },
  { left: "78%", top: -12, size: 17, duration: 31, delay: -10, sway: 6.0, drift: -45, spin: -90, tone: "text-primary/45", shape: "flake" },
  { left: "86%", top: -24, size: 6, duration: 23, delay: -22, sway: 4.0, drift: 40, spin: 0, tone: "text-primary/35", shape: "dot" },
  { left: "92%", top: -16, size: 13, duration: 29, delay: -5, sway: 5.8, drift: -70, spin: 130, tone: "text-warm-gold/45", shape: "star" },
  { left: "36%", top: -34, size: 10, duration: 27, delay: -19, sway: 5.2, drift: 50, spin: 0, tone: "text-primary/30", shape: "dot" },
];

const DriftShape = ({ shape }: { shape: DriftSpec["shape"] }) => {
  if (shape === "leaf") return <LeafMark className="h-full w-full" />;
  if (shape === "flake") return <SnowflakeMark className="h-full w-full" />;
  if (shape === "star") return <StarMark className="h-full w-full" />;
  return <span className="block h-full w-full rounded-full bg-current" />;
};

/**
 * Langsam fallende Blätter (Herbst) bzw. Schnee (Winter) als feine Linienzeichnung.
 * Rein dekorativ (aria-hidden), ohne Klickfläche und ohne eigene Schriftarten.
 * Bei reduzierter Bewegung bleiben die Motive ruhig stehen.
 * tone="light" für dunkle Flächen, tone="autumn" für helle Flächen.
 * winterOnly lässt im Herbst nichts fallen, der Schnee im Winter bleibt.
 */
export const FallingSeason = ({
  className = "",
  tone = "autumn",
  winterOnly = false,
}: MarkProps & { tone?: "autumn" | "light"; winterOnly?: boolean }) => {
  const winter = isWinterActive();
  if (!winter && (!isAutumnActive() || winterOnly)) return null;

  const specs = winter ? SNOW : LEAVES;
  const darkTone = winter ? "text-primary-foreground/60" : "text-primary-foreground/45";

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {specs.map((item, i) => (
        <span
          key={i}
          className={`season-drift ${tone === "light" ? darkTone : item.tone}`}
          style={{
            left: item.left,
            top: `${item.top}%`,
            width: `${item.size}px`,
            height: `${item.size}px`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
            ["--drift" as string]: `${item.drift}px`,
            ["--spin" as string]: `${item.spin}deg`,
          }}
        >
          <span className="season-sway" style={{ animationDuration: `${item.sway}s` }}>
            <DriftShape shape={item.shape} />
          </span>
        </span>
      ))}
    </div>
  );
};

/** Kürbis und Blatt (Herbst) bzw. Stern und Flocke (Winter) nebeneinander. */
export const SeasonPair = ({ className = "" }: MarkProps) => {
  if (!isWinterActive() && !isAutumnActive()) return null;

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`} aria-hidden="true">
      {isWinterActive() ? (
        <>
          <StarMark className="h-5 w-5" />
          <SnowflakeMark className="h-4 w-4" />
        </>
      ) : (
        <>
          <PumpkinMark className="h-5 w-5" />
          <LeafMark className="h-4 w-4" />
        </>
      )}
    </span>
  );
};

/** Einzelnes Motiv in einer Ecke: Kürbis im Herbst, Stern im Winter. */
export const SeasonCornerMark = ({ className = "" }: MarkProps) => {
  if (isWinterActive()) return <StarMark className={className} />;
  if (isAutumnActive()) return <PumpkinMark className={className} />;
  return null;
};

/**
 * Kleine Motive am Rand eines Hinweisbanners: Kürbis und Blatt im Herbst,
 * Stern und Flocke im Winter. Außerhalb der Saison erscheint nichts.
 */
export const BannerMotifs = ({ tone = "text-warm-gold/80" }: { tone?: string }) => {
  if (!isWinterActive() && !isAutumnActive()) return null;

  const base = "pointer-events-none absolute top-1/2 hidden -translate-y-1/2 sm:block";

  return (
    <>
      {isWinterActive() ? (
        <StarMark className={`${base} left-4 h-5 w-5 ${tone}`} />
      ) : (
        <PumpkinMark className={`${base} left-4 h-5 w-5 ${tone}`} />
      )}
      {isWinterActive() ? (
        <SnowflakeMark className={`${base} right-14 h-4 w-4 ${tone} opacity-80`} />
      ) : (
        <LeafMark className={`${base} right-14 h-4 w-4 ${tone} opacity-80`} />
      )}
    </>
  );
};

/**
 * Section-Label mit kleinem Motiv davor: Blatt im Herbst, Flocke im Winter.
 * Außerhalb der Saison bleibt es ein normales Label ohne Motiv.
 */
export const SeasonalLabel = ({
  children,
  className = "",
  center = false,
  tone = "text-bronze",
}: {
  children: ReactNode;
  className?: string;
  center?: boolean;
  tone?: string;
}) => (
  <p className={`flex items-center gap-2 ${center ? "justify-center" : ""} ${className}`}>
    {isWinterActive() && <SnowflakeMark className={`h-3.5 w-3.5 shrink-0 ${tone} opacity-70`} />}
    {isAutumnActive() && !isWinterActive() && <LeafMark className={`h-3.5 w-3.5 shrink-0 ${tone} opacity-70`} />}
    <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${tone}`}>{children}</span>
  </p>
);
