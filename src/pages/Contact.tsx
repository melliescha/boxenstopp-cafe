import { MapPin, Phone, Mail, Clock, Bike, Car, Footprints, Navigation } from "lucide-react";
import Layout from "@/components/Layout";

const hours = [
  { days: "Mo – Fr", time: "15:00 – 20:00 Uhr" },
  { days: "Samstag", time: "10:30 – 15:30 Uhr" },
  { days: "Sonntag", time: "11:00 – 16:00 Uhr" },
];

const tips = [
  {
    icon: Bike,
    title: "Mit dem Rad",
    text: "Wir liegen direkt an der Leiblachroute und am Bodensee-Königssee-Radweg. Tipp: Nach der Abfahrt Richtung Wohmbrechts, du siehst uns auf der linken Seite. Duschen und E-Bike-Ladestation vorhanden!",
  },
  {
    icon: Car,
    title: "Mit dem Auto",
    text: "Von der B32 Ausfahrt Hergatz, dann Richtung Wohmbrechts. In der Siedlung Südhang 1, kostenlose Parkplätze direkt am Haus. Gib 'Südhang 1, 88145 Hergatz' ins Navi ein.",
  },
  {
    icon: Footprints,
    title: "Zu Fuß",
    text: "Perfekt als Ziel für eine Wanderung durch das Westallgäu. Direkt am Ortsrand von Wohmbrechts.",
  },
  {
    icon: Navigation,
    title: "Tipp: Google Maps",
    text: "Am einfachsten findest du uns über Google Maps. Suche nach 'Bistro Boxenstopp Hergatz' oder klicke direkt hier:",
    hasButton: true,
  },
];

const Contact = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Hidden gem intro */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-bronze font-medium tracking-[0.2em] uppercase text-sm mb-2">Besuche uns</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Anfahrt & Kontakt
            </h1>
            <div className="divider-bronze mb-8" />
            <p className="font-serif text-xl italic text-foreground mb-4">
              Ja, wir sind ein bisschen versteckt, aber genau deshalb lohnt sich der Weg.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Das Bistro Boxenstopp liegt in einer ruhigen Wohnsiedlung in Hergatz-Wohmbrechts.
              Keine große Straße, kein Schild an der Hauptstraße — aber dafür Ruhe, Natur und
              echte Gastfreundschaft. Hier ist die Wegbeschreibung:
            </p>
          </div>

          {/* Contact + Map */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">So findest du uns</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-bronze mt-1 flex-shrink-0" />
                  <div className="text-muted-foreground text-sm">
                    <p className="font-medium text-foreground">Adresse</p>
                    <p>Südhang 1</p>
                    <p>88145 Hergatz (Ortsteil Wohmbrechts)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-bronze mt-1 flex-shrink-0" />
                  <div className="text-muted-foreground text-sm">
                    <p className="font-medium text-foreground">Telefon</p>
                    <p>08385 XXXXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-bronze mt-1 flex-shrink-0" />
                  <div className="text-muted-foreground text-sm">
                    <p className="font-medium text-foreground">E-Mail</p>
                    <p>info@bistro-boxenstopp.de</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-bronze mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground mb-2">Öffnungszeiten</p>
                    {hours.map((h) => (
                      <div key={h.days} className="flex justify-between gap-4 text-muted-foreground">
                        <span>{h.days}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md min-h-[350px]">
              <iframe
                title="Bistro Boxenstopp Standort auf Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2671.5!2d9.825!3d47.585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479c05e14a5d29e1%3A0x1234567890!2sS%C3%BCdhang+1%2C+88145+Hergatz!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Travel tips – 4 cards in 2x2 */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-foreground text-center mb-10">Anfahrt-Tipps</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tips.map((tip) => (
                <div key={tip.title} className="bg-card rounded-xl p-7 text-center border border-border/50 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center mx-auto mb-4">
                    <tip.icon className="w-6 h-6 text-bronze" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{tip.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tip.text}</p>
                  {tip.hasButton && (
                    <a
                      href="#google-maps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 bg-accent text-accent-foreground px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      In Google Maps öffnen
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
