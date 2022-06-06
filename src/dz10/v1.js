export function strValidation(str) {
  // str = prompt(
  //   "Введите дату в формате: DD.MM.YYYY или почту или ваш номер в формате +7********"
  // );
  const regDate = /\d{1,2}[\.\/]\d{2}[\.\/]\d{2,4}/;
  const regEmail = /[\da-z\.]+@[\da-z]+\.[a-z]+/;
  const regPhone = /(\+7)(\d{3}\)?)[\d]{7}$/;

  if (regDate.test(str)) {
    return "это дата";
  }

  if (regEmail.test(str)) {
    return "это почта";
  }

  if (regPhone.test(str)) {
    return "это номер телефона";
  }

  return "попробуйте снова";
}

console.log(strValidation("06.06.4034"));
