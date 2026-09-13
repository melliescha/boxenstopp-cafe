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
      "telephone": "+491716226201",
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
        title="Café & Bistro Hergatz | Frühstück, Kaffee, Flammkuchen"
        description="Bistro Boxenstopp in Hergatz-Wohmbrechts im Westallgäu: Barista-Kaffee, Frühstück, ofenfrische Flammkuchen und Hüttenbrot. Direkt am Bodensee-Königssee-Radweg, Parkplätze, Duschen. Nähe Wangen, Heimenkirch, Lindenberg, Lindau."
        path="/"
        type="restaurant.restaurant"
        imageAlt="Bistro Boxenstopp in Hergatz im Westallgäu, Barista-Kaffee und Flammkuchen"
        jsonLd={localBusinessSchema}
      />

      {/* Vertrauter Einstieg mit dezenter Bewegung */}
      <section className="relative h-[calc(100svh-189px)] min-h-[375px] max-h-[620px] overflow-hidden sm:h-[68svh] sm:min-h-[560px] sm:max-h-[720px] lg:h-[58vh] lg:min-h-[540px] lg:max-h-[680px]">
        <div className="relative h-full">
          <img
            src={heroBg}
            alt="KI generiert: Bistro Boxenstopp, gemütliches Café-Interieur mit Kaffee und Gebäck"
            width={1920}
            height={1080}
            className="h-full w-full object-cover object-[58%_center] animate-hero-ken-burns sm:object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
           <div className="absolute inset-0 bg-primary/45 sm:bg-primary/35" />
          <AiBadge variant="overlay" />
           <div className="absolute inset-x-0 bottom-0 px-4 pb-6 min-[360px]:px-5 sm:px-6 sm:pb-8 md:pb-12">
             <div className="mx-auto w-full max-w-5xl">
               <p className="hero-fade-up mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-primary-foreground sm:text-xs sm:tracking-[0.2em]" style={{ animationDelay: "0.15s" }}>Café in Hergatz-Wohmbrechts</p>
               <h1 className="hero-fade-up max-w-2xl font-serif text-[28px] font-medium leading-[1.12] text-primary-foreground min-[360px]:text-[32px] sm:text-4xl" style={{ animationDelay: "0.3s" }}>
                Café &amp; Bistro in Hergatz: Hergatz' bestgehütetes Geheimnis
              </h1>
               <p className="hero-fade-up mt-3 max-w-2xl text-sm leading-5 text-primary-foreground/90 sm:text-[15px] sm:leading-6" style={{ animationDelay: "0.45s" }}>
                 <span className="sm:hidden">Barista-Kaffee, Frühstück, Flammkuchen und Hüttenbrot im Westallgäu.</span>
                 <span className="hidden sm:inline">Bistro Boxenstopp in Hergatz-Wohmbrechts: Barista-Kaffee, Frühstück, Flammkuchen und Hüttenbrot im Westallgäu, kurze Wege aus Wangen im Allgäu, Heimenkirch, Lindenberg und Lindau.</span>
              </p>
               <div className="hero-fade-up mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:flex sm:gap-3" style={{ animationDelay: "0.6s" }}>
                <Link
                  to="/speisekarte"
                   className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-5 py-3 text-center font-medium text-accent-foreground transition-colors hover:bg-accent/90 sm:px-7"
                >
                   <span className="sm:hidden">Speisekarte</span>
                   <span className="hidden sm:inline">Speisekarte ansehen</span>
                </Link>
                <a
                  href={socialLinks.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                   className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border-2 border-primary-foreground/80 px-5 py-3 text-center font-medium text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary sm:px-7"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Route planen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Willkommen */}
      <section className="border-y border-border/60 bg-secondary/30 py-10 md:py-14">
        <Reveal>
          <div className="container mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
            <div className="border-b border-bronze/50 pb-5 md:border-b-0 md:border-r md:pb-0 md:pr-12">
              <p className="font-serif text-3xl italic leading-snug text-foreground md:text-4xl">
                Ein ruhiger Platz zum Ankommen und Genießen.
              </p>
            </div>
            <div>
              <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                Zugegeben: Man muss uns erstmal finden. Das Bistro Boxenstopp liegt versteckt in einer ruhigen Wohnsiedlung in Hergatz-Wohmbrechts, aber genau das macht uns aus.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Wer den Weg zu uns findet, wird belohnt: mit richtig gutem Kaffee, frischen Flammkuchen, einer im Sommer angenehm kühlen Terrasse und echter Allgäuer Gastfreundschaft. Von Helena und Eugen, für alle.
              </p>
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
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-7">
              <div className="w-14 h-14 rounded-full bg-bronze/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-7 h-7 text-bronze" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-bronze mb-1">Wann wir für euch da sind</p>
                <h2 className="font-serif text-3xl font-bold text-foreground">Öffnungszeiten</h2>
              </div>
            </div>
            <VacationNotice />
            <div className="divide-y divide-border border-y border-border">
              {hours.map((h) => (
                <div key={h.days} className="flex justify-between items-center gap-5 py-3.5 text-base">
                  <span className="font-medium text-foreground">{h.days}</span>
                  <span className="text-muted-foreground">{h.time}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <a
                href="tel:+491716226201"
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
