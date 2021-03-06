const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB38() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - Language - 3

## Review from yesterday

- Statements
  - The definition is vague
  - Generally; the bits of code separated by a semicolon are statements
  - Guideline: one statement per line, ending in a semicolon
    - Semicolons are generally optional, but very recommended
    - Except not always

      console.log("Hello my name is " + user.name +
                  " and I live in " + user.homeCity +
                  "!");

- Expressions
  - A bit of code that evaluates to a value
  - Few different kinds
    - string (string concatenation: "foo" + "bar" )
    - number (Mathematical expressions / Arithmetic expressions: counter++)
    - boolean (true, 10>9)
- Operators
  - In JS there are TONS of these operators, here is a few:
  - Assigment operators: \`=\`, \`+=\`, \`-=\`
  - Addition operator: \`+\`
  - Multiplication operator: \`*\`
  - Comparison operators: \`===\`, \`!==\`, \`>\`, \`>=\`
  - Increment operator: \`++\`
  - Decrement operator: \`--\`
  - Type operator: \`typeof\`
  - Ternary operator: \`?\`
    - \`let message = (counter > 999) ? "The conter is at least 1000" : "Almost there!";\`
- Strings!
  - Escaping with \`\\\`
    - \`"My name is Vinny \"bigman\" O'Toole"\`
    - \n -- means the "newline" character
  - Template literals (String interpolation)
    - \`\`The value of counter is \${counter}, which is too low!\`\`
  - String length
    - \`let message = "I like puppies and kitties!";\`
    - \`console.log(message.length);\`
  - Index notation / Bracket notation
    - \`message[0]\`

*tasks*

## Basic String Methods

We will talk later about methods (what is a method).

- First, to get the last character of a string
  - You can use the string lenth and Index notation;
    - \`username[username.length - 1]\`
- Converting case
  - These, and other similar methods are *Case Sensitive*!
    - --> JavaScript is *Case Sensitive*!
  - \`username.toUpperCase();\`
  - \`username.toLowerCase();\`
  - \`const usernameInCaps = username.toUpperCase();\`
- Extacting parts of a string
  - \`"Potatoes gonna potate".slice(5)\` //Zero based! "5" means the 6th character
  - \`"Potatoes gonna potate".slice(0, 6)\` // returns "Potato"
  - \`"Potatoes gonna potate".slice(-6)\` // returns "potate"
  - Ye Olde Substring, best to avoid...
    - \`"Potatoes gonna potate".substring(5)\` // Zero based!
    - \`"Potatoes gonna potate".substring(0, 6)\` // returns "Potato"
    - \`"Potatoes gonna potate".substring(-6)\` // returns "potate"....?
- COMBO! COMBINATION!
  - This technique is called chaining
  - \`"boil em, mash em, stick em in a stew".slice(9).toUpperCase();\`
- Checking if a string is inside another string
  - \`email.toLowerCase().includes("hotmail")\`
  - \`"trust".includes("us");\` // You can't spell trust without us
  - \`"TRUST".includes("us");\` // Except when you can :)
  - \`"teamwork".includes("I");\` // There is no I in teamwork

- Removing extra whitespace / Removing padding spaces
  - \`"     I     LIKE    TURTLES      ".trim();\`
  - \`"       \n     Potato".trim();\`


`