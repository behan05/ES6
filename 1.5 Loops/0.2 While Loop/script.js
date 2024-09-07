// while loop can execute its code once the conditionn are false that it stop its execution.

// while (true) {
//   // infinite loop;
// }

let number = 10;

// while (number < 20) {
//   console.log(number);
//   number = number + 1;
// }

let arr = [23, 45, 2, 687, 3, 1, 78];
let index = 0;
// while (index < arr.length) {
//   console.log(arr[index]);
//   index++;
// }

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

while (index < books.length) {
  if (books[index].genre === "computer vision") {
    console.log(books[index]);
  }
  index++;
}
