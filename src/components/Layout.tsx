import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WelcomeBanner from "./WelcomeBanner";
import CookieBanner from "./CookieBanner";
import MobileBottomNav from "./MobileBottomNav";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to content link – visible on focus only */}
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
    </div>
  );
};

export default Layout;
