const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB52() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - Data Structures - 4

Yesterday we did

    - the for...of loop
    - Object.keys(<object>)
    - Object.values(<object>)
    - Object.entries(<object>)

Today we will do

    - Quiz
    - Terminology, tips and tricks
    - Clone vs. Reference

# Quiz

# Terminology, Tips And Tricks

Much of this is from notes I have taken during class and when reviewing the tests.

Terminology
    () Parentheses
    [] Brackets / Square brackets
    {} Braces / curly braces / curly brackets
    <> Less than & Greater than / angle brackets
    : Colon
    ; Semicolon
    & Ampersand 
    | Pipe
    * Asterisk, Star (also times, multipled by)
    ^ Caret, Circumflex, "Hat"

Notes
    Pay close attention when to \`return\` form a function and when to \`console.log\` in a function
        Use both with intention; know when and why have have them
        "write a function that prints"... prob console.log
        "write a function that returns"... prob return
    The \`return\` is not a function.
        Don't use parentheses with it unless you need to.
    Pay attention to your code style    
        Improves readability
        Helps in finding errors too!
    When you make a variable (including arrow functions!)
        Use const if you can - otherwise use let
        Avoid var :)
    Try to follow instructions, even with strange return values and strange variable values
        \`please return "Potaeto !"\`
        "please make a function called "toBinaryString""
        Read the instructions completely
    Don't avoid reviewing fundamentals, it's not a waste of time!
        Such as:
            JS types
            how to make a function
            how for loops work
    Think about how you name things.
        Sometimes this really helps with thinking about a problem
        Also helps with finding issues
        Naming is hard!!!


# Clones vs. References

When we are calling a function with arguments, we are either giving the functiion a clone or a reference.

Simple values, like numbers and strings are cloned/copied inside the function, so we will (for a VERY short time) in our computers memory the variable \`myNumber\` with a value of 7 AND at the same time the variable \`x\` also with the value 7. This is sometimes called "pass by value"

Objects (and arrays) are not copied or cloned to function; a reference to them is given instead. This is sometimes called "pass by reference".

# Hoooow can we clone an object then?!?

Cloning is hard.

Trying to clone an object with the \`=\` assignment operator doesn't necessarily work the way you expect, because objects are references.

The spread operator (technically called the spread syntax) \`...\` is a convenient way to make a *shallow* copy of an array or object. Shallow - meaning that there is no nested arrays or objects. Shallow = not deeply nested. 

The spread syntax "spreads" the array values or object properties where it is used.

# Deep cloning technique

You can clone simple nested objects and arrays using a technique that uses \`JSON.parse()\` and \`JSON.stringify()\`. We will discuss both of them later, this is just one technique that uses them. This does not work for some fancier data / situations, but for most things this is fine. There are many other techniques online if you need them.








`