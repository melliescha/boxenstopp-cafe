import Layout from "@/components/Layout";
import { Droplets, Building2, GraduationCap, Handshake, Leaf, Zap, ShieldCheck, Globe, Award, FlaskConical, Dumbbell } from "lucide-react";
import flammkuchenPartner from "@/assets/flammkuchen-partner.png";
import herbalifelogo from "@/assets/herbalife-logo.png";
import herbalifePartner from "@/assets/herbalife-partner.jpg";
import perplexLogo from "@/assets/perplex-logo.jpg";
import cupcinoLogo from "@/assets/cupcino-logo.jpg";

const Partners = () => {
  return (
    <Layout>
      {/* Hero / Intro */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-bronze font-medium tracking-[0.2em] uppercase text-sm mb-2">Zusammenarbeit</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Unsere Partner
          </h1>
          <div className="w-16 h-[2px] bg-bronze mx-auto mb-8" />
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-lg">
            Qualität hat bei uns oberste Priorität. Deshalb haben wir uns nicht einfach nur für gute Partner entschieden, sondern für Spitzenpartner mit jahrzehntelanger Erfahrung und einer führenden Position in Deutschland.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-lg mt-4">
            Jedes Produkt, das wir im Bistro Boxenstopp servieren, kommt von einem Partner, dem wir zu 100 % vertrauen. Hier stellen wir sie vor.
          </p>
        </div>
      </section>

      {/* PARTNER 1: Perplex */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Text left */}
            <div className="order-2 md:order-1">
              <img src={perplexLogo} alt="Perplex Logo" className="h-12 mb-6" loading="lazy" />
              <span className="inline-block bg-bronze/10 text-bronze text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
                Seit über 33 Jahren
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Perplex: Keine Kompromisse beim Geschmack
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Was als Idee begann, feinste Tiefkühlbackwaren für Profis zu schaffen, ist heute eine Marke, der Gastronomie, Hotellerie und Handel in ganz Deutschland vertrauen. Seit über 33 Jahren steht Perplex für Leidenschaft, Handwerk und kompromisslose Qualität.
                </p>
                <p>
                  Ihre Produzenten sind keine anonymen Fabriken, sondern Manufakturen mit Herz. Hier wird noch von Hand belegt, abgeschmeckt und verfeinert, und mit moderner Technik perfektioniert. Ob Flammkuchen, Baguette oder Snack: Jedes Produkt ist einfach in der Zubereitung und authentisch im Geschmack.
                </p>
                <p>
                  Für uns bedeutet das: Wenn du bei uns einen Flammkuchen oder ein Baguette bestellst, bekommst du ein Produkt, hinter dem über drei Jahrzehnte Erfahrung stehen.
                </p>
              </div>
            </div>
            {/* Image right */}
            <div className="order-1 md:order-2">
              <img
                src={flammkuchenPartner}
                alt="Vier verschiedene Flammkuchen auf Holzbrettern"
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Highlight Box */}
          <div className="mt-12 bg-card rounded-xl border border-bronze/20 p-8">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <p className="text-2xl mb-2">🤝</p>
                <p className="font-serif font-bold text-foreground mb-1">Handwerkliche Produktion</p>
                <p className="text-muted-foreground text-sm">Von Hand belegt und verfeinert</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl mb-2">🌿</p>
                <p className="font-serif font-bold text-foreground mb-1">Kontrollierte Zutaten</p>
                <p className="text-muted-foreground text-sm">Hochwertige Rohstoffe, klare Standards</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl mb-2">⚡</p>
                <p className="font-serif font-bold text-foreground mb-1">Einfache Zubereitung</p>
                <p className="text-muted-foreground text-sm">Schnell servierbar, dauerhaft stabil, geschmacklich auf den Punkt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="h-[1px] bg-bronze/20" />
      </div>

      {/* PARTNER 2: Cup&Cino */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Image left */}
            <div>
              <div className="aspect-[4/3] rounded-2xl bg-secondary/60 flex items-center justify-center shadow-lg">
                <span className="text-muted-foreground text-sm">Nahaufnahme Latte Art, dampfende Tasse</span>
              </div>
            </div>
            {/* Text right */}
            <div>
              <img src={cupcinoLogo} alt="Cup&Cino Logo" className="h-12 mb-6 rounded" loading="lazy" />
              <span className="inline-block bg-bronze/10 text-bronze text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
                Kaffeesystem der Spitzenklasse
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Cup&Cino: Kaffeegenuss auf Spitzenniveau
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hinter jeder Tasse Kaffee bei uns steckt Cup&Cino: hochwertige Kaffeebohnen, perfekt abgestimmt auf ein Kaffeesystem der neuesten Generation. Modernste Technik, präzise Einstellungen und ausgewählte Bohnen, so entsteht bei uns jeder Espresso, jeder Cappuccino und jeder Latte Macchiato.
                </p>
                <p>
                  Das Ergebnis schmeckst du mit dem ersten Schluck: vollmundig, aromatisch und auf Barista-Niveau. Bei uns bekommst du keinen Kaffee aus der Kanne, sondern Kaffeegenuss, wie du ihn aus den besten Cafés kennst, mitten im Allgäu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER 3: Cup&Cino Foundation — Navy highlight */}
      <section className="py-16 md:py-24" style={{ background: "linear-gradient(135deg, #164472, #1d5a8a)" }}>
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-[#b8943e] font-medium tracking-[0.2em] uppercase text-sm mb-2">☕ Cup&Cino Foundation</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8" style={{ color: "#fef4ec" }}>
            Mit jedem Kaffee die Welt ein Stück besser machen
          </h2>

          <p className="text-xl md:text-2xl font-serif leading-relaxed mb-10" style={{ color: "#b8943e" }}>
            Mit jeder Tasse Kaffee, die du bei uns trinkst, spendet das Bistro Boxenstopp 1 Cent an die Cup&Cino Foundation.
          </p>

          <div className="max-w-2xl mx-auto text-left space-y-4 mb-12" style={{ color: "#fef4ec" }}>
            <p className="leading-relaxed opacity-90">
              Gesundheit, Bildung, Selbstbestimmung: all das beginnt mit dem Zugang zu sauberem Trinkwasser. Was für uns selbstverständlich ist, bleibt in vielen Teilen der Welt unerreichbar.
            </p>
            <p className="leading-relaxed opacity-90">
              Die Cup&Cino Foundation setzt genau hier an: In Kaffeeanbauländern wie Äthiopien, Kenia und Tansania schaffen sie Zugang zu sauberem Wasser, Sanitäranlagen und Hygiene, für eine gesündere Zukunft, mehr Bildungschancen und ein selbstbestimmtes Leben.
            </p>
          </div>

          {/* 100% Versprechen Box */}
          <div className="max-w-xl mx-auto rounded-xl p-8 mb-12" style={{ border: "2px solid #b8943e", backgroundColor: "rgba(184, 148, 62, 0.08)" }}>
            <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "#b8943e" }}>
              Das 100%-Versprechen
            </h3>
            <p className="leading-relaxed" style={{ color: "#fef4ec" }}>
              Jeder gespendete Cent fließt zu 100 % direkt in die Projekte. Alle Kosten für Verwaltung und Organisation übernimmt Cup&Cino selbst. So kommt deine Unterstützung genau dort an, wo sie am nötigsten ist.
            </p>
          </div>

          {/* Three icons */}
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            <div className="flex flex-col items-center gap-2">
              <Droplets className="w-8 h-8" style={{ color: "#b8943e" }} />
              <span className="text-sm font-medium" style={{ color: "#b8943e" }}>Sauberes Wasser</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Building2 className="w-8 h-8" style={{ color: "#b8943e" }} />
              <span className="text-sm font-medium" style={{ color: "#b8943e" }}>Sanitäranlagen</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <GraduationCap className="w-8 h-8" style={{ color: "#b8943e" }} />
              <span className="text-sm font-medium" style={{ color: "#b8943e" }}>Bildungschancen</span>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER 4: Herbalife */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Text left */}
            <div className="order-2 md:order-1">
              <img src={herbalifelogo} alt="Herbalife Nutrition Logo" className="h-12 mb-6" loading="lazy" />
              <span className="inline-block bg-bronze/10 text-bronze text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
                Seit über 20 Jahren in der Familie
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Herbalife: Weil wir selbst daran glauben
              </h2>

              {/* Quote */}
              <blockquote className="border-l-4 border-bronze pl-5 mb-6">
                <p className="italic text-foreground leading-relaxed">
                  „Wir nutzen Herbalife-Produkte seit über 20 Jahren als ganze Familie. Was wir nicht selbst überzeugt empfehlen können, würden wir niemals unseren Gästen anbieten."
                </p>
                <cite className="text-bronze text-sm font-medium mt-2 block not-italic">Helena & Eugen Schall</cite>
              </blockquote>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Die Herbalife-Produkte in unserem Bistro sind keine Trend-Supplements, sondern wissenschaftlich fundierte Nahrungsergänzung. Mahlzeitenersatz-Shakes mit Vitaminen und Mineralien, natürliche Zutaten, kein künstlicher unangenehmer Geschmack.
                </p>
                <p>
                  Das Herzstück: der mehrfach ausgezeichnete Formula 1-Shake mit Sojaprotein und allen wichtigen Aminosäuren, dazu 25 essenzielle Mineralstoffe und Vitamine. Er unterstützt das Immunsystem, den Erhalt normaler Knochen und hilft gegen Müdigkeit, ideal vor oder nach dem Training, oder als gesunder Snack auf der Radtour.
                </p>
              </div>
            </div>
            {/* Image right */}
            <div className="order-1 md:order-2">
              <img
                src={herbalifePartner}
                alt="Herbalife Nutrition – Shakes und sportliche Atmosphäre"
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Seed to Feed Box */}
          <div className="mt-12 bg-card rounded-xl border border-bronze/20 p-8">
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">
              Seed to Feed: Qualität von der Saat bis zum Verzehr
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Herbalife kontrolliert die Qualität in 14 Stufen: vom Anbau der natürlichen Zutaten über die Produktion bis zur fertigen Verpackung. Alle Produktionsstätten erfüllen oder übertreffen die höchsten Industriestandards.
            </p>
            <div className="flex flex-wrap gap-3">
              {["ISO 17025 zertifiziert", "NSF geprüft", "Sportler-geeignet", "Weltweit gleiche Qualität"].map((badge) => (
                <span key={badge} className="bg-bronze/10 text-bronze text-xs font-semibold px-3 py-1.5 rounded-full">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Hint */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-background border border-bronze/15 rounded-xl p-6">
            <p className="text-muted-foreground text-sm flex-1">
              Eugen Schall ist zertifizierter Herbalife VIP-Berater. Du möchtest Herbalife-Produkte auch für zu Hause? Sprich uns einfach an!
            </p>
            <a href="/kontakt" className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
              Mehr erfahren
            </a>
          </div>
        </div>
      </section>

      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="h-[1px] bg-bronze/20" />
      </div>

      {/* PARTNER 5: FITES Allgäu */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="w-20 h-20 rounded-full border border-bronze/30 flex items-center justify-center mx-auto mb-6">
            <Dumbbell className="w-8 h-8 text-bronze" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            FITES Allgäu: Fitness nebenan
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Das Bistro Boxenstopp ist Teil von FITES Allgäu, Eugens Fitnessstudio direkt im selben Gebäude. Kleine Gruppen, persönliche Betreuung, Kurse wie HYROX, HIIT und Fitness-Boxen. Wer nach dem Kaffee Lust auf Bewegung bekommt, oder nach dem Training auf einen Shake, ist herzlich willkommen.
          </p>
          <a
            href="https://www.fites-allgaeu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Mehr über FITES Allgäu →
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
