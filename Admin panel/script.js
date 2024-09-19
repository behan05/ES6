document.getElementById("menuBarIcon").addEventListener("click", (e) => {
  const nav = document.querySelector("nav");

  if (nav.style.display === "none") {
    nav.style.transition = "display 2s ease";
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
    nav.style.transition = "display 2s ease";
  }
});

function searchItem() {
  document.querySelector("button").addEventListener("click", () => {
    const searchedValue = document.querySelector("input[name='search']").value;
    const navItems = document.querySelectorAll(".navPara");
    navItems.forEach((i) => {
      const text = i.textContent.toLowerCase();
      if (text.includes(searchedValue.toLowerCase())) {
        i.style.color = "red";
      } else {
        console.error("Not Found");
      }
    });
  });
}

searchItem();

// Get Location

function getLocation() {
  window.addEventListener("load", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, errorFunc);
    } else {
      console.error("This browser can not support GeoLocation!");
    }

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude);
      console.log(longitude);
    }

    function errorFunc(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert("User denied the request for Geolocation.");
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
  });
}
