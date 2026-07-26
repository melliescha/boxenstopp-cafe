// Schema.org JSON-LD helpers for per-route markup.
// Sitewide CafeOrCoffeeShop lives in index.html as the base LocalBusiness signal.

const SITE_URL = "https://bistro-boxenstopp.de";
const BUSINESS_ID = `${SITE_URL}/#business`;

const address = {
  "@type": "PostalAddress",
  streetAddress: "Südhang 1",
  addressLocality: "Hergatz",
  postalCode: "88145",
  addressRegion: "Bayern",
  addressCountry: "DE",
};

const geo = {
  "@type": "GeoCoordinates",
  latitude: 47.6489,
  longitude: 9.852,
};

const openingHours = [
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday"], opens: "15:00", closes: "20:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Wednesday", "Thursday", "Friday"], opens: "15:00", closes: "20:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "10:30", closes: "15:30" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "11:00", closes: "16:00" },
];

const sameAs = [
  "https://www.facebook.com/profile.php?id=61582234436103",
  "https://www.instagram.com/bistro.boxenstopp",
];

/** Base LocalBusiness reference (used by Home + Contact + Menu). */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "CafeOrCoffeeShop", "Restaurant"],
  "@id": BUSINESS_ID,
  name: "Bistro Boxenstopp",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/favicon.png`,
  telephone: "+491716226201",
  email: "fit.es@icloud.com",
  priceRange: "€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card, EC Card, Apple Pay, Google Pay",
  address,
  geo,
  hasMap: "https://www.google.com/maps?q=Bistro+Boxenstopp+Südhang+1+88145+Hergatz",
  openingHoursSpecification: openingHours,
  servesCuisine: ["Flammkuchen", "Pizza", "Barista-Kaffee", "Proteinshakes", "Hüttenbrot"],
  acceptsReservations: true,
  smokingAllowed: false,
  publicAccess: true,
  areaServed: ["Hergatz", "Westallgäu", "Wangen im Allgäu", "Lindau", "Bodensee"],
  description:
    "Bistro Boxenstopp in Hergatz im Westallgäu, Barista-Kaffee, handgemachte Flammkuchen, Hüttenbrot und Proteinshakes direkt am Bodensee-Königssee-Radweg und an der Leiblachroute.",
  sameAs,
};

/** Contact page: LocalBusiness with ContactPage wrapper. */
export const contactPageSchema = [
  localBusinessSchema,
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${SITE_URL}/kontakt`,
    name: "Anfahrt & Kontakt, Bistro Boxenstopp",
    about: { "@id": BUSINESS_ID },
  },
];

/** Menu page: Restaurant with hasMenu link. */
export const menuPageSchema = {
  ...localBusinessSchema,
  hasMenu: {
    "@type": "Menu",
    name: "Speisekarte Bistro Boxenstopp",
    url: `${SITE_URL}/speisekarte`,
    inLanguage: "de",
  },
};
