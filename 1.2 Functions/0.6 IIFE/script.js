//  IIFE (Immediate Invoked Function Expression).

/*
Syntax.

( function () {
    block of Code.
}
)();
*/

(function () {
  //   console.log("Hello World! From Regular Function.");
})();

(() => {
  //   console.log("Hello World! From Arrow Function.");
})();

// Singleton

let singleton = function () {
  let instance;

  function createInstance() {
    return {
      data: "this is a single ton Instance",
      greet() {
        let currentTime = new Date();
        let tmNow = currentTime.toLocaleTimeString();
        return {
          tmNow2: tmNow,
          data1: this.data,
        };
      },
    };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      } else {
        return instance;
      }
      return instance;
    },
  };
};

let Singleton1 = singleton().getInstance();
let Singleton2 = singleton().getInstance();
// console.log(Singleton1.greet());
// console.log(Singleton2.greet());
let { tmNow2: tm, data1: d } = Singleton1.greet();
console.log(tm);
console.log(d);
