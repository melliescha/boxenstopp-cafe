import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const navy = "#164472";
const bronze = "#9E7C4E";
const warmBrown = "#6B4A2E";
const cream = "#FEF4EC";

type Item = {
  title: string;
  status: string;
  detail: string;
};

const sections: { heading: string; intro?: string; items: Item[] }[] = [
  {
    heading: "1. Unsere Rolle nach dem EU AI Act",
    intro:
      "Wir entwickeln keine KI-Systeme. Wir nutzen fertige Werkzeuge für Bilder und Texte und sind damit Betreiber (Deployer) im Sinne der Verordnung (EU) 2024/1689.",
    items: [
      {
        title: "Einordnung als Betreiber (Deployer)",
        status: "erfüllt",
        detail:
          "Bistro Boxenstopp, Eugen Schall, setzt KI ausschließlich zur Erstellung von Website-Inhalten ein. Kein Eigenbau, kein Weiterverkauf, kein Hochrisiko-Einsatz.",
      },
      {
        title: "Kein verbotener Einsatz nach Art. 5",
        status: "erfüllt",
        detail:
          "Keine biometrische Erkennung, kein Social Scoring, keine Emotionserkennung, keine manipulative Beeinflussung von Gästen.",
      },
    ],
  },
  {
    heading: "2. Transparenzpflichten (Art. 50)",
    items: [
      {
        title: "Kennzeichnung KI-generierter Bilder",
        status: "erfüllt",
        detail:
          "Bilder, die vollständig oder teilweise mit KI erstellt wurden, tragen ein Sternchen (*), das zum Erklärhinweis führt. In der Galerie steht zusätzlich ein Sammelhinweis.",
      },
      {
        title: "Bildnachweis je Bild",
        status: "erfüllt",
        detail:
          "In der Bildergalerie lässt sich pro Bild nachvollziehen, ob es KI-generiert ist oder ein echtes Foto mit Einwilligung der abgebildeten Personen.",
      },
      {
        title: "Hinweis auf KI-unterstützte Texte",
        status: "erfüllt",
        detail:
          "Der Abschnitt „Wie wir künstliche Intelligenz einsetzen“ auf der Seite Über uns erklärt, wofür KI als Schreibhilfe genutzt wird.",
      },
      {
        title: "Offenlegung der eingesetzten Werkzeuge",
        status: "erfüllt",
        detail:
          "Bilder: Higgsfield AI, Bildaufträge formuliert mit Anthropic Claude. Logo: ChatGPT. Texte: Claude, Lovable, Google Gemini, ChatGPT. Code: GitHub. Hosting: Cloudflare.",
      },
      {
        title: "Kein KI-Chatbot ohne Kennzeichnung",
        status: "nicht anwendbar",
        detail:
          "Auf dieser Website läuft kein Chatbot und keine automatisierte Interaktion mit Gästen.",
      },
    ],
  },
  {
    heading: "3. Menschliche Verantwortung und Kontrolle",
    items: [
      {
        title: "Benannte verantwortliche Person",
        status: "erfüllt",
        detail:
          "Eugen Schall ist inhaltlich verantwortlich, auch gemäß § 18 Abs. 2 MStV. Angaben im Impressum.",
      },
      {
        title: "Freigabe vor Veröffentlichung",
        status: "erfüllt",
        detail:
          "Kein Text und kein Bild geht ungeprüft online. Jeder Inhalt wird von uns gelesen, korrigiert und freigegeben.",
      },
      {
        title: "Korrekturweg für Gäste",
        status: "erfüllt",
        detail:
          "Über die Kontaktseite kann jederzeit ein Fehler gemeldet werden. Wir korrigieren schnellstmöglich.",
      },
      {
        title: "Änderungsprotokoll",
        status: "erfüllt",
        detail:
          "Überarbeitungen unserer KI-Hinweise sind mit Datum im Abschnitt „Wie wir künstliche Intelligenz einsetzen“ dokumentiert.",
      },
    ],
  },
  {
    heading: "4. Datenschutz und Persönlichkeitsrechte",
    items: [
      {
        title: "Keine Gästedaten in KI-Systemen",
        status: "erfüllt",
        detail:
          "Personenbezogene Daten von Gästen werden nicht in KI-Werkzeuge eingegeben. Es findet keine automatisierte Entscheidungsfindung statt.",
      },
      {
        title: "Keine realen Personen in KI-Bildern",
        status: "erfüllt",
        detail:
          "Die Bildaufträge waren ausdrücklich so formuliert, dass keine realen, identifizierbaren Personen dargestellt werden.",
      },
      {
        title: "Einwilligung bei echten Fotos",
        status: "erfüllt",
        detail:
          "Fotos mit erkennbaren Personen werden nur mit Einwilligung der Abgebildeten veröffentlicht.",
      },
      {
        title: "Keine externen Skripte ohne Zustimmung",
        status: "erfüllt",
        detail:
          "Schriftarten werden lokal ausgeliefert, Google Maps ist als Zwei-Klick-Lösung eingebunden.",
      },
    ],
  },
  {
    heading: "5. Urheberrecht",
    items: [
      {
        title: "Keine fremden Werke ohne Rechte",
        status: "erfüllt",
        detail:
          "Wir verwenden eigene Fotos, KI-Bilder aus eigenen Aufträgen sowie Material von Partnern mit deren Zustimmung.",
      },
      {
        title: "Hinweis zum Schutzumfang von KI-Bildern",
        status: "erfüllt",
        detail:
          "Rein KI-generierte Bilder genießen in Deutschland regelmäßig keinen urheberrechtlichen Schutz. Details stehen im Impressum unter Urheberrecht.",
      },
    ],
  },
  {
    heading: "6. Kompetenz und Überprüfung",
    items: [
      {
        title: "KI-Kompetenz im Team (Art. 4)",
        status: "erfüllt",
        detail:
          "Die eingesetzten Werkzeuge, ihre Grenzen und typische Fehlerquellen sind uns bekannt. Ergebnisse werden immer gegengelesen.",
      },
      {
        title: "Regelmäßige Prüfung der Hinweise",
        status: "laufend",
        detail:
          "Wir prüfen Kennzeichnungen und Rechtstexte bei jeder größeren Website-Änderung erneut.",
      },
      {
        title: "Automatisierte Kennzeichnungsprüfung",
        status: "erfüllt",
        detail:
          "Vor der Veröffentlichung prüft ein technischer Check, dass registrierte KI-Bilder mit Personen eine sichtbare Kennzeichnung tragen.",
      },
    ],
  },
];

