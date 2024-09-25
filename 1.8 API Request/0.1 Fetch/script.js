/* 
Overview of the Fetch API
The Fetch API provides a modern way to make network requests and interact with APIs. It returns a promise that resolves to the Response object representing the response to the request.
*/

/* Syntax:
fetch(url, options)
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse JSON data
  })
  .then(data => {
    console.log(data); // Handle the parsed data
  })
  .catch(error => {
    console.error('Fetch error:', error); // Handle errors
  });
*/

const url = "https://api.github.com/users/behan05";

// after fetch it return promise that why you can use then and catch method.
fetch(url)
  .then((respond) => {
    // console.log(respond);
    console.log("Successfully Requested!");
  })
  .catch((error) => {
    console.log(error);
    console.log("error");
  });

// Async function also return promise.
async function requestAPI(apiUrl) {
  try {
    const requestData = await fetch(apiUrl);
    if (!requestData.ok) {
      throw new Error(`Http error error: ${requestData.status}`);
    } else {
      const data = await requestData.json();
      return data.login;
    }
  } catch (error) {
    console.log("error inside try and catch! ", error);
    console.log(error);
    
  }
}

requestAPI(url)
  .then((respond) => {
    console.log(respond);
  })
  .catch((error) => {
    console.log(error);
  });
