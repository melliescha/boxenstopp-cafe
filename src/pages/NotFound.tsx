import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import logoIcon from "@/assets/logo-icon.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEO title="Seite nicht gefunden (404) | Bistro Boxenstopp" description="Diese Seite existiert nicht. Kehren Sie zur Startseite des Bistro Boxenstopp in Hergatz zurück." path="/404" />
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 text-center max-w-lg">
          <img src={logoIcon} alt="Bistro Boxenstopp" className="h-28 md:h-36 w-auto mx-auto mb-8 opacity-80" />
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">404</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Hier gibt's leider nichts, aber im Bistro schon!
          </p>
          <Link
            to="/"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Zur Startseite
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
