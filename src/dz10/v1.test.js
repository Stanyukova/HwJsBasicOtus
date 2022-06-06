import { strValidation } from "./v1.js";

describe("test for dz10", () => {
  it("valid", () => {
    const spyConsoleLog = jest.spyOn(console, "log");
    expect(spyConsoleLog).toBeTruthy();
  });
  it("validation ", () => {
    expect(strValidation("06.06.2015")).toBe("это дата");
    expect(strValidation("06-04-2022")).not.toBe("это дата");
    expect(strValidation("njcvnvjnc@mail.ru")).not.toBe("это дата");
    expect(strValidation("njcvnvjnc@mail.ru")).toBe("это почта");
    expect(strValidation("+79047478745")).toBe("это номер телефона");
    expect(strValidation("йцукен")).toBe("попробуйте снова");
  });
});
