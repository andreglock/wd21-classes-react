const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB39() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - language - 4

Yesterday:

  - "rabbits".toUpperCase(); // produces "RABBITS"
  - "PUPPIES".toLowerCase(); // produces "puppies"
  - "Hello".slice(1); // produces "ello"
  - "Hello".slice(1, 3); // produces "el"
  - "Hello".slice(-1); // produces "o"
  - "Hello".slice(1, -1); // produces "ell"
  - "Hello"[0] // produces "H"
  - greet[greet.length - 1]; // produces "o" if greet is "Hello"
  - "teamwork".includes("I"); // produces false
  - "   \n\n\n Hello!   \n".trim(); // produces "Hello!";
  - Calling \`parseInt(variableName)\` or \`parseFloat(variableName)\`...
    - doesn't change the original variable

## Numbers

- number is a type in javascript
- Integers and Floats
  - Theory
    - Integer = Whole numbers
    - Floats = Floating point number
      - Not a whole number
      - In different languages, there are similar concepts
        - often with small differences;
        - float, decimal, double
  - JS does not separate floats and integers
    - Every number is just a number
    - The JS number accuracy is not that good
  - Converting strings into numbers: \`parseInt()\` and \`parseFloat()\`
    - \`parseInt("71")\` // produced the number 71
    - \`parseInt("71blue")\` // produced the number 71
    - \`parseInt("hello123")\` // produced NaN
    - \`parseInt("12.34")\` // produced 12
    - \`parseFloat("12.35")\` // produced 12.35
    - \`parseFloat("12.35 euro")\` // produces the number 12.35

*task*

## Number pitfalls

- Dealing with \`NaN\`
  - "Not a Number"
  - The type of \`NaN\` is \`number\`
    - So, NaN is a kind of special number
  - Dealing with it;
    - \`isNaN("potato" / 6);\` // check if something is NaN
  - Example of a NaN causing problems in this old JS joke:
    - "b" + "a" + +"a" + "a"

- Very big numbers
  - \`e\` - exponent in numbers
    - \`e\` is the same as \`"times 10 to the power of"\`
  - Examples
    - 5e2 === 500 === "5 times 10 to the power of 2"
    - 5e3 === 5000 === "5 times 10 to the power of 3"
    - 4.2e6 === 4200000 === "4.2 times 10 to the power of 6"
    - 5e+51
    - 4e2  --- 400
    - 4e-2 --- 0.04
    - -4e-4 -- -0.0004
  

- JS is not great at accuracy...
  - When you have BIG number, javascript makes mistakes
  - When you have an accurate number, javascript makes mistakes
  - The bigger you go, you lose accuracy
  - The more accurate a number is, you lose accuracy
  - Rounding mistakes are common in JS
  - Rounding mistakes and losing accuracy is a byproduct of how numbers are stored
  - For these reasons, comparing large or decimal numbers is difficult
  - There is one tool that we can use to help;
    - Number function \`toFixed(...)\`
      - "How many numbers to show after the dot"
      - \`const num = 4.0000000000006;\`
      - \`console.log(num.toFixed(3))\` // this logs the string '4.000'
      - \`console.log(num.toFixed(1))\` // this logs the string '4.000'
  - Big numbers and accurate numbers can be stored, but as numbers grow larger, they lose more and more accuracy.

- Division pitfalls: Dealing with Infinity
  - Special number in JS
  - You get this for example when doing 1/0

      SORRY :( Hopefully the recording works!







# Math

\`Math\` is a standard built-in object in JS. With \`Math\` you have lots of built in functions for mathetmatical operations. We will cover a few of them:

- Rounding numbers up with \`Math.ceil()\`
  - \`const smallNumber = 7.1;\`
  - \`console.log(Math.ceil(smallNumber));\` // prints 8

- Rounding numbers down with \`Math.floor()\`
  - \`const num = 5.3456789;\`
  - \`console.log(Math.floor(num));\` // prints 5

- Rounding numbers normally with \`Math.round()\`
  - \`const num = 5.3456789;\`
  - \`console.log("Round: " + Math.round(num));\`

- Examples of rounding: 
  - \`const num = 5.7456789;\`
  - \`console.log("Ceil: " + Math.ceil(num));\`
  - \`console.log("Floor: " + Math.floor(num));\`
  - \`console.log("Round: " + Math.round(num));\`

- Getting MaximuZoom pm29and Minimum numbers with \`Math.max()\` and \`Math.min()\`
  - \`console.log("The max: " + Math.max(8, 2, -6));\`
  - \`console.log("The min: " + Math.min(8, 2, -6));\`

- Getting random numbers with \`Math.random()\`
  - Calling \`Math.random()\` returns a random number between 0 and 1
  - \`console.log(Math.floor(Math.random() * 10));\` // between 0 and 9
  - \`console.log(Math.ceil(Math.random() * 10));\` // between 1 and 10`