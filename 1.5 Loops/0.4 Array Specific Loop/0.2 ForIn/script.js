// NOte This will  return key or index of iteration value.

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

for (const arr of books) {
  for (const key in arr) {
    if (Object.hasOwnProperty.bind(books, key)) {
      const element = arr[key];
      console.log(key + " " + element);
      console.log();
      console.log();
    } else {
      console.log(`this key : ${key} : does not exist.`);
    }
  }
}
