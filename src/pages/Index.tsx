import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Map, Thermometer, ShowerHead, BatteryCharging, Sun, Users, Bike, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import BestsellerSection from "@/components/BestsellerSection";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import heroBg from "@/assets/hero-bistro.jpg";
import heroLogoSchriftzug from "@/assets/hero-logo-schriftzug.png";


const highlights = [
  {
    icon: Map,
    title: "Geheimtipp am Radweg",
    text: "Direkt an der Leiblachroute & Bodensee-Königssee-Radweg. Wer uns findet, kommt wieder.",
  },
  {
    icon: Thermometer,
    title: "Kühle Terrasse",
    text: "Selbst bei 30°C genießt du bei uns angenehme 25°C im Schatten: die perfekte Erfrischung.",
  },
  {
    icon: ShowerHead,
    title: "Duschen vorhanden",
    text: "Frisch machen nach der Radtour oder dem Training, gegen kleine Gebühr. Hinweis: Aktuell nur Damendusche verfügbar, die Herrendusche befindet sich noch im Umbau.",
  },
  {
    icon: BatteryCharging,
    title: "Steckdosen zum Aufladen",
    text: "Bei uns lädst nicht nur du auf, sondern auch dein Handy, dein Navi und sogar dein E-Bike. Steckdosen findest du bei uns kostenlos.",
  },
];

const whyUs = [
  {
    icon: Sun,
    title: "Versteckt & besonders",
    text: "Kein Straßenlärm, keine Hektik. Bei uns genießt du in aller Ruhe, umgeben von Allgäuer Natur.",
  },
  {
    icon: Users,
    title: "Familiär & persönlich",
    text: "Helena und Eugen begrüßen dich persönlich. Bei uns bist du Gast, nicht Kunde.",
  },
  {
    icon: Bike,
    title: "Perfekt für Radfahrer",
    text: "Terrasse, Duschen, E-Bike-Ladestation und alles was du brauchst, um wieder aufzutanken.",
  },
];

const hours = [
  { days: "Montag", time: "15:00 – 20:00 Uhr" },
  { days: "Dienstag", time: "Ruhetag" },
  { days: "Mittwoch – Freitag", time: "15:00 – 20:00 Uhr" },
  { days: "Samstag", time: "10:30 – 15:30 Uhr" },
  { days: "Sonntag", time: "11:00 – 16:00 Uhr" },
];

const faqs = [
  {
    question: "Wo befindet sich das Bistro Boxenstopp?",
    answer: "Das Bistro Boxenstopp liegt in Hergatz/Wohmbrechts im Westallgäu, Südhang 1, direkt am Bodensee-Königssee-Radweg und an der Leiblachroute. Wir sind ein idealer Stopp für Radfahrer und Sportler.",
  },
  {
    question: "Was bietet das Bistro Boxenstopp an?",
    answer: "Wir servieren Barista-Kaffee von Cup&Cino, handgemachte Flammkuchen, frische Pizza-Snacks, Baguettes, wechselnde Backwaren, Matcha, alkoholfreies Bier sowie Herbalife-Proteinshakes, Iso-Drinks und Elektrolyte für Sportler.",
  },
  {
    question: "Was ist der Boxenstopp Spezial?",
    answer: "Unser Signature-Drink: ein Kollagen Latte Macchiato mit Roh-Kakao und Meersalz – einzigartig im Allgäu.",
  },
  {
    question: "Ist das Bistro Boxenstopp gut für Radfahrer geeignet?",
    answer: "Ja, wir liegen direkt am Bodensee-Königssee-Radweg und an der Leiblachroute. Radfahrer können bei uns eine entspannte Pause machen, sich stärken und mit Energie weiterfahren.",
  },
  {
    question: "Gehört das Bistro zum Fitnessstudio FITES?",
    answer: "Ja, das Bistro Boxenstopp befindet sich im Gebäude des FITES Allgäu Fitnessstudios in Hergatz – ideal für eine Stärkung nach dem Training.",
  },
];

