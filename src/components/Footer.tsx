import { Instagram, Facebook, ExternalLink, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <p className="font-serif text-2xl font-bold text-primary-foreground mb-2">Bistro Boxenstopp</p>
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

        <div className="flex justify-center gap-5 mb-8">
          <a
            href="https://www.instagram.com/fites.allgaeu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.facebook.com/share/1CE6CEvvEr/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://www.fites-allgaeu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            aria-label="FITES Website"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        <div className="flex justify-center mb-8">
          <a
            href="#google-review"
            className="inline-flex items-center gap-2 bg-warm-gold text-warm-gold-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Star size={16} />
            Auf Google bewerten
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-6 text-sm">
          <a href="#impressum" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
            Impressum
          </a>
          <a href="#datenschutz" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
            Datenschutz
          </a>
        </div>

        <p className="text-primary-foreground/40 text-xs text-center">
          © {new Date().getFullYear()} Bistro Boxenstopp. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
