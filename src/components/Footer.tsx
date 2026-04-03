const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="font-serif text-lg font-semibold text-background mb-2">Boxenstopp</p>
        <p className="text-background/50 text-sm">
          © {new Date().getFullYear()} Boxenstopp Bistro & Café. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
