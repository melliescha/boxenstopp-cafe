import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, MapPin, Clock, Route, Star, ArrowUpRight } from "lucide-react";
import { socialLinks, facebookEnabled } from "@/config/social";
import { openConsentSettings } from "@/lib/consent";
import optivantaLogo from "@/assets/logo-optivanta.png";


const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-[84px] lg:pb-12">
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

        {/* Werbeanzeigen als ruhiger, zusammenhängender Footer-Abschluss */}
        <section className="mt-8 border-t border-primary-foreground/10 pt-8 sm:mt-10 sm:pt-10" aria-label="Werbeanzeigen unserer Partner">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px flex-1 bg-primary-foreground/10" aria-hidden="true" />
            <p className="text-[10px] uppercase tracking-[0.24em] text-primary-foreground/45">Empfehlungen aus unserem Haus</p>
            <span className="h-px flex-1 bg-primary-foreground/10" aria-hidden="true" />
          </div>

          <div className="w-full overflow-hidden rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 shadow-lg">
            {/* Anzeige: FITES Allgäu */}
            <div
              className="relative overflow-hidden"
              style={{ background: "linear-gradient(105deg, #1b4d66 0%, #228bcd 100%)" }}
            >
              <div className="relative grid gap-5 p-5 sm:p-7 lg:grid-cols-[220px_1fr_auto] lg:items-center lg:gap-8">
                <div className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span
                      className="text-[9px] font-semibold tracking-[0.2em] uppercase"
                      style={{ color: "#b3ddf2" }}
                    >
                      Anzeige
                    </span>
                  </div>
                  <p className="font-sans text-xl font-extrabold uppercase tracking-[0.12em]" style={{ color: "#f2fafd" }}>
                    FITES <span style={{ color: "#a6d608" }}>Allgäu</span>
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em]" style={{ color: "#b3ddf2" }}>
                    Fitness im selben Gebäude
                  </p>
                </div>
                <div className="min-w-0 lg:border-l lg:pl-8" style={{ borderColor: "#b3ddf24d" }}>
                  <p className="font-serif text-xl font-bold leading-snug sm:text-2xl" style={{ color: "#f2fafd" }}>
                    Trainiere direkt im selben Gebäude
                  </p>
                  <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.12em] sm:text-[11px]" style={{ color: "#b3ddf2" }}>
                    HYROX &middot; Personaltraining &middot; Tabata &middot; HIIT &middot; FITES Boxen
                  </p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "#f2fafd", opacity: 0.82 }}>
                    Kostenloses Probetraining bei FITES Allgäu, ohne Vertrag, ohne Vorkenntnisse.
                  </p>
                </div>
                <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row lg:w-[250px] lg:flex-col">
                  <Link
                    to="/fites-allgaeu"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-center text-sm font-semibold shadow-sm transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: "#a6d608", color: "#1b4d66" }}
                  >
                    Kostenloses Probetraining sichern
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  </Link>
                  <a
                    href="https://www.fites-allgaeu.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 w-full items-center justify-center text-center text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-80"
                    style={{ color: "#f2fafd", textDecorationColor: "#b3ddf2" }}
                  >
                    Zur Website
                  </a>
                </div>
              </div>
            </div>

            {/* Anzeige: OPTIVANTA Agency */}
            <div
              className="relative overflow-hidden border-t border-primary-foreground/20"
              style={{ background: "linear-gradient(105deg, #F5E9DA 0%, #EFDDCB 100%)" }}
            >
              <div className="relative grid gap-5 p-5 sm:p-7 lg:grid-cols-[220px_1fr_auto] lg:items-center lg:gap-8">
                <div className="min-w-0">
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className="text-[9px] font-semibold uppercase tracking-[0.2em]"
                      style={{ color: "#66206f", opacity: 0.7 }}
                    >
                      Anzeige
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={optivantaLogo}
                      alt="OPTIVANTA Agency Logo"
                      className="h-9 w-9 rounded-md object-contain"
                      loading="lazy"
                      width={32}
                      height={32}
                    />
                    <span className="text-xs font-bold uppercase tracking-[0.12em]" style={{ color: "#66206f" }}>
                      OPTIVANTA Agency
                    </span>
                  </div>
                </div>
                <div className="min-w-0 lg:border-l lg:pl-8" style={{ borderColor: "#66206f33" }}>
                  <p className="font-serif text-xl font-bold leading-snug sm:text-2xl" style={{ color: "#66206f" }}>
                    Dir gefällt diese Website?
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] sm:text-[11px]" style={{ color: "#e8875e" }}>
                    Marketing, das Kunden bringt
                  </p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "#4a2450" }}>
                    Social Media Management, Meta Ads und Webdesign für dein lokales Unternehmen.
                  </p>
                </div>
                <div className="w-full shrink-0 sm:w-auto lg:w-[250px]">
                  <a
                    href="https://optivantaagency.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-center text-sm font-semibold shadow-sm transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: "#66206f", color: "#F5E9DA" }}
                  >
                    Jetzt Gespräch vereinbaren
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
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
