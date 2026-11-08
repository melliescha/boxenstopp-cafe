import { AlertTriangle, Snowflake } from "lucide-react";
import { isVacationActive, vacation } from "@/lib/vacation";
import { isWinterBreakActive, winterBreak } from "@/lib/season";
import { socialLinks } from "@/config/social";

/**
 * Auffälliger Hinweis direkt bei den Öffnungszeiten.
 * Verschwindet automatisch ab dem jeweiligen reopenDate.
 */
const VacationNotice = ({ compact = false }: { compact?: boolean }) => {
  if (isWinterBreakActive()) {
    return (
      <div
        role="alert"
        className={`rounded-xl border-2 border-warm-gold bg-warm-gold/10 ${
          compact ? "p-4" : "p-5"
        } mb-6 text-left`}
      >
        <div className="flex items-start gap-3">
          <Snowflake className="w-6 h-6 text-warm-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div className="flex-1">
            <p className="font-serif font-bold text-lg text-primary mb-1">
              Winterpause: geschlossen
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Vom <strong>{winterBreak.startLabel}</strong> bis einschließlich{" "}
              <strong>{winterBreak.endLabel}</strong> bleibt der Boxenstopp geschlossen.
              Wir wünschen euch eine besinnliche Weihnachtszeit und einen guten Rutsch.
              Ab <strong>{winterBreak.reopenLabel}</strong> sind wir wieder zu den
              gewohnten Zeiten für euch da.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!isVacationActive()) return null;

  return (
    <div
      role="alert"
      className={`rounded-xl border-2 border-warm-gold bg-warm-gold/10 ${
        compact ? "p-4" : "p-5"
      } mb-6 text-left`}
    >
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-6 h-6 text-warm-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div className="flex-1">
          <p className="font-serif font-bold text-lg text-primary mb-1">
            Achtung, Sommerurlaub: geschlossen!
          </p>
          <p className="text-sm text-foreground/80 leading-relaxed">
            Vom <strong>{vacation.startLabel}</strong> bis einschließlich{" "}
            <strong>{vacation.endLabel}</strong> bleibt der Boxenstopp geschlossen.
            Ab <strong>{vacation.reopenLabel}</strong> sind wir wieder zu den
            gewohnten Zeiten für euch da. ☀️
          </p>
          <a
            href={socialLinks.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm font-medium text-primary underline underline-offset-4 hover:opacity-80"
          >
            ⭐ Tipp: Bewertet uns in der Zwischenzeit auf Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default VacationNotice;
