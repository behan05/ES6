"use strict";
/* 
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("title");
  title.innerHTML = "Create & Removing Elements";
  // console.log(title);

  const body = document.querySelector("body");
  body.classList.add("bodyStyle");

  // create Element.

  let createDiv = document.createElement("div");
  let createParagraph = document.createElement("p");
  createDiv.className = "container";
  createParagraph.setAttribute("class", "container__paragraph");
  createParagraph.classList.add("paraStyle");

  let addText = document.createTextNode(
    "JavaScript is a powerful tool for web development! You can dynamically update the DOM and create interactive elements easily."
  );

  // Add text Node to the paragraph.
  createParagraph.appendChild(addText);
  // Add paragraph element to the Div.
  createDiv.appendChild(createParagraph);

  body.appendChild(createDiv);
});
*/

const title = document.querySelector("title");
title.innerHTML = "Create & Removing Elements";
// Select the body or any container where you want to add the form.
const body = document.querySelector("body");
body.classList.add("bodyStyle");

// Create a form element
let form = document.createElement("form");
form.setAttribute("id", "dynamicForm");
form.classList.add("formStyle");

// Create a label for the input field
let nameLabel = document.createElement("label");
nameLabel.setAttribute("for", "name");
nameLabel.textContent = "Name: ";

// Create an input field
let nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "name");
nameInput.setAttribute("id", "name");
nameInput.setAttribute("value", "Behan kumar");
nameInput.setAttribute("placeholder", "Enter you name: ");
nameInput.classList.add("inputStyle");

// Create a label for email input
let emailLabel = document.createElement("label");
emailLabel.setAttribute("for", "email");
emailLabel.textContent = "Email: ";

// Create an email input field
let emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("id", "email");
emailInput.setAttribute("name", "email");
emailInput.setAttribute("value", "example@outlook.com");
emailInput.setAttribute("placeholder", "Enter your email: ");
emailInput.classList.add("inputStyle");

// Create a submit button
let submitBtn = document.createElement("button");
submitBtn.setAttribute("type", "submit");
submitBtn.textContent = "Submit";
submitBtn.classList.add("inputStyle");

// Append all the form elements to the form
let elementLists = [nameLabel, nameInput, emailLabel, emailInput, submitBtn];
for (const element of elementLists) {
  form.appendChild(element);
}

// Append the form to the body (or a specific container)

body.appendChild(form);

// Optional

let registration = document.createElement("h2");
registration.setAttribute("id", "registration");

let addTexts = document.createTextNode("Registration Form".toUpperCase());
registration.appendChild(addTexts);
registration.classList.toggle("h1Style");
body.insertBefore(registration, form);
// console.log(registration);

function addLanguage(...lang) {
  // Target ul element.
  const ul = document.querySelector("ul");

  // looping over array
  for (const liData of lang) {
    // create li element
    let li = document.createElement("li");

    // create textNode
    let textData = document.createTextNode(liData);

    // append data to li
    li.appendChild(textData);

    // add li into the ul.
    ul.appendChild(li);
  }
}

// calling function with arguments.
addLanguage("Ruby", "javaScript");

function removeData(index) {
  const li = document.querySelector(index);
  li.remove();
  console.log(li);
}
// removeData("li:nth-child(2)");

const li = document.querySelector("li");
const ul = li.parentElement;
// ul.removeChild(li);
