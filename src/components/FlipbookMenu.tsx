import { useRef, useState, useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { forwardRef } from "react";
import { menuCategories, menuProducts } from "@/data/menuData";
import AiBadge from "@/components/AiBadge";




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

interface FlipBookApi {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
  };
}

interface FlipEvent {
  data: number;
}

interface FlipInitEvent {
  data?: { pages?: number };
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
  <div className="relative w-full h-full">
    <img src={src} alt={`KI generiert: ${alt}`} className="w-full h-full object-cover rounded-sm" loading="lazy" />
    <AiBadge asText />
  </div>
);

export const FLIPBOOK_EXPORT_PAGE_CLASS = "flipbook-export-page";

const FlipbookMenu = () => {
  const flipBookRef = useRef<FlipBookApi | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(14);

  const onFlip = useCallback((e: FlipEvent) => {
    setCurrentPage(e.data);
  }, []);

  const onInit = useCallback((e: FlipInitEvent) => {
    setTotalPages(2 + 1 + menuCategories.filter((category) => category !== "Alle").reduce((count, category) => count + Math.ceil(menuProducts.filter((product) => product.category === category).length / 4), 0));
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

            {menuCategories.filter((category) => category !== "Alle").flatMap((category) => {
              const products = menuProducts.filter((product) => product.category === category);
              const pages = [];
              for (let offset = 0; offset < products.length; offset += 4) {
                pages.push(
                  <Page key={`${category}-${offset}`} className={FLIPBOOK_EXPORT_PAGE_CLASS}>
                    <SectionTitle title={category} />
                    {products.slice(offset, offset + 4).map((product) => (
                      <FlipMenuItem key={product.id} item={{
                        name: product.name,
                        price: product.price,
                        allergens: product.allergens,
                        note: [product.description, product.volume, ...(product.variants?.map((variant) => `${variant.label}: ${variant.price}`) ?? [])].filter(Boolean).join(" · "),
                      }} />
                    ))}
                  </Page>
                );
              }
              return pages;
            })}

            {/* Page 14: Allergen Legend */}
            <Page>
              <h3 className="font-serif text-sm sm:text-base font-bold text-foreground mb-3">Allergen- und Zusatzstoffinformationen</h3>
              <div className="text-[9px] sm:text-[10px] space-y-0.5 mb-3">
                <p className="font-medium text-foreground mb-1">Allergene:</p>
                {[
                  "A: Glutenhaltiges Getreide", "B: Krebstiere", "C: Eier", "D: Fisch",
                  "E: Erdnüsse", "F: Soja", "G: Milch / Laktose", "H: Schalenfrüchte",
                  "I: Sellerie", "J: Senf", "K: Sesam", "L: Schwefeldioxid / Sulfite",
                  "M: Lupinen", "N: Weichtiere",
                ].map((a) => (
                  <p key={a} className="text-muted-foreground">{a}</p>
                ))}
              </div>
              <div className="text-[9px] sm:text-[10px] space-y-0.5">
                <p className="font-medium text-foreground mb-1">Zusatzstoffe:</p>
                {[
                  "1: mit Farbstoff", "2: mit Konservierungsstoff", "3: mit Antioxidationsmittel",
                  "4: mit Geschmacksverstärker", "5: geschwefelt", "6: geschwärzt",
                  "7: gewachst", "8: mit Phosphat", "9: mit Süßungsmittel",
                  "10: enthält Phenylalaninquelle", "11: koffeinhaltig", "12: chininhaltig",
                ].map((a) => (
                  <p key={a} className="text-muted-foreground">{a}</p>
                ))}
              </div>
              <p className="text-[8px] sm:text-[9px] text-muted-foreground italic mt-2">
                Alle Angaben ohne Gewähr. Bitte sprich uns bei Allergien direkt an.
              </p>
              <p className="text-[7px] sm:text-[8px] text-muted-foreground/70 italic mt-2">
                Beispielfotos: die tatsächlichen Produkte können optisch abweichen.
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
                  <p className="mt-2">Mo, Mi bis Fr: 15:00 bis 20:00 Uhr</p>
                  <p>Sa: 10:30 bis 15:30 Uhr · So: 11:00 bis 16:00 Uhr</p>
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
