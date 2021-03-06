const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB42() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - Program - 1

Yesterday we did Arrays
  // Array literal
  const message = ["I", "am", "groot"];
  message.push()
  message.pop()
  message.unshift()
  message.shift()
  message.indexOf()
  message.contains()
  message.splice()
  message.slice()
  message.reverse()
  message.sort()
  message.concat()
  message.toString()


# The flow of a program

From top to bottom
From left to right


# Algorithms

Algorithm = sequence of instructions to solve a class of problems

Programming = solving problems
Developers analyze problems; what is the input? What is the output?

INPUT --> ALGORITHM --> OUTPUT

## Mind experiment - pen and paper algorithms

Problem: I want to make lentil soup!
What ar the steps?

- Grocery shopping!
- INPUT: Ingredients 
  - Water, Lentils, Onion, Spice, Tomato pulp, Potatoes
- Dice the onions and potatoes
- Lightly fry the onions in the pot
- Add everything else into the pot
- Simmer for 45 minutes
- OUTPUT: Lentil soup

Recipes are close to algorithms!
Unlike for humans, we need to tell the computer about each single step in order
We have to remember, the computer doesn't know anything. The computer cannot think or find out anything about anything.

If you don't know a step exactly, you can search for more information, the computer can not, meaning that our algorithms need to be very specific.

## Creating an algorithm based on expected input and output

INPUTS                     Algorithm        OUTPUT
null                          ??            ["Veera", "Rauli"]
["Alpi"]                      ??            ["Veera", "Rauli"]
["Rauli"]                     ??            ["Veera"]
["Veera"]                     ??            ["Rauli"]
["Veera", "Rauli"]            ??            null
["Veera", "Rauli", "X"]       ??            null

INPUT => BlackBox/Algorith => OUTPUT
1. Algorithm seems to check of input contains "Veera" and "Rauli"
2. Input seems to be an array (or null)
3. Output seems to be an array (or null)
4. Algorithm name: "Check if Veera or Rauli is missing"

\`\`\`js
    // Pseudo code
    // If our input is null, return Veera and Rauli
    // Check if the input contains Veera
    // Check if the input contains Rauli
    // Add Veera to the output, if it is missing
    // Add Rauli to the output, if it is missing
    // Output which ones, if any, are missing
\`\`\`



# Conditionals / Conditional statements

"Desicions in our algorithms"

\`\`\`
if (condition) {
  // code to run if condition is truthy
}
\`\`\`

If the condition is not truthy, we can run a different set of code using \`else\`:

\`\`\`
if (condition) {
  // code to run if condition is truthy
} else {
  // code to run if condition is falsy
}
\`\`\`

This is similar to ternaries;
\`\`\`
const fuzzyAge = (age > 18) ? "Adult" : "Minor";
\`\`\`

// Unary == One
counter++;

// Binary == Two
counter + deltaCounter;

// Ternary == three 
(check) ? deltaCounter : zeroCounter;

When you have if and else, it is like when we had our ternaries. Ternaries are generally used when we want to sent a variable value based on a condition.

Curly braces for if and else are "kind of" optional. I recommend, at this point, to always use curly braces.

AND Pay attention to indentation




if (something) {
  
} else if (somethingelse) {

} else {

}





Ternaries can be used like this
const age = 14;
(age > 16) ? console.log("Beer, if you want") : console.log("Water?");



## Block

"Block scope"

Place where our variables live, where we can access them, where they are available.

Block scope = in between {} we have a new block scope for our variables.

Block scopes inherit variables from their surroundings.

Variables that are not defined in a block scope live in the Global scope, generally it's best practice to avoid saving variables in the global scope.

\`\`\`


let counter = 50; // in the global scope

{
  console.log("Counter is still under 100 ", counter);
  counter = 70;
  const test = Math.random(); // inside the block scope
  console.log("Test is " + test);
  {
    counter++;
    console.log("Counter is now at ", counter, " and test was ", test);
  }
}
\`\`\`

If you use \`var\` to declare variables inside a block scope, they are exposed outside of their parent block - so avoid \`var\`.

\`\`\`
{
  var example = "This is interesting";
}
// this works, but should not
console.log(example);
\`\`\`

`