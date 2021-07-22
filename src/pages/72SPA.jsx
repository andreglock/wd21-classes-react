const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB72() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# SPA - Component - 2

Yesterday we talked about Components
Today we will look at the basics of state and event handling in JSX

# Interaction

- First, let's create a simple base app
    - Code along with me!

- Setting event handlers inline in JSX
    - Done with JSX attributes, like onClick
    - onClick and similar attributes take in a JS function

        \`<button onClick={() => console.log(123)}>Button</button>\`
    
    - This is an inline event handler
    - You can also use a function defined elsewhere

        \`<button onClick={this.handleClick}>Button2</button>\` (example when using a class based component)
    
 # Manipulating state in events

- State???

> The heart of every React component is its “state”, an object that determines how that component renders & behaves. In other words, “state” is what allows you to create components that are dynamic and interactive.

- "The state of the component"
    - Or the status of the component
- We will work with state a lot in the future too


- Rules about state
    - 1. Do Not Modify State Directly

        \`\`\`js
            // wrong!
            this.state.comment = 'Hello';
            // Correct
            this.setState({ comment: 'Hello' });
        \`\`\`
    - 2. State Updates are Merged
        - When you call setState(), React merges the object you provide into the current state.
    - 3. State changes may be Asynchronous
`