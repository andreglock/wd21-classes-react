const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB59() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# SPA - DOM - 1

Single Page Application

## DOM

- DOM or Document Object Model is an object-oriented representation of a web page
- Based on standards


- At the top you have a Document object
- Then you have the root element \`<html>\`
- And beneath that you have the tree of element nodes
- Object oriented
    - Elements (like \`<a>\`) are objects
    - Element attributes (like href) are objects
    - Even the text content of an element is represented with an object

- Document it is what is rendered
- This document is accessibile from javascript; it is a global variable called \`document\`
- This allows us to change the HTML dynamically by controlling the objects

# APIs

- Application Programming Interface
- Interface is the key word here
- An API is like the interface between some internal logic, and some external thing that wants access to that logic
- APIs exist between programs, between libraries, between computers
    - Between basically any two concepts that communicate digitally
- Some are APIs built into the browser
- Other APIs are given by for example companies like Facebook
- The API defines how external things can communicate with internal things
- Details and complexity of the internal thing remains hidden

- NodeJS has some different and some similar APIs than the browser

# Add scripts to an HTML document

- Loading a JavaScript file into the browser - like loading a CSS file

- This is generally the recommended and best method (fastest)

    \`<script src="js/index.js">\`

- Often script tags are located at the end of the body
    - This is to ensure that all elements have been loaded before running the JS code
    - We will come back to this

- Also you can work inline like with CSS

    \`\`\`js
    <script>
        console.log("Henlo");
    </script>
    \`\`\`

- For now, let's use just one JS file always

- Big differences between running code inside NodeJS and running it in the browser
- NodeJS doesn't have any graphical capabilities
- NodeJS doesn't know anything about HTML, DOM or the browser window
- Global objects like console and Math works pretty much in the same way in both of them
- JS in the browser is actually run inside (in the context of) a global window object

# The \`window\` object

> The Window interface represents a window containing a DOM document; the document property (document property of the global window object) points to the DOM document loaded in that window.
> https://developer.mozilla.org/en-US/docs/Web/API/Window

## Host obects vs Native objects (vs User objects)

- Can be a common interview question to explain these :)

- Some objects that you can use that are defined right into ECMAScript
    - Remember JS is a language that conforms to the ECMAScript specification

- Native objects are fully defined by the ECMAScript specification
    - So these are kind of supplied by JavaScript (ECMAScript) itself
    - Date
    - Math
    - parseInt

- Host objects
    - Specific implementation of these is defined by the environment
        - Meaning the browser, NodeJS or other
        - Supplied by the envronment your code runs in
    - window
    - document

- User objects
    - This term is not used very often
    - We can define our own stuff too!
    - Like *class Book {}*

## The window object built in logic

- Example things that work in the browser in the global (window) scope

    \`\`\`js
    // Ye olde JavaScript message box
    window.alert("Hello world!");

    // Because "window" is the global scope, we can also just do
    alert("Hello browser!");

    // Ye olde prompt
    const answer = prompt("Whats yer name, traveller?");
    console.log(answer);
    \`\`\`

- Not used much, because they are not UX-friendly
- OK to use until you find better options :)

- Most of what we do with JS is interacting with the DOM

# Querying / reading elements

- Two main ways to actually select/target/look at elements on a page
    - Both work very similarly to CSS selectors

        .li { color: red; }
        main .card p { color: blue; }

    - Select a single element with Selector
        - document.querySelector("#title");

    - Select multiple elements with Selector
        - document.querySelectorAll(".text");

- Old but still common targeting method
    - document.getElementById("title");

# My First DOM Changes!

- See code for examples!
`