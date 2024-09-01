//  Number is primitive data type that use stack to store.

let num = 24;

// using Constructor

let num2 = Number(23);

// console.log(num);
// console.log(num2);

// methods

const score = 400.345;
// console.log(score.toFixed(2));
let price = 2342.52;
// console.log(price.toFixed(0));
// console.log(price.toExponential(1,2));
let wholenNum = parseInt(price);
let floatNum = parseFloat(price);
console.log(wholenNum);
console.log(floatNum);
console.log(Number.isFinite(price));
console.log(Number.isInteger(price));

console.log(score.toFixed(2));


const num3 = new Number();
console.log(typeof num3);