const statusStyle = (status: string) => {
  if (status === "erfüllt") return { bg: "#E8F1E8", color: "#2F5D3A" };
  if (status === "laufend") return { bg: "#FBF0DD", color: warmBrown };
  return { bg: "#EAF0F6", color: navy };
};

const KiCheckliste = () => {
  return (
    <Layout>
      <SEO
        title="KI-Konformitäts-Checkliste, Bistro Boxenstopp"
        description="Unsere Checkliste zum EU AI Act: Kennzeichnung von KI-Bildern, eingesetzte Werkzeuge, menschliche Verantwortung und Datenschutz im Bistro Boxenstopp."
        path="/ki-checkliste"
      />
      <section style={{ backgroundColor: cream, paddingTop: 80, paddingBottom: 80 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 760 }}>
          <p
            className="font-sans"
            style={{ color: bronze, fontWeight: 700, fontSize: 14, letterSpacing: 1.5, marginBottom: 12 }}
          >
            TRANSPARENZ
          </p>
          <h1
            className="font-serif italic"
            style={{ color: navy, fontSize: "2.5rem", fontWeight: 700, marginBottom: 20 }}
          >
            KI-Konformitäts-Checkliste
          </h1>
          <p
            className="font-sans"
            style={{ color: warmBrown, fontSize: 17, lineHeight: 1.7, marginBottom: 12 }}
          >
            Diese Seite fasst zusammen, welche Pflichten aus der Verordnung (EU) 2024/1689
            („EU AI Act“) für unsere Website gelten und wie wir sie umsetzen. Sie ist als
            verständliche Selbstauskunft gedacht, nicht als Rechtsberatung.
          </p>
          <div
            style={{
              border: `1px solid ${bronze}66`,
              borderRadius: 12,
              padding: "16px 20px",
              backgroundColor: "#FFFFFFAA",
              marginBottom: 40,
            }}
          >
            <div className="flex flex-wrap items-center gap-3" style={{ marginBottom: 8 }}>
              <span
                className="font-sans"
                style={{
                  backgroundColor: navy,
                  color: cream,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 0.8,
                  borderRadius: 999,
                  padding: "4px 12px",
                }}
              >
                {checklistVersion.version}
              </span>
              <span className="font-sans" style={{ color: navy, fontWeight: 700, fontSize: 15 }}>
                Stand: {checklistVersion.date}
              </span>
              <span className="font-sans" style={{ color: bronze, fontSize: 14 }}>
                verantwortlich: Eugen Schall
              </span>
            </div>
            <p className="font-sans" style={{ color: warmBrown, fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              {checklistVersion.nextReview}
            </p>
            <a
              href={checklistVersion.pdf}
              target="_blank"
              rel="noopener"
              className="font-sans underline underline-offset-2"
              style={{ color: navy, fontSize: 14, fontWeight: 700, display: "inline-block", marginTop: 10 }}
            >
              Checkliste als PDF herunterladen ({checklistVersion.version}, Stand {checklistVersion.date})
            </a>
          </div>


          {sections.map((section) => (
            <div key={section.heading} style={{ marginBottom: 40 }}>
              <h2
                className="font-sans"
                style={{ color: bronze, fontWeight: 700, fontSize: 20, marginBottom: 10 }}
              >
                {section.heading}
              </h2>
              {section.intro && (
                <p
                  className="font-sans"
                  style={{ color: warmBrown, fontSize: 16, lineHeight: 1.7, marginBottom: 16 }}
                >
                  {section.intro}
                </p>
              )}
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {section.items.map((item) => {
                  const s = statusStyle(item.status);
                  return (
                    <li
                      key={item.title}
                      style={{
                        border: `1px solid ${bronze}33`,
                        borderRadius: 12,
                        padding: "16px 20px",
                        marginBottom: 12,
                        backgroundColor: "#FFFFFF80",
                      }}
                    >
                      <div className="flex flex-wrap items-center gap-3" style={{ marginBottom: 6 }}>
                        <span
                          className="font-sans"
                          style={{ color: navy, fontWeight: 700, fontSize: 16 }}
                        >
                          {item.title}
                        </span>
                        <span
                          className="font-sans"
                          style={{
                            backgroundColor: s.bg,
                            color: s.color,
                            fontSize: 12,
                            fontWeight: 700,
                            borderRadius: 999,
                            padding: "3px 10px",
                          }}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p
                        className="font-sans"
                        style={{ color: warmBrown, fontSize: 15, lineHeight: 1.7, margin: 0 }}
                      >
                        {item.detail}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div
            style={{
              border: `1px solid ${bronze}55`,
              borderRadius: 12,
              padding: "20px 24px",
              backgroundColor: "#FFFFFFAA",
            }}
          >
            <p
              className="font-sans"
              style={{ color: navy, fontWeight: 700, fontSize: 16, marginBottom: 8 }}
            >
              Mehr Details
            </p>
            <p className="font-sans" style={{ color: warmBrown, fontSize: 15, lineHeight: 1.8 }}>
              Ausführliche Erläuterungen findest du im Abschnitt{" "}
              <Link to="/ueber-uns#ki-transparenz" style={{ color: navy }} className="underline underline-offset-2">
                „Wie wir künstliche Intelligenz einsetzen“
              </Link>
              , in der{" "}
              <Link to="/datenschutz#ki-hinweis" style={{ color: navy }} className="underline underline-offset-2">
                Datenschutzerklärung, Abschnitt 16
              </Link>{" "}
              sowie im{" "}
              <Link to="/impressum" style={{ color: navy }} className="underline underline-offset-2">
                Impressum
              </Link>
              . Fällt dir ein Fehler auf, sag uns über die{" "}
              <Link to="/kontakt" style={{ color: navy }} className="underline underline-offset-2">
                Kontaktseite
              </Link>{" "}
              Bescheid.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KiCheckliste;
