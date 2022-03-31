export function getWeekDay(date = prompt("DD MM YYYY")) {
  const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  const [day, month, year] = date.split(" ");

  const inputDate = new Date(`${year}-${month}-${day}`);
  const inputDay = days[inputDate.getDay()];

  console.log(inputDay);
  return inputDay;
}
