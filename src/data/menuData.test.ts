import { describe, expect, it } from "vitest";
import { menuProducts } from "./menuData";

describe("Availability from the card supplied on 22 October 2026", () => {
  it.each(["boxenstopp-spezial", "latte-vanilla", "obst", "naehrshake"])(
    "does not offer discontinued product %s",
    (id) => {
      expect(menuProducts.some((product) => product.id === id)).toBe(false);
    },
  );

  it("keeps only products included in the supplied card", () => {
    const allowedIds = [
      "espresso", "americano", "caffe-crema", "caffe-latte", "cappuccino",
      "cappuccino-schoko-vanille", "latte-macchiato", "flat-white", "vegan-matcha-latte",
      "kakao", "tee", "herbalife-tee", "donut", "muffin", "affogato", "kakaogato",
      "thunfisch-baguette", "tomate-mozzarella-baguette", "provence-baguette",
      "rustikal-baguette", "pikant-baguette", "holzfaellerbrot", "tomaten-mozzarella-brot",
      "raclettebrot", "flammkuchen-elsaesser", "flammkuchen-griechisch",
      "flammkuchen-mediterran", "flammkuchen-lachs", "apfelschorle", "wasser", "saefte",
      "alkoholfreies-bier", "electrolyte", "energy-liftoff", "protein-shake",
      "proteinriegel", "muesliriegel", "protein-chips", "cornetto-eis", "magnum-eis",
      "eiskugel", "trio-eisbecher", "ice-matcha-latte", "ice-matcha-latte-vegan",
      "espresso-kuesst-orange", "iced-strawberry-matcha-latte",
      "iced-strawberry-matcha-latte-vegan", "iced-mango-matcha-latte",
      "iced-mango-matcha-latte-vegan", "bunter-salat",
      "caprese-salat", "2-in-1-salat", "frucht-quark", "beerentraum-flammkuchen",
    ];
    expect(menuProducts.map((product) => product.id).sort()).toEqual(allowedIds.sort());
  });

  it("keeps the Herbalife shake portions with the card's vegan supplement", () => {
    expect(menuProducts.find((product) => product.id === "protein-shake")?.variants).toEqual([
      { label: "Kinderportion, 200 ml", price: "2,50 €" },
      { label: "Erwachsenenportion, 300 ml", price: "4,50 €" },
      { label: "Kinderportion vegan, 200 ml", price: "2,80 €" },
      { label: "Erwachsenenportion vegan, 300 ml", price: "4,80 €" },
    ]);
  });

  it.each([["wasser", "2,00 €"], ["apfelschorle", "2,50 €"]])(
    "uses the uploaded card's price for %s",
    (id, price) => expect(menuProducts.find((product) => product.id === id)?.price).toBe(price),
  );

  it("offers classic and vegan Matcha at the card's prices", () => {
    expect(menuProducts.find((product) => product.id === "vegan-matcha-latte")?.variants).toEqual([
      { label: "Klassisch", price: "3,50 €" },
      { label: "Vegan", price: "3,80 €" },
    ]);
  });

  it.each(["cornetto-eis", "magnum-eis"])("does not invent a fixed price for %s", (id) => {
    expect(menuProducts.find((product) => product.id === id)?.price).toBe("siehe Eistruhe");
  });

  it("uses small and large protein bar prices from the card", () => {
    expect(menuProducts.find((product) => product.id === "proteinriegel")?.variants).toEqual([
      { label: "Klein", price: "2,50 €" },
      { label: "Groß", price: "3,90 €" },
    ]);
  });

  it.each([
    ["caffe-latte", ["2,90 €", "3,50 €"]],
    ["cappuccino", ["2,90 €", "3,50 €"]],
    ["cappuccino-schoko-vanille", ["3,10 €", "3,70 €"]],
    ["latte-macchiato", ["3,50 €"]],
    ["flat-white", ["3,70 €"]],
    ["kakao", ["2,30 €", "2,90 €"]],
  ])("applies the card's 0.30 euro vegan supplement to %s", (id, prices) => {
    const variants = menuProducts.find((product) => product.id === id)?.variants;
    expect(variants?.filter((variant) => /vegan/i.test(variant.label)).map((variant) => variant.price)).toEqual(prices);
  });

  it("shows the card's prices for the items the site was still missing", () => {
    expect(menuProducts.find((product) => product.id === "kakaogato")?.price).toBe("3,50 €");
    expect(menuProducts.find((product) => product.id === "beerentraum-flammkuchen")?.price).toBe("8,30 €");
    expect(menuProducts.find((product) => product.id === "iced-mango-matcha-latte-vegan")?.price).toBe("4,80 €");
  });
});