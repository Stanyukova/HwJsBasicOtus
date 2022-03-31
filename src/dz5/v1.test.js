import { arraySum } from "./v1";

describe("test for dz5 ", () => {
  const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 6];
  beforeEach(() => {});
  it("Output the sum of all the array elements to the console.", () => {
    arraySum(arr);
    expect(arr).toBeDefined();
  });
});
