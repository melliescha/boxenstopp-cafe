import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook, ChevronDown } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import { socialLinks, facebookEnabled } from "@/config/social";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Startseite", path: "/" },
  { label: "Speisekarte", path: "/speisekarte" },
  { label: "Anfahrt & Kontakt", path: "/kontakt" },
  { label: "Galerie", path: "/galerie" },
  { label: "Über uns", path: "/ueber-uns" },
];

const moreLinks = [
  { label: "Partner", path: "/partner" },
  { label: "Nachbarschaft", path: "/nachbarschaft" },
  { label: "Tourismus", path: "/blog/bodensee-koenigssee-radweg-hergatz" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();
  const moreIsActive = moreLinks.some((link) => location.pathname === link.path);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <nav aria-label="Hauptnavigation" className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6">
        <Link
          to="/"
          aria-label="Startseite Bistro Boxenstopp"
          className="flex items-center gap-2 min-h-[44px]"
        >
          <img src={logoIcon} alt="Bistro Boxenstopp Logo" className="h-[35px] md:h-[45px] w-auto" />
          <span className="hidden font-serif text-lg font-medium text-primary sm:block md:text-xl">
            Bistro Boxenstopp
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition-colors inline-flex items-center min-h-[44px] ${
                    active
                      ? "text-primary border-b border-primary pb-0.5"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="relative">
            <Button
              type="button"
              variant="ghost"
              className={`h-11 gap-1 px-2 text-sm font-medium ${
                moreIsActive ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
              onClick={() => setIsMoreOpen((open) => !open)}
              aria-expanded={isMoreOpen}
              aria-controls="desktop-more-menu"
            >
              Mehr
              <ChevronDown className={`h-4 w-4 transition-transform ${isMoreOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </Button>
            {isMoreOpen && (
              <ul
                id="desktop-more-menu"
                className="absolute right-0 top-full z-50 min-w-48 border border-border bg-background py-2"
              >
                {moreLinks.map((link) => {
                  const active = location.pathname === link.path;
                  return (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        aria-current={active ? "page" : undefined}
                        className={`flex min-h-11 items-center px-4 text-sm font-medium transition-colors ${
                          active ? "bg-muted/50 text-primary" : "text-muted-foreground hover:bg-muted/30 hover:text-primary"
                        }`}
                        onClick={() => setIsMoreOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        </ul>

        <div className="flex items-center gap-1">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Bistro Boxenstopp"
            className="hidden h-11 w-11 items-center justify-center text-muted-foreground transition-colors hover:text-primary sm:inline-flex"
          >
            <Instagram size={20} aria-hidden="true" />
          </a>
          {facebookEnabled && (
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Bistro Boxenstopp"
              className="hidden h-11 w-11 items-center justify-center text-muted-foreground transition-colors hover:text-primary sm:inline-flex"
            >
              <Facebook size={20} aria-hidden="true" />
            </a>
          )}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden h-11 w-11 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </Button>
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
            <li className="mt-2 border-t border-border pt-2">
              <p className="px-2 py-2 text-xs font-semibold uppercase text-muted-foreground">Mehr</p>
              <ul>
                {moreLinks.map((link) => {
                  const active = location.pathname === link.path;
                  return (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        aria-current={active ? "page" : undefined}
                        className={`flex min-h-[44px] items-center px-2 text-base font-medium transition-colors ${
                          active ? "bg-muted/50 text-primary" : "text-muted-foreground hover:bg-muted/30 hover:text-primary"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
