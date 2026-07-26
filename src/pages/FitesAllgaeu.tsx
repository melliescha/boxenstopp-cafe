import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Phone, Sparkles, Users, Dumbbell, Flame, Trophy, CheckCircle2, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import fitesStudioAsset from "@/assets/fites-studio.jpg.asset.json";
import fitesBoxingAsset from "@/assets/fites-boxing.jpg.asset.json";
import fitesHyroxAsset from "@/assets/fites-hyrox.jpg.asset.json";
import founderEugen from "@/assets/founder-eugen.jpg";

const PHONE_DISPLAY = "0171 6226201";
const PHONE_LINK = "+491716226201";
const STUDIO_URL = "https://www.fites-allgaeu.com";

const NAVY = "#164472";
const BRONZE = "#9E7C4E";
const CREAM = "#FEF4EC";
const GOLD = "#C9A55C";

const courses = [
  {
    icon: Trophy,
    title: "HYROX",
    text: "Offizielles HYROX Training, funktionelle Fitness kombiniert mit Ausdauer. Perfekte Vorbereitung auf das Race oder einfach für maximale Fitness.",
  },
  {
    icon: Flame,
    title: "FITES Boxen",
    text: "Fitness-Boxen für alle Level. Technik, Kondition und Stressabbau in einem, mit Boxsack, Pratzen und persönlichem Coaching.",
  },
  {
    icon: Sparkles,
    title: "Tabata",
    text: "Hochintensives Intervalltraining, das in kürzester Zeit maximale Ergebnisse liefert. Fettverbrennung, Ausdauer, Kraft.",
  },
  {
    icon: Dumbbell,
    title: "HIIT & Kraft",
    text: "Individuell abgestimmte Kraft- und HIIT-Einheiten an Hammer Strength Geräten. Kleine Gruppen, persönliche Betreuung.",
  },
];

const benefits = [
  "Persönliche Betreuung von Inhaber Eugen",
  "Kleine Gruppen, nie überfüllt",
  "Hammer Strength & Titanium Strength Geräte",
  "Wellpass-Partner (ehemals Qualitrain)",
  "Direkt neben Bistro Boxenstopp, Kaffee & Shake nach dem Training inklusive Vibe",
  "Flexible Zeiten, keine langen Vertragslaufzeiten",
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: "FITES Allgäu",
    description: "Fitnessstudio in Hergatz mit HYROX, Fitness-Boxen, Tabata und HIIT. Kleine Gruppen, persönliche Betreuung, Wellpass-Partner.",
    url: "https://bistro-boxenstopp.de/fites-allgaeu",
    telephone: "+491716226201",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bahnhofstraße 4",
      addressLocality: "Hergatz",
      postalCode: "88145",
      addressCountry: "DE",
    },
    sameAs: [STUDIO_URL],
    offers: {
      "@type": "Offer",
      name: "Kostenloses Probetraining",
      description: "Bis Dezember kostenloses Probetraining sichern",
      availabilityEnds: "2026-12-31",
      price: "0",
      priceCurrency: "EUR",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kostet das Probetraining wirklich nichts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Bis Dezember 2026 ist das Probetraining bei FITES Allgäu komplett kostenlos und unverbindlich. Einfach anrufen und Termin vereinbaren.",
        },
      },
      {
        "@type": "Question",
        name: "Wird Wellpass akzeptiert?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, FITES Allgäu ist Wellpass-Partner (ehemals Qualitrain). Mit gültiger Wellpass-Mitgliedschaft trainieren Sie flexibel ohne Zusatzkosten.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Kurse gibt es?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HYROX, Fitness-Boxen, Tabata, HIIT und individuelles Krafttraining. Immer in kleinen Gruppen mit persönlicher Betreuung.",
        },
      },
      {
        "@type": "Question",
        name: "Wo befindet sich FITES Allgäu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bahnhofstraße 4 in 88145 Hergatz im Westallgäu, direkt im selben Gebäude wie das Bistro Boxenstopp.",
        },
      },
    ],
  },
];

