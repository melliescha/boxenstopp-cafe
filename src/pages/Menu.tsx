import { Printer } from "lucide-react";
import Layout from "@/components/Layout";

interface MenuItem {
  name: string;
  price: string;
  note?: string;
}

interface Category {
  emoji: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

const categories: Category[] = [
  {
    emoji: "☕",
    title: "Kaffee & Matcha",
    subtitle: "In Zusammenarbeit mit Cup&Cino",
    items: [
      { name: "Espresso", price: "2,50 €" },
      { name: "Doppelter Espresso", price: "3,50 €" },
      { name: "Cappuccino", price: "3,80 €" },
      { name: "Latte Macchiato", price: "4,20 €" },
      { name: "Flat White", price: "4,00 €" },
      { name: "Matcha Latte", price: "4,50 €" },
      { name: "Kakao", price: "3,50 €" },
      { name: "Tee (verschiedene Sorten)", price: "3,00 €" },
    ],
  },
  {
    emoji: "🥐",
    title: "Essen",
    items: [
      { name: "Frisches Baguette (wechselnde Beläge)", price: "4,50 €" },
      {
        name: "Gourmet-Flammkuchen (wechselnde Sorten)",
        price: "8,90 €",
        note: "Unsere Flammkuchen kommen von unserem Partner Perplex — regionaler Genuss aus dem Allgäu",
      },
      {
        name: "Tagesgebäck (Muffins, Kuchen)",
        price: "ab 2,50 €",
        note: "Je nach Verfügbarkeit — frag einfach nach!",
      },
    ],
  },
  {
    emoji: "🥤",
    title: "Erfrischungen",
    items: [
      { name: "Apfelschorle", price: "3,00 €" },
      { name: "Wasser still/medium", price: "2,50 €" },
      { name: "Softdrinks", price: "3,00 €" },
      { name: "Alkoholfreies Bier", price: "3,50 €" },
    ],
  },
  {
    emoji: "💚",
    title: "Herbalife Nutrition",
    items: [
      {
        name: "Protein-Shake (versch. Geschmacksrichtungen)",
        price: "4,50 €",
        note: "Ideal vor oder nach dem Training",
      },
      { name: "Herbalife Tee", price: "3,50 €" },
      { name: "Protein-Riegel", price: "2,50 €" },
      { name: "Mineralgetränk", price: "3,00 €" },
    ],
  },
];

const Menu = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Print button */}
          <div className="flex justify-end mb-4 no-print">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Printer size={16} />
              Drucken
            </button>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-bronze font-medium tracking-[0.2em] uppercase text-sm mb-2">Unsere Auswahl</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Speisekarte</h1>
            <div className="divider-bronze" />
          </div>

          {/* Categories */}
          <div className="space-y-16">
            {categories.map((cat) => (
              <div key={cat.title}>
                <div className="text-center mb-8">
                  <span className="text-2xl mr-2">{cat.emoji}</span>
                  <h2 className="font-serif-italic text-2xl md:text-3xl font-semibold text-foreground inline">
                    {cat.title}
                  </h2>
                  {cat.subtitle && (
                    <p className="text-muted-foreground text-sm mt-1">{cat.subtitle}</p>
                  )}
                  <div className="w-12 h-px bg-bronze mx-auto mt-4" />
                </div>

                <ul className="space-y-4">
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-foreground font-medium">{item.name}</span>
                        <span className="flex-1 border-b border-dotted border-bronze/40 mx-2 min-w-[2rem]" />
                        <span className="text-bronze font-semibold whitespace-nowrap">{item.price}</span>
                      </div>
                      {item.note && (
                        <p className="text-muted-foreground text-xs mt-1 italic pl-0">{item.note}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-16 text-center">
            <div className="divider-bronze mb-6" />
            <p className="text-muted-foreground text-sm italic leading-relaxed">
              Mit jedem Kaffee unterstützt du die Cup&Cino Foundation — 1 Cent pro Tasse geht an soziale Projekte.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
