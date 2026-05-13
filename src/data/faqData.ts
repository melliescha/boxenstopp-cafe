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
          "Unsere absolute Spezialität: Holzfällerbrot Rustikal, ein herzhaftes Schwarzbrot belegt mit Knoblauchbutter, Käse, Speck, Zwiebeln und frischem Schnittlauch. Deftig, kräftig, ehrlich. Genau das Richtige nach Radtour, Spaziergang oder einfach gegen den Hunger.",
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
          "Perplex ist unser Partner für Flammkuchen und Baguettes. Warum? Weil sie genau unsere Philosophie teilen: keine Massenware mit unnötigen Zusatzstoffen, sondern ehrliche Zutaten. Selbstgemacht klingt schön, aber Perplex liefert eine Qualität, die wir alleine in der Küche nicht so konstant hinbekommen würden. Und das schmeckt ihr.",
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
          "Am einfachsten per Telefon: 0171 7622620 oder kommt einfach vorbei.",
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
          "Telefon: 0171 7622620. Website: bistro-boxenstopp.de. Adresse: Südhang 1, 88145 Hergatz / Wohmbrechts.",
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
];

export const allFaqs = faqBlocks.flatMap((b) => b.items);
