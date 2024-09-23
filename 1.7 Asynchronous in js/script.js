/*
Asynchronous means "not happening at the same time." In programming, it refers to the ability to start a task and continue executing other tasks while waiting for the first task to finish. This contrasts with synchronous programming, where tasks happen one after the other, and each task must finish before the next one starts.

In a synchronous system, if one task takes a long time (e.g., fetching data from a server), everything else has to wait. In an asynchronous system, tasks can overlap, and the program can keep working on other things without getting stuck waiting.
*/

function getData() {
  const data = fetch("https://api.github.com/users/behan05");
  console.log("Data Fetched!: ", data); // Synchronous
}
// getData();
// console.log("wait untill data is fetch");

// Asyncronous function start using "async" keyword!
async function getDataAsynchronously() {
  const data = await fetch("https://api.github.com/users/behan05");
  console.log("Data fetched:", data);
}
// getDataAsynchronously();
// console.log("This will run immediately without waiting");

// Going to learn setInterval, setTimeout asynchronous mehtod provided by window global object. both are take two important parameter setInterval(reference , timeout);

const stopTime = setInterval(function () {
  const time = new Date();
  //   console.log(time.toLocaleTimeString());
}, 1000);

const btn = document.querySelector("button").addEventListener("click", (e) => {
  if (stopTime) {
    clearInterval(stopTime);
    console.log(e.target.tagName, "Stop Time");
  }
});
// console.log("Hello!");

// executer after specified delay time at once
setTimeout(() => {
  console.log("Running after 2s");
}, 2000);

async function printName() {
  const data = await fetch("https://api.github.com/users/behan05");

  setTimeout(() => {
    console.log(data);
  }, 1000);
  
}
printName();
console.log("data is coming...");

