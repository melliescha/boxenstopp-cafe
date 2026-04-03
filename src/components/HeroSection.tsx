import heroBg from "@/assets/hero-bistro.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Bistro Boxenstopp Innenansicht mit Kaffee und Gebäck"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/65" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-warm-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in-up">
          Bistro & Café
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Bistro Boxenstopp
        </h1>
        <p className="text-primary-foreground/85 text-lg md:text-xl max-w-xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Dein Boxenstopp beim Eugen – Tank Energie auf, ob nach dem Workout oder auf der Radtour.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <a
            href="#menu"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Zur Speisekarte
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
