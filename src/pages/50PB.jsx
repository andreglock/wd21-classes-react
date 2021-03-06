const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB50() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - Data Structure - 2

Yesterday we did
    - Object literals { age: 77 }
    - Computed Properties { [propertyName]: "Admin" }
    - Property value shorthand { username }
    - Array and Object Typing
        - typeof {} --> "object"
        - Array.isArray(someVariable)

Today we will do
    - Methods
    - Object scope / object context

> Reminder: Tools to help you review / learn
> Edabit - for more problems to solve
> freecodecamp.org - to practice syntax
> Codewars (Thanks Lars!)

# Before the lectures, a look at the previous task

Now try to do it again :)

# Methods

What be a method?
- "Methods are functions associated with an object (or class)"
- "Methods are properties with function values"

For example - both of these functions are methods
    - \`Math.random()\` - "random" is a funtion, "Math" is a built-in object in JS that someone else has made for us
    - \`Math.ceil(1.2345)\` - "ceil" is a function, also associated with the "Math" object.

Creating methods is really similar to creating normal functions

# Object literal context

Methods have one advantage over functions: they can refer to their associated object.

In a function definition, \`this\` refers to the "owner" of the function. In our \`animal\` example, the animal object owns the \`charge\` function. 

In other words, \`this.type\` means the \`type\` property of the \`animal\` object.

In a function, the \`this\` keyword refers to the context ("the owner") in which the function is running.

# Important note

Due to the way that JavaScript functions work, you cannot use arrow functions for methods where you use the \`this\` keyword. 

When you take a method out of the object, it gets "unbound" from the original parent object.

Binding = connecting = attaching a function to an object, without editing the original object.

# Ultra quick simple new technique time

The "for...in" loop
    - Useful for example when you don't know what properties an object has
    - Useful for comparing objects

Note: When comparing two objects, \`object1 === object2\` will always be false


# Object Literal Method Shorthand

A shorter way of writing methods in object literals :)

# Reminder: Tools to help you review / learn

> Edabit - for more problems to solve
> freecodecamp.org - to practice syntax
> Codewars (Thanks Lars!)`