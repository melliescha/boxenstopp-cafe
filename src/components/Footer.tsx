import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, MapPin, Clock, Route, Star } from "lucide-react";
import { socialLinks, facebookEnabled } from "@/config/social";
import { openConsentSettings } from "@/lib/consent";


const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Bereich 1: Kontakt */}
          <div>
            <h2 className="font-serif text-base font-semibold text-primary-foreground mb-3">
              Kontakt
            </h2>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 flex-shrink-0" aria-hidden="true" />
                <span>Südhang 1, 88145 Hergatz</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-1 flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+491716226201"
                  className="hover:text-warm-gold transition-colors"
                >
                  0171 6226201
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="mt-1 flex-shrink-0" aria-hidden="true" />
                <span>
                  Mo, Mi bis Fr 15 bis 20 Uhr<br />
                  Sa 10:30 bis 15:30 · So 11 bis 16 Uhr<br />
                  Di Ruhetag
                </span>
              </li>
            </ul>
          </div>

          {/* Bereich 2: Mehr über uns */}
          <div>
            <h2 className="font-serif text-base font-semibold text-primary-foreground mb-3">
              Mehr über uns
            </h2>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link to="/ueber-uns" className="hover:text-warm-gold transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/partner" className="hover:text-warm-gold transition-colors">
                  Unsere Partner
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="hover:text-warm-gold transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link to="/bewertungen" className="hover:text-warm-gold transition-colors">
                  Bewertungen
                </Link>
              </li>
            </ul>
          </div>

          {/* Bereich 3: Service */}
          <div>
            <h2 className="font-serif text-base font-semibold text-primary-foreground mb-3">
              Service
            </h2>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link to="/speisekarte" className="hover:text-warm-gold transition-colors">
                  Speisekarte
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-warm-gold transition-colors">
                  Anfahrt & Kontakt
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-warm-gold transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Bereich 4: Rechtliches */}
          <div>
            <h2 className="font-serif text-base font-semibold text-primary-foreground mb-3">
              Rechtliches
            </h2>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link to="/impressum" className="hover:text-warm-gold transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-warm-gold transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/hausordnung" className="hover:text-warm-gold transition-colors">
                  Hausordnung
                </Link>
              </li>
              <li>
                <Link to="/ki-transparenz" className="hover:text-warm-gold transition-colors inline-flex items-center gap-1.5">
                  Transparenz
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded" style={{ backgroundColor: "#9E7C4E33", color: "#e8d4b0" }}>KI</span>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openConsentSettings}
                  className="hover:text-warm-gold transition-colors text-left"
                >
                  Cookie-Einstellungen
                </button>
              </li>

            </ul>
          </div>
        </div>

        {/* Brand row */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span className="font-serif text-lg font-bold text-primary-foreground block">
              Bistro Boxenstopp
            </span>
            <p className="text-primary-foreground/60 text-xs">
              Teil von{" "}
              <a
                href="https://www.fites-allgaeu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gold hover:underline"
              >
                FITES Allgäu
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-warm-gold hover:scale-110 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href={socialLinks.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-warm-gold hover:scale-110 transition-all"
              aria-label="TripAdvisor"
            >
              <Star size={18} aria-hidden="true" />
            </a>
            <a
              href={socialLinks.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-warm-gold hover:scale-110 transition-all"
              aria-label="Google Maps Profil"
            >
              <MapPin size={18} aria-hidden="true" />
            </a>
            <a
              href={socialLinks.komoot}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-4 rounded-full bg-primary-foreground/10 hover:bg-warm-gold hover:text-primary hover:scale-105 transition-all text-sm font-medium"
              aria-label="Wir auf Komoot"
            >
              <Route size={16} aria-hidden="true" />
              <span>Komoot</span>
            </a>
            {facebookEnabled && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-warm-gold hover:scale-110 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            )}
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-6 pt-6 text-center text-xs text-primary-foreground/40 space-y-3">
          <p>
            Teile der Bilder und Texte wurden mit Hilfe künstlicher Intelligenz erstellt.{" "}
            <Link to="/ki-transparenz" className="underline hover:text-warm-gold transition-colors">
              KI-Hinweis
            </Link>
          </p>



          <p>© {new Date().getFullYear()} Bistro Boxenstopp</p>
        </div>

        {/* Werbeanzeigen, ganz unten im Footer */}
        <div className="mt-8 space-y-4">
          {/* Anzeige: FITES Allgäu */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: "1px solid #7EC8F055", background: "linear-gradient(135deg, #0C2F5A, #2E86C1)" }}
          >
            <div
              className="flex items-center justify-between px-4 py-1.5"
              style={{ backgroundColor: "#08213F" }}
            >
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#7EC8F0" }}>
                Anzeige
              </span>
              <span className="text-[10px] tracking-wide" style={{ color: "#EAF6FD", opacity: 0.6 }}>
                FITES Allgäu
              </span>
            </div>
            <div className="p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5 text-center md:text-left">
              <div>
                <p className="font-serif text-xl md:text-2xl font-bold mb-1.5" style={{ color: "#EAF6FD" }}>
                  HYROX, Personaltraining, Tabata, HIIT, FITES Boxen
                </p>
                <p className="text-sm" style={{ color: "#EAF6FD", opacity: 0.85 }}>
                  Kostenloses Probetraining bei FITES Allgäu, im selben Gebäude wie das Bistro.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 md:flex-shrink-0">
                <Link
                  to="/fites-allgaeu"
                  className="inline-block px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
                  style={{ backgroundColor: "#2FA84F", color: "#FFFFFF" }}
                >
                  Kostenloses Probetraining sichern
                </Link>
                <a
                  href="https://www.fites-allgaeu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2.5 rounded-lg font-semibold text-sm border hover:opacity-80 transition-opacity whitespace-nowrap"
                  style={{ borderColor: "#EAF6FD66", color: "#EAF6FD" }}
                >
                  Zur Website
                </a>
              </div>
            </div>
          </div>

          {/* Anzeige: OPTIVANTA Agency */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: "1px solid #6B2FA855", background: "#F3E7D6" }}
          >
            <div
              className="flex items-center justify-between px-4 py-1.5"
              style={{ backgroundColor: "#5B2A94" }}
            >
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#F3E7D6" }}>
                Anzeige
              </span>
              <span className="text-[10px] tracking-wide" style={{ color: "#F3E7D6", opacity: 0.7 }}>
                OPTIVANTA Agency
              </span>
            </div>
            <div className="p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5 text-center md:text-left">
              <div>
                <p className="font-serif text-xl md:text-2xl font-bold mb-1.5" style={{ color: "#3B1663" }}>
                  Dir gefällt diese Website?
                </p>
                <p className="text-sm" style={{ color: "#4A2A73" }}>
                  OPTIVANTA Agency: Marketing, das Kunden bringt. Social Media Management, Meta Ads,
                  Webdesign für dein lokales Unternehmen.
                </p>
              </div>
              <a
                href="https://optivantaagency.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap md:flex-shrink-0"
                style={{ backgroundColor: "#5B2A94", color: "#F3E7D6" }}
              >
                Jetzt Gespräch vereinbaren →
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
