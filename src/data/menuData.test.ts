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

  it("keeps the Herbalife shake with the card's two portions", () => {
    expect(menuProducts.find((product) => product.id === "protein-shake")?.variants).toEqual([
      { label: "Kinderportion, 200 ml", price: "2,50 €" },
      { label: "Erwachsenenportion, 300 ml", price: "4,50 €" },
    ]);
  });
});