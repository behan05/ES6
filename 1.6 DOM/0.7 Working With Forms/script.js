/*
## 7. Working with Forms

- **Form Elements**
  - Accessing form fields
  - Handling form submissions
- **Validation and Dynamic Updates**
  - Validating user input
  - Updating UI based on user interaction
*/

/*  
// create form
function form() {
  // create form.
  const createForm = document.createElement("form");
  createForm.classList.add("form");

  // create name label
  const createLabel = document.createElement("label");
  createLabel.setAttribute("for", "name");
  createLabel.innerText = "Name";
  createLabel.classList.add("label");

  // create input
  const createInput = document.createElement("input");
  createInput.setAttribute("type", "text");
  createInput.setAttribute("placeholder", "Enter Your Name");
  createInput.classList.add("input");

  // create email label
  const createEmailLabel = document.createElement("label");
  createEmailLabel.setAttribute("for", "email");
  createEmailLabel.innerText = "Email";
  createEmailLabel.classList.add("label");

  // create email input
  const createEmailInput = document.createElement("input");
  createEmailInput.setAttribute("type", "email");
  createEmailInput.setAttribute("placeholder", "Enter Your Email");
  createEmailInput.classList.add("input");

  // create button
  const createBtn = document.createElement("button");
  const addText = document.createTextNode("Submit");
  createBtn.appendChild(addText);
  createBtn.setAttribute("type", "submit");
  createBtn.classList.add("button");

  const arrayList = [
    createLabel,
    createInput,
    createEmailLabel,
    createEmailInput,
    createBtn,
  ];
  arrayList.forEach((i) => {
    createForm.appendChild(i);
  });
  // appeand over document.
  document.body.appendChild(createForm);
}

form();
*/

window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const img = document.querySelector("img");
    const fileInput = document.querySelector("input[type='file']");
    // console.log(fileInput.files.leng);
    // console.log(fileInput);

    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader(file);
      reader.onload = function (e) {
        img.setAttribute("src", e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      console.error("No File Selected!");
    }

    const name = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;
    const number = document.querySelector("input[type='number']").value;
    const detail = document.querySelector(".detail__about__Person");
    let num = Number(number);
    if (typeof num === "number" && !isNaN(num)) {
      let regexVal = /\(\d{3}\) \d{3}-\d{4}/;
      console.log(`number is currect ${regexVal}`);
    } else {
      console.error("Please enter currect Number");
    }

    let firstP = detail.firstElementChild;
    firstP.innerHTML = `my name is ${name}`;
    firstP.nextElementSibling.innerHTML = `my email is ${email}`;
    detail.lastElementChild.innerHTML = `my contact number is ${number}`;
  });
});
