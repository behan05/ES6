// Location

// console.log(`location is ${location.href}`);
// console.log(`protocol is ${location.protocol}`);
// console.log(`port is ${location.port}`);
// console.log(`hostname is ${location.hostname}`);
// console.log(`path is ${location.path}`);

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   location.href = "https://github.com/behan05";
  let locationString = location.href;

  let changeURL = locationString.includes("index.html")
    ? locationString.replace("index.html", "about.html")
    : locationString + "about.html";
  //   form.submit();
  //   location.replace(changeURL);
  location.href = changeURL;
});

// console.log(location.search);

function scrollTopToBottom() {
  location.hash = "head";
}

// console.log(location.origin);

// reload entire page
// location.reload();

// Check login

document.getElementById("login").addEventListener("click", (event) => {
  sessionStorage.setItem("login", true);
  const currentURL = location.href;
  const redirectPage = currentURL.includes("index.html")
    ? currentURL.replace("index.html", "about.html")
    : currentURL + "about.html";

  location.href = redirectPage;
});
