import { useRef, useState, useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { forwardRef } from "react";

import galleryCappuccino from "@/assets/gallery-cappuccino.jpg";

import menuMatchaPastries from "@/assets/menu-matcha-pastries.jpg";
import menuBaguette from "@/assets/menu-baguette.jpg";
import menuRusticBread from "@/assets/menu-rustic-bread.jpg";
import galleryFlammkuchen from "@/assets/gallery-flammkuchen.jpg";
import menuShakes from "@/assets/menu-shakes.jpg";
import heroBistro from "@/assets/hero-bistro.jpg";

// Page wrapper for react-pageflip (requires forwardRef)
const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>(
  ({ children, className = "" }, ref) => (
    <div ref={ref} className={`bg-[#fef4ec] overflow-hidden ${className}`}>
      <div className="w-full h-full border border-bronze/20 p-4 sm:p-6 md:p-8 flex flex-col">
        {children}
      </div>
    </div>
  )
);
Page.displayName = "Page";

const PageNumber = ({ num }: { num: number }) => (
  <div className="mt-auto pt-2 text-center text-xs text-muted-foreground/60">{num}</div>
);

interface FlipItem {
  name: string;
  price: string;
  note?: string;
}

const FlipMenuItem = ({ item }: { item: FlipItem }) => (
  <div className="mb-2.5">
    <div className="flex items-baseline justify-between gap-1">
      <span className="font-serif text-xs sm:text-sm font-medium text-foreground">{item.name}</span>
      <span className="flex-1 border-b border-dotted border-bronze/25 mx-1 min-w-[0.5rem]" />
      <span className="text-bronze font-semibold whitespace-nowrap text-xs sm:text-sm">{item.price}</span>
    </div>
    {item.note && <p className="text-muted-foreground text-[10px] sm:text-xs italic mt-0.5">{item.note}</p>}
  </div>
);

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-4">
    <h3 className="font-serif-italic text-base sm:text-lg md:text-xl font-semibold text-foreground">{title}</h3>
    {subtitle && <p className="text-muted-foreground text-[10px] sm:text-xs mt-0.5">{subtitle}</p>}
    <div className="w-8 h-px bg-bronze mt-2" />
  </div>
);

const ImagePage = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-full h-full object-cover rounded-sm" loading="lazy" />
);

