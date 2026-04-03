import { Coffee, UtensilsCrossed, GlassWater, Dumbbell } from "lucide-react";

const categories = [
  {
    icon: Coffee,
    title: "Kaffee & Matcha",
    subtitle: "Partner: Cup&Cino",
    items: ["Espresso", "Cappuccino", "Latte Macchiato", "Matcha Latte", "Kakao"],
  },
  {
    icon: UtensilsCrossed,
    title: "Essen",
    subtitle: "Frisch & lecker",
    items: [
      "Frische Baguettes (verschiedene Beläge)",
      "Gourmet-Flammkuchen (wechselnde Sorten)",
      "Tagesgebäck (Muffins, Kuchen – je nach Verfügbarkeit)",
    ],
  },
  {
    icon: GlassWater,
    title: "Erfrischungen",
    subtitle: "Kalt & prickelnd",
    items: ["Apfelschorle", "Alkoholfreies Bier", "Wasser still/medium", "Softdrinks"],
  },
  {
    icon: Dumbbell,
    title: "Herbalife Nutrition",
    subtitle: "Power für den Körper",
    items: [
      "Protein-Shake (verschiedene Geschmacksrichtungen)",
      "Herbalife Tee",
      "Protein-Riegel",
    ],
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-2">Unsere Auswahl</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Speisekarte</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <cat.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{cat.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground text-xs mb-5 ml-[3.25rem]">{cat.subtitle}</p>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
