import { X, Share2, ChevronDown } from "lucide-react";
import { MenuProduct } from "@/data/menuData";
import { useState } from "react";

const allergenMap: Record<string, { icon: string; name: string }> = {
  A: { icon: "🌾", name: "Glutenhaltiges Getreide" },
  B: { icon: "🦐", name: "Krebstiere" },
  C: { icon: "🥚", name: "Eier" },
  D: { icon: "🐟", name: "Fisch" },
  E: { icon: "🥜", name: "Erdnüsse" },
  F: { icon: "🫘", name: "Soja" },
  G: { icon: "🥛", name: "Milch / Laktose" },
  H: { icon: "🌰", name: "Schalenfrüchte" },
  I: { icon: "🥬", name: "Sellerie" },
  J: { icon: "🟡", name: "Senf" },
  K: { icon: "🫘", name: "Sesam" },
  L: { icon: "🧪", name: "Schwefeldioxid / Sulfite" },
  M: { icon: "🌿", name: "Lupinen" },
  N: { icon: "🐚", name: "Weichtiere" },
  "11": { icon: "☕", name: "Koffeinhaltig" },
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
                    {v.label} — {v.price}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Accordion sections */}
          <div className="mt-2">
            <AccordionSection title="Zutaten & Inhaltsstoffe">
              <p className="italic">[Zutaten werden noch ergänzt]</p>
            </AccordionSection>

            <AccordionSection title="Allergene" defaultOpen={parsedAllergens.length > 0}>
              {parsedAllergens.length > 0 ? (
                <div className="space-y-1.5">
                  {parsedAllergens.map((code) => {
                    const info = allergenMap[code];
                    return info ? (
                      <p key={code}>
                        {info.icon} <span className="font-medium">{code}</span> — {info.name}
                      </p>
                    ) : (
                      <p key={code}>
                        <span className="font-medium">{code}</span> — [wird noch ergänzt]
                      </p>
                    );
                  })}
                  <p className="text-xs italic mt-2">
                    Bei Fragen zu Allergenen sprich uns bitte direkt an.
                  </p>
                </div>
              ) : (
                <p className="italic">[Allergene werden noch ergänzt]</p>
              )}
            </AccordionSection>

            <AccordionSection title="Nährwerte">
              <p className="italic">[Nährwerte werden noch ergänzt]</p>
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
