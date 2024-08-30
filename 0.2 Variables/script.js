// there are three type of variable

// var
// let
// const

/*
var a = 10;

function callMe() {
  var a = 20;
  console.log(a);
}

callMe();
var a = 30;
console.log(a);
console.log(a);

*/

/*
let score = 10;

function callMe() {
  // override value.
  score = 20;
  console.log(typeof score);
  console.log(score);
}

callMe();

// let score = 30; not declear again.

*/

// const obj = new Object();

// obj.name = "Behan";
// obj.age = 24;
// obj.mess = function () {
//   console.log(this.name);
// };
// obj.mess();
// console.log(obj);

// obj.name = 'Sitesh';
// obj.mess()
// console.log(obj.name);

const accountId = 2207102;
// console.log(accountId);

accountId = 2207102; // Error Asskignment to the const variable.
console.log(accountId);
