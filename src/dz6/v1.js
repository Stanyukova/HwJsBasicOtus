export function diff(a, b) {
  if (a > b) {
    return a - b;
  }
  return b - a;
}
console.log(diff(10, 2));
