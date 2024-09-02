// let arr = ["behan", 12, { are: "you" }, true, Symbol(234), BigInt(23462187e216)];
// // console.log(typeof arr);
// console.log(arr);

let arr = Array(1, 2, 3, 5);
let arr2 = [1, 2, 3, 3, 4];
// console.log(arr, arr2);

// console.log(arr2[2]);

// methods

arr2.push(["behan", "Ram"]);
// console.log(arr2[5][0]);
let deletedValue = arr2.pop();
// console.log(deletedValue);
arr2.unshift(["ram", "Shyam"]);
arr2.shift();
arr2.includes(1);
arr2.indexOf(5);

let newArray = arr2.join() + " Hello World";
// console.log(newArray); // return String.

// Slice /Splice.
// console.log(arr2.slice(0, 3));
arr2.splice(0, 1, "RAM JI");
// console.log(arr2.includes("ram ji".toUpperCase(), 0));

// Some Advance Methods.

const marvalHeros = ["Iron-man", "Thor", "Loki", "Spider-man"];
const dcHeros = ["Dr-Doom", "Bat-man", "Flash"];
const indiSuperHeros = ["Saktiman", "Krish"];

// Concatinate both of arrays.

// let add = marvalHeros.concat(dcHeros,indiSuperHeros);
// marvalHeros.push(dcHeros);
// console.log(add);

// you can done with "Spread" method.

// const allHeros = [...marvalHeros,...dcHeros,...indiSuperHeros];
// console.log(allHeros);

// To convert the complex array(2d,3d,4d,etc) in a single array using flat() method.

marvalHeros.push([dcHeros, indiSuperHeros], dcHeros);
marvalHeros[5].unshift(indiSuperHeros);

const complexArray = marvalHeros;
const easyArray = complexArray.flat(Infinity);
// console.log(easyArray);

// Some more important Array properties at use frequently.

// console.log(Array.isArray(easyArray));
// console.log(Array.from("Hello world!"));

// Convert multiple variable item into a single Array.

const score1 = 200;
const score2 = 300;
const score3 = 400;
const score4 = 500;

// console.log(Array.of(score1, score2, score3, score4));

// console.log(easyArray.lastIndexOf("batman"))

easyArray.forEach((items) => {
  // console.log(items);
});

// Now we need to learn about "Array Destructuring.

// basic destucturing

let number = [1, 2, 3];

// Destructuring.
const [one, two, three] = number;
// console.log(one);
// console.log(two);
// console.log(three);

// skip the second element.

let colors = ["red", "green", "blue"];
const [red, , blue] = colors;
// console.log(red);
// console.log(green); // skip this log value.
// console.log(blue);

// Destructuring with default value.

const fruit = ["apple", "orange"];
const [apple, orange] = fruit;
const [fruit1, fruit2, fruit3 = "banana"] = fruit;

// console.log(orange);
// console.log(fruit3);

// Nested Destructuring:

const nestedArray = [1, 2, 3, [14, 15]];
const [a, b, c, [d, e]] = nestedArray;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// rest 
const restOfNum = [1, 2, 3, 4, 5, 6];

const [one1, two2, ...rest] = restOfNum
console.log(one1);
console.log(two2);
console.log(rest);

