import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import MenuTileView from "@/components/MenuTileView";
import FlipbookMenu from "@/components/FlipbookMenu";
import { Download } from "lucide-react";

type Tab = "karte" | "flipbook";

const Menu = () => {
  const [tab, setTab] = useState<Tab>("karte");

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
            {"@type": "MenuItem", "name": "Holzfällerbrot Speck", "description": "Schwarzbrot mit Knoblauchbutter, Käse, Speck, Zwiebeln und Schnittlauch"},
            {"@type": "MenuItem", "name": "Holzfällerbrot Tomate Mozzarella"},
            {"@type": "MenuItem", "name": "Holzfällerbrot Raclette"},
            {"@type": "MenuItem", "name": "Gourmet Baguette"},
            {"@type": "MenuItem", "name": "Pizza-Snack", "description": "Kleiner Hunger, kleiner Preis"},
            
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
      <SEO title="Speisekarte – Bistro Boxenstopp Hergatz" description="Unsere Karte: Flammkuchen, Pizza-Snacks, rustikale Brote, Barista-Kaffee, Matcha, Proteinshakes, alkoholfreies Bier und der berühmte Boxenstopp-Spezial mit Kollagen." path="/speisekarte" />
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* Page title */}
          <div className="text-center mb-10">
            <p className="text-bronze font-medium tracking-[0.2em] uppercase text-sm mb-2">Unsere Auswahl</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Speisekarte</h1>
            <div className="divider-bronze mb-8" />

            {/* Tab switcher */}
            <div className="inline-flex rounded-lg border border-bronze/40 overflow-hidden no-print">
              <button
                onClick={() => setTab("karte")}
                className={`font-serif text-sm sm:text-base px-5 sm:px-8 py-2.5 transition-colors ${
                  tab === "karte"
                    ? "bg-bronze text-bronze-foreground"
                    : "bg-transparent text-bronze hover:bg-bronze/10"
                }`}
              >
                Unsere Karte
              </button>
              <button
                onClick={() => setTab("flipbook")}
                className={`font-serif text-sm sm:text-base px-5 sm:px-8 py-2.5 transition-colors ${
                  tab === "flipbook"
                    ? "bg-bronze text-bronze-foreground"
                    : "bg-transparent text-bronze hover:bg-bronze/10"
                }`}
              >
                Speisekarte zum Blättern
              </button>
            </div>
          </div>

          {/* Flipbook toolbar */}
          {tab === "flipbook" && (
            <div className="flex justify-end mb-4 no-print">
              <a
                href="/speisekarte.pdf"
                download="Speisekarte-Bistro-Boxenstopp.pdf"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-lg px-4 py-2"
              >
                <Download size={16} />
                Als PDF herunterladen
              </a>
            </div>
          )}

          {/* Tab content */}
          {tab === "karte" && <MenuTileView />}
          {tab === "flipbook" && <FlipbookMenu />}

        </div>
      </section>
    </Layout>
  );
};

export default Menu;
