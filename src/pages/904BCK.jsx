const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB904() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Backend - Server - 5

# Mock DB

- So what if we want to *persist* data? Like *actually* save data for a long time
- We need a Database :D
- Before we make a real DB, let's test the idea with a Mock (fake) database
- Mock == fake
- Reading and writing to json file
- https://www.npmjs.com/package/lowdb
- **Code along with me!**

# Middleware

> Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

- So it's a function that runs between: 
    - the time that the server gets the request
        - Middleware1 -- "myLog" --> next();
        - Middleware2 GET "/"
        - Middleware3
    - the time the server sends the response

> Middleware functions can perform the following tasks:
> - Execute any code.
> - Make changes to the request and the response objects.
> - End the request-response cycle.
> - Call the next middleware function in the stack.

- In express, everything you do for endpoints is a middleware
- One important thing to note is that these middlewares, these functions, run in order from top to down
- Let me show you an example:
    - https://github.com/FbW-E01/BE-Middleware

- For deeper information https://expressjs.com/en/guide/using-middleware.html`