import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const changelog = [
  {
    date: "05.08.2026",
    text: "KI-Transparenz aus der Seite „Über uns“ auf diese eigene Seite verschoben und direkt im Footer verlinkt.",
  },
  {
    date: "05.08.2026",
    text: "KI-FAQ mit sieben Fragen zur Bild- und Textnutzung ergänzt sowie dieses Änderungsprotokoll eingeführt.",
  },
  {
    date: "29.07.2026",
    text: "Eingesetzte Werkzeuge konkretisiert (Logo mit ChatGPT, Bilder über Higgsfield AI, Texte mit Claude, Lovable, Gemini, ChatGPT) und Hinweise zu Code-Verwaltung sowie Hosting aufgenommen.",
  },
  {
    date: "22.07.2026",
    text: "Bildnachweis in der Galerie um die Quelle je Bild erweitert (KI-generiert oder echtes Foto mit Einwilligung).",
  },
  {
    date: "15.07.2026",
    text: "Abschnitt „Wie wir künstliche Intelligenz einsetzen“ neu erstellt, inklusive Hinweis zur menschlichen redaktionellen Verantwortung.",
  },
  {
    date: "08.07.2026",
    text: "Kennzeichnung KI-generierter Bilder mit Sternchen (*) eingeführt, Abschnitt 16 der Datenschutzerklärung sowie Urheberrechts- und Bildnachweishinweise im Impressum ergänzt.",
  },
];

const faq = [
  {
    q: "Welche Bilder auf der Website sind KI-generiert?",
    a: "Echte Fotos sind Aufnahmen von unserem Bistro, den Räumen, der Terrasse und den Speisen. Stimmungsbilder, die teilweise mit KI erstellt oder nachbearbeitet wurden, erkennst du an dem kleinen Sternchen (*). In der Bildergalerie steht ein Sammelhinweis als Fußnote unter den Bildern.",
  },
  {
    q: "Sind auf den KI-Bildern echte Menschen zu sehen?",
    a: "Nein. Unsere Bildaufträge haben wir so formuliert, dass keine realen, identifizierbaren Personen abgebildet werden. Es handelt sich ausschließlich um fiktive Personen oder Szenen ohne erkennbare Gesichter.",
  },
  {
    q: "Welche KI-Tools wurden für die Bilder verwendet?",
    a: "Die Bildaufträge wurden mit Anthropic Claude formuliert und über Higgsfield AI umgesetzt. Unser Logo ist ein KI-Entwurf, erstellt mit ChatGPT.",
  },
  {
    q: "Welche KI-Tools wurden für die Texte verwendet?",
    a: "Für Entwürfe, Formulierungen, Rechtschreibung und Struktur haben wir Anthropic Claude, Lovable, Google Gemini und ChatGPT als Schreibhilfe genutzt. Die Inhalte selbst stammen von uns: unsere Geschichte, Preise, Produkte und Partner. Kein Text wird ungeprüft veröffentlicht.",
  },
  {
    q: "Warum nutzt ihr überhaupt KI?",
    a: "Wir sind ein kleines Familienunternehmen, kein Werbestudio. KI hilft uns, eine einladend aussehende Website und verständlich formulierte Texte zu erstellen, ohne ein teures Agenturteam zu beschäftigen.",
  },
  {
    q: "Werden meine Daten an KI-Systeme weitergegeben?",
    a: "Nein. Auf dieser Website läuft kein KI-Chatbot und keine automatisierte Entscheidungsfindung. Personenbezogene Daten unserer Gäste geben wir nicht in KI-Systeme ein.",
  },
  {
    q: "Wer ist verantwortlich, wenn ein KI-generiertes Bild oder ein Text fehlerhaft ist?",
    a: "Die redaktionelle Verantwortung liegt ausschließlich bei uns als Menschen, namentlich bei Eugen Schall (verantwortlich gemäß § 18 Abs. 2 MStV). Jeder Text und jedes Bild wird vor der Veröffentlichung von uns gelesen, geprüft und freigegeben. Sollte dir ein Fehler auffallen, sag uns Bescheid, wir korrigieren ihn schnellstmöglich.",
  },
];

