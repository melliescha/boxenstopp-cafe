import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import MenuTileView from "@/components/MenuTileView";
import FlipbookMenu from "@/components/FlipbookMenu";
import { Download, Loader2 } from "lucide-react";
import { toast } from "sonner";

type Tab = "karte" | "flipbook";

const Menu = () => {
  const [tab, setTab] = useState<Tab>("karte");
  const [downloading, setDownloading] = useState(false);

  const handleDownloadPdf = async () => {
    try {
      setDownloading(true);
      const pages = Array.from(
        document.querySelectorAll<HTMLElement>("[data-flip-page]")
      );
      if (pages.length === 0) {
        toast.error("Keine Seiten gefunden.");
        return;
      }

      await document.fonts?.ready;

      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
      });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const exportRoot = document.createElement("div");

      exportRoot.setAttribute("aria-hidden", "true");
      exportRoot.style.position = "fixed";
      exportRoot.style.left = "-10000px";
      exportRoot.style.top = "0";
      exportRoot.style.pointerEvents = "none";
      exportRoot.style.opacity = "0";
      exportRoot.style.zIndex = "-1";
      document.body.appendChild(exportRoot);

      try {
        for (let i = 0; i < pages.length; i++) {
          const el = pages[i];
          const rect = el.getBoundingClientRect();
          const clone = el.cloneNode(true) as HTMLElement;

          clone.removeAttribute("style");
          clone.style.transform = "none";
          clone.style.position = "relative";
          clone.style.display = "block";
          clone.style.visibility = "visible";
          clone.style.opacity = "1";
          clone.style.left = "0";
          clone.style.top = "0";
          clone.style.width = `${Math.max(rect.width, 380)}px`;
          clone.style.height = `${Math.max(rect.height, 620)}px`;
          clone.style.minWidth = clone.style.width;
          clone.style.maxWidth = clone.style.width;
          clone.style.minHeight = clone.style.height;
          clone.style.maxHeight = clone.style.height;
          clone.style.margin = "0";
          clone.style.background = "hsl(28 100% 96%)";
          clone.style.boxShadow = "none";
          clone.querySelectorAll<HTMLElement>("*").forEach((node) => {
            node.style.transform = "none";
            node.style.animation = "none";
            node.style.transition = "none";
          });

          exportRoot.appendChild(clone);

          const cloneWidth = Math.max(clone.offsetWidth, clone.scrollWidth, 380);
          const cloneHeight = Math.max(clone.offsetHeight, clone.scrollHeight, 620);
          clone.style.width = `${cloneWidth}px`;
          clone.style.height = `${cloneHeight}px`;

          const canvas = await html2canvas(clone, {
            scale: 1.5,
            useCORS: true,
            backgroundColor: "#fef4ec",
            logging: false,
          });

          exportRoot.removeChild(clone);

          if (!canvas.width || !canvas.height) {
            throw new Error("PDF page render returned empty canvas");
          }

          const imgData = canvas.toDataURL("image/jpeg", 0.82);
          const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
          const w = Math.max(1, canvas.width * ratio);
          const h = Math.max(1, canvas.height * ratio);
          const x = Math.max(0, (pageWidth - w) / 2);
          const y = Math.max(0, (pageHeight - h) / 2);

          if (i > 0) pdf.addPage();
          pdf.addImage(imgData, "JPEG", x, y, w, h, undefined, "FAST");
        }

        const blob = pdf.output("blob");
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = "Speisekarte-Bistro-Boxenstopp.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } finally {
        document.body.removeChild(exportRoot);
      }

      toast.success("PDF heruntergeladen");
    } catch (err) {
      console.error("PDF download failed", err);
      toast.error("PDF konnte nicht erstellt werden.");
    } finally {
      setDownloading(false);
    }
  };


  useEffect(() => {
    const menuSchema = {
      "@context": "https://schema.org",
      "@type": "Menu",
      "name": "Speisekarte Bistro Boxenstopp",
      "inLanguage": "de",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Kaffeespezialitäten",
          "description": "Barista-Kaffee von Cup&Cino in Spitzenqualität",
          "hasMenuItem": [
            {"@type": "MenuItem", "name": "Espresso"},
            {"@type": "MenuItem", "name": "Cappuccino"},
            {"@type": "MenuItem", "name": "Latte Macchiato"},
            {"@type": "MenuItem", "name": "Café Crème"},
            {"@type": "MenuItem", "name": "Boxenstopp Spezial", "description": "Kollagen Latte Macchiato mit Roh-Kakao und Meersalz, unser Signature Drink"},
            {"@type": "MenuItem", "name": "Matcha Latte", "description": "Mit Hafermilch optional"},
          ],
        },
        {
          "@type": "MenuSection",
          "name": "Herzhaft",
          "description": "Ofenfrische Speisen von unserem Partner Perplex, handbelegt",
          "hasMenuItem": [
            {"@type": "MenuItem", "name": "Flammkuchen", "description": "Verschiedene Sorten, ofenfrisch"},
            {"@type": "MenuItem", "name": "Hüttenbrot Speck", "description": "Schwarzbrot mit Knoblauchbutter, Käse, Speck, Zwiebeln und Schnittlauch"},
            {"@type": "MenuItem", "name": "Hüttenbrot Tomate Mozzarella"},
            {"@type": "MenuItem", "name": "Hüttenbrot Raclette"},
            {"@type": "MenuItem", "name": "Gourmet Baguette"},
            {"@type": "MenuItem", "name": "Pizza-Snack", "description": "Kleiner Hunger, kleiner Preis"},
            
          ],
        },
        {
          "@type": "MenuSection",
          "name": "Sportler-Drinks",
          "description": "Energie für vor, während und nach dem Workout",
          "hasMenuItem": [
            {"@type": "MenuItem", "name": "Herbalife Protein-Shake"},
            {"@type": "MenuItem", "name": "Herbalife Nähr-Shake"},
            {"@type": "MenuItem", "name": "Iso-Mineralgetränke"},
          ],
        },
      ],
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "menu-schema";
    script.textContent = JSON.stringify(menuSchema);
    document.head.appendChild(script);
    return () => {
      const existing = document.head.querySelector('script[id="menu-schema"]');
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  return (
    <Layout>
      <SEO title="Speisekarte – Bistro Boxenstopp Hergatz" description="Unsere Karte: Flammkuchen, Pizza-Snacks, rustikale Brote, Barista-Kaffee, Matcha, Proteinshakes, alkoholfreies Bier und der berühmte Boxenstopp-Spezial mit Kollagen." path="/speisekarte" />
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* Page title */}
          <div className="text-center mb-10">
            <p className="text-bronze font-medium tracking-[0.2em] uppercase text-sm mb-2">Unsere Auswahl</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Speisekarte</h1>
            <div className="divider-bronze mb-8" />

            {/* Tab switcher */}
            <div className="inline-flex rounded-lg border border-bronze/40 overflow-hidden no-print">
              <button
                onClick={() => setTab("karte")}
                className={`font-serif text-sm sm:text-base px-5 sm:px-8 py-2.5 transition-colors ${
                  tab === "karte"
                    ? "bg-bronze text-bronze-foreground"
                    : "bg-transparent text-bronze hover:bg-bronze/10"
                }`}
              >
                Unsere Karte
              </button>
              <button
                onClick={() => setTab("flipbook")}
                className={`font-serif text-sm sm:text-base px-5 sm:px-8 py-2.5 transition-colors ${
                  tab === "flipbook"
                    ? "bg-bronze text-bronze-foreground"
                    : "bg-transparent text-bronze hover:bg-bronze/10"
                }`}
              >
                Speisekarte zum Blättern
              </button>
            </div>
          </div>

          {/* Flipbook toolbar */}
          {tab === "flipbook" && (
            <div className="flex justify-end mb-4 no-print">
              <button
                type="button"
                onClick={handleDownloadPdf}
                disabled={downloading}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-lg px-4 py-2 disabled:opacity-60"
              >
                {downloading ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
                {downloading ? "Erstelle PDF…" : "Als PDF herunterladen"}
              </button>
            </div>
          )}

          {/* Tab content */}
          {tab === "karte" && <MenuTileView />}
          {tab === "flipbook" && <FlipbookMenu />}

        </div>
      </section>
    </Layout>
  );
};

export default Menu;
