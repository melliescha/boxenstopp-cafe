import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const KiTransparenz = () => {
  return (
    <Layout>
      <SEO
        title="KI-Hinweis, Bistro Boxenstopp"
        description="Kurzer Hinweis, wie wir künstliche Intelligenz für Bilder und Texte einsetzen und wer die redaktionelle Verantwortung trägt."
        path="/ki-transparenz"
      />

      <section className="pt-28 pb-20 md:pt-32 bg-background">
        <div className="container mx-auto px-6 max-w-2xl">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            KI-Hinweis
          </h1>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Ein Teil der Bilder und Texte dieser Website wurde mit Hilfe künstlicher Intelligenz
              erstellt oder bearbeitet. Solche Bilder sind mit einem Sternchen (*) gekennzeichnet.
            </p>
            <p>
              Auf KI-generierten Motiven sind keine realen, identifizierbaren Personen abgebildet.
              Auf dieser Website läuft kein KI-Chatbot, es findet keine automatisierte
              Entscheidungsfindung statt und es werden keine personenbezogenen Daten unserer Gäste
              in KI-Systeme eingegeben.
            </p>
            <p>
              Alle Inhalte werden vor der Veröffentlichung von uns geprüft und freigegeben. Die
              redaktionelle Verantwortung liegt bei Eugen Schall (§ 18 Abs. 2 MStV). Details stehen
              in der{" "}
              <Link to="/datenschutz#ki-hinweis" className="underline underline-offset-2 hover:text-warm-gold">
                Datenschutzerklärung
              </Link>{" "}
              und im{" "}
              <Link to="/impressum" className="underline underline-offset-2 hover:text-warm-gold">
                Impressum
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KiTransparenz;
