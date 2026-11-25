export const blackFridayOffer = {
  title: "Black Friday",
  start: new Date("2026-11-25T00:00:00+01:00"),
  endExclusive: new Date("2026-12-01T00:00:00+01:00"),
  dateLabel: "25.11. bis einschließlich Montag, 30.11.2026",
  price: "1,00 €",
  veganPrice: "1,30 €",
  productIds: ["caffe-crema", "cappuccino"],
} as const;

export const isBlackFridayActive = (now = new Date()): boolean =>
  now >= blackFridayOffer.start && now < blackFridayOffer.endExclusive;