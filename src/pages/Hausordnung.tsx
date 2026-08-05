import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const navy = "#164472";
const bronze = "#9E7C4E";
const warmBrown = "#6B4A2E";
const cream = "#FEF4EC";

const linkClass = "underline underline-offset-2 hover:no-underline transition-colors";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 28 }}>
    <h2
      className="font-sans"
      style={{ color: bronze, fontWeight: 700, fontSize: 18, marginBottom: 10 }}
    >
      {title}
    </h2>
    <div className="font-sans" style={{ color: warmBrown, fontSize: 16, lineHeight: 1.75 }}>
      {children}
    </div>
  </div>
);

const List = ({ items }: { items: React.ReactNode[] }) => (
  <ul style={{ listStyle: "disc", paddingLeft: 22, margin: "8px 0" }}>
    {items.map((item, i) => (
      <li key={i} style={{ marginBottom: 6 }}>
        {item}
      </li>
    ))}
  </ul>
);

const Hausordnung = () => {
  return (
    <Layout>
      <SEO
        title="Hausordnung, Bistro Boxenstopp Hergatz"
        description="Hausordnung des Bistro Boxenstopp in Hergatz: Rauchverbot, Aufsichtspflicht, Duschen und WC, Videoüberwachung und respektvolles Miteinander."
        path="/hausordnung"
      />
      <section style={{ backgroundColor: cream, paddingTop: 80, paddingBottom: 80 }}>
        <div className="mx-auto px-6" style={{ maxWidth: 760 }}>
          <h1
            className="font-serif italic"
            style={{ color: navy, fontSize: "2.5rem", fontWeight: 700, marginBottom: 16 }}
          >
            Hausordnung
          </h1>
          <p
            className="font-sans"
            style={{ color: warmBrown, fontSize: 16, lineHeight: 1.75, marginBottom: 36 }}
          >
            Damit sich bei uns alle wohlfühlen, gilt im Bistro Boxenstopp, Südhang 1, 88145
            Hergatz, sowie auf dem zugehörigen Außenbereich und Parkplatz die folgende
            Hausordnung. Mit dem Betreten unserer Räume und des Grundstücks erkennst du sie an.
            Wir üben das Hausrecht aus (§§ 858, 903, 1004 BGB) und dürfen Personen bei Verstößen
            des Hauses verweisen oder ein Hausverbot erteilen.
          </p>

          <Section title="1. Respektvolles Miteinander – sicherer Raum">
            Wir sind ein sicherer Ort für alle, insbesondere für Frauen und Mädchen. Belästigung,
            Anmache, Anstarren, aufdringliches Verhalten, sexistische, rassistische,
            homo- oder transfeindliche Äußerungen, Bedrohungen und Gewalt werden bei uns
            <strong> nicht toleriert</strong>. Wer sich respektlos verhält, wird ohne Diskussion
            des Hauses verwiesen; in schweren Fällen erstatten wir Anzeige.
            <br />
            Du fühlst dich unwohl oder belästigt? Sprich uns direkt an – wir helfen sofort,
            begleiten dich und rufen bei Bedarf Hilfe.
          </Section>

          <Section title="2. Rauchen, Dampfen und Alkohol">
            <List
              items={[
                <>
                  Im gesamten Gebäude gilt ein <strong>strenges Rauchverbot</strong> – das gilt
                  auch für E-Zigaretten, Vapes, Shishas und Tabakerhitzer (Gesundheitsschutzgesetz
                  Bayern, GSG).
                </>,
                <>
                  Draußen ist Rauchen ausschließlich im ausgewiesenen Raucherbereich erlaubt.
                  Zigarettenreste bitte in die Ascher, nicht auf den Boden oder in Pflanzen.
                </>,
                <>
                  Wir schenken keinen Alkohol aus (nur alkoholfreies Bier). Das Mitbringen und
                  Konsumieren eigener alkoholischer Getränke ist nicht erlaubt.
                </>,
              ]}
            />
          </Section>

          <Section title="3. Kinder und Aufsichtspflicht">
            Eltern und Begleitpersonen haften für ihre Kinder. Die Aufsichtspflicht liegt
            ausschließlich bei den Erziehungsberechtigten – wir übernehmen keine Betreuung oder
            Aufsicht. Kinder unter 10 Jahren dürfen Duschen und Sanitärbereich nur in Begleitung
            eines Erziehungsberechtigten nutzen. Bitte achte darauf, dass Kinder nicht auf dem
            Parkplatz oder im Zufahrtsbereich spielen.
          </Section>

          <Section title="4. Duschen und WC">
            <List
              items={[
                <>
                  Die Nutzung von Duschen, WC und Sanitärbereich erfolgt{" "}
                  <strong>auf eigene Gefahr</strong>. Es besteht Rutschgefahr; eine Aufsicht
                  findet nicht statt.
                </>,
                <>
                  In die Toiletten und Duschabläufe gehören <strong>ausschließlich</strong>{" "}
                  Toilettenpapier und Wasser. Hygieneartikel, Binden, Tampons, Feuchttücher,
                  Windeln, Essensreste, Fett, Rasierklingen oder sonstiger Müll gehören in die
                  bereitgestellten Abfallbehälter.
                </>,
                <>
                  Wer diesen Hinweis ignoriert und dadurch eine Verstopfung oder einen Schaden
                  verursacht, <strong>haftet selbst</strong> für die Kosten der Beseitigung
                  (Rohrreinigung, Handwerker, Folgeschäden) gemäß §§ 823, 280 BGB.
                </>,
                <>
                  Bitte hinterlasse Dusche und WC so, wie du sie selbst gerne vorfinden würdest.
                  Persönliche Gegenstände nimm bitte wieder mit – für vergessene oder abgelegte
                  Wertsachen übernehmen wir keine Haftung.
                </>,
                <>
                  Die Duschnutzung kostet 3 € pro Person; Kinder unter 10 Jahren duschen in
                  Begleitung der Eltern kostenlos.
                </>,
              ]}
            />
          </Section>

          <Section title="5. Sauberkeit, Müll und Umgang mit dem Inventar">
            <List
              items={[
                "Müll bitte in die vorhandenen Behälter, Pfandgeschirr und Tabletts bitte zurückbringen.",
                "Mitgebrachte Speisen und Getränke bitte nicht im Gastraum verzehren.",
                "Für vorsätzlich oder fahrlässig verursachte Schäden an Inventar, Sanitäranlagen oder Gebäude haftet der Verursacher.",
                "Bitte behandle Möbel, Geschirr und Technik so, dass sie auch die nächsten Gäste nutzen können.",
              ]}
            />
          </Section>

          <Section title="6. Parkplatz und Fahrzeuge">
            <List
              items={[
                "Auf dem Parkplatz gilt die Straßenverkehrsordnung (StVO) sinngemäß, Schrittgeschwindigkeit ist einzuhalten.",
                "Das Abstellen von Fahrzeugen, Wohnmobilen und Fahrrädern erfolgt auf eigene Gefahr; wir haften nicht für Diebstahl oder Beschädigung.",
                "Übernachten und Camping auf dem Parkplatz sind nicht erlaubt.",
                <>
                  Wir haben <strong>keine</strong> E-Bike-Ladestation. Gäste dürfen unsere
                  Steckdosen aber gerne mit ihrem eigenen Ladegerät nutzen – Nutzung auf eigene
                  Verantwortung.
                </>,
              ]}
            />
          </Section>

          <Section title="7. Videoüberwachung">
            Der Parkplatz und der Eingangsbereich sind aus Sicherheitsgründen videoüberwacht
            (Schutz vor Vandalismus, Diebstahl und zur Beweissicherung, Art. 6 Abs. 1 lit. f
            DSGVO). Gastraum, Sanitärbereich und Duschen werden{" "}
            <strong>nicht</strong> überwacht. Auf die Überwachung wird zusätzlich mit
            Hinweisschildern vor Ort hingewiesen. Alle Details zu Zweck, Speicherdauer und deinen
            Rechten stehen in unserer{" "}
            <Link to="/datenschutz#videoueberwachung" className={linkClass} style={{ color: navy }}>
              Datenschutzerklärung
            </Link>
            .
          </Section>

          <Section title="8. Tiere">
            Gut erzogene Hunde sind bei uns an der Leine willkommen. Bitte nicht auf Sitzmöbel
            oder Tische, keine Tiere im Sanitär- und Duschbereich, und Hinterlassenschaften bitte
            aufsammeln. Die Halterhaftung nach § 833 BGB bleibt unberührt.
          </Section>

          <Section title="9. Fotografieren und Filmen">
            Private Erinnerungsfotos sind okay. Andere Gäste dürfen dabei nicht ohne ihre
            Einwilligung erkennbar aufgenommen werden. Gewerbliche Aufnahmen, Foto-Shootings oder
            Videodrehs nur nach vorheriger Absprache mit uns.
          </Section>

          <Section title="10. Öffnungszeiten und Hausrecht">
            Bitte beachte unsere Öffnungszeiten sowie angekündigte Sonderöffnungszeiten und
            Urlaubsschließungen. Anweisungen des Personals ist Folge zu leisten. Bei Verstößen
            gegen diese Hausordnung können wir das Hausrecht durchsetzen und ein Hausverbot
            erteilen; ein Anspruch auf Erstattung bereits bezahlter Leistungen besteht in diesem
            Fall nicht.
          </Section>

          <Section title="11. Fitnessstudio FiTES im selben Gebäude">
            Im selben Gebäude befindet sich das Fitnessstudio FiTES Allgäu. Trainingsräume,
            Kursräume und die dortigen Umkleiden sind ausschließlich für FiTES-Mitglieder und
            Kursteilnehmende zugänglich; dort gilt zusätzlich die Hausordnung von FiTES. Der
            Bistrobereich ist für alle Gäste offen.
          </Section>

          <Section title="12. Notfall">
            Fluchtwege, Notausgänge und Feuerlöscher müssen jederzeit frei bleiben. Im Notfall
            bitte sofort das Personal informieren. Notruf: 112 (Feuerwehr/Rettungsdienst),
            110 (Polizei).
          </Section>

          <p
            className="font-sans"
            style={{ color: warmBrown, fontSize: 14, lineHeight: 1.7, marginTop: 36, opacity: 0.85 }}
          >
            Bistro Boxenstopp, Südhang 1, 88145 Hergatz. Änderungen dieser Hausordnung behalten
            wir uns vor; es gilt die jeweils vor Ort und auf dieser Seite veröffentlichte Fassung.
            Weitere Angaben findest du im{" "}
            <Link to="/impressum" className={linkClass} style={{ color: navy }}>
              Impressum
            </Link>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Hausordnung;
