const formBtn = document.querySelector("#btn");
const inputItems = document.querySelector("#firstForm").children;

formBtn.addEventListener("click", (e) => {
  e.preventDefault();

  Array.from(inputItems).forEach((i) => {
    if (i.tagName.toLowerCase() === "input") {
      // sessionStorage.clear();
      sessionStorage.setItem(i.type, i.textContent);
    }
  });

  document.querySelector("#firstForm").submit();
});
