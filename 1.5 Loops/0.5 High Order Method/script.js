// map, filter, and reduce are array methods that allow you to process and manipulate arrays efficiently using callback functions.

const myArray = [1, 2, 3, 4, 5];
const double = myArray.map((i, index) => {
  return i * 2;
});
// const fil = double.filter((i) => i >= 8);
// console.log(fil);

/*
// forEach mehtod can not return value.
let n = myArray.forEach((i) => {
  return i;
});

console.log(n);
*/

const books = [
  {
    title: "book One",
    genre: "history",
    publish: 1995,
    edition: 2005,
  },
  {
    title: "book Two",
    genre: "science",
    publish: 2000,
    edition: 2007,
  },
  {
    title: "book Three",
    genre: "biology",
    publish: 1997,
    edition: 2013,
  },
  {
    title: "book Four",
    genre: "computer vision",
    publish: 1985,
    edition: 2014,
  },
  {
    title: "book Five",
    genre: "Agreegetion",
    publish: 2015,
    edition: 2017,
  },
  {
    title: "book One",
    genre: "history",
    publish: 2000,
    edition: 2024,
  },
];

/*
books.map((i, index) => {
  for (const key in i) {
    console.log(key + " " + i[key]);
    console.log();
    console.log();
  }
});
*/

// *********  Filter  **************
/*
for (const element of books) {
  for (const key in element) {
    if (
      Object.hasOwnProperty.call(element, key) &&
      element[key] === "history"
    ) {
      console.log(key + " " + element[key]);
    }
  }
}
*/

const filterData = books.filter((items) => items.genre === "history");
// console.log(filterData);

// for (const key in filterData) {
//   if (Object.prototype.hasOwnProperty.call(filterData, key)) {
//     const element = filterData[key];
//     console.log(element);
//   }
// }

// ***************  Reduce  **************************

/*
const list = [21, 31, 443, 54, 645, 77, 79];
let accumulator = 0;
for (let i of list) {
  accumulator += i;
}
// console.log(accumulator);

let wholeVale = list.reduce((acc, currentVal) => {
  return (acc += currentVal);
}, 0);

console.log(wholeVale);
*/

const shoppingCart = [
  {
    itemName: "python",
    price: 999,
  },
  {
    itemName: "javascript",
    price: 1999,
  },
  {
    itemName: ".net",
    price: 599,
  },
];

const priceToPay = shoppingCart.reduce((acc, amount) => {
  return acc + amount.price;
}, 0);

// console.log(priceToPay);

// ********************  Chaining  *************************

const myAnotherArray = [1, 2, 3, 4, 5];

const res = myAnotherArray
  .map((i) => i * 2)
  .filter((j) => j >= 4)
  .map((i) => i * 4)
  .reduce((acc, cur) => {
    return acc + cur
  },0);
console.log(res);
