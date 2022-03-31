export function arrayMaxMin() {
  const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 6];
  const arrMax = Math.max.apply(null, arr);
  const arrMin = Math.min.apply(null, arr);
  console.log(arrMax);
  console.log(arrMin);
}
arrayMaxMin();
