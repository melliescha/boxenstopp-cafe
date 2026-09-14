import { Link } from "react-router-dom";
import { BatteryCharging, Bike, Check, Droplets, Footprints, Map, Route, Sun, Thermometer, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ShowerSection from "@/components/ShowerSection";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/config/social";
import { localBusinessSchema } from "@/lib/schema";

const PATH = "/blog/bodensee-koenigssee-radweg-hergatz";
const TITLE = "Bodensee-Königssee-Radweg: Stopp in Hergatz, Allgäu";
const DESCRIPTION = "Stopp am Bodensee-Königssee-Radweg in Hergatz im Westallgäu: kühle Terrasse, kostenloses Leitungswasser, Duschen, Steckdosen, Routen für Rad und Wandern.";

const highlights = [
  { icon: Map, title: "Geheimtipp am Radweg", text: "Direkt an der Leiblachroute & Bodensee-Königssee-Radweg. Wer uns findet, kommt wieder." },
  { icon: Thermometer, title: "Kühle Terrasse", text: "Selbst bei 30°C genießt du bei uns angenehme 25°C im Schatten: die perfekte Erfrischung." },
  { icon: Droplets, title: "Kostenloses Leitungswasser", text: "1 € für Leitungswasser? Nicht bei uns. Wasser ist ein Grundrecht und bleibt kostenlos für euch: ein Glas oder deine Trinkflasche füllst du bei uns immer gratis auf." },
  { icon: BatteryCharging, title: "Steckdosen zum Aufladen", text: "Wir haben keine eigene E-Bike-Ladestation, aber du darfst unsere Steckdose nutzen. Handy, Navi und E-Bike lädst du mit deinem eigenen Ladegerät kostenlos bei uns auf." },
];

const reasons = [
  { icon: Sun, title: "Versteckt & besonders", text: "Kein Straßenlärm, keine Hektik. Bei uns genießt du in aller Ruhe, umgeben von Allgäuer Natur." },
  { icon: Users, title: "Familiär & persönlich", text: "Helena und Eugen begrüßen dich persönlich. Bei uns bist du Gast, nicht Kunde." },
  { icon: Bike, title: "Perfekt für Radfahrer", text: "Terrasse, Duschen, Steckdosen zum Aufladen und alles was du brauchst, um wieder aufzutanken." },
];

const routeGroups = [
  { icon: Bike, title: "Radfahrer", items: ["Bodensee-Königssee-Radweg (1. Etappe)", "Allgäuer Käsestraße, Tour „Großes KäseGlück\"", "Radrunde Allgäu (ADFC 4-Sterne-Qualitätsroute)", "Bayerisch-Schwäbischer Jakobus-Radpilgerweg"] },
  { icon: Footprints, title: "Wanderer", items: ["Westallgäuer Wasserwege (31 Routen, viele starten direkt am Bahnhof Hergatz)", "Leiblach-Wanderweg von Hergatz zum Bodensee", "Münchner Jakobsweg (Endetappe)", "Bayerisch-Schwäbischer Jakobsweg"] },
  { icon: Route, title: "Spaziergänger & Tagesgäste", items: ["Rundgang durchs Degermoos (Naturschutzgebiet)", "Pilger-Spaziergang Maria-Thann (Wallfahrtskirche)", "Historischer Rundgang Wohmbrechts (St. Georg)", "Tagestour in die Altstadt Wangen (5 km)"] },
];

const articleSchema = {
  "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESCRIPTION,
  image: "https://bistro-boxenstopp.de/og/galerie.jpg", author: { "@type": "Organization", name: "Bistro Boxenstopp" },
  publisher: { "@type": "Organization", name: "Bistro Boxenstopp" }, datePublished: "2026-07-26", dateModified: "2026-09-14",
  mainEntityOfPage: { "@type": "WebPage", "@id": `https://bistro-boxenstopp.de${PATH}` },
};

const BlogRadwegHergatz = () => (
  <Layout>
    <SEO title={TITLE} description={DESCRIPTION} path={PATH} type="article" image="/og/galerie.jpg" jsonLd={[articleSchema, localBusinessSchema]} />

    <header className="border-b border-border bg-primary py-16 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/75">Tourismus im Westallgäu</p>
        <h1 className="max-w-4xl font-serif text-4xl font-normal leading-tight md:text-6xl">Euer Stopp am Bodensee-Königssee-Radweg in Hergatz</h1>
        <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-primary-foreground/85">Radfahrer, Wanderer, Camper und Tagesgäste im Westallgäu erholen sich bei uns auf der kühlen Terrasse in Hergatz-Wohmbrechts und starten frisch in die nächste Etappe, zwischen Wangen im Allgäu, Lindenberg und dem Bodensee.</p>
      </div>
    </header>

    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Pause im Westallgäu</p>
        <h2 className="font-serif text-3xl font-normal text-foreground md:text-5xl">Darum lohnt sich der Boxenstopp am Allgäu-Radweg</h2>
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
          {highlights.map((item) => (
            <article key={item.title} className="bg-background p-7 md:p-9">
              <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-5 font-serif text-2xl font-normal text-foreground">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-4xl font-serif text-3xl font-normal leading-tight md:text-5xl">Ein Bistro, das man nicht erwartet, und nicht mehr vergisst</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {reasons.map((item) => (
            <article key={item.title} className="border-t border-primary-foreground/30 pt-6">
              <item.icon className="h-6 w-6 text-warm-gold" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-2xl font-normal">{item.title}</h3>
              <p className="mt-3 leading-7 text-primary-foreground/80">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <ShowerSection />

    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Routen & Touren</p>
        <h2 className="font-serif text-3xl font-normal text-foreground md:text-5xl">Plant uns ein</h2>
        <p className="mt-4 text-lg text-muted-foreground">Wir sind euer Stopp auf vielen Routen im Westallgäu.</p>
        <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
          {routeGroups.map((group) => (
            <article key={group.title} className="bg-background p-7 md:p-9">
              <group.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-2xl font-normal text-foreground">{group.title}</h3>
              <ul className="mt-5 space-y-4">
                {group.items.map((item) => <li key={item} className="flex items-start gap-3 leading-7 text-muted-foreground"><Check className="mt-1 h-4 w-4 shrink-0 text-bronze" aria-hidden="true" /><span>{item}</span></li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start gap-5 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-2xl font-normal text-foreground">Plant uns auf Komoot in eure Tour ein</p>
          <Button asChild size="lg"><a href={socialLinks.komoot} target="_blank" rel="noopener noreferrer">Auf Komoot ansehen</a></Button>
        </div>
      </div>
    </section>

    <section className="border-t border-border bg-secondary/30 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-serif text-2xl font-normal text-foreground">Bereit für euren nächsten Boxenstopp?</p>
        <div className="flex flex-wrap gap-3"><Button asChild><Link to="/kontakt">Anfahrt & Öffnungszeiten</Link></Button><Button asChild variant="outline"><Link to="/speisekarte">Speisekarte ansehen</Link></Button></div>
      </div>
    </section>
  </Layout>
);

export default BlogRadwegHergatz;