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
                [Name des Betreibers]<br />
                Bistro Boxenstopp<br />
                Südhang 1<br />
                88145 Hergatz
              </p>
            </div>

            <div>
              <p className="font-medium text-foreground mb-2">Kontakt:</p>
              <p>
                Telefon: [PLATZHALTER]<br />
                E-Mail: [PLATZHALTER]
              </p>
            </div>

            <div>
              <p className="font-medium text-foreground mb-2">Umsatzsteuer-ID:</p>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: [PLATZHALTER]</p>
            </div>

            <div>
              <p className="font-medium text-foreground mb-2">Aufsichtsbehörde:</p>
              <p>[Zuständiges Landratsamt / Ordnungsamt — PLATZHALTER]</p>
            </div>

            <div>
              <p className="font-medium text-foreground mb-2">Verbraucherstreitbeilegung:</p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div className="bg-warm-gold/10 border border-warm-gold/30 rounded-lg p-4 mt-8">
              <p className="text-sm italic text-foreground">
                Dieser Text ist ein Platzhalter. Bitte durch ein rechtssicheres Impressum ersetzen
                (z.B. über{" "}
                <a href="https://www.impressum-generator.de" target="_blank" rel="noopener noreferrer" className="text-bronze underline">
                  impressum-generator.de
                </a>).
              </p>
            </div>

            <p className="text-xs text-muted-foreground/60 mt-8">
              Stand: [Datum]. Diese Seite wird regelmäßig aktualisiert.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
