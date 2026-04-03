import { Coffee, ChefHat, Dumbbell, HeartHandshake } from "lucide-react";
import Layout from "@/components/Layout";

const partners = [
  {
    icon: Coffee,
    name: "Cup&Cino",
    text: "Unsere Kaffeespezialitäten kommen von Cup&Cino, einem Unternehmen, das für erstklassige Bohnen und innovative Kaffeekonzepte steht. Von Espresso bis Matcha Latte: Jede Tasse wird frisch mit dem Cup&Cino-System zubereitet.",
    highlight: "☕ Cup&Cino Foundation: Mit jedem Kaffee, den du bei uns trinkst, geht 1 Cent an die Cup&Cino Foundation. So unterstützt du mit deinem Boxenstopp soziale Projekte weltweit.",
  },
  {
    icon: ChefHat,
    name: "Perplex",
    text: "Unsere Gourmet-Flammkuchen kommen von Perplex — frisch, hochwertig und mit Liebe zum Detail. Wechselnde Sorten sorgen dafür, dass es nie langweilig wird.",
  },
  {
    icon: Dumbbell,
    name: "Herbalife Nutrition",
    text: "Als Herbalife-Partner bieten wir hochwertige Nährshakes, Protein-Riegel und Mineralgetränke an. Perfekt als Ergänzung zum Training oder als gesunder Snack auf der Radtour.",
  },
  {
    icon: HeartHandshake,
    name: "FITES Allgäu",
    text: "Das Bistro Boxenstopp ist Teil von FITES Allgäu — dem Fitnessstudio direkt nebenan. Wer nach dem Kaffee Lust auf Bewegung bekommt, ist herzlich willkommen.",
    link: { href: "https://www.fites-allgaeu.com", label: "Mehr über FITES" },
  },
];

const Partners = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-bronze font-medium tracking-[0.2em] uppercase text-sm mb-2">Zusammenarbeit</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Unsere Partner
            </h1>
            <div className="divider-bronze mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Wir arbeiten mit ausgewählten Partnern zusammen, die unsere Werte teilen:
              Qualität, Regionalität und Verantwortung.
            </p>
          </div>

          <div className="space-y-8">
            {partners.map((p) => (
              <div
                key={p.name}
                className="bg-card rounded-xl p-8 md:p-10 border border-bronze/20 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-bronze/10 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-7 h-7 text-bronze" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">{p.name}</h2>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">{p.text}</p>

                {p.highlight && (
                  <div className="bg-warm-gold/10 border border-warm-gold/30 rounded-lg p-4 text-sm text-foreground leading-relaxed">
                    {p.highlight}
                  </div>
                )}

                {p.link && (
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    {p.link.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