const FitesAllgaeu = () => {
  return (
    <Layout>
      <SEO
        title="FITES Allgäu Hergatz | Kostenloses Probetraining bis Dezember"
        description="Fitnessstudio in Hergatz: HYROX, Fitness-Boxen, Tabata & HIIT. Persönliche Betreuung von Eugen, kleine Gruppen, Wellpass-Partner. Jetzt kostenloses Probetraining sichern."
        path="/fites-allgaeu"
        image="/og-image.jpg"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="absolute inset-0 opacity-30">
          <img src={fitesHyroxAsset.url} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, rgba(22,68,114,0.85) 60%, rgba(22,68,114,0.7) 100%)` }} />
        </div>
        <div className="relative container mx-auto px-6 py-20 md:py-28 max-w-5xl text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-sm" style={{ backgroundColor: "rgba(201,165,92,0.2)", border: `1px solid ${GOLD}` }}>
            <Sparkles className="w-4 h-4" style={{ color: GOLD }} />
            <span className="text-sm font-semibold tracking-wide" style={{ color: GOLD }}>Nur bis Dezember 2026</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">
            Kostenloses Probetraining bei FITES Allgäu sichern
          </h1>
          <p className="text-lg md:text-2xl mb-8 opacity-95 max-w-3xl leading-relaxed">
            Dein Fitnessstudio in Hergatz. HYROX, Fitness-Boxen, Tabata und HIIT. Kleine Gruppen, persönliches Coaching von Eugen, keine Wartezeiten. Ohne Risiko, ohne Kosten, ohne Vertrag.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href={`tel:${PHONE_LINK}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all hover:scale-105"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              <Phone className="w-5 h-5" />
              Jetzt anrufen: {PHONE_DISPLAY}
            </a>
            <a
              href="#kurse"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-semibold border-2 transition-all hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}
            >
              Kurse ansehen
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" style={{ color: GOLD }} /> Unverbindlich</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" style={{ color: GOLD }} /> Ohne Anmeldung</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" style={{ color: GOLD }} /> Wellpass akzeptiert</div>
          </div>
        </div>
      </section>

      {/* URGENCY BAR */}
      <section className="py-4" style={{ backgroundColor: GOLD }}>
        <div className="container mx-auto px-6 text-center font-semibold" style={{ color: NAVY }}>
          Aktion endet am 31. Dezember 2026. Ruf einfach an: <a href={`tel:${PHONE_LINK}`} className="underline">{PHONE_DISPLAY}</a>
        </div>
      </section>

      {/* EUGEN */}
      <section className="py-16 md:py-24" style={{ backgroundColor: CREAM }}>
        <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl" style={{ border: `1px solid #EDE0D0` }}>
              <img src={founderEugen} alt="Eugen, Inhaber von FITES Allgäu und Bistro Boxenstopp in Hergatz" className="w-full h-full object-cover aspect-[4/5]" loading="lazy" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-5 py-4 shadow-xl" style={{ border: `1px solid #EDE0D0` }}>
              <p className="text-xs uppercase tracking-widest" style={{ color: BRONZE }}>Dein Trainer</p>
              <p className="font-serif text-xl font-bold" style={{ color: NAVY }}>Eugen</p>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-4" style={{ color: BRONZE }}>Persönliche Betreuung</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5" style={{ color: NAVY }}>
              Trainiert nicht irgendwo, trainiert mit Eugen.
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              Bei FITES Allgäu bist du kein Mitglieder-Barcode. Eugen kennt jeden Namen, jedes Ziel, jede Schwachstelle. Du bekommst einen Trainingsplan, der zu dir passt, nicht zur Werbebroschüre einer Kette.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#3d3d3d" }}>
              Mehr als 30 Jahre Erfahrung, Boxtrainer-Lizenz, HYROX Coach, HIIT-Spezialist. Kleiner Ort, große Wirkung.
            </p>
          </div>
        </div>
      </section>

      {/* KURSE */}
      <section id="kurse" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: BRONZE }}>Kurse & Training</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-5" style={{ color: NAVY }}>
              Vier Trainings-Formate, ein Ziel: du wirst stärker.
            </h2>
            <p className="text-lg text-muted-foreground">
              Wähle, was zu dir passt. Oder komm einfach vorbei und probier alles aus, solange die Aktion läuft, kostenlos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((c) => (
              <div key={c.title} className="p-8 rounded-2xl bg-card transition-all hover:shadow-xl" style={{ border: `1px solid #EDE0D0` }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: CREAM }}>
                    <c.icon className="w-7 h-7" style={{ color: BRONZE }} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold" style={{ color: NAVY }}>{c.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="py-4 bg-background">
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src={fitesStudioAsset.url} alt="FITES Allgäu Studio mit Hantelbank und Hammer Strength Geräten" className="w-full h-64 md:h-72 object-cover rounded-2xl shadow-lg" loading="lazy" />
          <img src={fitesHyroxAsset.url} alt="HYROX Training Club Boxsäcke im FITES Allgäu Hergatz" className="w-full h-64 md:h-72 object-cover rounded-2xl shadow-lg" loading="lazy" />
          <img src={fitesBoxingAsset.url} alt="Fitness-Boxen Training mit persönlichem Coaching in Hergatz" className="w-full h-64 md:h-72 object-cover rounded-2xl shadow-lg" loading="lazy" />
        </div>
      </section>

      {/* WHY FITES */}
      <section className="py-16 md:py-24" style={{ backgroundColor: CREAM }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: BRONZE }}>Warum FITES Allgäu</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold" style={{ color: NAVY }}>
              Kein Massenstudio. Kein Franchise-Kaltluft-Feeling.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 p-5 rounded-xl bg-white" style={{ border: `1px solid #EDE0D0` }}>
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: BRONZE }} />
                <span className="text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WELLPASS */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="rounded-3xl p-8 md:p-12 text-center" style={{ backgroundColor: NAVY, color: "white" }}>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: GOLD }}>Wellpass-Partner</p>
            <h2 className="font-serif text-2xl md:text-4xl font-bold mb-4">
              Wellpass-Mitglied? Dann trainierst du hier ohne Zusatzkosten.
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              FITES Allgäu ist offizieller Partner von Wellpass (ehemals Qualitrain). Zeig deine Wellpass-App an der Rezeption und starte sofort mit deinem Training. Flexibel, unkompliziert, ohne Zusatzbeiträge.
            </p>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-16" style={{ backgroundColor: CREAM }}>
        <div className="container mx-auto px-6 max-w-4xl grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5" style={{ color: BRONZE }} />
              <p className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ color: BRONZE }}>Standort</p>
            </div>
            <h3 className="font-serif text-2xl font-bold mb-3" style={{ color: NAVY }}>Direkt in Hergatz, Westallgäu</h3>
            <address className="not-italic text-muted-foreground leading-relaxed">
              FITES Allgäu<br />
              Bahnhofstraße 4<br />
              88145 Hergatz
            </address>
            <p className="text-sm text-muted-foreground mt-3">Im selben Gebäude wie das Bistro Boxenstopp. Perfekt für Kaffee oder Protein-Shake nach dem Training.</p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-5 h-5" style={{ color: BRONZE }} />
              <p className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ color: BRONZE }}>Trainingszeiten</p>
            </div>
            <h3 className="font-serif text-2xl font-bold mb-3" style={{ color: NAVY }}>Flexibel nach Absprache</h3>
            <p className="text-muted-foreground leading-relaxed">
              Kurszeiten und offenes Training werden individuell abgestimmt. Ruf an und wir finden einen Termin, der zu dir passt, auch abends oder am Wochenende.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="absolute inset-0 opacity-20">
          <img src={fitesBoxingAsset.url} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-6 max-w-3xl text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(201,165,92,0.2)", border: `1px solid ${GOLD}` }}>
            <Sparkles className="w-4 h-4" style={{ color: GOLD }} />
            <span className="text-sm font-semibold tracking-wide" style={{ color: GOLD }}>Kostenloses Probetraining</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Ein Anruf. Ein Termin. Und du weißt, ob FITES zu dir passt.
          </h2>
          <p className="text-lg md:text-xl opacity-95 mb-9">
            Bis 31. Dezember 2026 kostet dich dein Probetraining nichts, außer der Frage, warum du nicht schon früher angerufen hast.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${PHONE_LINK}`}
              className="inline-flex items-center gap-3 px-8 py-5 rounded-xl font-bold text-lg shadow-2xl transition-all hover:scale-105"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              <Phone className="w-5 h-5" />
              Jetzt anrufen: {PHONE_DISPLAY}
            </a>
            <a
              href={STUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-5 rounded-xl font-bold text-lg border-2 transition-all hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.6)", color: "white" }}
            >
              Jetzt buchen <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <p className="mt-8 text-sm opacity-70">
            <Link to="/partner" className="underline hover:opacity-100">Zurück zu unseren Partnern</Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default FitesAllgaeu;
