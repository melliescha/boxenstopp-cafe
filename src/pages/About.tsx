import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
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
    alt: "Helena Schall, Gastgeberin des Bistro Boxenstopp",
    objectPosition: "center 20%",
    text: "Helena sorgt dafür, dass sich jeder Gast wie zu Hause fühlt. Sie kümmert sich um alles, was das Bistro ausmacht: vom frischen Kaffee bis zum warmen Empfang.",
  },
  {
    name: "Eugen Schall",
    role: "Gründer, Trainer & Gastgeber",
    image: founderEugen,
    alt: "Eugen Schall, Gründer und Gastgeber des Bistro Boxenstopp",
    objectPosition: "center 20%",
    text: "Eugen ist zertifizierter Fitness-Trainer mit über 10 Jahren Erfahrung und das Herz hinter FITES Allgäu. Seine Vision: Fitness und Genuss unter einem Dach, in einer Atmosphäre, die sich anfühlt wie bei Freunden.",
  },
];

const About = () => {
  useEffect(() => {
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Eugen Schall",
      "jobTitle": "Trainer, Ernährungsberater, Personaltrainer",
      "worksFor": {
        "@type": "Organization",
        "name": "FITES Allgäu & Bistro Boxenstopp",
      },
      "description": "Über 30 Jahre Erfahrung als Trainer und Ernährungsberater. Inhaber des FITES Allgäu Fitnessstudios und Mitgründer des Bistro Boxenstopp in Hergatz.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hergatz",
        "addressRegion": "Bayern",
        "postalCode": "88145",
        "addressCountry": "DE",
      },
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "person-schema-eugen";
    script.textContent = JSON.stringify(personSchema);
    document.head.appendChild(script);
    return () => {
      const existing = document.head.querySelector('script[id="person-schema-eugen"]');
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  return (
    <Layout>
      <SEO title="Über uns | Eugen, Helena & Melanie Schall vom Bistro Boxenstopp Hergatz" description="Hinter dem Bistro Boxenstopp im Westallgäu steht die Familie Schall: bodenständig, ehrlich, mit Leidenschaft für gute Küche und Gemeinschaft. Lernt uns kennen." path="/ueber-uns" />
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={aboutHero}
          alt="Familie Schall vor Allgäuer Bergpanorama"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 25%' }}
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[15%] text-center px-6 w-full">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            Eine Familie, ein Traum, unsere Wahlheimat Allgäu
          </h1>
          <p className="text-white/85 text-lg md:text-xl max-w-xl mx-auto">
            Die Geschichte hinter dem Bistro Boxenstopp
          </p>
        </div>
      </section>

      {/* Logo divider */}
      <div className="py-8 flex justify-center bg-background">
        <img src={logoIcon} alt="Bistro Boxenstopp" className="h-16 md:h-20 w-auto opacity-80" />
      </div>

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
                  Wir sind Helena und Eugen, eigentlich vom Bodensee. Eugen arbeitet bereits seit 15 Jahren in Hergensweiler, und so haben wir die Region nach und nach kennengelernt. Wir verbrachten immer mehr Zeit im Allgäu, auf Wanderungen, in den Thermen, auf Fahrradtouren. Und nach und nach haben wir uns verliebt. Vor allem in das Städtchen Wangen.
                </p>
                <p>
                  Es war für uns nicht nur die Natur, es waren vor allem die herzlichen Menschen und die Idylle, die das Allgäu so besonders machen. Irgendwann stand fest: Hier möchten wir hinziehen, Wurzeln schlagen und uns den Traum vom Eigenheim und der Selbstständigkeit erfüllen.
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
                  Wir träumten nicht nur von einem Zuhause mit Garten und Ruhe für unsere Kinder, sondern auch von einem Ort für die Gemeinschaft.
                </p>
                <p>
                  Unsere Tochter Melanie und Eugen sind die Foodies und Hobbyköche in der Familie und träumten schon immer von einer eigenen Gastronomie. Und was unsere ganze Familie immer verbunden hat, war der gemeinsame Sport, von Thaiboxen über Fußball bis hin zu Wanderungen haben wir alles zusammen als Familie gemacht.
                </p>
                <p>
                  Genau so einen Ort wollten wir auch für andere schaffen: einen Ort der Bewegung und einen Ort der Gemeinschaft. So wurde die Idee geboren, Eugen eröffnet als Personal Trainer sein eigenes Studio, und Helena leitet das Bistro. Für die Gemeinschaft.
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
                  Der Name ist Programm. Du machst bei uns einen Boxenstopp, egal ob du gerade eine Pause bei deiner Fahrradtour brauchst, auf einer Wanderung bist, auf dem Weg nach Hause von der Arbeit nochmal innehalten willst, oder einfach einen Boxenstopp vom Alltag brauchst.
                </p>
                <p className="font-serif italic text-lg md:text-xl text-center" style={{ color: '#9e7c4e' }}>
                  Der Boxenstopp ist die Pause, die du dir verdient hast.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={aboutTerrace}
                alt="Terrasse des Bistro Boxenstopp mit Radfahrern"
                loading="lazy"
                className="rounded-xl shadow-md w-full h-64 md:h-80 object-cover"
                style={{ objectPosition: 'center 30%' }}
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
                <div className="w-36 h-36 rounded-full mx-auto mb-6 overflow-hidden" style={{ border: '3px solid #9e7c4e' }}>
                  <img
                    src={f.image}
                    alt={f.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: f.objectPosition || 'center center' }}
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
            Komm wie du bist, ob in Radlerhose, Trainingskleidung oder Sonntagsoutfit.
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
