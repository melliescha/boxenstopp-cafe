import bistroTerrace from "@/assets/bistro-terrace.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={bistroTerrace}
              alt="Bistro Boxenstopp Terrasse mit Radfahrern und Allgäu-Panorama"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-2">Willkommen</p>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Über uns</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Das Bistro Boxenstopp liegt in ruhiger Lage am Südhang in Hergatz-Wohmbrechts im Westallgäu –
              direkt an der Leiblachroute und dem Bodensee-Königssee-Radweg. Ideal zum Auftanken –
              für Körper und E-Bike.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wir gehören zum Fitnessstudio FITES Allgäu, liegen aber direkt am Eingang und sind
              offen für alle – nicht nur für Studiomitglieder. Im Sommer genießt du eine kühle
              Terrasse, im Winter ist es drinnen gemütlich und warm.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ob frischer Kaffee, leckere Flammkuchen oder ein Herbalife-Shake nach dem Training –
              bei uns findest du deinen perfekten Boxenstopp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
