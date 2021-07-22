const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB78() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# SPA - Component - 8

- Last time we started on lifecycle methods

- Today we will do the same focusing on functional coponents

# Each component has a lifecycle - part 2

- We will again make a very small application as a demonstration
- Please code along, you can use any old existing project you have :)

# Lifecycle mini review

- Component is first executed ("rendered")
- Component result is added to DOM
- If changes to state or props
    - Render again
    - Change DOM accordingly
- Component gets removed from DOM, if necessary

# Component Lifecycle in functional components

- With functional components we need to work with *hooks* like \`useEffect\` instead of the lifecycle methods
    - For **class based components** we had
        - \`constructor()\`
        - \`componentDidMount()\`
        - \`componentWillUnmount()\`
        - \`render()\`

> The useEffect hook is used to perform side effects in functional components
- What were side effects?
    - When a function changes (or accesses) a variable that is outside of the function
- By using this hook, you tell React that your component needs to do something after the render
- It is not exactly the same as componentDidMount
    - Rather it is its own thing that happens to be used for similar things

> Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.
`