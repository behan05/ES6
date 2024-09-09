// const logo = document.getElementsByTagName("header");
// console.log(logo[0].children[0]);
// logo[0].children[0].innerHTML = "Good Bye Friend";

const logo = document.getElementById("logo");
logo.innerHTML = "Good Afternoon!";

logo.removeAttribute("id", "logo");
logo.style.color = "red";
logo.style.fontSize = "2rem";
logo.setAttribute("class", "classLogo");
console.log("id is " + logo.id);
console.log(logo.className);

const para = document.querySelector("p");
para.setAttribute("id", "paraId");
para.parentElement;
console.log(para);

// para.classList.toggle("pStyle"); // force fully add
para.classList.add("paraStyle"); // add if not present
console.log(para.parentElement);
console.log(para.parentNode);