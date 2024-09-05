"use strict";
/*
Control flow is one of the important concept in js that used to control the flow of code. "it always return boolean values"
there are 4 major point => 
    1. if
    2. else if
    3. else
    4. switch
*/

let age = 17;

if (age >= 18) {
  //   console.log("you have right to vote!");
} else {
  //   console.log("you don't have right to vote!");
}

const marks = [43, 24, 67, 54, 88];

// marks.forEach((num) => {
//   if (num <= 24) {
//     console.log(`you have to improve your marks`);
//   } else if (num <= 43) {
//     console.log(`Good!`);
//   } else if (num <= 54) {
//     console.log(`Best!`);
//   } else if (num <= 67) {
//     console.log(`Excellent!`);
//   } else if (num >= 88) {
//     console.log(`Outstanding!`);
//   } else {
//     console.log("Enter number is not valid!");
//   }
// });

// terniary Operator.

marks.forEach((i) => {
  let mess =
    i <= 24
      ? "You have to improve your marks!"
      : i <= 43
      ? "Good!"
      : i <= 54
      ? "Best!"
      : i <= 67
      ? "Excellent!"
      : i >= 88
      ? "Outstanding!"
      : "This line required to mention in the last of terniary operator!";
  console.log(mess);
});

/* Switch */
let day = "monday";

switch (day) {
  case "monday":
    console.log("Today Is Monday!".toUpperCase());
    break;
  case "tuesday":
    console.log("Today Is Tuesday!");
    break;
  case "wednesday":
    console.log("Today Is Wednesday!");
    break;
  case "thursday":
    console.log("Today Is Thursday!");
    break;
  case "friday":
    console.log("Today Is Friday!");
    break;
  case "saturday":
    console.log("Today Is Saturday!");
    break;
  case "sunday":
    console.log("Today Is Sunday!");
    break;
  default:
    console.log("Please Enter Week Days!");
}

// Find Highest Number!
const highestNumber = [43, 24, 67, 54, 88];
let storeHighestNum = 0;
highestNumber.forEach((i) => {
  if (i > storeHighestNum) {
    storeHighestNum = i;
  }
});

console.log(
  `So your highest number is ${storeHighestNum} which is Outstanding!`
);

// Arrange Array Number from low to high.

const arrayList = [43, 24, 67, 54, 88];

for (let init = 0; init <= arrayList.length; init++) {
  // Condition to Swipe.
  if (arrayList[init] > arrayList[init + 1]) {
    // Sorting Value.
    let temp = arrayList[init];
    arrayList[init] = arrayList[init + 1];
    arrayList[init + 1] = temp;
  }
}
console.log("Now the Array Items are Arranged as we aspected! " + arrayList);
