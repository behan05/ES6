// Dark Mode Toggle

function changeColor() {
  const fa = document.querySelector(".fa-star");
  const currentColor = getComputedStyle(fa).color;

  if (currentColor == "#000" || currentColor == "rgb(0, 0, 0)") {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
    fa.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    fa.style.color = "#000";
  }
}

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
