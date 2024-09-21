// Navigator.

/*  
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.userAgent);
console.log(navigator.platform);
console.log(navigator.languages);
console.log(navigator.onLine);
console.log(navigator.cookieEnabled);
console.log(navigator.maxTouchPoints);
*/

/* 
if (navigator.onLine && navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(succesHandler, errorHandler);

  // call by browser when get position.
  function succesHandler(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude + "|" + longitude);
  }
  function errorHandler(error) {
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
}
*/
// return promise
// console.log(navigator.getBattery());

// media access

if (navigator.mediaDevices) {
  navigator.mediaDevices
    .getUserMedia({ audio: true, video: true }) // Corrected constraints
    .then(function (stream) {
      const video = document.querySelector("video");
      video.srcObject = stream;
      video.play(); // Added parentheses
    })
    .catch(function (error) {
      console.error("Error accessing media devices:", error);
    });
} else {
  console.error("Media Devices not supported");
}
