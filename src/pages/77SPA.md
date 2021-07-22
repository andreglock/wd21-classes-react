# SPA - Component - 7

Last time we did Styling in React

Today we will look at Component Lifecycles - part 1

# Introduction: Each component has a lifecycle

- I encourage you to code along with me when I start
- Use any project you have laying around

- A React component has many stages to its existence
- When it is being constructed
- When it is *mounted* (added) to the DOM
- When data changes and it needs to re-render itself
- When it is *unmounted* (removed) from the DOM
    - Components are removed quite often
    - For example a `<Menu>` component might only be added to a page after the user clicks some menu button
    - Then when the user clicks the button again or selects something in the menu, the menu will be removed

- This mounting/unmounting is an example of Lifecycle events in a React component

## Mounting and Unmounting

- Let's examine lifecycle events first through class based components
- I will just use an exsting project for simplicity
- Let's see an example of Mounting and Unmounting
