import { Coffee, Croissant, Salad, Wine } from "lucide-react";

const categories = [
  {
    icon: Coffee,
    title: "Kaffee & Getränke",
    items: [
      { name: "Espresso", price: "2,50 €" },
      { name: "Cappuccino", price: "3,80 €" },
      { name: "Latte Macchiato", price: "4,20 €" },
      { name: "Hausgemachte Limo", price: "3,50 €" },
    ],
  },
  {
    icon: Croissant,
    title: "Frühstück",
    items: [
      { name: "Croissant mit Butter & Marmelade", price: "3,90 €" },
      { name: "Boxenstopp-Frühstück", price: "9,90 €" },
      { name: "Avocado-Toast", price: "7,50 €" },
      { name: "Granola Bowl", price: "6,80 €" },
    ],
  },
  {
    icon: Salad,
    title: "Mittags & Snacks",
    items: [
      { name: "Tagessuppe", price: "5,50 €" },
      { name: "Caesar Salad", price: "8,90 €" },
      { name: "Club Sandwich", price: "9,50 €" },
      { name: "Quiche Lorraine", price: "7,90 €" },
    ],
  },
  {
    icon: Wine,
    title: "Kuchen & Süßes",
    items: [
      { name: "Käsekuchen", price: "4,50 €" },
      { name: "Schokoladentorte", price: "4,90 €" },
      { name: "Apfelstrudel", price: "5,20 €" },
      { name: "Tiramisu", price: "5,50 €" },
    ],
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-2">Unsere Auswahl</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Speisekarte</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <cat.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">{cat.title}</h3>
              </div>
              <ul className="space-y-4">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-2">
                    <span className="text-foreground font-medium">{item.name}</span>
                    <span className="flex-1 border-b border-dashed border-border mx-2 min-w-[2rem]" />
                    <span className="text-accent font-semibold whitespace-nowrap">{item.price}</span>
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
