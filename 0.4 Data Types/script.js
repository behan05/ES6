// There are two type of data type
// primitive and non-primitive data type (Referance data type).

/*
in primitive data type, there are 7 data type =>

    1. Number
    2. String
    3. Boolean
    4. null
    5. undefine
    6. BigInt
    7. Symbol


in non-primitive data type, there are main 1 data type but some time we called 3 data types =>

    1. Object
    2. Array
    3. Function (Also consider as non-primitive data type).
*/

let score = 22;
let name = `Behan`;
let isOut = false;
let largeNum = BigInt(123345n);
let sym = Symbol("sym2");
let address;
let nul = null;

// console.log(score);
// console.log(name);
// console.log(isOut);
// console.log(largeNum);
// console.log(sym);
// console.log(address);
// console.log(nul);

let paddword = Symbol("Main nahi pataunga");
const person = {
  userId: "behan05",
  accountId: 2207102,
  [paddword]: Symbol(),
  mess: function () {
    `hello dear developer ${this.name}`;
  },
};

// console.log(person);
// console.log(person.userId);
// console.log(person.accountId);
// console.log(person[paddword]);

// Array.

let array = new Array();

array = [1, 2, 3, 4, 5];
array = ["behan", name, person.accountId, person[paddword], score, person.mess];

// console.log(array);
array.forEach(function (i) {
  if (typeof i == "Function") {
    // console.log(array[i()]);
  } else {
    // console.log(i);
  }
});

// Function.

function fn1(name, age, geoLocation) {
  const personDetail = {
    name: name,
    age: age,
    geoLocation: geoLocation,

    personDetailPrint: function () {
      console.log(
        `my name is ${this.name} and my age is ${this.age} and currently i am living in ${this.geoLocation}`
      );
    },
  };

  return personDetail;
}

let fn2 = new fn1("Behan", 25, "New Delhi");
// fn2.personDetail;
// fn2.personDetail;
// fn2.personDetailPrint();
console.log(fn2);
