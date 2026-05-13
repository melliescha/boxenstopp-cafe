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

const PHONE_DISPLAY = "0171 7622620";
const PHONE_LINK = "+4917176226201";
const EMAIL = "fit.es@icloud.com";
const MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=S%C3%BCdhang+1%2C+88145+Hergatz";

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
  { icon: Home, caption: "Außenansicht unseres Hauses am Südhang 1" },
  { icon: Navigation, caption: "Die Treppe führt euch direkt zu uns" },
  { icon: DoorOpen, caption: "Unser Eingang" },
  { icon: Trees, caption: "Unsere Außenterrasse mit Schatten und Schirm" },
  { icon: ParkingCircle, caption: "5 Gästeparkplätze direkt am Haus" },
  { icon: Bike, caption: "Fahrradständer am Eingang, direkt am Bodensee-Königssee-Radweg" },
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
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <p className="text-bronze font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Anfahrt & Kontakt
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Findet uns im Westallgäu
          </h1>
          <div className="divider-bronze mb-6" />
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Euer Boxenstopp am Bodensee-Königssee-Radweg in Hergatz.
          </p>
        </div>
      </section>

      {/* SECTION 2: KONTAKTDATEN */}
      <section className="pb-12 md:pb-16" style={{ backgroundColor: "#FEF4EC" }}>
        <div className="container mx-auto px-6 max-w-5xl pt-12 md:pt-16">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Adresse */}
            <div
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm"
              style={{ border: "1px solid #EDE0D0" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5" style={{ color: "#9E7C4E" }} aria-hidden="true" />
                <h2 className="font-serif text-xl font-bold" style={{ color: "#164472" }}>
                  Adresse
                </h2>
              </div>
              <address className="not-italic text-foreground leading-relaxed">
                <p className="font-medium">Bistro Boxenstopp</p>
                <p className="text-muted-foreground">Südhang 1</p>
                <p className="text-muted-foreground">88145 Hergatz / Wohmbrechts</p>
                <p className="text-muted-foreground">Bayern, Deutschland</p>
              </address>
            </div>

            {/* Telefon */}
            <div
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm"
              style={{ border: "1px solid #EDE0D0" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-5 h-5" style={{ color: "#9E7C4E" }} aria-hidden="true" />
                <h2 className="font-serif text-xl font-bold" style={{ color: "#164472" }}>
                  Telefon
                </h2>
              </div>
              <a
                href={`tel:${PHONE_LINK}`}
                className="inline-block text-lg md:text-xl font-medium text-foreground hover:text-bronze transition-colors py-2"
                aria-label={`Bistro Boxenstopp anrufen: ${PHONE_DISPLAY}`}
              >
                {PHONE_DISPLAY}
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                Direkt anrufen für Reservierung & Fragen
              </p>
            </div>

            {/* E-Mail */}
            <div
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm"
              style={{ border: "1px solid #EDE0D0" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5" style={{ color: "#9E7C4E" }} aria-hidden="true" />
                <h2 className="font-serif text-xl font-bold" style={{ color: "#164472" }}>
                  E-Mail
                </h2>
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-block text-base md:text-lg font-medium text-foreground hover:text-bronze transition-colors break-all py-2"
              >
                {EMAIL}
              </a>
            </div>

            {/* Web */}
            <div
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm"
              style={{ border: "1px solid #EDE0D0" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5" style={{ color: "#9E7C4E" }} aria-hidden="true" />
                <h2 className="font-serif text-xl font-bold" style={{ color: "#164472" }}>
                  Website
                </h2>
              </div>
              <a
                href="https://bistro-boxenstopp.de"
                className="inline-block text-base md:text-lg font-medium text-foreground hover:text-bronze transition-colors py-2"
              >
                bistro-boxenstopp.de
              </a>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div
            className="bg-white rounded-2xl p-6 md:p-7 shadow-sm mt-6"
            style={{ border: "1px solid #EDE0D0" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5" style={{ color: "#9E7C4E" }} aria-hidden="true" />
              <h2 className="font-serif text-xl font-bold" style={{ color: "#164472" }}>
                Öffnungszeiten
              </h2>
            </div>
            <ul className="divide-y" style={{ borderColor: "#EDE0D0" }}>
              {hours.map((h) => (
                <li
                  key={h.days}
                  className="flex justify-between items-center py-2.5 border-b last:border-0 gap-4"
                  style={{ borderColor: "#EDE0D0" }}
                >
                  <span className="font-medium text-foreground">{h.days}</span>
                  <span className="text-muted-foreground text-right">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: GOOGLE MAPS */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2
            className="font-serif text-2xl md:text-3xl font-bold text-center mb-8"
            style={{ color: "#164472" }}
          >
            Unser Standort
          </h2>
          <div
            className="rounded-2xl overflow-hidden shadow-md w-full"
            style={{ minHeight: "300px", height: "min(60vh, 450px)" }}
          >
            <iframe
              title="Bistro Boxenstopp Standort auf Google Maps"
              src="https://www.google.com/maps?q=S%C3%BCdhang+1%2C+88145+Hergatz&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="text-center mt-6">
            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white shadow-sm hover:opacity-90 transition-opacity min-h-[44px]"
              style={{ backgroundColor: "#164472" }}
            >
              <Navigation className="w-4 h-4" aria-hidden="true" />
              Route in Google Maps öffnen
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4: ANFAHRT-DETAILS */}
      <section className="py-12 md:py-16" style={{ backgroundColor: "#FEF4EC" }}>
        <div className="container mx-auto px-6 max-w-3xl">
          <h2
            className="font-serif text-2xl md:text-3xl font-bold text-center mb-8"
            style={{ color: "#164472" }}
          >
            So kommt ihr zu uns
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem
              value="auto"
              className="bg-white rounded-xl px-5 border"
              style={{ borderColor: "#EDE0D0" }}
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="flex items-center gap-3 font-serif text-lg" style={{ color: "#164472" }}>
                  <Car className="w-5 h-5" style={{ color: "#9E7C4E" }} aria-hidden="true" />
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
              style={{ borderColor: "#EDE0D0" }}
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="flex items-center gap-3 font-serif text-lg" style={{ color: "#164472" }}>
                  <Bike className="w-5 h-5" style={{ color: "#9E7C4E" }} aria-hidden="true" />
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
              style={{ borderColor: "#EDE0D0" }}
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="flex items-center gap-3 font-serif text-lg" style={{ color: "#164472" }}>
                  <Bus className="w-5 h-5" style={{ color: "#9E7C4E" }} aria-hidden="true" />
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

      {/* SECTION 5: ENTFERNUNGEN */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2
            className="font-serif text-2xl md:text-3xl font-bold text-center mb-8"
            style={{ color: "#164472" }}
          >
            Entfernungen aus den Nachbarorten
          </h2>
          <ul
            className="bg-white rounded-2xl shadow-sm divide-y overflow-hidden"
            style={{ border: "1px solid #EDE0D0", borderColor: "#EDE0D0" }}
          >
            {nearby.map((n) => (
              <li
                key={n.from}
                className="flex justify-between items-center px-5 py-4 gap-4"
                style={{ borderColor: "#EDE0D0" }}
              >
                <span className="font-medium text-foreground">Aus {n.from}</span>
                <span className="text-muted-foreground text-sm text-right">{n.info}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 6: VERTRAUENS-BOX */}
      <section className="py-12 md:py-16" style={{ backgroundColor: "#FEF4EC" }}>
        <div className="container mx-auto px-6 max-w-3xl">
          <div
            className="rounded-2xl p-6 md:p-8 flex items-start gap-4 shadow-sm"
            style={{ backgroundColor: "#FEF4EC", border: "2px solid #9E7C4E" }}
          >
            <Lightbulb
              className="w-7 h-7 flex-shrink-0 mt-0.5"
              style={{ color: "#B8943E" }}
              aria-hidden="true"
            />
            <div>
              <h2
                className="font-serif text-xl font-bold mb-3"
                style={{ color: "#164472" }}
              >
                Hinweis zum Eingang
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#6B4A2E" }}>
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

      {/* SECTION 7: BILDER-GALERIE */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <h2
              className="font-serif text-2xl md:text-3xl font-bold mb-3"
              style={{ color: "#164472" }}
            >
              So findet ihr uns
            </h2>
            <p className="text-muted-foreground">
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
                  className="text-left bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-bronze"
                  style={{ border: "1px solid #EDE0D0" }}
                  aria-label={`Bild vergrößern: ${p.caption}`}
                >
                  <div
                    className="aspect-[4/3] flex items-center justify-center"
                    style={{ backgroundColor: "#FEF4EC" }}
                  >
                    <Icon
                      className="w-16 h-16"
                      style={{ color: "#9E7C4E" }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-foreground">{p.caption}</p>
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
              <DialogTitle className="font-serif text-xl" style={{ color: "#164472" }}>
                {placeholders[lightbox].caption}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Vorschau zum Bild: {placeholders[lightbox].caption}
              </DialogDescription>
              <div
                className="aspect-[4/3] flex items-center justify-center rounded-lg"
                style={{ backgroundColor: "#FEF4EC" }}
              >
                {(() => {
                  const Icon = placeholders[lightbox].icon;
                  return (
                    <Icon className="w-32 h-32" style={{ color: "#9E7C4E" }} aria-hidden="true" />
                  );
                })()}
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Foto folgt – Platzhalter
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* SECTION 8: CALL TO ACTION */}
      <section className="py-14 md:py-20" style={{ backgroundColor: "#164472" }}>
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-bold mb-3" style={{ color: "#FEF4EC" }}>
            Reservierung oder Fragen?
          </h2>
          <p className="mb-8 text-base md:text-lg" style={{ color: "#FEF4EC", opacity: 0.9 }}>
            Ruft uns einfach an, wir freuen uns auf euch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_LINK}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold shadow-sm hover:opacity-90 transition-opacity min-h-[52px] text-base"
              style={{ backgroundColor: "#B8943E", color: "#164472" }}
              aria-label={`Anrufen: ${PHONE_DISPLAY}`}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Jetzt anrufen
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 hover:opacity-90 transition-opacity min-h-[52px] text-base"
              style={{ borderColor: "#FEF4EC", color: "#FEF4EC" }}
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
