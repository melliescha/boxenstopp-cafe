import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Map, Thermometer, Droplets, BatteryCharging, Sun, Users, Bike, Clock, ArrowRight, Navigation, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import BestsellerSection from "@/components/BestsellerSection";
import ShowerSection from "@/components/ShowerSection";
import Wegweiser from "@/components/Wegweiser";
import InstagramSection from "@/components/InstagramSection";
import Reveal from "@/components/Reveal";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

import heroBg from "@/assets/hero-bistro.jpg";
import heroLogoSchriftzug from "@/assets/hero-logo-schriftzug.png";
import terracePhoto from "@/assets/aussenterrasse.jpg";
import coffeePhoto from "@/assets/gallery/getraenk-zwei-cappuccino.jpg";
import interiorPhoto from "@/assets/gallery/innen-sitzbereich-tische.jpg";
import { socialLinks } from "@/config/social";
import VacationNotice from "@/components/VacationNotice";
import AiBadge from "@/components/AiBadge";
import { localBusinessSchema } from "@/lib/schema";


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
    icon: Droplets,
    title: "Kostenloses Leitungswasser",
    text: "1 € für Leitungswasser? Nicht bei uns. Wasser ist ein Grundrecht und bleibt kostenlos für euch: ein Glas oder deine Trinkflasche füllst du bei uns immer gratis auf.",
  },
  {
    icon: BatteryCharging,

    title: "Steckdosen zum Aufladen",
    text: "Wir haben keine eigene E-Bike-Ladestation, aber du darfst unsere Steckdose nutzen. Handy, Navi und E-Bike lädst du mit deinem eigenen Ladegerät kostenlos bei uns auf.",
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
    text: "Terrasse, Duschen, Steckdosen zum Aufladen und alles was du brauchst, um wieder aufzutanken.",
  },
];

const hours = [
  { days: "Montag", time: "15:00 bis 20:00 Uhr" },
  { days: "Dienstag", time: "Ruhetag" },
  { days: "Mittwoch bis Freitag", time: "15:00 bis 20:00 Uhr" },
  { days: "Samstag", time: "10:30 bis 15:30 Uhr" },
  { days: "Sonntag", time: "11:00 bis 16:00 Uhr" },
];

const faqs = [
  {
    question: "Ist das ein Privatgrundstück? Darf ich da überhaupt hin?",
    answer:
      "Ja, ihr dürft! Das Gebäude ist gleichzeitig unser Einfamilienhaus, das verwirrt viele. Außen führt eine Treppe nach unten zur Terrasse und zum Eingang. Genau da kommt ihr rein. Auf dem Schild seht ihr „Bistro Boxenstopp\" und „FITES Allgäu\", beides ist im selben Gebäude. Einfach die Treppe runter, Türe auf, willkommen!",
  },
  {
    question: "Muss ich Fitnessmitglied sein, um ins Bistro zu kommen?",
    answer:
      "Auf gar keinen Fall! Wir sind ein eigenständiges Bistro. Du kannst einfach auf einen Kaffee, einen Flammkuchen oder unser Hüttenbrot vorbeikommen, ohne jemals ein Fitnessstudio von innen zu sehen. Versprochen.",
  },
  {
    question: "Bin ich hier richtig, wenn ich einfach nur Kaffee will?",
    answer:
      "Absolut, du bist sogar GENAU richtig. Unser Name kommt nicht zufällig „Boxenstopp\". Egal ob nach der Arbeit, nach einer Radtour, einem Spaziergang durch Hergatz oder einfach so, wir sind dein Stopp zum Durchatmen.",
  },
  {
    question: "Wie finde ich rein?",
    answer:
      "Wir liegen am Südhang 1 in Hergatz / Wohmbrechts. Von außen seht ihr eine Treppe, die nach unten führt, die kommt euch direkt zu uns. Folgt einfach den Schildern „Bistro Boxenstopp\". Wir freuen uns auf euch.",
  },
  {
    question: "Wann habt ihr offen?",
    answer:
      "Montag: 15:00 bis 20:00 Uhr. Dienstag: Ruhetag. Mittwoch bis Freitag: 15:00 bis 20:00 Uhr. Samstag: 10:30 bis 15:30 Uhr. Sonntag: 11:00 bis 16:00 Uhr.",
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
      className="py-10 md:py-12"
      style={{ backgroundColor: "#FEF4EC", borderTop: "1px solid #9E7C4E33", borderBottom: "1px solid #9E7C4E33" }}
    >
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <p className={`font-serif text-2xl md:text-3xl font-bold mb-4 ${visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ color: "#164472" }}>
          Wart ihr schon bei uns? Wir freuen uns über eure Bewertung.
        </p>
        <p
          className={`text-sm md:text-base mb-6 ${visible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ color: "#164472" }}
          aria-label="5,0 von 5 Sternen auf Google (3 Bewertungen) und TripAdvisor (5 Bewertungen)"
        >
          <span aria-hidden="true" style={{ color: "#D4A54A" }}>★★★★★</span>{" "}
          <strong>5,0</strong> auf Google (3) · <strong>5,0</strong> auf TripAdvisor (5)
        </p>
        <a
          href={socialLinks.googleReview}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-lg font-medium text-white hover:opacity-90 transition-opacity ${visible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ backgroundColor: "#9E7C4E", padding: "14px 32px", minHeight: "48px", fontSize: "15px" }}
        >
          Auf Google bewerten
        </a>
      </div>
    </section>
  );
};

