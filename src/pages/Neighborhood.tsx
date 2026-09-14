import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/config/social";
import houseImage from "@/assets/aussenansicht-haus.jpg";
import entranceImage from "@/assets/gallery/aussen-terrasse-eingang.jpg";
import fitesImage from "@/assets/gallery/aussen-fites-fassade.jpg";
import Wegweiser from "@/components/Wegweiser";

const Neighborhood = () => (
  <Layout>
    <SEO
      title="Bistro in Hergatz-Wohmbrechts | Treffpunkt Nachbarschaft"
      description="Das Bistro Hergatz für die Nachbarschaft im Westallgäu: Bistro Boxenstopp und FITES Allgäu im Wohnhaus der Inhaberfamilie in Wohmbrechts, ein Ort für Kaffee, Begegnung und Bewegung."
      path="/nachbarschaft"
      image="/og-image.jpg"
    />

    <section className="relative min-h-[68svh] overflow-hidden">
      <img
        src={houseImage}
        alt="Das Wohnhaus der Inhaberfamilie mit Bistro Boxenstopp und FITES Allgäu in Hergatz"
        className="absolute inset-0 h-full w-full object-cover object-center"
        width={1600}
        height={1200}
      />
      <div className="absolute inset-0 bg-primary/65" />
      <div className="relative z-10 mx-auto flex min-h-[68svh] max-w-6xl items-end px-6 pb-12 pt-28 md:pb-20">
        <div className="max-w-4xl text-primary-foreground">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">An unsere Nachbarn in Hergatz</p>
          <h1 className="font-serif text-4xl font-normal leading-tight sm:text-5xl md:text-7xl">
            Wir laden euch in unser Zuhause ein. Wortwörtlich.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-primary-foreground/90 md:text-xl">
            Unser Café liegt in unserem Wohnhaus in Hergatz-Wohmbrechts. Genau hier möchten wir mit dem Bistro Boxenstopp und FITES Allgäu einen Ort schaffen, der Hergatz und das Westallgäu zusammenbringt.
          </p>
        </div>
      </div>
    </section>

    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Liebe Nachbarinnen und Nachbarn</p>
          <h2 className="font-serif text-3xl font-normal leading-tight text-foreground md:text-5xl">Kommt vorbei, lernt uns kennen und macht diesen Ort mit uns lebendig.</h2>
          <div className="mt-7 space-y-5 text-lg font-light leading-8 text-muted-foreground">
            <p>
              Vielleicht seid ihr schon oft an unserem Haus vorbeigegangen und habt euch gefragt, ob man hier wirklich einfach hereinkommen darf. Ja, unbedingt. Die Treppe führt hinunter zu unserer Terrasse und direkt zu euch ins Bistro.
            </p>
            <p>
              Wir wünschen uns einen Treffpunkt für Wohmbrechts und ganz Hergatz. Einen Platz für den Kaffee zwischendurch, ein Gespräch nach Feierabend, gemeinsames Training und neue Bekanntschaften direkt in der Nachbarschaft.
            </p>
            <p className="font-medium text-foreground">
              Ihr seid nicht nur Gäste. Ihr seid die Menschen, für die wir diesen Ort bauen.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/kontakt">Kommt uns besuchen</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={socialLinks.googleMaps} target="_blank" rel="noopener noreferrer">Route planen</a>
            </Button>
          </div>
        </div>
        <img
          src={entranceImage}
          alt="Der Eingang zur Terrasse und zum Bistro Boxenstopp im Wohnhaus in Hergatz"
          className="aspect-[4/5] w-full object-cover"
          loading="lazy"
          width={1440}
          height={1920}
        />
      </div>
    </section>

    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Unsere Vision für Hergatz</p>
          <h2 className="font-serif text-3xl font-normal leading-tight text-foreground md:text-5xl">Genuss und Bewegung unter einem Dach, Gemeinschaft direkt vor der Haustür.</h2>
        </div>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          <article className="bg-background p-7 md:p-9">
            <p className="text-sm font-semibold text-primary">Bistro Boxenstopp</p>
            <h3 className="mt-3 font-serif text-2xl font-normal text-foreground">Zusammensitzen</h3>
            <p className="mt-4 leading-7 text-muted-foreground">Guter Kaffee, ehrliches Essen und Zeit für Gespräche, ohne Hektik und ohne weite Wege.</p>
          </article>
          <article className="bg-background p-7 md:p-9">
            <p className="text-sm font-semibold text-primary">FITES Allgäu</p>
            <h3 className="mt-3 font-serif text-2xl font-normal text-foreground">Gemeinsam bewegen</h3>
            <p className="mt-4 leading-7 text-muted-foreground">Persönliches Training in kleinen Gruppen, mit Menschen aus Hergatz und der Umgebung.</p>
          </article>
          <article className="bg-background p-7 md:p-9">
            <p className="text-sm font-semibold text-primary">Unser Zuhause</p>
            <h3 className="mt-3 font-serif text-2xl font-normal text-foreground">Offene Türen</h3>
            <p className="mt-4 leading-7 text-muted-foreground">Privat und öffentlich ganz nah beieinander. Familiär, persönlich und so, wie gute Nachbarschaft sein sollte.</p>
          </article>
        </div>
        <div className="mt-12 grid gap-8 border-t border-border pt-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <img src={fitesImage} alt="FITES Allgäu und Bistro Boxenstopp im gemeinsamen Gebäude in Hergatz" className="aspect-[4/3] w-full object-cover" loading="lazy" width={1440} height={1920} />
          <blockquote className="font-serif text-2xl font-normal leading-relaxed text-foreground md:text-4xl">
            „Ein Haus, zwei Herzensprojekte und eine Idee: einen Ort schaffen, an dem unsere Nachbarschaft zusammenkommt.“
          </blockquote>
        </div>
      </div>
    </section>

    <Wegweiser />
  </Layout>
);

export default Neighborhood;