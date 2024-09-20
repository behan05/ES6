// Create form

const createForm = document.createElement("form");
createForm.setAttribute("method", "get");
createForm.setAttribute("enctype", "multipart/form-data");
createForm.classList.add("form");

const createFile = document.createElement("input");
createFile.setAttribute("type", "file");
createFile.setAttribute("name", "file");
createFile.setAttribute("id", "file");
createFile.setAttribute("id", "file");

const createButton = document.createElement("button");
createButton.setAttribute("type", "submit");
const addText = document.createTextNode("Upload");

createButton.appendChild(addText);
document.body.appendChild(createForm);
const elements = [createFile, createButton];
for (const element of elements) {
  createForm.appendChild(element);
}

// Handling Input File.

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Target file in DOM object.
  const file = document.querySelector("input[type='file']");

  // condition to check file.
  if (file.files.length > 0) {
    const fileItems = file.files[0];

    // create FileReader Object Instance.
    const readerInstance = new FileReader();

    // Handle file which trigger by browser and call onload function and also pass trigger event as parameter to onload handler.
    readerInstance.onload = function (event) {
      document.body.style.backgroundImage = `url(${event.target.result})`;
    };

    // if file is not read currectely broser trigger this handler.
    readerInstance.onerror = function (event) {
      console.error(event.target.error);
    };

    // Read the file.
    readerInstance.readAsDataURL(fileItems);
  } else {
    console.error("Zero file Uploaded!");
  }
});
