const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB63() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# SPA - Modules - 1

Last time we talked about
    - Form events; submit and reset
    - The event object
        - e.preventDefault()
    - Event propagation
        - Event bubbling
        - e.stopPropagation()
        - Event capture and bubble phases
    - Event delegation
        - e.target vs e.currentTarget
        - Event handler in Parent/Ancestor instead of all children

# Introduction to modules

## Code organization

- Code organization is vital to maintaining large projects
- There are usually some kind of rules or logic how projects are divided
- For example images in one folder, CSS in one folder and JS in one folder
- Often JS files can use other JS files directly
    - So that you don't have to import many JS files in your HTML

- In a big project you need this to keep your logic contained
- Often JS code is divided into modules

## Module Basics

- One of the issues of having lots of JS code js the potential for naming collisions
    - what if two JS files both use a global helper variable "users"?
    - or the same helper function "getFirst()"?
- The solution is scope isolation
    - Somehow to isolate the scope and only "reveal" what we want to
    - Encapsulating all of the details and helpers and such inside
- Before we go into *actual* modules, there is one other method to talk about

## Brief overview of IIFE

- IIFE = Immediately invoked function expression
- Oldschool
- There are a bunch of ways of doing this; here is one quick way

- https://developer.mozilla.org/en-US/docs/Glossary/IIFE
- https://en.wikipedia.org/wiki/Immediately_invoked_function_expression


#  The Module pattern as it is sometomes called

> The Module Pattern is one of the important patterns in JavaScript. It is a commonly used Design Pattern which is used to wrap a set of variables and functions together in a single scope.

> We expose certain properties and function as public and can also restrict the scope of properties and functions within the Module itself, making them private.

- Advantages of scope isolation and encapsulation
    - > Module Patterns enable better maintainability since all the related code can be encapsulated inside a single logical block. These logically independent blocks are relatively easier to update.

    - > A single unit of code can be reused across the entire application. Functionality enclosed as a module can be reused and we do not need to define the same functions at multiple points.

- Basically
    - Having isolated bits of code makes the bits of code easier to maintain
    - Having isolated bits of code makes the bits of code easier to copy
    - Having isolated bits of code makes the project easier to divide
    - Ecapsulation hides the complexity of parts of code

- Modules are awesome for this
- JS divided into modules often use .mjs for the file extension instead of .js
- You use modules slightly differently than other js in the browser
- Please Code along with me for this

### Connecting files; imports and exports

- We can use modules from other modules by importing and exporting

`