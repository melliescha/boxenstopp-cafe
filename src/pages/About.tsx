import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import logoIcon from "@/assets/logo-icon.png";
import aboutHero from "@/assets/about-hero-family.jpg";
import aboutBodensee from "@/assets/about-bodensee.jpg";
import aboutCafe from "@/assets/about-cafe-interior.jpg";
import aboutTerrace from "@/assets/about-terrace-cyclists.jpg";
import founderHelena from "@/assets/founder-helena.jpg";
import founderEugen from "@/assets/founder-eugen.jpg";

const founders = [
  {
    name: "Helena Schall",
    role: "Gastgeberin & gute Seele",
    image: founderHelena,
    alt: "Helena Schall — Gastgeberin des Bistro Boxenstopp",
    text: "Helena sorgt dafür, dass sich jeder Gast wie zu Hause fühlt. Sie kümmert sich um alles, was das Bistro ausmacht — vom frischen Kaffee bis zum warmen Empfang.",
  },
  {
    name: "Eugen Schall",
    role: "Gründer, Trainer & Gastgeber",
    image: founderEugen,
    alt: "Eugen Schall — Gründer und Gastgeber des Bistro Boxenstopp",
    text: "Eugen ist zertifizierter Fitness-Trainer mit über 10 Jahren Erfahrung und das Herz hinter FITES Allgäu. Seine Vision: Fitness und Genuss unter einem Dach — in einer Atmosphäre, die sich anfühlt wie bei Freunden.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-72 md:h-[28rem] overflow-hidden">
        <img
          src={aboutHero}
          alt="Gemütliche Atmosphäre im Bistro Boxenstopp"
          className="w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-primary/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Zwei Bodensee-Kinder, ein Allgäuer Traum
          </h1>
          <p className="text-primary-foreground/85 text-lg md:text-xl max-w-xl">
            Die Geschichte hinter dem Bistro Boxenstopp
          </p>
        </div>
      </section>

      {/* Story blocks */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-5xl space-y-20">

          {/* Block 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Wie alles begann
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Wir sind Helena und Eugen Schall — und das Bistro Boxenstopp ist unser Herzensprojekt.
                </p>
                <p>
                  Angefangen hat alles 2019, als wir noch in Überlingen am Bodensee lebten. Über Friedrichshafen
                  hat es uns immer weiter Richtung Berge gezogen. Bei einem Wanderausflug ins Allgäu haben wir
                  zum ersten Mal die Stadt Wangen besucht — und uns sofort heimisch gefühlt.
                </p>
                <p>
                  Die Idylle, die freundlichen Menschen, die Natur — das war es. Hier wollten wir leben,
                  Wurzeln schlagen und unseren Traum verwirklichen.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={aboutBodensee}
                alt="Bodensee-Panorama und Allgäuer Landschaft"
                loading="lazy"
                className="rounded-xl shadow-md w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>

          {/* Block 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src={aboutCafe}
                alt="Gemütliches Café-Interieur"
                loading="lazy"
                className="rounded-xl shadow-md w-full h-64 md:h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Der Traum
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Unser Traum war immer: ein eigenes Zuhause, Selbstständigkeit und ein Ort, an dem sich
                  Menschen wohlfühlen. In Hergatz-Wohmbrechts haben wir genau das gefunden.
                </p>
                <p>
                  So entstand zuerst FITES Allgäu — Eugens Fitnessstudio mit kleinen Gruppen und persönlicher
                  Betreuung. Und weil zum Wohlfühlen mehr gehört als nur Training, kam das Bistro Boxenstopp
                  dazu: ein Ort zum Auftanken, Durchatmen und Genießen. Für alle — nicht nur für Sportler.
                </p>
              </div>
            </div>
          </div>

          {/* Block 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Warum "Boxenstopp"?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Der Name ist Programm: Bei uns machst du einen kurzen Boxenstopp — ob auf der Radtour,
                  nach dem Training oder einfach, weil du Lust auf guten Kaffee hast.
                </p>
                <p>
                  Wir liegen direkt an der Leiblachroute und am Bodensee-Königssee-Radweg. Ja, man muss uns
                  erstmal finden — aber genau das macht uns besonders. Wer einmal da war, kommt wieder. Versprochen.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={aboutTerrace}
                alt="Terrasse des Bistro Boxenstopp mit Radfahrern"
                loading="lazy"
                className="rounded-xl shadow-md w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-14">
            <p className="text-bronze font-medium tracking-[0.2em] uppercase text-sm mb-2">Das Team</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Die Menschen hinter dem Boxenstopp
            </h2>
            <div className="divider-bronze" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((f) => (
              <div
                key={f.name}
                className="bg-card rounded-xl p-8 text-center border border-bronze/20 shadow-sm"
              >
                <div className="w-36 h-36 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-bronze/30">
                  <img
                    src={f.image}
                    alt={f.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-1">{f.name}</h3>
                <p className="text-bronze font-medium text-sm mb-4">{f.role}</p>
                <p className="text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family vibe closing */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="divider-bronze mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-2">
            Bei uns gibt's keinen Dresscode, keine Reservierungspflicht und keine Formalitäten.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-2">
            Komm wie du bist — ob in Radlerhose, Trainingskleidung oder Sonntagsoutfit.
          </p>
          <p className="text-lg md:text-xl font-medium text-foreground mb-8">
            Wir freuen uns auf dich.
          </p>
          <Link
            to="/kontakt"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Komm vorbei → Anfahrt & Öffnungszeiten
          </Link>
          <div className="divider-bronze mt-8" />
        </div>
      </section>
    </Layout>
  );
};

export default About;
