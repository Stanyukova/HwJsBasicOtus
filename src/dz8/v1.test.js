import { getWeekDay } from "./v1.js";

describe("Test for dz8.1", () => {
  test("if the input is incorrect output undefind", () => {
    expect(getWeekDay("24072021")).toBeUndefined();
  });
  test("shows correct day of the week", () => {
    expect(getWeekDay("24 07 2021")).toBe("СБ");
  });
});
