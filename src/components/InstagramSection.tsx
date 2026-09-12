import { Instagram, ExternalLink } from "lucide-react";
import { socialLinks } from "@/config/social";
import Reveal from "@/components/Reveal";

import img1 from "@/assets/gallery/essen-flammkuchen-speck-perplex.jpg";
import img2 from "@/assets/gallery/getraenk-matcha-latte.jpg";
import img3 from "@/assets/gallery/essen-eis-hoernchen-mango.jpg";
import img4 from "@/assets/gallery/innen-theke-uebersicht.jpg";
import img5 from "@/assets/gallery/aussen-terrasse-eingang.jpg";
import img6 from "@/assets/gallery/essen-latte-muffin-donut-terrasse.jpg";
import img7 from "@/assets/gallery/essen-flammkuchen-tomate-mozzarella.jpg";
import img8 from "@/assets/gallery/essen-flammkuchen-lachs.jpg";
import img9 from "@/assets/gallery/essen-flammkuchen-gemuese-feta.jpg";
import img10 from "@/assets/gallery/essen-eis-schoko-himbeere.jpg";
import img11 from "@/assets/gallery/essen-cappuccino-muffin-donut.jpg";
import img12 from "@/assets/gallery/getraenk-zwei-cappuccino.jpg";
import img13 from "@/assets/gallery/essen-latte-macchiato-donut-muffin.jpg";
import img14 from "@/assets/gallery/essen-flammkuchen-speck-meckatzer.jpg";
import img15 from "@/assets/gallery/essen-zwei-flammkuchen-tomate-speck.jpg";
import img16 from "@/assets/gallery/essen-cornetto-max.jpg";
import img17 from "@/assets/gallery/essen-flammkuchen-lachs-lauch.jpg";
import img18 from "@/assets/gallery/essen-baguette-tomate-mozzarella.jpg";
import img19 from "@/assets/gallery/essen-baguette-salami-schorle.jpg";
import img20 from "@/assets/gallery/aussen-terrasse-schild.jpg";

const posts = [
  { src: img1, alt: "Flammkuchen mit Speck auf dem Tisch im Bistro Boxenstopp" },
  { src: img2, alt: "Matcha Latte im Glas" },
  { src: img3, alt: "Eishörnchen mit Mangoeis" },
  { src: img4, alt: "Blick auf die Theke im Bistro Boxenstopp" },
  { src: img5, alt: "Terrasse und Eingang des Bistro Boxenstopp" },
  { src: img6, alt: "Latte Macchiato mit Muffin und Donut auf der Terrasse" },
  { src: img7, alt: "Hüttenbrot mit Tomate, Mozzarella und Basilikum" },
  { src: img8, alt: "Flammkuchen mit Lachs und Lauch" },
  { src: img9, alt: "Mediterraner Flammkuchen mit Feta, Paprika und Zucchini" },
  { src: img10, alt: "Schoko-Himbeer-Eis am Stiel in der Sonne" },
  { src: img11, alt: "Cappuccino mit Schoko-Muffin und Donut auf der Terrasse" },
  { src: img12, alt: "Zwei Cappuccinos mit Wasser und Frühlingsblumen" },
  { src: img13, alt: "Zwei Latte Macchiato mit Donut und Heidelbeer-Muffin" },
  { src: img14, alt: "Flammkuchen mit Speck und alkoholfreiem Meckatzer Hell" },
  { src: img15, alt: "Zwei Flammkuchen: mediterran und klassisch mit Speck" },
  { src: img16, alt: "Cornetto Max Eishörnchen auf dem Terrassentisch" },
  { src: img17, alt: "Flammkuchen mit Lachs, Lauch und Petersilie" },
  { src: img18, alt: "Gourmet Baguette Tomate Mozzarella mit Basilikum" },
  { src: img19, alt: "Gourmet Baguette mit Apfelschorle auf der Terrasse" },
  { src: img20, alt: "Terrasse mit Café-Boxenstopp-Schild und Frühlingsblumen" },
];

interface InstagramSectionProps {
  /** Anzahl gezeigter Fotos, Standard 6 */
  limit?: number;
  /** Überschrift, Standard „Folge uns auf Instagram" */
  heading?: string;
  /** Unterzeile, Standardbeschreibung des Profils */
  subline?: string;
}

/**
 * Datenschutzsichere Instagram-Vorschau:
 * Es werden ausschließlich eigene, lokal gehostete Bilder gezeigt.
 * Es wird kein Meta-/Instagram-Skript und kein Embed geladen,
 * es fließen also keine Daten an Meta, bevor der Nutzer den Link anklickt.
 */
export default function InstagramSection({
  limit = 6,
  heading = "Folge uns auf Instagram",
  subline = "@bistro.boxenstopp: Tagesangebote, neue Flammkuchen, Eis und Matcha Kreationen und alles, was bei uns gerade frisch aus dem Ofen kommt.",
}: InstagramSectionProps) {
  const visible = posts.slice(0, limit);

  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full bg-bronze/10 flex items-center justify-center mx-auto mb-4">
            <Instagram className="w-7 h-7 text-bronze" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            {heading}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subline}</p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {visible.map((p, idx) => (
            <li key={p.alt}>
              <Reveal delay={(idx % 8) * 60}>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative overflow-hidden rounded-xl border border-border/50 shadow-sm hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze transition-shadow duration-300"
                  aria-label={`${p.alt}. Öffnet unser Instagram Profil in einem neuen Tab`}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/25 transition-colors flex items-center justify-center">
                    <Instagram
                      className="w-7 h-7 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity min-h-[44px]"
          >
            <Instagram size={18} aria-hidden="true" />
            Profil auf Instagram ansehen
            <ExternalLink size={16} aria-hidden="true" />
          </a>
          <p className="text-xs text-muted-foreground mt-4 max-w-xl mx-auto">
            Datenschutzhinweis: Diese Vorschau zeigt eigene Bilder von unserem Server.
            Es werden keine Inhalte von Instagram geladen und keine Daten an Meta übertragen.
            Erst wenn du den Link anklickst, wechselst du zu Instagram, dort gilt die
            Datenschutzerklärung von Meta. Mehr dazu in unserer{" "}
            <a href="/datenschutz" className="underline hover:no-underline">
              Datenschutzerklärung
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
