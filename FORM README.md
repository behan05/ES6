# HTML Form Attributes

### 1. `action`

- **Description**: Specifies the URL where the form data will be sent when the form is submitted. If omitted, the form submits to the current page.
- **Example**:
  ```html
  <form action="/submit-form">
    <!-- form fields -->
  </form>
  ```

## 2. method

Description: Defines the HTTP method used to send form data.
GET: Sends form data as part of the URL (useful for small, non-sensitive data).
POST: Sends form data in the request body (best for large or sensitive data).

<form action="/submit-form" method="POST">
  <!-- form fields -->
</form>

## 3. enctype

Description: Specifies how form data should be encoded when submitted.
application/x-www-form-urlencoded: Default encoding for forms.
multipart/form-data: Required for file uploads.
text/plain: Sends data without encoding.

<form action="/upload" method="POST" enctype="multipart/form-data">
  <input type="file" name="myFile">
</form>

## 4. target

Description: Specifies where to display the response after form submission.
\_self: In the same tab (default).
\_blank: In a new tab or window.

<form action="/submit-form" target="_blank">
  <!-- form fields -->
</form>

## 5. autocomplete

Description: Enables or disables the browser's autofill feature.
on: Enables autofill (default).
off: Disables autofill.

<form autocomplete="off">
  <input type="text" name="username">
</form>

## 6. novalidate

Description: Disables the browser's automatic validation on form fields.

<form novalidate>
  <input type="email" required>
</form>

## 7. name

Description: Gives the form a name that can be used to reference it in JavaScript.

<form name="loginForm">
  <!-- form fields -->
</form>

## 8. accept-charset

Description: Specifies the character encodings accepted by the server.

<form action="/submit-form" accept-charset="UTF-8">
  <!-- form fields -->
</form>

## 9. rel

Description: Specifies the relationship between the current page and the form submission target.

<form action="https://example.com" rel="noopener">
  <!-- form fields -->
</form>

## 10. accept (input type="file`)

    Description: Defines the file types that the server accepts during file uploads.

<input type="file" name="document" accept=".pdf, .doc">
