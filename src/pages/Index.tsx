import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, Navigation, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import BestsellerSection from "@/components/BestsellerSection";
import Wegweiser from "@/components/Wegweiser";
import InstagramSection from "@/components/InstagramSection";
import Reveal from "@/components/Reveal";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

import heroBg from "@/assets/hero-bistro.jpg";
import heroVideo from "@/assets/hero-bistro-motion.mp4";
import heroAllgaeu from "@/assets/hero-allgaeu-wangen.jpg";
import heroAllgaeuVideo from "@/assets/hero-allgaeu-wangen-motion.mp4.asset.json";
import { socialLinks } from "@/config/social";
import VacationNotice from "@/components/VacationNotice";
import AiBadge from "@/components/AiBadge";
import { localBusinessSchema } from "@/lib/schema";


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
  const [showAllgaeu, setShowAllgaeu] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let landscapeTimer: number | undefined;
    const showLandscape = () => {
      setShowAllgaeu(true);
      landscapeTimer = window.setTimeout(() => setShowAllgaeu(false), 3200);
    };

    const cycleTimer = window.setInterval(showLandscape, 14000);
    const firstLandscapeTimer = window.setTimeout(showLandscape, 6000);

    return () => {
      window.clearInterval(cycleTimer);
      window.clearTimeout(firstLandscapeTimer);
      window.clearTimeout(landscapeTimer);
    };
  }, []);

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

      {/* Video-Einstieg: ruhig, hochwertig und nahbar */}
      <section className="relative flex h-[calc(100svh-125px)] min-h-[500px] max-h-[780px] items-end overflow-hidden sm:h-[72svh] sm:min-h-[610px]">
        <video
          className="absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
          autoPlay
          muted
          loop
          playsInline
          poster={heroBg}
          aria-label="KI generiert: Ruhige Szene im Bistro Boxenstopp"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroAllgaeu}
          aria-label="KI generiert: Bewegte Allgäuer Berglandschaft bei Wangen mit Kühen auf einer grünen Wiese"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{
            opacity: showAllgaeu ? 0.9 : 0,
            filter: showAllgaeu ? "blur(0px)" : "blur(12px)",
            transform: showAllgaeu ? "scale(1)" : "scale(1.025)",
            transition: "opacity 2600ms ease-in-out, filter 2600ms ease-in-out, transform 3200ms ease-in-out",
          }}
        >
          <source src={heroAllgaeuVideo.url} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/55" />
        <AiBadge variant="overlay" />
        <div className="relative z-10 w-full px-4 pb-8 pt-24 min-[360px]:px-5 sm:px-8 sm:pb-12 lg:px-12 lg:pb-16">
          <div className="mx-auto max-w-6xl">
            <p className="hero-fade-up mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80" style={{ animationDelay: "0.15s" }}>
              Café und Bistro in Hergatz-Wohmbrechts
            </p>
            <h1 className="hero-fade-up max-w-4xl font-serif text-[clamp(2.5rem,7vw,5.8rem)] font-normal leading-[0.98] text-primary-foreground" style={{ animationDelay: "0.3s" }}>
              Bistro Boxenstopp
            </h1>
            <p className="hero-fade-up mt-5 max-w-2xl text-lg font-light leading-7 text-primary-foreground/90 sm:text-xl sm:leading-8" style={{ animationDelay: "0.45s" }}>
              Ein Ort für gute Nachbarschaft, ehrlichen Genuss und herzliche Begegnungen im Westallgäu.
            </p>
            <div className="hero-fade-up mt-7 grid grid-cols-2 gap-2 sm:flex sm:gap-3" style={{ animationDelay: "0.6s" }}>
              <Link
                to="/speisekarte"
                className="inline-flex min-h-12 items-center justify-center bg-background px-5 py-3 text-center font-medium text-primary transition-colors hover:bg-secondary sm:px-8"
              >
                Speisekarte
              </Link>
              <a
                href={socialLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-primary-foreground/70 px-5 py-3 text-center font-medium text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary sm:px-8"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Route planen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gemeinschaft */}
      <section className="border-b border-border bg-background py-16 md:py-24">
        <Reveal>
          <div className="container mx-auto max-w-6xl px-6 text-center">
            <div className="mx-auto mb-8 h-px w-12 bg-bronze" />
            <h2 className="mx-auto max-w-4xl font-serif text-4xl font-normal leading-tight text-foreground md:text-6xl">
              Ein Platz, an dem aus Gästen Nachbarn werden.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-8 text-muted-foreground md:text-xl">
              Unser Café liegt in unserem Wohnhaus. Gemeinsam mit FITES Allgäu möchten wir hier einen Ort schaffen, der Hergatz zusammenbringt. Unsere Tür steht euch offen.
            </p>
            <Link to="/nachbarschaft" className="mt-7 inline-flex min-h-11 items-center border-b border-primary font-medium text-primary transition-colors hover:text-bronze">
              Unsere Einladung an Hergatz
            </Link>
            <div className="mt-14 grid border-t border-border text-left md:grid-cols-3">
              <div className="border-b border-border py-8 md:border-b-0 md:border-r md:pr-10">
                <h3 className="text-xl font-medium text-primary">Herzlich</h3>
                <p className="mt-3 leading-7 text-muted-foreground">Persönlich begrüßt, entspannt geblieben, gerne wiedergekommen.</p>
              </div>
              <div className="border-b border-border py-8 md:border-b-0 md:border-r md:px-10">
                <h3 className="text-xl font-medium text-primary">Verbunden</h3>
                <p className="mt-3 leading-7 text-muted-foreground">Ein Treffpunkt für Wohmbrechts, Radreisende und alle aus der Umgebung.</p>
              </div>
              <div className="py-8 md:pl-10">
                <h3 className="text-xl font-medium text-primary">Ehrlich</h3>
                <p className="mt-3 leading-7 text-muted-foreground">Gute Zutaten, faire Preise und eine kleine Auszeit ohne Umwege.</p>
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
          <div className="max-w-3xl mx-auto">
            <div className="mb-7 flex items-end justify-between gap-4 border-b border-border pb-5">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Wann wir für euch da sind</p>
                <h2 className="font-serif text-4xl font-normal text-foreground">Öffnungszeiten</h2>
              </div>
              <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
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

      {/* Instagram Vorschau, datenschutzsicher ohne Meta-Einbindung */}
      <Reveal>
        <InstagramSection />
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
