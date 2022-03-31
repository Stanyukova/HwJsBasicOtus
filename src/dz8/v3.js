export function youngUser() {
  const Dimon = new Date("1997, 1, 08");
  const aa = Dimon.getFullYear();
  const Bill = new Date("1995, 1, 29");
  const bb = Bill.getFullYear();
  const c = new Date("2021, 7, 21");
  const cc = c.getFullYear();
  const a1 = cc - aa;
  const b1 = cc - bb;
  if (a1 < b1) {
    console.log("Dimon");
  } else {
    console.log("Bill");
  }
}
