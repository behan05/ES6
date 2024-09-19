// GET user Current Location (latitude and langitude)

function getLocation() {
  if (window.navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
  } else {
    console.error("Geolocation is not supported by this browser!");
  }
}
getLocation();

function successCallBack(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  console.log(`latitude is ${latitude} and the longitude ${longitude}`);
}

function errorCallBack(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("user denied the request for geolocation");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}

///////////////////////////////////////////////////////

// Dark Mode Toggle
function applyTheme(theme) {
  const fa = document.querySelector(".fa-star");

  if (theme === "dark") {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
    fa.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    fa.style.color = "#000";
  }
}

function changeColor() {
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    // Switch to light theme
    applyTheme("light");
    localStorage.setItem("theme", "light");
  } else {
    // Switch to dark theme
    applyTheme("dark");
    localStorage.setItem("theme", "dark");
  }
}

// Apply saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);
});
