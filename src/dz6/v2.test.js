import { WordCount } from "./v2";

describe("test for dz6.2 ", () => {
  it("returns true if the string consists of one word and false if it consists of several", () => {
    expect(WordCount("hello")).toBeTruthy();
    expect(WordCount("hello world")).toBeFalsy();
    expect(WordCount(" ")).toBeFalsy();
  });
});
