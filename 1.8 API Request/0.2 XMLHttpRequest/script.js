/*
#1. open(method, URL, async):

Initializes a request.
Parameters:
method: HTTP request method (GET, POST, PUT, etc.).
URL: The endpoint or URL to send the request to.
async: Boolean (typically true for asynchronous requests).

xhr.open('GET', 'https://api.example.com/data', true);

send(body):

Sends the request to the server.
The body parameter is optional and is typically used for POST, PUT, or PATCH requests to send data (e.g., JSON).

#2. xhr.send(); // For GET requests
xhr.send(JSON.stringify({ key: 'value' })); // For POST requests

#3. abort():
Cancels an ongoing request.

xhr.abort();

#4. onreadystatechange:

An event handler that triggers when the readyState of the request changes. It’s commonly used to check when the response is ready.

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};

#5. onload:

An alternative to onreadystatechange, this triggers when the request completes successfully.

xhr.onload = function() {
    if (xhr.status === 200) {
        console.log(xhr.responseText);
    }
};

#6. Key Properties of XMLHttpRequest:
readyState: Tracks the progress of the request. It has 5 values:

0: Unsent
1: Opened
2: Headers received
3: Loading (receiving response)
4: Done (response received)
status: The HTTP status code of the response (e.g., 200 for success, 404 for not found, 500 for server error).

responseText: Contains the response body as a string (used with responseType = 'text').

response: The full response data, typically used with different responseType settings (like json, blob, etc.).

#7. File Uploads:

XMLHttpRequest can be used for uploading files (e.g., via FormData) with progress tracking, using the onprogress event handler.

xhr.upload.onprogress = function(event) {
    if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        console.log(`Upload progress: ${percentComplete}%`);
    }
};

*/

const requestAPI = "https://api.github.com/users/behan05";
const xhr = new XMLHttpRequest();

// open() method are preparing to send.
xhr.open("GET", requestAPI, true);

// Event Handler which track progress.
xhr.onreadystatechange = function (e) {
  if (xhr.readyState === 4) {
    // converting response string data into Object.

    // const data = JSON.parse(this.responseText);
    // console.log(typeof data);
    // console.log(data.bio);

    try {
      const data = JSON.parse(this.responseText);
      console.log(typeof data);
      console.log(data.bio);
    } catch (error) {
      console.error(error);
    }
  }
  //   console.log(this.responseText);
};

// send() method actual send to the server after prepared by open.
xhr.send();
