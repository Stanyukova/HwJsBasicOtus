import { newList } from "./script.js";

describe("test for newList", () => {
  let el;

  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
    newList(el);
  });

  it("the list increases to only 5 items ", () => {
    const input = document.querySelector(".input");
    const button = document.querySelector(".button");

    const magicClick = "something";
    input.value = magicClick;
    button.click();
    expect(el.querySelector(".list").childElementCount).toEqual(4);
    button.click();
    expect(el.querySelector(".list").childElementCount).toEqual(5);
    button.click();
    expect(el.querySelector(".list").childElementCount).not.toEqual(6);
  });

  it("create input, button", () => {
    expect(el.querySelector("input")).toBeTruthy();
    expect(el.querySelector("button")).toBeTruthy();
  });

  it("button hidden", () => {
    el.querySelector("button").click();
    expect(el.querySelector("button").hidden).toBeTruthy();
  });
});
