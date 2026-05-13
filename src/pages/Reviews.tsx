import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Reviews = () => {
  return (
    <Layout>
      <SEO title="Bewertungen – Bistro Boxenstopp Hergatz" description="Was Gäste über das Bistro Boxenstopp in Hergatz im Westallgäu sagen." path="/bewertungen" />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <p className="text-bronze font-medium tracking-[0.2em] uppercase text-sm mb-2">Feedback</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Bewertungen</h1>
          <div className="divider-bronze mb-8" />

          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Deine Meinung ist uns wichtig. Wenn du bei uns warst, freuen wir uns über deine Bewertung auf Google oder TripAdvisor.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#google-review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Auf Google bewerten
            </a>
            <a
              href="#tripadvisor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground px-7 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors"
            >
              Auf TripAdvisor bewerten
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
