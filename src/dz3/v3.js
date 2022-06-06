export function garry(input) {
  // const input = window.prompt("Введите ");
  let currentCount = 0;
  let sum = 0;

  for (let i = 0; i <= input; i++) {
    if (i % 2 !== 0) {
      sum += i;
      currentCount += 1;
    }
  }
  const a = sum / currentCount;
  return a;
}
