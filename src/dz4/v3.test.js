import { destructuriz } from "./v3";

describe("test for dz4.3", () => {
  it("Write down all the values of the administrator object fields in separate variables", () => {
    const admin = {
      name: "John",
      age: 23,
      role: "admin",
    };
    destructuriz();
    expect(admin).toHaveProperty("name", "John");
    expect(admin).toHaveProperty("role", "admin");
    expect(admin).toHaveProperty("age", 23);
  });
});
