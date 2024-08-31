/*

there are two type of *Memory* used by javascript =>
    1. Stack
    2. Heap
    

    as we know in javascript, there are two type of data type primitive and non-primitive,

    so the *Stack*memory used by primitive data type and the *Heap* memory used by non-primitive data type.

    basically when you define primitive data type in a variable like "let a = 10" and you want to change the value of the primitive data type then you get the copy of actual data such as :

    let a = 20;
    b = a;

    means your original variable can not change.

    and whenever you define a non-primitive data type and change the value means you change the original value because in non-primitive data type a variable can give a memory location directly.

    const obj = {
        userId : 22017oyno,
        password: symbol("******")
    }

    obj => it a actual reference of its data.

    obj.userId = 254568non; means you change the actual value.
`
*/

// Stack

let uName = "behan".toUpperCase();
let email = "behankrbth@google.com";

let anotherName = uName;
anotherName = "Sitesh";

// console.log(anotherName);
// console.log(uName);

// Heap (Reference)

const person = {
  uName: "behan".toUpperCase(),
  email: "behankrbth@google.com",
};

const anotherPerson = person;
anotherPerson.uName = "Sinki";

// console.log(anotherPerson.uName);
// console.log(person.uName);

function fun(name, age) {
  const obj = {
    name: name,
    age: age,
  };

  return obj;
}

const fun1 = new fun("behan", 25);
const fun2 = fun1;

fun2.name = "Hemant Singh"
console.log(fun1.name);
console.log(fun2.name);
