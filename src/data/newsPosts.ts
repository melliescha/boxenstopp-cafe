import flammkuchenImage from "@/assets/news/beeren-flammkuchen.jpg";
import sponsorImage from "@/assets/news/sponsor-tsv-wohmbrechts.jpg";

export type NewsPost = {
  slug: string;
  title: string;
  date: string; // ISO
  dateLabel: string;
  category: string;
  excerpt: string;
  body: string[];
  image?: string;
  imageAlt?: string;
  instagramUrl?: string;
};

/**
 * Aktuelle Meldungen aus dem Bistro Boxenstopp.
 * Neuer Beitrag: einfach oben im Array ergänzen.
 */
export const newsPosts: NewsPost[] = [
  {
    slug: "beeren-flammkuchen",
    title: "Neu bei uns: der Beeren-Flammkuchen",
    date: "2026-09-12",
    dateLabel: "12. September 2026",
    category: "Neu auf der Karte",
    excerpt:
      "Süßer Flammkuchen mit fruchtigen Beeren, frisch aus dem Ofen. Unsere neue Empfehlung für alle, die den Nachmittag genießen wollen.",
    body: [
      "Unser Beeren-Flammkuchen ist ganz neu auf der Karte und wie gemacht für die kühleren Tage: warm, wohltuend und einfach köstlich. Das Zusammenspiel aus süßen Beeren und einer feinen Vanille-Note schmeckt ein bisschen wie der warme Grießbrei, den es früher bei Oma gab.",
      "Kommt vorbei, macht es euch gemütlich und probiert unseren neuen Herbst-Favoriten, am besten mit einem Cappuccino auf der Terrasse.",
    ],
    image: flammkuchenImage,
    imageAlt: "Beeren-Flammkuchen mit Himbeeren und Blaubeeren auf der Terrasse des Bistro Boxenstopp in Hergatz",
    instagramUrl: "https://www.instagram.com/p/Dc-9zEzqJe1/",
  },
  {
    slug: "sponsor-tsv-wohmbrechts",
    title: "Wir sind offizieller Sponsor des TSV Wohmbrechts",
    date: "2026-09-05",
    dateLabel: "5. September 2026",
    category: "Nachbarschaft",
    excerpt:
      "Habt ihr unser Banner beim TSV Wohmbrechts schon gesehen? Wir unterstützen den Verein in unserer Nachbarschaft ab dieser Saison als offizieller Sponsor.",
    body: [
      "Habt ihr unser Banner beim TSV Wohmbrechts schon entdeckt? Ab dieser Saison unterstützen wir den Verein als offizieller Sponsor.",
      "Der TSV gehört zu Wohmbrechts wie unser Bistro zu diesem Haus. Sport bringt Menschen zusammen, und genau darum geht es uns auch: ein Ort für die Nachbarschaft, für Begegnung und für Gemeinschaft in Hergatz.",
      "Nach dem Training oder nach dem Spiel seid ihr bei uns herzlich willkommen, für einen Kaffee, einen Shake oder einen Flammkuchen auf der Terrasse.",
    ],
    instagramUrl: "https://www.instagram.com/p/Dcwd9S9kd2m/",
  },
];
