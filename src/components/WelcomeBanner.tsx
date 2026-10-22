import { useState } from "react";
import { X } from "lucide-react";
import { isVacationActive } from "@/lib/vacation";
import { isHalloweenActive, isAutumnActive, season } from "@/lib/season";
import { LeafMark, PumpkinMark } from "@/components/AutumnMotifs";

const WelcomeBanner = () => {
  const [visible, setVisible] = useState(true);
  const isVacation = isVacationActive();

  if (!visible) return null;

  if (isVacation) {
    return (
      <div className="welcome-banner bg-warm-gold text-primary text-center py-2.5 pl-4 pr-12 text-sm font-medium relative">
        <span>
          🌴 Sommerurlaub! Vom <strong>16.06. bis 23.06.2026</strong> machen wir Pause, tanken Sonne und kommen frisch zurück. Ab dem <strong>24.06.</strong> stehen Kaffee &amp; Flammkuchen wieder für euch bereit. ☕🥐
        </span>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
          aria-label="Banner schließen"
        >
          <X size={16} aria-hidden="true" />
        </button>
      </div>
    );
  }

  if (isHalloweenActive()) {
    return (
      <div className="welcome-banner relative bg-wood py-2 pl-3 pr-12 text-center text-xs font-medium leading-5 text-wood-foreground sm:px-14 sm:py-2.5 sm:text-sm">
        <PumpkinMark className="pointer-events-none absolute left-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-warm-gold/60 sm:block" />
        <LeafMark className="pointer-events-none absolute right-14 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-warm-gold/45 sm:block" />
        <span>
          Herbstzeit im Boxenstopp. An Halloween, dem <strong className="text-warm-gold">{season.closedLabel}</strong>, haben wir geschlossen. Ab 1. November sind wir wieder für euch da.
        </span>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-1 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center transition-opacity hover:opacity-70 sm:right-2"
          aria-label="Banner schließen"
        >
          <X size={16} aria-hidden="true" />
        </button>
      </div>
    );
  }



  return (
    <div className="welcome-banner relative bg-primary py-2 pl-3 pr-12 text-center text-xs font-medium leading-5 text-primary-foreground sm:px-14 sm:py-2.5 sm:text-sm">
      {isAutumnActive() && (
        <>
          <PumpkinMark className="pointer-events-none absolute left-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-warm-gold/50 sm:block" />
          <LeafMark className="pointer-events-none absolute right-14 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-warm-gold/40 sm:block" />
        </>
      )}
      <span className="sm:hidden">
        Pause nach Radtour oder Training bei{" "}
        <a href="/fites-allgaeu" className="font-semibold underline transition-colors hover:text-warm-gold">
          FITES Allgäu
        </a>
        .
      </span>
      <span className="hidden sm:inline">
        Egal ob nach der Fahrradtour, nach dem Training bei{" "}
        <a href="/fites-allgaeu" className="underline hover:text-warm-gold transition-colors font-semibold">
          FITES Allgäu
        </a>{" "}
        oder für eine entspannte Pause: komm einfach vorbei!
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-1 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center transition-opacity hover:opacity-70 sm:right-2"
        aria-label="Banner schließen"
      >
        <X size={16} aria-hidden="true" />
      </button>
    </div>
  );
};

export default WelcomeBanner;
