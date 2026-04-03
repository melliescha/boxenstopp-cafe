import { Clock } from "lucide-react";

const hours = [
  { days: "Montag – Freitag", time: "15:00 – 20:00 Uhr" },
  { days: "Samstag", time: "10:30 – 15:30 Uhr" },
  { days: "Sonntag", time: "11:00 – 16:00 Uhr" },
];

const HoursSection = () => {
  return (
    <section id="hours" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-warm-gold font-medium tracking-[0.2em] uppercase text-sm mb-2">Wann wir da sind</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Öffnungszeiten</h2>
        </div>

        <div className="max-w-md mx-auto bg-primary-foreground/10 rounded-xl p-8">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <Clock className="w-7 h-7 text-warm-gold" />
            </div>
          </div>
          <div className="space-y-4">
            {hours.map((h) => (
              <div key={h.days} className="flex justify-between items-center text-sm">
                <span className="font-medium">{h.days}</span>
                <span className="text-primary-foreground/80">{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursSection;
