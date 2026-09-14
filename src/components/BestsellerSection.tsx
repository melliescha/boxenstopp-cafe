import { Link } from "react-router-dom";

import AiBadge from "@/components/AiBadge";


import flammkuchenLachs from "@/assets/flammkuchen-lachs.png";
import flammkuchenMediterran from "@/assets/flammkuchen-mediterran.png";
import raclettebrot from "@/assets/raclettebrot-rustikal.jpg";
import holzfaellerbrot from "@/assets/holzfaellerbrot-rustikal.jpg";
import tomatenMozzarellaBrot from "@/assets/tomaten-mozzarella-brot.jpg";

interface Bestseller {
  image: string;
  alt: string;
  name: string;
  description: string;
  price: string;
  badge: string;
}

const bestsellers: Bestseller[] = [
  {
    image: flammkuchenLachs,
    alt: "KI generiert: Flammkuchen mit Lachs und Lauch",
    name: "Flammkuchen Lachs & Lauch",
    description: "Flammkuchencreme, Lachs und Lauch, unser beliebtester Flammkuchen",
    price: "7,30 €",
    badge: "Beliebtestes Gericht",
  },
  {
    image: flammkuchenMediterran,
    alt: "KI generiert: Flammkuchen Mediterran mit Hirtenkäse, Paprika und Zucchini",
    name: "Flammkuchen Mediterran",
    description: "Flammkuchencreme, Hirtenkäse, gegrillte Paprika und Zucchini",
    price: "6,30 €",
    badge: "Vegetarisch",
  },
  {
    image: raclettebrot,
    alt: "KI generiert: Hüttenbrot Raclette mit Raclettekäse und Lauch",
    name: "Hüttenbrot Raclette",
    description: "Schwarzbrot mit Knoblauchbutter, Raclettekäse und Lauch",
    price: "7,70 €",
    badge: "Käseliebhaber",
  },
  {
    image: holzfaellerbrot,
    alt: "KI generiert: Hüttenbrot Speck mit Käse, Speck, Zwiebeln und Schnittlauch",
    name: "Hüttenbrot Speck",
    description: "Schwarzbrot mit Knoblauchbutter, Käse, Speck, Zwiebeln und Schnittlauch",
    price: "7,40 €",
    badge: "Sattmacher",
  },
  {
    image: tomatenMozzarellaBrot,
    alt: "KI generiert: Hüttenbrot Tomate Mozzarella mit Basilikum",
    name: "Hüttenbrot Tomate Mozzarella",
    description: "Weizenbrot mit Basilikum, Mozzarella und Tomaten",
    price: "7,40 €",
    badge: "Vegetarisch",
  },
];

const BestsellerCard = ({ item }: { item: Bestseller }) => (
  <article className="group flex h-full flex-col overflow-hidden border border-border bg-card">
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={item.image}
        alt={item.alt}
        width={512}
        height={384}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <span className="absolute left-3 top-3 bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">
        {item.badge}
      </span>
      <AiBadge />

    </div>
    <div className="flex flex-1 flex-col p-4">
      <h3 className="font-serif font-semibold text-foreground mb-1 text-base md:text-lg leading-snug">{item.name}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-3 flex-1">{item.description}</p>
      <span className="text-bronze font-semibold text-base">{item.price}</span>
    </div>
  </article>
);

const BestsellerSection = () => (
  <section className="py-10 md:py-14 bg-background">
    <div className="container mx-auto px-6">
      <div className="mb-8 max-w-2xl">
        <p className="text-bronze font-bold tracking-[0.2em] uppercase text-xs mb-2">Aus unserer Küche</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
          Unsere Bestseller
        </h2>
        <p className="text-muted-foreground text-lg">Das bestellen unsere Gäste am liebsten.</p>
      </div>

      {/* Einheitliches, flüssiges Raster: alle Kacheln gleich groß */}
      <div className="grid grid-cols-1 min-[360px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
        {bestsellers.map((item) => (
          <BestsellerCard key={item.name} item={item} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/speisekarte"
        className="inline-block bg-primary px-8 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Zur kompletten Speisekarte →
        </Link>
      </div>
    </div>
  </section>
);

export default BestsellerSection;
