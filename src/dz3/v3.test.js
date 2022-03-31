import { garry } from "./v3";

describe("test for dz3-v3", () => {
  it("arithmetic mean of all odd numbers from 1 to N", () => {
    expect(garry(5)).toBe(3);
    expect(garry(25)).toBe(13);
    expect(garry(5)).not.toBe(5);
  });
});
