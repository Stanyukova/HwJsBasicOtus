export function Figures(circle, square) {
  // const circle = prompt("Введите площадь круга", " ");
  // const square = prompt("Введите площадь квадрата", " ");
  if (Math.sqrt(square) > 2 * Math.sqrt(circle / 3.14)) {
    return "Круг поместится в квадрате";
  }
  return "Круг не поместится в квадрате";
}
