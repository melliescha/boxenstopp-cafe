import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WelcomeBanner from "./WelcomeBanner";
import CookieBanner from "./CookieBanner";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <WelcomeBanner />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Layout;
