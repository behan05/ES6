# HTML and the DOM

## What is HTML?

HTML (HyperText Markup Language) is a markup language used to structure your web page with elements like `<div>`, `<button>`, `<h1>`, etc.

## What is the DOM?

The DOM (Document Object Model) is an interface (or programming model) that represents your HTML document as a tree of objects in memory. Each HTML element is turned into a node in the DOM, and JavaScript can interact with these nodes as objects.

In simple terms:

- **HTML** defines the structure of the page.
- The browser translates that HTML into the **DOM**, which is a tree of objects (representing elements, attributes, and text).
- **JavaScript** can then manipulate this DOM to change the structure, style, and content dynamically.

## How Do We Access HTML Elements in JavaScript?

JavaScript interacts with the DOM, not directly with the raw HTML. When you use JavaScript to target an element, you're actually selecting the DOM representation (the object) of that HTML element. Here’s how:

### Example

**HTML:**

```html
<!-- HTML -->
<div id="myDiv">Hello World!</div>
```

```javascript
// JavaScript
const myDiv = document.getElementById("myDiv");
```

**When the page is loaded, the HTML <div> is turned into a DOM object. document.getElementById("myDiv") gives you access to the DOM object representing that <div>. This DOM object has properties and methods you can use to manipulate the element.**

```javascript
myDiv.innerHTML = "New content"; // Changes the content inside the <div>
myDiv.style.color = "blue"; // Changes the text color to blue
```

## Why Do We Get Objects?

HTML is not an object-oriented language, but once it’s parsed into the DOM, each element becomes an object. JavaScript, being a programming language, deals with objects—so when you target an element from the HTML, you’re accessing its corresponding DOM object, which JavaScript can manipulate.

## Visualizing the Relationship.

1. HTML file → Browser reads it.
2. DOM tree (an object model) is created based on the HTML.
3. JavaScript can access and manipulate the DOM tree (which is made of objects).

## Summary

HTML creates the structure of the webpage.
The browser converts HTML into the DOM (a tree of objects).
JavaScript interacts with the DOM objects to manipulate the webpage dynamically.

## So, when you target an HTML element in JavaScript, you're really working with its DOM object, which is why you see properties and methods that allow you to manipulate that element.
