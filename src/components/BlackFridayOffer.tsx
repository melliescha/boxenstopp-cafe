import { Link } from "react-router-dom";
import { useMenuPromotion } from "@/hooks/useMenuPromotion";
import { Button } from "@/components/ui/button";

const BlackFridayOffer = ({ compact = false }: { compact?: boolean }) => {
  const { offer } = useMenuPromotion();
  if (!offer) return null;

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