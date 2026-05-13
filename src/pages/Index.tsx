import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Map, Thermometer, ShowerHead, BatteryCharging, Sun, Users, Bike, Clock, ArrowRight } from "lucide-react";
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
    question: "Ist das ein Privatgrundstück? Darf ich da überhaupt hin?",
    answer:
      "Ja, ihr dürft! Das Gebäude ist gleichzeitig unser Einfamilienhaus, das verwirrt viele. Außen führt eine Treppe nach unten zur Terrasse und zum Eingang. Genau da kommt ihr rein. Auf dem Schild seht ihr „Bistro Boxenstopp\" und „FITES Allgäu\" – beides ist im selben Gebäude. Einfach die Treppe runter, Türe auf, willkommen!",
  },
  {
    question: "Muss ich Fitnessmitglied sein, um ins Bistro zu kommen?",
    answer:
      "Auf gar keinen Fall! Wir sind ein eigenständiges Bistro. Du kannst einfach auf einen Kaffee, einen Flammkuchen oder unser Holzfällerbrot vorbeikommen, ohne jemals ein Fitnessstudio von innen zu sehen. Versprochen.",
  },
  {
    question: "Bin ich hier richtig, wenn ich einfach nur Kaffee will?",
    answer:
      "Absolut, du bist sogar GENAU richtig. Unser Name kommt nicht zufällig „Boxenstopp\". Egal ob nach der Arbeit, nach einer Radtour, einem Spaziergang durch Hergatz oder einfach so – wir sind dein Stopp zum Durchatmen.",
  },
  {
    question: "Wie finde ich rein?",
    answer:
      "Wir liegen am Südhang 1 in Hergatz / Wohmbrechts. Von außen seht ihr eine Treppe, die nach unten führt – die kommt euch direkt zu uns. Folgt einfach den Schildern „Bistro Boxenstopp\". Wir freuen uns auf euch.",
  },
  {
    question: "Wann habt ihr offen?",
    answer:
      "Montag: 15:00–20:00 Uhr. Dienstag: Ruhetag. Mittwoch–Freitag: 15:00–20:00 Uhr. Samstag: 10:30–15:30 Uhr. Sonntag: 11:00–16:00 Uhr.",
  },
  {
    question: "Ihr seid doch die mit der ewigen Baustelle. Wirkt absolut unseriös, oder?",
    answer:
      "Wir wissen, dass wir bekannt sind als \"die mit der ewigen Baustelle\". Und das ist ein Thema, das uns sehr schmerzt. Es gibt viele Spekulationen und wilde Theorien, was dahintersteckt. Die Wahrheit? Eigentlich nicht viel. Wir haben am Bodensee gelebt, uns ins Allgäu verliebt, hier unser Grundstück gekauft und dachten: das wird unser großes Glück, in einem Jahr ziehen wir ein. Dann kam alles anders. Keine wilden Theorien, einfach das Leben. Wer kennt schon eine Baustelle, wo alles glatt läuft? Nur hatten wir eben den Worst Case erwischt. Manchmal kann man alles richtig machen und es läuft trotzdem schief. So ist das. Wir leben mittlerweile einige Jahre hier, kennen jede Straße in Hergatz und Wohmbrechts und sind angekommen, auch wenn das Haus es noch nicht ganz ist. Aber genau deshalb sind wir heute hier: weil wir nicht aufgegeben haben. Das Bistro Boxenstopp ist der erste Schritt, dass aus unserem Traum mehr wird als nur eine Baustelle. Wir bauen weiter, Stück für Stück, mit jedem Gast der zu uns findet.",
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
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      const existing = document.head.querySelector('script[id="faq-schema"]');
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  return (
    <Layout>
      <SEO title="Bistro Boxenstopp Hergatz – Barista-Kaffee, Flammkuchen & Proteinshakes im Westallgäu" description="Euer Stopp am Bodensee-Königssee-Radweg in Hergatz: Barista-Kaffee von Cup&Cino, handgemachte Flammkuchen, Proteinshakes und der legendäre Boxenstopp-Spezial. Direkt im FITES Allgäu." path="/" />
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

      {/* FAQ – Bevor du kommst */}
      <section className="py-20" style={{ backgroundColor: "#FEF4EC" }}>
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-10">
            <p className="font-medium tracking-[0.2em] uppercase text-sm mb-2" style={{ color: "#9E7C4E" }}>
              FAQ
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold" style={{ color: "#164472" }}>
              Bevor du kommst, die wichtigsten Antworten
            </h2>
            <div className="divider-bronze mt-4" />
          </div>

          <Accordion
            type="single"
            collapsible
            className="bg-white rounded-xl px-6 shadow-sm"
            style={{ border: "1px solid #EDE0D0" }}
          >
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left font-medium hover:no-underline" style={{ color: "#164472" }}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-base" style={{ color: "#6B4A2E" }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 rounded-lg font-medium text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#B8943E", padding: "12px 28px", fontSize: "15px" }}
            >
              Alle Fragen ansehen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <ReviewCTASection />

    </Layout>
  );
};

export default Index;
