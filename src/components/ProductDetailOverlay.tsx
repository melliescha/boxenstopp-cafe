import { X, Share2, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { MenuProduct } from "@/data/menuData";
import { useState } from "react";

const allergenMap: Record<string, { icon: string; name: string; color: string }> = {
  A: { icon: "🌾", name: "Glutenhaltiges Getreide", color: "bg-orange-100 text-orange-800 border-orange-300" },
  B: { icon: "🦐", name: "Krebstiere", color: "bg-red-100 text-red-800 border-red-300" },
  C: { icon: "🥚", name: "Eier", color: "bg-yellow-100 text-yellow-800 border-yellow-300" },
  D: { icon: "🐟", name: "Fisch", color: "bg-teal-100 text-teal-800 border-teal-300" },
  E: { icon: "🥜", name: "Erdnüsse", color: "bg-amber-100 text-amber-800 border-amber-300" },
  F: { icon: "🫘", name: "Soja", color: "bg-green-100 text-green-800 border-green-300" },
  G: { icon: "🥛", name: "Milch / Laktose", color: "bg-blue-100 text-blue-800 border-blue-300" },
  H: { icon: "🌰", name: "Schalenfrüchte", color: "bg-amber-100 text-amber-800 border-amber-300" },
  I: { icon: "🥬", name: "Sellerie", color: "bg-lime-100 text-lime-800 border-lime-300" },
  J: { icon: "🟡", name: "Senf", color: "bg-yellow-100 text-yellow-800 border-yellow-300" },
  K: { icon: "🫘", name: "Sesam", color: "bg-stone-100 text-stone-800 border-stone-300" },
  L: { icon: "⚗️", name: "Schwefeldioxid / Sulfite", color: "bg-purple-100 text-purple-800 border-purple-300" },
  M: { icon: "🌿", name: "Lupinen", color: "bg-emerald-100 text-emerald-800 border-emerald-300" },
  N: { icon: "🐚", name: "Weichtiere", color: "bg-cyan-100 text-cyan-800 border-cyan-300" },
  "11": { icon: "☕", name: "Koffeinhaltig", color: "bg-stone-100 text-stone-800 border-stone-300" },
};

interface Props {
  product: MenuProduct;
  onClose: () => void;
}

const AccordionSection = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-bronze/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-left"
      >
        <span className="font-serif text-sm font-semibold text-primary">{title}</span>
        <ChevronDown
          size={16}
          className={`text-bronze transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="pb-4 text-sm text-muted-foreground">{children}</div>}
    </div>
  );
};

const ProductDetailOverlay = ({ product, onClose }: Props) => {
  const handleShare = async () => {
    const url = `${window.location.origin}/speisekarte?product=${product.id}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: product.name, url });
      } catch {}
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  const parsedAllergens = product.allergens
    ? product.allergens.split(",").map((a) => a.trim())
    : [];

  const hasRealIngredients = !!product.ingredients;
  const hasRealNutrition = product.nutrition && product.nutrition.length > 0;

  return (
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 bg-card w-full sm:max-w-[600px] sm:rounded-xl rounded-t-2xl max-h-[90vh] overflow-y-auto animate-slide-up shadow-2xl">
        {/* Image */}
        <div className="relative aspect-[4/3] bg-secondary/50 sm:rounded-t-xl rounded-t-2xl overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
            <span className="text-6xl">📷</span>
          </div>
          {product.badge && (
            <span
              className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full"
              style={{ backgroundColor: "#b8943e", color: "#fff" }}
            >
              {product.badge}
            </span>
          )}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            aria-label="Schließen"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-1">
            {product.name}
          </h2>
          <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
          <p className="text-xl font-bold text-bronze mb-4">
            {product.price}
            {product.volume && (
              <span className="text-xs text-muted-foreground font-normal ml-2">
                {product.volume}
              </span>
            )}
          </p>

          {/* Variants */}
          {product.variants && product.variants.length > 0 && (
            <div className="mb-4">
              <p className="text-xs font-medium text-foreground mb-2">Varianten:</p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <span
                    key={v.label}
                    className="text-xs border border-bronze/30 rounded-lg px-3 py-1.5 text-foreground"
                  >
                    {v.label} · {v.price}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Accordion sections */}
          <div className="mt-2">
            <AccordionSection title="Zutaten & Inhaltsstoffe" defaultOpen={hasRealIngredients}>
              {hasRealIngredients ? (
                <div className="space-y-3">
                  {product.composition && (
                    <div className="bg-secondary/40 rounded-lg p-3">
                      <p className="text-xs font-semibold text-foreground mb-1">Zusammensetzung:</p>
                      <p className="text-xs">{product.composition}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">Zutaten:</p>
                    <p className="text-xs leading-relaxed">{product.ingredients}</p>
                  </div>
                </div>
              ) : (
                <p className="italic">[Zutaten werden noch ergänzt]</p>
              )}
            </AccordionSection>

            <AccordionSection title="Allergene" defaultOpen={parsedAllergens.length > 0}>
              {parsedAllergens.length > 0 ? (
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {parsedAllergens.map((code) => {
                      const info = allergenMap[code];
                      if (!info) return (
                        <span key={code} className="text-xs border rounded-full px-3 py-1 font-medium">
                          {code}
                        </span>
                      );
                      return (
                        <span
                          key={code}
                          className={`text-xs border rounded-full px-3 py-1.5 font-medium inline-flex items-center gap-1 ${info.color}`}
                        >
                          {info.icon} {code} · {info.name}
                        </span>
                      );
                    })}
                  </div>

                  {/* Additives */}
                  {product.additives && product.additives.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-1">Zusatzstoffe:</p>
                      <div className="space-y-0.5">
                        {product.additives.map((a) => (
                          <p key={a.code} className="text-xs">
                            <span className="font-medium">{a.code}</span> · {a.name}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Trace warning */}
                  {product.traceWarning && (
                    <p className="text-xs italic text-muted-foreground">
                      {product.traceWarning}
                    </p>
                  )}

                  <p className="text-xs italic mt-1">
                    Bei Fragen zu Allergenen sprich uns bitte direkt an.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <span className="text-xs border rounded-full px-3 py-1.5 font-medium inline-flex items-center gap-1 bg-green-100 text-green-800 border-green-300">
                    ✅ Keine deklarationspflichtigen Allergene
                  </span>
                  <p className="text-xs italic">
                    Bei Fragen zu Allergenen sprich uns bitte direkt an.
                  </p>
                </div>
              )}
            </AccordionSection>

            <AccordionSection title="Geschätzte Nährwerte pro Portion" defaultOpen={!!hasRealNutrition}>
              {hasRealNutrition ? (
                <div className="space-y-3">
                  <div className="rounded-lg overflow-hidden border border-border">
                    {product.nutrition!.map((row, i) => (
                      <div
                        key={row.label}
                        className={`flex justify-between px-3 py-2 text-xs ${
                          i % 2 === 0 ? "bg-card" : "bg-secondary/30"
                        }`}
                      >
                        <span className={`${row.indent ? "pl-3 text-muted-foreground" : "font-medium text-foreground"}`}>
                          {row.label}
                        </span>
                        <span className="font-medium text-foreground">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs italic text-muted-foreground">
                    ⚠ Nährwerte sind Schätzwerte und können je nach Zubereitung und Portionsgröße abweichen.
                  </p>
                </div>
              ) : (
                <p className="italic">[Nährwerte werden noch ergänzt]</p>
              )}
            </AccordionSection>

            {product.origin && (
              <AccordionSection title="Herkunft & Qualität">
                <p>{product.origin}</p>
              </AccordionSection>
            )}
          </div>

          {/* Bottom bar */}
          <div className="mt-5 pt-4 border-t border-bronze/20 flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground">
              100% Transparenz: Wir zeigen dir, was drin ist.
            </span>
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 text-xs text-bronze hover:underline"
            >
              <Share2 size={14} />
              Teilen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailOverlay;
