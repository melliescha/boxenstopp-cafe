import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import {
  ShieldCheck,
  ImageIcon,
  FileText,
  Sparkles,
  UserCheck,
  EyeOff,
  BadgeCheck,
  Lock,
  Gavel,
  Server,
  MessageSquareQuote,
  AlertCircle,
} from "lucide-react";

const tools = [
  {
    name: "Lovable",
    provider: "Lovable Labs Inc., USA",
    purpose: "KI-gestützte Webentwicklungsplattform – Layout, Komponenten, Code",
    icon: Server,
  },
  {
    name: "ChatGPT",
    provider: "OpenAI, L.L.C., USA",
    purpose: "Sprachmodell für Text-Entwürfe, Formulierungshilfen, Recherche; Logo-Entwurf",
    icon: FileText,
  },
  {
    name: "Google Gemini",
    provider: "Google Ireland Ltd. / Google LLC",
    purpose: "Sprachmodell für Text- und Recherche-Unterstützung",
    icon: Sparkles,
  },
  {
    name: "Anthropic Claude",
    provider: "Anthropic PBC, USA",
    purpose: "Sprachmodell für Texte, Code-Reviews, redaktionelle Unterstützung, Bild-Prompts",
    icon: FileText,
  },
  {
    name: "Higgsfield AI",
    provider: "Higgsfield, Inc., USA",
    purpose: "KI-Bildgenerator für Ambiente-, Produkt- und Stimmungsbilder",
    icon: ImageIcon,
  },
];

const guarantees = [
  {
    icon: EyeOff,
    title: "Keine Gästedaten in KI-Systeme",
    text: "Personenbezogene Daten unserer Gäste – aus Anfragen, Reservierungen oder dem Gastraum – werden niemals in KI-Systeme eingegeben oder zu Trainingszwecken weitergegeben.",
  },
  {
    icon: UserCheck,
    title: "Keine realen, identifizierbaren Personen",
    text: "Alle KI-Bild-Prompts enthielten ausdrücklich die Vorgabe, keine realen Menschen abzubilden. Gezeigt werden ausschließlich fiktive Personen oder Szenen ohne erkennbare Gesichter. Ein Deepfake im Sinne von Art. 3 Nr. 60 EU AI Act liegt nicht vor.",
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
    a: "Nein. Unsere Bildaufträge (Prompts) haben wir ausdrücklich so formuliert, dass keine realen, identifizierbaren Personen abgebildet werden. Zu sehen sind ausschließlich fiktive Personen oder Szenen ohne erkennbare Gesichter. Wo echte Menschen abgebildet sind, etwa Eugen selbst, liegt eine Einwilligung vor.",
  },
  {
    q: "Welche KI-Werkzeuge nutzt ihr für Bilder?",
    a: "Die Bildaufträge wurden mit Anthropic Claude formuliert und über Higgsfield AI umgesetzt. Unser Logo ist ein KI-Entwurf, erstellt mit ChatGPT (OpenAI).",
  },
  {
    q: "Und für die Texte?",
    a: "Für Entwürfe, Formulierungen, Rechtschreibung und Struktur nutzen wir Anthropic Claude, Lovable, Google Gemini und ChatGPT als Schreibhilfe. Die Inhalte selbst stammen von uns: unsere Geschichte, unsere Preise, unsere Produkte, unsere Partner. Kein Text geht ungeprüft online.",
  },
  {
    q: "Warum nutzt ihr überhaupt KI?",
    a: "Weil wir ein kleines Familienunternehmen sind und kein Werbestudio. KI hilft uns, eine einladende Website mit verständlichen Texten zu bauen, ohne ein teures Agenturteam zu bezahlen. Die Zeit, die wir dadurch sparen, stecken wir lieber in den Kaffee und in unsere Gäste.",
  },
  {
    q: "Werden meine Daten an KI-Systeme weitergegeben?",
    a: "Nein. Auf dieser Website läuft kein KI-Chatbot und keine automatisierte Entscheidungsfindung. Personenbezogene Daten unserer Gäste, etwa aus Anfragen oder Reservierungen, geben wir nicht in KI-Systeme ein.",
  },
  {
    q: "Wer ist verantwortlich, wenn ein KI-Bild oder ein Text fehlerhaft ist?",
    a: "Die redaktionelle Verantwortung liegt ausschließlich bei uns Menschen, namentlich bei Eugen Schall (verantwortlich gemäß § 18 Abs. 2 MStV). Jedes Bild und jeder Text wird vor der Veröffentlichung gelesen, geprüft und freigegeben. Wenn dir trotzdem ein Fehler auffällt: sag uns Bescheid, wir korrigieren ihn schnellstmöglich.",
  },
];

