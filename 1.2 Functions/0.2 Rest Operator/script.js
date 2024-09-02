// The use of ES6 Rest method.

function calculateSum(a, b) {
  return (sum = a + b);
}

// if you add more then two num need to used rest operator
// let holdSum = calculateSum(1,2,3,4,5);
// console.log(holdSum); // output will be "3".

// rest parameter denoted by "...nameOfParameter"
function calculateSum2(...rest) {
  let add = 0;
  for (let index = 0; index < rest.length; index++) {
    add += rest[index];
  }
  return add;
}

const calculateSumValue = calculateSum2(2, 3, 4, 5, 6);
// console.log(calculateSumValue);
