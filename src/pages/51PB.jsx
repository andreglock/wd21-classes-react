const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB51() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - Data Structures - 3

Last time we did
    - Methods
    - Object scope / object context: \`this\`
    - the for...in loop

Today we will do
    - Yet Another For Loop!
    - Object helper methods

Later this week we will do
    - Clone vs Reference
    - Destructuring
    - Nesting
    - Advanced array methods


# Quiz

    WELL DONE EVERYONE!

# New things

Remember the \`for...in\` loop? That was used to loop over **object**.

Well, introducing... \`for...of\` loop for **arrays**.

# Object helper methods

- Returns an array of keys / property names for our object
- \`Object.keys(<object>);\`

- Returns an array of values / property values for our object
- \`Object.values(<object>);\`

- Returns an array of arrays (key-value pairs of the properties) for our object
- \`Object.entries(<object>);\`


# Remember researching

Learning how to research and find information is a vital skill.
You can research more of these on your own if you want or if you need!
    Google "javascript stop object modification" 
`