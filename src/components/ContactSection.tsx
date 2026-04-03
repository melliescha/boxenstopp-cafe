import { Clock, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-warm-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">Besuche uns</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Kontakt & Öffnungszeiten</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-warm-gold" />
            </div>
            <h3 className="font-serif text-lg font-semibold mb-2">Adresse</h3>
            <p className="text-primary-foreground/70 text-sm">
              Musterstraße 12<br />
              12345 Musterstadt
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-warm-gold" />
            </div>
            <h3 className="font-serif text-lg font-semibold mb-2">Öffnungszeiten</h3>
            <p className="text-primary-foreground/70 text-sm">
              Mo – Fr: 7:30 – 18:00<br />
              Sa: 9:00 – 17:00<br />
              So: 10:00 – 16:00
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-warm-gold" />
            </div>
            <h3 className="font-serif text-lg font-semibold mb-2">Kontakt</h3>
            <p className="text-primary-foreground/70 text-sm">
              Tel: 01234 / 567 890<br />
              info@boxenstopp-cafe.de
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
