import { assignAge } from "./v1";

const user = {
  name: "John",
};
describe("test for dz4.1", () => {
  it(" Write the entered value in the age field of the user object.", () => {
    const input = jest.spyOn(window, "prompt").mockReturnValue("23");
    user.age = input;
    assignAge();
    expect(user).toHaveProperty("age");
  });
});
