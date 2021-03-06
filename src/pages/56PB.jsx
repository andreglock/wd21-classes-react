const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB56() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - Classes - 2

Last time we did
    constructor functions
    a bit on prototype

Today we will do
    actual classes

# Actual classes

I think these are much nicer to read then constructor functions. Classes define a single concept, such as Product, User, MenuItem, Page or a Button.

## EXAMPLE 1

The basic Class syntax in JavaScript

To use classes in JavaScript we need two new things. First, we need the \`class\` keyword and second we need a \`constructor\` - constructor is just a special function name. 

Then, we can again use the \`new\` keyword to create a new object based on this class. his, again, is called instantiation. With the \`new\` keyword we are creating a new instance of a Class.

*THEORY*
Classes in JavaScript are actually just "syntactic sugar" over the things we already know. 

> "Syntactic sugar is syntax within a programming language that is designed to make things easier to read or to write. It makes the language "sweeter" for human use: things can be expressed more clearly, more concisely, or in an alternative style that some may prefer."
> - Wikipedia

When you write a class, "under the hood" it gets converted into a constructor function and prototype things.

    What the \`class Pet {...}\` syntactic sugar really does is:
        1. Creates a function named Pet
        2. That function becomes the result of the class declaration.
        3. The function code is taken from the constructor method (empty if we don’t make a constructor).
        4. Stores methods in \`Pet.prototype.\`

## EXAMPLE 2

Definition: A class is a blueprint or prototype that defines the variables and methods common to all objects of a certain kind. 

It is common for classes to have multiple methods, not just the constructor.

## EXAMPLE 3

Classes are functions?!? 

Usually you can ignore this!

## EXAMPLE 4

Class Expressions

## EXAMPLE 5

Static methods - these are functions that we call directly on the class, not its instances.













































🐭 𝑠𝑞𝑢𝑒𝑒𝑘`