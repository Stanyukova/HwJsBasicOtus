import { CopyCopy } from "./v2";

describe("test for  dz4.2", () => {
  it("Add a role field with the value ‘admin’ to the new object.", () => {
    const user = {
      name: "John",
    };
    const admin = { ...user, role: " admin" };
    CopyCopy();
    expect(admin).toBe(admin);
    expect(user).not.toBe(admin);
    expect(admin).toHaveProperty("role");
    expect(admin).toHaveProperty("role", " admin");
  });
});
