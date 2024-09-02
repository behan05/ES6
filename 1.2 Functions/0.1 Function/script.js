/*
a function is a block of code that used again and again in our code. basically function is a reusable code.

and the Syntax of it:

function functionName(parameter) {
    block of code
}

functionName(); // calling a function.
a functionName is a referance of the function and the "()"
round braces are used to call that function. 

so call the function by its name with round braces.
*/

// function
function helloWord() {
  //   console.log("Hello World");
}

// helloWord();

// function with parameter

function addTwoNumber(a, b) {
  // return keyword are used to explicitily return the result of this function to the calling place and after return keyword do not run.
  return a + b;
}

const addResult = addTwoNumber(2, 4);
// console.log(addResult);

// multiply

function multi(a, b) {
  let result = a * b;
  return result;
}

// console.log(multi(2, 1));
// console.log(multi(2, 2));
// console.log(multi(2, 3));
// console.log(multi(2, 4));
// console.log(multi(2, 5));
// console.log(multi(2, 6));
// console.log(multi(2, 7));
// console.log(multi(2, 8));
// console.log(multi(2, 9));
// console.log(multi(2, 10));

// Anonymous function because a function without name it simply store in a variable.
const fun = function () {
  //   console.log("hello i am a function who called by variabe name!");
};

// fun();

function loginMessage(name) {
  if (name === undefined) {
    // console.log("please loggedIn");
  } else {
    // console.log(`Hello ${name}, you loggedIn!`);
  }
}

// loginMessage();
// loginMessage("Behan");

// parameter with default value.

function mess(name = "behan", age) {
  return {
    name: name,
    age: age,
    greet: function () {
    //   console.log(`my name is ${this.name} and i am ${this.age} years old!`);
    },
  };
}

const holdObj = mess("behan", 25);
// console.log(typeof holdObj);
// console.log(holdObj);
// holdObj.greet();




