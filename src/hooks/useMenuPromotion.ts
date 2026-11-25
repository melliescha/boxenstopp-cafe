import { useEffect, useMemo, useState } from "react";
import { getMenuProducts } from "@/data/menuData";
import { blackFridayOffer, isBlackFridayActive } from "@/lib/menuPromotion";

export const useMenuPromotion = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const refresh = () => setNow(new Date());
    const nextBoundary = [blackFridayOffer.start, blackFridayOffer.endExclusive]
      .find((boundary) => boundary.getTime() > now.getTime());
    const timeout = nextBoundary
      ? window.setTimeout(refresh, Math.min(nextBoundary.getTime() - now.getTime(), 2_147_483_647))
      : undefined;

    document.addEventListener("visibilitychange", refresh);
    window.addEventListener("focus", refresh);
    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener("visibilitychange", refresh);
      window.removeEventListener("focus", refresh);
    };
  }, [now]);

  const products = useMemo(() => getMenuProducts(now), [now]);
  return { products, offer: isBlackFridayActive(now) ? blackFridayOffer : null };
};