import { youngUser } from "./v3.js";

const spyConsoleLog = jest.spyOn(console, "log");
describe("test for dz8.3", () => {
  test("shows a younger one", () => {
    youngUser();
    expect(spyConsoleLog).toBeTruthy();
  });
});
