import { Printer } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";


interface PriceItem {
  name: string;
  price: string;
  note?: string;
  featured?: boolean;
  allergens?: string;
  volume?: string;
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
      { name: "Espresso", price: "1,90 € – 2,30 €", note: "Barista Qualität", allergens: "11" },
      { name: "Americano", price: "2,20 € – 2,60 €", note: "Barista Qualität", allergens: "11" },
      { name: "Caffè Crema", price: "2,20 € – 3,20 €", note: "Barista Qualität", allergens: "11" },
    ],
  },
  {
    emoji: "☕",
    title: "Milchkaffee-Varianten",
    items: [
      { name: "★ Boxenstopp Spezial", price: "4,90 €", note: "Kollagen Latte Macchiato mit einer Prise Salz und Rohkakao, unsere Hausspezialität", featured: true, allergens: "G,11" },
      { name: "Caffè Latte (Milchkaffee)", price: "2,40 € – 3,40 €", note: "Barista Qualität", allergens: "G,11" },
      { name: "Cappuccino", price: "2,40 € – 3,40 €", note: "Barista Qualität", allergens: "G,11" },
      { name: "Cappuccino Schoko oder Vanille", price: "2,60 € – 3,60 €", note: "Barista Qualität", allergens: "G,11" },
      { name: "Latte Macchiato", price: "2,60 € – 3,80 €", note: "Barista Qualität", allergens: "G,11" },
      { name: "Flat White", price: "2,60 € – 3,20 €", note: "Barista Qualität", allergens: "G,11" },
    ],
  },
  {
    emoji: "🍵",
    title: "Wohlfühlgetränke",
    items: [
      { name: "Kakao", price: "2,00 € – 3,20 €", allergens: "G" },
      { name: "Latte Vanilla", price: "2,00 € – 3,20 €", allergens: "G" },
      { name: "Matcha-Latte", price: "3,50 € – 3,80 €", note: "auch vegan mit Pflanzenmilch", allergens: "G" },
      { name: "Vegan Matcha Latte", price: "3,50 € – 3,80 €", note: "100% vegan mit Pflanzenmilch", allergens: "F" },
      { name: "Tee (nach Wahl)", price: "1,80 €", note: "in Bio-Qualität" },
    ],
  },
  {
    emoji: "🍩",
    title: "Süßes Gebäck & Dessert",
    items: [
      { name: "Donut (nach Wahl)", price: "1,80 €", allergens: "A,C,G" },
      { name: "Muffin (nach Wahl)", price: "2,50 €", allergens: "A,C,G" },
      { name: "Affogato", price: "3,50 €", note: "Espresso mit Vanilleeis", allergens: "G,11" },
      { name: "Obst (verschiedenes)", price: "0,50 €" },
    ],
  },
  {
    emoji: "🥖",
    title: "Herzhafte Backwaren",
    subsections: [
      {
        subtitle: "Gourmet Baguettes",
        items: [
          { name: "Gourmet Baguette Thunfisch", price: "6,20 €", note: "Baguette nach französischer Art mit Thunfisch, Zwiebeln, Gouda, Kräuter und einer Béchamelsauce", allergens: "A,D,G" },
          { name: "Gourmet Baguette Tomate Mozzarella", price: "6,20 €", note: "Baguette nach französischer Art mit getrockneten Tomaten, Basilikum und einer Béchamel-Tomatensauce", allergens: "A,G" },
          { name: "Gourmet Baguette Provence", price: "6,20 €", note: "Zutaten folgen in Kürze" },
          { name: "Gourmet Baguette Rustikal", price: "6,20 €", note: "Zutaten folgen in Kürze" },
        ],
      },
      {
        subtitle: "Hüttenbrote",
        items: [
          { name: "Hüttenbrot Speck", price: "7,40 €", note: "Handgemachtes Schwarzbrot mit Knoblauchbutter, Käse, Speck, Zwiebeln, Schnittlauch und Gewürzen", allergens: "A,G" },
          { name: "Hüttenbrot Tomate Mozzarella", price: "7,40 €", note: "Handgemachtes Weizenbrot mit Basilikum, Mozzarella, Tomaten und Gewürzen", allergens: "A,G" },
          { name: "Hüttenbrot Raclette", price: "7,70 €", note: "Handgemachtes Schwarzbrot mit Knoblauchbutter, Raclettekäse, Lauch und Gewürze", allergens: "A,G" },
        ],
      },
      {
        subtitle: "Flammkuchen",
        items: [
          { name: "Flammkuchen Elsässer Art", price: "6,30 €", note: "Flammkuchencreme, Speck und Zwiebeln", allergens: "A,G" },
          { name: "Flammkuchen Griechische Art", price: "6,30 €", note: "Flammkuchencreme, Peperoni, Hirtenkäse und bunter Pfeffer", allergens: "A,G" },
          { name: "Flammkuchen Mediterran", price: "6,30 €", note: "Flammkuchencreme, Hirtenkäse, gegrillte Paprika, Zucchini und mediterrane Gewürze", allergens: "A,G" },
          { name: "Flammkuchen Lachs & Lauch", price: "7,30 €", note: "Flammkuchencreme, Lachs und Lauch", allergens: "A,D,G" },
        ],
      },
      {
        subtitle: "Pizzasnacks & Pizzetta",
        items: [
          { name: "Pizzasnack Caprese", price: "3,50 €", note: "Pizzasauce, Käse und Kirschtomaten", allergens: "A,G" },
          { name: "Pizzasnack Salami", price: "3,80 €", note: "Pizzasauce, Käse und Salami", allergens: "A,G" },
          { name: "Pizzetta Margherita", price: "3,60 €", note: "Tomatensauce und Käse", allergens: "A,G" },
          { name: "Pizzetta Salami", price: "3,95 €", note: "Tomatensauce, Käse und Salami", allergens: "A,G" },
        ],
      },
    ],
  },
  {
    emoji: "🥤",
    title: "Getränke",
    items: [
      { name: "Apfel- und Fruchtschorle", price: "2,25 €", note: "bei Mitnahme zzgl. Pfand", volume: "0,33l" },
      { name: "Wasser still / medium / spritzig", price: "1,75 €", note: "bei Mitnahme zzgl. Pfand", volume: "0,5l" },
      { name: "Säfte (verschiedene Sorten)", price: "2,50 €", volume: "0,25l" },
      { name: "Alkoholfreies Bier (nach Wahl)", price: "3,00 €", volume: "0,33l" },
      { name: "Electrolyte (Herbalife-24)", price: "2,90 €" },
      { name: "Energy (Herbalife LIFTOFF)", price: "3,50 €", allergens: "11" },
    ],
  },
  {
    emoji: "💚",
    title: "Nährshakes & Snacks",
    items: [
      { name: "Shake Herbalife (versch. Geschmacksrichtungen)", price: "2,50 € – 4,50 €", note: "Nährshakes mit Vitaminen", allergens: "F,G" },
      { name: "Proteinriegel (nach Wahl)", price: "2,50 € – 3,90 €", allergens: "?" },
      { name: "Müsliriegel Expressmahlzeit (nach Wahl)", price: "3,90 €", allergens: "?" },
      { name: "Protein-Chips (nach Wahl)", price: "2,40 €", allergens: "?" },
    ],
  },
];