const KiTransparenz = () => {
  return (
    <Layout>
      <SEO
        title="KI-Transparenz, Bistro Boxenstopp"
        description="Wie wir künstliche Intelligenz für Bilder und Texte einsetzen: Kennzeichnung, eingesetzte Werkzeuge, menschliche redaktionelle Verantwortung und Datenschutz."
        path="/ki-transparenz"
      />

      <section id="ki-transparenz" className="pt-28 pb-16 md:pt-32 md:pb-20 bg-background scroll-mt-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="rounded-2xl border border-bronze/30 bg-card p-8 md:p-10 shadow-sm">
            <p className="text-bronze font-medium tracking-[0.2em] uppercase text-xs mb-2">
              Transparenz
            </p>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Wie wir künstliche Intelligenz einsetzen
            </h1>

            <Link
              to="/ki-checkliste"
              className="group mb-6 flex items-start gap-4 rounded-xl border border-bronze/40 bg-secondary/40 px-5 py-4 transition-colors hover:bg-secondary/70"
            >
              <span className="mt-0.5 text-bronze text-xl leading-none">✓</span>
              <span>
                <span className="block font-semibold text-foreground">
                  Unsere KI-Konformitäts-Checkliste zum EU AI Act
                </span>
                <span className="block text-sm text-muted-foreground">
                  Alle Punkte auf einer Seite: Kennzeichnung, eingesetzte Werkzeuge,
                  menschliche Verantwortung, Datenschutz und Urheberrecht.
                </span>
                <span className="mt-1 inline-block text-sm font-semibold text-bronze underline underline-offset-2">
                  Checkliste ansehen →
                </span>
              </span>
            </Link>

            <a
              href="/ki-konformitaets-checkliste-boxenstopp.pdf"
              download
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-bronze px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              Checkliste als PDF herunterladen
            </a>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Wir sind ein kleines Familienunternehmen, kein Werbestudio. Damit unsere Website
                trotzdem einladend aussieht und verständlich geschrieben ist, nutzen wir an
                manchen Stellen künstliche Intelligenz. Das sagen wir offen, denn wir finden:
                Transparenz gehört zu ehrlicher Gastronomie genauso wie eine ehrliche Speisekarte.
              </p>

              <div>
                <h2 className="font-serif text-lg font-semibold text-foreground mb-2">Bilder</h2>
                <p>
                  Viele Fotos von unserem Bistro, unseren Räumen, der Terrasse und unseren
                  Speisen sind echte Aufnahmen. Ein Teil der Stimmungsbilder wurde jedoch mit
                  KI erstellt oder nachbearbeitet. Immer dann, wenn auf einem KI-Bild
                  realistisch aussehende Menschen zu sehen sind, findest du daneben ein kleines
                  Sternchen (*), das dich direkt zum ausführlichen KI-Hinweis führt. In unserer
                  Bildergalerie steht dieser Hinweis als Fußnote unter den Bildern. Auf keinem
                  KI-Bild sind reale, identifizierbare Personen abgebildet, es handelt sich
                  ausschließlich um fiktive Personen oder Szenen ohne erkennbare Gesichter.
                  Die Bildaufträge haben wir mit Anthropic Claude formuliert und über
                  Higgsfield AI umgesetzt, immer mit der ausdrücklichen Vorgabe, keine realen
                  Menschen abzubilden. Auch unser Logo ist ein KI-Entwurf, erstellt mit ChatGPT.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg font-semibold text-foreground mb-2">Texte</h2>
                <p>
                  Für Entwürfe, Formulierungen, Rechtschreibung und Struktur einzelner Texte
                  haben wir KI-Werkzeuge als Schreibhilfe genutzt. Die Inhalte selbst stammen
                  von uns: unsere Geschichte, unsere Preise, unsere Produkte, unsere Partner.
                  Genutzt haben wir dafür Anthropic Claude, Lovable, Google Gemini und ChatGPT.
                  Kein Text wird ungeprüft veröffentlicht.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Menschliche Verantwortung
                </h2>
                <p>
                  Die redaktionelle Verantwortung für alle Inhalte dieser Website liegt
                  ausschließlich bei uns als Menschen, namentlich bei Eugen Schall
                  (verantwortlich gemäß § 18 Abs. 2 MStV). Jeder Text und jedes Bild wird vor
                  der Veröffentlichung von uns gelesen, geprüft und freigegeben. Angaben zu
                  Preisen, Zutaten, Allergenen und Öffnungszeiten pflegen wir selbst und
                  kontrollieren sie manuell. Der Quellcode der Website liegt bei GitHub, gehostet
                  wird sie über Cloudflare. Sollte dir trotzdem ein Fehler auffallen, sag uns
                  bitte Bescheid, wir korrigieren ihn schnellstmöglich.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Deine Daten
                </h2>
                <p>
                  Auf dieser Website läuft kein KI-Chatbot und keine automatisierte
                  Entscheidungsfindung. Personenbezogene Daten unserer Gäste geben wir nicht in
                  KI-Systeme ein.
                </p>
              </div>

              {/* KI-FAQ */}
              <div className="pt-4">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Häufige Fragen zur KI-Nutzung
                </h2>
                <div className="space-y-3">
                  {faq.map((item) => (
                    <details
                      key={item.q}
                      className="group rounded-lg border border-bronze/30 bg-secondary/30 px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex items-center justify-between cursor-pointer font-medium text-foreground list-none">
                        {item.q}
                        <span className="text-bronze transition-transform group-open:rotate-45 text-2xl leading-none">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-muted-foreground leading-relaxed">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>

              {/* Änderungsprotokoll */}
              <div className="pt-4">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Änderungsprotokoll der KI-Hinweise
                </h2>
                <p className="text-sm mb-4">
                  Damit du nachvollziehen kannst, wann wir unsere Texte und
                  Transparenzhinweise überarbeitet haben, dokumentieren wir die Änderungen hier:
                </p>
                <ul className="space-y-3">
                  {changelog.map((entry) => (
                    <li
                      key={entry.text}
                      className="flex flex-col gap-1 rounded-lg border border-bronze/20 bg-secondary/20 px-5 py-4 sm:flex-row sm:gap-5"
                    >
                      <time className="shrink-0 font-medium text-bronze sm:w-24">
                        {entry.date}
                      </time>
                      <span className="text-muted-foreground leading-relaxed">{entry.text}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm mt-4">
                  Letzte Überarbeitung dieser Seite: 05.08.2026.
                </p>
              </div>

              <p className="text-sm">
                Rechtlicher Hintergrund: Art. 50 der Verordnung (EU) 2024/1689 („EU AI Act").
                Alle Details, inklusive der eingesetzten Werkzeuge, findest du in unserer{" "}
                <Link
                  to="/datenschutz#ki-hinweis"
                  className="font-semibold underline underline-offset-2 hover:text-primary transition-colors"
                >
                  Datenschutzerklärung, Abschnitt 16
                </Link>
                {" "}sowie im{" "}
                <Link
                  to="/impressum"
                  className="font-semibold underline underline-offset-2 hover:text-primary transition-colors"
                >
                  Impressum
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KiTransparenz;
