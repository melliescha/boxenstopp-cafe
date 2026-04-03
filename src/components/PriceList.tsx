import { Printer } from "lucide-react";

interface PriceItem {
  name: string;
  price: string;
  note?: string;
}

interface SubSection {
  subtitle: string;
  items: PriceItem[];
}

interface PriceCategory {
  emoji: string;
  title: string;
  items?: PriceItem[];
  subsections?: SubSection[];
}

const categories: PriceCategory[] = [
  {
    emoji: "☕",
    title: "Kaffee Klassiker",
    items: [
      { name: "Espresso", price: "1,90 € – 2,30 €", note: "Barista Qualität" },
      { name: "Americano", price: "2,20 € – 2,60 €", note: "Barista Qualität" },
      { name: "Caffè Crema", price: "2,20 € – 3,20 €", note: "Barista Qualität" },
    ],
  },
  {
    emoji: "☕",
    title: "Milchkaffee-Varianten",
    items: [
      { name: "Caffè Latte (Milchkaffee)", price: "2,40 € – 3,40 €", note: "Barista Qualität" },
      { name: "Cappuccino", price: "2,40 € – 3,40 €", note: "Barista Qualität" },
      { name: "Cappuccino Schoko oder Vanille", price: "2,60 € – 3,60 €", note: "Barista Qualität" },
      { name: "Latte Macchiato", price: "2,60 € – 3,80 €", note: "Barista Qualität" },
      { name: "Flat White", price: "2,60 € – 3,20 €", note: "Barista Qualität" },
    ],
  },
  {
    emoji: "🍵",
    title: "Wohlfühlgetränke",
    items: [
      { name: "Kakao", price: "2,00 € – 3,20 €" },
      { name: "Latte Vanilla", price: "2,00 € – 3,20 €" },
      { name: "Matcha-Latte", price: "3,50 € – 3,80 €" },
      { name: "Tee (nach Wahl)", price: "1,80 €", note: "in Bio-Qualität" },
    ],
  },
  {
    emoji: "🍩",
    title: "Süßes Gebäck & Dessert",
    items: [
      { name: "Donut (nach Wahl)", price: "1,80 €" },
      { name: "Muffin (nach Wahl)", price: "2,50 €" },
      { name: "Affogato", price: "3,50 €", note: "Espresso mit Vanilleeis" },
      { name: "Obst (verschiedenes)", price: "0,50 €" },
    ],
  },
  {
    emoji: "🥖",
    title: "Herzhafte Backwaren",
    subsections: [
      {
        subtitle: "Baguettes",
        items: [
          { name: "Fitness Baguette-Premium", price: "6,80 €", note: "Körnerbaguette nach französischer Art mit Hähnchenbrustschinken und Gouda" },
          { name: "Grillgemüse Baguette-Premium", price: "6,80 €", note: "Baguette nach französischer Art mit Zucchini, Champignons, Tomaten, Paprika rot/gelb, Mozzarella und Kräutersauce" },
          { name: "Schwarzwälder Laugen Baguette-Premium", price: "7,40 €", note: "Hausgemachte Laugenbaguette mit rohem Schinken und Gouda" },
          { name: "Thunfisch Baguette-Gourmet", price: "6,20 €", note: "Baguette nach französischer Art mit Thunfisch, Zwiebeln, Gouda, Kräuter und einer Béchamelsauce" },
          { name: "Tomate Mozzarella Baguette-Gourmet", price: "6,20 €", note: "Baguette nach französischer Art mit getrockneten Tomaten, Basilikum und einer Béchamel-Tomatensauce" },
        ],
      },
      {
        subtitle: "Rustikale Brote",
        items: [
          { name: "Holzfällerbrot-Rustikal", price: "7,40 €", note: "Handgemachtes Schwarzbrot mit Knoblauchbutter, Käse, Speck, Zwiebeln, Schnittlauch und Gewürzen" },
          { name: "Tomaten Mozzarella Brot-Rustikal", price: "7,40 €", note: "Handgemachtes Weizenbrot mit Basilikum, Mozzarella, Tomaten und Gewürzen" },
          { name: "Raclettebrot-Rustikal", price: "7,70 €", note: "Handgemachtes Schwarzbrot mit Knoblauchbutter, Raclettekäse, Lauch und Gewürze" },
        ],
      },
      {
        subtitle: "Flammkuchen",
        items: [
          { name: "Flammkuchen Elsässer Art", price: "6,30 €", note: "Flammkuchencreme, Speck und Zwiebeln" },
          { name: "Flammkuchen Griechische Art", price: "6,30 €", note: "Flammkuchencreme, Peperoni, Hirtenkäse und bunter Pfeffer" },
          { name: "Flammkuchen Mediterran", price: "6,30 €", note: "Flammkuchencreme, Hirtenkäse, gegrillte Paprika, Zucchini und mediterrane Gewürze" },
          { name: "Flammkuchen Lachs & Lauch", price: "7,30 €", note: "Flammkuchencreme, Lachs und Lauch" },
        ],
      },
      {
        subtitle: "Pizzasnacks",
        items: [
          { name: "Pizzasnack Caprese", price: "3,50 €", note: "Pizzasauce, Käse und Kirschtomaten" },
          { name: "Pizzasnack Salami", price: "3,50 €", note: "Pizzasauce, Käse und Salami" },
        ],
      },
    ],
  },
  {
    emoji: "🥤",
    title: "Getränke",
    items: [
      { name: "Apfel- und Fruchtschorle", price: "2,25 €", note: "bei Mitnahme zzgl. Pfand" },
      { name: "Wasser still / medium / spritzig", price: "1,75 €", note: "bei Mitnahme zzgl. Pfand" },
      { name: "Säfte (verschiedene Sorten)", price: "2,50 €" },
      { name: "Alkoholfreies Bier (nach Wahl)", price: "3,00 €" },
      { name: "Electrolyte (Herbalife-24)", price: "2,90 €" },
      { name: "Energy (Herbalife LIFTOFF)", price: "3,50 €" },
    ],
  },
  {
    emoji: "💚",
    title: "Nährshakes & Snacks",
    items: [
      { name: "Shake Herbalife (versch. Geschmacksrichtungen)", price: "2,50 € – 4,50 €", note: "Nährshakes mit Vitaminen" },
      { name: "Proteinriegel (nach Wahl)", price: "2,50 € – 3,90 €" },
      { name: "Müsliriegel Expressmahlzeit (nach Wahl)", price: "3,90 €" },
      { name: "Protein-Chips (nach Wahl)", price: "2,40 €" },
    ],
  },
];

