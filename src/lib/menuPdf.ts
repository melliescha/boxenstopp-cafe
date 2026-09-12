import { jsPDF } from "jspdf";
import { menuCategories, menuProducts } from "@/data/menuData";

const MARGIN = 16;
const PAGE_W = 210;
const PAGE_H = 297;
const CONTENT_W = PAGE_W - MARGIN * 2;

const NAVY: [number, number, number] = [22, 68, 114];
const BRONZE: [number, number, number] = [158, 124, 78];
const TEXT: [number, number, number] = [60, 45, 35];

// Entfernt Zeichen, die die PDF-Schrift nicht darstellen kann (z. B. ★, Emojis)
const clean = (s: string) =>
  s
    .replace(/[^\u0020-\u00FF]/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();

export const downloadMenuPdf = () => {
  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  let y = MARGIN;

  const ensureSpace = (needed: number) => {
    if (y + needed > PAGE_H - MARGIN - 12) {
      pdf.addPage();
      y = MARGIN;
    }
  };

  const footer = () => {
    const pages = pdf.getNumberOfPages();
    for (let i = 1; i <= pages; i++) {
      pdf.setPage(i);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(...TEXT);
      pdf.text(
        "Bistro Boxenstopp, Südhang 1, 88145 Hergatz · bistro-boxenstopp.de · Alle Preise inkl. MwSt.",
        PAGE_W / 2,
        PAGE_H - 8,
        { align: "center" }
      );
    }
  };

  // Header
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(20);
  pdf.setTextColor(...NAVY);
  pdf.text("Bistro Boxenstopp", PAGE_W / 2, y, { align: "center" });
  y += 8;

  pdf.setFontSize(13);
  pdf.setTextColor(...BRONZE);
  pdf.text("Speisekarte", PAGE_W / 2, y, { align: "center" });
  y += 6;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(9);
  pdf.setTextColor(...TEXT);
  pdf.text(
    "Barista-Kaffee, ofenfrische Flammkuchen, Hüttenbrote und mehr, in Hergatz-Wohmbrechts im Westallgäu.",
    PAGE_W / 2,
    y,
    { align: "center" }
  );
  y += 4;

  pdf.setDrawColor(...BRONZE);
  pdf.setLineWidth(0.4);
  pdf.line(MARGIN + 40, y, PAGE_W - MARGIN - 40, y);
  y += 8;

  const categories = menuCategories.filter((c) => c !== "Alle");

  categories.forEach((category) => {
    const items = menuProducts.filter((p) => p.category === category);
    if (items.length === 0) return;

    ensureSpace(34);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.setTextColor(...NAVY);
    pdf.text(clean(category), MARGIN, y);
    y += 2;
    pdf.setDrawColor(...BRONZE);
    pdf.setLineWidth(0.3);
    pdf.line(MARGIN, y, MARGIN + 30, y);
    y += 6;

    items.forEach((item) => {
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);

      const descLines: string[] = [];
      if (item.description) {
        descLines.push(...pdf.splitTextToSize(clean(item.description), CONTENT_W - 40));
      }
      const variantLines: string[] = item.variants
        ? item.variants.map((v) => clean(`${v.label}: ${v.price}`))
        : [];

      const blockHeight = 6 + descLines.length * 4.5 + variantLines.length * 4.5 + 2;
      ensureSpace(blockHeight);

      // Name + price
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(10.5);
      pdf.setTextColor(...TEXT);
      pdf.text(clean(item.name), MARGIN, y);
      pdf.setFont("helvetica", "normal");
      pdf.text(clean(item.price), PAGE_W - MARGIN, y, { align: "right" });
      y += 4.5;

      // Description
      if (descLines.length) {
        pdf.setFontSize(9);
        pdf.setTextColor(110, 90, 70);
        descLines.forEach((line) => {
          pdf.text(line, MARGIN, y);
          y += 4;
        });
      }

      // Variants
      if (variantLines.length) {
        pdf.setFontSize(9);
        pdf.setTextColor(...TEXT);
        variantLines.forEach((line) => {
          pdf.text(line, MARGIN + 3, y);
          y += 4.5;
        });
      }

      y += 2.5;
    });

    y += 5;
  });

  footer();
  pdf.save("Speisekarte-Bistro-Boxenstopp.pdf");
};
