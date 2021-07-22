const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB53() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - Data Structure - 5

Yesterday we did
    Clone vs. Reference
    Spread syntax

Today we will do
    Destructuring
    Nesting

# Destructuring

New and cool!

The two most common data structures in JS are Object and Array. When we pass data to a function, it may not accept an object or an array as a whole, but rather individual pieces.

\`Destructuring assignment\` is a special syntax that allows us to "unpack" arrays / objects into separate variables. Sometimes this is more convenient. Destructuring also works great with complex functions that have a lot of parameters, default values and so on.

It's called "destructuing assignment" because it "destructures" by copying items into variables. The original array / object is not modified!

## Examples!

1. Destructuring arrays part 1
2. Destructuring arrays part 2
3. Destructuring arrays part 3
4. Destructuring strings
5. Destructuring objects part 1
6. Destructuring objects part 2
7. Destructuring objects 3
8. Destructuring objects 4
9. Destructuring objects edge case


# Nesting arrays and objects

Only code samples for this one :)































🦩`