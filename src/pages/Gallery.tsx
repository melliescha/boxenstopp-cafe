import { useState } from "react";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

import heroBistro from "@/assets/hero-bistro.jpg";
import essenTomateMozzarella from "@/assets/gallery/essen-flammkuchen-tomate-mozzarella.jpg";
import essenFlammkuchenLachs from "@/assets/gallery/essen-flammkuchen-lachs.jpg";
import essenFlammkuchenGemuese from "@/assets/gallery/essen-flammkuchen-gemuese-feta.jpg";
import innenSitzbereich from "@/assets/gallery/innen-sitzbereich-tische.jpg";
import innenTheke from "@/assets/gallery/innen-theke-bedienung.jpg";
import innenBilderwand from "@/assets/gallery/innen-bilderwand-ledersessel.jpg";
import innenShaker from "@/assets/gallery/innen-shaker-snacks.jpg";
import innenThekeUebersicht from "@/assets/gallery/innen-theke-uebersicht.jpg";
import essenEisSchokoHimbeere from "@/assets/gallery/essen-eis-schoko-himbeere.jpg";
import essenEisHoernchenMango from "@/assets/gallery/essen-eis-hoernchen-mango.jpg";
import essenCappuccinoMuffinDonut from "@/assets/gallery/essen-cappuccino-muffin-donut.jpg";
import getraenkMatchaLatte from "@/assets/gallery/getraenk-matcha-latte.jpg";
import getraenkZweiCappuccino from "@/assets/gallery/getraenk-zwei-cappuccino.jpg";
import essenLatteDonutMuffin from "@/assets/gallery/essen-latte-macchiato-donut-muffin.jpg";
import aussenTerrasseSchirm from "@/assets/aussenterrasse.jpg";
import aussenTerrasseEingang from "@/assets/gallery/aussen-terrasse-eingang.jpg";
import aussenTerrasseSchild from "@/assets/gallery/aussen-terrasse-schild.jpg";
import aussenFitesFassade from "@/assets/gallery/aussen-fites-fassade.jpg";
import aussenTreppeBank from "@/assets/gallery/aussen-treppe-bank.jpg";
import aussenSitzplatzSchirm from "@/assets/gallery/aussen-sitzplatz-schirm.jpg";
import innenLedersesselPflanze from "@/assets/gallery/innen-ledersessel-pflanze.jpg";
import innenBartischeBilderwand from "@/assets/gallery/innen-bartische-bilderwand.jpg";
import essenFlammkuchenSpeckMeckatzer from "@/assets/gallery/essen-flammkuchen-speck-meckatzer.jpg";
import essenLatteMuffinDonutTerrasse from "@/assets/gallery/essen-latte-muffin-donut-terrasse.jpg";
import essenFlammkuchenSpeckPerplex from "@/assets/gallery/essen-flammkuchen-speck-perplex.jpg";
import essenZweiFlammkuchenTomateSpeck from "@/assets/gallery/essen-zwei-flammkuchen-tomate-speck.jpg";
import essenCornettoMax from "@/assets/gallery/essen-cornetto-max.jpg";
import essenFlammkuchenLachsLauch from "@/assets/gallery/essen-flammkuchen-lachs-lauch.jpg";
import aussenHausFrontStrasse from "@/assets/aussenansicht-haus.jpg";
import aussenHausSeitlichWiese from "@/assets/gallery/aussen-haus-seitlich-wiese.jpg";
import aussenFitesGarageReifen from "@/assets/gallery/aussen-fites-garage-reifen.jpg";
import aussenStrasseKreuzungHaus from "@/assets/gallery/aussen-strasse-kreuzung-haus.jpg";

type Category = "all" | "innen" | "aussen" | "essen";

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "all">;
}

