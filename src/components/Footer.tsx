import { Link } from "react-router-dom";
import { Instagram, Facebook, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-serif text-lg font-semibold mb-2">Bistro Boxenstopp</p>
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
          </div>

          <div className="text-sm text-primary-foreground/70">
            <p>Südhang 1</p>
            <p>88145 Hergatz</p>
            <p className="mt-2">info@bistro-boxenstopp.de</p>
          </div>

          <div className="flex md:justify-end items-start gap-3">
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

        <div className="flex justify-center mb-6">
          <a
            href="#google-review"
            className="inline-flex items-center gap-2 bg-warm-gold text-warm-gold-foreground px-5 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Star size={16} />
            Auf Google bewerten
          </a>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row justify-center gap-4 text-xs text-primary-foreground/40">
          <Link to="/impressum" className="hover:text-primary-foreground transition-colors">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-primary-foreground transition-colors">Datenschutz</Link>
          <span>© {new Date().getFullYear()} Bistro Boxenstopp</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
