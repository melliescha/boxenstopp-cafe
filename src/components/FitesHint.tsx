import { Dumbbell } from "lucide-react";

interface FitesHintProps {
  /** "shake" → fokussiert auf Training/Shakes · "neighbor" → fokussiert auf „im selben Haus" */
  variant?: "shake" | "neighbor";
  className?: string;
}

/**
 * Dezenter Hinweis auf FITES Allgäu (Schwester-Marke im selben Gebäude).
 * Bewusst klein, nicht aufdringlich, pull statt push.
 */
const FitesHint = ({ variant = "shake", className = "" }: FitesHintProps) => {
  const text =
    variant === "shake"
      ? "Trainierst du regelmäßig? Im selben Haus ist FITES Allgäu – Eugens Studio mit kleinen Gruppen und persönlicher Betreuung."
      : "Im selben Gebäude findet ihr FITES Allgäu – Eugens Fitnessstudio mit kleinen Gruppen, HYROX, HIIT und persönlicher Betreuung. Wer mag, schaut einfach rein.";

  return (
    <aside
      className={`rounded-xl px-4 py-3 flex items-start gap-3 text-sm ${className}`}
      style={{
        backgroundColor: "#FEF4EC",
        border: "1px solid #EDE0D0",
        color: "#6B4A2E",
      }}
      aria-label="Hinweis auf FITES Allgäu"
    >
      <Dumbbell
        className="w-4 h-4 flex-shrink-0 mt-0.5"
        style={{ color: "#9E7C4E" }}
        aria-hidden="true"
      />
      <p className="leading-relaxed">
        {text}{" "}
        <a
          href="https://www.fites-allgaeu.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline underline-offset-2 hover:no-underline"
          style={{ color: "#164472" }}
        >
          fites-allgaeu.com →
        </a>
      </p>
    </aside>
  );
};

export default FitesHint;