const images: GalleryImage[] = [
  { src: heroBistro, alt: "Sonnige Terrasse des Bistro Boxenstopp im Außenbereich", category: "aussen" },
  { src: aussenTerrasseSchirm, alt: "Außenterrasse mit Sonnenschirm, Holztischen und Loungemöbeln vor Natursteinmauer", category: "aussen" },
  { src: aussenTerrasseEingang, alt: "Blick von der Treppe auf die Terrasse mit Sonnenschirm und Eingangsbereich", category: "aussen" },
  { src: aussenTerrasseSchild, alt: "Terrasse mit Café-Boxenstopp-Schild, Steinmauer und Frühlingsblumen", category: "aussen" },
  { src: aussenFitesFassade, alt: "FITES-Fassade mit gepflegtem Steingarten und Holzbank", category: "aussen" },
  { src: aussenTreppeBank, alt: "Treppe zum Eingang mit gemütlicher Holzbank am Bistro Boxenstopp", category: "aussen" },
  { src: aussenSitzplatzSchirm, alt: "Sitzplatz mit Sonnenschirm, Lounge-Sessel und Holztischen vor Natursteinmauer", category: "aussen" },
  { src: aussenHausFrontStrasse, alt: "Außenansicht unseres Hauses am Südhang 1 mit Doppelgarage und Eingangsbereich", category: "aussen" },
  { src: aussenHausSeitlichWiese, alt: "Seitliche Außenansicht des Hauses mit Wiese und blauem Himmel", category: "aussen" },
  { src: aussenFitesGarageReifen, alt: "FITES-Studio mit Garage, Traktorreifen und Outdoor-Trainingsbereich", category: "aussen" },
  { src: aussenStrasseKreuzungHaus, alt: "Anfahrt zum Bistro Boxenstopp – Blick von der Kreuzung auf das Haus am Südhang 1", category: "aussen" },
  { src: innenSitzbereich, alt: "Heller Sitzbereich mit Holztischen und modernen Stühlen im Bistro Boxenstopp", category: "innen" },
  { src: innenTheke, alt: "Helena bedient einen Gast an der Theke des Bistro Boxenstopp", category: "innen" },
  { src: innenBilderwand, alt: "Bilderwand mit Sport-Motiven und gemütliche Ledersessel im Innenbereich", category: "innen" },
  { src: innenShaker, alt: "Goldener Shaker und Snacks an der Theke vor dem Herbalife-Regal", category: "innen" },
  { src: innenThekeUebersicht, alt: "Übersicht der Theke mit Kaffeemaschine und stimmungsvoller Beleuchtung", category: "innen" },
  { src: innenLedersesselPflanze, alt: "Gemütliche Sitzecke mit schwarzen Ledersesseln vor dekorativer 3D-Wand", category: "innen" },
  { src: innenBartischeBilderwand, alt: "Bartische mit Lederhockern, Pizzasnack und Bilderwand mit Sport-Motiven", category: "innen" },
  { src: essenTomateMozzarella, alt: "Unser vegetarisches Hüttenbrot mit Tomate, Mozzarella und frischem Basilikum", category: "essen" },
  { src: essenFlammkuchenLachs, alt: "Flammkuchen mit Lachs, Lauch und Schnittlauch, serviert mit Orangensaft", category: "essen" },
  { src: essenFlammkuchenGemuese, alt: "Unser mediterraner Flammkuchen mit Feta, Paprika, Zucchini und frischen Kräutern", category: "essen" },
  { src: essenEisSchokoHimbeere, alt: "Cremiges Schoko-Himbeer-Eis am Stiel mit Schokoladenhülle in der Frühlingssonne", category: "essen" },
  { src: essenEisHoernchenMango, alt: "Eishörnchen mit Mango und weißer Schokolade vor sonniger Allgäuer Kulisse", category: "essen" },
  { src: essenCappuccinoMuffinDonut, alt: "Cup&Cino Cappuccino mit Schoko-Muffin und Donut auf der Terrasse", category: "essen" },
  { src: getraenkMatchaLatte, alt: "Matcha Latte im Cup&Cino Glas vor sonniger Steinmauer", category: "essen" },
  { src: getraenkZweiCappuccino, alt: "Zwei Cup&Cino Cappuccinos mit Wasser und Frühlingsblumen vor dem FITES-Fenster", category: "essen" },
  { src: essenLatteDonutMuffin, alt: "Zwei Latte Macchiato mit Donut und Heidelbeer-Muffin auf der Terrasse", category: "essen" },
  { src: essenFlammkuchenSpeckMeckatzer, alt: "Herzhafter Flammkuchen mit Speck und Schnittlauch, dazu ein alkoholfreies Meckatzer Hell auf der Terrasse", category: "essen" },
  { src: essenLatteMuffinDonutTerrasse, alt: "Zwei Cup&Cino Latte Macchiato mit Heidelbeer-Muffin und Donut auf der sonnigen Terrasse", category: "essen" },
  { src: essenFlammkuchenSpeckPerplex, alt: "Flammkuchen mit Speck und Schnittlauch auf Perplex-Holzbrett im Innenbereich", category: "essen" },
  { src: essenZweiFlammkuchenTomateSpeck, alt: "Zwei Flammkuchen – mediterran mit Tomate und Basilikum sowie klassisch mit Speck", category: "essen" },
  { src: essenCornettoMax, alt: "Cornetto Max Eishörnchen auf dem Terrassentisch mit gelben Frühlingsblumen", category: "essen" },
  { src: essenFlammkuchenLachsLauch, alt: "Flammkuchen mit Lachs, Lauch und Petersilie, dazu Orangensaft auf der Terrasse", category: "essen" },
];

const tabs: { label: string; value: Category }[] = [
  { label: "Alles", value: "all" },
  { label: "Innenbereich", value: "innen" },
  { label: "Terrasse & Außen", value: "aussen" },
  { label: "Essen & Getränke", value: "essen" },
];

const Gallery = () => {
  const [filter, setFilter] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <Layout>
      <SEO title="Galerie – Bistro Boxenstopp Hergatz" description="Eindrücke aus unserem Bistro im Allgäu: Kaffeespezialitäten, Flammkuchen, Atmosphäre." path="/galerie" />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-bronze font-medium tracking-[0.2em] uppercase text-sm mb-2">Bildergalerie</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Einblicke ins Bistro Boxenstopp
            </h1>
            <div className="divider-bronze mb-4" />
            <p className="text-muted-foreground">Mach dir selbst ein Bild. So sieht's bei uns aus.</p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === tab.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {filtered.map((img, i) => (
                <button
                  key={img.alt}
                  onClick={() => setLightbox(i)}
                  className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer aspect-[4/3]"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground italic">
              In dieser Kategorie sind aktuell noch keine Bilder vorhanden.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-primary/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:opacity-70 transition-opacity"
            onClick={() => setLightbox(null)}
            aria-label="Schließen"
          >
            <X size={32} />
          </button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-0 right-0 text-center text-primary-foreground/70 text-sm">
            {filtered[lightbox].alt}
          </p>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
