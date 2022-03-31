export function WordCount(str) {
  return !(str.indexOf(" ") >= 0);
}

console.log(WordCount("hello world"));
