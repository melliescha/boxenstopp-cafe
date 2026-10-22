import { Printer } from "lucide-react";
import { menuCategories, menuProducts } from "@/data/menuData";
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
  title: string;
  items?: PriceItem[];
  subsections?: SubSection[];
}

const categories: PriceCategory[] = menuCategories
  .filter((category) => category !== "Alle")
  .map((title) => ({
    title,
    items: menuProducts.filter((product) => product.category === title).map((product) => ({
      name: product.name,
      price: product.price,
      note: [product.description, ...(product.variants?.map((variant) => `${variant.label}: ${variant.price}`) ?? [])].join(" · "),
      allergens: product.allergens,
      volume: product.volume,
      featured: product.featured,
    })),
  }));

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
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <span className={`text-sm sm:text-base ${item.featured ? "text-foreground font-bold" : "text-foreground font-medium"}`}>
        {item.name}
        {item.allergens && (
          <sup className="text-[10px] text-bronze ml-0.5">({item.allergens})</sup>
        )}
        {item.volume && (
          <span className="text-xs text-muted-foreground ml-1">{item.volume}</span>
        )}
      </span>
      <span className="hidden sm:block flex-1 border-b border-dotted border-bronze/30 mx-2 min-w-[1.5rem]" />
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

        <div className="mt-6 rounded-lg border border-bronze/30 bg-card px-5 py-4">
          <p className="text-sm font-semibold text-foreground mb-2">
            Vegan, glutenfrei und Kreuzkontamination
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Wir bieten vegane Milchalternativen wie Hafermilch an; ausdrücklich glutenfreie
            Speisen haben wir aktuell nicht im Angebot. Da wir alles in einer offenen Küche mit gemeinsamen Geräten,
            Arbeitsflächen und Milchsystemen zubereiten, können wir eine vollständige Frei-von-
            Garantie jedoch <strong>nicht</strong> geben. Spuren durch Kreuzkontamination
            (z. B. Gluten, Milch, Nüsse, Soja) sind nicht auszuschließen; eine Haftung dafür
            können wir nicht übernehmen. Was wir aber tun: Unser Milchsystem wird jedes Mal
            gereinigt, wenn wir von Kuhmilch auf Hafermilch umstellen. Bei Allergien,
            Unverträglichkeiten oder einer streng veganen Ernährung sprich uns bitte vor der
            Bestellung direkt an, wir beraten dich gerne persönlich.
          </p>
        </div>
        <p className="text-xs text-muted-foreground italic text-center mt-6">
          Alle Angaben ohne Gewähr.
        </p>

        <p className="text-xs text-muted-foreground text-center mt-3">
          Alle Preise sind Endpreise in Euro (Kleinunternehmer gemäß § 19 UStG, daher kein
          Umsatzsteuerausweis). Preisänderungen und Irrtümer vorbehalten; verbindlich sind die
          Preise der Aushänge und Karten vor Ort.
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
