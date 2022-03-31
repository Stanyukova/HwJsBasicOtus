export function arraySum() {
  const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 6];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
arraySum();
