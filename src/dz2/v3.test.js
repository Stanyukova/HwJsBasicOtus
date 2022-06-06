import { Figures } from "./v3";

describe("test for dz2 v3", () => {
  it("will a circle fit into a square", () => {
    expect(Figures()).toBeTruthy();
    expect(Figures()).not.toBeFalsy();
    expect(Figures(1, 4)).toBe("Круг поместится в квадрате");
  });
  it("the circle does not fit into the square", () => {
    expect(Figures(35, 40)).toBe("Круг не поместится в квадрате");
  });
});
