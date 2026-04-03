import { Bike, BatteryCharging, Sun } from "lucide-react";

const features = [
  {
    icon: Bike,
    title: "Direkt am Radweg",
    description: "Wir liegen an der Leiblachroute und dem Bodensee-Königssee-Radweg.",
  },
  {
    icon: BatteryCharging,
    title: "E-Bike Ladestation",
    description: "Lade dein E-Bike kostenlos auf, während du bei uns entspannst.",
  },
  {
    icon: Sun,
    title: "Kühle Terrasse",
    description: "Im Sommer genießt du deine Pause im Schatten auf unserer Terrasse.",
  },
];

const CyclistSection = () => {
  return (
    <section id="cyclists" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-2">Für Radfahrer</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Dein Boxenstopp auf der Radtour</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="bg-card rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyclistSection;
