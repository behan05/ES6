/*

A promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to handle asynchronous tasks (like fetching data from an API) in a more structured and readable way.

*/

"use strict";

function getData(dataId, getNextData) {
  setTimeout(() => {
    // console.log("data ", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

// This is called hell. the solution of callback hell is promise.
/*
getData("1", () => {
  console.log("waiting for next data...");
  getData("2", () => {
    console.log("waiting for next data...");
    getData("3", () => {
      console.log("All Data Fetched!");
    });
  });
});
*/

// basically promise is an object in js. and it is the solution of callback hell;

/*
syntax is like:
    const promises = new Promise((resolve, rejected) => {})
*/

const promises = new Promise((resolve, reject) => {});
// console.log(promises); // padding

const promise = new Promise((resolve, reject) => {
  //   console.log("i am Promise");
  resolve("This promise is completed!");
  reject("Failed");
});

// console.log(promise);

function makeRequest(URL) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", URL, true);

    // Event Handler
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        if (this.readyState === 4) {
          const apiData = JSON.parse(this.responseText);
          resolve(apiData);
        }
      } else {
        reject(
          new Error(
            `Request failed with status ${this.status} ${this.statusText}`
          )
        );
      }
    };
    xhr.onerror = function () {
      reject(new Error("Network Error!"));
    };
    xhr.send();
  });
}

// Timing function().

// async function timing() {
//   setTimeout(() => {
//     const currentTime = new Date();
//     console.log(currentTime.toLocaleTimeString());
//   }, 200);
// }

function callPromise() {
  try {
    const recevedPromiseData = makeRequest(
      "https://api.github.com/users/behan05"
    );
    // console.log(recevedPromiseData);

    // there to must promise method then or catch.

    recevedPromiseData
      .then((res) => {
        for (const key in res) {
          console.log(key);

          if (Object.hasOwnProperty.bind(res, key)) {
            const element = res[key];
            console.log(element);

            if (key === "avatar_url") {
              const createImg = document.createElement("img");
              createImg.width = "200";
              createImg.height = "200";
              createImg.src = element;
              document.body.appendChild(createImg);
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error(error);
  }
}

callPromise();
