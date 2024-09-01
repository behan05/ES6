// String with single quote ('');

let singleQuoteString = "Hello, World!";

// String with double quote ("");

let boubleQuoteString = "Hello, World!";

// String with backticks (``);

let backticksString = `my name is behan ${singleQuoteString}`;

// this is a normal way to create a string

// Single Quote or Double Quote you can use either but the consistency is the key so choose one style and continue in your project.

// ## Backticks(template Liretal) use this whenever you need feature like String Interpolation (Add to string) or multi-line String.

// There is one more way to create string using constructor method.

let usingConstructorMethod = String();

usingConstructorMethod = "Hello World!";
// console.log(typeof usingConstructorMethod);
// console.log(usingConstructorMethod);

// Some Important Method.

let name = "Behan Kumar";
let totalRepo = 23;

// String interpolation or concatinate;
// console.log(name + " " + totalRepo);
// console.log(`my name is ${name.toUpperCase()} and my total repository on github is ${totalRepo}`);

let anotherString = String("Behan");

// indexing
// let changeStringValue = anotherString[0] = "r";
let ano = anotherString.replace("B", "R");
// let change = anotherString.repeat(3,anotherString);
// console.log(ano);

let stringExperiment = "I am a Good Boy!";
let url = "www.github.com behan05";
console.log(stringExperiment.charAt(0));
console.log(stringExperiment.indexOf("Good"));
console.log(stringExperiment.slice(0, 5));
console.log(stringExperiment.charAt(0).repeat(5));
console.log(stringExperiment.toUpperCase());
console.log(stringExperiment.toLowerCase());
console.log(stringExperiment.length);

let subStr = stringExperiment.split(" ", 4);
console.log(subStr);
let currectUrl = url.replace(" ", "/");
console.log(currectUrl);

let trimsString = "       behan      ";
console.log();
console.log(trimsString);


// use to remove white space.
console.log(trimsString.trimStart());
console.log(trimsString.trimEnd());
console.log(trimsString.trim().toUpperCase());
