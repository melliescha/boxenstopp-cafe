import { useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Bike, Car, Bus, Navigation, AlertCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const hours = [
  { days: "Montag", time: "15:00 – 20:00 Uhr" },
  { days: "Dienstag", time: "Ruhetag" },
  { days: "Mittwoch – Freitag", time: "15:00 – 20:00 Uhr" },
  { days: "Samstag", time: "10:30 – 15:30 Uhr" },
  { days: "Sonntag", time: "11:00 – 16:00 Uhr" },
];

const nearby = [
  { from: "Lindau", distance: "ca. 20 km", time: "etwa 25 Minuten Autofahrt" },
  { from: "Wangen im Allgäu", distance: "ca. 12 km", time: "etwa 15 Minuten" },
  { from: "Hergatz Zentrum", distance: "—", time: "ca. 5 Minuten" },
  { from: "Wohmbrechts", distance: "—", time: "ca. 2 Minuten Fußweg" },
];

const Contact = () => {
  useEffect(() => {
    const placeSchema = {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Bistro Boxenstopp",
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

      {/* Hero */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <p className="text-bronze font-medium tracking-[0.2em] uppercase text-sm mb-2">
            Besuche uns
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Anfahrt & Kontakt
          </h1>
          <div className="divider-bronze mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            Ja, wir sind ein bisschen versteckt – aber genau deshalb lohnt sich der Weg.
            Hier ist alles, was ihr braucht, um zu uns zu finden.
          </p>
        </div>
      </section>

      {/* Prominent notice */}
      <section className="pb-12 md:pb-16 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <div
            className="rounded-xl p-6 md:p-8 flex items-start gap-4"
            style={{ backgroundColor: "#FEF4EC", border: "1px solid #EDE0D0" }}
          >
            <AlertCircle
              className="w-6 h-6 flex-shrink-0 mt-0.5"
              style={{ color: "#B8943E" }}
            />
            <div>
              <h2
                className="font-serif text-lg font-semibold mb-2"
                style={{ color: "#164472" }}
              >
                Wichtiger Hinweis
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#6B4A2E" }}>
                Wir sind etwas versteckt: das Bistro ist im Erdgeschoss unseres Wohnhauses.
                Außen führt eine Treppe nach unten direkt zur Terrasse und zum Eingang.
                Folgt einfach den Schildern „Bistro Boxenstopp“.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Address + Directions */}
      <section className="py-12 md:py-16" style={{ backgroundColor: "#FEF4EC" }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left: Address & Contact */}
            <div className="space-y-10">
              {/* Address */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-bronze" />
                  <h2
                    className="font-serif text-xl font-bold"
                    style={{ color: "#164472" }}
                  >
                    Adresse
                  </h2>
                </div>
                <div
                  className="bg-white rounded-xl p-6 shadow-sm"
                  style={{ border: "1px solid #EDE0D0" }}
                >
                  <p className="font-medium text-foreground">Bistro Boxenstopp</p>
                  <p className="text-muted-foreground">Südhang 1</p>
                  <p className="text-muted-foreground">88145 Hergatz / Wohmbrechts</p>
                  <p className="text-muted-foreground">Bayern, Deutschland</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=S%C3%BCdhang+1%2C+88145+Hergatz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium hover:opacity-80 transition-opacity"
                    style={{ color: "#164472" }}
                  >
                    <Navigation className="w-4 h-4" />
                    In Google Maps öffnen
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-5 h-5 text-bronze" />
                  <h2
                    className="font-serif text-xl font-bold"
                    style={{ color: "#164472" }}
                  >
                    Kontakt
                  </h2>
                </div>
                <div
                  className="bg-white rounded-xl p-6 shadow-sm space-y-4"
                  style={{ border: "1px solid #EDE0D0" }}
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Telefon</p>
                    <a
                      href="tel:+491716226201"
                      className="font-medium text-foreground hover:text-bronze transition-colors"
                    >
                      0171 7622620
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Web</p>
                    <a
                      href="https://bistro-boxenstopp.de"
                      className="font-medium text-foreground hover:text-bronze transition-colors"
                    >
                      bistro-boxenstopp.de
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">E-Mail</p>
                    <a
                      href="mailto:fit.es@icloud.com"
                      className="font-medium text-foreground hover:text-bronze transition-colors"
                    >
                      fit.es@icloud.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening hours */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-bronze" />
                  <h2
                    className="font-serif text-xl font-bold"
                    style={{ color: "#164472" }}
                  >
                    Öffnungszeiten
                  </h2>
                </div>
                <div
                  className="bg-white rounded-xl p-6 shadow-sm"
                  style={{ border: "1px solid #EDE0D0" }}
                >
                  {hours.map((h) => (
                    <div
                      key={h.days}
                      className="flex justify-between items-center py-2 border-b last:border-0"
                      style={{ borderColor: "#EDE0D0" }}
                    >
                      <span className="font-medium text-foreground">{h.days}</span>
                      <span className="text-muted-foreground">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Directions */}
            <div className="space-y-10">
              {/* By car */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Car className="w-5 h-5 text-bronze" />
                  <h2
                    className="font-serif text-xl font-bold"
                    style={{ color: "#164472" }}
                  >
                    Mit dem Auto
                  </h2>
                </div>
                <div
                  className="bg-white rounded-xl p-6 shadow-sm"
                  style={{ border: "1px solid #EDE0D0" }}
                >
                  <p className="text-muted-foreground leading-relaxed">
                    Von Lindau über die A96 Richtung Wangen, Ausfahrt Hergatz.
                    Folgt der Beschilderung Richtung Wohmbrechts.
                    Wir liegen am Südhang 1. 5 kostenlose Gästeparkplätze
                    direkt am Haus, weitere öffentliche Parkplätze in der Nähe.
                  </p>
                </div>
              </div>

              {/* By bike */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Bike className="w-5 h-5 text-bronze" />
                  <h2
                    className="font-serif text-xl font-bold"
                    style={{ color: "#164472" }}
                  >
                    Mit dem Rad
                  </h2>
                </div>
                <div
                  className="bg-white rounded-xl p-6 shadow-sm"
                  style={{ border: "1px solid #EDE0D0" }}
                >
                  <p className="text-muted-foreground leading-relaxed">
                    Wir liegen direkt am Bodensee-Königssee-Radweg sowie an der
                    Leiblachroute. Beide Routen führen praktisch an unserer
                    Haustür vorbei. Fahrradständer mit Schließmöglichkeit direkt
                    am Eingang. Steckdosen für E-Bikes auf Anfrage nutzbar.
                  </p>
                </div>
              </div>

              {/* By bus & train */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Bus className="w-5 h-5 text-bronze" />
                  <h2
                    className="font-serif text-xl font-bold"
                    style={{ color: "#164472" }}
                  >
                    Mit Bus & Bahn
                  </h2>
                </div>
                <div
                  className="bg-white rounded-xl p-6 shadow-sm"
                  style={{ border: "1px solid #EDE0D0" }}
                >
                  <p className="text-muted-foreground leading-relaxed">
                    Bahnhof Hergatz ist von uns aus etwa 8 Minuten zu Fuß
                    erreichbar. Regionale Buslinien halten ebenfalls in Hergatz.
                  </p>
                </div>
              </div>

              {/* From nearby */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Navigation className="w-5 h-5 text-bronze" />
                  <h2
                    className="font-serif text-xl font-bold"
                    style={{ color: "#164472" }}
                  >
                    Aus den umliegenden Orten
                  </h2>
                </div>
                <div
                  className="bg-white rounded-xl p-6 shadow-sm"
                  style={{ border: "1px solid #EDE0D0" }}
                >
                  <div className="space-y-3">
                    {nearby.map((n) => (
                      <div
                        key={n.from}
                        className="flex justify-between items-center py-2 border-b last:border-0"
                        style={{ borderColor: "#EDE0D0" }}
                      >
                        <span className="font-medium text-foreground">
                          {n.from}
                        </span>
                        <span className="text-muted-foreground text-sm text-right">
                          {n.distance && <span className="block">{n.distance}</span>}
                          <span className="block">{n.time}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2
            className="font-serif text-2xl md:text-3xl font-bold text-center mb-8"
            style={{ color: "#164472" }}
          >
            Unser Standort
          </h2>
          <div className="rounded-xl overflow-hidden shadow-md" style={{ height: "450px" }}>
            <iframe
              title="Bistro Boxenstopp Standort auf Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2671.5!2d9.825!3d47.585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479c05e14a5d29e1%3A0x1234567890!2sS%C3%BCdhang+1%2C+88145+Hergatz!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
