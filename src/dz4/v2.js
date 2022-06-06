export function CopyCopy() {
  const user = {
    name: "John",
  };
  const admin = { ...user, role: " admin" };
  console.log(user, admin);
}
