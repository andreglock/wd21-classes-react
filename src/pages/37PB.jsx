const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB37() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - Language - 2

Yesterday we did:
  - node
  - const, let, var
  - declare and assign
  - console.log(...)
  - Types
    - String, Number, Boolean, Null, Undefined
    - Object, Array
  - JSON

## Statements

- A program is a collection of instructions to perform
- In a language, these are called statements
- A JS program is just a list of statements.
- In JS multiple statements may occur on a single line
  - (If separated by a semicolon \`;\`)
- In JS, one statement may span multiple lines
- Many kinds of statements
- Statements end in semicolons
- The Semicolon
  - It is not required, but highly recommended
  - No semicolons = Implicit semicolons
    - They are automatically added
  - In most cases, a "newline" implies a semicolon
    - But not always, like in the multi-line log
  - No semicolons *usually* works, but not always

## Comments
  - Single-line comments
    - They look like this: \`// Comment!\`
    - They are used for documentation
    - Or temporarily disabling lines of code
    - You can have statements and a single line comment on the same line
  - Multi-line comments - or "Block comments"
    - They look like this: \`/* Something */\`
    - Sometimes you see comments like this
      - /** blag */
      - "Doc" or "Documentation" comments
    - They are used for documentation
    - Or temporarily disabling lines of code
    - You can have fancy versions

*TASK* Language statements

## Expressions

Any unit of code that can be evaluated to a value, is an expression.

Expressions can appear anywhere in a program where JS expects a value.

Three types of expressions:
  - To check the type we can use \`typeof\`
  - There are TONS of these in JavaScript
  - String expressions
    - *Evaluate to a String*
    - "Potato"
    - "Toma" + "to" // String concatenation
    - 'Aubergine'
    - "Straw" + 'berry'
    - \`typeof counter\`
  - Arithmetic expressions (Mathematical expressions)
    - *Evaluate to a numeric value*
    - There are a LOT of these, you DO NOT need to know all of them
    - 10
    - 10.6
    - 10+5, 10-5
    - 10*5, 10/5
    - 10*2/5
    - 10*(2/5)
    - 2%3 -- "Remainder" or "Modulo"
    - \`let counter = 0; counter = counter + 1;\`
    - Increment and Decerement
      - \`counter++\` - post increment
      - \`++counter\` - pre increment
        // Counter++
        //  A) console.log(counter++);
        console.log(counter);
        counter = counter + 1;

        // ++Counter
        // B) console.log(++counter);
        counter = counter + 1;
        console.log(counter);
      - Decement is the same as Increment, except with minus
      - Usually used in counters
  - Logical / Boolean expressions
    - *Evaluate to a boolean value*
    - *Evaluate to either true or false*
    - \`true\`
    - \`10>9\` - "greater than"; always evaluates to "true"
    - \`10>=9\` - "greater than or equal to"
    - \`10<=9\` - "smaller than or equal to"
    - \`newPassword === oldPassword\`
    - \`username === "admin"\` - checks equality
    - \`username !== "admin"\` - checks inequality

## Changing variables

- Variable reassignment
  - \`userCount = 71;\`
  - \`userName = "John";\`
  - \`monkeys++;\`
  - Here the "=" and the "++" are operators
  - New operators for variable reassignment
    - \`+=\` - For strings, we add the new value to the end of the old
    - \`+=\` - For numbers, we add the new value to the old
    - \`-=\` - For numbers, we substract the new value from the old
- Changing a variable = changing the state of the application
- State of the application = the value of all variables at a given time

- A difficult word: Ternary operator \`?\`
  - Easiest to show with an example
  \`\`\`
    let errorCount = 8;
    // This is a ternary:
    const message = (errorCount > 5) ? "Too many errors!" : "OK!";
    console.log(message);
  \`\`\`

## Strings

- Special characters
  - Escaping; in JS you escape characters in Strings using backslash \`\\\`, examples:
  - 'Johnny "Teacher" O\'malley';
  - "Joel \"Teacher\" Peltonen";
  - \n has a special meaning; newline character
    - console.log('Hello\nWorld!';)

- Template literals --> using expressions within Strings
  - console.log(\`Awesomeness level reached: \${(userCount + newUsers) > 75}\`);

- Getting the length of a String
  - Just like with Arrays
  - \`username.length\`

- Getting a character from a string
  - Bracket notation / Index notation
  \`\`\`
    const myName = "Joel";
    console.log(myName[0]);
    console.log(myName[1]);
    console.log(myName[2]);
    console.log(myName[3]);
    console.log(myName[4]);
    console.log(myName[5]);
  \`\`\`
`