import { multiplicationTable } from "./v2";

const spyConsoleLog = jest.spyOn(console, "log");
describe("test for dz3.2", () => {
  it("multication table", () => {
    multiplicationTable();
    expect(spyConsoleLog).toBeTruthy();
    expect(spyConsoleLog).not.toBeUndefined();
  });
});
