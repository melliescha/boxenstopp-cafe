import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Droplets, Building2, GraduationCap, Leaf, Zap, ShieldCheck, Globe, Award, FlaskConical, Dumbbell, Megaphone, BarChart3, PenTool, MonitorSmartphone } from "lucide-react";
import flammkuchenPartner from "@/assets/flammkuchen-partner.png";
import herbalifePartner from "@/assets/herbalife-partner.jpg";
import cupcinoPartnerImg from "@/assets/cupcino-partner.jpg";
import optivantaPartner from "@/assets/optivanta-partner.jpg";
import fitesStudioAsset from "@/assets/fites-studio.jpg.asset.json";
import fitesBoxingAsset from "@/assets/fites-boxing.jpg.asset.json";
import fitesHyroxAsset from "@/assets/fites-hyrox.jpg.asset.json";

const fitesImages = [
  { url: fitesStudioAsset.url, alt: "FITES Allgäu Studio mit Trainingsgeräten und Hantelbank" },
  { url: fitesHyroxAsset.url, alt: "HYROX Training Club im FITES Allgäu mit Boxsäcken und Geräten" },
  { url: fitesBoxingAsset.url, alt: "Fitness-Boxen Training im FITES Allgäu" },
];

const Partners = () => {
  const location = useLocation();
  const [fitesIndex, setFitesIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFitesIndex((i) => (i + 1) % fitesImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [location]);

  return (
    <Layout>
      <SEO title="Unsere Partner | Bistro Boxenstopp" description="Wir arbeiten mit FITES Allgäu, Cup&Cino, OPTIVANTA Agency, Herbalife Nutrition und Perplex zusammen." path="/partner" image="/og/partner.jpg" />
      {/* Hero / Intro */}
      <section className="pt-12 md:pt-20 pb-10 md:pb-14" style={{ backgroundColor: "#FEF4EC" }}>
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8" style={{ backgroundColor: "#C9A55C" }} />
            <p className="font-medium tracking-[0.25em] uppercase text-xs" style={{ color: "#9E7C4E" }}>Zusammenarbeit</p>
            <span className="h-px w-8" style={{ backgroundColor: "#C9A55C" }} />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
            Unsere Partner
          </h1>
          <p className="leading-relaxed text-lg" style={{ color: "#6B4A2E" }}>
            Qualität hat bei uns oberste Priorität. Deshalb haben wir uns nicht einfach nur für gute Partner entschieden, sondern für Spitzenpartner mit jahrzehntelanger Erfahrung und einer führenden Position in Deutschland.
          </p>
          <p className="leading-relaxed text-lg mt-3" style={{ color: "#6B4A2E" }}>
            Jedes Produkt, das wir im Bistro Boxenstopp servieren, kommt von einem Partner, dem wir zu 100 % vertrauen. Hier stellen wir sie vor.
          </p>
        </div>
      </section>

      {/* PARTNER 1: FITES Allgäu */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="group relative bg-card rounded-[2rem] overflow-hidden shadow-xl flex flex-col md:flex-row" style={{ border: "1px solid #EDE0D0" }}>
            {/* Image Carousel */}
            <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden" style={{ minHeight: "320px" }}>
              {fitesImages.map((img, idx) => (
                <img
                  key={img.url}
                  src={img.url}
                  alt={img.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${idx === fitesIndex ? "opacity-100" : "opacity-0"}`}
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              ))}
              {/* Icon Badge */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg z-10" style={{ border: "1px solid #EDE0D0" }}>
                <Dumbbell className="w-6 h-6" style={{ color: "#9E7C4E" }} aria-hidden="true" />
              </div>
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {fitesImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setFitesIndex(idx)}
                    aria-label={`Bild ${idx + 1} anzeigen`}
                    className={`h-2.5 rounded-full transition-all ${idx === fitesIndex ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"}`}
                  />
                ))}
              </div>
            </div>
            {/* Content */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="space-y-1 mb-5">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">FITES Allgäu</h2>
                <p className="font-medium text-lg" style={{ color: "#9E7C4E" }}>Fitness nebenan</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-7">
                Das Bistro Boxenstopp ist Teil von FITES Allgäu, Eugens Fitnessstudio direkt im selben Gebäude. Kleine Gruppen, persönliche Betreuung, Kurse wie HYROX, HIIT und Fitness-Boxen. Wer nach dem Kaffee Lust auf Bewegung bekommt, oder nach dem Training auf einen Shake, ist herzlich willkommen.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-7">
                <strong className="text-foreground">Wellpass-Partner:</strong> FITES Allgäu ist an Wellpass (ehemals Qualitrain) angeschlossen. Mitglieder trainieren mit ihrer Wellpass-Mitgliedschaft flexibel bei uns, ganz ohne Zusatzkosten.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/fites-allgaeu"
                  className="px-7 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "#164472" }}
                >
                  Mehr über FITES Allgäu
                </Link>
                <a
                  href="https://www.fites-allgaeu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 rounded-xl font-semibold transition-all hover:opacity-80"
                  style={{ backgroundColor: "#FEF4EC", color: "#9E7C4E", border: "1px solid #EDE0D0" }}
                >
                  Zum Studio →
                </a>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="pointer-events-none absolute -bottom-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-40" style={{ backgroundColor: "#FEF4EC" }} />
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
              <img
                src={cupcinoPartnerImg}
                alt="Cup&Cino Kaffeegenuss"
                className="w-full aspect-[4/3] object-cover object-center rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
            {/* Text right */}
            <div>
              <p className="font-serif text-2xl font-bold text-foreground mb-6">Cup&amp;Cino</p>
              <span className="inline-block bg-bronze/10 text-bronze text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
                Kaffeesystem der Spitzenklasse
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Cup&Cino: Kaffeegenuss auf Spitzenniveau
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hinter jeder Tasse Kaffee bei uns steckt Cup&Cino: hochwertige Kaffeebohnen, perfekt abgestimmt auf ein Kaffeesystem der neuesten Generation. Modernste Technik, präzise Einstellungen und ausgewählte Bohnen – so entsteht bei uns jeder Espresso, jeder Cappuccino und jeder Latte Macchiato.
                </p>
                <p>
                  Das Ergebnis schmeckst du mit dem ersten Schluck: vollmundig, aromatisch und auf Barista-Niveau. Bei uns bekommst du keinen Kaffee aus der Kanne, sondern Kaffeegenuss, wie du ihn aus den besten Cafés kennst – mitten im Allgäu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER: Cup&Cino Foundation, Navy highlight */}
      <section id="foundation" className="py-16 md:py-24" style={{ background: "linear-gradient(135deg, #164472, #1d5a8a)" }}>
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

      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="h-[1px] bg-bronze/20" />
      </div>

      {/* PARTNER 3: OPTIVANTA Agency */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Text left */}
            <div className="order-2 md:order-1">
              <a href="https://optivantaagency.com/" target="_blank" rel="noopener noreferrer" className="font-serif text-2xl font-bold text-foreground mb-6 inline-block hover:text-bronze transition-colors">OPTIVANTA Agency</a>
              <span className="inline-block bg-bronze/10 text-bronze text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
                Digitalagentur · Web & Marketing
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                OPTIVANTA Agency: Unsere Website, unsere Reichweite
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Diese Website, die Meta-Ads, das Google-Setup und das Marketing drumherum stammen nicht von einer anonymen Großagentur, sondern von <strong className="text-foreground">OPTIVANTA</strong> – einer Marketing-Agentur, die international und remote mit echten Experten arbeitet und auch mit kleinem Budget maximale Ergebnisse erzielt.
                </p>
                <p>
                  OPTIVANTA begleitet uns von der Gestaltung der Website über das Setup von Meta und Google bis hin zu Monitoring und Marketing-Tipps. Was uns verbindet: ehrliche Beratung, saubere Umsetzung und nachhaltige Ergebnisse, ohne Budget zu verbrennen.
                </p>
                <blockquote className="border-l-4 pl-4 italic text-sm" style={{ borderColor: "#9E7C4E" }}>
                  „Niemand sollte im Jahr 2026 noch 5.000 Euro für eine Website zahlen." – <strong className="text-foreground not-italic">OPTIVANTA</strong>
                </blockquote>
              </div>
            </div>
            {/* Image right */}
            <div className="order-1 md:order-2">
              <img
                src={optivantaPartner}
                alt="OPTIVANTA Agency – Webdesign und Marketing Workspace"
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Services Box */}
          <div className="mt-12 bg-card rounded-xl border border-bronze/20 p-8">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">
              Was OPTIVANTA für uns macht
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#FEF4EC" }}>
                  <PenTool className="w-5 h-5" style={{ color: "#9E7C4E" }} aria-hidden="true" />
                </div>
                <p className="font-serif font-bold text-foreground">Website-Gestaltung</p>
                <p className="text-muted-foreground text-sm">Design & Aufbau dieser Seite, von der ersten Skizze bis zum Klick.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#FEF4EC" }}>
                  <Megaphone className="w-5 h-5" style={{ color: "#9E7C4E" }} aria-hidden="true" />
                </div>
                <p className="font-serif font-bold text-foreground">Meta- & Google-Setup</p>
                <p className="text-muted-foreground text-sm">Ads und Sichtbarkeit bei Meta und Google – sauber eingerichtet und gepflegt.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#FEF4EC" }}>
                  <BarChart3 className="w-5 h-5" style={{ color: "#9E7C4E" }} aria-hidden="true" />
                </div>
                <p className="font-serif font-bold text-foreground">Monitoring & Tipps</p>
                <p className="text-muted-foreground text-sm">Klare Zahlen, ehrliche Auswertung und Marketing-Tipps, die wirklich weiterhelfen.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#FEF4EC" }}>
                  <MonitorSmartphone className="w-5 h-5" style={{ color: "#9E7C4E" }} aria-hidden="true" />
                </div>
                <p className="font-serif font-bold text-foreground">Schritt für Schritt</p>
                <p className="text-muted-foreground text-sm">Etappe für Etappe umgesetzt, auch mit kleinem Budget zu echten Ergebnissen.</p>
              </div>
            </div>
          </div>

          {/* Hint */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-background border border-bronze/15 rounded-xl p-6">
            <p className="text-muted-foreground text-sm flex-1">
              Du suchst jemanden, der deine Website, dein Marketing oder deine Social Ads aufbaut, ohne Budget zu verbrennen? Frag uns nach OPTIVANTA.
            </p>
            <a href="https://optivantaagency.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
              Mehr erfahren
            </a>
          </div>
        </div>
      </section>

      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="h-[1px] bg-bronze/20" />
      </div>

      {/* PARTNER 4: Herbalife */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Text left */}
            <div className="order-2 md:order-1">
              <p className="font-serif text-2xl font-bold text-foreground mb-6">Herbalife Nutrition</p>
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
                  Die Herbalife-Produkte in unserem Bistro sind keine Trend-Supplements, sondern wissenschaftlich fundierte Nahrungsergänzung: Mahlzeitenersatz-Shakes mit Vitaminen und Mineralien, natürliche Zutaten, ohne künstlichen oder unangenehmen Geschmack.
                </p>
                <p>
                  Das Herzstück: der mehrfach ausgezeichnete Formula 1-Shake mit Sojaprotein und allen wichtigen Aminosäuren, dazu 25 essenzielle Mineralstoffe und Vitamine. Er unterstützt das Immunsystem, den Erhalt normaler Knochen und hilft gegen Müdigkeit – ideal vor oder nach dem Training oder als gesunder Snack auf der Radtour.
                </p>
              </div>
            </div>
            {/* Image right */}
            <div className="order-1 md:order-2">
              <img
                src={herbalifePartner}
                alt="Herbalife Nutrition, Shakes und sportliche Atmosphäre"
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

      {/* PARTNER 5: Perplex */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Text left */}
            <div className="order-2 md:order-1">
              <p className="font-serif text-2xl font-bold text-foreground mb-6">Perplex</p>
              <span className="inline-block bg-bronze/10 text-bronze text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
                Handgemacht in Deutschland · Seit über 33 Jahren
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Perplex: Handgemacht in Deutschland, ehrlich statt Massenware
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Klartext vorab: Nahezu jede Gastronomie, von der Pizzeria bis zum Hotel, arbeitet mit vorbereiteten, gekühlten oder tiefgekühlten Komponenten. Das ist Alltag in der Branche, wird nur selten offen gesagt. Wir sagen es. Und wir sagen euch auch, von wem unsere Ware kommt.
                </p>
                <p>
                  Unser Partner <strong className="text-foreground">Perplex</strong> ist keine anonyme Industrie&shy;fabrik, sondern eine deutsche Manufaktur mit über 33 Jahren Erfahrung. Jeder Flammkuchen, jedes Baguette wird in Deutschland <strong className="text-foreground">von Hand belegt</strong>, mit frischen Zutaten verfeinert und erst dann schockgefrostet, damit der Geschmack am Ofen bei uns genau so ankommt, wie er die Manufaktur verlassen hat.
                </p>
                <p>
                  Der Unterschied zu „TK-Ware aus dem Supermarkt": handwerkliche Produktion, kontrollierte Rohstoffe ohne Gentechnik (Codex-Richtlinie, Kontrolle durch agroVet GmbH) und volle Transparenz. Vergleichbar damit, wenn ihr euch zu Hause einen Flammkuchen frisch belegt und für später einfriert, nur eben von Profis mit drei Jahrzehnten Erfahrung.
                </p>
                <p className="text-sm italic">
                  Wir könnten so tun, als würden wir alles selbst kneten. Machen wir aber nicht. Wir stehen zu unserem Partner, weil die Qualität stimmt und weil Ehrlichkeit besser schmeckt als Marketing.
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
            <div className="grid sm:grid-cols-4 gap-6">
              <div className="text-center sm:text-left">
                <p className="text-2xl mb-2">🇩🇪</p>
                <p className="font-serif font-bold text-foreground mb-1">Made in Germany</p>
                <p className="text-muted-foreground text-sm">Produktion in deutscher Manufaktur</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl mb-2">🤝</p>
                <p className="font-serif font-bold text-foreground mb-1">Von Hand belegt</p>
                <p className="text-muted-foreground text-sm">Echtes Handwerk, keine Fließbandware</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl mb-2">🌿</p>
                <p className="font-serif font-bold text-foreground mb-1">Ohne Gentechnik</p>
                <p className="text-muted-foreground text-sm">Codex-Richtlinie, kontrolliert von agroVet</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl mb-2">👀</p>
                <p className="font-serif font-bold text-foreground mb-1">Volle Transparenz</p>
                <p className="text-muted-foreground text-sm">Lieferant und Nährwerte offen gelistet</p>
              </div>
            </div>
            <p className="mt-6 text-xs text-muted-foreground text-center sm:text-left">
              Kleiner Reality-Check: Nach Branchenschätzungen setzt ein Großteil der Gastronomie in Deutschland auf vorbereitete oder tiefgekühlte Komponenten. Wir verstecken das nicht, wir wählen den Partner sorgfältig aus.
            </p>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Partners;
