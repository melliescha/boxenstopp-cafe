import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const navy = "#164472";
const bronze = "#9E7C4E";
const warmBrown = "#6B4A2E";
const cream = "#FEF4EC";

const linkStyle: React.CSSProperties = { color: navy, textDecoration: "underline" };

const ExtLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={linkStyle}
    onMouseEnter={(e) => (e.currentTarget.style.color = bronze)}
    onMouseLeave={(e) => (e.currentTarget.style.color = navy)}
  >
    {children}
  </a>
);

const SimpleLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    style={linkStyle}
    onMouseEnter={(e) => (e.currentTarget.style.color = bronze)}
    onMouseLeave={(e) => (e.currentTarget.style.color = navy)}
  >
    {children}
  </a>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="font-sans"
    style={{ color: bronze, fontWeight: 700, fontSize: 22, marginTop: 8, marginBottom: 16 }}
  >
    {children}
  </h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3
    className="font-sans"
    style={{ color: warmBrown, fontWeight: 700, fontSize: 18, marginTop: 20, marginBottom: 8 }}
  >
    {children}
  </h3>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p
    className="font-sans"
    style={{ color: warmBrown, fontSize: 16, lineHeight: 1.7, marginBottom: 14 }}
  >
    {children}
  </p>
);

const Divider = () => (
  <hr
    style={{
      border: 0,
      borderTop: `1px solid ${bronze}`,
      opacity: 0.3,
      margin: "48px 0",
    }}
  />
);

const Section = ({ children }: { children: React.ReactNode }) => (
  <section style={{ marginBottom: 8 }}>{children}</section>
);

