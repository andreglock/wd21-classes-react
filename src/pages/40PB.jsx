const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB40() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - language - 5

Last time
  - Integers -- 5, 91, -56
  - Floats ---- 3.14, 1.1235
  - parseInt("61")
  - parseFloat("7.61")
  - Infinity
  - NaN
  - How to show a set number of decimals
    - let num = 5.456789;
    - num.toFixed(2);
  - Mathematical function
    - Math.ceil, Math.floor, Math.round
    - Math.max(7,1,2,8);
    - Math.min(7,1,2,8);
    - Math.random() * 10;

# Logical thinking

- Logical operators
  - AND \`&&\` - check if both are true
  console.log(username === "Joel" && password === "12345");

  - OR \`||\` - check if either is true
  const username = "MrPotatohead";
  const isAdmin = (username === "Joel") || (username === "Milad");
  console.log("Administrator? ", isAdmin);;

  - NOT \`!\` - checks inequality
  // Method 1
  console.log(firstVar !== secondVar);
  console.log((firstVar !== secondVar));

  // Method 2
  console.log(!(firstVar === secondVar)); // the same as !true
  console.log(!true);

- Truth tables

  | x | y | x AND y | x OR y | x === y |
  | - | - | ------- | ------ | ------- |
  | T | T | T       | T      | T       |
  | T | F | F       | T      | F       |
  | F | T | F       | T      | F       |
  | F | F | F       | F      | T       |

*task*

# Booleans

- This is important stuff we need to know
- \`true\` and \`false\` are actual booleans
- in JS we have "truthy" and "falsy" values
  - One of the big reasons why JS in though of as a weird / janky langauge
  - You will get used to it!
  - Background info
    - Converting between types - (Typecasting, Type converting, Type coersion)
      - Strings to numbers
        - parseInt()
        - parseFloat()
      - Numbers to strings
        - .toFixed()
        - .toString()
    - We can convert _ANYTHING_ to booleans with \`Boolean(...)\`

## Boolean Conversion experiments

\`\`\`javascript
  console.log("---Boolean conversions!---");

  console.log("> Booleans");
  console.log(Boolean(true)); // true
  console.log(Boolean(false)); // false

  console.log("> Numbers");
  console.log(Boolean(50)); // true
  console.log(Boolean(1)); // true
  console.log(Boolean(-1)); // true
  console.log(Boolean(0)); // false -- concidered to be false in JS
  console.log(Boolean(NaN)); // false -- concidered to be false in JS

  console.log("> Strings");
  console.log(Boolean("Banana")); // true
  console.log(Boolean("yes")); // true
  console.log(Boolean("nein")); // true
  console.log(Boolean(" ")); // true
  console.log(Boolean("false")); // true
  console.log(Boolean("")); // false -- concidered to be false in JS

  console.log("> Null and undefined");
  let testing;
  console.log(Boolean(null)); // false -- concidered to be false in JS
  console.log(Boolean(undefined)); // false -- concidered to be false in JS
  console.log(Boolean(testing)); // false -- concidered to be false in JS
  console.log(Boolean(testingVariable)); // ERROR!!!!
\`\`\`

- Based on our experiments, most values are considered to be \`true\` even if they are _actually_ not true
  - Values that are considered to be true, but actually are not, are "truthy" values

- Six values that are considered to be false; "falsy" values
  - undefined, null, "", 0, NaN, false

- \`let isAdmin = "potato";\` // truthy
- \`let isAdmin = "";\` // falsy


# Equality and types in JS

- there are two ways of checking for equality
  - for dumb historical reasons

- Double equals \`==\`
  - AKA Loose comparison
  - AKA Abstract equality comparison

- Triple equals \`===\`
  - AKA Strict comparison
  - AKA Type safe comparsion
  - AKA Strict equality comparison

*Bug demonstration*
  - Using assignment \`=\` instead of equality \`===\`
    const error = "code500";
    console.log(error = "code404");

*Technique demonstration*
  - Short circuit assignment
  - Commonly seen in code
  - Uses the OR comparison \`||\`
  - Assign variable fallback value

  const error = "Error code: 41 - Guru Meditation";
  const message = error || "All ok!";

  console.log(message);






# EXTRA

- You can compare strings using \`>\` and \`<\`
  - Used often when sorting alphabetically
  - Works generally in the american alphabet
  - Be careful with this, it's not _ALWAYS_ exact
  - a is smallest, Z biggest

- More String operations
  - String replace
    - \`"Potatoes gonna Potate".replace("Pot", "Tom"); // replaces first instance of "Pot" with "Tom"\`
    - "Welcome <NewUsername>, glad to have you here!".replace("<NewUsername>", "Joel");
    - Can get real complicated real fast
    - If you use it, for now Keep It Simple!
    - let username = "Peque??o";
  
  - Making an Array out of a String!
    - const froot = "Kiwi, Apples, Oranges, Tomatoes";
    - froot.split(", ");
    - --> [ 'Kiwi', 'Apples', 'Oranges', 'Tomatoes' ]\`

  - Making a String out of an Array!
    - fruitArray.join(" AND ");`