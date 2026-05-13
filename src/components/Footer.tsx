import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <span className="font-serif text-xl font-bold text-primary-foreground block mb-2">
              Bistro Boxenstopp
            </span>
            <p className="text-primary-foreground/60 text-sm">
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
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.instagram.com/fites.allgaeu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1CE6CEvvEr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Mehr über uns */}
          <div>
            <h2 className="font-serif text-base font-semibold text-primary-foreground mb-3">
              Mehr über uns
            </h2>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link to="/partner" className="hover:text-warm-gold transition-colors">
                  Unsere Partner
                </Link>
              </li>
              <li>
                <Link to="/bewertungen" className="hover:text-warm-gold transition-colors">
                  Bewertungen
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
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

          {/* Kontakt */}
          <div>
            <h2 className="font-serif text-base font-semibold text-primary-foreground mb-3">
              Kontakt
            </h2>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-1 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+4917176226201" className="hover:text-warm-gold transition-colors">
                  0171 7622620
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 flex-shrink-0" aria-hidden="true" />
                <span>Südhang 1, 88145 Hergatz</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-1 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:fit.es@icloud.com" className="hover:text-warm-gold transition-colors break-all">
                  fit.es@icloud.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Bistro Boxenstopp
        </div>

        {/* Agency Credit */}
        <div className="border-t border-primary-foreground/5 mt-6 pt-5 text-center">
          <p className="text-[12px] leading-relaxed" style={{ color: "#fef4ec", opacity: 0.5 }}>
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
