// like style to document.
const createStyleElement = document.createElement("link");
createStyleElement.setAttribute("rel", "stylesheet");
createStyleElement.setAttribute("href", "./style.css");
document.head.appendChild(createStyleElement);

// Rename title dynamically.
const title = document.querySelector("title");
title.innerHTML = "Traversing DOM";

/* 
## 6. Traversing the DOM

- **Navigating Nodes**
  - `parentNode`, `parentElement`
  - `childNodes`, `children`
  - `nextSibling`, `previousSibling`

- **Element Relationships**
  - `firstChild`, `lastChild`
  - `firstElementChild`, `lastElementChild`
  
*/

/*
const text = document.querySelector(".text");
// let parent = text.parentNode;
let parent = text.parentElement;
console.log(parent);
*/

// const text = document.querySelector(".inner-span").parentNode;
// const text = document.querySelector(".inner-span").parentElement;
// console.log(text);

// const text = document.querySelector(".text").children;
// console.log(text);

// const day = document.querySelector(".days").childNodes;
// console.log(day);

const days = document.querySelector(".weekDay");

// console.log(days.nextSibling);
// console.log(days.nextElementSibling.textContent);
let n = days.nextElementSibling;
// console.log(n.previousElementSibling.textContent);

const weekdays = document.querySelector(".days").children;
Array.from(weekdays).forEach(callMe);

function callMe(i) {
  i.classList.toggle("li");
}

// console.log(weekdays.firstElementChild);
// console.log(weekdays.lastElementChild);