const FlipbookMenu = () => {
  const flipBookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(14);

  const onFlip = useCallback((e: any) => {
    setCurrentPage(e.data);
  }, []);

  const onInit = useCallback((e: any) => {
    setTotalPages(e?.data?.pages || 14);
  }, []);

  const goNext = () => flipBookRef.current?.pageFlip()?.flipNext();
  const goPrev = () => flipBookRef.current?.pageFlip()?.flipPrev();

  return (
    <div className="flex flex-col items-center">
      {/* Flipbook */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Nav arrows */}
        <button
          onClick={goPrev}
          className="no-print absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-bronze/30 flex items-center justify-center text-bronze hover:bg-secondary transition-colors shadow-sm"
          aria-label="Vorherige Seite"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={goNext}
          className="no-print absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-bronze/30 flex items-center justify-center text-bronze hover:bg-secondary transition-colors shadow-sm"
          aria-label="Nächste Seite"
        >
          <ChevronRight size={20} />
        </button>

        <div className="flex justify-center px-10 sm:px-0">
          {/* @ts-ignore react-pageflip typing issues */}
          <HTMLFlipBook
            ref={flipBookRef}
            width={400}
            height={550}
            size="stretch"
            minWidth={280}
            maxWidth={500}
            minHeight={400}
            maxHeight={700}
            showCover={true}
            onFlip={onFlip}
            onInit={onInit}
            mobileScrollSupport={true}
            swipeDistance={30}
            className="shadow-2xl"
            style={{}}
            startPage={0}
            drawShadow={true}
            flippingTime={600}
            usePortrait={true}
            startZIndex={0}
            autoSize={true}
            maxShadowOpacity={0.3}
            showPageCorners={true}
            disableFlipByClick={false}
            useMouseEvents={true}
            clickEventForward={true}
            renderOnlyPageLengthChange={false}
          >
            {/* Page 1: Cover */}
            <Page className="bg-primary">
              <div className="flex flex-col items-center justify-center h-full text-center bg-primary rounded-sm p-6">
                <div className="w-16 h-px bg-warm-gold mb-6" />
                <p className="text-warm-gold tracking-[0.3em] uppercase text-xs mb-4">Bistro & Café</p>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-foreground mb-3">Bistro Boxenstopp</h2>
                <div className="w-10 h-px bg-warm-gold my-4" />
                <p className="font-serif-italic text-primary-foreground/80 text-lg">Speisekarte</p>
                <div className="mt-8 w-32 h-32 rounded-full overflow-hidden ring-2 ring-warm-gold/30">
                  <img src={galleryCappuccino} alt="Kaffeetasse" className="w-full h-full object-cover" />
                </div>
                <div className="w-16 h-px bg-warm-gold mt-6" />
              </div>
            </Page>

            {/* Page 2: Coffee image */}
            <Page>
              <ImagePage src={galleryCappuccino} alt="Latte Art, Kaffeegenuss im Bistro Boxenstopp" />
            </Page>

            {/* Page 3: Coffee Classics + Milk Coffee */}
            <Page>
              <SectionTitle title="Kaffee Klassiker" subtitle="In Zusammenarbeit mit Cup&Cino" />
              <FlipMenuItem item={{ name: "Espresso", price: "1,90 – 2,30 €", note: "Barista Qualität" }} />
              <FlipMenuItem item={{ name: "Americano", price: "2,20 – 2,60 €", note: "Barista Qualität" }} />
              <FlipMenuItem item={{ name: "Caffè Crema", price: "2,20 – 3,20 €", note: "Barista Qualität" }} />

              {/* Signature Drink Feature Box */}
              <div className="mt-3 border-2 border-warm-gold/50 rounded-lg p-3 bg-[hsl(43,55%,48%)]/5">
                <p className="text-warm-gold text-[10px] font-semibold tracking-wider uppercase mb-1">⭐ Unsere Hausspezialität</p>
                <div className="flex items-baseline justify-between gap-1">
                  <span className="font-serif text-xs sm:text-sm font-bold text-foreground">Boxenstopp Spezial</span>
                  <span className="text-bronze font-semibold text-xs sm:text-sm">4,90 €</span>
                </div>
                <p className="text-bronze text-[10px] sm:text-xs italic mt-0.5">Kollagen Latte Macchiato mit Salz & Rohkakao</p>
              </div>

              <div className="mt-3">
                <SectionTitle title="Milchkaffee-Varianten" />
                <FlipMenuItem item={{ name: "Caffè Latte", price: "2,40 – 3,40 €" }} />
                <FlipMenuItem item={{ name: "Cappuccino", price: "2,40 – 3,40 €" }} />
                <FlipMenuItem item={{ name: "Cappuccino Schoko/Vanille", price: "2,60 – 3,60 €" }} />
                <FlipMenuItem item={{ name: "Latte Macchiato", price: "2,60 – 3,80 €" }} />
                <FlipMenuItem item={{ name: "Flat White", price: "2,60 – 3,20 €" }} />
              </div>
              <PageNumber num={2} />
            </Page>

            {/* Page 4: Comfort drinks + sweets */}
            <Page>
              <SectionTitle title="Wohlfühlgetränke" />
              <FlipMenuItem item={{ name: "Kakao", price: "2,00 – 3,20 €" }} />
              <FlipMenuItem item={{ name: "Latte Vanilla", price: "2,00 – 3,20 €" }} />
              <FlipMenuItem item={{ name: "Matcha-Latte", price: "3,50 – 3,80 €", note: "auch vegan mit Pflanzenmilch" }} />
              <FlipMenuItem item={{ name: "Tee (nach Wahl)", price: "1,80 €", note: "in Bio-Qualität" }} />

              <div className="mt-4">
                <SectionTitle title="Süßes Gebäck & Dessert" />
                <FlipMenuItem item={{ name: "Donut (nach Wahl)", price: "1,80 €" }} />
                <FlipMenuItem item={{ name: "Muffin (nach Wahl)", price: "2,50 €" }} />
                <FlipMenuItem item={{ name: "Affogato", price: "3,50 €", note: "Espresso mit Vanilleeis" }} />
                <FlipMenuItem item={{ name: "Obst (verschiedenes)", price: "0,50 €" }} />
              </div>
              <PageNumber num={3} />
            </Page>

            {/* Page 5: Matcha + Pastries image */}
            <Page>
              <ImagePage src={menuMatchaPastries} alt="Matcha Latte mit frischem Gebäck" />
            </Page>

            {/* Page 6: Baguette image */}
            <Page>
              <ImagePage src={menuBaguette} alt="Frisch belegtes Baguette" />
            </Page>

            {/* Page 7: Baguettes */}
            <Page>
              <p className="text-muted-foreground text-[10px] sm:text-xs italic mb-2">Frisch belegt: unsere Baguettes</p>
              <SectionTitle title="Baguettes" />
              <FlipMenuItem item={{ name: "Fitness Baguette-Premium", price: "6,80 €", note: "Körnerbaguette mit Hähnchenbrustschinken & Gouda" }} />
              <FlipMenuItem item={{ name: "Grillgemüse Baguette-Premium", price: "6,80 €", note: "Zucchini, Champignons, Tomaten, Mozzarella" }} />
              <FlipMenuItem item={{ name: "Schwarzwälder Laugen-Premium", price: "7,40 €", note: "Laugenbaguette mit rohem Schinken & Gouda" }} />
              <FlipMenuItem item={{ name: "Thunfisch Baguette-Gourmet", price: "6,20 €", note: "Thunfisch, Zwiebeln, Gouda & Béchamelsauce" }} />
              <FlipMenuItem item={{ name: "Tomate Mozzarella-Gourmet", price: "6,20 €", note: "Getrocknete Tomaten, Basilikum & Béchamel" }} />
              <PageNumber num={5} />
            </Page>

            {/* Page 8: Rustic breads */}
            <Page>
              <p className="text-muted-foreground text-[10px] sm:text-xs italic mb-2">Handgemacht: unsere rustikalen Brote</p>
              <SectionTitle title="Rustikale Brote" />
              <FlipMenuItem item={{ name: "Holzfällerbrot-Rustikal", price: "7,40 €", note: "Schwarzbrot mit Knoblauchbutter, Käse, Speck & Zwiebeln" }} />
              <FlipMenuItem item={{ name: "Tomaten Mozzarella Brot", price: "7,40 €", note: "Weizenbrot mit Basilikum, Mozzarella & Tomaten" }} />
              <FlipMenuItem item={{ name: "Raclettebrot-Rustikal", price: "7,70 €", note: "Schwarzbrot mit Raclettekäse, Lauch & Gewürze" }} />
              <PageNumber num={6} />
            </Page>

            {/* Page 9: Rustic bread image */}
            <Page>
              <ImagePage src={menuRusticBread} alt="Rustikales Brot auf Holzbrett" />
            </Page>

            {/* Page 10: Flammkuchen image */}
            <Page>
              <ImagePage src={galleryFlammkuchen} alt="Flammkuchen frisch aus dem Ofen" />
            </Page>

            {/* Page 11: Flammkuchen & Pizza */}
            <Page>
              <p className="text-muted-foreground text-[10px] sm:text-xs italic mb-2">Aus dem Ofen: Flammkuchen & Snacks</p>
              <SectionTitle title="Flammkuchen" subtitle="Von unserem Partner Perplex" />
              <FlipMenuItem item={{ name: "Elsässer Art", price: "6,30 €", note: "Speck und Zwiebeln" }} />
              <FlipMenuItem item={{ name: "Griechische Art", price: "6,30 €", note: "Peperoni, Hirtenkäse, bunter Pfeffer" }} />
              <FlipMenuItem item={{ name: "Mediterran", price: "6,30 €", note: "Hirtenkäse, Paprika, Zucchini" }} />
              <FlipMenuItem item={{ name: "Lachs & Lauch", price: "7,30 €" }} />

              <div className="mt-3">
                <SectionTitle title="Pizzasnacks" />
                <FlipMenuItem item={{ name: "Caprese", price: "3,50 €", note: "Pizzasauce, Käse & Kirschtomaten" }} />
                <FlipMenuItem item={{ name: "Salami", price: "3,50 €", note: "Pizzasauce, Käse & Salami" }} />
              </div>
              <PageNumber num={8} />
            </Page>

            {/* Page 12: Drinks & Herbalife */}
            <Page>
              <p className="text-muted-foreground text-[10px] sm:text-xs italic mb-2">Erfrischung & Energie</p>
              <SectionTitle title="Getränke" />
              <FlipMenuItem item={{ name: "Apfel-/Fruchtschorle", price: "2,25 €" }} />
              <FlipMenuItem item={{ name: "Wasser still/med./spritzig", price: "1,75 €" }} />
              <FlipMenuItem item={{ name: "Säfte", price: "2,50 €" }} />
              <FlipMenuItem item={{ name: "Alkoholfreies Bier", price: "3,00 €" }} />

              <div className="mt-3">
                <SectionTitle title="Herbalife Nutrition" />
                <FlipMenuItem item={{ name: "Shake (versch. Sorten)", price: "2,50 – 4,50 €" }} />
                <FlipMenuItem item={{ name: "Electrolyte", price: "2,90 €" }} />
                <FlipMenuItem item={{ name: "Energy LIFTOFF", price: "3,50 €" }} />
                <FlipMenuItem item={{ name: "Proteinriegel", price: "2,50 – 3,90 €" }} />
                <FlipMenuItem item={{ name: "Protein-Chips", price: "2,40 €" }} />
              </div>
              <PageNumber num={9} />
            </Page>

            {/* Page 13: Shakes image */}
            <Page>
              <ImagePage src={menuShakes} alt="Bunte Protein-Shakes und frisches Obst" />
            </Page>

            {/* Page 14: Allergen Legend */}
            <Page>
              <h3 className="font-serif text-sm sm:text-base font-bold text-foreground mb-3">Allergen- und Zusatzstoffinformationen</h3>
              <div className="text-[9px] sm:text-[10px] space-y-0.5 mb-3">
                <p className="font-medium text-foreground mb-1">Allergene:</p>
                {[
                  "A – Glutenhaltiges Getreide", "B – Krebstiere", "C – Eier", "D – Fisch",
                  "E – Erdnüsse", "F – Soja", "G – Milch / Laktose", "H – Schalenfrüchte",
                  "I – Sellerie", "J – Senf", "K – Sesam", "L – Schwefeldioxid / Sulfite",
                  "M – Lupinen", "N – Weichtiere",
                ].map((a) => (
                  <p key={a} className="text-muted-foreground">{a}</p>
                ))}
              </div>
              <div className="text-[9px] sm:text-[10px] space-y-0.5">
                <p className="font-medium text-foreground mb-1">Zusatzstoffe:</p>
                {[
                  "1 – mit Farbstoff", "2 – mit Konservierungsstoff", "3 – mit Antioxidationsmittel",
                  "4 – mit Geschmacksverstärker", "5 – geschwefelt", "6 – geschwärzt",
                  "7 – gewachst", "8 – mit Phosphat", "9 – mit Süßungsmittel",
                  "10 – enthält Phenylalaninquelle", "11 – koffeinhaltig", "12 – chininhaltig",
                ].map((a) => (
                  <p key={a} className="text-muted-foreground">{a}</p>
                ))}
              </div>
              <p className="text-[8px] sm:text-[9px] text-muted-foreground italic mt-2">
                Alle Angaben ohne Gewähr. Bitte sprich uns bei Allergien direkt an.
              </p>
              <PageNumber num={11} />
            </Page>

            {/* Page 15: Back cover */}
            <Page className="bg-primary">
              <div className="flex flex-col items-center justify-center h-full text-center bg-primary rounded-sm p-6">
                <div className="w-16 h-px bg-warm-gold mb-5" />
                <p className="font-serif text-lg sm:text-xl font-bold text-primary-foreground mb-3">Bistro Boxenstopp</p>
                <div className="text-primary-foreground/60 text-xs space-y-1 mb-4">
                  <p>Südhang 1, 88145 Hergatz</p>
                  <p className="mt-2">Mo–Fr: 15:00–20:00 Uhr</p>
                  <p>Sa: 10:30–15:30 Uhr</p>
                  <p>So: 11:00–16:00 Uhr</p>
                </div>
                <p className="text-primary-foreground/50 text-xs mb-3">
                  Teil von FITES Allgäu, www.fites-allgaeu.com
                </p>
                <div className="w-10 h-px bg-warm-gold my-2" />
                <p className="text-warm-gold text-[11px] font-medium mb-2">
                  Hat's geschmeckt? Bewerte uns auf Google ⭐
                </p>
                <p className="text-primary-foreground/50 text-[10px] italic">
                  Mit jedem Kaffee unterstützt du die Cup&Cino Foundation ☕
                </p>
                <div className="w-16 h-px bg-warm-gold mt-4" />
              </div>
            </Page>
          </HTMLFlipBook>
        </div>
      </div>

      {/* Page indicator */}
      <div className="mt-6 text-center text-sm text-muted-foreground no-print">
        Seite {currentPage + 1} von {totalPages}
      </div>

      {/* Swipe hint on mobile */}
      <p className="mt-2 text-center text-xs text-muted-foreground/50 sm:hidden no-print">
        ← Wische zum Blättern →
      </p>
    </div>
  );
};

export default FlipbookMenu;
