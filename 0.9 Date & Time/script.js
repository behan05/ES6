let myDate = new Date();

// console.log(myDate);
// console.log(
//   `today is ${myDate.getDay() + 1}/${myDate.getMonth()+1}/${myDate.getFullYear()}`
// );
// console.log();
// console.log(myDate.toDateString());
// console.log();
// console.log(myDate.toTimeString());
// console.log();
// console.log(myDate.toLocaleDateString());
// console.log();
// console.log(myDate.toLocaleTimeString());

// Create your own date & time.

// let myOwnCreatedDate = new Date("01-09-2024");
// let myOwnCreatedDate = new Date(2024,9,1);
// console.log(myOwnCreatedDate.toDateString());

// Simple Date Calculator.
// yyyy/dd/mm => ISO format.

const bornDate = new Date("1997-05-06");
const todayDate = new Date();

// Calculate the difference in milliseconds
const diffInMilliseconds = Number(todayDate) - Number(bornDate);

// Convert milliseconds to total days
const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
// console.log(diffInDays);

// Calculate years from total days
const daysInYear = 365.25; // Approximate number of days in a year considering leap years
const years = Math.floor(diffInDays / daysInYear);

// Calculate remaining days after full years
const remainingDays = Math.floor(diffInDays % daysInYear);

console.log(`Years: ${years}`);
console.log(`Days: ${remainingDays}`);
