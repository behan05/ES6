/*  ## NOTE => Hoisting concept understand if you know how javascript with with database.

Accourding to hoisting ,you can call the function before declaration, but you can't access before declaration.
 */

function accessItems() {
  hoistingFunc();

  //  can not access variable before initializing.
  // hoistingVar;
}

accessItems();

function hoistingFunc() {
  console.log(
    `hello i am a hoisting function meand i am able to run before declaration!`
  );
}

const hoistingVar =
  "hello i am variable according to hoisting con't access before declaration!";

// console.log(hoistingVar);

//   CallBack Function

function callMe(message) {
  let holdReturnValue = message();
  console.log(holdReturnValue.trim());
}

function message() {
  return `Hello i am a function and i am going to pass as argument!`;
}

callMe(message);
