import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import { socialLinks, facebookEnabled } from "@/config/social";

const navLinks = [
  { label: "Startseite", path: "/" },
  { label: "Speisekarte", path: "/speisekarte" },
  { label: "Anfahrt & Kontakt", path: "/kontakt" },
  { label: "FAQ", path: "/faq" },
  { label: "Galerie", path: "/galerie" },
  { label: "Über uns", path: "/ueber-uns" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav aria-label="Hauptnavigation" className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link
          to="/"
          aria-label="Startseite Bistro Boxenstopp"
          className="flex items-center gap-2 min-h-[44px]"
        >
          <img src={logoIcon} alt="" className="h-[35px] md:h-[45px] w-auto" />
          <span className="hidden sm:block font-serif text-lg md:text-xl font-bold text-primary">
            Bistro Boxenstopp
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition-colors inline-flex items-center min-h-[44px] ${
                    active
                      ? "text-primary border-b-2 border-bronze pb-0.5"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Bistro Boxenstopp"
            className="hidden sm:inline-flex items-center justify-center w-11 h-11 rounded-full text-muted-foreground hover:text-bronze hover:scale-110 transition-all"
          >
            <Instagram size={20} aria-hidden="true" />
          </a>
          {facebookEnabled && (
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Bistro Boxenstopp"
              className="hidden sm:inline-flex items-center justify-center w-11 h-11 rounded-full text-muted-foreground hover:text-bronze hover:scale-110 transition-all"
            >
              <Facebook size={20} aria-hidden="true" />
            </a>
          )}
          <button
            type="button"
            className="lg:hidden text-foreground inline-flex items-center justify-center w-11 h-11 rounded-md hover:bg-muted/50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-background border-b border-border px-4 sm:px-6 pb-4"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center min-h-[44px] text-base font-medium px-2 rounded-md transition-colors ${
                      active
                        ? "text-primary bg-muted/50"
                        : "text-muted-foreground hover:text-primary hover:bg-muted/30"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
