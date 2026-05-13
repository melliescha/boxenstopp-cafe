import { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Bike,
  Car,
  Bus,
  Navigation,
  Globe,
  Home,
  DoorOpen,
  Trees,
  ParkingCircle,
  Lightbulb,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import parkplaetzeImg from "@/assets/parkplaetze.jpg";
import treppeImg from "@/assets/treppe.jpg";
import eingangImg from "@/assets/eingang.jpg";
import aussenterrasseImg from "@/assets/aussenterrasse.jpg";
import fahrradstaenderImg from "@/assets/fahrradstaender.jpg";
import aussenansichtHausImg from "@/assets/aussenansicht-haus.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const PHONE_DISPLAY = "0171 6226201";
const PHONE_LINK = "+491716226201";
const EMAIL = "fit.es@icloud.com";
const MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=S%C3%BCdhang+1%2C+88145+Hergatz";

const NAVY = "#164472";
const BRONZE = "#9E7C4E";
const CREAM = "#FEF4EC";
const WARM_BROWN = "#6B4A2E";
const BORDER = "#EDE0D0";

const hours = [
  { days: "Montag", time: "15:00 – 20:00 Uhr" },
  { days: "Dienstag", time: "Ruhetag" },
  { days: "Mittwoch – Freitag", time: "15:00 – 20:00 Uhr" },
  { days: "Samstag", time: "10:30 – 15:30 Uhr" },
  { days: "Sonntag", time: "11:00 – 16:00 Uhr" },
];

const nearby = [
  { from: "Lindau", info: "ca. 20 km · etwa 25 Min Autofahrt" },
  { from: "Wangen im Allgäu", info: "ca. 12 km · etwa 15 Min" },
  { from: "Hergatz Zentrum", info: "ca. 5 Min" },
  { from: "Wohmbrechts", info: "ca. 2 Min Fußweg" },
  { from: "Lindenberg", info: "ca. 15 km · etwa 18 Min" },
  { from: "Heimenkirch", info: "ca. 8 km · etwa 10 Min" },
];

const placeholders = [
  { icon: Home, caption: "Außenansicht unseres Hauses am Südhang 1", image: aussenansichtHausImg },
  { icon: Navigation, caption: "Die Treppe führt euch direkt zu uns", image: treppeImg },
  { icon: DoorOpen, caption: "Unser Eingang", image: eingangImg },
  { icon: Trees, caption: "Unsere Außenterrasse mit Schatten und Schirm", image: aussenterrasseImg },
  { icon: ParkingCircle, caption: "5 Gästeparkplätze direkt am Haus", image: parkplaetzeImg },
  { icon: Bike, caption: "Fahrradständer am Eingang, direkt am Bodensee-Königssee-Radweg", image: fahrradstaenderImg },
];

const Contact = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const placeSchema = {
      "@context": "https://schema.org",
      "@type": "Place",
      name: "Bistro Boxenstopp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Südhang 1",
        addressLocality: "Hergatz",
        addressRegion: "Bayern",
        postalCode: "88145",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "47.6489",
        longitude: "9.8520",
      },
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "place-schema";
    script.textContent = JSON.stringify(placeSchema);
    document.head.appendChild(script);
    return () => {
      const existing = document.head.querySelector('script[id="place-schema"]');
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  return (
    <Layout>
      <SEO
        title="Anfahrt & Kontakt | Bistro Boxenstopp Hergatz im Westallgäu"
        description="So findet ihr das Bistro Boxenstopp in Hergatz/Wohmbrechts: Anfahrt mit Auto, Rad oder Bahn. Direkt am Bodensee-Königssee-Radweg und an der Leiblachroute."
        path="/kontakt"
      />

      {/* SECTION 1: HERO */}
      <section className="bg-background" style={{ paddingTop: 56, paddingBottom: 40 }}>
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3" style={{ color: NAVY }}>
            Findet uns
          </h1>
          <p className="text-base md:text-lg" style={{ color: BRONZE }}>
            Euer Boxenstopp im Westallgäu, direkt am Bodensee-Königssee-Radweg
          </p>
        </div>
      </section>

      {/* SECTION 2: TWO-COLUMN MAGAZINE */}
      <section className="bg-background pb-16 md:pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* MOBILE: Map first via order */}
            <div className="order-1 lg:order-2">
              <div
                className="overflow-hidden shadow-md w-full"
                style={{
                  borderRadius: 12,
                  height: "min(70vh, 520px)",
                  minHeight: 280,
                }}
              >
                <iframe
                  title="Bistro Boxenstopp Standort auf Google Maps"
                  src="https://www.google.com/maps?q=S%C3%BCdhang+1%2C+88145+Hergatz&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4">
                <a
                  href={MAPS_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium hover:underline underline-offset-4 min-h-[44px]"
                  style={{ color: NAVY }}
                >
                  Route in Google Maps öffnen
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* LEFT: Contact typography */}
            <div className="order-2 lg:order-1 space-y-10">
              {/* Adresse */}
              <div>
                <p
                  className="font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-3"
                  style={{ color: BRONZE }}
                >
                  Adresse
                </p>
                <address className="not-italic">
                  <p
                    className="font-serif text-2xl md:text-3xl font-bold leading-tight"
                    style={{ color: NAVY }}
                  >
                    Bistro Boxenstopp
                  </p>
                  <p className="text-lg mt-2" style={{ color: WARM_BROWN }}>
                    Südhang 1
                  </p>
                  <p className="text-lg" style={{ color: WARM_BROWN }}>
                    88145 Hergatz / Wohmbrechts
                  </p>
                </address>
              </div>

              {/* Kontakt */}
              <div>
                <p
                  className="font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-4"
                  style={{ color: BRONZE }}
                >
                  Kontakt
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0" style={{ color: BRONZE }} aria-hidden="true" />
                    <a
                      href={`tel:${PHONE_LINK}`}
                      className="text-lg font-medium hover:underline underline-offset-4"
                      style={{ color: NAVY }}
                      aria-label={`Bistro Boxenstopp anrufen: ${PHONE_DISPLAY}`}
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 flex-shrink-0" style={{ color: BRONZE }} aria-hidden="true" />
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-lg font-medium hover:underline underline-offset-4 break-all"
                      style={{ color: NAVY }}
                    >
                      {EMAIL}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Globe className="w-5 h-5 flex-shrink-0" style={{ color: BRONZE }} aria-hidden="true" />
                    <a
                      href="https://bistro-boxenstopp.de"
                      className="text-lg font-medium hover:underline underline-offset-4"
                      style={{ color: NAVY }}
                    >
                      bistro-boxenstopp.de
                    </a>
                  </li>
                </ul>
              </div>

              {/* Öffnungszeiten */}
              <div>
                <p
                  className="font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-4"
                  style={{ color: BRONZE }}
                >
                  <span className="inline-flex items-center gap-2">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    Öffnungszeiten
                  </span>
                </p>
                <ul>
                  {hours.map((h) => (
                    <li
                      key={h.days}
                      className="flex justify-between items-baseline gap-4 py-2 border-b last:border-0"
                      style={{ borderColor: BORDER }}
                    >
                      <span className="font-medium" style={{ color: NAVY }}>
                        {h.days}
                      </span>
                      <span style={{ color: WARM_BROWN }}>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ANFAHRT-DETAILS */}
      <section className="py-14 md:py-20" style={{ backgroundColor: CREAM }}>
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-10">
            <p
              className="font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-3"
              style={{ color: BRONZE }}
            >
              Anfahrt
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold" style={{ color: NAVY }}>
              So kommt ihr zu uns
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem
              value="auto"
              className="bg-white rounded-xl px-5 border"
              style={{ borderColor: BORDER }}
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="flex items-center gap-3 font-serif text-lg" style={{ color: NAVY }}>
                  <Car className="w-5 h-5" style={{ color: BRONZE }} aria-hidden="true" />
                  Mit dem Auto
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Von Lindau über A96 Richtung Wangen, Ausfahrt Hergatz. Folgt der
                Beschilderung Richtung Wohmbrechts. Wir liegen am Südhang 1.
                5 kostenlose Gästeparkplätze direkt am Haus, weitere öffentliche
                Parkplätze in der Nähe.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="rad"
              className="bg-white rounded-xl px-5 border"
              style={{ borderColor: BORDER }}
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="flex items-center gap-3 font-serif text-lg" style={{ color: NAVY }}>
                  <Bike className="w-5 h-5" style={{ color: BRONZE }} aria-hidden="true" />
                  Mit dem Rad
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Wir liegen direkt am Bodensee-Königssee-Radweg sowie an der
                Leiblachroute. Beide Routen führen praktisch an unserer Haustür
                vorbei. Fahrradständer mit Schließmöglichkeit direkt am Eingang.
                Steckdosen für E-Bikes auf Anfrage nutzbar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="bahn"
              className="bg-white rounded-xl px-5 border"
              style={{ borderColor: BORDER }}
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="flex items-center gap-3 font-serif text-lg" style={{ color: NAVY }}>
                  <Bus className="w-5 h-5" style={{ color: BRONZE }} aria-hidden="true" />
                  Mit Bus und Bahn
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Bahnhof Hergatz ist von uns aus etwa 8 Minuten zu Fuß erreichbar.
                Regionale Buslinien halten ebenfalls in Hergatz.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* SECTION 4: ENTFERNUNGEN */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-10">
            <p
              className="font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-3"
              style={{ color: BRONZE }}
            >
              Aus der Region
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold" style={{ color: NAVY }}>
              Entfernungen aus den Nachbarorten
            </h2>
          </div>
          <ul>
            {nearby.map((n) => (
              <li
                key={n.from}
                className="flex justify-between items-baseline gap-4 py-4 border-b"
                style={{ borderColor: BORDER }}
              >
                <span className="font-medium" style={{ color: NAVY }}>
                  Aus {n.from}
                </span>
                <span className="text-sm text-right" style={{ color: WARM_BROWN }}>
                  {n.info}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 5: VERTRAUENS-BOX */}
      <section className="py-14 md:py-20" style={{ backgroundColor: CREAM }}>
        <div className="container mx-auto px-6 max-w-3xl">
          <div
            className="rounded-2xl p-6 md:p-8 flex items-start gap-4"
            style={{ backgroundColor: "#FFFFFF", border: `2px solid ${BRONZE}` }}
          >
            <Lightbulb
              className="w-7 h-7 flex-shrink-0 mt-0.5"
              style={{ color: "#B8943E" }}
              aria-hidden="true"
            />
            <div>
              <h2 className="font-serif text-xl font-bold mb-3" style={{ color: NAVY }}>
                Hinweis zum Eingang
              </h2>
              <p className="text-base leading-relaxed" style={{ color: WARM_BROWN }}>
                Wir sind etwas versteckt. Das Bistro liegt im Erdgeschoss unseres
                Wohnhauses. Außen führt eine Treppe nach unten direkt zur Terrasse
                und zum Eingang. Folgt einfach den Schildern „Bistro Boxenstopp".
                Keine Sorge: ihr seid hier richtig, auch wenn es wirkt wie ein
                Privatgrundstück. Willkommen!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: BILDER-GALERIE */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <p
              className="font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-3"
              style={{ color: BRONZE }}
            >
              Wegweiser
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3" style={{ color: NAVY }}>
              So findet ihr uns
            </h2>
            <p style={{ color: WARM_BROWN }}>
              Ein kleiner Wegweiser für euren ersten Besuch
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {placeholders.map((p, i) => {
              const Icon = p.icon;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="text-left bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow focus:outline-none focus:ring-2"
                  style={{ border: `1px solid ${BORDER}` }}
                  aria-label={`Bild vergrößern: ${p.caption}`}
                >
                  <div
                    className="aspect-[4/3] flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: CREAM }}
                  >
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.caption}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Icon className="w-16 h-16" style={{ color: BRONZE }} aria-hidden="true" />
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-sm" style={{ color: WARM_BROWN }}>
                      {p.caption}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={lightbox !== null} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-2xl">
          {lightbox !== null && (
            <>
              <DialogTitle className="font-serif text-xl" style={{ color: NAVY }}>
                {placeholders[lightbox].caption}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Vorschau zum Bild: {placeholders[lightbox].caption}
              </DialogDescription>
              <div
                className="aspect-[4/3] flex items-center justify-center rounded-lg overflow-hidden"
                style={{ backgroundColor: CREAM }}
              >
                {placeholders[lightbox].image ? (
                  <img
                    src={placeholders[lightbox].image}
                    alt={placeholders[lightbox].caption}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  (() => {
                    const Icon = placeholders[lightbox].icon;
                    return <Icon className="w-32 h-32" style={{ color: BRONZE }} aria-hidden="true" />;
                  })()
                )}
              </div>
              {!placeholders[lightbox].image && (
                <p className="text-sm text-muted-foreground text-center">
                  Foto folgt – Platzhalter
                </p>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* SECTION 7: CALL TO ACTION */}
      <section className="py-14 md:py-20" style={{ backgroundColor: NAVY }}>
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-bold mb-3" style={{ color: CREAM }}>
            Reservierung oder Fragen?
          </h2>
          <p className="mb-8 text-base md:text-lg" style={{ color: CREAM, opacity: 0.9 }}>
            Ruft uns einfach an, wir freuen uns auf euch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_LINK}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold shadow-sm hover:opacity-90 transition-opacity min-h-[52px] text-base"
              style={{ backgroundColor: "#B8943E", color: NAVY }}
              aria-label={`Anrufen: ${PHONE_DISPLAY}`}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Jetzt anrufen
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 hover:opacity-90 transition-opacity min-h-[52px] text-base"
              style={{ borderColor: CREAM, color: CREAM }}
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              Per E-Mail schreiben
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