const Index = () => {
  useEffect(() => {
    // FAQPage schema
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
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-schema";
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    // LocalBusiness / CafeOrCoffeeShop schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "CafeOrCoffeeShop",
      "@id": "https://bistro-boxenstopp.de/#bistro",
      "name": "Bistro Boxenstopp",
      "alternateName": "Bistro Boxenstopp Hergatz",
      "description": "Bistro im Westallgäu mit Barista-Kaffee, Flammkuchen, Hüttenbrot und Proteinshakes. Direkt am Bodensee-Königssee-Radweg und an der Leiblachroute in Hergatz/Wohmbrechts.",
      "url": "https://bistro-boxenstopp.de",
      "telephone": "+4917176226201",
      "priceRange": "€€",
      "image": "https://bistro-boxenstopp.de/og-image.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Südhang 1",
        "addressLocality": "Hergatz",
        "addressRegion": "Bayern",
        "postalCode": "88145",
        "addressCountry": "DE",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "47.6489",
        "longitude": "9.8520",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Monday",
          "opens": "15:00",
          "closes": "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Wednesday", "Thursday", "Friday"],
          "opens": "15:00",
          "closes": "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:30",
          "closes": "15:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "11:00",
          "closes": "16:00",
        },
      ],
      "sameAs": [
        "https://www.instagram.com/bistro.boxenstopp/",
        "https://www.tripadvisor.ch/Restaurant_Review-g7074590-d34214130-Reviews-FITES_Cafe_Boxenstopp-Hergatz_Swabia_Bavaria.html",
        "https://share.google/z2I9vHthpnC8Ys52e",
      ],
    };
    const lbScript = document.createElement("script");
    lbScript.type = "application/ld+json";
    lbScript.id = "local-business-schema";
    lbScript.textContent = JSON.stringify(localBusinessSchema);
    document.head.appendChild(lbScript);

    return () => {
      const existingFaq = document.head.querySelector('script[id="faq-schema"]');
      if (existingFaq) document.head.removeChild(existingFaq);
      const existingLb = document.head.querySelector('script[id="local-business-schema"]');
      if (existingLb) document.head.removeChild(existingLb);
    };
  }, []);

  return (
    <Layout>
      <SEO
        title="Bistro Boxenstopp Hergatz | Kaffee & Flammkuchen"
        description="Barista-Kaffee, ofenfrische Flammkuchen und Hüttenbrot in Hergatz, Euer Stopp am Bodensee-Königssee-Radweg im Westallgäu."
        path="/"
        type="restaurant.restaurant"
        imageAlt="Bistro Boxenstopp in Hergatz im Westallgäu, Barista-Kaffee und Flammkuchen"
        jsonLd={localBusinessSchema}
      />
      {/* Atmosphärischer Einstieg */}
      <section className="relative overflow-hidden min-h-[560px] h-[72vh] max-h-[760px]">
        <div className="relative h-full">
          <img
            src={heroBg}
            alt="KI generiert: Bistro Boxenstopp, gemütliches Café-Interieur mit Kaffee und Gebäck"
            width={1920}
            height={1080}
            className="w-full h-full object-cover animate-hero-zoom"
            style={{ objectPosition: "center 25%" }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-primary/10" />
          <AiBadge variant="overlay" />
          <div className="absolute inset-0 z-10 flex items-end">
            <div className="container mx-auto px-6 pb-10 md:pb-14">
              <div className="max-w-3xl animate-fade-in-up text-primary-foreground">
                <img
                  src={heroLogoSchriftzug}
                  alt="Bistro Boxenstopp"
                  className="w-[82%] max-w-[520px] mb-4 brightness-0 invert"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={700}
                  height={200}
                />
                <h1 className="font-serif text-3xl md:text-5xl font-semibold leading-tight">
                  Ankommen. Durchatmen. Genießen.
                </h1>
                <p className="mt-3 max-w-2xl text-base md:text-lg leading-relaxed text-primary-foreground/90">
                  Dein gemütlicher Boxenstopp im Westallgäu, mit Barista-Kaffee, ofenfrischen Lieblingsgerichten und einer Terrasse zum Bleiben.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/speisekarte"
                    className="inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-7 py-3 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Speisekarte ansehen
                  </Link>
                  <a
                    href={socialLinks.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-primary-foreground/70 bg-background/10 px-7 py-3 font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-background/20"
                  >
                    <Navigation className="h-4 w-4" aria-hidden="true" />
                    Route planen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Willkommen und echte Eindrücke */}
      <section className="py-10 md:py-14 bg-background overflow-hidden">
        <Reveal>
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
              <div className="max-w-xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-bronze">Hergatz' bestgehütetes Geheimnis</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground">
                  Ein Lieblingsplatz zwischen Naturstein, Sonnenschirm und Allgäuer Ruhe
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  Ein wenig versteckt in Hergatz-Wohmbrechts wartet ein Ort, an dem die Zeit kurz langsamer läuft. Nimm Platz, hör dem leisen Treiben zu und gönn dir etwas Gutes.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Helena und Eugen empfangen dich persönlich, mit richtig gutem Kaffee, frischen Flammkuchen und ehrlicher Allgäuer Gastfreundschaft.
                </p>
              </div>
              <div className="grid h-[420px] grid-cols-5 grid-rows-5 gap-3 md:h-[500px]">
                <figure className="col-span-3 row-span-5 overflow-hidden rounded-lg">
                  <img src={terracePhoto} alt="Sonnige Terrasse des Bistro Boxenstopp mit Natursteinmauer und Sitzplätzen" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                </figure>
                <figure className="col-span-2 row-span-3 overflow-hidden rounded-lg">
                  <img src={coffeePhoto} alt="Zwei Cappuccinos auf der Terrasse des Bistro Boxenstopp" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                </figure>
                <figure className="col-span-2 row-span-2 overflow-hidden rounded-lg">
                  <img src={interiorPhoto} alt="Gemütlicher Sitzbereich im Bistro Boxenstopp" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                </figure>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Bestseller: Fotos vom Essen zuerst */}
      <Reveal>
        <BestsellerSection />
      </Reveal>

      {/* Opening Hours */}
      <section className="py-10 md:py-14 bg-background">
        <Reveal>
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-bronze/10 flex items-center justify-center mx-auto mb-5">
              <Clock className="w-7 h-7 text-bronze" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Öffnungszeiten</h2>
            <VacationNotice />
            <div className="space-y-4">
              {hours.map((h) => (
                <div key={h.days} className="flex justify-between items-center text-base">
                  <span className="font-medium text-foreground">{h.days}</span>
                  <span className="text-muted-foreground">{h.time}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <a
                href="tel:+4917176226201"
                className="inline-flex items-center justify-center gap-2 rounded-lg font-medium text-white hover:opacity-90 transition-opacity w-full sm:w-auto"
                style={{ backgroundColor: "#164472", padding: "12px 28px", fontSize: "15px", minHeight: "48px" }}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Jetzt anrufen
              </a>
              <a
                href={socialLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
                style={{ border: "2px solid #B8943E", color: "#B8943E", padding: "10px 28px", fontSize: "15px", minHeight: "48px" }}
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                Route planen
              </a>
            </div>
            <div className="divider-bronze mt-8" />
          </div>
        </div>
        </Reveal>
      </section>

      {/* Wegweiser: So findet ihr uns */}
      <Reveal>
        <Wegweiser background="cream" />
        <div className="text-center pb-10" style={{ backgroundColor: "#FEF4EC" }}>
          <a
            href={socialLinks.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg font-medium text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#164472", padding: "14px 32px", fontSize: "15px", minHeight: "48px" }}
          >
            <Navigation className="w-4 h-4" aria-hidden="true" />
            Route zu uns planen
          </a>
        </div>
      </Reveal>

      {/* Highlights, 2x2 grid */}
      <section className="py-10 md:py-14 bg-secondary/50">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Darum lohnt sich der Boxenstopp
              </h2>
              <div className="divider-bronze mt-4" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {highlights.map((h, idx) => (
              <Reveal key={h.title} delay={idx * 90}>
                <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border/50 hover-lift h-full">
                  <div className="w-14 h-14 rounded-full bg-bronze/10 flex items-center justify-center mx-auto mb-5">
                    <h.icon className="w-7 h-7 text-bronze" />
                  </div>
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-3">{h.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-10 md:py-14 bg-primary text-primary-foreground">

        <div className="container mx-auto px-6 max-w-4xl">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-8">
              Ein Bistro, das man nicht erwartet, und nicht mehr vergisst
            </h2>
          </Reveal>
          <div className="space-y-6">
            {whyUs.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 110} direction="left">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-warm-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-primary-foreground/80 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Vorschau, datenschutzsicher ohne Meta-Einbindung */}
      <Reveal>
        <InstagramSection />
      </Reveal>

      {/* Shower promo, Zusatzangebot weiter unten */}
      <Reveal>
        <ShowerSection />
      </Reveal>

      {/* FAQ, Bevor du kommst */}
      <section className="py-10 md:py-14" style={{ backgroundColor: "#FEF4EC" }}>
        <Reveal>
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-8">
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
        </Reveal>
      </section>

      {/* Review CTA */}
      <ReviewCTASection />

    </Layout>
  );
};

export default Index;
