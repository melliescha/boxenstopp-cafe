import type { ReactNode } from "react";
import { isAutumnActive } from "@/lib/season";

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
    strokeWidth={1.1}
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

/** Handförmiges Blatt (Ahorn), als Linienzeichnung. */
export const MapleMark = ({ className = "h-5 w-5" }: MarkProps) => (
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
    <path d="M12 2.4 13.8 6.6 17.6 4.6 16.4 9 21 8.4 17.6 11.6 21.4 13.4 15.8 14.2 17.4 18.6 13.4 15.8 13.2 20.4 12 17.8 10.8 20.4 10.6 15.8 6.6 18.6 8.2 14.2 2.6 13.4 6.4 11.6 3 8.4 7.6 9 6.4 4.6 10.2 6.6Z" />
    <path d="M12 17.8v3.4" />
  </svg>
);

type LeafSpec = {
  left: string;
  top: number;
  size: number;
  duration: number;
  delay: number;
  sway: number;
  drift: number;
  spin: number;
  tone: string;
  shape: "leaf" | "maple";
};

const LEAVES: LeafSpec[] = [
  { left: "5%", top: -14, size: 26, duration: 24, delay: -3, sway: 4.6, drift: 70, spin: 220, tone: "text-warm-gold/45", shape: "maple" },
  { left: "17%", top: -26, size: 18, duration: 19, delay: -11, sway: 3.4, drift: -50, spin: -180, tone: "text-bronze/40", shape: "leaf" },
  { left: "29%", top: -8, size: 30, duration: 28, delay: -18, sway: 5.2, drift: 95, spin: 260, tone: "text-warm-gold/30", shape: "leaf" },
  { left: "42%", top: -20, size: 15, duration: 17, delay: -6, sway: 3.1, drift: 40, spin: 150, tone: "text-bronze/35", shape: "maple" },
  { left: "55%", top: -30, size: 22, duration: 22, delay: -14, sway: 4.1, drift: -80, spin: -240, tone: "text-warm-gold/40", shape: "maple" },
  { left: "68%", top: -10, size: 17, duration: 20, delay: -2, sway: 3.7, drift: 60, spin: 190, tone: "text-bronze/30", shape: "leaf" },
  { left: "80%", top: -22, size: 27, duration: 26, delay: -20, sway: 4.9, drift: -65, spin: -200, tone: "text-warm-gold/35", shape: "leaf" },
  { left: "91%", top: -16, size: 19, duration: 21, delay: -9, sway: 3.9, drift: 45, spin: 230, tone: "text-bronze/40", shape: "maple" },
];

/**
 * Dezente, langsam fallende Blätter als Linienzeichnung.
 * Nur im Herbstlook, rein dekorativ (aria-hidden) und ohne Klickfläche.
 * Bei reduzierter Bewegung bleiben die Blätter ruhig stehen.
 */
export const FallingLeaves = ({
  className = "",
  tone = "autumn",
}: MarkProps & { tone?: "autumn" | "light" }) => {
  if (!isAutumnActive()) return null;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {LEAVES.map((leaf, i) => (
        <span
          key={i}
          className={`autumn-leaf ${tone === "light" ? "text-primary-foreground/30" : leaf.tone}`}
          style={{
            left: leaf.left,
            top: `${leaf.top}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            animationDuration: `${leaf.duration}s`,
            animationDelay: `${leaf.delay}s`,
            ["--drift" as string]: `${leaf.drift}px`,
            ["--spin" as string]: `${leaf.spin}deg`,
          }}
        >
          <span className="autumn-sway" style={{ animationDuration: `${leaf.sway}s` }}>
            {leaf.shape === "maple" ? (
              <MapleMark className="h-full w-full" />
            ) : (
              <LeafMark className="h-full w-full" />
            )}
          </span>
        </span>
      ))}
    </div>
  );
};

/** Kürbis und Blatt nebeneinander, als kleiner Hinweis im Herbstlook. */
export const AutumnPair = ({ className = "" }: MarkProps) => {
  if (!isAutumnActive()) return null;

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`} aria-hidden="true">
      <PumpkinMark className="h-5 w-5" />
      <LeafMark className="h-4 w-4" />
    </span>
  );
};

/**
 * Section-Label mit kleinem Blatt davor, aber nur im Herbstlook.
 * Außerhalb des Herbstes bleibt es ein normales Label ohne Motiv.
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
    {isAutumnActive() && <LeafMark className={`h-3.5 w-3.5 shrink-0 ${tone} opacity-70`} />}
    <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${tone}`}>{children}</span>
  </p>
);
