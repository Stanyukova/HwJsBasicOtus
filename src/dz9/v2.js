export function programR() {
  const radius = window.prompt("введите радиус");
  const CircumFerence = 2 * Math.PI * radius;
  const areaOfACircle = Math.PI * radius ** 2;

  return console.log(
    `L=${CircumFerence.toFixed(2)} S=${areaOfACircle.toFixed(2)}`
  );
}