const Datenschutz = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [hash]);

  return (
    <Layout>
      <SEO title="Datenschutz, Bistro Boxenstopp" description="Datenschutzerklärung gemäß DSGVO." path="/datenschutz" />
      <section style={{ backgroundColor: cream, paddingTop: 80, paddingBottom: 80 }}>
        <div className="mx-auto" style={{ maxWidth: 720, paddingLeft: 24, paddingRight: 24 }}>
          <h1
            className="font-serif italic"
            style={{ color: navy, fontSize: "2.5rem", fontWeight: 700, marginBottom: 8 }}
          >
            Datenschutzerklärung
          </h1>
          <p
            className="font-sans italic"
            style={{ color: warmBrown, fontSize: 14, marginBottom: 40 }}
          >
            Stand: Juli 2026
          </p>

          <Section>
            <H2>1. Verantwortlicher</H2>
            <P>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer
              nationaler Datenschutzgesetze der Mitgliedstaaten sowie sonstiger
              datenschutzrechtlicher Bestimmungen ist:
            </P>
            <P>
              Eugen Schall<br />
              FITES, Bistro Boxenstopp<br />
              Südhang 1<br />
              88145 Hergatz / Wohmbrechts<br />
              Deutschland
            </P>
            <P>
              Telefon: <SimpleLink href="tel:+491716226201">0171 6226201</SimpleLink>
              <br />
              E-Mail: <SimpleLink href="mailto:fit.es@icloud.com">fit.es@icloud.com</SimpleLink>
            </P>
          </Section>

          <Divider />

          <Section>
            <H2>2. Allgemeine Hinweise zur Datenverarbeitung</H2>
            <H3>2.1 Umfang der Verarbeitung personenbezogener Daten</H3>
            <P>
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies
              zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und
              Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer
              erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen
              Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen
              Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche
              Vorschriften gestattet ist.
            </P>
            <H3>2.2 Rechtsgrundlagen für die Verarbeitung personenbezogener Daten</H3>
            <P>
              Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der
              betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage.
            </P>
            <P>
              Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages,
              dessen Vertragspartei die betroffene Person ist, erforderlich ist, dient Art. 6 Abs.
              1 lit. b DSGVO als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur
              Durchführung vorvertraglicher Maßnahmen erforderlich sind.
            </P>
            <P>
              Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen
              Verpflichtung erforderlich ist, der unser Unternehmen unterliegt, dient Art. 6 Abs. 1
              lit. c DSGVO als Rechtsgrundlage.
            </P>
            <P>
              Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens
              oder eines Dritten erforderlich und überwiegen die Interessen, Grundrechte und
              Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht, so dient Art. 6
              Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.
            </P>
            <H3>2.3 Datenlöschung und Speicherdauer</H3>
            <P>
              Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt,
              sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus
              erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber in
              unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der
              Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung oder Löschung der Daten
              erfolgt auch dann, wenn eine durch die genannten Normen vorgeschriebene Speicherfrist
              abläuft, es sei denn, dass eine Erforderlichkeit zur weiteren Speicherung der Daten
              für einen Vertragsabschluss oder eine Vertragserfüllung besteht.
            </P>
          </Section>

          <Divider />

          <Section>
            <H2>3. Hosting und Plattform</H2>
            <H3>3.1 Hosting (Cloudflare)</H3>
            <P>
              Die Auslieferung dieser Website an Besucher erfolgt über die Server von Cloudflare,
              Inc., 101 Townsend Street, San Francisco, CA 94107, USA. Ansprechpartner für den
              europäischen Wirtschaftsraum ist die Cloudflare Germany GmbH, Rosental 7, c/o
              Mindspace, 80331 München.
            </P>
            <P>
              Cloudflare verarbeitet beim Aufruf unserer Website verschiedene Daten, um die
              Website auszuliefern, gegen Angriffe zu schützen und eine schnelle Bereitstellung
              sicherzustellen (z. B. IP-Adresse, Browsertyp, Zugriffszeitpunkt, HTTP-Header,
              Referrer).
            </P>
            <P>
              Mit Cloudflare wurde ein Auftragsverarbeitungsvertrag (Data Processing Addendum)
              gemäß Art. 28 DSGVO geschlossen.
            </P>
            <P>
              Drittlandtransfer: Cloudflare verarbeitet Daten unter anderem in den USA. Cloudflare
              nimmt am EU-US Data Privacy Framework teil. Damit besteht ein
              Angemessenheitsbeschluss der Europäischen Kommission gem. Art. 45 DSGVO. Ergänzend
              werden EU-Standardvertragsklauseln gem. Art. 46 Abs. 2 lit. c DSGVO eingesetzt.
            </P>
            <P>
              Weitere Informationen: <ExtLink href="https://www.cloudflare.com/de-de/privacypolicy/">https://www.cloudflare.com/de-de/privacypolicy/</ExtLink>
            </P>
            <H3>3.2 Plattform / Website-Erstellung (Lovable)</H3>
            <P>
              Die Inhalte und der Code dieser Website werden über die Plattform Lovable erstellt
              und verwaltet. Anbieter ist Lovable Labs Incorporated (USA), mit europäischem
              Vertreter Lovable Labs AB, Regeringsgatan 25, 111 53 Stockholm, Schweden.
            </P>
            <P>
              Bei der Erstellung und Pflege der Website durch uns werden Daten auf den Servern von
              Lovable verarbeitet. Beim Aufruf der ausgelieferten Website durch Besucher findet im
              Regelfall kein direkter Datenkontakt mit Lovable statt, da die Auslieferung über
              Cloudflare erfolgt.
            </P>
            <P>
              Mit Lovable wurde ein Auftragsverarbeitungsvertrag (Data Processing Agreement) gemäß
              Art. 28 DSGVO geschlossen.
            </P>
            <P>
              Drittlandtransfer: Lovable Labs Incorporated hat seinen Sitz in den USA. Die
              Datenübermittlung erfolgt auf Grundlage von EU-Standardvertragsklauseln gem. Art. 46
              Abs. 2 lit. c DSGVO.
            </P>
            <P>
              Weitere Informationen: <ExtLink href="https://lovable.dev/privacy">https://lovable.dev/privacy</ExtLink>
            </P>
            <H3>3.3 Quellcode-Verwaltung (GitHub)</H3>
            <P>
              Der Quellcode dieser Website wird in einem Repository bei GitHub verwaltet. Anbieter
              ist GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA, bzw.
              für den europäischen Raum GitHub B.V., Vijzelstraat 68–72, 1017 HL Amsterdam,
              Niederlande. GitHub speichert ausschließlich unseren Programmcode und die
              Bearbeitungshistorie. Beim Aufruf dieser Website durch Besucher findet{" "}
              <strong>keine</strong> Verbindung zu GitHub statt; Besucherdaten werden nicht an
              GitHub übermittelt. Die Datenübermittlung in die USA erfolgt auf Grundlage von
              EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).
            </P>
            <P>
              Weitere Informationen: <ExtLink href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement">GitHub Privacy Statement</ExtLink>
            </P>
            <P>
              Rechtsgrundlage für die vorgenannten Verarbeitungen: Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an einer technisch fehlerfreien Darstellung, schnellen
              Auslieferung, Sicherheit und Pflege unserer Website).
            </P>
          </Section>

          <Divider />

          <Section>
            <H2>4. Bereitstellung der Website und Erstellung von Logfiles</H2>
            <H3>4.1 Beschreibung und Umfang der Datenverarbeitung</H3>
            <P>
              Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und
              Informationen vom Computersystem des aufrufenden Rechners. Folgende Daten werden
              hierbei erhoben:
            </P>
            <ul style={{ color: warmBrown, fontSize: 16, lineHeight: 1.7, paddingLeft: 24, marginBottom: 14 }}>
              <li>IP-Adresse des Nutzers (anonymisiert)</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Inhalt der Anforderung (konkrete Seite)</li>
              <li>Zugriffsstatus / HTTP-Statuscode</li>
              <li>Jeweils übertragene Datenmenge</li>
              <li>Website, von der die Anforderung kommt (Referrer)</li>
              <li>Browser, Betriebssystem und dessen Oberfläche, Sprache und Version der Browsersoftware</li>
            </ul>
            <P>
              Die Daten werden in den Logfiles unseres Systems gespeichert. Eine Speicherung dieser
              Daten zusammen mit anderen personenbezogenen Daten des Nutzers findet nicht statt.
            </P>
            <H3>4.2 Rechtsgrundlage und Speicherdauer</H3>
            <P>
              Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist
              Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald sie für die Erreichung
              des Zweckes ihrer Erhebung nicht mehr erforderlich sind, in der Regel nach 7 Tagen.
            </P>
          </Section>

          <Divider />

          <Section>
            <H2>5. SSL- bzw. TLS-Verschlüsselung</H2>
            <P>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
              Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
              Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt
              und an dem Schloss-Symbol in Ihrer Browserzeile.
            </P>
          </Section>

          <Divider />

          <Section>
            <H2>6. Cookies und vergleichbare Technologien</H2>
            <H3>6.1 Allgemeines zu Cookies</H3>
            <P>
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die im
              Internetbrowser bzw. vom Internetbrowser auf dem Computersystem des Nutzers
              gespeichert werden. Ruft ein Nutzer eine Website auf, kann ein Cookie auf dessen
              Endgerät gespeichert werden.
            </P>
            <P>Wir unterscheiden zwischen:</P>
            <ul style={{ color: warmBrown, fontSize: 16, lineHeight: 1.7, paddingLeft: 24, marginBottom: 14 }}>
              <li>Technisch notwendigen Cookies, die für den Betrieb der Website erforderlich sind</li>
              <li>Optionalen Cookies (z. B. für externe Inhalte wie Karten oder Bewertungen), die nur mit Ihrer ausdrücklichen Einwilligung gesetzt werden</li>
            </ul>
            <H3>6.2 Cookie-Banner und Einwilligung (TDDDG / DSGVO)</H3>
            <P>
              Beim erstmaligen Aufruf unserer Website werden Sie über die eingesetzten
              Technologien informiert und um Ihre Einwilligung gebeten. Alle optionalen
              Kategorien sind dabei standardmäßig deaktiviert (Opt-in); es wird nichts geladen,
              bevor Sie zugestimmt haben. Die Ablehnung („Nur notwendige") ist genauso einfach
              möglich wie die Zustimmung. Ihre Einwilligung können Sie jederzeit über
              „Cookie-Einstellungen" im Footer ändern oder vollständig widerrufen.
            </P>
            <P>Kategorien:</P>
            <ul style={{ color: warmBrown, fontSize: 16, lineHeight: 1.7, paddingLeft: 24, marginBottom: 14 }}>
              <li>
                <strong>Technisch notwendig</strong> (nicht abwählbar): Speicherung Ihrer
                Datenschutz-Entscheidung im lokalen Speicher Ihres Browsers
                (Schlüssel „boxenstopp-consent-v2")
              </li>
              <li>
                <strong>Externe Inhalte</strong> (optional): Laden der Google-Maps-Karte auf der
                Kontakt-Seite
              </li>
              <li>
                <strong>Statistik / Reichweitenmessung</strong> (optional): derzeit ist kein
                Analyse-Dienst eingebunden; ohne Ihre Einwilligung wird auch künftig keiner geladen
              </li>
            </ul>
            <H3>6.3 Speicherung und Nachweis der Einwilligung (Art. 7 Abs. 1 DSGVO)</H3>
            <P>
              Zum Nachweis der Einwilligung speichern wir gemeinsam mit Ihrer Entscheidung den
              Zeitpunkt (Zeitstempel), die Version des Einwilligungstextes, die Art der
              Entscheidung (alle akzeptiert, nur notwendige, individuelle Auswahl oder Widerruf)
              sowie die einzelnen Kategorie-Entscheidungen. Diese Angaben werden{" "}
              <strong>ausschließlich lokal in Ihrem Browser</strong> gespeichert, nicht an uns
              oder Dritte übertragen und enthalten keine personenbezogenen Kennungen (keine
              IP-Adresse, keine Nutzer-ID). Die Speicherung bleibt bestehen, bis Sie sie löschen
              (Browserdaten leeren) oder die Textversion der Einwilligung sich ändert – dann
              fragen wir erneut.
            </P>
            <P>Rechtsgrundlage:</P>
            <ul style={{ color: warmBrown, fontSize: 16, lineHeight: 1.7, paddingLeft: 24, marginBottom: 14 }}>
              <li>Für die technisch notwendige Speicherung: § 25 Abs. 2 Nr. 2 TDDDG, Art. 6 Abs. 1 lit. f DSGVO</li>
              <li>Für optionale Kategorien: § 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
            </ul>

          </Section>

          <Divider />

          <Section>
            <H2>7. Kontaktaufnahme per E-Mail, Telefon oder WhatsApp</H2>
            <P>
              Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, werden Ihre Angaben zur
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </P>
            <P>
              Verarbeitete Daten: Name, Kontaktdaten (E-Mail, Telefonnummer), Inhalt der Nachricht
              sowie ggf. weitere von Ihnen mitgeteilte Informationen.
            </P>
            <P>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche bzw. vertragliche
              Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter
              Bearbeitung von Anfragen).
            </P>
            <P>
              Speicherdauer: Diese Daten werden gelöscht, sobald sie für die Bearbeitung Ihrer
              Anfrage nicht mehr erforderlich sind. Gesetzliche Aufbewahrungspflichten (z. B.
              handels- oder steuerrechtlich) bleiben unberührt.
            </P>
            <P>
              Hinweis zu WhatsApp: Bei der Kommunikation über WhatsApp werden Daten an die Meta
              Platforms Ireland Ltd., 4 Grand Canal Square, Dublin 2, Irland, übermittelt. Bitte
              beachten Sie hierzu die Datenschutzbestimmungen von WhatsApp:{" "}
              <ExtLink href="https://www.whatsapp.com/legal/privacy-policy-eea">
                https://www.whatsapp.com/legal/privacy-policy-eea
              </ExtLink>
            </P>
          </Section>

          <Divider />

          <Section>
            <H2>8. Kontaktformular</H2>
            <P>
              Auf dieser Website wird <strong>kein</strong> Kontaktformular angeboten. Eine
              Kontaktaufnahme ist ausschließlich per Telefon, E-Mail, WhatsApp oder persönlich vor
              Ort möglich (siehe Abschnitt 7). Es werden daher über diese Website keine
              Formulardaten erhoben, übermittelt oder gespeichert.
            </P>
          </Section>

          <Divider />

          <Section>
            <H2>9. Google Maps (2-Klick-Lösung)</H2>
            <P>
              Auf unserer Website (insbesondere auf der Seite „Anfahrt") bieten wir die Anzeige
              einer Karte über den Dienst Google Maps der Google Ireland Limited, Gordon House,
              Barrow Street, Dublin 4, Irland („Google") an.
            </P>
            <P>
              Aus Datenschutzgründen wird die Karte <strong>nicht automatisch geladen</strong>.
              Stattdessen sehen Sie zunächst nur einen Platzhalter mit einem Hinweistext. Erst
              wenn Sie aktiv auf die Schaltfläche „Karte laden" klicken, wird die Karte
              nachgeladen und es werden Daten (insbesondere Ihre IP-Adresse, Browserinformationen,
              ggf. Standort) an Google übermittelt. Eine Übermittlung in die USA (Google LLC)
              kann dabei nicht ausgeschlossen werden.
            </P>
            <P>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch aktiven Klick auf
              „Karte laden"). Solange Sie nicht klicken, werden keinerlei Daten an Google
              übertragen.
            </P>
            <P>
              Drittlandtransfer: Google nimmt am EU-US Data Privacy Framework teil. Damit besteht
              ein Angemessenheitsbeschluss der Europäischen Kommission gem. Art. 45 DSGVO.
              Ergänzend werden EU-Standardvertragsklauseln gem. Art. 46 Abs. 2 lit. c DSGVO
              eingesetzt.
            </P>
            <P>
              Weitere Informationen zum Datenschutz bei Google:{" "}
              <ExtLink href="https://policies.google.com/privacy">
                https://policies.google.com/privacy
              </ExtLink>
            </P>
          </Section>

          <Divider />

          <Section>
            <H2>10. Schriftarten (lokal eingebunden)</H2>
            <P>
              Diese Website nutzt zur einheitlichen Darstellung von Schriftarten ausschließlich
              lokal eingebundene Web Fonts (Playfair Display und Lato). Die Schriftdateien werden
              direkt von unserem Server ausgeliefert. Es besteht keinerlei Verbindung zu Google
              Fonts, Google CDN oder anderen externen Schrift-Diensten; Ihre IP-Adresse wird
              dadurch nicht an Dritte übertragen.
            </P>
            <P>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
              einheitlichen Darstellung des Schriftbildes).
            </P>
          </Section>

          <Divider />

          <Section>
            <H2>11. Verlinkung zu Google-Diensten und Bewertungsportalen</H2>
            <P>
              Auf unserer Website verlinken wir auf externe Bewertungs- und Kartendienste
              (insbesondere Google Business Profil/Google Bewertungen sowie Tripadvisor). Es
              werden <strong>keine Widgets, iFrames oder Skripte</strong> dieser Anbieter in
              unsere Seite eingebunden. Beim bloßen Aufruf unserer Website werden daher
              <strong> keine Daten</strong> an diese Anbieter übertragen.
            </P>
            <P>
              Erst wenn Sie aktiv auf einen solchen Link klicken, werden Sie auf die Seite des
              jeweiligen Anbieters weitergeleitet. Ab diesem Zeitpunkt gelten die
              Datenschutzbestimmungen des jeweiligen Anbieters:
            </P>
            <ul style={{ color: warmBrown, fontSize: 16, lineHeight: 1.7, paddingLeft: 24, marginBottom: 14 }}>
              <li>
                Google Ireland Limited:{" "}
                <ExtLink href="https://policies.google.com/privacy">
                  policies.google.com/privacy
                </ExtLink>
              </li>
              <li>
                Tripadvisor LLC:{" "}
                <ExtLink href="https://tripadvisor.mediaroom.com/de-privacy-policy">
                  tripadvisor.mediaroom.com/de-privacy-policy
                </ExtLink>
              </li>
              <li>
                Komoot GmbH:{" "}
                <ExtLink href="https://www.komoot.com/privacy">
                  komoot.com/privacy
                </ExtLink>
              </li>
            </ul>
          </Section>

          <Divider />

          <Section>
            <H2>12. Reichweitenanalyse und Tracking (kein Google Analytics)</H2>
            <P>
              Auf dieser Website kommen <strong>keine Analyse- oder Tracking-Dienste</strong> zum
              Einsatz. Insbesondere verwenden wir <strong>kein Google Analytics</strong>, kein
              Google Tag Manager, keine Facebook-/Meta-Pixel, kein Matomo, kein Hotjar und keine
              vergleichbaren Werkzeuge zur Erstellung von Nutzungsprofilen oder zur
              geräteübergreifenden Wiedererkennung.
            </P>
            <P>
              Es werden ausschließlich technisch notwendige Server-Logfiles gemäß Abschnitt 4
              erhoben. Eine Auswertung des Nutzerverhaltens (z. B. Klickpfade, Verweildauer,
              A/B-Tests, Conversion-Tracking) findet nicht statt. Es werden keine
              personenbezogenen Profile erstellt und keine Daten zu Werbezwecken an Dritte
              weitergegeben.
            </P>
            <P>
              Sollten wir zukünftig ein Analyse-Werkzeug einsetzen, werden wir diese
              Datenschutzerklärung entsprechend anpassen und, soweit erforderlich, vorab Ihre
              Einwilligung über den Cookie-Banner einholen (Art. 6 Abs. 1 lit. a DSGVO, § 25
              Abs. 1 TDDDG).
            </P>
          </Section>

          <Divider />

          <Section>
            <H2>13. Social-Media-Profile (Verlinkung)</H2>
            <P>
              Auf unserer Website verlinken wir auf unsere Profile in sozialen Netzwerken (z. B.
              Instagram, Facebook). Die Verlinkung erfolgt über einfache Hyperlinks, sodass beim
              bloßen Aufruf unserer Seite keine Daten an die jeweiligen Anbieter übertragen werden.
              Erst durch das Anklicken der Links werden Sie auf die Seiten der jeweiligen Anbieter
              weitergeleitet.
            </P>
            <P>
              Anbieter:<br />
              Meta Platforms Ireland Ltd. (Facebook, Instagram), 4 Grand Canal Square, Dublin 2,
              Irland<br />
              Datenschutz:{" "}
              <ExtLink href="https://www.facebook.com/privacy/policy/">
                https://www.facebook.com/privacy/policy/
              </ExtLink>
            </P>
            <P>
              Sobald Sie unsere Profile dort besuchen, gelten die Datenschutzbestimmungen des
              jeweiligen Anbieters.
            </P>
          </Section>

          <Divider />

          <Section>
            <H2>14. Rechte der betroffenen Personen</H2>
            <P>
              Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i. S. d.
              DSGVO und es stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:
            </P>
            <H3>14.1 Auskunftsrecht (Art. 15 DSGVO)</H3>
            <P>
              Sie können Auskunft darüber verlangen, ob personenbezogene Daten, die Sie betreffen,
              von uns verarbeitet werden.
            </P>
            <H3>14.2 Recht auf Berichtigung (Art. 16 DSGVO)</H3>
            <P>
              Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem
              Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen,
              unrichtig oder unvollständig sind.
            </P>
            <H3>14.3 Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</H3>
            <P>
              Unter bestimmten Voraussetzungen können Sie die Einschränkung der Verarbeitung der
              Sie betreffenden personenbezogenen Daten verlangen.
            </P>
            <H3>14.4 Recht auf Löschung (Art. 17 DSGVO)</H3>
            <P>
              Sie können vom Verantwortlichen verlangen, dass die Sie betreffenden personenbezogenen
              Daten unverzüglich gelöscht werden, sofern einer der gesetzlichen Gründe zutrifft.
            </P>
            <H3>14.5 Recht auf Unterrichtung (Art. 19 DSGVO)</H3>
            <P>
              Haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung
              gegenüber dem Verantwortlichen geltend gemacht, ist dieser verpflichtet, allen
              Empfängern, denen die Sie betreffenden personenbezogenen Daten offengelegt wurden,
              diese Berichtigung oder Löschung der Daten oder Einschränkung der Verarbeitung
              mitzuteilen.
            </P>
            <H3>14.6 Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</H3>
            <P>
              Sie haben das Recht, die Sie betreffenden personenbezogenen Daten in einem
              strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
            </P>
            <H3>14.7 Widerspruchsrecht (Art. 21 DSGVO)</H3>
            <P>
              Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
              jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die
              aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen.
            </P>
            <H3>14.8 Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung (Art. 7 Abs. 3 DSGVO)</H3>
            <P>
              Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu
              widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund
              der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
            </P>
            <H3>14.9 Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</H3>
            <P>
              Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen
              Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde zu.
            </P>
            <P>
              Zuständige Aufsichtsbehörde für uns:
            </P>
            <P>
              Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)<br />
              Promenade 18<br />
              91522 Ansbach<br />
              Telefon: +49 (0) 981 180093-0<br />
              E-Mail: poststelle@lda.bayern.de<br />
              Web:{" "}
              <ExtLink href="https://www.lda.bayern.de">
                https://www.lda.bayern.de
              </ExtLink>
            </P>
          </Section>

          <Divider />

          <Section>
            <H2>15. Automatisierte Entscheidungsfindung / Profiling</H2>
            <P>
              Eine automatisierte Entscheidungsfindung im Einzelfall einschließlich Profiling gemäß
              Art. 22 DSGVO findet auf unserer Website nicht statt.
            </P>
          </Section>

          <Divider />

          <Section>
            <H2><span id="ki-hinweis">16. Einsatz von KI-generierten Inhalten (EU AI Act)</span></H2>
            <P>
              Wir kennzeichnen den Einsatz künstlicher Intelligenz auf dieser Website freiwillig
              und transparent im Sinne von Art. 50 der Verordnung (EU) 2024/1689
              („EU AI Act"), die für Anbieter und Betreiber von KI-Systemen Transparenzpflichten
              für künstlich erzeugte oder manipulierte Inhalte vorsieht.
            </P>

            <H3>16.1 Einsatz von KI-Werkzeugen</H3>
            <P>
              Für Konzeption, Text-Entwürfe, Programmierung und Bildmaterial dieser Website haben
              wir KI-gestützte Werkzeuge eingesetzt. Sämtliche verarbeiteten Inhalte stammen aus
              unserem eigenen redaktionellen Umfeld. Personenbezogene Daten unserer Gäste,
              Kundinnen und Kunden werden dabei <strong>nicht</strong> in KI-Systeme eingegeben
              oder zu Trainingszwecken weitergegeben.
            </P>

            <H3>16.2 Abbildung realer Personen und Deepfake-Hinweis</H3>
            <P>
              Die überwiegende Mehrzahl unserer KI-generierten Bilder zeigt fiktive, nicht
              existierende Personen, symbolische Silhouetten oder Situationen ohne erkennbare
              Gesichter sowie Ambiente- und Produktmotive. Gäste, Mitarbeitende oder Dritte
              werden auf KI-Bildern weder abgebildet noch nachgebildet; ihre Gesichter oder
              biometrischen Merkmale werden nicht verarbeitet.
            </P>
            <P>
              <strong>Ausnahme – KI-Bilder von uns selbst:</strong> Wir haben KI zusätzlich
              genutzt, um Bilder von uns selbst zu erstellen — Eugen und Helena Schall, Oliver
              Schall sowie Melanie Dincdemir. Diese Bilder bilden uns als reale, erkennbare
              Personen ab und sind daher im Sinne von Art. 3 Nr. 60 EU AI Act als{" "}
              <em>Deepfake</em> einzuordnen. Da es sich um unsere eigenen Abbildungen handelt,
              liegen die Einwilligungen der abgebildeten Personen ausdrücklich vor. Wir
              kennzeichnen diese Bilder mit dem Label „KI generiert" und weisen hier transparent gemäß
              Art. 50 EU AI Act darauf hin.
            </P>
            <P>
              Bilder, auf denen die Inhaberfamilie zu sehen ist, sind ebenfalls KI-generiert
              (Deepfakes von uns selbst) und mit unserer ausdrücklichen Einwilligung entstanden
              (Art. 6 Abs. 1 lit. a DSGVO). Bei allen übrigen Personenbildern wurde in den
              Prompts ausdrücklich vorgegeben, dass ausschließlich fiktive, nicht existierende
              Personen dargestellt werden. Biometrische Profile werden in keinem Fall erstellt.
            </P>


            <H3>16.3 Kennzeichnung und Aussagekraft</H3>
            <P>
              KI-generierte Bilder sind auf dieser Website direkt im Bild mit dem Label
              „KI generiert" gekennzeichnet, lediglich KI-bearbeitete Bilder mit einem kleinen
              „KI"-Rundlabel. Ein Klick darauf führt direkt zu unserem Transparenzbericht. Bei
              Texten dieser Website wurden KI-Werkzeuge lediglich unterstützend eingesetzt; alle
              Inhalte wurden vor Veröffentlichung von uns redaktionell geprüft und verantwortet.
            </P>
            <P>
              Auch unser Logo sowie weitere Grafiken und Icons dieser Website wurden mit
              KI-Werkzeugen erstellt. Logo, Grafiken und Icons tragen aus gestalterischen
              Gründen kein Badge; wir weisen an dieser Stelle transparent darauf hin.
            </P>
            <P>
              <strong>Markenhinweis:</strong> Fremde Wort- und Bildmarken (Logos) werden auf
              dieser Website nicht verwendet. Marken-, Produkt- und Firmennamen werden
              ausschließlich beschreibend genannt und bleiben Eigentum der jeweiligen
              Rechteinhaber.
            </P>
            <P>
              KI-Bilder dienen ausschließlich illustrativen Zwecken und können von der
              tatsächlichen Realität abweichen. Sie stellen keine verbindliche Beschreibung
              unserer Produkte, Räumlichkeiten oder Dienstleistungen dar. Maßgeblich ist stets
              das tatsächliche Angebot vor Ort.
            </P>


            <H3>16.4 Menschliche Freigabe</H3>
            <P>
              Kein Inhalt, weder Text noch Bild, geht ungeprüft online. Jede Änderung wird vor der
              Veröffentlichung von uns als Menschen gelesen, geprüft und freigegeben. Ein
              automatisierter oder rein KI-gesteuerter Veröffentlichungsprozess findet nicht statt.
            </P>

            <H3>16.5 Verarbeitung durch die KI-Anbieter</H3>
            <P>
              Beim bloßen Aufruf unserer Website findet <strong>keine</strong> Datenübermittlung
              an KI-Anbieter statt. Eingesetzt haben wir OpenAI (ChatGPT), Anthropic (Claude),
              Google (Gemini), Lovable und Higgsfield (Bildgenerierung) — jeweils ausschließlich
              intern von uns zur
              Erstellung von Inhalten genutzt. Rechtsgrundlage für die interne Nutzung ist Art. 6
              Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer effizienten Erstellung und
              Pflege unserer Website).
            </P>

            <P>
              Bei Fragen zum Einsatz von KI auf dieser Website wenden Sie sich gerne an die im
              Impressum genannten Kontaktdaten.
            </P>
          </Section>

          <Divider />

          <Section>
            <H2>17. Übersicht der Datenverarbeitungen und Datenflüsse</H2>
            <P>
              Zur besseren Nachvollziehbarkeit fassen wir hier alle Verarbeitungen dieser Website
              kompakt zusammen: welche Daten anfallen, wohin sie fließen, auf welcher
              Rechtsgrundlage und wie lange sie gespeichert werden.
            </P>
            <div style={{ overflowX: "auto", marginBottom: 14 }}>
              <table style={{ width: "100%", minWidth: 640, tableLayout: "fixed", borderCollapse: "collapse", fontSize: 14, color: warmBrown }}>
                <thead>
                  <tr style={{ backgroundColor: cream }}>
                    {["Verarbeitung", "Daten", "Empfänger / Ort", "Rechtsgrundlage", "Speicherdauer"].map((h) => (
                      <th key={h} style={{ textAlign: "left", padding: "10px 12px", border: `1px solid ${bronze}33`, color: bronze, fontWeight: 700 }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Hosting & Auslieferung der Website", "IP-Adresse, Browsertyp, Zeitpunkt, HTTP-Header, Referrer", "Cloudflare, Inc. (USA/EU, Auftragsverarbeiter, DPA nach Art. 28 DSGVO)", "Art. 6 Abs. 1 lit. f DSGVO", "Server-Logfiles i. d. R. 7 Tage, danach automatische Löschung"],
                    ["Sicherheits- und Schutzfunktionen (z. B. gegen Angriffe)", "IP-Adresse, technische Verbindungsdaten", "Cloudflare, Inc.", "Art. 6 Abs. 1 lit. f DSGVO", "Kurzfristig, i. d. R. wenige Tage"],
                    ["Kontakt per E-Mail", "Name, E-Mail-Adresse, Inhalt der Nachricht", "Unser E-Mail-Postfach (Hosting in Deutschland/EU), keine Weitergabe", "Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO", "Bis zur Erledigung der Anfrage; danach Löschung, sofern keine gesetzlichen Aufbewahrungspflichten (§ 147 AO, § 257 HGB: 6–10 Jahre) bestehen"],
                    ["Kontakt per Telefon / WhatsApp", "Rufnummer, Gesprächs- bzw. Nachrichteninhalt", "Wir; bei WhatsApp zusätzlich WhatsApp Ireland Ltd.", "Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO", "Bis zur Erledigung der Anfrage"],
                    ["Kontaktformular", "keine – wir bieten derzeit kein Kontaktformular an (Kontakt nur per Telefon, E-Mail oder vor Ort)", "entfällt", "entfällt", "entfällt"],
                    ["Tischreservierung / Anfragen vor Ort", "Name, Kontaktdaten, Wunschtermin", "Wir, keine Weitergabe", "Art. 6 Abs. 1 lit. b DSGVO", "Nach dem Besuch bzw. Erledigung gelöscht"],
                    ["Google Maps (nur nach Klick)", "IP-Adresse, Geräte- und Browserdaten", "Google Ireland Ltd. / Google LLC (USA)", "Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, 2-Klick-Lösung)", "Keine Speicherung bei uns; Dauer bei Google gemäß deren Datenschutzerklärung"],
                    ["Schriftarten und Icons", "keine – lokal von unserem Server geladen", "kein Drittanbieter, keine Verbindung zu Google Fonts o. Ä.", "entfällt", "entfällt"],
                    ["Technisch notwendige Speicherung im Browser (Einwilligungs-Nachweis)", "Entscheidung, Zeitstempel, Textversion, Methode – ohne personenbezogene Kennung", "verbleibt im Browser des Nutzers, keine Übertragung an uns", "§ 25 Abs. 2 Nr. 2 TDDDG, Art. 6 Abs. 1 lit. f DSGVO", "Bis zum Löschen der Browserdaten"],
                    ["Newsletter / E-Mail-Marketing", "keine – wir versenden keinen Newsletter", "kein Newsletter-Dienstleister im Einsatz", "entfällt", "entfällt"],
                    ["Reichweitenanalyse / Tracking", "keine – derzeit kein Analytics, kein Pixel, kein Profiling; eine Einbindung erfolgt nur nach Opt-in im Cookie-Banner", "keine Empfänger", "Art. 6 Abs. 1 lit. a DSGVO / § 25 Abs. 1 TDDDG (falls künftig aktiviert)", "entfällt"],
                    ["Verlinkung zu Social Media & Bewertungsportalen", "erst nach Klick durch den Nutzer beim jeweiligen Anbieter", "Instagram/Meta, Google, TripAdvisor, Komoot (eigene Verantwortung)", "Art. 6 Abs. 1 lit. f DSGVO (reiner Link)", "Keine Speicherung bei uns"],
                    ["Quellcode-Verwaltung (GitHub)", "keine Besucherdaten – nur unser Programmcode und Bearbeitungshistorie", "GitHub, Inc. (USA/EU, EU-Standardvertragsklauseln)", "Art. 6 Abs. 1 lit. f DSGVO", "Solange das Repository besteht"],
                    ["KI-Werkzeuge zur Website-Erstellung", "keine Gästedaten – nur eigene redaktionelle Inhalte und Prompts", "OpenAI (ChatGPT), Anthropic (Claude), Google (Gemini), Lovable, Higgsfield – jeweils nur intern von uns genutzt, kein Kontakt beim Seitenaufruf", "Art. 6 Abs. 1 lit. f DSGVO", "Keine Speicherung personenbezogener Gästedaten"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <td key={i} style={{ padding: "10px 12px", border: `1px solid ${bronze}33`, verticalAlign: "top", lineHeight: 1.6 }}>
                          {i === 0 ? <strong>{cell}</strong> : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <P>
              Es findet keine Übermittlung Ihrer Daten in Drittländer statt, außer soweit dies in
              den oben genannten Fällen (Cloudflare, Google Maps nach Einwilligung) beschrieben
              ist. Grundlage sind dort die EU-Standardvertragsklauseln bzw. das
              EU-US Data Privacy Framework. Ein Verkauf von Daten findet nicht statt.
            </P>
          </Section>

          <Divider />

          <Section>
            <H2>18. Aktualität und Änderung dieser Datenschutzerklärung</H2>
            <P>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juli 2026.
            </P>
            <P>
              Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter
              gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese
              Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann
              jederzeit auf unserer Website abgerufen werden.
            </P>
          </Section>
        </div>
      </section>
    </Layout>
  );
};

export default Datenschutz;
