import { Link } from "react-router-dom";
import { useMenuPromotion } from "@/hooks/useMenuPromotion";
import { Button } from "@/components/ui/button";

const BlackFridayOffer = ({ compact = false, prominent = false }: { compact?: boolean; prominent?: boolean }) => {
  const { offer } = useMenuPromotion();
  if (!offer) return null;

  if (prominent) {
    return (
      <section aria-labelledby="black-friday-home-title" className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-5 px-5 py-7 sm:px-8 sm:py-10 md:grid-cols-[1fr_auto] md:gap-12 lg:py-12">
          <div>
            <p className="mb-2 text-sm font-medium uppercase">Nur bis einschließlich Montag, 30.11.2026</p>
            <h2 id="black-friday-home-title" className="font-serif text-5xl font-light leading-none sm:text-7xl">BLACK FRIDAY</h2>
            <p className="mt-4 text-lg leading-relaxed sm:text-2xl">Kleiner Caffè Crema oder kleiner Cappuccino</p>
            <p className="mt-1 text-sm text-primary-foreground/80">Euer Kaffee, euer Boxenstopp. Kommt vorbei!</p>
            <Button asChild variant="outline" size="lg" className="mt-5 rounded-none border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/speisekarte#black-friday">Zum Black-Friday-Angebot</Link>
            </Button>
          </div>
          <div className="flex items-baseline gap-3 border-t border-primary-foreground/30 pt-4 md:block md:border-l md:border-t-0 md:pl-12 md:pt-0 md:text-center">
            <span className="text-lg">je</span>
            <p className="whitespace-nowrap font-serif text-7xl font-light leading-none tabular-nums sm:text-8xl">{offer.price}</p>
            <p className="text-xs leading-relaxed text-primary-foreground/80 md:mt-3">Cappuccino vegan {offer.veganPrice}</p>
          </div>
        </div>
      </section>
    );
  }

  if (compact) {
    return (
      <aside aria-label="Black-Friday-Angebot" className="border-b border-border bg-foreground px-5 py-3 text-center text-background no-print">
        <Link to="/speisekarte#black-friday" className="block text-sm leading-relaxed underline-offset-4 hover:underline sm:text-base">
          <strong className="uppercase">{offer.title}</strong>
          {" · "}Caffè Crema &amp; Cappuccino, klein, je <strong className="whitespace-nowrap tabular-nums">{offer.price}</strong>
          <span className="block text-xs sm:ml-3 sm:inline sm:text-sm">Bis einschließlich Montag, 30.11.2026</span>
        </Link>
      </aside>
    );
  }

  return (
    <section id="black-friday" aria-labelledby="black-friday-title" className="mb-12 scroll-mt-28 border-y border-primary/25 py-8 text-center sm:py-10">
      <p className="mb-3 text-sm font-medium uppercase text-primary">{offer.dateLabel}</p>
      <h2 id="black-friday-title" className="font-serif text-3xl font-light text-foreground sm:text-4xl">Black Friday im Boxenstopp</h2>
      <p className="mb-2 mt-5 font-serif text-4xl font-light tabular-nums text-primary sm:text-5xl">Je {offer.price}</p>
      <p className="text-lg font-medium text-foreground">Caffè Crema &amp; Cappuccino, jeweils klein</p>
      <p className="mt-3 text-sm text-muted-foreground">Kommt auf eine Tasse vorbei. Cappuccino auch vegan, Aufpreis 0,30 €.</p>
      <Button asChild variant="link" className="mt-3">
        <Link to="/speisekarte?product=cappuccino">Zum Cappuccino</Link>
      </Button>
    </section>
  );
};

export default BlackFridayOffer;