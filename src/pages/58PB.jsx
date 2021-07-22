const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB58() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - Classes - 4

Last time we did
    properties, static properties
    the \`Date\` class

Today we will do
    Nodemon
    Inheritance

Next monday (24.05) and tuesday (25.05) are days off, so no classes then!

# Nodemon

Nodemon "Node monitor" is a tool commonly used when developing with Node. Nodemin is a utility that watches files and as soon as it notices a change in a file, it will restart your program.

To close nodemon you need to press \`Ctrl+c\`

Install nodemon \`npm install -g nodemon\`. This install nodemon Globally (the -g flag) meaning that you can use it from anywhere.

# Inheritance

Classes in JavaScript support inheritance using the \`extends\` keyword. For example in

    class Parent { }
    class Child extends Parent { } 

the Child class inherits from Parent: the constructor, fields, and methods. In cases like this, the Parent class is sometimes called the base class and sometimes even the super class.

# EXAMPLE 1 - Basic constructors

# EXAMPLE 2 - Parent and Child constructors

# EXAMPLE 3 - More complex use case
`