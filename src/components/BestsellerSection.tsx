import { Link } from "react-router-dom";

import bestsellerMatcha from "@/assets/bestseller-matcha.jpg";
import bestsellerSpezial from "@/assets/bestseller-spezial.jpg";
import bestsellerFlammkuchen from "@/assets/bestseller-flammkuchen.jpg";
import bestsellerHolzfaellerbrot from "@/assets/bestseller-holzfaellerbrot.jpg";
import bestsellerShake from "@/assets/bestseller-shake.jpg";

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
    image: bestsellerMatcha,
    alt: "Vegan Matcha Latte mit Latte Art",
    name: "Vegan Matcha Latte",
    description: "Unser cremiger Matcha, mit pflanzlicher Milch, 100% vegan",
    price: "3,50 € – 3,80 €",
    badge: "🌱 Vegan",
    badgeColor: "bg-green-600/85",
  },
  {
    image: bestsellerSpezial,
    alt: "Boxenstopp Spezial — Kollagen Latte Macchiato",
    name: "Boxenstopp Spezial",
    description: "Kollagen Latte Macchiato mit einer Prise Salz und Rohkakao, unser Signature Drink",
    price: "4,90 €",
    badge: "⭐ Hausspezialität",
    badgeColor: "bg-[hsl(43,55%,48%)]/85",
  },
  {
    image: bestsellerFlammkuchen,
    alt: "Flammkuchen Lachs und Lauch",
    name: "Flammkuchen Lachs & Lauch",
    description: "Unser beliebtester Flammkuchen, mit Flammkuchencreme, Lachs und Lauch",
    price: "7,30 €",
    badge: "🔥 Beliebtestes Gericht",
    badgeColor: "bg-orange-600/85",
  },
  {
    image: bestsellerHolzfaellerbrot,
    alt: "Holzfällerbrot rustikal auf Holzbrett",
    name: "Holzfällerbrot",
    description: "Handgemachtes Schwarzbrot mit Knoblauchbutter, Käse, Speck, Zwiebeln und Schnittlauch",
    price: "7,40 €",
    badge: "💪 Sattmacher",
    badgeColor: "bg-amber-800/85",
  },
  {
    image: bestsellerShake,
    alt: "Bunter Herbalife Nährshake mit Früchten",
    name: "Nährshake",
    description: "Vitaminreich, lecker und in vielen Geschmacksrichtungen. Ideal nach dem Sport.",
    price: "2,50 € – 4,50 €",
    badge: "💚 Nach dem Sport",
    badgeColor: "bg-emerald-600/85",
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
