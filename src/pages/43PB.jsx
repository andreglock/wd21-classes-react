const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB43() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - Program - 2

Yesterday we did
  - Intro to algorithms
  - Pseudocode
  - Conditionals
  - Block scope

Today we will do
  - Switch statements
  - Loops


# Multiple choice (switch statements)

First of all, let's review if - else if - else

\`\`\`
const tipPercentage = ....;

if (tipPercentage < 5) {
  console.log("Thanks for the tip I guess...");
} else if (tipPercentage < 15) {
  console.log("Thanks for the tip! :)");
} else {
  console.log("Wow, thanks for the generous tip!");
}
\`\`\`

Sometimes you have a lot of options!

\`\`\`
let month = "Tammikuu";
if (month === 1) {
  console.log("It is January");
} else if (month === 2) {
  console.log("It be Februrary");
} else if (month === 3) {
  console.log("Marrrrch");
} else {
  console.log("Weird month, I don't understand it");
}
\`\`\`

Switch statements! Some developer do not like these at all!

\`\`\`
switch (month) {
  case 1:
    console.log("January! Brr! Cold here in the northern hemisphere!");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("Marrrch");
    break;
  default: // standard case or backup; should be at the end; no "break;" here!
    console.log("What is that month, I do not understand!!");
}
\`\`\`


# Repetition - loops

A loop is a sequence of instructions that is repeated until a certain condition.
Unless the condition is never met, causing an inifite loop.

Also, you can break loops intentionally without meeting the preset condition.

Many different kinds of loops exist. We will focus on \`for\` loops, they are very
common and important.

\`\`\`
for (<initial state>; <end condition>; <step>) {
  console.log("Hi!");
}
\`\`\`
`