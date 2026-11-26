import { describe, expect, it } from "vitest";
import { localBusinessSchema } from "@/lib/schema";
import { faqBlocks } from "@/data/faqData";

type HoursSpec = {
  dayOfWeek: string[] | string;
  opens: string;
  closes: string;
};

const specs = localBusinessSchema.openingHoursSpecification as unknown as HoursSpec[];

const daysOf = (spec: HoursSpec) =>
  Array.isArray(spec.dayOfWeek) ? spec.dayOfWeek : [spec.dayOfWeek];

const specFor = (day: string) => specs.find((spec) => daysOf(spec).includes(day));

describe("Öffnungszeiten unter der Woche", () => {
  it("opens Monday at 16:00 and closes at 20:00", () => {
    expect(specFor("Monday")).toMatchObject({ opens: "16:00", closes: "20:00" });
  });

  it("opens Wednesday, Thursday and Friday at 16:00 and closes at 20:00", () => {
    for (const day of ["Wednesday", "Thursday", "Friday"]) {
      expect(specFor(day)).toMatchObject({ opens: "16:00", closes: "20:00" });
    }
  });

  it("keeps Tuesday as a closed day", () => {
    expect(specFor("Tuesday")).toBeUndefined();
  });

  it("keeps Saturday and Sunday unchanged", () => {
    expect(specFor("Saturday")).toMatchObject({ opens: "10:30", closes: "15:30" });
    expect(specFor("Sunday")).toMatchObject({ opens: "11:00", closes: "16:00" });
  });

  it("names 16:00 in the opening hours FAQ answer and never the old 15:00", () => {
    const block = faqBlocks.find((entry) => entry.id === "oeffnungszeiten");
    const answer = block?.items.find((item) => item.question === "Wann habt ihr offen?")?.answer;

    expect(answer).toContain("Montag: 16:00 bis 20:00 Uhr");
    expect(answer).toContain("Mittwoch bis Freitag: 16:00 bis 20:00 Uhr");
    expect(answer).not.toContain("15:00 bis");
  });
});
