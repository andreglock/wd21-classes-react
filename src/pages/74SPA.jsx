const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB74() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# SPA - Component - 4

Last time we did
    - state in functional components
    - props

This time we will look at
    - dealing with forms

# Handling Forms

- The core of React revolves around state
- Vanilla HTML forms already contain state information
    - Is the checkbox checked
    - What is written in the input
- These two state management systems clash, and we have to deal with that

## Controlled components

- React (naturally) wants to be the single source of truth regarding state
- Enter Controlled components
    - This means inputs where React state controls the value
    - This is not trivial

## Referencing  elements

- *NOTE* This is something that you do all the time!
- Mutable ref objects
    - Any element inside your JSX can have a ref attribute
    - This is commonly used as a reference to a rendered HTML element

    - UseRef can be used for other stuff too, basically saving information that can change
    - ... But don't use useRef for state management!
`