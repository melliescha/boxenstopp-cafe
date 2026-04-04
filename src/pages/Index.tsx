import { Link } from "react-router-dom";
import { Map, Thermometer, ShowerHead, BatteryCharging, Sun, Users, Bike, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { ReviewCarousel, ReviewSummaryBadges, ReviewCTA } from "@/components/ReviewSection";
import BestsellerSection from "@/components/BestsellerSection";
import heroBg from "@/assets/hero-bistro.jpg";
import heroLogoSchriftzug from "@/assets/hero-logo-schriftzug.png";


const highlights = [
  {
    icon: Map,
    title: "Geheimtipp am Radweg",
    text: "Direkt an der Leiblachroute & Bodensee-Königssee-Radweg. Wer uns findet, kommt wieder.",
  },
  {
    icon: Thermometer,
    title: "Kühle Terrasse",
    text: "Selbst bei 30°C genießt du bei uns angenehme 25°C im Schatten: die perfekte Erfrischung.",
  },
  {
    icon: ShowerHead,
    title: "Duschen vorhanden",
    text: "Als Radfahrer oder nach dem Training: Frisch machen und dann entspannt genießen",
  },
  {
    icon: BatteryCharging,
    title: "E-Bike Ladestation",
    text: "Lade dein E-Bike kostenlos auf, während du bei uns entspannst",
  },
];

const whyUs = [
  {
    icon: Sun,
    title: "Versteckt & besonders",
    text: "Kein Straßenlärm, keine Hektik. Bei uns genießt du in aller Ruhe, umgeben von Allgäuer Natur.",
  },
  {
    icon: Users,
    title: "Familiär & persönlich",
    text: "Helena und Eugen begrüßen dich persönlich. Bei uns bist du Gast, nicht Kunde.",
  },
  {
    icon: Bike,
    title: "Perfekt für Radfahrer",
    text: "Terrasse, Duschen, E-Bike-Ladestation und alles was du brauchst, um wieder aufzutanken.",
  },
];

const hours = [
  { days: "Mo – Fr", time: "15:00 – 20:00 Uhr" },
  { days: "Samstag", time: "10:30 – 15:30 Uhr" },
  { days: "Sonntag", time: "11:00 – 16:00 Uhr" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      {/* Hero */}
      <section className="relative overflow-hidden h-[50vh]">
        <div className="relative h-full">
          <img
            src={heroBg}
            alt="Bistro Boxenstopp, gemütliches Café-Interieur mit Kaffee und Gebäck"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex items-center justify-center px-6 z-10">
            <img
              src={heroLogoSchriftzug}
              alt="Bistro Boxenstopp"
              className="w-[90%] max-w-[700px] animate-fade-in-up"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>
      </section>

      {/* Slogan + CTA */}
      <section className="text-center" style={{ backgroundColor: "#fef4ec", paddingTop: "16px", paddingBottom: "20px" }}>
        <p className="font-serif" style={{ color: "#164472", fontSize: "28px", fontWeight: 500 }}>
          Hergatz' bestgehütetes Geheimnis
        </p>
        <div style={{ marginTop: "8px" }}>
          <Link
            to="/speisekarte"
            className="inline-block rounded-lg font-medium text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#b8943e", padding: "10px 24px", fontSize: "14px" }}
          >
            Speisekarte ansehen
          </Link>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="divider-bronze mb-4" />
          <p className="text-lg leading-relaxed text-muted-foreground mb-4">
            Zugegeben: Man muss uns erstmal finden. Das Bistro Boxenstopp liegt versteckt in einer
            ruhigen Wohnsiedlung in Hergatz-Wohmbrechts, aber genau das macht uns aus.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Wer den Weg zu uns findet, wird belohnt: mit richtig gutem Kaffee, frischen Flammkuchen,
            einer im Sommer angenehm kühlen Terrasse und echter Allgäuer Gastfreundschaft.
            Von Helena und Eugen, für alle.
          </p>
          <div className="divider-bronze mt-4" />
        </div>
      </section>

      {/* Bestseller */}
      <BestsellerSection />

      {/* Highlights – 2x2 grid */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {highlights.map((h) => (
              <div key={h.title} className="bg-card rounded-xl p-8 text-center shadow-sm border border-border/50">
                <div className="w-14 h-14 rounded-full bg-bronze/10 flex items-center justify-center mx-auto mb-5">
                  <h.icon className="w-7 h-7 text-bronze" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{h.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Ein Bistro, das man nicht erwartet, und nicht mehr vergisst
          </h2>
          <div className="space-y-8">
            {whyUs.map((item) => (
              <div key={item.title} className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-warm-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-primary-foreground/80 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-bronze/10 flex items-center justify-center mx-auto mb-5">
              <Clock className="w-7 h-7 text-bronze" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Öffnungszeiten</h2>
            <div className="space-y-4">
              {hours.map((h) => (
                <div key={h.days} className="flex justify-between items-center text-base">
                  <span className="font-medium text-foreground">{h.days}</span>
                  <span className="text-muted-foreground">{h.time}</span>
                </div>
              ))}
            </div>
            <div className="divider-bronze mt-8" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-bronze font-medium tracking-[0.2em] uppercase text-sm mb-2">Stimmen unserer Gäste</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Das sagen unsere Gäste</h2>
            <div className="divider-bronze mb-6" />
            <ReviewSummaryBadges />
          </div>
          <div className="mt-10">
            <ReviewCarousel />
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <ReviewCTA />
    </Layout>
  );
};

export default Index;
