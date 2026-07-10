import { useState } from "react";
import { Home, Navigation, DoorOpen, Trees, ParkingCircle, Bike } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import parkplaetzeImg from "@/assets/parkplaetze.jpg";
import treppeImg from "@/assets/treppe.jpg";
import eingangImg from "@/assets/eingang.jpg";
import aussenterrasseImg from "@/assets/aussenterrasse.jpg";
import fahrradstaenderImg from "@/assets/fahrradstaender.jpg";
import aussenansichtHausImg from "@/assets/aussenansicht-haus.jpg";

const NAVY = "#164472";
const BRONZE = "#9E7C4E";
const CREAM = "#FEF4EC";
const WARM_BROWN = "#6B4A2E";
const BORDER = "#EDE0D0";

const placeholders = [
  { icon: Home, caption: "Außenansicht unseres Hauses am Südhang 1", image: aussenansichtHausImg },
  { icon: Navigation, caption: "Die Treppe führt euch direkt zu uns", image: treppeImg },
  { icon: DoorOpen, caption: "Unser Eingang", image: eingangImg },
  { icon: Trees, caption: "Unsere Außenterrasse mit Schatten und Schirm", image: aussenterrasseImg },
  { icon: ParkingCircle, caption: "6 Kundenparkplätze und 4 öffentliche Parkplätze am Haus", image: parkplaetzeImg },
  { icon: Bike, caption: "Fahrradständer am Eingang, direkt am Bodensee-Königssee-Radweg", image: fahrradstaenderImg },
];

interface WegweiserProps {
  /** Optional: Hintergrundfarbe der Section (Standard: bg-background). */
  background?: "background" | "cream";
}

const Wegweiser = ({ background = "background" }: WegweiserProps) => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const sectionBg = background === "cream" ? CREAM : undefined;

  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: sectionBg }}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-10">
          <p
            className="font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-3"
            style={{ color: BRONZE }}
          >
            Wegweiser
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3" style={{ color: NAVY }}>
            So findet ihr uns
          </h2>
          <p style={{ color: WARM_BROWN }}>
            Ein kleiner Wegweiser für euren ersten Besuch
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {placeholders.map((p, i) => {
            const Icon = p.icon;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setLightbox(i)}
                className="text-left bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow focus:outline-none focus:ring-2"
                style={{ border: `1px solid ${BORDER}` }}
                aria-label={`Bild vergrößern: ${p.caption}`}
              >
                <div
                  className="aspect-[4/3] flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: CREAM }}
                >
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.caption}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Icon className="w-16 h-16" style={{ color: BRONZE }} aria-hidden="true" />
                  )}
                </div>
                <div className="p-4">
                  <p className="text-sm" style={{ color: WARM_BROWN }}>
                    {p.caption}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <Dialog open={lightbox !== null} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-2xl">
          {lightbox !== null && (
            <>
              <DialogTitle className="font-serif text-xl" style={{ color: NAVY }}>
                {placeholders[lightbox].caption}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Vorschau zum Bild: {placeholders[lightbox].caption}
              </DialogDescription>
              <div
                className="aspect-[4/3] flex items-center justify-center rounded-lg overflow-hidden"
                style={{ backgroundColor: CREAM }}
              >
                {placeholders[lightbox].image ? (
                  <img
                    src={placeholders[lightbox].image}
                    alt={placeholders[lightbox].caption}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  (() => {
                    const Icon = placeholders[lightbox].icon;
                    return <Icon className="w-32 h-32" style={{ color: BRONZE }} aria-hidden="true" />;
                  })()
                )}
              </div>
              {!placeholders[lightbox].image && (
                <p className="text-sm text-muted-foreground text-center">
                  Foto folgt – Platzhalter
                </p>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Wegweiser;
