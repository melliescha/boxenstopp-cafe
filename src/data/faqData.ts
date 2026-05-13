export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqBlock {
  id: string;
  icon: string;
  title: string;
  items: FaqItem[];
}

export const faqBlocks: FaqBlock[] = [
  {
    id: "trau-dich-rein",
    icon: "🤝",
    title: "Trau dich rein",
    items: [
      {
        question: "Ist euer Bistro auf einem Privatgrundstück? Darf ich da einfach so hinkommen?",
        answer:
          "Ja, ihr dürft! Das Gebäude ist gleichzeitig unser Einfamilienhaus, das verwirrt viele. Außen führt eine Treppe nach unten zur Terrasse und zum Eingang. Genau da kommt ihr rein. Auf dem Schild seht ihr \"Bistro Boxenstopp\" und \"FITES Allgäu\", beides ist im selben Gebäude. Also: einfach die Treppe runter, Türe auf, willkommen!",
      },
      {
        question: "Muss ich Fitnessmitglied bei FITES sein, um ins Bistro zu kommen?",
        answer:
          "Auf gar keinen Fall! Wir sind ein eigenständiges Bistro. Du kannst einfach auf einen Kaffee, einen Flammkuchen oder unser Holzfällerbrot vorbeikommen, ohne jemals ein Fitnessstudio von innen zu sehen. Versprochen.",
      },
      {
        question: "Wie finde ich rein? Wo ist der Eingang?",
        answer:
          "Wir liegen am Südhang 1 in Hergatz / Wohmbrechts. Von außen seht ihr eine Treppe, die nach unten führt. Die kommt euch direkt zu uns. Folgt einfach den Schildern \"Bistro Boxenstopp\". Wir freuen uns auf euch.",
      },
      {
        question: "Bin ich hier richtig, wenn ich einfach nur Kaffee trinken will?",
        answer:
          "Absolut, du bist sogar GENAU richtig. Unser Name kommt nicht zufällig \"Boxenstopp\". Egal ob nach der Arbeit, nach einer Radtour, einem Spaziergang durch Hergatz oder einfach so, wir sind dein Stopp zum Durchatmen.",
      },
      {
        question: "Ist das nicht eigentlich nur ein Ort für Sportler?",
        answer:
          "Verstehen wir total, dass das so ankommt. Antwort: nein. Wir sind ein gemütliches Bistro für ALLE. Nachbarn, Radfahrer, Spaziergänger, Familien, Pendler. Sportler sind natürlich auch dabei, aber wir sind kein Fitness Café. Wir sind ein Bistro mit Kaffee, Flammkuchen und Holzfällerbrot.",
      },
    ],
  },
  {
    id: "was-uns-besonders-macht",
    icon: "🏠",
    title: "Was uns besonders macht",
    items: [
      {
        question: "Warum heißt es eigentlich \"Boxenstopp\"?",
        answer:
          "Weil das genau das ist, was wir euch bieten wollen: einen Boxenstopp. Egal ob ihr von der Arbeit nach Hause fahrt und nochmal entspannen wollt, nach der Fahrradtour auf dem Bodensee Königssee Radweg oder der Leiblachroute eine Pause braucht, nach einem Spaziergang durch Hergatz Energie tankt, oder einfach mal aus der Nachbarschaft kommt. Aufladen mit guten Getränken, Snacks und Ruhe. Das ist Boxenstopp.",
      },
      {
        question: "Hieß das nicht früher \"Café Boxenstopp\"? Warum jetzt \"Bistro\"?",
        answer:
          "Genau, wir haben uns weiterentwickelt. Davor hatten wir nur Kaffee und Nährshakes. Heute servieren wir auch herzhafte Snacks wie Flammkuchen und unser Holzfällerbrot. Damit der Name unsere Karte besser widerspiegelt, ist aus dem Café ein Bistro geworden.",
      },
      {
        question: "Was ist denn der \"Boxenstopp Spezial\"?",
        answer:
          "Das ist unser Signature Drink und ehrlich gesagt das, was wir selbst jeden Tag trinken: ein Kollagen Latte Macchiato mit Roh Kakao und Meersalz. Klingt erstmal ungewöhnlich, aber probiert's. Wir dachten, was uns so gut schmeckt, schmeckt unseren Gästen auch.",
      },
      {
        question: "Was ist euer Holzfällerbrot?",
        answer:
          "Unsere absolute Spezialität: Holzfällerbrot Speck, ein herzhaftes Schwarzbrot belegt mit Knoblauchbutter, Käse, Speck, Zwiebeln und frischem Schnittlauch. Deftig, kräftig, ehrlich. Genau das Richtige nach Radtour, Spaziergang oder einfach gegen den Hunger.",
      },
      {
        question: "Ihr seid ein Fitnessstudio. Wie passt da Flammkuchen rein?",
        answer:
          "Gute Frage, die wir oft hören! Eugen ist seit 30+ Jahren Trainer, Ernährungsberater und Personaltrainer. Wir leben gesund, aber gesund bedeutet für uns: ausgewogen und ohne Verzicht. Was uns wichtig ist: keine Massenware mit unnötigen Zusatzstoffen. Deshalb arbeiten wir auch nur mit Partnern, die diese Philosophie teilen.",
      },
    ],
  },
  {
    id: "unsere-partner",
    icon: "🌍",
    title: "Unsere Partner",
    items: [
      {
        question: "Was ist Cup&Cino und warum dieser Kaffee?",
        answer:
          "Cup&Cino liefert uns Barista Kaffee in absoluter Spitzenqualität, einfach das Beste vom Besten. Außerdem unterstützt die Cup&Cino Foundation Projekte für sauberes Trinkwasser. Mit jeder Tasse, die ihr bei uns trinkt, geht ein Beitrag dorthin. Kaffee genießen und Gutes tun, das gehört bei uns zusammen.",
      },
      {
        question: "Herbalife? Wir sind skeptisch...",
        answer:
          "Verstehen wir, wir hören das oft. Die Marke polarisiert. Unsere Antwort: Wir nutzen Herbalife seit über 20 Jahren selbst. Eugen ist deshalb sogar VIP Berater. Was uns überzeugt: extrem wenige Zusatzstoffe, sehr viele Vitamine im Mahlzeitenshake (was die meisten anderen Mahlzeitenshakes nicht haben, die haben oft viele Farbstoffe und kaum Vitamine), und der Geschmack ist natürlich, nicht künstlich. Probiert's einfach selbst.",
      },
      {
        question: "Wer ist Perplex und warum nicht selbstgemacht?",
        answer:
          "Perplex ist unser Partner für Flammkuchen. Warum? Weil sie genau unsere Philosophie teilen: keine Massenware mit unnötigen Zusatzstoffen, sondern ehrliche Zutaten. Selbstgemacht klingt schön, aber Perplex liefert eine Qualität, die wir alleine in der Küche nicht so konstant hinbekommen würden. Und das schmeckt ihr.",
      },
    ],
  },
  {
    id: "speisen-getraenke",
    icon: "🍽️",
    title: "Speisen & Getränke",
    items: [
      {
        question: "Habt ihr vegane Optionen?",
        answer:
          "Ehrliche Antwort: Vegane Speisen haben wir aktuell nicht. ABER: Für unseren Matcha Latte bieten wir Hafermilch an. Wir entwickeln uns ständig weiter. Wenn ihr euch mehr Veganes wünscht, sagt uns Bescheid.",
      },
      {
        question: "Habt ihr glutenfreie Optionen?",
        answer:
          "Aktuell leider nicht. Sprecht uns gerne direkt an, wir beraten euch ehrlich was wir für euch tun können. Wichtig ist uns aber, ganz offen zu sein: Wir können keine zöliakiegerechten Speisen anbieten, weil es in unserer Küche zu Kreuzkontamination kommen kann. Wenn ihr also unter Zöliakie leidet, möchten wir euch nicht in Sicherheit wiegen, die wir nicht garantieren können.",
      },
      {
        question: "Was ist mit Allergien?",
        answer:
          "Wir kennzeichnen alle 14 Hauptallergene und Zusatzstoffe nach den gesetzlichen Vorgaben. Die detaillierten Zutatenlisten findet ihr auf unserer Website unter der Speisekarte. Bei Unsicherheiten fragt uns einfach, wir beraten euch persönlich.",
      },
      {
        question: "Kann ich alles auch zum Mitnehmen bestellen?",
        answer:
          "Ja, alle Speisen und Getränke gibt's auch to go. Sagt uns einfach Bescheid, wir packen euch alles ein.",
      },
      {
        question: "Was empfehlt IHR eigentlich?",
        answer:
          "Unser Lieblings Trio: Kaffee von Cup&Cino (wir trinken doppelt so viel Kaffee seit der Eröffnung), das Holzfällerbrot und natürlich der Boxenstopp Spezial. Das ist, was wir selbst jeden Tag bestellen.",
      },
      {
        question: "Was kostet ein Kaffee bei euch ungefähr?",
        answer:
          "Wir bewegen uns im normalen Bistro Preisniveau. Kaffee, Flammkuchen und Snacks sind fair und transparent kalkuliert. Die genauen Preise findet ihr auf unserer Speisekarte.",
      },
    ],
  },
  {
    id: "raeumlichkeiten-komfort",
    icon: "🛋️",
    title: "Räumlichkeiten & Komfort",
    items: [
      {
        question: "Wie viele Sitzplätze habt ihr drinnen?",
        answer:
          "Drinnen haben wir einen gemütlichen Sitzbereich mit 3 Tischen für 6 bis 8 Personen plus 4 weitere gemütliche Plätze im Eingangsbereich. Insgesamt also Platz für etwa 10 bis 12 Gäste drinnen.",
      },
      {
        question: "Habt ihr eine Terrasse?",
        answer:
          "Unser Highlight! Auf der Außenterrasse haben locker 20 bis 30 Personen Platz. Die Terrasse ist nicht überdacht, liegt aber durch unsere Hauslage angenehm im Schatten. Auch im Hochsommer kühl genug. Plus: wir haben einen riesigen Sonnen und Regenschirm parat.",
      },
      {
        question: "Was, wenn es regnet?",
        answer:
          "Drinnen ist es immer gemütlich. Und für den Übergang haben wir auf der Terrasse einen großen Regenschirm, unter dem ihr trocken sitzt.",
      },
      {
        question: "Habt ihr Toiletten?",
        answer:
          "Ja, zwei einzelne, verschließbare Toiletten für maximale Privatsphäre. Getrennt für Damen und Herren.",
      },
      {
        question: "Habt ihr WLAN?",
        answer:
          "Aktuell leider noch nicht, wir bitten um Verständnis. Genießt einfach mal eine Pause vom Internet.",
      },
      {
        question: "Sind Familien mit Kindern willkommen?",
        answer: "Auf jeden Fall! Kommt gerne vorbei.",
      },
      {
        question: "Dürfen Hunde mit?",
        answer:
          "Im Außenbereich, also auf der Terrasse, sind eure Vierbeiner herzlich willkommen.",
      },
    ],
  },
  {
    id: "radfahrer-sportler",
    icon: "🚴",
    title: "Für Radfahrer & Sportler",
    items: [
      {
        question: "Liegt ihr wirklich am Bodensee Königssee Radweg?",
        answer:
          "Ja, direkt. Wir liegen auch an der Leiblachroute. Beide führen quasi an unserer Haustür vorbei. Perfekter Stopp für eine Pause auf eurer Tour.",
      },
      {
        question: "Habt ihr einen Fahrradständer?",
        answer:
          "Ja, mit Schließmöglichkeit für eure Räder. Nicht überdacht, aber sicher.",
      },
      {
        question: "Kann ich mein E-Bike bei euch laden?",
        answer:
          "Eine offizielle E-Bike Ladestation haben wir noch nicht. ABER ihr dürft gerne unsere Steckdosen nutzen. Einfach fragen, wir machen das möglich.",
      },
      {
        question: "Was bietet ihr Sportlern?",
        answer:
          "Wir haben Protein und Nährshakes von Herbalife, Mineral und Isogetränke sowie Energie Riegel. Egal ob nach dem Training, nach der Radtour oder zwischendurch, wir versorgen euch.",
      },
      {
        question: "Bietet ihr auch Recovery nach dem Workout im FITES?",
        answer:
          "Klar, wer oben trainiert, kommt unten zur Erholung. Mit Kaffee, Shake oder Holzfällerbrot. Ganz wie du magst.",
      },
    ],
  },
  {
    id: "praktisches",
    icon: "💳",
    title: "Praktisches",
    items: [
      {
        question: "Habt ihr Parkplätze?",
        answer:
          "Ja, 5 Gästeparkplätze direkt am Haus, plus weitere öffentliche Parkplätze in der Nähe. Parken ist also kein Thema.",
      },
      {
        question: "Welche Zahlungsmöglichkeiten habt ihr?",
        answer:
          "Durch unseren Partner SumUp bieten wir alle Zahlungsmöglichkeiten an: Bargeld, EC Karte, Kreditkarte, Apple Pay, Google Pay. Alles geht.",
      },
      {
        question: "Kann ich einen Tisch reservieren?",
        answer:
          "Du kannst reservieren, musst aber nicht. Wenn ihr in größerer Gruppe kommen wollt, freuen wir uns über eine kurze Nachricht. Ist aber keine Pflicht.",
      },
      {
        question: "Reservierung, wie geht das?",
        answer:
          "Am einfachsten per Telefon: 0171 6226201 oder kommt einfach vorbei.",
      },
      {
        question: "Nehmt ihr Gruppen an?",
        answer:
          "Sehr gerne! Größere Gruppen sind willkommen, eine Reservierung wäre da nett, ist aber keine Pflicht. Auf der Terrasse haben wir Platz für 20 bis 30 Personen.",
      },
      {
        question: "Seid ihr barrierefrei?",
        answer:
          "Ehrliche Antwort: nein. Der Zugang führt über eine Treppe nach unten, da können wir leider keine Barrierefreiheit gewährleisten. Wenn ihr Unterstützung braucht, sagt uns Bescheid, wir helfen, wo wir können.",
      },
    ],
  },
  {
    id: "oeffnungszeiten",
    icon: "🕐",
    title: "Öffnungszeiten & Erreichbarkeit",
    items: [
      {
        question: "Wann habt ihr offen?",
        answer:
          "Montag: 15:00 bis 20:00 Uhr. Dienstag: Ruhetag. Mittwoch bis Freitag: 15:00 bis 20:00 Uhr. Samstag: 10:30 bis 15:30 Uhr. Sonntag: 11:00 bis 16:00 Uhr.",
      },
      {
        question: "Wünscht ihr euch andere Öffnungszeiten?",
        answer:
          "Aktuell haben wir bewusst Nachmittags und Abendzeiten gewählt, weil unser Bistro noch jung ist. Wenn ihr euch eine Erweiterung wünscht, zum Beispiel Frühstück oder Mittagstisch, sagt uns Bescheid. Wir freuen uns über jedes Feedback und entwickeln uns gerne mit euch weiter.",
      },
      {
        question: "Was ist an Feiertagen?",
        answer:
          "Spezielle Öffnungszeiten an Feiertagen und unsere Urlaubszeiten geben wir rechtzeitig auf unserer Website, bei Instagram, Facebook und Google bekannt. Schaut da am besten kurz rein.",
      },
      {
        question: "Wie erreiche ich euch?",
        answer:
          "Telefon: 0171 6226201. Website: bistro-boxenstopp.de. Adresse: Südhang 1, 88145 Hergatz / Wohmbrechts.",
      },
    ],
  },
  {
    id: "wir-eure-stimme",
    icon: "💛",
    title: "Wir + eure Stimme",
    items: [
      {
        question: "Habt ihr Stammkunden Vorteile oder ein Treueprogramm?",
        answer:
          "Wir entwickeln uns gerade dorthin. Fragt einfach mal bei eurem nächsten Besuch nach. Persönlich geht bei uns sowieso vor.",
      },
      {
        question: "Wie kann ich euch Feedback geben?",
        answer:
          "Direkt im Bistro, per Anruf, per Mail, auf Google oder TripAdvisor. Jedes Feedback freut uns. Auch Wünsche und Ideen: kommt damit auf uns zu! Wir entwickeln uns mit unseren Gästen.",
      },
      {
        question: "Wo seht ihr euch in einem Jahr?",
        answer:
          "Als fester Pfeiler in der Gemeinde Hergatz. Wir laden euch ein in unser Zuhause und hoffen, dass es bald auch euer Stammplatz zum Verweilen und Quatschen wird.",
      },
    ],
  },
  {
    id: "kritische-fragen",
    icon: "💬",
    title: "Kritische Fragen und ehrliche Antworten",
    items: [
      {
        question: "Wer steht hinter dem Bistro?",
        answer:
          "Wir sind Eugen und Helena Schall. Eine Familie, die sich vor einigen Jahren in das Westallgäu verliebt hat. Wir kamen vom Bodensee, haben hier unser Grundstück gekauft und Hergatz zu unserem Zuhause gemacht. Was uns hierhergezogen hat: die Ruhe, die Landschaft, die Bodenständigkeit der Menschen. Wir leben hier, wir bauen hier, wir wollen hier alt werden. Das Bistro Boxenstopp ist unser Beitrag zur Gemeinde, eingerichtet mit dem Wunsch, dass es bald euer Stammplatz wird.",
      },
      {
        question: "Holzfällerbrot? Das macht doch jeder. Was ist daran besonders?",
        answer:
          "Ehrlich gesagt: Wir machen das Brot nicht selbst, das kommt ofenfrisch und handbelegt von unserem Partner Perplex. Klingt simpel, aber wenn ihr es einmal probiert habt, garantieren wir euch: ihr kommt wieder. Simpel, deftig, einfach nur gut.",
      },
      {
        question: "Ein Café mit Eiweißshakes und Kollagen-Kaffee. Ist das nicht Hipster-Quatsch fürs Instagram?",
        answer:
          "Ja, klingt erstmal nach Hipster Berlin, wir verstehen die Skepsis komplett. Aber was sollen wir sagen: schmeckt halt und hat einige Vorteile. Da spielt natürlich auch das Ernährungsberater-Herz mit rein. Wenn ihr's nicht runterkriegt, sprecht uns an und wir bringen euch einen normalen Café Crème. Das Gleiche gilt für den Matcha Latte (oder wie wir sagen: Matsche Latsche). Probieren geht über studieren.",
      },
      {
        question: "Was kostet ein Kaffee bei euch? Wahrscheinlich wieder so überzogen wie überall.",
        answer:
          "Ganz ehrlich: faire Preise waren uns am wichtigsten. Das letzte was wir brauchen sind 5-Euro-Cappuccinos wie in Berlin. Gerade deshalb haben wir uns in der Region umgesehen und können auf jeden Fall mithalten, manche Optionen sind sogar günstiger. Auch unsere ofenfrischen Speisen sind nicht nur konkurrenzfähig: Mit unserem Pizzasnack haben wir auch eine Option für den kleinen Hunger und den schmalen Geldbeutel.",
      },
      {
        question: "Wieso soll ich extra nach Hergatz / Wohmbrechts fahren, wenn ich in Lindau oder Wangen alles habe?",
        answer:
          "Müsst ihr nicht. Was uns aber besonders macht, ist die absolute und idyllische Ruhe. Keine Frage, wir lieben auch Lindau und den Bodensee, aber manchmal braucht man einfach Ruhe vom Trubel. Genau das findet ihr bei uns.",
      },
      {
        question: "Macht ihr selbst was, oder kommt alles aus der Tiefkühltruhe?",
        answer:
          "Alle unsere ofenfrischen Speisen kommen von unserem Partner Perplex. Auch wenn diese tiefgefroren sind: das ist keine Massenware aus dem Supermarkt. Alles ist handbelegt und hergemacht mit frischen Zutaten. Vergleichbar damit, wenn ihr euch einen Flammkuchen selbst macht und für später einfriert. Ganz ehrlich: Kaum noch ein Restaurant bietet frische Flammkuchen an. Wir sind ehrlich mit euch und listen alle Nährwerte, Inhaltsstoffe und unsere Lieferanten transparent auf.",
      },
      {
        question: "Eugen ist VIP-Berater bei Herbalife. Wollt ihr uns das jetzt verkaufen?",
        answer:
          "Verstehen wir, dass die Frage kommt. Klare Antwort: Nein. Wir verkaufen euch keinen Shake, den ihr nicht wollt. Bei uns gibt's Herbalife als Option auf der Karte. Eugen ist zwar VIP-Berater, aber absolut kein \"Kauf-mein-Produkt-Mensch\". Deshalb gibt es nur auf explizite Anfrage eine Beratung. Ehrlich: Nicht jeder braucht Shakes, und ohne Beratung und als Wundermittel würde Eugen es sowieso nicht verkaufen. Den meisten Umsatz macht Eugen selbst bei Herbalife. Den aktiven Verkauf und vor allem das Werben \"kommt in mein Team und verkauft auch\" oder sonstiges machen wir nicht. Ihr werdet bei uns niemals zu einer Verkaufspräsentation gezwungen oder mit Pamphleten beschossen.",
      },
      {
        question: "Wie lange seid ihr schon hier? Werdet ihr in einem Jahr wieder weg sein?",
        answer:
          "Wir sind hier um zu bleiben. Wir haben uns bewusst für Hergatz entschieden, hier ist unser Zuhause, hier soll auch unser Bistro langfristig sein. Wir investieren in die Region, in die Menschen, in den Aufbau. Ein Bistro baut sich nicht in drei Monaten auf. Wir nehmen uns die Zeit. Und wir bleiben.",
      },
      {
        question: "Im Sommer 2025 eröffnet und schon wieder Namensänderung. Wirkt unsicher.",
        answer:
          "Stimmt, das könnte so wirken. Unsere Wahrheit: Wir haben uns weiterentwickelt. Erst Café mit Kaffee und Shakes, dann gemerkt: unsere Gäste wollen mehr Auswahl. Also Flammkuchen und Holzfällerbrot dazu, und damit der Name zur Karte passt: aus Café wurde Bistro. Das ist kein Strategiewechsel, sondern Wachstum. Ein junges Unternehmen, das sich anpasst und seine Gäste ernst nimmt, das ist gesund, nicht unsicher.",
      },
      {
        question: "Gehört da nicht das Fitnessstudio dazu? Werde ich da mit Werbung zugemüllt?",
        answer:
          "Nein. Im Bistro Boxenstopp zwingt euch keiner 10 Liegestütze zu machen bevor euch ein Kaffee serviert wird. Wer sich für FITES interessiert, fragt uns. Wer nicht, kriegt einen Kaffee und seine Ruhe. Versprochen.",
      },
      {
        question: "Ist das wieder so ein \"Konzept-Laden\" mit Schickimicki?",
        answer:
          "Wir hoffen nicht. Bei uns gibt's keine Mason Jars, keine Avocado-Toasts, keine Latte Art Wettbewerbe. Wir sind ein bodenständiges Bistro in Hergatz mit gemütlichen Sitzgelegenheiten, ehrlichem Essen und Kaffee, der nach Kaffee schmeckt. Wer Schickimicki sucht, ist in Lindau besser aufgehoben. Wer einen ehrlichen Stopp will, ist bei uns richtig.",
      },
      {
        question: "Werde ich bei euch komisch angeschaut wenn ich nicht durchtrainiert bin oder keinen Sport mache?",
        answer:
          "Niemals. Bei uns sind Familien, Rentner, Radfahrer mit dickem Bauch, Studierende, Handwerker in Arbeitsklamotten und ja, auch Sportler. Wir behandeln jeden gleich. Bei uns gibt's keine Blicke, keine Fitness-Bewertung, kein \"du müsstest mal\". Bei uns gibt's einen Stuhl, einen Kaffee und ein Lächeln.",
      },
      {
        question: "Was unterscheidet euch von einer normalen Bäckerei oder einem Dorfcafé?",
        answer:
          "Wir machen kein Brot. Wir sind keine Kette. Wir laden euch in unser Zuhause ein. Das ist der Unterschied. Es geht nicht um Profit, sondern um Gemeinschaft, Ruhe und Idylle. Ihr seid keine Kunden, ihr seid unsere Nachbarn.",
      },
      {
        question: "Ich vertraue Ketten und großen Marken eh nicht. Wer steht hinter euch?",
        answer:
          "Wir sind keine Kette, sondern ein Familienbetrieb in Hergatz: Eugen und Helena Schall. Eugen ist seit über 20 Jahren als Trainer, Ernährungsberater und Personaltrainer tätig. Wir kümmern uns gemeinsam um das Bistro, das Marketing und die Gäste. Wir entscheiden alles selbst, nichts wird von einer Zentrale vorgegeben. Wenn ihr ein Anliegen habt: kommt zu uns, nicht zu einer Hotline.",
      },
      {
        question: "Versteht ihr Allgäuerisch oder muss ich Hochdeutsch reden bei euch?",
        answer:
          "Schwätzt ruhig Allgäuerisch, wir verstehen euch. Mit ein bisschen Übung schwätzen wir auch zurück (manchmal mit ein paar Anlaufschwierigkeiten, aber wir geben uns Mühe). Sprache ist bei uns kein Hindernis, sondern Teil der Heimat hier. Wenn wir mal was nicht verstehen, fragen wir nach. Ihr seid willkommen, so wie ihr seid.",
      },
      {
        question: "Was passiert, wenn was nicht passt? Reklamation, Beschwerde, schlechte Erfahrung?",
        answer:
          "Direkt sagen. Wir sind dankbar für jedes ehrliche Feedback, auch das unbequeme. Ein Kaffee zu kalt? Sagen, wir machen neu. Was nicht geschmeckt? Sagen, wir reagieren. Schlechte Erfahrung mit dem Service? Sagen, wir lernen. Bei uns gibt's keinen anonymen Beschwerde-Briefkasten. Bei uns gibt's uns, und wir wollen, dass ihr zufrieden seid.",
      },
      {
        question: "Ihr seid doch die mit der ewigen Baustelle. Wirkt absolut unseriös, oder?",
        answer:
          "Wir wissen, dass wir bekannt sind als \"die mit der ewigen Baustelle\". Und das ist ein Thema, das uns sehr schmerzt. Es gibt viele Spekulationen und wilde Theorien, was dahintersteckt. Die Wahrheit? Eigentlich nicht viel. Wir haben am Bodensee gelebt, uns ins Allgäu verliebt, hier unser Grundstück gekauft und dachten: das wird unser großes Glück, in einem Jahr ziehen wir ein. Dann kam alles anders. Keine wilden Theorien, einfach das Leben. Wer kennt schon eine Baustelle, wo alles glatt läuft? Nur hatten wir eben den Worst Case erwischt. Manchmal kann man alles richtig machen und es läuft trotzdem schief. So ist das. Wir leben mittlerweile einige Jahre hier, kennen jede Straße in Hergatz und Wohmbrechts und sind angekommen, auch wenn das Haus es noch nicht ganz ist. Aber genau deshalb sind wir heute hier: weil wir nicht aufgegeben haben. Das Bistro Boxenstopp ist der erste Schritt, dass aus unserem Traum mehr wird als nur eine Baustelle. Wir bauen weiter, Stück für Stück, mit jedem Gast der zu uns findet.",
      },
      {
        question: "Was wird denn aus dem Rest? Wie geht's bei euch weiter?",
        answer:
          "Schritt für Schritt. Das Bistro läuft, das FITES läuft, die Herren-Duschen sind im Umbau und kommen als nächstes. Was danach passiert, entscheiden wir mit der Zeit. Wir machen keine großen Pläne, die wir nicht halten können. Wir bauen, was wir bauen können, und freuen uns über jeden Fortschritt. Wer regelmäßig vorbeikommt, sieht den Wandel mit eigenen Augen.",
      },
    ],
  },
];

export const allFaqs = faqBlocks.flatMap((b) => b.items);
