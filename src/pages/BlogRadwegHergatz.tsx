import { Link } from "react-router-dom";
import { Bike, ShowerHead, BatteryCharging, MapPin, Coffee, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { localBusinessSchema } from "@/lib/schema";

const PATH = "/blog/bodensee-koenigssee-radweg-hergatz";
const TITLE = "Bodensee-Königssee-Radweg: Etappe Hergatz im Westallgäu";
const DESCRIPTION =
  "Rast am Bodensee-Königssee-Radweg in Hergatz/Wohmbrechts: Duschen, E-Bike-Ladestation, Barista-Kaffee & Flammkuchen im Bistro Boxenstopp. Tipps für deine Etappe.";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  image: "https://bistro-boxenstopp.de/og/galerie.jpg",
  author: { "@type": "Organization", name: "Bistro Boxenstopp" },
  publisher: {
    "@type": "Organization",
    name: "Bistro Boxenstopp",
    logo: {
      "@type": "ImageObject",
      url: "https://bistro-boxenstopp.de/og-image.jpg",
    },
  },
  datePublished: "2026-07-26",
  dateModified: "2026-07-26",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://bistro-boxenstopp.de${PATH}`,
  },
  about: {
    "@type": "Place",
    name: "Bodensee-Königssee-Radweg, Etappe Hergatz",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Gibt es am Bodensee-Königssee-Radweg in Hergatz eine Dusche?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Das Bistro Boxenstopp in Hergatz/Wohmbrechts bietet Duschen für 3 € pro Person. Kinder unter 10 Jahren sind in Begleitung der Eltern kostenlos.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich mein E-Bike am Bodensee-Königssee-Radweg in Hergatz laden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, direkt am Bistro Boxenstopp gibt es eine E-Bike-Ladestation. Während der Ladung kannst du auf der schattigen Terrasse einen Barista-Kaffee oder Flammkuchen genießen.",
      },
    },
    {
      "@type": "Question",
      name: "Wo liegt Hergatz auf dem Bodensee-Königssee-Radweg?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hergatz liegt im Westallgäu zwischen Lindau und Isny und wird auf der ersten Etappe des Bodensee-Königssee-Radwegs sowie der Leiblachroute durchfahren, ideal als Zwischenstopp.",
      },
    },
  ],
};

const BlogRadwegHergatz = () => {
  return (
    <Layout>
      <SEO
        title={TITLE}
        description={DESCRIPTION}
        path={PATH}
        type="article"
        image="/og/galerie.jpg"
        jsonLd={[articleSchema, faqSchema, localBusinessSchema]}
      />

      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Start</Link>
          <span className="mx-2">›</span>
          <span>Blog</span>
          <span className="mx-2">›</span>
          <span className="text-foreground">Bodensee-Königssee-Radweg Hergatz</span>
        </nav>

        <header className="mb-10">
          <p className="text-sm uppercase tracking-wider text-primary mb-3">Radfahrer-Guide · Westallgäu</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Bodensee-Königssee-Radweg: Deine Rast in Hergatz
          </h1>
          <p className="text-lg text-muted-foreground">
            Duschen, E-Bike-Laden, Schatten und ein echter Barista-Kaffee: Der perfekte Zwischenstopp
            auf der Etappe durch das Westallgäu, mitten in Hergatz/Wohmbrechts.
          </p>
        </header>

        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="font-display text-2xl font-bold mt-8 mb-3">Wo liegt Hergatz auf der Strecke?</h2>
          <p className="text-foreground/90 leading-relaxed">
            Der <strong>Bodensee-Königssee-Radweg</strong> führt auf über 400 km vom Bodensee bis nach
            Berchtesgaden. Direkt zu Beginn, kurz nach Lindau, durchquert die Route das Westallgäu.
            Hergatz mit dem Ortsteil Wohmbrechts liegt genau hier und ist zusätzlich Kreuzungspunkt
            mit der <strong>Leiblachroute</strong>. Wer die Etappe entspannt angeht, plant hier eine Pause ein.
          </p>

          <h2 className="font-display text-2xl font-bold mt-10 mb-3">Warum das Bistro Boxenstopp der ideale Stopp ist</h2>
          <ul className="space-y-4 not-prose">
            <li className="flex gap-3">
              <ShowerHead className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <strong className="text-foreground">Duschen für 3 €</strong>
                <p className="text-muted-foreground">Frisch machen nach der Etappe, Kinder unter 10 Jahren in Begleitung kostenlos.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <BatteryCharging className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <strong className="text-foreground">E-Bike-Ladestation</strong>
                <p className="text-muted-foreground">Akku laden, während du in Ruhe einen Cappuccino trinkst.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Coffee className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <strong className="text-foreground">Barista-Kaffee & Flammkuchen</strong>
                <p className="text-muted-foreground">Ofenfrisch aus dem Steinofen, dazu Cup&Cino-Kaffeespezialitäten, perfekt für den Energiehaushalt.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Bike className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <strong className="text-foreground">Radler willkommen</strong>
                <p className="text-muted-foreground">Sichere Abstellplätze und Terrasse direkt am Radweg.</p>
              </div>
            </li>
          </ul>

          <h2 className="font-display text-2xl font-bold mt-10 mb-3">Tipp für deine Etappenplanung</h2>
          <p className="text-foreground/90 leading-relaxed">
            Zwischen Lindau und Isny sind es rund 45 km. Wer die Strecke aufteilen möchte, plant Hergatz
            nach etwa 25 km ab Lindau ein, der ideale Punkt für eine ausgedehnte Mittagspause mit
            Dusche und Kaffee. Von hier aus geht es weiter über Wangen und Kißlegg Richtung Allgäuer Alpen.
          </p>

          <h2 className="font-display text-2xl font-bold mt-10 mb-3">Öffnungszeiten & Anfahrt</h2>
          <p className="text-foreground/90 leading-relaxed">
            Aktuelle Öffnungszeiten und die genaue Anfahrt mit Rad, Auto oder Bahn findest du auf unserer{" "}
            <Link to="/kontakt" className="text-primary underline">Anfahrtsseite</Link>. Der Radweg
            führt direkt an unserer Terrasse vorbei.
          </p>
        </section>

        <aside className="bg-primary/10 border border-primary/20 rounded-lg p-6 md:p-8 text-center">
          <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">Rast einlegen im Bistro Boxenstopp</h2>
          <p className="text-muted-foreground mb-5">
            Hergatz / Wohmbrechts · direkt am Bodensee-Königssee-Radweg
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition"
            >
              <Clock className="w-4 h-4" /> Anfahrt & Öffnungszeiten
            </Link>
            <Link
              to="/speisekarte"
              className="inline-flex items-center gap-2 bg-background border border-primary/30 text-foreground px-6 py-3 rounded-md font-medium hover:bg-muted transition"
            >
              Speisekarte ansehen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </aside>
      </article>
    </Layout>
  );
};

export default BlogRadwegHergatz;
