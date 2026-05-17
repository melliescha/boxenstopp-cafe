import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, MapPin, Clock, Route } from "lucide-react";
import { TripAdvisorIcon, GoogleIcon } from "@/components/icons/SocialIcons";
import { socialLinks, facebookEnabled } from "@/config/social";

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
                  Mo, Mi–Fr 15–20 Uhr<br />
                  Sa 10:30–15:30 · So 11–16 Uhr<br />
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
                <Link to="/agb" className="hover:text-warm-gold transition-colors">
                  AGB
                </Link>
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
              <TripAdvisorIcon size={18} />
            </a>
            <a
              href={socialLinks.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-warm-gold hover:scale-110 transition-all"
              aria-label="Google Maps Profil"
            >
              <GoogleIcon size={18} />
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

        <div className="border-t border-primary-foreground/10 mt-6 pt-6 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Bistro Boxenstopp
        </div>

        {/* Agency Credit */}
        <div className="border-t border-primary-foreground/5 mt-6 pt-5 text-center">
          <p
            className="text-[12px] leading-relaxed"
            style={{ color: "#fef4ec", opacity: 0.5 }}
          >
            Dir gefällt diese Website? Du brauchst Sichtbarkeit für dein lokales Unternehmen?
          </p>
          <a
            href="https://optivantaagency.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium hover:underline transition-all inline-block mt-1"
            style={{ color: "#b8943e" }}
          >
            Jetzt Gespräch vereinbaren →
          </a>
          <p className="text-[10px] mt-1.5" style={{ color: "#fef4ec", opacity: 0.3 }}>
            Webdesign by Optivanta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
