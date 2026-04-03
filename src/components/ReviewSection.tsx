import { Star, Quote, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface Review {
  id: number;
  text: string;
  author: string;
  platform: "google" | "tripadvisor";
  stars: number;
  date?: string;
}

export const allReviews: Review[] = [
  {
    id: 1,
    text: "Super gemütlich, toller Kaffee und die Flammkuchen sind ein Traum. Perfekter Stopp auf der Radtour!",
    author: "Thomas M.",
    platform: "google",
    stars: 5,
    date: "März 2026",
  },
  {
    id: 2,
    text: "Richtig nettes Bistro, der Eugen ist super freundlich. Kommen auf jeden Fall wieder!",
    author: "Sandra K.",
    platform: "google",
    stars: 5,
    date: "Februar 2026",
  },
  {
    id: 3,
    text: "Haben das Bistro zufällig auf der Radtour entdeckt. Tolle Lage, leckere Baguettes, E-Bike aufladen klappt auch. Top!",
    author: "Michael R.",
    platform: "tripadvisor",
    stars: 5,
    date: "Januar 2026",
  },
  {
    id: 4,
    text: "Endlich ein schönes Café in Hergatz! Der Matcha Latte ist super und die Terrasse im Sommer herrlich.",
    author: "Julia W.",
    platform: "google",
    stars: 5,
    date: "Dezember 2025",
  },
  {
    id: 5,
    text: "Ideal nach dem Training bei FITES. Gute Shakes, faire Preise und nette Atmosphäre.",
    author: "Markus B.",
    platform: "google",
    stars: 5,
    date: "November 2025",
  },
  {
    id: 6,
    text: "Wir sind mit dem Wohnmobil am Radweg vorbeigekommen und haben spontan Halt gemacht. Beste Entscheidung! Der Flammkuchen Elsässer Art war fantastisch.",
    author: "Familie Huber",
    platform: "tripadvisor",
    stars: 5,
    date: "Oktober 2025",
  },
  {
    id: 7,
    text: "Bin regelmäßig nach dem FITES-Training hier. Die Protein-Shakes sind top und der Preis stimmt.",
    author: "Alex D.",
    platform: "google",
    stars: 5,
    date: "September 2025",
  },
  {
    id: 8,
    text: "Kleiner Geheimtipp abseits der üblichen Touristenrouten. Sehr charmant, guter Kaffee, netter Gastgeber.",
    author: "Petra S.",
    platform: "tripadvisor",
    stars: 5,
    date: "August 2025",
  },
];

const PlatformBadge = ({ platform }: { platform: "google" | "tripadvisor" }) => (
  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
    {platform === "google" ? (
      <>
        <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center text-[9px] font-bold text-primary">G</span>
        Google
      </>
    ) : (
      <>
        <MapPin size={12} className="text-primary" />
        TripAdvisor
      </>
    )}
  </span>
);

const Stars = ({ count, size = 14 }: { count: number; size?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={size} className="fill-warm-gold text-warm-gold" />
    ))}
  </div>
);

export const ReviewCard = ({ review }: { review: Review }) => (
  <div className="bg-card rounded-xl p-6 border border-bronze/20 shadow-sm flex flex-col h-full">
    <Quote size={24} className="text-warm-gold mb-3 flex-shrink-0" />
    <p className="text-foreground text-sm italic leading-relaxed mb-4 flex-1">"{review.text}"</p>
    <div>
      <Stars count={review.stars} />
      <div className="flex items-center justify-between mt-2">
        <span className="text-sm font-medium text-foreground">— {review.author}</span>
        <PlatformBadge platform={review.platform} />
      </div>
      {review.date && <p className="text-xs text-muted-foreground/60 mt-1">{review.date}</p>}
    </div>
  </div>
);

// Summary badges
export const ReviewSummaryBadges = ({ size = "sm" }: { size?: "sm" | "lg" }) => {
  const cls = size === "lg" ? "px-5 py-3 text-sm gap-2" : "px-4 py-2 text-xs gap-1.5";
  const starSize = size === "lg" ? 16 : 13;

  return (
    <div className="flex flex-wrap justify-center gap-3">
      <a
        href="#google-review"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center ${cls} bg-card border border-bronze/20 rounded-full hover:border-bronze/40 transition-colors shadow-sm`}
      >
        <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">G</span>
        <span className="font-semibold text-foreground">4,9</span>
        <Star size={starSize} className="fill-warm-gold text-warm-gold" />
        <span className="text-muted-foreground">auf Google</span>
      </a>
      <a
        href="#tripadvisor"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center ${cls} bg-card border border-bronze/20 rounded-full hover:border-bronze/40 transition-colors shadow-sm`}
      >
        <MapPin size={14} className="text-primary" />
        <span className="font-semibold text-foreground">5,0</span>
        <Star size={starSize} className="fill-warm-gold text-warm-gold" />
        <span className="text-muted-foreground">auf TripAdvisor</span>
      </a>
    </div>
  );
};

// CTA Section
export const ReviewCTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 md:py-20"
      style={{ background: "linear-gradient(135deg, hsl(210 68% 27%), hsl(200 45% 20%))" }}
    >
      <div className="container mx-auto px-6 text-center">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
          Hat's dir geschmeckt? Erzähl's weiter! ☕
        </h3>
        <p className="text-primary-foreground/70 text-sm mb-8 max-w-md mx-auto">
          Deine Bewertung hilft anderen Radfahrern und Genießern, uns zu finden.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#google-review"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 bg-card text-primary px-7 py-3 rounded-lg font-medium hover:ring-2 hover:ring-warm-gold/50 transition-all ${
              visible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold">G</span>
            Auf Google bewerten
          </a>
          <a
            href="#tripadvisor"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 bg-card text-primary px-7 py-3 rounded-lg font-medium hover:ring-2 hover:ring-warm-gold/50 transition-all ${
              visible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <MapPin size={18} />
            Auf TripAdvisor bewerten
          </a>
        </div>

        <p className="text-primary-foreground/50 text-xs italic mt-6">
          Es dauert nur 30 Sekunden — und bedeutet uns die Welt. Danke! 💛
        </p>
      </div>
    </section>
  );
};

// Carousel for homepage
export const ReviewCarousel = () => {
  const homeReviews = allReviews.slice(0, 5);
  const [offset, setOffset] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setOffset((prev) => (prev + 1) % homeReviews.length);
    }, 4000);
  };

  useEffect(() => {
    startAutoplay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const go = (dir: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setOffset((prev) => (prev + dir + homeReviews.length) % homeReviews.length);
    startAutoplay();
  };

  // Build visible cards (3 on desktop)
  const getVisibleReviews = () => {
    const result: Review[] = [];
    for (let i = 0; i < 3; i++) {
      result.push(homeReviews[(offset + i) % homeReviews.length]);
    }
    return result;
  };

  const visible = getVisibleReviews();

  return (
    <div>
      {/* Desktop: 3 cards */}
      <div className="hidden md:grid grid-cols-3 gap-6 max-w-5xl mx-auto">
        {visible.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
      {/* Mobile: 1 card */}
      <div className="md:hidden max-w-sm mx-auto">
        <ReviewCard review={homeReviews[offset]} />
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {homeReviews.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (intervalRef.current) clearInterval(intervalRef.current);
              setOffset(i);
              startAutoplay();
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === offset ? "bg-bronze" : "bg-bronze/25"
            }`}
            aria-label={`Bewertung ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
