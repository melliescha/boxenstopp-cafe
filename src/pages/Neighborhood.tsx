import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/config/social";
import houseImage from "@/assets/aussenansicht-haus.jpg";
import entranceImage from "@/assets/gallery/aussen-terrasse-eingang.jpg";
import fitesImage from "@/assets/gallery/aussen-fites-fassade.jpg";
import Wegweiser from "@/components/Wegweiser";

interface Nahziel {
  name: string;
  km: string;
}

interface GehStufe {
  zeit: string;
  titel: string;
  text: string;
  ziele: Nahziel[];
}

const gehStufen: GehStufe[] = [
  {
    zeit: "0 bis 10 Minuten",
    titel: "Direkt vor der Haustür",
    text: "Wer in Wohmbrechts wohnt, ist zu Fuß da, ohne das Auto anzurühren.",
    ziele: [
      { name: "Wohmbrechts, unser Dorf", km: "0 km" },
      { name: "Salzstadel an der Tiroler Salzstraße", km: "0,2 km" },
      { name: "Reutenmühle", km: "0,6 km" },
    ],
  },
  {
    zeit: "15 bis 20 Minuten",
    titel: "Der nächste Nachbarschaftskreis",
    text: "Drei Gehminuten pro Nachbarn, die mal vorbeikommen wollten.",
    ziele: [
      { name: "Schreckelberg", km: "1,1 km" },
      { name: "Möllen", km: "1,2 km" },
      { name: "Engelitz", km: "1,2 km" },
    ],
  },
  {
    zeit: "Eine halbe Stunde",
    titel: "Zu Fuß rund um Hergatz",
    text: "Unsere Gemeindeteile, der Wallfahrtsort und der Bahnhof, alles in Gehweite.",
    ziele: [
      { name: "Maria-Thann mit Wallfahrtskirche", km: "1,7 km" },
      { name: "Schwarzensee", km: "1,7 km" },
      { name: "Hergatz mit Bahnhof", km: "2,2 km" },
      { name: "Itzlings und Adelgunz", km: "2,2 km" },
      { name: "Schwarzenberg", km: "2,2 km" },
      { name: "Beuren", km: "2,2 km" },
      { name: "Handwerks", km: "2,3 km" },
      { name: "Staudach", km: "2,6 km" },
      { name: "Grod", km: "2,7 km" },
    ],
  },
  {
    zeit: "Mit dem Rad in 15 Minuten",
    titel: "Das Westallgäu ums Eck",
    text: "Vom Boxenstopp aus seid ihr in einer Viertelstunde halb Westallgäu durch.",
    ziele: [
      { name: "Wangen im Allgäu, Altstadt", km: "3,5 km" },
      { name: "Opfenbach", km: "3,3 km" },
      { name: "Lengatz", km: "3,2 km" },
      { name: "Degermoos", km: "3,9 km" },
      { name: "Edelitz", km: "3,9 km" },
      { name: "Heimenkirch", km: "4,2 km" },
      { name: "Hergensweiler", km: "7,1 km" },
      { name: "Röthenbach im Allgäu", km: "8,6 km" },
    ],
  },
];

const nachbarCafes: Nahziel[] = [
  { name: "Café Lädele, Böhen", km: "3,3 km" },
  { name: "Café Walfisch, Wangener Altstadt", km: "3,5 km" },
  { name: "Hinderofen Cafe, Marktplatz Wangen", km: "3,5 km" },
  { name: "Café Blumenreich, Bindstraße Wangen", km: "3,5 km" },
  { name: "Fidelisbäck, Paradiesstraße Wangen", km: "3,5 km" },
  { name: "Café am Saumarkt, Wangen", km: "3,5 km" },
  { name: "Carderie by Pierre, Spinnerei Wangen", km: "3,5 km" },
  { name: "Eiscafé Pinocchio, Marktplatz Wangen", km: "3,5 km" },
];

