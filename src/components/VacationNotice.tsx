import { AlertTriangle } from "lucide-react";
import { isVacationActive, vacation } from "@/lib/vacation";
import { socialLinks } from "@/config/social";

/**
 * Auffälliger Hinweis direkt bei den Öffnungszeiten.
 * Verschwindet automatisch ab dem reopenDate (24.06.2026).
 */
const VacationNotice = ({ compact = false }: { compact?: boolean }) => {
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
            Achtung – Sommerurlaub: geschlossen!
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
