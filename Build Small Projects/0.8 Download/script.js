// This approach with local image like image should be availabe in the file section.

/* 
const downloadBtn = document.getElementById("downloadBtn");
downloadBtn.addEventListener("click", (event) => {
  // Get the image source
  const img = document.getElementById("image");
  const imgURL = img.scr;

  // Create a temporary link
  const link = document.createElement("a");
  link.href = imgURL;

  // Set the name for the downloaded image
  link.download = "downloaded-image.png";

  // Append the link to the body
  document.body.appendChild(link);

  // Click Programmitacally.
  link.click();
  document.body.removeChild(link);
});
*/

// this technique work when you get image from api or another src.

document.querySelector("#downloadBtn").addEventListener("click", (e) => {
  const imageUrl = document.querySelector("#image").src;

  // fetch image from url
  fetch(imageUrl)
    .then((respond) => {
      //convert image to large binary(blob)
      return respond.blob();
    })
    .then((blob) => {
      const link = document.createElement("a");

      // create temporaraly url.
      const tempURL = URL.createObjectURL(blob);
      link.href = tempURL;
      link.download = "download-file.png"; // name to download file

      // append and click by browser to download.
      document.body.appendChild(link);
      link.click();

      // remove from docs to free up memory.
      document.body.removeChild(link);
      URL.revokeObjectURL(tempURL);
    })
    .catch((error) => {
      console.error("Download Failed!: ", error);
    });
});
