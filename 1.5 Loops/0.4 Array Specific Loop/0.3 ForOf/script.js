"use strict";

const lists = [1, 2, 3, 4, 5];
for (const list of lists) {
  //   console.log(list);
}

const words = "Hello world!";
for (const word of words) {
  //   console.log(word);
}

const texts = `the brown boxs /jumps over the lazy dog!`;
for (let text of texts) {
  if (text == "/") {
    let replaced = text.replace("/", "Skip Slash Symbol");
    console.log(replaced);
  } else {
    console.log(text);
  }
}
