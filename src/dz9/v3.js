export function quadraticEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return null;
  }

  if (d === 0) {
    return (-b / 2) * a;
  }

  return {
    x1: ((-b + Math.sqrt(d)) / 2) * a,
    x2: ((-b - Math.sqrt(d)) / 2) * a,
  };
}
console.log(quadraticEquation(2, 1, 5));
console.log(quadraticEquation(1, 6, 9));
