// object is a non-primitive data type.

// there are two way to declear Object
// Constructor() Singleton
// Literals {}

// const obj1 = new Object();
// const obj2 = Object.create();

const person = {
  email: "behankrbth@google.com",
  upiId: "behankrbth@oksbi",
};

// console.log(person);

const mySym = Symbol("key");
const jsUser = {
  name: "behah",
  fullName: "behan kumar",
  [mySym]: "key1",
  email: "behankrbth@google.com",
  age: 25,
  isLoggedIn: true,
  lastLoggedIn: ["monday", "tuesday"],
  // you can treat function as variable in js.
  allDetail: function () {
    return `myname is ${this.fullName}`;
  },
};

// Access Object Data.

// console.log(jsUser.allDetail());
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);
// change object items.

const newJsUser = jsUser;
jsUser.name = "Sitesh";
// console.log(jsUser.name);
// console.log(newJsUser.name);

// you can treat function as variable in js.

// console.log(jsUser.allDetail());

jsUser.returnSomeDetails = function (agePlusOne) {
  return this.age + agePlusOne;
};

// console.log(jsUser);
// Anonymous function.
// console.log(jsUser.returnSomeDetails(1));

// concatinate the object.

const car = {
  model: [2002, 2015, 2018],
  color: ["red", "black", "blue"],
};

const suzuki = {
  document: {
    license: true,
    airPolution: "no",
  },
};

// done with ES6 spread method.
// const finalResult = {...car, ...suzuki};
const finalResult = Object.assign({}, car, suzuki);
// console.log(finalResult);

// some important method which used continuously.
// console.log(Object.keys(jsUser));
// console.log(Object.values(jsUser));
// console.log(Object.entries(jsUser));

// Object.freeze(jsUser);
jsUser.nationality = "India";
// console.log(jsUser.hasOwnProperty("nationality"));

// delete newJsUser.name;
// console.log(jsUser);

// Object.seal(jsUser); //you can't add or remove but still modify the exsiting data.
jsUser.fullName = "Sitesh kumar";
// delete jsUser.fullName;
// console.log(jsUser.fullName);

Object.preventExtensions(jsUser);
jsUser.favourateFruit = "manago";
// console.log(jsUser);

// * Object De-structuring*
/*
Object destructuring is a syntax feature in JavaScript that allows you to extract values from objects and assign them to variables more conveniently. It’s a part of ES6 (ECMAScript 2015) and simplifies the process of working with object properties.
*/

const user = {
  name: "Sitesh",
  age: 25,
  email: "behankrbth@google.com",
};

const { name, age, email } = user;
// console.log(name);
// console.log(age);
// console.log(email);

// Renaming the keys.
const { name: n, age: a, email: e } = user;
// console.log(n);
// console.log(a);
// console.log(e);

// Default Value.
const { name: na, age: ag, email: em, address = "New Delhi" } = user;

// console.log(na);
// console.log(ag);
// console.log(em);
// console.log(address);

// nested De-structuring.

const user1 = {
  name: "Sitesh",
  address: {
    city: "Delhi",
    zip: "110001",
  },
};

const {
  name: naam,
  address: { city, zip },
} = user1;

// console.log(naam);
// console.log(city);
// console.log(zip);

const user2 = {
  address: {
    city: "Delhi",
    postal: {
      zip: "110001",
    },
  },
};

const {
  address: {
    city: ct,
    postal: { zip: zp },
  },
} = user2;

// console.log(ct);
// console.log(zp);

// Destructuring with function.

function destructuring({
  address: {
    city,
    postal: { zip },
  },
}) {
  return `my address is ${city} and the zip code is ${zip}`;
}

let result = destructuring(user2);
console.log(result);
