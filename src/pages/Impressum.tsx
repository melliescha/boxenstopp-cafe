import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const navy = "#164472";
const bronze = "#9E7C4E";
const warmBrown = "#6B4A2E";
const cream = "#FEF4EC";

const linkClass =
  "underline-offset-2 hover:underline transition-colors";

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 24 }}>
    <p
      className="font-sans"
      style={{ color: bronze, fontWeight: 700, fontSize: 16, marginBottom: 8 }}
    >
      {title}
    </p>
    <div
      className="font-sans"
      style={{ color: warmBrown, fontSize: 16, lineHeight: 1.7 }}
    >
      {children}
    </div>
  </div>
);

const Impressum = () => {
  return (
    <Layout>
      <SEO title="Impressum, Bistro Boxenstopp" description="Impressum und Anbieterkennzeichnung." path="/impressum" />
      <section style={{ backgroundColor: cream, paddingTop: 80, paddingBottom: 80 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 720 }}>
          <h1
            className="font-serif italic"
            style={{ color: navy, fontSize: "2.5rem", fontWeight: 700, marginBottom: 32 }}
          >
            Impressum
          </h1>

          <h2
            className="font-sans"
            style={{ color: bronze, fontWeight: 700, fontSize: 20, marginBottom: 24 }}
          >
            Angaben gemäß § 5 DDG
          </h2>

          <Block title="Anbieter:">
            Eugen Schall<br />
            FITES, Bistro Boxenstopp<br />
            (Bistro Boxenstopp ist ein Geschäftszweig des Einzelunternehmens FITES)<br />
            Südhang 1<br />
            88145 Hergatz<br />
            Deutschland
          </Block>

          <Block title="Kontakt:">
            Telefon:{" "}
            <a
              href="tel:+491716226201"
              className={linkClass}
              style={{ color: navy }}
              onMouseEnter={(e) => (e.currentTarget.style.color = bronze)}
              onMouseLeave={(e) => (e.currentTarget.style.color = navy)}
            >
              0171 6226201
            </a>
            <br />
            E-Mail:{" "}
            <a
              href="mailto:fit.es@icloud.com"
              className={linkClass}
              style={{ color: navy }}
              onMouseEnter={(e) => (e.currentTarget.style.color = bronze)}
              onMouseLeave={(e) => (e.currentTarget.style.color = navy)}
            >
              fit.es@icloud.com
            </a>
          </Block>

          <Block title="Rechtsform:">Einzelunternehmen</Block>

          <Block title="Hinweis gemäß § 19 UStG:">
            Als Kleinunternehmer im Sinne von § 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet
            und ausgewiesen.
          </Block>

          <Block title="Aufsichtsbehörde (Lebensmittelüberwachung):">
            Landratsamt Lindau (Bodensee)<br />
            Bregenzer Str. 35<br />
            88131 Lindau
          </Block>

          <Block title="Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV:">
            Eugen Schall (Anschrift wie oben)
          </Block>

          <Block title="Verbraucherstreitbeilegung / Online-Streitbeilegung:">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit, die Sie unter{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
              style={{ color: navy }}
              onMouseEnter={(e) => (e.currentTarget.style.color = bronze)}
              onMouseLeave={(e) => (e.currentTarget.style.color = navy)}
            >
              https://ec.europa.eu/consumers/odr/
            </a>{" "}
            finden.
            <br />
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </Block>

          <Block title="Haftungshinweis:">
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
            externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren
            Betreiber verantwortlich.
          </Block>

          <Block title="Urheberrecht:">
            Alle Texte, Layouts, Grafiken und Bilder dieser Website sind, soweit nicht anders
            gekennzeichnet, urheberrechtlich geschützt bzw. stehen uns zur Nutzung zu. Eine
            Verwendung, Vervielfältigung oder Bearbeitung außerhalb der Grenzen des
            Urheberrechts bedarf unserer vorherigen schriftlichen Zustimmung. Downloads und
            Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
            gestattet.
          </Block>

          <Block title="Markenhinweis:">
            Alle auf dieser Website genannten Marken-, Produkt- und Firmennamen sind Eigentum der
            jeweiligen Rechteinhaber. Die Nennung erfolgt ausschließlich beschreibend, um unser
            Angebot zu erläutern (§ 23 MarkenG), und begründet keine Partnerschaft, Empfehlung
            oder Genehmigung durch die Markeninhaber. Fremde Wort- und Bildmarken (Logos) werden
            auf dieser Website nicht verwendet.
          </Block>



          <Block title="Bildnachweise und KI-generierte Bilder:">
            Reale Fotos: Bistro Boxenstopp / Eugen Schall sowie Bildmaterial unserer Partner,
            das uns mit deren Einverständnis zur Nutzung überlassen wurde (Marken und Logos
            bleiben Eigentum der jeweiligen Rechteinhaber).<br />
            Unser Logo wurde mit ChatGPT (OpenAI) KI-generiert. KI-Bilder wurden über
            Higgsfield AI erstellt, die Prompts dazu mit Anthropic Claude. Sie zeigen
            überwiegend fiktive Personen oder Szenen ohne erkennbare Gesichter. Gäste,
            Mitarbeitende oder Dritte werden darauf nicht abgebildet.<br />
            Ein Teil der gezeigten Bilder wurde mit Hilfe künstlicher Intelligenz erstellt oder
            bearbeitet. Diese Bilder sind mit einem „AI"-Rundlogo gekennzeichnet bzw. am Ende der
            Bildergalerie und im Footer ausgewiesen (Transparenzhinweis gemäß Art. 50 der
            Verordnung (EU) 2024/1689, „EU AI Act"). Ausnahme: Einige KI-Bilder zeigen uns selbst
            (Eugen & Helena Schall, Oliver Schall, Melanie Dincdemir) als reale Personen — im Sinne
            von Art. 3 Nr. 60 EU AI Act ein Deepfake, erstellt und verwendet mit ausdrücklicher
            eigener Einwilligung. Details dazu findest
            du in unserer{" "}
            <a
              href="/datenschutz#ki-hinweis"
              className={linkClass}
              style={{ color: navy }}
              onMouseEnter={(e) => (e.currentTarget.style.color = bronze)}
              onMouseLeave={(e) => (e.currentTarget.style.color = navy)}
            >
              Datenschutzerklärung, Abschnitt 16
            </a>
            .<br />
            Rein KI-generierte Bilder genießen nach deutschem Recht in der Regel keinen
            urheberrechtlichen Schutz, die Nutzung ohne unsere Zustimmung ist dennoch nicht
            erwünscht.
          </Block>

          <p
            className="font-sans"
            style={{ color: warmBrown, fontSize: 15, lineHeight: 1.7, marginTop: 32, fontStyle: "italic" }}
          >
            Stand: August 2026
          </p>

        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
