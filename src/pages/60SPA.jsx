const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB60() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# SPA - DOM - 2

Yesterday we did
    - Introduction to the DOM
    - Introduction to the concept of APIs
    - Introduction to Browser-specific stuff like the window

    \`\`\`js
    alert("Hey!");
    const age = prompt("How old are you?");
    const cards = document.querySelectorAll(".card")
    const title1 = document.querySelector("#maintitle");
    const title2 = document.getElementById("maintitle");
    title1.style.color = "red";
    \`\`\`

Today we will do
    - DOM Traversal
    - More DOM manipulation

# Nodes and Elements

- You will see a lot of talk about Nodes and Elements
- Node is a base class
- Every single thing in the DOM tree is something based on Node
- Elements are based on the Node class
- When you have text in your HTML file
    - Those bits of text are represented by a Text Node
    - Text Nodes are Nodes, but they are not Elements

- Node has some base functionality
- Elements extend on that

# Traversing: Jumping from one element to its relative

- Finding more traversal techniques: MDN + Google
- See code file from today

# Manipulating: Changing the DOM tree

- See code file from today`