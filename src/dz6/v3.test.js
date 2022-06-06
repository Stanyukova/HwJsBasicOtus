import { pow } from "./v3";

describe("test for dz6.3 ", () => {
  it("the value of the number a raised to the power of x", () => {
    expect(pow(2, 3)).toBe(8);
    expect(pow(2, 3)).not.toBe(6);
  });
});
