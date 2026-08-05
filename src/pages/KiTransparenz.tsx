import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import {
  ShieldCheck,
  UserCheck,
  EyeOff,
  BadgeCheck,
  Lock,
  Gavel,
  MessageSquareQuote,
} from "lucide-react";

const guarantees = [
  {
    icon: EyeOff,
    title: "Keine Gästedaten in KI-Systeme",
    text: "Personenbezogene Daten unserer Gäste – aus Anfragen, Reservierungen oder dem Gastraum – werden niemals in KI-Systeme eingegeben oder zu Trainingszwecken weitergegeben.",
  },
  {
    icon: UserCheck,
    title: "Keine Gäste oder Dritte auf KI-Bildern",
    text: "KI-Bilder zeigen überwiegend fiktive Personen, Szenen ohne erkennbare Gesichter, Ambiente- und Produktbilder. Gäste, Mitarbeitende oder Dritte werden niemals auf KI-Bildern abgebildet oder nachgebildet. Ausnahme: KI-generierte Bilder von uns selbst (Eugen & Helena Schall, Oliver Schall, Melanie Dincmeir) — siehe Abschnitt 3.",
  },
  {
    icon: BadgeCheck,
    title: "Menschliche Freigabe vor jeder Veröffentlichung",
    text: "Kein Text und kein Bild geht ungeprüft online. Jede Änderung wird vor der Veröffentlichung von uns als Menschen gelesen, geprüft und freigegeben.",
  },
  {
    icon: Lock,
    title: "Kein KI-Chatbot, keine automatisierte Entscheidung",
    text: "Auf dieser Website läuft kein KI-Chatbot und keine automatisierte Entscheidungsfindung nach Art. 22 DSGVO. Es gibt keinen Algorithmus, der über Gäste entscheidet.",
  },
];

const faqItems = [
  {
    q: "Welche Bilder auf der Website sind KI-generiert?",
    a: "Echte Fotos sind Aufnahmen von unserem Bistro, den Räumen, der Terrasse und unseren Speisen. Stimmungsbilder, die mit KI erstellt oder nachbearbeitet wurden, erkennt man am kleinen Sternchen (*). In der Bildergalerie steht zusätzlich ein Bildnachweis, in dem für jedes Bild die Quelle aufgeführt ist.",
  },
  {
    q: "Sind auf den KI-Bildern echte Menschen zu sehen?",
    a: "Die meisten KI-Bilder zeigen fiktive Personen oder Szenen ohne erkennbare Gesichter — Gäste, Mitarbeitende oder Dritte werden nie abgebildet. Zusätzlich haben wir KI genutzt, um Bilder von uns selbst zu erstellen — Eugen & Helena Schall, Oliver Schall und Melanie Dincmeir. Diese bilden uns als reale Personen ab und sind daher technisch ein Deepfake im Sinne von Art. 3 Nr. 60 EU AI Act. Da es sich um unsere eigenen Abbildungen handelt, liegen die Einwilligungen der abgebildeten Personen ausdrücklich vor, und wir weisen hier transparent gemäß Art. 50 EU AI Act darauf hin.",
  },
  {
    q: "Warum nutzt ihr überhaupt KI?",
    a: "Weil wir ein kleines Familienunternehmen sind und kein Werbestudio. KI hilft uns, eine einladende Website mit verständlichen Texten zu bauen. Die Zeit, die wir dadurch sparen, stecken wir lieber in den Kaffee und in unsere Gäste.",
  },
  {
    q: "Werden meine Daten an KI-Systeme weitergegeben?",
    a: "Nein. Auf dieser Website läuft kein KI-Chatbot und keine automatisierte Entscheidungsfindung. Personenbezogene Daten unserer Gäste, etwa aus Anfragen oder Reservierungen, geben wir nicht in KI-Systeme ein.",
  },
  {
    q: "Wer ist verantwortlich, wenn ein KI-Bild oder ein Text fehlerhaft ist?",
    a: "Die redaktionelle Verantwortung liegt ausschließlich bei uns Menschen, namentlich bei Eugen Schall (verantwortlich gemäß § 18 Abs. 2 MStV). Jedes Bild und jeder Text wird vor der Veröffentlichung von uns gelesen, geprüft und freigegeben. Wenn dir trotzdem ein Fehler auffällt: sag uns Bescheid, wir korrigieren ihn schnellstmöglich.",
  },
  {
    q: "Wo finde ich die rechtlichen Details dazu?",
    a: "Kurz zusammengefasst auf dieser Seite, ausführlich in Abschnitt 16 der Datenschutzerklärung (Einsatz von KI-generierten Inhalten, EU AI Act) sowie im Impressum unter Bildnachweise und Urheberrecht.",
  },
];

