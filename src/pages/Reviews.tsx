import { useState } from "react";
import { Star } from "lucide-react";
import Layout from "@/components/Layout";
import { allReviews, ReviewCard, ReviewSummaryBadges, ReviewCTA } from "@/components/ReviewSection";

type Filter = "all" | "google" | "tripadvisor";

const Reviews = () => {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all"
    ? allReviews
    : allReviews.filter((r) => r.platform === filter);

  const tabs: { label: string; value: Filter }[] = [
    { label: "Alle", value: "all" },
    { label: "Google", value: "google" },
    { label: "TripAdvisor", value: "tripadvisor" },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-bronze font-medium tracking-[0.2em] uppercase text-sm mb-2">Feedback</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Bewertungen</h1>
            <div className="divider-bronze mb-6" />

            {/* Big stars */}
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={28} className="fill-warm-gold text-warm-gold" />
              ))}
            </div>
            <p className="text-foreground font-serif text-2xl font-bold mb-4">4,9 / 5,0</p>

            <ReviewSummaryBadges size="lg" />

            <p className="text-muted-foreground text-sm mt-6 max-w-md mx-auto">
              Wir freuen uns über jede einzelne Bewertung. Hier siehst du, was unsere Gäste sagen.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((t) => (
              <button
                key={t.value}
                onClick={() => setFilter(t.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === t.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Review grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {filtered.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ReviewCTA />
    </Layout>
  );
};

export default Reviews;
