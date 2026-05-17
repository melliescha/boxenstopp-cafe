import { useRef, useState, useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { forwardRef } from "react";




// Page wrapper for react-pageflip (requires forwardRef)
const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>(
  ({ children, className = "" }, ref) => (
    <div ref={ref} data-flip-page className={`bg-[#fef4ec] overflow-hidden ${className}`}>
      <div className="w-full h-full border border-bronze/20 px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-5 flex flex-col">
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
  allergens?: string;
  sizes?: { label: string; price: string }[];
}

const FlipMenuItem = ({ item }: { item: FlipItem }) => (
  <div className="mb-1.5">
    <div className="flex items-baseline justify-between gap-1">
      <span className="font-serif text-xs sm:text-sm font-medium text-foreground">
        {item.name}
        {item.allergens && (
          <span className="ml-1 text-[9px] sm:text-[10px] text-muted-foreground font-normal">({item.allergens})</span>
        )}
      </span>
      <span className="flex-1 border-b border-dotted border-bronze/25 mx-1 min-w-[0.5rem]" />
      {item.sizes ? (
        <span className="text-bronze font-semibold whitespace-nowrap text-[10px] sm:text-xs flex gap-1.5">
          {item.sizes.map((s) => (
            <span key={s.label} className="flex flex-col items-end leading-tight">
              <span className="text-[8px] sm:text-[9px] text-muted-foreground font-normal uppercase tracking-wide">{s.label}</span>
              <span>{s.price}</span>
            </span>
          ))}
        </span>
      ) : (
        <span className="text-bronze font-semibold whitespace-nowrap text-xs sm:text-sm">{item.price}</span>
      )}
    </div>
    {item.note && <p className="text-muted-foreground text-[10px] sm:text-xs italic mt-0">{item.note}</p>}
  </div>
);

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-2">
    <h3 className="font-serif-italic text-base sm:text-lg md:text-xl font-semibold text-foreground">{title}</h3>
    {subtitle && <p className="text-muted-foreground text-[10px] sm:text-xs mt-0.5">{subtitle}</p>}
    <div className="w-8 h-px bg-bronze mt-1.5" />
  </div>
);

const ImagePage = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-full h-full object-cover rounded-sm" loading="lazy" />
);

