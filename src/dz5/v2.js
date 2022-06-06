export function arrayW() {
  const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 6];
  const newArray = arr.map((el) => el * 2);
  console.log(newArray);
}
arrayW();
