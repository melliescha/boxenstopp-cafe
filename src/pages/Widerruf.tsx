import Layout from "@/components/Layout";

const Widerruf = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Widerrufsbelehrung</h1>
          <div className="prose prose-lg text-muted-foreground space-y-6">
            <div className="bg-warm-gold/10 border border-warm-gold/30 rounded-lg p-4">
              <p className="text-sm italic text-foreground">
                Die Widerrufsbelehrung wird noch erstellt. Sie ist Pflicht für den Onlineverkauf von Gutscheinen.
              </p>
            </div>

            <div>
              <p className="font-medium text-foreground mb-2">Kernpunkte:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>14-tägiges Widerrufsrecht ab Kaufdatum</li>
                <li>Muster-Widerrufsformular muss bereitgestellt werden</li>
                <li>Erstattung innerhalb von 14 Tagen nach Widerruf</li>
              </ul>
            </div>

            <div className="bg-warm-gold/10 border border-warm-gold/30 rounded-lg p-4">
              <p className="text-sm italic text-foreground">
                Bitte lassen Sie die Widerrufsbelehrung von einem Anwalt prüfen oder nutzen Sie einen spezialisierten Generator.
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

export default Widerruf;
