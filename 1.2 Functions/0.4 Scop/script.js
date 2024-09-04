// Lexical Scope.

// Global Variable.
let number = "91-8969828467";

function outerFunc() {
  //local variable.
  let name = "Behan";

  // inner function can access outer function properties but the outer function can't access the inner function this is called Lexical Scope.
  function innerFunc() {
    // here inner can access the name variable which declared in the parent function called outerFunc.
    return `my name is ${name}`;
  }
  return innerFunc();
}

let res = outerFunc();
// console.log(res);

// Closure scope

function outer() {
  // private bariable
  const wish = "Hello world i am private variable!";

  return function () {
    console.log(wish);
  };
}
// outer()();
let innerfunction = outer();

//  here you can call inner function from outside of its scope.
// innerfunction();

function greet(name) {
  let uName = name;

  function accessGreet() {
    console.log(`Hey ${uName} how are you!`);
  }

  return function () {
    accessGreet();
  };
}


// greet("behan")();
let result = greet("behan");
result();

