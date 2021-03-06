const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB55() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - Classes - 1

Last time we did way too much:
    Intro to the Big O notation
    Practice Reading Algorithms
    Custom array sorting wit \`Array.prototype.sort()\`
    Closures

This week we will do
    CLASSES

Today we will do
    - what is OOP in general 
    - before we step into classes, let's look behind the scenes a bit...
        - constructor functions
        - prototype

# Quick quiz

# Object Oriented Programming

Personally, I don't love the way classes are implemented in JS and it's not common to see "pure" *Object Oriented Programming* (OOP) in JavaScript either. We won't go deep into the definitions or CS / theory.

So far, we have been doing *procedural programming* and now we will dip our toes into the water of OOP programming. Usually what is actually done is some kind of combination of these (and/or _functional programming_).

In some languages (Java, C#), almost everything is done with classes and objects; single functions don't really exist.

In OOP, you divide your code into separate, independent parts that take care of one concept in your code. These parts are your Classes. They can be equivalent to a real world thing, such as a "Product" or a "User" - or they can be a functional component of your program, such as "Logger" or "Database".

These different concepts that you have (User, Product) *encapsulate* the data related to a user or a product and also the functionality that they need. That is the theory. In the real world, especially in JS, this is not always the whole story. During learning the basics, we will focus on objects like User, Product or Book, because they are easy to understand.

We have already partly done this by using object literals.

When your data and functionality is encapsulated within one concept, you can simply access the surface (interface) of that functionality, and not really care about how it works under the surface. In other words, some of the complexity is hidden - this is called *abstraction*.

Also, because the details are abstracted away, if the way we calculate salaries changes, most likely we just have to change one place (the inside of this function), not every place it is called.

To create these users or employees, we need a nice way to create lots of (almost) identical objects. This is done with Classes. Before we look into *actual* classes, let's look behind the scenes a bit.

# Constructor functions

The object literal \`{ name: "Jo" }\` allows to create objects. Often we need to create many similar objects, like multiple users or menu items and so on. That can be done using *constructor functions* and the *new* operator.

Constructor functions technically are regular functions. There are two conventions to follow: 

1. They are named with the first letter capitalized.
2. They should be executed only with \`new\` operator.

# EXAMPLE 1

Here in example 1, it's the \`new\` operator that is doing the magic. First, we define a User and then we create a new user based on that definition. This is called *instantiation* and the objects created are called *instances* as in "jack is an instance of User".

When a function is executed with \`new\`, behind the scenes it does the following steps:
    1. A new empty object is created and assigned to \`this\`.
    2. The function body executes. 
        Usually it modifies \`this\`, such as adding new properties to it.
    3. The value of \`this\` is returned.

    function User(name) {
        // this = {};  (implicitly)

        this.name = name;
        this.isAdmin = false;

        // return this;  (implicitly)
    }

# EXAMPLE 2

So \`const rauli = new Pet("Rauli", "cat", 9)\` gives a similar, but not the same result as:

    const rauli = {
        name: "Rauli",
        type: "cat",
        age: 9,
    };

Now if we want to create pets, we can just call new Pet(...) 
    - Shorter than using object literals
    - Easy to read
    - Makes consistent data - every pet WILL have a type
    - Gives pretty nice console.logs

That???s the purpose of constructors: to implement reusable object creation


# EXAMPLE 3

This prevents misuse as technically, any regular function can be used as a constructor, as in any function can be run with \`new\` to run it as defined above. Even if they are not designed for that. Arrow functions specifically block that chance.

The "first letter capitalized" is a common agreement, to make it clear that a function is intended to be run with new.

# EXAMPLE 4

Return from constructors? Constructors should not have a return statement. Their task is to write all necessary stuff into *this*, and *this* automatically becomes the thing that is returned.

If there is a return statement, then the rules are simple:
    1. If \`return\` is used without anything, the *this* is returned.
    2. If an object is returned, it's not really a constructor, just a function that returns an object.
    3. If return is called with a primitive, it???s ignored.

    Someone tell me the primitives of javascript pls. Use google if you don't know.

        - number, string, booleans

To put it simply: avoid using \`return\` in constructor functions.

# EXAMPLE 5 - prototypes

If you want to learn more, self study.

We can edit constructor functions after creating them by accessing their "prototype" object.

You don't generally do this, so this is just an example.

`