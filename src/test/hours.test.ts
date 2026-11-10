import { describe, expect, it } from "vitest";
import { isOpenAt } from "@/lib/hours";

// Times given in UTC; Iraq is UTC+3.
describe("opening hours (Iraq time)", () => {
  it("Saturday 08:00 Iraq is open", () => {
    expect(isOpenAt(new Date("2026-11-14T05:00:00Z"))).toBe(true);
  });
  it("Saturday 07:59 Iraq is closed", () => {
    expect(isOpenAt(new Date("2026-11-14T04:59:00Z"))).toBe(false);
  });
  it("Thursday 21:29 open, 21:30 closed", () => {
    expect(isOpenAt(new Date("2026-11-12T18:29:00Z"))).toBe(true);
    expect(isOpenAt(new Date("2026-11-12T18:30:00Z"))).toBe(false);
  });
  it("Friday 09:00–18:00 only", () => {
    expect(isOpenAt(new Date("2026-11-13T05:30:00Z"))).toBe(false); // 08:30
    expect(isOpenAt(new Date("2026-11-13T06:00:00Z"))).toBe(true); // 09:00
    expect(isOpenAt(new Date("2026-11-13T15:00:00Z"))).toBe(false); // 18:00
  });
});
