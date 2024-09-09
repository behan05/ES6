### DOM Element Selection Methods

#### 1. `document.getElementById(id)`

- Selects an element by its unique `id` attribute.
- Returns a **single element**.

#### 2. `document.getElementsByClassName(className)`

- Selects all elements with a specific `class`.
- Returns an **HTMLCollection** (similar to an array but not exactly the same) of elements.

#### 3. `document.getElementsByName(name)`

- Selects all elements with a specific `name` attribute (usually used for form elements).
- Returns a **NodeList** of elements.

#### 4. `document.getElementsByTagName(tagName)`

- Selects all elements of a specific tag (like `div`, `p`, `span`, etc.).
- Returns an **HTMLCollection** of elements.

#### 5. `document.querySelector(cssSelector)`

- Selects the **first** element that matches a specified CSS selector (class, id, or tag).
- Returns a **single element**.

#### 6. `document.querySelectorAll(cssSelector)`

- Selects **all** elements that match a specified CSS selector.
- Returns a **NodeList** (which is similar to an array) of elements.

### Differences:

- **`getElementById`** returns a single element, whereas **`getElementsByClassName`**, **`getElementsByTagName`**, and **`querySelectorAll`** return collections of elements.
- **`querySelector`** and **`querySelectorAll`** are more flexible because they use CSS selectors, allowing you to target elements in more advanced ways.

<!-- ***********  cheat Sheet **************** -->

# JavaScript Cheat Sheet

## 1. DOM Properties

### Element Properties:

- **`element.id`**
  - **Description**: Gets or sets the `id` attribute of the element.
- **`element.className`**
  - **Description**: Gets or sets the class attribute of the element.
- **`element.innerHTML`**
  - **Description**: Gets or sets the HTML content inside the element.
- **`element.textContent`**
  - **Description**: Gets or sets the text content inside the element (excluding HTML tags).
- **`element.style`**
  - **Description**: Gets or sets the inline styles of the element.
- **`element.dataset`**
  - **Description**: Provides access to custom data attributes (e.g., `data-example`).

### Document Properties:

- **`document.title`**
  - **Description**: Gets or sets the title of the document.
- **`document.URL`**
  - **Description**: Gets the URL of the document.

## 2. DOM Methods

### Element Methods:

- **`element.getAttribute(name)`**
  - **Description**: Gets the value of the specified attribute.
- **`element.setAttribute(name, value)`**
  - **Description**: Sets the value of the specified attribute.
- **`element.removeAttribute(name)`**
  - **Description**: Removes the specified attribute.
- **`element.addEventListener(event, function)`**
  - **Description**: Attaches an event handler to the element.
- **`element.removeEventListener(event, function)`**
  - **Description**: Removes an event handler from the element.
- **`element.focus()`**
  - **Description**: Focuses on the element (e.g., input field).
- **`element.blur()`**
  - **Description**: Removes focus from the element.

### Document Methods:

- **`document.createElement(tagName)`**
  - **Description**: Creates a new element with the specified tag name.
- **`document.createTextNode(text)`**
  - **Description**: Creates a new text node with the specified text.
- **`document.querySelector(selector)`**
  - **Description**: Selects the first element that matches the specified CSS selector.
- **`document.querySelectorAll(selector)`**
  - **Description**: Selects all elements that match the specified CSS selector.
- **`document.getElementById(id)`**
  - **Description**: Selects an element by its unique `id`.
- **`document.getElementsByClassName(className)`**
  - **Description**: Selects all elements with the specified class name.
- **`document.getElementsByTagName(tagName)`**
  - **Description**: Selects all elements with the specified tag name.

## 3. JavaScript Object Properties and Methods

### Object Properties:

- **`object.property`**
  - **Description**: Accesses the value of the specified property.

### Object Methods:

- **`object.method()`**
  - **Description**: Calls the specified method on the object.
- **Example Methods**:
  - **`Array.prototype.push(item)`**
    - **Description**: Adds a new item to the end of the array.
  - **`Array.prototype.pop()`**
    - **Description**: Removes the last item from the array.
  - **`String.prototype.toUpperCase()`**
    - **Description**: Converts the string to uppercase.
  - **`String.prototype.trim()`**
    - **Description**: Removes whitespace from both ends of the string.