const ReviewCTASection = () => {
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
        <h3 className={`font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-3 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
          Hat's dir geschmeckt? Erzähl's weiter! ☕
        </h3>
        <p className={`text-primary-foreground/70 text-sm mb-8 max-w-md mx-auto ${visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          Deine Bewertung hilft anderen Radfahrern und Genießern, uns zu finden.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#google-review"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 bg-card text-primary px-7 py-3 rounded-lg font-medium hover:ring-2 hover:ring-warm-gold/50 transition-all ${visible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            Auf Google bewerten
          </a>
          <a
            href="#tripadvisor"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 bg-card text-primary px-7 py-3 rounded-lg font-medium hover:ring-2 hover:ring-warm-gold/50 transition-all ${visible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Auf TripAdvisor bewerten
          </a>
        </div>

        <p className={`text-primary-foreground/50 text-xs italic mt-6 ${visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
          Es dauert nur 30 Sekunden und bedeutet uns die Welt. Danke! 💛
        </p>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <Layout>
      <SEO title="Bistro Boxenstopp Hergatz | Café & Bistro am Radweg im Westallgäu" description="Bistro Boxenstopp in Hergatz – Kaffee, Flammkuchen & Herbalife-Shakes direkt an der Leiblachroute und am Bodensee-Königssee-Radweg. E-Bike-Ladestation & Terrasse." path="/" />
      {/* Hero */}
      {/* Hero */}
      <section className="relative overflow-hidden h-[55vh]">
        <div className="relative h-full">
          <img
            src={heroBg}
            alt="Bistro Boxenstopp, gemütliches Café-Interieur mit Kaffee und Gebäck"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 25%" }}
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex items-center justify-center px-6 z-10">
            <img
              src={heroLogoSchriftzug}
              alt="Bistro Boxenstopp"
              className="w-[90%] max-w-[700px] animate-fade-in-up"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>
      </section>

      {/* Slogan + CTA */}
      <section className="text-center" style={{ backgroundColor: "#fef4ec", paddingTop: "16px", paddingBottom: "20px" }}>
        <p className="font-serif" style={{ color: "#164472", fontSize: "28px", fontWeight: 500 }}>
          Hergatz' bestgehütetes Geheimnis
        </p>
        <div style={{ marginTop: "24px" }}>
          <Link
            to="/speisekarte"
            className="inline-block rounded-lg font-medium text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#b8943e", padding: "10px 24px", fontSize: "14px" }}
          >
            Speisekarte ansehen
          </Link>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="divider-bronze mb-4" />
          <p className="text-lg leading-relaxed text-muted-foreground mb-4">
            Zugegeben: Man muss uns erstmal finden. Das Bistro Boxenstopp liegt versteckt in einer
            ruhigen Wohnsiedlung in Hergatz-Wohmbrechts, aber genau das macht uns aus.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Wer den Weg zu uns findet, wird belohnt: mit richtig gutem Kaffee, frischen Flammkuchen,
            einer im Sommer angenehm kühlen Terrasse und echter Allgäuer Gastfreundschaft.
            Von Helena und Eugen, für alle.
          </p>
          <div className="divider-bronze mt-4" />
        </div>
      </section>

      {/* Bestseller */}
      <BestsellerSection />

      {/* Highlights – 2x2 grid */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {highlights.map((h) => (
              <div key={h.title} className="bg-card rounded-xl p-8 text-center shadow-sm border border-border/50">
                <div className="w-14 h-14 rounded-full bg-bronze/10 flex items-center justify-center mx-auto mb-5">
                  <h.icon className="w-7 h-7 text-bronze" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{h.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Ein Bistro, das man nicht erwartet, und nicht mehr vergisst
          </h2>
          <div className="space-y-8">
            {whyUs.map((item) => (
              <div key={item.title} className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-warm-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-primary-foreground/80 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-bronze/10 flex items-center justify-center mx-auto mb-5">
              <Clock className="w-7 h-7 text-bronze" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Öffnungszeiten</h2>
            <div className="space-y-4">
              {hours.map((h) => (
                <div key={h.days} className="flex justify-between items-center text-base">
                  <span className="font-medium text-foreground">{h.days}</span>
                  <span className="text-muted-foreground">{h.time}</span>
                </div>
              ))}
            </div>
            <div className="divider-bronze mt-8" />
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <ReviewCTASection />

    </Layout>
  );
};

export default Index;
