// Arrow Function is a function.
// arrow functions are often stored in variables because they do not have their own name

let func = () => {
  let name = "Behan";
  let age = 25;
  console.log(name + " " + age);
};
// func();

// Arrow function with parameter.
let addTwoNumber = (num1, num2) => {
  // here you return explicitily when all this are in one line no need to return it automatically return.
  return num1 + num2;
};

let res = addTwoNumber(2, 2);
// console.log(res);

// using rest operator.
let withRest = (...rest) => {
  let store = 0;
  rest.forEach((i) => {
    store += i;
  });

  return store;
};

// let calculateNumbers = withRest(2,3,4,55,8)

let startValue = 1;
const endValue = 101;
let createArray = Array();

for (startValue; startValue <= endValue; startValue++) {
  createArray += startValue;
  createArray += ",";
}

let calculateNumbers = withRest(Array.of(createArray));
// console.log(calculateNumbers);

// console.log(Array.of(createArray));

// Direct Arrow Function.
let curly = (a, b) => console.log(a + b);
// curly(2, 4)

let curly2 = (a, b) => a + b;
let hold = curly2(2, 4);
// console.log(hold);

// Nested Arrow Function with Closure.

let nestedArrowFunc = (name) => {
  // Private Variable.
  let userName = name;

  return () => {
    return `my name is ${userName}`;
  };
};

let nestedResult = nestedArrowFunc("Behan");

console.log(nestedResult());
