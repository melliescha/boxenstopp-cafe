import { useState } from "react";
import { X } from "lucide-react";
import { isVacationActive } from "@/lib/vacation";

const WelcomeBanner = () => {
  const [visible, setVisible] = useState(true);
  const isVacation = isVacationActive();

  if (!visible) return null;

  if (isVacation) {
    return (
      <div className="welcome-banner bg-warm-gold text-primary text-center py-2.5 px-10 text-sm font-medium relative">
        <span>
          🌴 Sommerurlaub! Vom <strong>16.06. – 23.06.2026</strong> machen wir Pause, tanken Sonne und kommen frisch zurück. Ab dem <strong>24.06.</strong> stehen Kaffee &amp; Flammkuchen wieder für euch bereit. ☕🥐
        </span>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
          aria-label="Banner schließen"
        >
          <X size={16} />
        </button>
      </div>
    );
  }

  return (
    <div className="welcome-banner bg-primary text-primary-foreground text-center py-2.5 px-4 text-sm font-medium relative">
      <span>Egal ob nach der Fahrradtour, nach dem Training oder für eine entspannte Pause: komm einfach vorbei! 👋</span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        aria-label="Banner schließen"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default WelcomeBanner;
