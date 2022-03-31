import { quadraticEquation } from "./v3.js";

describe("test for  dz9 ", () => {
  it("derivation of the roots of the equation", () => {
    expect(quadraticEquation(2, 1, 5)).toEqual(null);
    expect(quadraticEquation(1, 6, 9)).toEqual(-3);
    expect(quadraticEquation(10, 64, 24)).toEqual({ x1: -40, x2: -600 });
  });
});
