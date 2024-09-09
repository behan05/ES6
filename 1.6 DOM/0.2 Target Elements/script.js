// Targeting Elements in document.
const logo = window.document.getElementById("logo").firstElementChild;
logo.setAttribute("class", "items");
// console.log(logo);

// #################### Return HTMLCollection similar to the Array. #########
const logo2 = document.getElementsByClassName("items");
// console.log(logo2);

for (let i = 0; i <= logo2.length - 1; i++) {
  // console.log(logo2[i]);
}

// ######################## Return NodeList ##########################
const logo3 = document.getElementsByName("input");
// console.log(logo3);

// logo3.forEach((i) => {
//   console.log(i);
// });

Array.from(logo3).forEach((i) => {
  //   console.log(i);
  i.style.borderRadius = "12px";
  i.style.padding = "0.5rem";
  i.style.border = "none";
  i.style.boxShadow = "0 0 0.5rem 0.2rem #fff";
  i.style.background = "transparent";
  i.style.outline = "none";
});

// ###############  Return HTMLCollection. ##########################
const li = document.getElementsByTagName("li");
// console.log(li);

for (const index of li) {
  //   console.log(index.textContent);
}

// for (let i = 0; i < li.length; i++) {
//   console.log(li[i].textContent);
// }

// ######################## Return Single Element ############################

const query = document.querySelector(".items");
if (query.className === "items") {
  query.innerHTML = "Good Bye";
  query.style.color = "red";
  //   console.log(query);
}

// console.log(query.className);

// ######################## Return nodeList ############################

const anchor = document.querySelectorAll("a");
console.log(anchor);
Array.from(anchor).forEach((i) => {
  i.style.fontSize = "1.2rem";
  i.style.fontWeight = "900";
  i.setAttribute("href", "www.github.com/behan05");
  i.setAttribute("target", "_main");
  console.log(i);
});
