// Toggle For Dark mode.
const toggleOn = document.getElementById("toggle-on");
const toggleOff = document.getElementById("toggle-off");

window.onload = () => {
  const currentTheme = localStorage.getItem("theme") || "lighter";
  applyTheme(currentTheme);
};

toggleOff.addEventListener("click", (event) => {
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    localStorage.setItem("theme", "lighter");
    applyTheme("lighter");
    console.log("darker");
  } else {
    localStorage.setItem("theme", "dark");
    applyTheme("dark");
  }
});
toggleOn.addEventListener("click", (event) => {
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    localStorage.setItem("theme", "lighter");
    applyTheme("lighter");
    console.log("darker");
  } else {
    localStorage.setItem("theme", "dark");
    applyTheme("dark");
  }
});

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.style.backgroundColor = "gray";
    document.body.style.color = "#fff";
    toggleOn.style.display = "block"; // Show the "on" button in dark mode
    toggleOff.style.display = "none"; // Hide the "off" button in dark mode
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "gray";
    toggleOff.style.display = "block"; // Show the "off" button in light mode
    toggleOn.style.display = "none"; // Hide the "on" button in light mode
  }
}

// Downlad Resume

// Download Resume

const downloadBtn = document.getElementById("downloadResume");
localStorage.setItem("isLoggedIn", "false"); // Set to false initially

downloadBtn.addEventListener("click", (event) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    const downloadURL =
      "https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3367/persistent-resource/toronto-resume-templates.jpg";
    downloadResume(downloadURL);
  } else {
    alert("Please log in to download the resume.");
    window.location.href = "./login.html"; // Redirect to login if not logged in
  }
});

function downloadResume(downloadURL) {
  fetch(downloadURL)
    .then((response) => {
      return response.blob(); // Convert into binary to download
    })
    .then((blob) => {
      const createLink = document.createElement("a");
      createLink.download = "resume.png";
      const tempUrl = URL.createObjectURL(blob);
      createLink.href = tempUrl;

      document.body.appendChild(createLink);
      createLink.click();

      // Free memory.
      document.body.removeChild(createLink);
      URL.revokeObjectURL(tempUrl);
    });
}

// Login page

const form = document.getElementById("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    const emailVal = document.querySelector("input[type='email']").value;

    // Simulate login and set logged-in status to true
    localStorage.setItem("isLoggedIn", "true");
    console.log(`You are logged in as ${emailVal}`);

    // Redirect to index after login with a slight delay to ensure localStorage is set
    setTimeout(() => {
      window.location.href = "./index.html"; // Redirect after a small delay
    }, 500);
  });
}

// arrow-up

document.querySelector(".arrow-up").addEventListener("click", (e) => {
  const header = document.querySelector("header");
  if (header) {
    // Smooth scroll to the header
    header.scrollIntoView({ behavior: "smooth" });
  }
});

// SLIDER

let currentPositionCount = 0;

function moveSlide(step) {
  const silder = document.querySelector(".slider");
  const totalSlides = silder.children.length;

  currentPositionCount =
    (currentPositionCount + step + totalSlides) % totalSlides;

  // getting slide width
  const slideWidth = silder.children[0].clientWidth;

  // shifting image // use - sign to tell browser to shift by left.
  silder.style.transform = `translateX(-${
    currentPositionCount * slideWidth
  }px)`;
}
