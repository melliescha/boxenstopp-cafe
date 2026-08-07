import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, MapPin, Clock, Route, Star } from "lucide-react";
import { socialLinks, facebookEnabled } from "@/config/social";
import { openConsentSettings } from "@/lib/consent";
import optivantaLogo from "@/assets/logo-optivanta.png";


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

        {/* Werbeanzeigen, ganz unten im Footer, als eigener Abschnitt untereinander */}
        <section className="mt-10 pt-8 border-t border-white/10" aria-label="Werbeanzeigen unserer Partner">
          <p className="text-[10px] tracking-[0.28em] uppercase text-center mb-5 opacity-50">
            Anzeigen
          </p>

          <div className="flex flex-col gap-4 w-full">
            {/* Anzeige: FITES Allgäu */}
            <div
              className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-md"
              style={{ background: "linear-gradient(115deg, #1b4d66 0%, #228bcd 100%)" }}
            >
              <div
                className="pointer-events-none absolute -top-16 -right-10 w-52 h-52 rounded-full blur-3xl"
                style={{ background: "#b3ddf2", opacity: 0.2 }}
                aria-hidden="true"
              />
              <div className="relative p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-5">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-[9px] font-semibold tracking-[0.22em] uppercase px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "#f2fafd1f", color: "#b3ddf2", border: "1px solid #b3ddf24d" }}
                    >
                      Anzeige
                    </span>
                    <span
                      className="font-sans text-[12px] font-extrabold tracking-[0.16em] uppercase px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: "#f2fafd", color: "#1b4d66" }}
                    >
                      FITES<span style={{ color: "#a6d608" }}> Allgäu</span>
                    </span>
                  </div>
                  <p className="font-serif text-xl md:text-[24px] leading-snug font-bold mb-2" style={{ color: "#f2fafd" }}>
                    Trainiere direkt im selben Gebäude
                  </p>
                  <p className="text-[11px] font-medium tracking-[0.14em] uppercase mb-2" style={{ color: "#b3ddf2" }}>
                    HYROX · Personaltraining · Tabata · HIIT · FITES Boxen
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#f2fafd", opacity: 0.8 }}>
                    Kostenloses Probetraining bei FITES Allgäu, ohne Vertrag, ohne Vorkenntnisse.
                  </p>
                </div>
                <div className="md:w-auto flex flex-wrap items-center gap-3 md:flex-col md:items-end">
                  <Link
                    to="/fites-allgaeu"
                    className="inline-block px-5 py-2.5 rounded-full font-semibold text-sm shadow-md hover:opacity-90 transition-opacity whitespace-nowrap"
                    style={{ backgroundColor: "#a6d608", color: "#1b4d66" }}
                  >
                    Kostenloses Probetraining sichern
                  </Link>
                  <a
                    href="https://www.fites-allgaeu.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:opacity-80 transition-opacity underline underline-offset-4"
                    style={{ color: "#f2fafd", textDecorationColor: "#b3ddf2" }}
                  >
                    Zur Website
                  </a>
                </div>
              </div>
            </div>

            {/* Anzeige: OPTIVANTA Agency */}
            <div
              className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-md"
              style={{ background: "linear-gradient(115deg, #F5E9DA 0%, #EFDDCB 100%)" }}
            >
              <div
                className="pointer-events-none absolute -bottom-20 -left-12 w-56 h-56 rounded-full blur-3xl"
                style={{ background: "#66206f", opacity: 0.16 }}
                aria-hidden="true"
              />
              <div className="relative p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-5">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-[9px] font-semibold tracking-[0.22em] uppercase px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "#66206f14", color: "#66206f", border: "1px solid #66206f40" }}
                    >
                      Anzeige
                    </span>
                    <img
                      src={optivantaLogo}
                      alt="OPTIVANTA Agency Logo"
                      className="h-8 w-8 rounded-lg object-contain"
                      loading="lazy"
                      width={32}
                      height={32}
                    />
                    <span className="text-[11px] tracking-[0.12em] uppercase font-semibold" style={{ color: "#66206f", opacity: 0.75 }}>
                      OPTIVANTA Agency
                    </span>
                  </div>
                  <p className="font-serif text-xl md:text-[24px] leading-snug font-bold mb-2" style={{ color: "#66206f" }}>
                    Dir gefällt diese Website?
                  </p>
                  <p className="text-[11px] font-medium tracking-[0.14em] uppercase mb-2" style={{ color: "#e8875e" }}>
                    Marketing, das Kunden bringt
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#4a2450" }}>
                    Social Media Management, Meta Ads und Webdesign für dein lokales Unternehmen.
                  </p>
                </div>
                <div className="md:w-auto">
                  <a
                    href="https://optivantaagency.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2.5 rounded-full font-semibold text-sm shadow-md hover:opacity-90 transition-opacity whitespace-nowrap"
                    style={{ backgroundColor: "#66206f", color: "#F5E9DA" }}
                  >
                    Jetzt Gespräch vereinbaren →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
