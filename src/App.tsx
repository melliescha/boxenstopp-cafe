import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Home is eager (LCP page); other routes are code-split.
import Index from "./pages/Index";
const Menu = lazy(() => import("./pages/Menu"));
const About = lazy(() => import("./pages/About"));
const Partners = lazy(() => import("./pages/Partners"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Contact = lazy(() => import("./pages/Contact"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const QRSpeisekarte = lazy(() => import("./pages/QRSpeisekarte"));
const QRCodePage = lazy(() => import("./pages/QRCodePage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const FAQ = lazy(() => import("./pages/FAQ"));
const BlogRadwegHergatz = lazy(() => import("./pages/BlogRadwegHergatz"));
const FitesAllgaeu = lazy(() => import("./pages/FitesAllgaeu"));

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
        <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
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
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog/bodensee-koenigssee-radweg-hergatz" element={<BlogRadwegHergatz />} />
            <Route path="/fites-allgaeu" element={<FitesAllgaeu />} />
            <Route path="/qr-speisekarte" element={<QRSpeisekarte />} />
            <Route path="/qr-code" element={<QRCodePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
