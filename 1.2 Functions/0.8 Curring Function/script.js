// curring function is a technique that take different parameter each time

function one(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

let curringFunc1 = one(2);
let curringFunc2 = curringFunc1(3);
let curringFunc3 = curringFunc2(5);

// another way to call.

const corries = one(2)(3)(5);
console.log(corries);
