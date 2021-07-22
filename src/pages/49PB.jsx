const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB49() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - Data Structure - 1

Yesterday we did
    - Review
    - Test

Today we will
    - Start to learn about objects

# Introduction

Data structures? More advanced ways of storing data. Data organization, management and storage format
that enables efficient access and modification. Arrays are data structures.

Data is stored in the working memory (RAM) of your computer; not in the persistent (hard drive) memory. 

All variables are stored in the RAM, some programs take up a lot of memory.

# Objects

I *highly* suggest that you code along with me as I show examples.

- like a basket for holding many related variables together inside
    - in objects, data is stored as key-value pairs
- objects can be thought of as a \`namespace\`; they allow you to store variables like "username" without getting naming conflicts. Not a super important term :)

- often objects represent one concept, like a user or blog post
- it's common to have an array of objects; like an array of users

# Object literals

- Remember Array literals?
    - INTRODUCING Object literals!
        - \`const <nameOfObject> = { <key1>:<value1>, <key2>:<value2> };\`
        - the values can be any kind of value in JS

- Keys / Variables inside objects, for example the \`age\` there, are called properties!
- The last property in the list may end with a comma
    - called a "TRAILING" or "HANGING" comma
    - trailing commas make it easier to add/remove/move properties

# Const or let?

- When you create a \`const\` object variable, you can edit the stored object (its properties), but you cannot reassign the variable. The same is true for arrays. For const arrays we can edit the contents of the array, but we can not reassign them.

        +-----------------+-------+------------------------+
        | VARIABLE        | VALUE | MEMORY                 |
        +-----------------+-------+------------------------+
        | const myName    | Joel  |                        |
        +-----------------+-------+------------------------+
        | const myAge     | 94    |                        |
        +-----------------+-------+------------------------+
        | const petsArray | 0x001 | ["Veera", "Rauli"]     |
        +-----------------+-------+------------------------+
        | const userObj   | 0x002 | { name: "John Smith" } |
        +-----------------+-------+------------------------+


- Objects can contain arrays, and arrays can contain objects!

- Accessing properties
    - Get Values
        - // bracket notation, like arrays
        - console.log(product["description"]);
        - // dot notation
        - console.log(product.description);
    - Set Values
        - Bracket notation
        - \`product["price"] = 4;\`
        - Dot notation
        - \`product.description_id = "Test"\`

# The Type

- The type - objects are objects
    - Arrays are specific kinds of objects
    - typeof {}
    - typeof [1,2,3]
    - To check if something is an array
        - \`Array.isArray()\`
        - console.log(Array.isArray({})); // false
        - console.log(Array.isArray([1,2,3])); // true

- Objects (and arrays), even empty ones, are truthy
\`console.log("Object truthy? ", Boolean({})); // true\`
\`console.log("Object truthy? ", Boolean([])); // true\`

# Delete and add properties

- You can completely remove properties using \`delete\`
    - Remove the strength propety:
    - \`delete searchResult.strength;\` 

- You can add new properties using the bracket or the dot notation
    - puppy.color = "black";
    - puppy["breed"] = "mixed";

# COMPUTED PROPERTIES

- We can use brackets in an object literal
    - (that's called computed properties)
    - With brackets, we can use a variable for the name of a property

            const identifier = "_id";
            const goat = {
                name: "Mary",
                [identifier]: 1234,
            };
            console.log(goat);

# Tips and tricks

- Note: Keywords / Reserved words in JS are allowed as property names

        const anotherGoat = {
        default: true,
        function: 1234,
        delete: "YEAH SOMETHING HERE"
        };
        console.log(anotherGoat);


- "Property value shorthand"
    - In the real world, it's very common to use variables to set object properties.
    - When the property and the variable have the same name, we can shorten this!

        const username = "Req";
        const age = 11;

        const user = {
            username, // property value shorthand
            age,  // property value shorthand
        };


`