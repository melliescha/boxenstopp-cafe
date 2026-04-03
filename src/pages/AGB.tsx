import Layout from "@/components/Layout";

const AGB = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Allgemeine Geschäftsbedingungen</h1>
          <div className="prose prose-lg text-muted-foreground space-y-6">
            <div className="bg-warm-gold/10 border border-warm-gold/30 rounded-lg p-4">
              <p className="text-sm italic text-foreground">
                Die AGB werden noch erstellt. Für den Onlineverkauf von Gutscheinen empfehlen wir die
                Erstellung über einen AGB-Generator (z.B.{" "}
                <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-bronze underline">
                  e-recht24.de
                </a>{" "}
                oder IT-Recht Kanzlei).
              </p>
            </div>

            <div>
              <p className="font-medium text-foreground mb-2">Die AGB sollten mindestens folgende Punkte regeln:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Geltungsbereich</li>
                <li>Vertragsschluss (Gutscheinbestellung)</li>
                <li>Preise und Zahlungsbedingungen</li>
                <li>Gutschein-Gültigkeit (3 Jahre gesetzlich)</li>
                <li>Einlösebedingungen</li>
                <li>Haftung</li>
                <li>Anwendbares Recht</li>
              </ul>
            </div>

            <div className="bg-warm-gold/10 border border-warm-gold/30 rounded-lg p-4">
              <p className="text-sm italic text-foreground">
                Bitte lassen Sie die AGB von einem Anwalt prüfen oder nutzen Sie einen spezialisierten Generator.
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

export default AGB;
