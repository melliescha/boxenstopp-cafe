import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import MenuTileView from "@/components/MenuTileView";
import FlipbookMenu from "@/components/FlipbookMenu";
import { Download } from "lucide-react";

type Tab = "karte" | "flipbook";

const Menu = () => {
  const [tab, setTab] = useState<Tab>("karte");

  return (
    <Layout>
      <SEO title="Speisekarte – Bistro Boxenstopp Hergatz" description="Unsere Karte: Flammkuchen, Pizza-Snacks, Baguettes, Barista-Kaffee, Matcha, Proteinshakes, alkoholfreies Bier und der berühmte Boxenstopp-Spezial mit Kollagen." path="/speisekarte" />
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
