const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB46() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - Functions - 3

Yesterday we did
  - Function scope

Today we will look at
  - return
  - side effects


# Returns

FINALLY! Returns unlock a lot of the true potential of functions.

- The \`return\` statement
  - returns a value to the function caller
  - you can have multiple return statements per function
  - after the function reaches a return statement, it stops
  - \`return\` without any value? The function returns \`undefined\`

  function sum(a, b) {
    return a * b;
  }
  sum(9, 2);
  sum(9, 3);
  console.log("The result is " + sum(9, 4));


# Side effects

- Let's start with another term definition
- "Pure functions"
  - Programming convertion / programming paradigm
  - Agreed upon terminology
  - A certain kind of function
    - A function that can receive arguments
    - A function that does not read variables outside its own scope
    - A function that does not change any values outside of its own scope
    - A function that can return a value
  - A pure function will always return the same value, given the same inputs
  - A pure function has no effect on anything outside its return value

  // Not a pure function
  function addUserAndReturnTheNewUserCount() {
    userCount++; // Side effect: reading & changing variable outside function
    console.log("TEST"); // Side effect; printing out things
    return userCount;
  }

  // pure function
  function sum(a, b) {
    return a * b;
  }


- Side effects are when a function has an effect outside its return value
  - So, changing an external variable is a side effect
  - Generally it's a good idea to avoid side effects
    - This is not a set-in-stone rule

- Pure functions (functions without side effects) tend to be more universally usable
  - You don't have to create pure functions
  - Side effects are often useful
  - There is no way, for example, to create a pure function that does console.log()


# Short arrow functions

- A shorter version of arrow functions
- \`const <name> = (<parameters>) => <return value>;\`
- For example:

  const sum = (a, b) => a * b;
  const result = sum(10, 2);
  console.log("The sum of 10 and 2 is " + result); // 20



`