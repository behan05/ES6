const input = document.querySelector("input");
const span = document.querySelector("span");

window.addEventListener("DOMContentLoaded", () => {
  const currentTheme = localStorage.getItem("theme") || "light";
  applyTheme(currentTheme);
  const stored = localStorage.getItem("name");

  if (stored) {
    span.innerHTML = stored;
  }

  input.addEventListener("input", (e) => {
    const inputVal = e.target.value;
    localStorage.setItem("name", inputVal);
    span.innerHTML = localStorage.getItem("name");
  });
});

const btn = document.querySelector(".button");
const body = document.querySelector("body");

btn.addEventListener("click", (e) => {
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    applyTheme("light");
    localStorage.setItem("theme", "light");
  } else {
    applyTheme("dark");
    localStorage.setItem("theme", "dark");
  }
});

function applyTheme(theme) {
  if (theme === "dark") {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
  } else {
    body.style.backgroundColor = "gray";
    body.style.color = "#fff";
  }
}

// Clear localStorage
const clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", () => {
  localStorage.clear();
});