const Neighborhood = () => (
  <Layout>
    <SEO
      title="Bistro Hergatz: Café im Wohnhaus | Nachbarschaft Westallgäu"
      description="Bistro Boxenstopp in Hergatz-Wohmbrechts: Café und Bistro im Wohnhaus der Inhaberfamilie. Dörfer, Radwege und Cafés rund um Wohmbrechts im Westallgäu."
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
            Wir laden euch in unser Zuhause ein. Naja fast.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-primary-foreground/90 md:text-xl">
            Willkommen im Gewerbeteil unseres Hauses in Hergatz-Wohmbrechts. Den Eingang findet ihr gleich bei der Treppe neben der Garage, die Treppe führt euch hinunter zu unserer Terrasse und direkt ins Bistro.
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
              Vielleicht seid ihr schon oft an unserem Haus vorbeigegangen und habt euch gefragt, ob man hier wirklich einfach hereinkommen darf. Ja, unbedingt. Neben der Garage beginnt die Treppe, die hinunter zu unserer Terrasse und direkt zu euch ins Bistro führt.
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

    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Mitgestaltung</p>
          <h2 className="font-serif text-3xl font-normal leading-tight text-foreground md:text-5xl">Ihr gestaltet das Bistro mit.</h2>
          <p className="mt-6 text-lg font-light leading-8 text-muted-foreground">
            Wir versuchen immer, die Speisekarte an die aktuelle Auslastung anzupassen. Was ihr euch wünscht und was ihr tatsächlich nachfragt, entscheidet mit darüber, was bei uns auf den Tisch kommt und was wir lassen.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          <article className="bg-background p-7 md:p-9">
            <p className="text-sm font-semibold text-primary">Auslastung</p>
            <h3 className="mt-3 font-serif text-2xl font-normal text-foreground">Karte nach Bedarf</h3>
            <p className="mt-4 leading-7 text-muted-foreground">
              Wir richten unsere Speisekarte an der tatsächlichen Nachfrage aus statt an einem starren Plan. Was häufig gewünscht wird, bleibt und bekommt mehr Raum. Was kaum jemand bestellt, macht Platz für etwas Neues.
            </p>
          </article>
          <article className="bg-background p-7 md:p-9">
            <p className="text-sm font-semibold text-primary">Öffnungszeiten</p>
            <h3 className="mt-3 font-serif text-2xl font-normal text-foreground">Aktuell am Training ausgerichtet</h3>
            <p className="mt-4 leading-7 text-muted-foreground">
              Derzeit orientieren sich unsere Öffnungszeiten stark an denen von FITES Allgäu, weil wir unter einem Dach sind. In Zukunft möchten wir sie natürlich Schritt für Schritt erweitern.
            </p>
          </article>
          <article className="bg-background p-7 md:p-9">
            <p className="text-sm font-semibold text-primary">Speisekarte und Auswahl</p>
            <h3 className="mt-3 font-serif text-2xl font-normal text-foreground">Da kommt noch mehr</h3>
            <p className="mt-4 leading-7 text-muted-foreground">
              Auch bei den Gerichten und beim Angebot drumherum haben wir noch viel vor. Wie schnell wir wachsen und in welche Richtung, hängt von der Nachfrage und von eurem Feedback ab.
            </p>
          </article>
        </div>

        <div className="mt-12 grid gap-10 border-t border-border pt-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <h3 className="font-serif text-2xl font-normal leading-snug text-foreground md:text-4xl">Was wünscht ihr euch? Was fehlt euch?</h3>
            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
              Sprecht uns an, egal ob beim Besuch an der Theke, per Nachricht oder am Telefon. Jedes ehrliche Wort hilft uns weiter, auch wenn wir nicht alles sofort umsetzen können.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/kontakt">Sprecht uns an</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+491716226201">0171 6226201</a>
              </Button>
            </div>
          </div>
          <div className="border border-border bg-secondary/20 p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Feedback auf kurzem Weg</p>
            <ul className="mt-5 divide-y divide-border">
              <li className="flex items-baseline justify-between gap-6 py-3">
                <span className="text-foreground">An der Theke</span>
                <span className="shrink-0 text-sm text-muted-foreground">beim Besuch</span>
              </li>
              <li className="flex items-baseline justify-between gap-6 py-3">
                <a className="text-foreground underline underline-offset-4" href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                <span className="shrink-0 text-sm text-muted-foreground">Direktnachricht</span>
              </li>
              <li className="flex items-baseline justify-between gap-6 py-3">
                <a className="text-foreground underline underline-offset-4" href="tel:+491716226201">0171 6226201</a>
                <span className="shrink-0 text-sm text-muted-foreground">Telefon</span>
              </li>
            </ul>
            <p className="mt-5 leading-6 text-sm text-muted-foreground">
              Auch Kritik nehmen wir gern an. Nur wenn wir wissen, was euch fehlt, können wir es ändern.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Zu Fuß im Westallgäu</p>
          <h2 className="font-serif text-3xl font-normal leading-tight text-foreground md:text-5xl">Was ihr euch rund um Wohmbrechts erlaufen könnt</h2>
          <p className="mt-6 text-lg font-light leading-8 text-muted-foreground">
            Fünfzehn Minuten zu Fuß sind im Westallgäu mehr, als man denkt. Von unserem Eingang am Südhang aus erreicht ihr die Gemeindeteile von Hergatz, den Wallfahrtsort Maria-Thann und in einer Viertelstunde mit dem Rad die Altstadt von Wangen. Hier sind alle Dörfer, Weiler und Höfe in der Nachbarschaft.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
          {gehStufen.map((stufe) => (
            <article key={stufe.titel} className="bg-background p-7 md:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary tabular-nums">{stufe.zeit}</p>
              <h3 className="mt-3 font-serif text-2xl font-normal text-foreground">{stufe.titel}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{stufe.text}</p>
              <ul className="mt-6 divide-y divide-border border-t border-border">
                {stufe.ziele.map((ziel) => (
                  <li key={ziel.name} className="flex items-baseline justify-between gap-6 py-3">
                    <span className="text-foreground">{ziel.name}</span>
                    <span className="shrink-0 text-sm text-muted-foreground tabular-nums">{ziel.km}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Cafés in der Nachbarschaft</p>
            <h3 className="font-serif text-2xl font-normal text-foreground md:text-3xl">Cafés, Eisläden und Konditoreien in der Region</h3>
            <p className="mt-5 leading-7 text-muted-foreground">
              Für alle, die nach dem Boxenstopp noch weiterziehen oder einen Sonntagsnachmittag suchen: Das sind die Cafés, Eisläden und Konditoreien, die rund um uns liegen. Am nächsten seid ihr trotzdem bei uns, direkt am Südhang.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="outline">
                <Link to="/speisekarte">Unsere Karte ansehen</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/blog/bodensee-koenigssee-radweg-hergatz">Routen durchs Westallgäu</Link>
              </Button>
            </div>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {nachbarCafes.map((cafe) => (
              <li key={cafe.name} className="flex items-baseline justify-between gap-6 py-3">
                <span className="text-foreground">{cafe.name}</span>
                <span className="shrink-0 text-sm text-muted-foreground tabular-nums">{cafe.km}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-6 text-muted-foreground">
          Alle Entfernungen sind Luftlinien ab Südhang 1 in Hergatz-Wohmbrechts, die Gehzeiten sind Richtwerte für ein gemütliches Tempo. Für Ausflüge lohnt sich auch der Weg nach Lindau und Bodolz am Bodensee, mit dem Rad oder in kurzer Fahrt mit dem Auto.
        </p>
      </div>
    </section>

    <Wegweiser />
  </Layout>
);

export default Neighborhood;
