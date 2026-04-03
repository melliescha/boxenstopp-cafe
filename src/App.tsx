import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Index from "./pages/Index";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import QRSpeisekarte from "./pages/QRSpeisekarte";
import QRCodePage from "./pages/QRCodePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/speisekarte" element={<Menu />} />
          <Route path="/ueber-uns" element={<About />} />
          <Route path="/partner" element={<Partners />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/bewertungen" element={<Reviews />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/qr-speisekarte" element={<QRSpeisekarte />} />
          <Route path="/qr-code" element={<QRCodePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
