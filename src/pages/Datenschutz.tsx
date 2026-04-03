import Layout from "@/components/Layout";

const Datenschutz = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>
          <div className="prose prose-lg text-muted-foreground space-y-6">
            <div className="bg-warm-gold/10 border border-warm-gold/30 rounded-lg p-4">
              <p className="text-sm italic text-foreground">
                Diese Datenschutzerklärung wird noch erstellt. Bitte nutzen Sie den Datenschutz-Generator von{" "}
                <a href="https://datenschutz-generator.de" target="_blank" rel="noopener noreferrer" className="text-bronze underline">
                  datenschutz-generator.de
                </a>
                , um eine DSGVO-konforme Erklärung zu generieren.
              </p>
            </div>

            <div>
              <p className="font-medium text-foreground mb-2">Verantwortlicher:</p>
              <p>
                Bistro Boxenstopp<br />
                Südhang 1<br />
                88145 Hergatz<br />
                E-Mail: [PLATZHALTER]
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

export default Datenschutz;
