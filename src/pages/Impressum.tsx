import Layout from "@/components/Layout";

const Impressum = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Impressum</h1>
          <div className="prose prose-lg text-muted-foreground space-y-6">
            <div>
              <p className="font-medium text-foreground mb-2">Angaben gemäß § 5 DDG:</p>
              <p>
                Inhaber: Eugen Schall<br />
                Bistro Boxenstopp<br />
                Südhang 1<br />
                88145 Hergatz<br />
                Deutschland
              </p>
            </div>

            <div>
              <p className="font-medium text-foreground mb-2">Kontakt:</p>
              <p>
                Telefon: 0171 6226201<br />
                E-Mail: fit.es@icloud.com
              </p>
            </div>

            <div>
              <p className="font-medium text-foreground mb-2">Rechtsform:</p>
              <p>Einzelunternehmen</p>
            </div>

            <div>
              <p className="font-medium text-foreground mb-2">Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV:</p>
              <p>Eugen Schall, Anschrift wie oben</p>
            </div>

            <div>
              <p className="font-medium text-foreground mb-2">Verbraucherstreitbeilegung:</p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
