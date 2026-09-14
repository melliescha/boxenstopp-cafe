import flammkuchenImage from "@/assets/bestseller-flammkuchen.jpg";

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
  instagram?: boolean;
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
      "Unser Beeren-Flammkuchen ist die süße Antwort auf unsere herzhaften Klassiker: knuspriger Flammkuchenboden, cremige Basis und fruchtige Beeren, frisch aus dem Ofen serviert.",
      "Er passt perfekt zu einem Cappuccino auf der schattigen Terrasse und lässt sich gut teilen, wenn ihr zu zweit oder in der Gruppe unterwegs seid.",
      "Aktuelle Fotos und kurze Eindrücke zeigen wir laufend auf Instagram. Schaut dort vorbei, wenn ihr sehen wollt, wie er aussieht, bevor ihr bei uns bestellt.",
    ],
    image: flammkuchenImage,
    imageAlt: "KI generiert: Flammkuchen aus dem Bistro Boxenstopp in Hergatz",
    instagram: true,
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
    instagram: true,
  },
];
