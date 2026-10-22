import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WelcomeBanner from "./WelcomeBanner";
import CookieBanner from "./CookieBanner";
import MobileBottomNav from "./MobileBottomNav";
import VacationDialog from "./VacationDialog";
import { isAutumnActive, isWinterActive } from "@/lib/season";

const Layout = ({ children }: { children: ReactNode }) => {
  const seasonClass = isWinterActive() ? "season-winter" : isAutumnActive() ? "season-autumn" : "";

  // Die Saisonfarben müssen auf dem HTML-Element sitzen, sonst erreicht die
  // Überschreibung den Hintergrund der Seite (body) nicht.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("season-autumn", "season-winter");
    if (seasonClass) root.classList.add(seasonClass);
  }, [seasonClass]);

  return (
    <div className="min-h-dvh flex flex-col">
      {/* Skip to content link, visible on focus only */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-primary focus:text-primary-foreground focus:shadow-lg"
      >
        Zum Inhalt springen
      </a>
      <WelcomeBanner />
      <Navbar />
      <main id="main-content" className="flex-1 pb-[64px] lg:pb-0">
        {children}
      </main>
      <Footer />
      <CookieBanner />
      <MobileBottomNav />
      <VacationDialog />
    </div>
  );
};

export default Layout;
