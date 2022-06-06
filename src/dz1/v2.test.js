import { kolSymb } from "./v2";

const spyConsoleLog = jest.spyOn(console, "log");
describe("test for dz1-v2 ", () => {
  it("total number of symbols", () => {
    kolSymb("nano", "boy");
    expect(spyConsoleLog).toHaveBeenCalledWith(7);
  });
});
