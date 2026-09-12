import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import MenuTileView from "@/components/MenuTileView";
import PriceList from "@/components/PriceList";
import { Download, Loader2, Star, List, LayoutGrid } from "lucide-react";
import { socialLinks } from "@/config/social";
import { toast } from "sonner";
import { menuPageSchema } from "@/lib/schema";
import { downloadMenuPdf } from "@/lib/menuPdf";

const Menu = () => {
  const [downloading, setDownloading] = useState(false);
  const [view, setView] = useState<"liste" | "kacheln">("liste");

  const handleDownloadPdf = async () => {
    try {
      setDownloading(true);
      downloadMenuPdf();
      toast.success("PDF heruntergeladen");
    } catch (err) {
      console.error("PDF download failed", err);
      toast.error("PDF konnte nicht erstellt werden.");
    } finally {
      setDownloading(false);
    }
  };

  useEffect(() => {
    const menuSchema = {
      "@context": "https://schema.org",
      "@type": "Menu",
      "name": "Speisekarte Bistro Boxenstopp",
      "inLanguage": "de",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Kaffeespezialitäten",
          "description": "Barista-Kaffee von Cup&Cino in Spitzenqualität",
          "hasMenuItem": [
            {"@type": "MenuItem", "name": "Espresso"},
            {"@type": "MenuItem", "name": "Cappuccino"},
            {"@type": "MenuItem", "name": "Latte Macchiato"},
            {"@type": "MenuItem", "name": "Café Crème"},
            {"@type": "MenuItem", "name": "Boxenstopp Spezial", "description": "Kollagen Latte Macchiato mit Roh-Kakao und Meersalz, unser Signature Drink"},
            {"@type": "MenuItem", "name": "Matcha Latte", "description": "Mit Hafermilch optional"},
          ],
        },
        {
          "@type": "MenuSection",
          "name": "Herzhaft",
          "description": "Ofenfrische Speisen von unserem Partner Perplex, handbelegt",
          "hasMenuItem": [
            {"@type": "MenuItem", "name": "Flammkuchen", "description": "Verschiedene Sorten, ofenfrisch"},
            {"@type": "MenuItem", "name": "Hüttenbrot Speck", "description": "Schwarzbrot mit Knoblauchbutter, Käse, Speck, Zwiebeln und Schnittlauch"},
            {"@type": "MenuItem", "name": "Hüttenbrot Tomate Mozzarella"},
            {"@type": "MenuItem", "name": "Hüttenbrot Raclette"},
            {"@type": "MenuItem", "name": "Gourmet Baguette"},

            
          ],
        },
        {
          "@type": "MenuSection",
          "name": "Sportler-Drinks",
          "description": "Energie für vor, während und nach dem Workout",
          "hasMenuItem": [
            {"@type": "MenuItem", "name": "Herbalife Protein-Shake"},
            {"@type": "MenuItem", "name": "Herbalife Nähr-Shake"},
            {"@type": "MenuItem", "name": "Iso-Mineralgetränke"},
          ],
        },
      ],
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "menu-schema";
    script.textContent = JSON.stringify(menuSchema);
    document.head.appendChild(script);
    return () => {
      const existing = document.head.querySelector('script[id="menu-schema"]');
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  return (
    <Layout>
      <SEO title="Speisekarte, Bistro Boxenstopp Hergatz" description="Unsere Karte: Flammkuchen, Brote, Barista-Kaffee, Matcha, Proteinshakes und der berühmte Boxenstopp-Spezial mit Kollagen." path="/speisekarte" image="/og/speisekarte.jpg" imageAlt="Speisekarte des Bistro Boxenstopp: Flammkuchen, Kaffee und Shakes" jsonLd={menuPageSchema} />
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* Foundation note */}
          <div className="max-w-2xl mx-auto mb-10 text-center">
            <div className="rounded-lg border border-bronze/30 bg-bronze/10 px-5 py-4 text-sm md:text-base font-medium text-bronze">
              Mit jedem Kaffee unterstützt du die Cup&Cino Foundation: 1 Cent pro Tasse für soziale Projekte. ☕{" "}
              <Link to="/partner#foundation" className="inline-flex items-center gap-1 font-semibold underline underline-offset-2 hover:text-primary transition-colors whitespace-nowrap">
                mehr erfahren
              </Link>
            </div>
          </div>

          {/* Page title */}
          <div className="text-center mb-10">
            <p className="text-bronze font-medium tracking-[0.2em] uppercase text-sm mb-2">Unsere Auswahl</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Speisekarte</h1>
            <div className="divider-bronze mb-8" />

            {/* PDF Download */}
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="inline-flex items-center justify-center gap-2 rounded-lg font-serif text-sm sm:text-base px-6 sm:px-8 py-3 bg-bronze text-bronze-foreground hover:opacity-90 transition-opacity disabled:opacity-60 no-print"
              style={{ minHeight: "48px" }}
            >
              {downloading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
              {downloading ? "Erstelle PDF…" : "Speisekarte als PDF herunterladen"}
            </button>
          </div>

          {/* Speisekarte */}
          <MenuTileView />

          {/* Google Bewertung CTA */}
          <div className="max-w-2xl mx-auto mt-14 text-center">
            <div className="rounded-lg border border-bronze/30 bg-bronze/10 px-5 py-6">
              <p className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2">
                Hat es dir geschmeckt?
              </p>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Eine kurze Google-Bewertung hilft uns sehr und dauert nur eine Minute.
              </p>
              <a
                href={socialLinks.googleReview}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg font-serif text-sm sm:text-base px-6 sm:px-8 py-3 bg-bronze text-bronze-foreground hover:opacity-90 transition-opacity"
                style={{ minHeight: "48px" }}
              >
                <Star size={18} />
                Auf Google bewerten
              </a>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Menu;
