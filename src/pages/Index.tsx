import WelcomeBanner from "@/components/WelcomeBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CyclistSection from "@/components/CyclistSection";
import MenuSection from "@/components/MenuSection";
import HoursSection from "@/components/HoursSection";
import DirectionsSection from "@/components/DirectionsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WelcomeBanner />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CyclistSection />
      <MenuSection />
      <HoursSection />
      <DirectionsSection />
      <Footer />
    </div>
  );
};

export default Index;
