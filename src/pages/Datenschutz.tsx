import Layout from "@/components/Layout";

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
  return (
    <Layout>
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
            Stand: Mai 2026
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
              FITES – Bistro Boxenstopp<br />
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
            <P>
              Rechtsgrundlage für beide Verarbeitungen: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an einer technisch fehlerfreien Darstellung, schnellen Auslieferung und
              Sicherheit unserer Website).
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
              Beim erstmaligen Aufruf unserer Website werden Sie über die eingesetzten Cookies
              informiert und um Ihre Einwilligung in den Einsatz nicht technisch notwendiger
              Cookies gebeten. Diese Einwilligung können Sie jederzeit über die Einstellungen im
              Cookie-Banner („Cookie-Einstellungen ändern") widerrufen.
            </P>
            <P>Rechtsgrundlage:</P>
            <ul style={{ color: warmBrown, fontSize: 16, lineHeight: 1.7, paddingLeft: 24, marginBottom: 14 }}>
              <li>Für technisch notwendige Cookies: § 25 Abs. 2 Nr. 2 TDDDG, Art. 6 Abs. 1 lit. f DSGVO</li>
              <li>Für optionale Cookies: § 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
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
              Sofern auf unserer Website ein Kontaktformular bereitgestellt wird, werden die im
              Formular eingegebenen Daten zur Bearbeitung Ihrer Anfrage gespeichert. Pflichtfelder
              sind als solche gekennzeichnet. Die Übermittlung erfolgt verschlüsselt.
            </P>
            <P>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) bzw. Art. 6 Abs. 1 lit. b
              DSGVO bei vertragsbezogenen Anfragen.
            </P>
            <P>Speicherdauer: Bis zum Wegfall des Speicherzwecks oder Widerruf der Einwilligung.</P>
          </Section>

          <Divider />

          <Section>
            <H2>9. Google Maps</H2>
            <P>
              Auf unserer Website (insbesondere auf der Seite „Anfahrt") nutzen wir den Kartendienst
              Google Maps der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Irland („Google").
            </P>
            <P>
              Bei Aufruf einer Seite mit eingebundener Google Maps-Karte werden Daten (u. a. Ihre
              IP-Adresse) an Server von Google übermittelt und dort gespeichert. Eine Übermittlung
              in die USA (Google LLC) kann dabei nicht ausgeschlossen werden.
            </P>
            <P>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über den Cookie-Banner).
              Die Karte wird erst geladen, nachdem Sie der Nutzung externer Inhalte zugestimmt
              haben.
            </P>
            <P>
              Drittlandtransfer: Google nimmt am EU-US Data Privacy Framework teil. Damit besteht
              ein Angemessenheitsbeschluss der Europäischen Kommission gem. Art. 45 DSGVO.
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
            <H2>10. Google Fonts (lokal eingebunden)</H2>
            <P>
              Diese Website nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Web
              Fonts. Die verwendeten Google Fonts sind lokal eingebunden und werden direkt von
              unserem Server ausgeliefert. Eine Verbindung zu Servern von Google wird beim Aufruf
              der Seite nicht hergestellt; Ihre IP-Adresse wird daher nicht an Google übertragen.
            </P>
            <P>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
              einheitlichen Darstellung des Schriftbildes).
            </P>
          </Section>

          <Divider />

          <Section>
            <H2>11. Google Reviews / Google Bewertungen</H2>
            <P>
              Auf unserer Website binden wir Bewertungen unseres Google Business Profils ein.
              Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Irland.
            </P>
            <P>
              Bei Aufruf einer Seite mit eingebundenen Google-Bewertungen werden Daten (u. a.
              IP-Adresse) an Google übertragen.
            </P>
            <P>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die Inhalte werden erst
              nach Ihrer Zustimmung im Cookie-Banner geladen.
            </P>
            <P>
              Weitere Informationen:{" "}
              <ExtLink href="https://policies.google.com/privacy">
                https://policies.google.com/privacy
              </ExtLink>
            </P>
          </Section>

          <Divider />

          <Section>
            <H2>12. TripAdvisor Widget</H2>
            <P>
              Auf unserer Website binden wir ein Widget von Tripadvisor LLC, 400 1st Avenue,
              Needham, MA 02494, USA, ein, um Bewertungen unseres Bistros darzustellen.
            </P>
            <P>
              Bei Aufruf einer Seite mit dem Tripadvisor-Widget werden Daten (u. a. IP-Adresse) an
              Server von Tripadvisor in den USA übertragen.
            </P>
            <P>
              Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Das Widget wird erst nach
              Ihrer Zustimmung im Cookie-Banner geladen.
            </P>
            <P>
              Drittlandtransfer: Die Übermittlung in die USA erfolgt auf Grundlage von
              Standardvertragsklauseln gem. Art. 46 Abs. 2 lit. c DSGVO bzw. – soweit zutreffend –
              auf Basis des EU-US Data Privacy Frameworks.
            </P>
            <P>
              Datenschutzerklärung von Tripadvisor:{" "}
              <ExtLink href="https://tripadvisor.mediaroom.com/de-privacy-policy">
                https://tripadvisor.mediaroom.com/de-privacy-policy
              </ExtLink>
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
            <H2>16. Aktualität und Änderung dieser Datenschutzerklärung</H2>
            <P>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2026.
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
