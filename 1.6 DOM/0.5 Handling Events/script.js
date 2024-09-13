/*

############  Summary  #####################
## When you work with event listeners:

You attach a listener function to a DOM element.
The browser automatically creates an event object when the event occurs.

This event object contains details about the event and is passed to your listener function.

So, when you interact with events, you’re working with JavaScript objects (event objects) that provide detailed information about what happened, which helps you manage and respond to user interactions effectively.

*/

// Set Title to document.
const title = document.querySelector("title");
title.innerHTML = "Event Handling";

// Adding CSS link to Html.
const head = document.querySelector("head");
const cssLink = document.createElement("link");
cssLink.setAttribute("rel", "stylesheet");
cssLink.setAttribute("href", "./style.css");
head.appendChild(cssLink);

/* ****************** Event Listener ******************** */

const button = document.querySelector("button");
button.innerHTML = "Good Bye!";

// adding event listener.
// button.addEventListener("click", (i) => {
//   // Destructuring i (object)
//   const { target, type, clientX, clientY } = i;
//   console.log(target);
//   console.log(clientX);
//   console.log(clientY);
//   console.log(type);
//   console.log(i.currentTarget);
// });

button.addEventListener("mousemove", (event) => {
  button.innerHTML = "Hello You Successfully Clicked Button!";
  console.log("Hello You Successfully Clicked Button!");
});
// console.log(button);

const key = document.getElementById("key");
window.addEventListener("keydown", (event) => {
  key.innerHTML = `
  <table>
  <tr>
      <td>Key</td>
      <td>KeyCode</td>
      <td>Code</td>
  </tr>
  <tr>
      <td>${event === " " ? "space" : event.key}</td>
      <td>${event.keyCode}</td>
      <td>${event.code}</td>
  </tr>
  </table>
  `;
});

document.addEventListener("DOMContentLoaded", (em) => {
  window.addEventListener("load", (e) => {
    const loader = document.querySelector(".loader");
    const container = document.querySelector(".container");

    loader.style.display = "hide";
    container.style.display = "block";
  });
  // console.log(em);
});

// Form

const input = document.querySelector("input");
const form = document.querySelector("form");

input.addEventListener("input", (event) => {
  console.log(event.target.value);
  // console.log(event.currentTarget.value);
});
form.addEventListener("submit", (e) => {
  const input = document.querySelector("input").value;
  alert(`Registered Successfully mr ${input}`);

  // prevent unusal refeshing page.
  e.preventDefault();
});

let removeEvent = input.addEventListener("focus", () => {
  input.classList.toggle("input");
});
input.addEventListener("blue", (e) => {
  removeEventListener(removeEvent);
});

// delete item.

const img = document.querySelectorAll("img");
img.forEach((i) => {
  i.addEventListener("click", (event) => {
    // console.log(event.currentTarget);
    // event.currentTarget.parentElement.remove();
  });
});
// console.log(img);

// Event Propagation
// Bubling
const ul = document.querySelector("ul");
ul.addEventListener(
  "click",
  (eventDetail) => {
    console.log("click inside Ul");
  },
  false
); // if true then move top to bottom

let object = Array.from(img);

for (const element of object) {
  element.addEventListener(
    "click",
    (event) => {
      console.log("Clicked Over Image!");
      // if you want to stop Bubling then use.
      event.stopPropagation(); // this will help to stop propagate.
      event.preventDefault();
    },
    false
  );
}
