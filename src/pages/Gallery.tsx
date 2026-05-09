import { useState } from "react";
import { X } from "lucide-react";
import Layout from "@/components/Layout";

import heroBistro from "@/assets/hero-bistro.jpg";

type Category = "all" | "innen" | "aussen" | "essen";

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "all">;
}

const images: GalleryImage[] = [
  { src: heroBistro, alt: "Gemütlicher Innenbereich des Bistro Boxenstopp", category: "innen" },
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
