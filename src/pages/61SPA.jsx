const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB61() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# SPA - DOM - 3

Yesterday we did
    - Nodes VS Elements
    - DOM traversal
    - DOM Editing

Today we will do
    - Introduction to events
        - Keyboard, mouse events
        - Browser events
        - Event delegation

# Events

- On websites, most things are reactive
- Something happens, that triggers an event
- There are two main kinds of events
    - User Events and Browser Events

- User Events
    - something happens after you press a button
    - something happens after you submit a form
    - something happens when you move your mouse
    - something happens when you resize your browser window

- Browser Events
    - something happens when page content is done loading
    - something happens when a javascript error occurs

- Your code can listen for events and react to those events

# Listening

- To listen to events, we need an event listener!
- Event listener
    - A function you make
    - A callback function (higher order function)

## Mouse, Keyboard and Browser Events

- See code for examples
`