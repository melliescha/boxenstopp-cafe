import { Link } from "react-router-dom";

import flammkuchenLachs from "@/assets/flammkuchen-lachs.png";
import raclettebrot from "@/assets/raclettebrot-rustikal.jpg";
import thunfischBaguette from "@/assets/thunfisch-baguette.png";
import pizzettaMargherita from "@/assets/pizzetta-margherita.png";
import pizzasnackSalami from "@/assets/pizzasnack-salami.png";

interface Bestseller {
  image: string;
  alt: string;
  name: string;
  description: string;
  price: string;
  badge: string;
  badgeColor: string;
}

const bestsellers: Bestseller[] = [
  {
    image: flammkuchenLachs,
    alt: "Flammkuchen mit Lachs und Lauch",
    name: "Flammkuchen Lachs & Lauch",
    description: "Flammkuchencreme, Lachs und Lauch — unser beliebtester Flammkuchen",
    price: "7,30 €",
    badge: "🔥 Beliebtestes Gericht",
    badgeColor: "bg-orange-600/85",
  },
  {
    image: raclettebrot,
    alt: "Hüttenbrot Raclette mit Raclettekäse und Lauch",
    name: "Hüttenbrot Raclette",
    description: "Schwarzbrot mit Knoblauchbutter, Raclettekäse und Lauch",
    price: "7,70 €",
    badge: "🧀 Käseliebhaber",
    badgeColor: "bg-amber-700/85",
  },
  {
    image: thunfischBaguette,
    alt: "Gourmet Baguette mit Thunfisch, Zwiebeln, Gouda und Béchamelsauce",
    name: "Gourmet Baguette Thunfisch",
    description: "Mit Thunfisch, Zwiebeln, Gouda und Béchamelsauce",
    price: "6,20 €",
    badge: "🐟 Beliebt",
    badgeColor: "bg-sky-700/85",
  },
  {
    image: pizzettaMargherita,
    alt: "Pizzetta Margherita mit Tomatensauce und Käse",
    name: "Pizzetta Margherita",
    description: "Tomatensauce und Käse — der kleine Klassiker für zwischendurch",
    price: "3,60 €",
    badge: "🥖 Für den kleinen Hunger",
    badgeColor: "bg-emerald-600/85",
  },
  {
    image: pizzasnackSalami,
    alt: "Pizzasnack Salami mit Pizzasauce, Käse und Salami",
    name: "Pizzasnack Salami",
    description: "Pizzasauce, Käse und Salami — schnell, lecker, handlich",
    price: "3,80 €",
    badge: "🍕 Snack-Favorit",
    badgeColor: "bg-red-700/85",
  },
];

const BestsellerCard = ({ item }: { item: Bestseller }) => (
  <div className="group min-w-[260px] sm:min-w-0 snap-center bg-card rounded-xl border border-bronze/30 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <div className="relative aspect-square overflow-hidden">
      <img
        src={item.image}
        alt={item.alt}
        width={512}
        height={512}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <span className={`absolute top-3 left-3 ${item.badgeColor} text-white text-xs font-medium px-2.5 py-1 rounded-full`}>
        {item.badge}
      </span>
    </div>
    <div className="p-4 text-center">
      <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{item.name}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.description}</p>
      <span className="text-bronze font-semibold text-base">{item.price}</span>
    </div>
  </div>
);

const BestsellerSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center mb-10">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
          Unsere Bestseller ✨
        </h2>
        <p className="text-muted-foreground text-lg">Das bestellen unsere Gäste am liebsten.</p>
        <div className="divider-bronze mt-4" />
      </div>

      {/* Desktop: 5 cols, Tablet: 3 cols grid, Mobile: horizontal scroll */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {bestsellers.map((item) => (
          <BestsellerCard key={item.name} item={item} />
        ))}
      </div>

      {/* Mobile: horizontal scroll with snap */}
      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-2 px-2 scrollbar-hide">
        {bestsellers.map((item) => (
          <BestsellerCard key={item.name} item={item} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/speisekarte"
          className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Zur kompletten Speisekarte →
        </Link>
      </div>
    </div>
  </section>
);

export default BestsellerSection;
