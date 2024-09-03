// function with Array.

function returnSecondArrayValue(getValue) {
  return getValue[2];
}

const arr = [330, 24, 532, 65, 789];
const result = returnSecondArrayValue(arr);
// console.log(result);

//

function DestructuringMethod([red, green, blue]) {
  return `all color are actually come from ${red} ${green} ${blue} RGB and its value is upon to 255`;
}

let colors = ["red", "green", "blue"];
const res = DestructuringMethod(colors);
// console.log(res);

// function with Object.

function objReturn() {
  return {
    name: "behan",
    profession: "Coder",
    detail: function () {
      return `${this.name} is a good ${this.profession}`;
    },
    address: {
      city: "New Delhi",
      postal: {
        zip: 140570,
      },
    },
  };
}

const objResult = objReturn();
// console.log(objResult.detail());
// console.log(objResult);

// Destructuring.
const {
  name,
  profession,
  detail: detailMethod,
  address: {
    city,
    postal: { zip },
  },
} = objResult;
const boundDetail = detailMethod.bind(objResult);

// console.log(name);
// console.log(profession);
// console.log(boundDetail());
// console.log(city);
// console.log(zip);

function ReturnValue({ name: nm, age: ag }) {
  this.name = nm;
  this.age = ag;
  this.greet = function () {
    return `my name is ${this.name} and I am ${this.age} years old!`;
  };
}

const obj = {
  name: "behan",
  age: 25,
};

// creating a new instance.
const newFunc = new ReturnValue(obj);

newFunc.name = "sitesh";
newFunc.age = 22;

// Destructuring.
const { name: n, age: a, greet: gt } = newFunc;

// return method binding.
const bounding = gt.bind(newFunc);
// console.log(n);
// console.log(a);
// console.log(bounding());

const person1 = {
  name: "behan",
  age: 25,
  greet: function () {
    return `my name is ${this.name} and i am ${this.age} years old!`;
  },
};

const person2 = {
  name: "sitesh",
  age: 22,
};

const greet = person1.greet; // extract greet from person1.
console.log(greet.call(person2));