const allergenLegend = [
  { code: "A", name: "Glutenhaltiges Getreide" },
  { code: "B", name: "Krebstiere" },
  { code: "C", name: "Eier" },
  { code: "D", name: "Fisch" },
  { code: "E", name: "Erdnüsse" },
  { code: "F", name: "Soja" },
  { code: "G", name: "Milch / Laktose" },
  { code: "H", name: "Schalenfrüchte" },
  { code: "I", name: "Sellerie" },
  { code: "J", name: "Senf" },
  { code: "K", name: "Sesam" },
  { code: "L", name: "Schwefeldioxid / Sulfite" },
  { code: "M", name: "Lupinen" },
  { code: "N", name: "Weichtiere" },
];

const additiveLegend = [
  { code: "1", name: "mit Farbstoff" },
  { code: "2", name: "mit Konservierungsstoff" },
  { code: "3", name: "mit Antioxidationsmittel" },
  { code: "4", name: "mit Geschmacksverstärker" },
  { code: "5", name: "geschwefelt" },
  { code: "6", name: "geschwärzt" },
  { code: "7", name: "gewachst" },
  { code: "8", name: "mit Phosphat" },
  { code: "9", name: "mit Süßungsmittel" },
  { code: "10", name: "enthält eine Phenylalaninquelle" },
  { code: "11", name: "koffeinhaltig" },
  { code: "12", name: "chininhaltig" },
];

