import { Phone, MapPin, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

const MobileBottomNav = () => {
  return (
    <nav
      aria-label="Schnellzugriff"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t shadow-lg"
      style={{
        backgroundColor: "#164472",
        paddingBottom: "env(safe-area-inset-bottom)",
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <ul className="grid grid-cols-3">
        <li>
          <a
            href="tel:+491716226201"
            className="flex flex-col items-center justify-center gap-1 py-3 min-h-[60px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold focus-visible:ring-inset"
            style={{ color: "#FEF4EC" }}
            aria-label="Bistro Boxenstopp anrufen unter 0171 6226201"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            <span className="text-xs font-medium">Anrufen</span>
          </a>
        </li>
        <li
          className="border-l border-r"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <Link
            to="/kontakt"
            className="flex flex-col items-center justify-center gap-1 py-3 min-h-[60px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold focus-visible:ring-inset"
            style={{ color: "#FEF4EC" }}
            aria-label="Anfahrt und Kontakt"
          >
            <MapPin className="w-5 h-5" aria-hidden="true" />
            <span className="text-xs font-medium">Anfahrt</span>
          </Link>
        </li>
        <li>
          <Link
            to="/speisekarte"
            className="flex flex-col items-center justify-center gap-1 py-3 min-h-[60px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold focus-visible:ring-inset"
            style={{ color: "#FEF4EC" }}
            aria-label="Speisekarte ansehen"
          >
            <UtensilsCrossed className="w-5 h-5" aria-hidden="true" />
            <span className="text-xs font-medium">Karte</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileBottomNav;
