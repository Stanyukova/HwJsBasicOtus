import { arrayMaxMin } from "./v3";

describe("test for  dz5.3 ", () => {
  const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 6];
  const arrMax = Math.max.apply(null, arr);
  const arrMin = Math.min.apply(null, arr);
  it("the largest and smallest elements of the original array", () => {
    arrayMaxMin(arr);
    expect(arr).toContain(1, 6);
    expect(arrMin).toBe(1);
    expect(arrMax).toBe(6);
  });
});
