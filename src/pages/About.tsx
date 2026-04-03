import Layout from "@/components/Layout";
import bistroTerrace from "@/assets/bistro-terrace.jpg";
import founderImg from "@/assets/founder-eugen.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero image */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={bistroTerrace}
          alt="Bistro Boxenstopp Terrasse mit Blick auf die Allgäuer Landschaft"
          className="w-full h-full object-cover"
          width={1024}
          height={1024}
        />
        <div className="absolute inset-0 bg-primary/30" />
      </div>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-bronze font-medium tracking-[0.2em] uppercase text-sm mb-2">Willkommen</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Dein Boxenstopp beim Eugen
            </h1>
            <div className="divider-bronze" />
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              Was als Fitnessstudio begann, wurde schnell zu etwas Größerem. Als Eugen Schall
              2023 FITES Allgäu eröffnete, war klar: Zum Wohlfühlen gehört mehr als nur Training.
              So entstand das Bistro Boxenstopp — ein Ort zum Auftanken, Durchatmen und Genießen.
            </p>
            <p>
              Unser Bistro liegt im wunderschönen Wohmbrechts bei Hergatz, in ruhiger Lage und
              trotzdem perfekt an der Leiblachroute und dem Bodensee-Königssee-Radweg. Ob Radfahrer,
              Spaziergänger, Studiomitglieder oder Nachbarn — bei uns ist jeder willkommen.
            </p>
            <p>
              Wir legen Wert auf Qualität statt Masse: Ausgewählte Kaffeespezialitäten von Cup&Cino,
              frische Flammkuchen von unserem Partner Perplex, und hochwertige Herbalife-Ernährungsprodukte.
              Alles in einer Atmosphäre, die sich anfühlt wie bei Freunden zu Gast.
            </p>
          </div>

          {/* Founder */}
          <div className="mt-20 text-center">
            <div className="divider-bronze mb-12" />
            <div className="w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-bronze/30">
              <img
                src={founderImg}
                alt="Eugen Schall — Gründer und Gastgeber des Bistro Boxenstopp"
                loading="lazy"
                width={512}
                height={512}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-1">Eugen Schall</h2>
            <p className="text-bronze font-medium text-sm mb-4">Gründer & Gastgeber</p>
            <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
              Eugen ist zertifizierter Fitness-Trainer mit über 10 Jahren Erfahrung und das Herz
              hinter FITES Allgäu und dem Bistro Boxenstopp. Seine Vision: Ein Ort, an dem Fitness
              und Genuss zusammenkommen.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
