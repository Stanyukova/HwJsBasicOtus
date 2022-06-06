import { BestOfTheBest } from "./v1";

const spyConsoleLog = jest.spyOn(console, "log");
describe("test for dz2.1", () => {
  it("Output the largest number to the console", () => {
    BestOfTheBest(2, 1);
    expect(spyConsoleLog).toHaveBeenCalledWith(2);
  });
});
