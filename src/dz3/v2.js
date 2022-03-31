export function multiplicationTable() {
  let result = " ";
  const j = 7;
  for (let i = 1; i < 10; i += 1) {
    result += `${j} x ${i} = ${i * j}\n`;
  }
  console.log(result);
}
multiplicationTable();
