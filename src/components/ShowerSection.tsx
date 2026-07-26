import { ShowerHead, Bike, Footprints, Briefcase, Route, Caravan, Euro } from "lucide-react";
import { isShowerFeatureVisible, shower } from "@/lib/features";

const useCases = [
  {
    icon: Bike,
    label: "Nach der Fahrradtour",
    text: "Direkt am Bodensee-Königssee-Radweg und an der Leiblachroute.",
  },
  {
    icon: Footprints,
    label: "Nach dem Joggen",
    text: "Frisch geduscht weiter, bevor ihr nach Hause fahrt.",
  },
  {
    icon: Briefcase,
    label: "Vor der Arbeit",
    text: "Schnell noch eine Dusche einlegen, wenn die Zeit knapp ist.",
  },
  {
    icon: Route,
    label: "Auf langer Durchreise",
    text: "Ein willkommener Boxenstopp zwischen zwei Etappen.",
  },
  {
    icon: Caravan,
    label: "Für Camper",
    text: "Wohnmobil-Stopp mit frischer Dusche und gutem Kaffee.",
  },
  {
    icon: Euro,
    label: `Duschen für ${shower.price} pro Person`,
    text: `Kinder unter ${shower.kidsAge} Jahren kostenlos in Begleitung der Eltern. Handtuch mitbringen oder bei uns erfragen.`,
  },
];

const ShowerSection = () => {
  if (!isShowerFeatureVisible()) return null;

  return (
    <section
      className="py-20"
      style={{
        backgroundColor: "#FEF4EC",
        borderTop: "1px solid #9E7C4E33",
        borderBottom: "1px solid #9E7C4E33",
      }}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10">
          <div className="w-14 h-14 rounded-full bg-bronze/10 flex items-center justify-center mx-auto mb-5">
            <ShowerHead className="w-7 h-7 text-bronze" aria-hidden="true" />
          </div>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold"
            style={{ color: "#164472" }}
          >
            Frisch geduscht weiter
          </h2>
          <p className="mt-3 text-lg" style={{ color: "#6B4A2E" }}>
            Bei uns kannst du nicht nur aufladen, du kannst dich auch frisch machen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {useCases.map((u) => (
            <div
              key={u.label}
              className="bg-white rounded-xl p-6 shadow-sm border border-[#EDE0D0] text-center"
            >
              <u.icon
                className="w-8 h-8 mx-auto mb-3 text-bronze"
                aria-hidden="true"
              />
              <h3
                className="font-serif text-lg font-semibold mb-2"
                style={{ color: "#164472" }}
              >
                {u.label}
              </h3>
              <p className="text-sm" style={{ color: "#6B4A2E" }}>
                {u.text}
              </p>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-6 md:p-8 text-center"
          style={{ backgroundColor: "#164472", color: "#FEF4EC" }}
        >
          <p className="font-serif text-xl md:text-2xl font-bold mb-3">
            Duschen für {shower.price} pro Person
          </p>
          <p className="text-base" style={{ color: "#FEF4ECCC" }}>
            Kinder unter {shower.kidsAge} Jahren kostenlos in Begleitung der Eltern.
          </p>
          <p className="text-sm mt-4" style={{ color: "#FEF4ECAA" }}>
            Handtuch mitbringen oder bei uns erfragen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowerSection;
