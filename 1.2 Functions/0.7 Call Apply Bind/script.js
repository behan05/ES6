// Call, Apply, Bind.

let person1 = {
  name: "Behan",
  age: 26,
  //   printDetails() {
  //     console.log(this.name);
  //   },
};
let person2 = {
  name: "Sitesh",
  age: 23,
};

function printDetails(designation, city) {
  console.log(this.name + " " + designation + " " + city);
}
// console.log(person1.name);
// person2.printDetails()
// person1.printDetails();

// ###########  Function Borrow (Call). ######################

// person1.printDetails.call(person2);
// printDetails.call(person1);
// printDetails.call(person2);

//  with parameter
// printDetails.call(person1, "Software Engineer!");
// printDetails.call(person2, "Software Engineer!");

// ###########  Apply ######################

// major difference between Call and Apply , during apply we pass argument as array list.

// printDetails.apply(person1, ["Software Engineer", "Bihar"]);
// printDetails.apply(person2, ["Software Engineer", "Delhi"]);

// ###########  Bind ######################
// bind this with specific object.

let person3 = {
  name: "chatGPT Instructor",
  age: "infinity",
  printDetails() {
    console.log(this.name);
  },
};

// Object Destructuring.
let { name, age, printDetails: bindDetails } = person3;

// let bindItem = bindDetails.bind(person3);
// bindItem();

// Combine all bind, apply and call

let boundFunc = printDetails.bind(person1);
// console.log(bound());

boundFunc.call(person1, "Software Engineer", "New Delhi");
boundFunc.apply(person1, ["Software Engineer", "Delhi"]);
