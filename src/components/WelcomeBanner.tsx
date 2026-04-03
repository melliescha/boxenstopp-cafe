import { useState } from "react";
import { X } from "lucide-react";

const WelcomeBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="welcome-banner bg-primary text-primary-foreground text-center py-2.5 px-4 text-sm font-medium relative">
      <span>Auch ohne Training willkommen, komm einfach vorbei! 👋</span>
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
