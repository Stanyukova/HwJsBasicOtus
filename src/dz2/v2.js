export function MonthV() {
  const input = window.prompt("Введите число от 1 до 12: ");
  const month = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  if (input <= 12) {
    return month[input - 1];
  }
  return "Попробуйте снова, некорректный ввод";
}
