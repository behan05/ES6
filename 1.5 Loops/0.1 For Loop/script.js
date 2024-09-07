/*
  Loops are handy, if you want to run the same code over and over again, each time with a different value.
  there are many loop used in js each has difi functionality.

  Syntax of Loop: 

  loop (initial value; condition; updatation) {
    // block of code;
  }
*/
"use strick";
let arrayList = Array();
for (let i = 1; i <= 100; i++) {
  if (i != undefined && i != null) {
    arrayList.push(i);
  }
}

// console.log(arrayList);

for (let i = 2; i <= 20; i++) {
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} multiply by ${j} = ${i * j}`);
  }
  //   console.log();
  //   console.log();
}

// Arrange Value.

let numberList = [34, 98, 1, 75, 33, 94, 11];
for (let i = 0; i <= numberList.length; i++) {
  for (let j = i + 1; j <= numberList.length - 1; j++) {
    if (numberList[i] > numberList[j]) {
      // swip with sorthand;
      [numberList[i], numberList[j]] = [numberList[j], numberList[i]];
    }
  }
}

// console.log(numberList);

// Work with Objects.

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

books.forEach((i) => {
  if (i.genre === "history" && i.publish === 2000) {
    i.publish = 2021;
    const keys = Object.keys(i);

    for (let j = 0; j <= keys.length - 1; j++) {
      let key = keys[j];
      console.log(key + " : " + i[key]);
      console.log();
    }
  }
});
