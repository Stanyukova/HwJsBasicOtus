import { minDate } from "./v2.js";

const spyConsoleLog = jest.spyOn(console, "log");
describe("test for dz8.2", () => {
  test("how many minutes have passed", () => {
    const date = new Date();
    const totalMinutes = 60 * date.getHours() + date.getMinutes();
    minDate();
    expect(spyConsoleLog).toBeCalledWith(totalMinutes);
  });
});
