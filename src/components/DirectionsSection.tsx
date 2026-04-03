import { MapPin, Bike } from "lucide-react";

const DirectionsSection = () => {
  return (
    <section id="directions" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-2">So findest du uns</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Anfahrt</h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Adresse</h3>
                <p className="text-muted-foreground text-sm">
                  Südhang 1<br />
                  88145 Hergatz (Ortsteil Wohmbrechts)<br />
                  Westallgäu, Deutschland
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Bike className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Radweg-Anbindung</h3>
                <p className="text-muted-foreground text-sm">
                  Direkt an der <strong className="text-foreground">Leiblachroute</strong> und dem{" "}
                  <strong className="text-foreground">Bodensee-Königssee-Radweg</strong>.
                  Perfekt für eine Pause auf deiner Tour!
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg min-h-[300px]">
            <iframe
              title="Bistro Boxenstopp Standort auf Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2671.5!2d9.825!3d47.585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479c05e14a5d29e1%3A0x1234567890!2sS%C3%BCdhang+1%2C+88145+Hergatz!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectionsSection;
