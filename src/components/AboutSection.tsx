import foodSpread from "@/assets/food-spread.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={foodSpread}
              alt="Frische Speisen im Boxenstopp"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-2">Unsere Geschichte</p>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Über den Boxenstopp</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Der Boxenstopp ist mehr als nur ein Café – er ist dein persönlicher Zwischenstopp im hektischen Alltag. 
              Bei uns findest du handgebrühten Kaffee, frisch zubereitete Speisen und eine Atmosphäre, 
              die zum Verweilen einlädt.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Unser Name ist Programm: Wie beim Motorsport tankst du hier neue Energie auf, 
              bevor es weitergeht. Mit Liebe zum Detail und besten Zutaten aus der Region 
              machen wir jeden Besuch zu einem besonderen Erlebnis.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="font-serif text-3xl font-bold text-accent">100%</p>
                <p className="text-sm text-muted-foreground">Frisch zubereitet</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-accent">Regional</p>
                <p className="text-sm text-muted-foreground">Zutaten</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
