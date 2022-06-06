import { programR } from "./v2.js";

describe("test for dz9 ", () => {
  it("returns the circumference and area of a circle", () => {
    jest.spyOn(window, "prompt").mockReturnValue("2");
    const spyConsoleLog = jest.spyOn(console, "log");
    programR();
    expect(spyConsoleLog).toHaveBeenCalledWith("L=12.57 S=12.57");
  });
});
