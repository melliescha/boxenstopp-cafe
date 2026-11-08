import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Star, Sun, Snowflake } from "lucide-react";
import { isVacationActive, vacation } from "@/lib/vacation";
import { isWinterBreakActive, winterBreak } from "@/lib/season";
import { socialLinks } from "@/config/social";

const STORAGE_KEY = "vacation-popup-seen-2026-06";
const WINTER_STORAGE_KEY = "winter-break-popup-seen-2026-12";

/**
 * Begrüßungs-Popup, das beim Öffnen der Seite einmal pro Browser-Session
 * auf Sommerurlaub oder Winterpause hinweist. Verschwindet automatisch
 * nach dem jeweiligen reopenDate.
 */
const VacationDialog = () => {
  const [open, setOpen] = useState(false);
  const winter = isWinterBreakActive();
  const active = winter || isVacationActive();
  const storageKey = winter ? WINTER_STORAGE_KEY : STORAGE_KEY;

  useEffect(() => {
    if (!active) return;
    try {
      if (sessionStorage.getItem(storageKey)) return;
    } catch {
      // sessionStorage evtl. blockiert, dann einfach anzeigen
    }
    const t = window.setTimeout(() => setOpen(true), 600);
    return () => window.clearTimeout(t);
  }, [active, storageKey]);

  const handleClose = (next: boolean) => {
    setOpen(next);
    if (!next) {
      try {
        sessionStorage.setItem(storageKey, "1");
      } catch {
        /* ignore */
      }
    }
  };

  if (!active) return null;

  if (winter) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="w-14 h-14 rounded-full bg-warm-gold/15 flex items-center justify-center mx-auto mb-3">
              <Snowflake className="w-7 h-7 text-warm-gold" aria-hidden="true" />
            </div>
            <DialogTitle className="font-serif text-2xl text-center">
              Wir machen Winterpause
            </DialogTitle>
            <DialogDescription className="text-center text-base leading-relaxed pt-2">
              Vom <strong>{winterBreak.startLabel}</strong> bis{" "}
              <strong>{winterBreak.endLabel}</strong> bleibt der Boxenstopp geschlossen.
              <br />
              Wir wünschen euch eine besinnliche Weihnachtszeit und einen guten Rutsch.
              Ab dem <strong>{winterBreak.reopenLabel}</strong> stehen Kaffee und
              Flammkuchen wieder für euch bereit.
            </DialogDescription>
          </DialogHeader>

          <div className="bg-cream/60 rounded-lg p-4 text-center text-sm text-foreground/80">
            Ihr vermisst uns schon jetzt? Dann freuen wir uns riesig über eine
            Bewertung auf Google.
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Button asChild className="flex-1 bg-warm-gold hover:bg-warm-gold/90 text-primary">
              <a href={socialLinks.googleReview} target="_blank" rel="noopener noreferrer">
                <Star className="w-4 h-4" />
                Jetzt bewerten
              </a>
            </Button>
            <Button variant="outline" className="flex-1" onClick={() => handleClose(false)}>
              Verstanden
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="w-14 h-14 rounded-full bg-warm-gold/15 flex items-center justify-center mx-auto mb-3">
            <Sun className="w-7 h-7 text-warm-gold" aria-hidden="true" />
          </div>
          <DialogTitle className="font-serif text-2xl text-center">
            Wir machen Sommerurlaub! 🌴
          </DialogTitle>
          <DialogDescription className="text-center text-base leading-relaxed pt-2">
            Vom <strong>{vacation.startLabel}</strong> bis{" "}
            <strong>{vacation.endLabel}</strong> bleibt der Boxenstopp geschlossen.
            <br />
            Ab <strong>{vacation.reopenLabel}</strong> stehen Kaffee &amp;
            Flammkuchen wieder für euch bereit. ☕🥐
          </DialogDescription>
        </DialogHeader>

        <div className="bg-cream/60 rounded-lg p-4 text-center text-sm text-foreground/80">
          Ihr vermisst uns schon jetzt? Dann freuen wir uns riesig über eine
          Bewertung auf Google: das hilft uns mehr als ein Sonnenbrand auf der Nase. 😉
        </div>

        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button asChild className="flex-1 bg-warm-gold hover:bg-warm-gold/90 text-primary">
            <a href={socialLinks.googleReview} target="_blank" rel="noopener noreferrer">
              <Star className="w-4 h-4" />
              Jetzt bewerten
            </a>
          </Button>
          <Button variant="outline" className="flex-1" onClick={() => handleClose(false)}>
            Verstanden
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VacationDialog;