const ItemRow = ({ item }: { item: PriceItem }) => (
  <li className={item.featured ? "bg-bronze/5 -mx-3 px-3 py-2 rounded-lg border border-bronze/20" : ""}>
    <div className="flex items-baseline justify-between gap-2">
      <span className={`text-sm sm:text-base ${item.featured ? "text-foreground font-bold" : "text-foreground font-medium"}`}>
        {item.name}
        {item.allergens && (
          <sup className="text-[10px] text-bronze ml-0.5">({item.allergens})</sup>
        )}
        {item.volume && (
          <span className="text-xs text-muted-foreground ml-1">{item.volume}</span>
        )}
      </span>
      <span className="flex-1 border-b border-dotted border-bronze/30 mx-2 min-w-[1.5rem]" />
      <span className="text-bronze font-semibold whitespace-nowrap text-sm sm:text-base">{item.price}</span>
    </div>
    {item.note && (
      <p className={`text-xs mt-0.5 italic ${item.featured ? "text-bronze" : "text-muted-foreground"}`}>{item.note}</p>
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
        <div className="hidden print:flex items-center justify-center gap-3 mb-4">
          <img src={logoIcon} alt="Bistro Boxenstopp Logo" className="h-14 w-auto" />
          <span className="font-serif text-2xl font-bold text-foreground">Bistro Boxenstopp</span>
        </div>
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

      {/* Allergen & Additive Legend */}
      <div className="mt-16 max-w-2xl mx-auto">
        <div className="divider-bronze mb-8" />
        <h3 className="font-serif text-xl font-bold text-foreground text-center mb-6">
          Allergen- und Zusatzstoffinformationen
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Allergens */}
          <div>
            <h4 className="font-medium text-foreground text-sm mb-3">Allergene</h4>
            <div className="space-y-1.5">
              {allergenLegend.map((a) => (
                <div key={a.code} className="flex items-baseline gap-2 text-xs">
                  <span className="font-bold text-bronze w-4">{a.code}</span>
                  <span className="text-muted-foreground">{a.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additives */}
          <div>
            <h4 className="font-medium text-foreground text-sm mb-3">Zusatzstoffe</h4>
            <div className="space-y-1.5">
              {additiveLegend.map((a) => (
                <div key={a.code} className="flex items-baseline gap-2 text-xs">
                  <span className="font-bold text-bronze w-5">{a.code}</span>
                  <span className="text-muted-foreground">{a.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground italic text-center mt-6">
          Alle Angaben ohne Gewähr. Bitte sprich uns bei Allergien oder Unverträglichkeiten direkt an,
          wir beraten dich gerne persönlich.
        </p>
      </div>

      {/* Footer note */}
      <div className="mt-14 text-center">
        <div className="divider-bronze mb-6" />
        <p className="text-muted-foreground text-sm italic leading-relaxed">
          Mit jedem Kaffee unterstützt du die Cup&Cino Foundation: 1 Cent pro Tasse für soziale Projekte.
        </p>
      </div>
    </div>
  );
};

export default PriceList;
