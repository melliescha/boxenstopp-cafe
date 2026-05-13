import { Instagram } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { TripAdvisorIcon, GoogleIcon } from "@/components/icons/SocialIcons";
import { socialLinks } from "@/config/social";

const cards = [
  {
    icon: <GoogleIcon size={32} />,
    title: "Google Bewertungen",
    text: "Bewertet uns direkt auf Google. Dauert nur 30 Sekunden.",
    cta: "Auf Google bewerten",
    href: socialLinks.googleReview,
  },
  {
    icon: <TripAdvisorIcon size={32} style={{ color: "#34E0A1" }} />,
    title: "TripAdvisor",
    text: "Eure Erfahrung auf der Reise-Plattform teilen.",
    cta: "Auf TripAdvisor bewerten",
    href: socialLinks.tripadvisor,
  },
  {
    icon: <Instagram size={32} style={{ color: "#E1306C" }} />,
    title: "Instagram",
    text: "Folgt uns für Eindrücke aus dem Bistro.",
    cta: "Zu Instagram",
    href: socialLinks.instagram,
  },
];

const Reviews = () => {
  return (
    <Layout>
      <SEO
        title="Bewertungen – Bistro Boxenstopp Hergatz"
        description="Bewertet das Bistro Boxenstopp in Hergatz auf Google, TripAdvisor und Instagram."
        path="/bewertungen"
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-bronze font-medium tracking-[0.2em] uppercase text-sm mb-2">Feedback</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Unsere Bewertungen
            </h1>
            <div className="divider-bronze mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Wir freuen uns über jede ehrliche Rückmeldung. Findet uns auf folgenden Plattformen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl p-8 flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: "#FEF4EC", border: "1.5px solid #9E7C4E" }}
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-5 shadow-sm">
                  {c.icon}
                </div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-3">{c.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{c.text}</p>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full min-h-[48px] bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  {c.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm italic mt-10 max-w-xl mx-auto">
            Echte Stimmen unserer Gäste sammeln wir gerade. Sobald wir die ersten Bewertungen haben, zeigen wir sie hier.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
