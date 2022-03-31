export function minDate() {
  const date = new Date();
  const minD = 60 * date.getHours() + date.getMinutes();
  console.log(minD);
}
