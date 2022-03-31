import { diff } from "./v1";

describe("test for dz6.1 ", () => {
  it("returns the difference between the largest and the smallest", () => {
    expect(diff(10, 2)).toEqual(8);
  });
});
