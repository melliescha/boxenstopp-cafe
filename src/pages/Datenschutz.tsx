import Layout from "@/components/Layout";

const Datenschutz = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p>
              Der Schutz deiner persönlichen Daten ist uns wichtig. Nachfolgend informieren wir dich
              über die Erhebung und Verwendung persönlicher Daten im Rahmen der Nutzung unserer Website.
            </p>
            <p className="font-medium text-foreground">Verantwortlicher</p>
            <p>
              Bistro Boxenstopp<br />
              Südhang 1<br />
              88145 Hergatz<br />
              E-Mail: info@bistro-boxenstopp.de
            </p>
            <p className="text-sm italic mt-8">
              Diese Seite ist ein Platzhalter. Bitte ergänze die vollständige Datenschutzerklärung
              gemäß DSGVO.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Datenschutz;
