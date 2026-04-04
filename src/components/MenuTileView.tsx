import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { menuProducts, menuCategories, type MenuProduct } from "@/data/menuData";
import ProductDetailOverlay from "@/components/ProductDetailOverlay";

const MenuTileView = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [selectedProduct, setSelectedProduct] = useState<MenuProduct | null>(null);

  // Open product from URL param
  useEffect(() => {
    const productId = searchParams.get("product");
    if (productId) {
      const found = menuProducts.find((p) => p.id === productId);
      if (found) setSelectedProduct(found);
    }
  }, [searchParams]);

  const filtered =
    activeCategory === "Alle"
      ? menuProducts
      : menuProducts.filter((p) => p.category === activeCategory);

  const openProduct = (product: MenuProduct) => {
    setSelectedProduct(product);
    setSearchParams({ product: product.id });
  };

  const closeProduct = () => {
    setSelectedProduct(null);
    setSearchParams({});
  };

  return (
    <div>
      {/* Category filters */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide no-print">
        {menuCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap text-sm px-4 py-2 rounded-full font-medium transition-all ${
              activeCategory === cat
                ? "text-accent-foreground shadow-sm"
                : "bg-transparent border text-bronze hover:bg-bronze/10"
            }`}
            style={
              activeCategory === cat
                ? { backgroundColor: "#b8943e", color: "#fff" }
                : { borderColor: "#9e7c4e" }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {filtered.map((product) => (
          <button
            key={product.id}
            onClick={() => openProduct(product)}
            className="bg-card rounded-xl border border-bronze/15 overflow-hidden text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg group"
          >
            {/* Image */}
            <div className="relative aspect-square bg-secondary/40">
              {product.image ? (
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/20 group-hover:text-muted-foreground/30 transition-colors">
                  <span className="text-4xl">📷</span>
                </div>
              )}
              {product.badge && (
                <span
                  className="absolute top-2 left-2 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "#b8943e", color: "#fff" }}
                >
                  {product.badge}
                </span>
              )}
            </div>
            {/* Info */}
            <div className="p-3 sm:p-4">
              <h3 className="font-serif text-sm sm:text-base font-semibold text-foreground leading-tight line-clamp-2 mb-1">
                {product.name}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-1 mb-2">
                {product.description}
              </p>
              <p className="text-sm font-bold text-bronze">{product.price}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Footer notes */}
      <div className="mt-14 text-center space-y-3">
        <div className="divider-bronze mb-6" />
        <p className="text-muted-foreground text-sm italic">
          Mit jedem Kaffee unterstützt du die Cup&Cino Foundation: 1 Cent pro Tasse für soziale Projekte. ☕
        </p>
        <p className="text-muted-foreground text-xs">
          Alle Allergen- und Zutateinformationen findest du in der jeweiligen Produktansicht.
          Bei Fragen sprich uns gerne direkt an.
        </p>
      </div>

      {/* Product detail overlay */}
      {selectedProduct && (
        <ProductDetailOverlay product={selectedProduct} onClose={closeProduct} />
      )}
    </div>
  );
};

export default MenuTileView;
