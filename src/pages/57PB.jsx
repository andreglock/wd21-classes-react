const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB57() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - Classes - 3

Yesterday we did
    actual classes

Today we will do
    - properties, static properties
    - The \`Date\` class

# Quiz

# Class properties and static properties

Classes can have properties, kind of like objects can. In JS, these things are called "Class fields". Quite often these are just referred to as properties. This is a very new feature in JavaScript!

## EXAMPLE 1

Class fields are set on individual objects

## EXAMPLE 2

Class fields can be static too!
Static properties exist on the class, not the instances.

## EXAMPLE 3

Class fields are public by default, but they can be private too. NOT super important.






# The Date class

This is the basic way of working with time stuff in JS. For instance, we can use it to store creation/modification times, to measure time, or just to print out the current date.

> A JavaScript date is internally specified as the number of milliseconds that have elapsed since midnight on January 1, 1970, UTC. This date and time are not the same as the UNIX epoch (the number of seconds that have elapsed since midnight on January 1, 1970, UTC), which is the predominant base value for computer-recorded date and time values. - Wikipedia

Dates and times are very complicated to handle and the Dates in JavaScript are famous for being annoying. Very commonly big projects use external time libraries.

## EXAMPLES`