// Create => Read => Update(Edit) => Delete
"use strict";

function searchItems() {
  const search = document.querySelector("input");

  search.addEventListener("keyup", (e) => {
    const searchVal = search.value.toLocaleLowerCase();
    const availableData = document.querySelectorAll("li");
    availableData.forEach((i) => {
      const data = i.textContent.toLocaleLowerCase();
      if (data.includes(searchVal) && data === searchVal) {
        i.style.color = "red";
      } else {
        console.log("Searched Value can not found!");
      }
    });
  });
}

searchItems();

function date() {
  const currentDate = new Date();
  const dataElement = document.getElementById("dataElement");
  let formatedDate = currentDate.toLocaleDateString();
  dataElement.innerHTML = formatedDate;
}
date();

function removeElements() {
  const li = document.querySelectorAll("li");
  li.forEach((i) => {
    i.addEventListener("click", (e) => {
      console.error(`You Deleted ${e}`);
      i.remove();
    });
  });
}
removeElements();

function addItems(addableItems) {
  const createLi = document.createElement("li");
  const createTextNode = document.createTextNode(addableItems);

  const ul = document.querySelector("ul");
  createLi.appendChild(createTextNode);
  ul.appendChild(createLi);
}

const itemsAdd = document.querySelector("input[name='addItems']");
itemsAdd.addEventListener("keyup", (e) => {
  const val = e.target.value;

  addItems(val);
});
