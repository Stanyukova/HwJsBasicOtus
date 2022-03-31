import { sumNumber, multiNumber } from "./v1";

const spyConsoleLog = jest.spyOn(console, "log");
describe("test for dz1-v1 ", () => {
  it("sum of numbers", () => {
    sumNumber(96, 4);
    expect(spyConsoleLog).toHaveBeenCalledWith(100);
  });

  it("multiplication of numbers", () => {
    multiNumber(6, 4);
    expect(spyConsoleLog).toHaveBeenCalledWith(24);
  });
});
