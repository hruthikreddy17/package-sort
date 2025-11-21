import { sort } from "../src/sorter.js";

describe("sort", () => {
  test("STANDARD when not bulky and not heavy", () => {
    expect(sort(10, 10, 10, 5)).toBe("STANDARD");
  });

  test("SPECIAL when bulky only by volume threshold", () => {
    expect(sort(100, 100, 100, 10)).toBe("SPECIAL"); // 1,000,000 cm^3
  });

  test("SPECIAL when bulky only by dimension threshold", () => {
    expect(sort(150, 1, 1, 10)).toBe("SPECIAL");
    expect(sort(1, 150, 1, 10)).toBe("SPECIAL");
    expect(sort(1, 1, 150, 10)).toBe("SPECIAL");
  });

  test("SPECIAL when heavy only", () => {
    expect(sort(10, 10, 10, 20)).toBe("SPECIAL"); // exactly 20 kg
    expect(sort(10, 10, 10, 25)).toBe("SPECIAL");
  });

  test("REJECTED when bulky and heavy", () => {
    expect(sort(200, 10, 10, 25)).toBe("REJECTED");
    expect(sort(100, 100, 100, 20)).toBe("REJECTED");
  });

  test("input validation", () => {
    expect(() => sort(-1, 10, 10, 1)).toThrow();
    expect(() => sort("abc", 10, 10, 1)).toThrow();
    expect(() => sort(10, Infinity, 10, 1)).toThrow();
  });
});
