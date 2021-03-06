const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB44() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - Functions - 1

Last time we did
  - switch statements
  - for loops

Today and this whole week we will do
  - functions

NEXT week
  - one day of revision
  - a test :)


# Introduction to functions

- Functions are like mini programs; a block of code designed to perform a task
- We make functions for a few different reasons
  - DRY - Don't Repeat Yourself
    - Avoiding repeated code
  - Making your programs easier to understand
    - Small blocks of code tend to be easier to understand than big ones
    - Deeply nested code is hard to read

- Semantics in programming, oh boy!
  - Functions are similar to or the same as routines/subroutines/procedures
  - Some functions are Methods
    - Function: function, not associated with an object or class
      - Often these are like \`parseInt()\`
    - Method: function, associated with an object or class
      - Often these are like \`console.log(...)\`, \`Math.random()\`


# Calling functions

- AKA running functions
- AKA executing functions
- AKA invoking functions

- We have called functons that other people have made already!
  - \`parseInt(...)\` \`Math.random()\` etc.
  - Calling functions with parentheses!
    - So like \`<functionName>()\`


# Function declarations

- A few different ways to declare a function
- The normal function declaration method:

\`\`\`
// declare a function called "greet"
// \`function <name_of_function>() {}\`
function greet() {
  // body of the function here
  console.log("Hello, I am a console.log statement inside a function!");
}

console.log("BEFORE");
greet();
console.log("AFTER!");
\`\`\`

- Function naming
  - Often verbs, like "greet", "showMessage", "login", "print" etc.
  - You could have something like "isAdmin"
  - No real rules, except for certain validity checks

- Usually you have multiple levels of functions
  - Meaning you have functions and inside them, you call other functions
  - These layers of functions calling other functions is called the "Call stack"


# Function parameters

- We can pass data to functions using parameters
- Function parameters are the names listed in a functions definition / delcaration
- Function arguments are the real values passed to the function
  - "Functions accept arguments"
- I often mix these terms...

\`\`\`
// parameters go inside the parentheses
// parameter names are internal to the function!
// parameter names - use similar names to normal variables
function showMessage(userName, message) { // two parameters defined; this functions accepts two arguments!
  if (message) {
    const capitalized = userName.toUpperCase();
    console.log("<" + capitalized + "> " + message);
  }
}

const personName = "Kai";
const msg = "Hello!!!!!";
showMessage(personName, msg); // calling the function with two arguments
showMessage("Jo", "HiHiHi");
showMessage("Lea", "Hello all!");
showMessage("Khushal", "Hello!");
showMessage("Joel");
\`\`\`


# Function Expressions

- In JavaScript, functions are "First-class citizens"
- Functions can be used very much like variables
  - Functions can be assigned to a variable :O
  - Functions can be given to other functions as arguments etc

\`\`\`
const printSillyName = function () { // anonymous function
  console.log("HiHiHi");
};

printSillyName();
\`\`\`

\`\`\`
const age = 12;

const youngGreeting = function() { console.log("Yo!"); };
const oldGreeting = function() { console.log("Greetings and salutations"); };
const welcome = (age < 18) ? youngGreeting : oldGreeting;

welcome();
\`\`\`


# Arrow functions

- Another, more modern kind of function expression
- Joel prefers these, we will get to the details later
- This is more like things you should know; we will practice them later
- Feel free to use them if you want
- ((Also Known As lambda functions))

\`\`\`
const calculateSum = (number1, number2) => { /// "=>" is often called a "fat arrow"
  const sum = number1 + number2;
  console.log("I calculated! And the sum is.... " + sum);
}

calculateSum(1,2);
\`\`\`
`