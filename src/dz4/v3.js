export function destructuriz() {
  const admin = {
    name: "John",
    age: 23,
    role: "admin",
  };
  const { name, age, role } = admin;

  console.log(name, age, role);
}
