import Layout from "@/components/Layout";

const Impressum = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Impressum</h1>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p className="font-medium text-foreground">Angaben gemäß § 5 TMG</p>
            <p>
              Bistro Boxenstopp<br />
              Südhang 1<br />
              88145 Hergatz
            </p>
            <p>
              <strong className="text-foreground">Vertreten durch:</strong><br />
              Eugen Schall
            </p>
            <p>
              <strong className="text-foreground">Kontakt:</strong><br />
              Telefon: 08385 XXXXXX<br />
              E-Mail: info@bistro-boxenstopp.de
            </p>
            <p className="text-sm italic mt-8">
              Diese Seite ist ein Platzhalter. Bitte ergänze die vollständigen Angaben
              gemäß den gesetzlichen Vorgaben.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
