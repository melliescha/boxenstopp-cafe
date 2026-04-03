import { useState } from "react";
import Layout from "@/components/Layout";
import PriceList from "@/components/PriceList";
import FlipbookMenu from "@/components/FlipbookMenu";

type Tab = "preisliste" | "karte";

const Menu = () => {
  const [tab, setTab] = useState<Tab>("preisliste");

  return (
    <Layout>
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
                onClick={() => setTab("preisliste")}
                className={`font-serif text-sm sm:text-base px-5 sm:px-8 py-2.5 transition-colors ${
                  tab === "preisliste"
                    ? "bg-bronze text-bronze-foreground"
                    : "bg-transparent text-bronze hover:bg-bronze/10"
                }`}
              >
                Preisliste
              </button>
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
            </div>
          </div>

          {/* Tab content */}
          {tab === "preisliste" && <PriceList />}
          {tab === "karte" && <FlipbookMenu />}
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
