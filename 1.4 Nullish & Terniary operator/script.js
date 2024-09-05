// Nullish coalescing operator with only with Null and undefine value.

let wholeNum1 = 5 ?? 10;
let wholeNum2 = null ?? 102;
let wholeNum3 = undefined ?? 200;

function ageCheck(name, age) {
  return {
    name: name,
    age: age ?? 18,
    greet() {
      let message =
        this.age >= 18
          ? "You are Eligible for vote!"
          : "you are not Eligible for vote!";
      return message;
    },
  };
}

// let res = ageCheck("Behan");
// console.log(res.greet());

// console.log(wholeNum1);
// console.log(wholeNum2);
// console.log(wholeNum3);

// Terniary Operator alternative of "if else" it used when need to if else multiple times.

let subjectNum = [33, 45, 24, 77, 96];

subjectNum.forEach((num) => {
  let returnVal =
    num <= 24
      ? "You have to improve your skill."
      : num <= 33
      ? "Good!"
      : num <= 45
      ? "Best!"
      : num <= 77
      ? "Excellent!"
      : num >= 96
      ? "Outstanding!"
      : "Enter a valid number.";
  console.log(returnVal);
});
