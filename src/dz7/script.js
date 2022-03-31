export function newList(el) {
  el.innerHTML = `
  <input class="input" type="text">
  <button hidden class="button">
    кнопка </button>

  <ul class="list">
    <li>первый</li>
    <li>второй</li>
    <li>третий</li>
  </ul>`;
  const input = document.querySelector(".input");
  const button = document.querySelector(".button");

  button.addEventListener("click", buttonClick);

  input.addEventListener("input", () => {
    button.hidden = !input.value;
  });

  function buttonClick() {
    addElementToList(input.value);
  }

  function addElementToList(text) {
    const list = document.querySelector(".list");
    if (list.childElementCount === 5) {
      list.querySelector("li").remove();
    }
    const listItem = document.createElement("li");
    listItem.innerText = text;
    list.append(listItem);
    return list;
  }
}
