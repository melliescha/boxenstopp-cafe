import { describe, expect, it } from "vitest";
import { getMenuProducts, menuProducts } from "./menuData";
import { isBlackFridayActive } from "@/lib/menuPromotion";

describe("Black Friday, 25 to 30 November 2026 in Germany", () => {
  it("starts on 25 November at midnight in Germany", () => {
    expect(isBlackFridayActive(new Date("2026-11-24T23:59:59+01:00"))).toBe(false);
    expect(isBlackFridayActive(new Date("2026-11-25T00:00:00+01:00"))).toBe(true);
  });

  it("includes all of Monday and ends at midnight on Tuesday", () => {
    expect(isBlackFridayActive(new Date("2026-11-30T23:59:59.999+01:00"))).toBe(true);
    expect(isBlackFridayActive(new Date("2026-12-01T00:00:00+01:00"))).toBe(false);
  });

  it.each(["caffe-crema", "cappuccino"])("offers small %s for exactly one euro", (id) => {
    const product = getMenuProducts(new Date("2026-11-25T17:11:00Z")).find((item) => item.id === id);
    expect(product?.variants?.find((variant) => variant.label === "Klein")?.price).toBe("1,00 €");
    expect(product?.price.startsWith("1,00 € bis ")).toBe(true);
  });

  it("keeps the existing 0.30 euro vegan supplement", () => {
    const product = getMenuProducts(new Date("2026-11-27T12:00:00Z")).find((item) => item.id === "cappuccino");
    expect(product?.variants?.find((variant) => variant.label === "Klein vegan")?.price).toBe("1,30 €");
  });

  it("leaves large drinks and all other products unchanged", () => {
    const products = getMenuProducts(new Date("2026-11-30T12:00:00Z"));
    for (const regular of menuProducts) {
      const current = products.find((product) => product.id === regular.id);
      if (regular.id === "caffe-crema" || regular.id === "cappuccino") {
        expect(current?.variants?.filter((variant) => variant.label.startsWith("Groß")))
          .toEqual(regular.variants?.filter((variant) => variant.label.startsWith("Groß")));
      } else {
        expect(current).toEqual(regular);
      }
    }
  });

  it("restores both regular prices after Monday without changing the original card", () => {
    getMenuProducts(new Date("2026-11-30T12:00:00Z"));
    const restored = getMenuProducts(new Date("2026-12-01T00:00:00+01:00"));
    expect(restored.find((item) => item.id === "caffe-crema")?.variants?.[0].price).toBe("2,20 €");
    expect(restored.find((item) => item.id === "cappuccino")?.variants?.[0].price).toBe("2,60 €");
    expect(restored).toEqual(menuProducts);
  });
});