const KiTransparenz = () => {
  return (
    <Layout>
      <SEO
        title="KI-Transparenz | Bistro Boxenstopp"
        description="Ausführlicher Transparenzbericht zum Einsatz künstlicher Intelligenz auf dieser Website: Werkzeuge, Kennzeichnung, Datenschutz und EU AI Act."
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
            dokumentiert ausführlich, <strong className="text-foreground">welche</strong> Werkzeuge
            wir einsetzen, <strong className="text-foreground">wofür</strong>, was mit
            Gästedaten passiert (nichts) und wie wir sicherstellen, dass wir mit dem EU AI Act
            konform sind.
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

      {/* Werkzeuge */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
            1. Welche KI-Werkzeuge wir einsetzen
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Für Konzeption, Text-Entwürfe, Programmierung und Bildmaterial dieser Website haben
            wir folgende KI-Werkzeuge genutzt. Alle Inhalte stammen aus unserem eigenen
            redaktionellen Umfeld.
          </p>
          <div className="space-y-4">
            {tools.map((t) => (
              <div
                key={t.name}
                className="flex gap-4 rounded-lg border border-border bg-card p-4"
              >
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#9E7C4E22" }}
                >
                  <t.icon className="w-5 h-5" style={{ color: "#9E7C4E" }} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {t.name}{" "}
                    <span className="font-normal text-muted-foreground text-sm">
                      · {t.provider}
                    </span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">
                    {t.purpose}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wofür KI / Wofür nicht */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
            2. Wofür KI eingesetzt wird – und wofür nicht
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <BadgeCheck className="w-5 h-5" style={{ color: "#9E7C4E" }} aria-hidden="true" />
                Dafür
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                <li>Entwürfe und Struktur für Texte und Beschreibungen</li>
                <li>Stimmungs-, Ambiente- und Produktbilder</li>
                <li>Unser Logo (ChatGPT)</li>
                <li>Layout, Komponenten und Code (Lovable)</li>
                <li>Rechtschreibung, Formulierung, Recherche</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" style={{ color: "#b04a4a" }} aria-hidden="true" />
                Nicht dafür
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                <li>Kein KI-Chatbot für Gäste</li>
                <li>Keine automatisierte Entscheidungsfindung (Art. 22 DSGVO)</li>
                <li>Keine Eingabe von Gästedaten in KI-Systeme</li>
                <li>Keine Abbildung realer, identifizierbarer Personen</li>
                <li>Keine Trainingsdaten aus unserem Gästekontakt</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kennzeichnung */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            3. Kennzeichnung KI-generierter Inhalte
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

      {/* Redaktionelle Verantwortung & Infrastruktur */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
            4. Redaktionelle Verantwortung & technische Infrastruktur
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
              <Server className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: "#9E7C4E" }} aria-hidden="true" />
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Quellcode:</strong> Der Quellcode dieser Website
                wird in einem Repository bei <strong className="text-foreground">GitHub</strong>{" "}
                (GitHub, Inc., USA) verwaltet.
              </p>
            </div>
            <div className="flex gap-4">
              <Server className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: "#9E7C4E" }} aria-hidden="true" />
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Hosting:</strong> Die Auslieferung erfolgt über{" "}
                <strong className="text-foreground">Cloudflare</strong> (Cloudflare, Inc., USA).
                Beim bloßen Aufruf der Website findet keine Datenübermittlung an die
                KI-Anbieter statt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rechtsgrundlagen */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            5. Rechtsgrundlagen
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
                <strong className="text-foreground">Echte Personenabbildungen:</strong> Fotos
                der Inhaberfamilie sind reale Aufnahmen mit ausdrücklicher Einwilligung der
                abgebildeten Personen (Art. 6 Abs. 1 lit. a DSGVO). Diese wurden nicht durch KI
                generiert; gelegentliche Bildoptimierungen erfolgen ohne biometrische Profile.
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
            6. Häufige Fragen zum Thema KI
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
            7. Weiterführende rechtliche Dokumente
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
              <FileText className="w-4 h-4" style={{ color: "#9E7C4E" }} aria-hidden="true" />
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
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-sm text-muted-foreground italic">
            Stand: August 2026 · Diese Seite wird von Eugen Schall gepflegt. Bei Fragen zum
            Einsatz von KI wenden Sie sich gerne an die im Impressum genannten Kontaktdaten.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default KiTransparenz;
