// for each is a array specific loop which take function as parameter (callback function) and it also known as high order function. and for each loop is by default method of array.

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
myArray.forEach((value, index) => {
  //   console.log(`index of ${value} is ${index}`);
});

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

books.forEach((item) => {
  for (const key in item) {
    if (Object.hasOwnProperty.call(item, key)) {
      console.log(key + " " + item[key]);
    }
    console.log();
    console.log();
  }
});
