import { MonthV } from "./v2";

describe("test for dz2-v2", () => {
  it("valid iput", () => {
    jest.spyOn(window, "prompt").mockReturnValue("1");
    expect(MonthV()).toBe("Январь");
  });

  it("not valid", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "13");
    expect(MonthV()).toBe("Попробуйте снова, некорректный ввод");
  });
});