const ItemRow = ({ item }: { item: PriceItem }) => (
  <li>
    <div className="flex items-baseline justify-between gap-2">
      <span className="text-foreground font-medium text-sm sm:text-base">{item.name}</span>
      <span className="flex-1 border-b border-dotted border-bronze/30 mx-2 min-w-[1.5rem]" />
      <span className="text-bronze font-semibold whitespace-nowrap text-sm sm:text-base">{item.price}</span>
    </div>
    {item.note && (
      <p className="text-muted-foreground text-xs mt-0.5 italic">{item.note}</p>
    )}
  </li>
);

const PriceList = () => {
  return (
    <div>
      {/* Print button */}
      <div className="flex justify-end mb-6 no-print">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-lg px-4 py-2"
        >
          <Printer size={16} />
          Drucken
        </button>
      </div>

      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Preisliste</h2>
        <div className="divider-bronze" />
      </div>

      {/* Categories */}
      <div className="space-y-14 max-w-2xl mx-auto">
        {categories.map((cat) => (
          <div key={cat.title}>
            <div className="text-center mb-6">
              <span className="text-xl mr-2">{cat.emoji}</span>
              <h3 className="font-serif-italic text-xl md:text-2xl font-semibold text-foreground inline">
                {cat.title}
              </h3>
              <div className="w-12 h-px bg-bronze mx-auto mt-3" />
            </div>

            {cat.items && (
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <ItemRow key={item.name} item={item} />
                ))}
              </ul>
            )}

            {cat.subsections && (
              <div className="space-y-8">
                {cat.subsections.map((sub) => (
                  <div key={sub.subtitle}>
                    <h4 className="font-serif text-lg font-semibold text-foreground mb-4">{sub.subtitle}</h4>
                    <ul className="space-y-3">
                      {sub.items.map((item) => (
                        <ItemRow key={item.name} item={item} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-14 text-center">
        <div className="divider-bronze mb-6" />
        <p className="text-muted-foreground text-sm italic leading-relaxed">
          Mit jedem Kaffee unterstützt du die Cup&Cino Foundation — 1 Cent pro Tasse für soziale Projekte.
        </p>
      </div>
    </div>
  );
};

export default PriceList;
