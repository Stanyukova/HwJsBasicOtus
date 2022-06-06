import { summa } from "./v3";

describe("test for dz1 v3", () => {
  it("the sum of the digits of a three-digit number", () => {
    jest.spyOn(window, "prompt").mockReturnValue("123");
    const spyConsoleLog = jest.spyOn(console, "log");
    summa();
    expect(spyConsoleLog).toHaveBeenCalledWith(6);
  });
});
