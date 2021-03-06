const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB36() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Basics of JavaScript

## Introduction

- JavaScript = Programming language
  - Programming languages are tools
  - HTML / CSS are not really programming languages
  - Definition can be a bit tricky
  - Set of instructions 
    - We write to give directions to the computer
  - Different levels of languages
    - Computer speaks binary
    - Low level 
      - languages are closer to binary / machine speak
      - difficult to understand for humans
      - easy for computers to understand and run
      - Assembly
    - High level
      - Easier to understand and write
      - Take time to translate to computer-undestood languages
      - JavaScript is a very high level language

  - Interpreted languages vs compiled languages
    - Compiled languages have their code \`compiled\`
      - Code is converted into a lower level langauge, not meant for human eyes
      - The compilation result is an executable file
      - Can be Super fast, can be very small and efficient, ready to run
      - Source code is (more) private
      - Executables are NOT cross-platform
        - Compiled for MAC or for Windows
      - C, C++

    - Interpreted languages
      - JavaScript (JS) is an interpreted language
        - So is PHP
      - Your code will be sent to some other place to be run
        - For example, your code will be sent to a browser
        - Interpreters tend to be cross-platform (browser)
        - Can be faster to test (no compilation step needed)
      - Can be slower to run
      - Source code is public (ish)

    - In-between option; compilation and interpretation
      - Python, Java, C# .net applications
      - Compiled into and Intermediate Language (IL)
      - The IL the executable is run in an interpreter

- JavaScript, ECMAScript -- JS, ES
  - We needed to make the web DYNAMIC
  - Java was super trendy back then...
    - And they needed a name....
  - JS = 10 days of work, written for Netscape
    - Originally named Mocha, then named LiveScript
    - Then for Marketing reasons named "JavaScript"
  - Miscrosoft made their own version
    - JScript
  - Very quickly, a standard was needed and made
    - European Computer Manufacturers Association
    - A.C.M.A.Script --> ECMAScript (ES)
    - ECMAScript is the standard
    - JavaScript is the language based on the ES standard
    - ES version history is weird and political
    - For a long time, JS (and web dev in general)
      - Very fragmented... until jQuery
        - jQuery = Write JS that can work for every browser
      - With a new version of ECMAScript and thus JavaScript
        - The fragmentation issue was fixed... ish
        - NOW, jQuery is no longer that needed
        - This version was ES 5
    - ES and JS are living, they are being constantly developed
      - Now the most popular version is ES 6
      - But the versions are a bit confusing...

  - Also, TypeScript exists
    - TypeScript code needs to be "compiled" to JavaScript
    - An extension of JS
    - JavaScript with Typing
    - file.js --- file.ts


"Anything that CAN be written in JavaScript, will eventually be written in JavaScript"

## Variables and running the code

- Node
  - Node.JS - NodeJS - Node
  - A way of running JS on your computer directly
  - No browser needed at all
  - We will focus workin in Node because:
    - It's straightforward
    - It has good fundamental concepts
    - Node is FAST
    - Node can do most things
    - Learning Node will benefit you in the future!
- Running JS files with node
  - \`$ node start.js\`

- **ERRORS**
  - We need to get used to errors!
  - How to read them, how to deal with them!
  - *Read the error message*
  - The stuff at the bottom is called a stack trace
    - Can be useful
    - Let's leave that stuff for the future!

- Variables
  - JS has three ways of making a variable:
    - \`const foo = "Hello world!";\`
      - constant, value cannot be changed
      - Most of your variables usually are consts
    - \`let bar = "Something else!";\`
      - Value can be changed!
      - Second most used
    - \`var baz = "Woohooo variables!";\`
      - Value can be changed
      - Avoid using this!

- Run a file and actually see something?
  - \`console.log(foo);\`
    - Super important tool
    - Don't worry too much what it does for now
    - Use to output the value of a variable
    - Use to output messages directly

- If you run \`node\` without any arguments
  - It opens on a Node \`REPL\`
  - REPL = Read, Evaluate, Print Loop
  - Node environment that runs whatever you type in it continuously
  - Useful for quick testing
  - To get out of it, press Ctrl+c

- Variables continued
  - \`const\`
    - Use this by default
    - If you have to change the value, use \`let\`
    - Constants protect you from yourself :)
    - Best practice to always use these

The \`const\`, \`let\`, \`var\` only need to be present
when you declare the variable

- Declaration and Assignment
  - We can *Declare* a variable and *Assign* it a value separately
    - \`let message;\`
    - \`message = "Hello";\`
  - Or we can do this together
    - \`let greeting = "Hi!";\`
  - Except...
    - For const we have to declare and assign always together :D 

- Experiments with declaring and assigning
  - Log variable without declaring
    - \`ReferenceError: message is not defined\`
  - Log variable *BEFORE* declaring
    - \`ReferenceError: Cannot access 'message' before initialization\`
    - Except for \`var\` variables
      - \`var\` variables get "Hoisted" before our console.log.
  - Log variable before assigning a value
    - This is fine!
    - The value of the variable is "undefined";
      - Special JS value, different from empty
    - Assign without declaring?
      - Automatic declaration
      - Avoid this, always use const or let

*Lunch break*

- A word on naming conventions!
  - JavaScript tends to use camelCase naming
  - Another option would be for example snake_case
  - 1. Keep it consistent
  - For variables, keep the first letter lowercase
  - Let's use camelCase
  - Naming things is really hard!
    - Depends a lot on the situation!
  - It's OK to spend a bit of time thinking about it
  - It's OK to change variable names
  - I usually try to keep then short

*TASK* PB-solutions

## Data types

Programming langauges all have built-in data structures, which differ from one languages to another.

JS is a "loosely typed" and "dynamic" language. Variables in JS are not directly association with any particular value type. Any variable and be assigned and re-assigned values of all types.

- Primitive Data Types
  - String
    - \`const name = "Potato McPotatohead";\`
  - Numbers
    - \`const age = 42;\`
    - \`const pi = 3.14;\`
  - Booleans
    - \`const active = true;\`
    - \`const hidden = false;\`
  - Null
    - Not actually technically a primitive
    - This means an empty value
    - \`const postBox = null;\`
  - Undefined
    - Something that does not exist YET or ANYMORE
    - This means that a value doesn't exist
  - Two other primitives:
    - BigInt, Symbol

- Objects
  - Can be seen as a collection of properties
  - Keys and Values
  - Object Literal:
    "We have literally written out the object contents"
    const user = {
      name: "Joel",
      age: 25,
      city: "Windhoek"
    };
  - JSON
    - JavaScript Object Notation
  - We can look up or refer to the properties (values inside) using a few diferent ways, this is the best one:
    - \`console.log(user.firstName);\`
    - dot notation

- Arrays
  - Represent a list of things
    - List of fruit
    - List of languages etc
  - Basically the same as Objects, but
    - Automatic keys based on numbers
    - Special "length" property
  - \`const fruits = ["Apple", "Banana", "Tomato"];\`

To help with types, we have an "operator" called \`typeof\``