const user = {
  name: "John",
};
export function assignAge() {
  const input = window.prompt("Enter your age :");
  user.age = input;
  return console.log(user);
}
