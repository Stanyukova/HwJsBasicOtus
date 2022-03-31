import { arrayW } from "./v2";

describe("test for dz5 .2", () => {
  const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 6];

  beforeEach(() => {});
  it("the element will be twice as large as the element of the original array", () => {
    arrayW(arr);
    expect(arr).toEqual(expect.arrayContaining(arr));
    expect([1, 2, 3, 4, 5, 4, 3, 2, 1, 6]).toHaveLength(10);
  });
});