const KiTransparenz = () => {
  return (
    <Layout>
      <SEO
        title="KI-Transparenz | Bistro Boxenstopp"
        description="Transparenzbericht zum Einsatz künstlicher Intelligenz auf dieser Website: Kennzeichnung, Datenschutz und EU AI Act."
        path="/ki-transparenz"
      />

      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-32 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-9 h-9" style={{ color: "#9E7C4E" }} aria-hidden="true" />
            <span className="text-sm font-medium tracking-wide uppercase" style={{ color: "#9E7C4E" }}>
              Transparenzbericht
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-5">
            So setzen wir künstliche Intelligenz ein
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Wir gehen offen und ehrlich damit um: Ein Teil der Bilder und Texte dieser Website
            wurde mit Hilfe künstlicher Intelligenz erstellt oder bearbeitet. Diese Seite
            erklärt, wie wir das transparent kennzeichnen, was mit Gästedaten passiert (nichts)
            und wie wir mit dem EU AI Act konform sind.
          </p>
        </div>
      </section>

      {/* Garantien-Grid */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="grid sm:grid-cols-2 gap-5">
            {guarantees.map((g) => (
              <div
                key={g.title}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <g.icon className="w-7 h-7 mb-3" style={{ color: "#9E7C4E" }} aria-hidden="true" />
                <h3 className="font-serif text-lg font-bold text-foreground mb-1.5">
                  {g.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kennzeichnung */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            1. Kennzeichnung KI-generierter Inhalte
          </h2>
          <div className="rounded-xl border border-border bg-card p-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              KI-generierte oder KI-bearbeitete Bilder sind auf dieser Website mit einem kleinen{" "}
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-foreground font-bold text-xs align-middle" style={{ backgroundColor: "#9E7C4E33" }}>*</span>{" "}
              Sternchen gekennzeichnet. Ein Klick darauf führt direkt zu diesem Transparenzbericht.
            </p>
            <p>
              In der Bildergalerie gibt es zusätzlich einen ausklappbaren Bildnachweis, in dem
              für jedes einzelne Bild die Quelle (Foto oder KI) nachvollziehbar aufgeführt ist.
            </p>
            <p>
              Bei Texten wurden KI-Werkzeuge lediglich unterstützend eingesetzt. Alle Inhalte
              wurden vor der Veröffentlichung von uns redaktionell geprüft und verantwortet.
              KI-Bilder dienen ausschließlich illustrativen Zwecken und können von der
              tatsächlichen Realität abweichen. Maßgeblich ist stets das tatsächliche Angebot
              vor Ort.
            </p>
          </div>
        </div>
      </section>

      {/* Redaktionelle Verantwortung */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
            2. Redaktionelle Verantwortung
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <UserCheck className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: "#9E7C4E" }} aria-hidden="true" />
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Verantwortlich:</strong> Die redaktionelle
                Verantwortung liegt ausschließlich bei uns Menschen, namentlich bei{" "}
                <strong className="text-foreground">Eugen Schall</strong> (verantwortlich gemäß
                § 18 Abs. 2 MStV). Kein Inhalt – weder Text noch Bild – geht ungeprüft online.
              </p>
            </div>
            <div className="flex gap-4">
              <BadgeCheck className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: "#9E7C4E" }} aria-hidden="true" />
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Menschliche Freigabe:</strong> Jeder Inhalt –
                Text wie Bild – wird vor der Veröffentlichung von uns gelesen, geprüft und
                freigegeben. Ein automatisierter oder rein KI-gesteuerter
                Veröffentlichungsprozess findet nicht statt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rechtsgrundlagen */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            3. Rechtsgrundlagen
          </h2>
          <div className="rounded-xl border border-border bg-card p-6 space-y-4 text-muted-foreground leading-relaxed">
            <div className="flex gap-3">
              <Gavel className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#9E7C4E" }} aria-hidden="true" />
              <p>
                <strong className="text-foreground">EU AI Act (VO (EU) 2024/1689):</strong>{" "}
                Wir kennzeichnen den Einsatz künstlicher Intelligenz freiwillig und transparent im
                Sinne von Art. 50 des EU AI Act, der Transparenzpflichten für künstlich erzeugte
                oder manipulierte Inhalte vorsieht.
              </p>
            </div>
            <div className="flex gap-3">
              <Lock className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#9E7C4E" }} aria-hidden="true" />
              <p>
                <strong className="text-foreground">DSGVO:</strong> Die interne Nutzung der
                KI-Werkzeuge erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                Interesse an einer effizienten Erstellung und Pflege unserer Website).
                Personenbezogene Daten unserer Gäste werden nicht an KI-Anbieter übermittelt.
              </p>
            </div>
            <div className="flex gap-3">
              <UserCheck className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#9E7C4E" }} aria-hidden="true" />
              <p>
                <strong className="text-foreground">KI-Bilder von uns selbst (Deepfake-Hinweis):</strong>{" "}
                Einige KI-generierte Bilder zeigen uns selbst — Eugen und Helena Schall, Oliver
                Schall sowie Melanie Dincmeir — als reale, erkennbare Personen. Diese sind im
                Sinne von Art. 3 Nr. 60 EU AI Act als Deepfake einzuordnen. Da es sich um unsere
                eigenen Abbildungen handelt, liegen die Einwilligungen der abgebildeten Personen
                ausdrücklich vor. Wir kennzeichnen diese Bilder mit dem Sternchen (*) und weisen
                hier transparent gemäß Art. 50 EU AI Act darauf hin.
              </p>
            </div>
            <div className="flex gap-3">
              <UserCheck className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#9E7C4E" }} aria-hidden="true" />
              <p>
                <strong className="text-foreground">Reale Fotos der Inhaberfamilie:</strong> Daneben
                gibt es echte Aufnahmen von uns mit ausdrücklicher Einwilligung (Art. 6 Abs. 1 lit. a
                DSGVO). Gäste, Mitarbeitende oder Dritte werden weder in KI-Bildern abgebildet noch
                nachgebildet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
            <MessageSquareQuote className="w-7 h-7" style={{ color: "#9E7C4E" }} aria-hidden="true" />
            4. Häufige Fragen zum Thema KI
          </h2>
          <p className="text-muted-foreground mb-6">
            Die ausführlichen Antworten stehen auch in unseren{" "}
            <Link to="/faq#ki-transparenz" className="underline underline-offset-2 hover:text-warm-gold">
              FAQ
            </Link>{" "}
            bereit.
          </p>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group rounded-lg border border-border bg-card overflow-hidden"
              >
                <summary className="cursor-pointer list-none px-5 py-4 font-medium text-foreground flex items-center justify-between gap-3 hover:bg-muted/40 transition-colors">
                  <span>{item.q}</span>
                  <span className="text-warm-gold text-xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Weiterführende Links */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            5. Weiterführende rechtliche Dokumente
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/datenschutz#ki-hinweis"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:border-warm-gold transition-colors"
            >
              <Lock className="w-4 h-4" style={{ color: "#9E7C4E" }} aria-hidden="true" />
              Datenschutzerklärung, Abschnitt 16
            </Link>
            <Link
              to="/impressum"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:border-warm-gold transition-colors"
            >
              <MessageSquareQuote className="w-4 h-4" style={{ color: "#9E7C4E" }} aria-hidden="true" />
              Impressum (Bildnachweise & Urheberrecht)
            </Link>
            <Link
              to="/faq#ki-transparenz"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:border-warm-gold transition-colors"
            >
              <MessageSquareQuote className="w-4 h-4" style={{ color: "#9E7C4E" }} aria-hidden="true" />
              FAQ: Künstliche Intelligenz
            </Link>
          </div>
        </div>
      </section>

      {/* Stand */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-sm text-muted-foreground">
            Stand: August 2026 · Bistro Boxenstopp, Hergatz
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default KiTransparenz;
