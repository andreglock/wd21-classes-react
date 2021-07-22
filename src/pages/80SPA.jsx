const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB80() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# SPA - Router - 1

Today, please follow coding along with me - use whatever small project you have available.
If you don't have a good one, clone this https://github.com/FbW-E01/SPA-Component-Minireact

> Routing is the ability to move between different parts of an application
> when a user enters a URL or clicks an element (link, button, icon, image etc)
> within the application.

> React Router keeps your UI in sync with the URL

So you will have different views for different addresses, like

- https://joels-awesome-website.org/
- https://joels-awesome-website.org/login
- https://joels-awesome-website.org/services
- https://joels-awesome-website.org/services/web
- https://joels-awesome-website.org/services/server
- https://joels-awesome-website.org/contact

# 3rd party component libraries

- Routing is not built into the React core
- You will need to add a routing library
- A routing library gives us some Container components to use

- Display components (render something to dom) vs. Container components (manage state, not visible)
    - display component library: \`react-bootstrap\`
    - container component library: \`react-router-dom\`

- Core router library \`react-router\`
- The \`react-router-dom\` library is used for web applications
- \`npm install --save react-router-dom\`

# Setting up react-router-dom

> The \`react-router-dom\` package includes a number of routers that we can take advantage of depending on the platform we are targeting. These include \`BrowserRouter\` and \`HashRouter\` for web applications

> The **BrowserRouter** is used for applications which have a dynamic server that knows how to handle any type of URL whereas the **HashRouter** is used for static websites with a server that only responds to requests for files that it knows about.

- Our development server is dynamic. *Demonstration* They mostly are.

- We need to wrap our app with a \`<BrowserRouter>\` container component

- Then the actual routing can happen anywhere within the \`<App/>\` component, let's look at that next.

# Route Matching Components: Our first routes

- There are two vital components we need to use; \`Route\` and \`Switch\`:

- The \`<Switch>\` is kind of like a switch statement in JS
    - It selects which \`<Route>\` is used out of the options given

- The \`<Route>\` is the component that actually matches the browser URL to views (components)

- These will be used together

> The \`<Route/>\` component is one of the most important building blocks in the React Router package. It renders the appropriate user interface when the current location matches the route’s path. The path is a prop on the \`<Route/>\` component that describes the pathname that the route should match as shown in the example that follows

# Building Navigation

- Instead of regular links, we need to use  \`<NavLink>\` for navigation
    - There is also \`<Link>\`, but there is no reason to use it
    - \`<NavLink>\` is \`<Link>\` with styling support

- The documentation for react-router is pretty good, it can solve many of the issues you might be having (such as how to style an active link or how to change the class name used for active links)
- https://reactrouter.com/web/guides/quick-start

Example app: https://github.com/FbW-E01/SPA-React-Example
`