export const FLIPBOOK_EXPORT_PAGE_CLASS = "flipbook-export-page";

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
          className="no-print absolute left-1 sm:-left-12 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-card/90 backdrop-blur border border-bronze/30 flex items-center justify-center text-bronze hover:bg-secondary transition-colors shadow-md"
          aria-label="Vorherige Seite"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={goNext}
          className="no-print absolute right-1 sm:-right-12 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-card/90 backdrop-blur border border-bronze/30 flex items-center justify-center text-bronze hover:bg-secondary transition-colors shadow-md"
          aria-label="Nächste Seite"
        >
          <ChevronRight size={18} />
        </button>

        <div className="flex justify-center px-2 sm:px-0">
          {/* @ts-ignore react-pageflip typing issues */}
          <HTMLFlipBook
            ref={flipBookRef}
            width={380}
            height={620}
            size="stretch"
            minWidth={300}
            maxWidth={500}
            minHeight={520}
            maxHeight={820}
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
            <Page className={`bg-primary ${FLIPBOOK_EXPORT_PAGE_CLASS}`}>
              <div className="flex flex-col items-center justify-center h-full text-center bg-primary rounded-sm p-6">
                <div className="w-16 h-px bg-warm-gold mb-6" />
                <p className="text-warm-gold tracking-[0.3em] uppercase text-xs mb-4">Bistro & Café</p>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-foreground mb-3">Bistro Boxenstopp</h2>
                <div className="w-10 h-px bg-warm-gold my-4" />
                <p className="font-serif-italic text-primary-foreground/80 text-lg">Speisekarte</p>
                <div className="w-16 h-px bg-warm-gold mt-6" />
              </div>
            </Page>

            {/* Page: Heiße Getränke (Kaffee + Wohlfühlgetränke) */}
            <Page className={FLIPBOOK_EXPORT_PAGE_CLASS}>
              <SectionTitle title="Heiße Getränke" />

              <h4 className="font-serif-italic text-[13px] sm:text-base font-semibold text-foreground mb-0 leading-tight">Kaffee</h4>
              <div className="flex items-baseline justify-end gap-0 text-[8px] sm:text-[10px] text-muted-foreground font-semibold uppercase tracking-wide mb-0.5">
                <span className="w-11 sm:w-14 text-right">S</span>
                <span className="w-11 sm:w-14 text-right">M</span>
                <span className="w-11 sm:w-14 text-right">L</span>
              </div>
              {[
                { name: "Espresso", prices: ["1,90 €", "", "2,30 €"] },
                { name: "Americano", prices: ["2,20 €", "", "2,60 €"] },
                { name: "Caffè Crema", prices: ["2,20 €", "2,60 €", "2,90 €"] },
                { name: "Caffè Latte", allergens: "G", prices: ["2,40 €", "2,90 €", "3,40 €"] },
                { name: "Cappuccino", allergens: "G", prices: ["2,40 €", "2,90 €", "3,40 €"] },
                { name: "Cappuccino Schoko/Vanille", allergens: "G", prices: ["2,60 €", "3,10 €", "3,60 €"] },
                { name: "Latte Macchiato", allergens: "G", prices: ["2,60 €", "3,20 €", "3,80 €"] },
                { name: "Flat White", allergens: "G", prices: ["2,60 €", "", "3,20 €"] },
                { name: "Affogato (Espresso m. Vanilleeis)", allergens: "G", prices: ["", "", "3,50 €"] },
              ].map((row) => (
                <div key={row.name} className="flex items-baseline gap-0 mb-0.5 leading-tight">
                  <span className="font-serif text-[11px] sm:text-sm font-medium text-foreground flex-1 min-w-0 pr-1">
                    {row.name}
                    {row.allergens && (
                      <span className="ml-1 text-[8px] sm:text-[10px] text-muted-foreground font-normal">({row.allergens})</span>
                    )}
                  </span>
                  {row.prices.map((p, i) => (
                    <span key={i} className="w-11 sm:w-14 text-right text-bronze font-semibold text-[10px] sm:text-xs whitespace-nowrap">
                      {p || "–"}
                    </span>
                  ))}
                </div>
              ))}

              <div className="mt-1 border border-warm-gold/50 rounded px-1.5 py-0.5 bg-[hsl(43,55%,48%)]/5 flex items-baseline justify-between gap-1">
                <span className="font-serif text-[10px] sm:text-xs font-bold text-foreground">
                  ⭐ Boxenstopp Spezial <span className="text-[8px] text-muted-foreground font-normal italic">Kollagen Latte Macchiato (G)</span>
                </span>
                <span className="text-bronze font-semibold text-[10px] sm:text-xs whitespace-nowrap">4,90 €</span>
              </div>

              <h4 className="font-serif-italic text-[13px] sm:text-base font-semibold text-foreground mt-1 mb-0 leading-tight">Wohlfühlgetränke</h4>
              {[
                { name: "Kakao", allergens: "G", prices: ["2,00 €", "2,60 €", "3,20 €"] },
                { name: "Latte Vanilla", allergens: "G", prices: ["2,00 €", "2,60 €", "3,20 €"] },
                { name: "Matcha-Latte", allergens: "G", prices: ["3,50 €", "", "3,80 €"] },
                { name: "Vegan Matcha Latte", allergens: "A", prices: ["3,50 €", "", "3,80 €"] },
              ].map((row) => (
                <div key={row.name} className="flex items-baseline gap-0 mb-0.5 leading-tight">
                  <span className="font-serif text-[11px] sm:text-sm font-medium text-foreground flex-1 min-w-0 pr-1">
                    {row.name}
                    {row.allergens && (
                      <span className="ml-1 text-[8px] sm:text-[10px] text-muted-foreground font-normal">({row.allergens})</span>
                    )}
                  </span>
                  {row.prices.map((p, i) => (
                    <span key={i} className="w-11 sm:w-14 text-right text-bronze font-semibold text-[10px] sm:text-xs whitespace-nowrap">
                      {p || "–"}
                    </span>
                  ))}
                </div>
              ))}
              <div className="flex items-baseline gap-0 mb-0.5 leading-tight">
                <span className="font-serif text-[11px] sm:text-sm font-medium text-foreground flex-1">Tee (nach Wahl)</span>
                <span className="text-bronze font-semibold text-[10px] sm:text-xs">1,80 €</span>
              </div>
              <PageNumber num={2} />
            </Page>

            {/* Page: Erfrischung + Sportler */}
            <Page className={FLIPBOOK_EXPORT_PAGE_CLASS}>
              <SectionTitle title="Erfrischungsgetränke" />

              <FlipMenuItem item={{ name: "Apfel-/Fruchtschorle (0,33 l)", price: "2,25 €" }} />
              <FlipMenuItem item={{ name: "Wasser still/med./spritzig (0,5 l)", price: "1,75 €" }} />
              <FlipMenuItem item={{ name: "Säfte (0,25 l)", price: "2,50 €" }} />
              <FlipMenuItem item={{ name: "Alkoholfreies Bier (0,33 l)", price: "3,00 €" }} />

              <div className="mt-3">
                <SectionTitle title="Getränke für Sportler" />
                <div className="flex items-baseline justify-end gap-0 text-[9px] sm:text-[10px] text-muted-foreground font-semibold uppercase tracking-wide mb-1">
                  <span className="w-12 sm:w-14 text-right">S</span>
                  <span className="w-12 sm:w-14 text-right">M</span>
                  <span className="w-12 sm:w-14 text-right">L</span>
                </div>
                {[
                  { name: "Nährshake (versch. Sorten)", allergens: "F,G", prices: ["2,50 €", "", "4,50 €"] },
                  { name: "Mineraldrink", prices: ["", "", "2,90 €"] },
                  { name: "Energy LIFTOFF", allergens: "11", prices: ["", "", "3,50 €"] },
                ].map((row) => (
                  <div key={row.name} className="flex items-baseline gap-0 mb-1">
                    <span className="font-serif text-xs sm:text-sm font-medium text-foreground flex-1 min-w-0 pr-1">
                      {row.name}
                      {row.allergens && (
                        <span className="ml-1 text-[9px] sm:text-[10px] text-muted-foreground font-normal">({row.allergens})</span>
                      )}
                    </span>
                    {row.prices.map((p, i) => (
                      <span key={i} className="w-12 sm:w-14 text-right text-bronze font-semibold text-[11px] sm:text-xs whitespace-nowrap">
                        {p || "–"}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
              <PageNumber num={3} />
            </Page>

            {/* Page: Gourmet Baguettes & Hüttenbrote */}
            <Page>
              <SectionTitle title="Gourmet Baguettes" />
              <FlipMenuItem item={{ name: "Baguette Thunfisch", price: "6,20 €", allergens: "A,D,G", note: "Thunfisch, Zwiebeln, Gouda & Béchamel" }} />
              <FlipMenuItem item={{ name: "Baguette Tomate Mozzarella", price: "6,20 €", allergens: "A,G", note: "Getr. Tomaten, Basilikum & Béchamel" }} />
              <FlipMenuItem item={{ name: "Baguette Provence", price: "6,20 €", allergens: "A,G", note: "mit Schinken, Gouda, Kräuter & Béchamelsauce" }} />
              <FlipMenuItem item={{ name: "Baguette Rustikal", price: "6,20 €", allergens: "A,G", note: "mit Speck, Lauch, Raclettekäse, Gouda, Kräuter & Béchamelsauce" }} />

              <div className="mt-3">
                <SectionTitle title="Hüttenbrote" />
                <FlipMenuItem item={{ name: "Hüttenbrot Speck", price: "7,40 €", allergens: "A,F,G", note: "Schwarzbrot, Knoblauchbutter, Käse, Speck & Zwiebeln" }} />
                <FlipMenuItem item={{ name: "Hüttenbrot Tomate Mozzarella", price: "7,40 €", allergens: "A,F,G", note: "Weizenbrot, Basilikum, Mozzarella & Tomaten" }} />
                <FlipMenuItem item={{ name: "Hüttenbrot Raclette", price: "7,70 €", allergens: "A,G", note: "Schwarzbrot, Raclettekäse, Lauch & Gewürze" }} />
              </div>
              <PageNumber num={4} />
            </Page>

            {/* Page: Flammkuchen & Pizza */}
            <Page>
              <SectionTitle title="Flammkuchen" />
              <FlipMenuItem item={{ name: "Elsässer Art", price: "6,30 €", allergens: "A,G", note: "Speck und Zwiebeln" }} />
              <FlipMenuItem item={{ name: "Griechische Art", price: "6,30 €", allergens: "A,G,L", note: "Peperoni, Hirtenkäse, bunter Pfeffer" }} />
              <FlipMenuItem item={{ name: "Mediterran", price: "6,30 €", allergens: "A,G", note: "Hirtenkäse, Paprika, Zucchini" }} />
              <FlipMenuItem item={{ name: "Lachs & Lauch", price: "7,30 €", allergens: "A,D,G" }} />

              <div className="mt-3">
                <SectionTitle title="Pizzasnacks & Pizzetta" />
                <FlipMenuItem item={{ name: "Pizzasnack Caprese", price: "3,50 €", allergens: "A,G", note: "Pizzasauce, Käse & Kirschtomaten" }} />
                <FlipMenuItem item={{ name: "Pizzasnack Salami", price: "3,80 €", allergens: "A,G", note: "Pizzasauce, Käse & Salami" }} />
                <FlipMenuItem item={{ name: "Pizzetta Margherita", price: "3,60 €", allergens: "A,G", note: "Ø 19 cm · Tomatensauce & Käse" }} />
                <FlipMenuItem item={{ name: "Pizzetta Salami", price: "3,95 €", allergens: "A,G", note: "Ø 19 cm · Tomatensauce, Käse & Salami" }} />
              </div>
              <PageNumber num={5} />
            </Page>

            {/* Page: Snacks + Süßes */}
            <Page>
              <SectionTitle title="Snacks" />
              <FlipMenuItem item={{ name: "Proteinriegel", price: "2,50 – 3,90 €" }} />
              <FlipMenuItem item={{ name: "Müsliriegel Expressmahlzeit", price: "3,90 €" }} />
              <FlipMenuItem item={{ name: "Protein-Chips", price: "2,40 €" }} />

              <div className="mt-3">
                <SectionTitle title="Süßes Gebäck & Dessert" />
                <FlipMenuItem item={{ name: "Donut (nach Wahl)", price: "1,80 €", allergens: "A,C,G" }} />
                <FlipMenuItem item={{ name: "Muffin (nach Wahl)", price: "2,50 €", allergens: "A,C,G" }} />
                <FlipMenuItem item={{ name: "Affogato", price: "3,50 €", allergens: "G", note: "Espresso mit Vanilleeis" }} />
                <FlipMenuItem item={{ name: "Obst (verschiedenes)", price: "0,50 €" }} />
              </div>
              <PageNumber num={6} />
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
              <p className="text-[7px] sm:text-[8px] text-muted-foreground/70 italic mt-2">
                Beispielfotos — die tatsächlichen Produkte können optisch abweichen.
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
                  <p className="mt-2">Mo, Mi–Fr: 15:00–20:00 Uhr</p>
                  <p>Sa: 10:30–15:30 Uhr · So: 11:00–16:00 Uhr</p>
                  <p>Di: Ruhetag</p>
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
