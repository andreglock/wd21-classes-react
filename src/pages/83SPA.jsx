const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB83() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# SPA - Store - Day 3

When talking about state management and also context, you run into the \`useReducer\` hook at times.

The \`useReducer\` is inspired by Redux; it's an complete alternative to \`useState\` and while it can be used with contexts, it can be used alone too.

> useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
> https://reactjs.org/docs/hooks-reference.html#usereducer

Code along with me for this example. We will use create-react-app;

    \$npx create-react-app spa-store-usereducer

Result: silly useReducer math game https://github.com/FbW-E01/SPA-Store-UseReducer
`