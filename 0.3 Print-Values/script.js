//  there are three way to print value.
// console.log(); means you to console that please log(print) this value on console.
// console.table([list1, list2, ...]); print more then one array at a time.
// document.write(); write direct to the document(HTML) file.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
// use backticks also known as template literals (` `). and also you can pass expression along with ${}
let name = `
<header>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Support</li>
    </ul>
</header>
`;
// its happen because of single line string .
// let name2 = "hello name is <this> and age is </that>";
// console.log(name2);

// console.log(arr1);
// window.console.log(arr1);

// window.console.table([arr1, arr2]);
// console.table([arr1,arr2]);
// console.log(typeof(name));
document.write(name);
