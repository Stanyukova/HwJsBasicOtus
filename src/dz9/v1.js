export function rightTriangle(a, b, c) {
  if (c ** 2 === a ** 2 + b ** 2) {
    console.log("прямоугольный");
  } else {
    console.log("не прямоугольный");
  }
}
console.log(rightTriangle(3, 4, 5));
