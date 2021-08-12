# SPA - Store - 1

# Review of a React app and state/props

# State Management Concepts

## Local state & global state

- So we have state in our components - **local state**
- Then we have state that can be passed around to many different components, but it still is local to some specific component
- This causes us to write a lot of code just for passing around references to some bit of state and also functions that modify the state
    - This is called **prop drilling** and it gets very annoying.
- This is annoying, but worse it is hard to maintain and it causes our components to have many dependencies that make them more difficult to reuse as well
- Especially when we have hundreds of components nested deeply
- It would make sense to have such things globally available somehow, in **global state**

- So the "User" that we are passing around, is kind of like a part of the global state as it's shared between many components
- The term "Global state" can be used just for sharing state in a few components, it doesn't have to be truly global (annoying terminology!)
- This roughly correlates to local variables and global/shared variables

- Global variables "can't" be used for global state because React doesn't know when they change
    - And then does not re-render the parts that are required to change when the variable changes

- So for a variable like our `user` to be truly global state, we need all components that rely on it to be aware of the changes to it

- To store that data and to provide it to other components in a nice way, like with a global state, we are going to need a **state container**

## Context API

Here, sadly, the React official docs are not super fantastic. Luckily other resources do exist.

We will be using just functional components as our example. Once you get familiar with Contexts if you ever need to, feel free to research class based contexts yourself. Just know that they are actually much nicer to work with when you are using functional components.

> To make something globally available, we need to pair it with `useContext`. Context is a concept that was introduced in React a bit earlier than Hooks. With a little bit of work, it provides an alternative method for passing props to descendent components that need them while skipping any ancestors that don't.
> https://www.thisdot.co/blog/creating-a-global-state-with-react-hooks

> Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
> https://reactjs.org/docs/context.html#when-to-use-context

- The Context API in many cases has (or it could have) completely replaced the usage of external state management libraries
- It is very powerful and can be used in many ways
- State management libraries ARE still used though
- I have seen *Redux* and *Mobx* used, but there are others too

So, let's convert the TODO app to use Context.
We will do four steps
1. Create the Context itself
2. Set the parent (App) state for our context
3. Create a context Provider
4. Create a context Consumer (useContext hook)

Code examples:

```jsx
    // 1. UserContext.jsx
    import React from "react"

    // Default value for context
    // The real value will be provided later, by our context Provider (App.jsx)
    // **NOTE** This is a placeholder that just describes context keys and values
    // It can be just "null" like in our example or it can be like this minimalist version
    // This version can provide better VSCode code completio
    export const baseUserContext = {
        user: null,
        setUser: () => {}
    };
    export const UserContext = React.createContext(baseUserContext)
    console.log(UserContext);
```

```jsx
    // 2. Parent state in App.jsx
    // first we store the data that will change in the state of the Parent
    const [user, setUser] = useState(null);
```

```jsx
    // 3. Create a context Provider in App.jsx
    // We will pass both the data and the setter function to children via context
    // This is how we are telling React that "App" is the one component that is providing the state storage and the default value for the context
    const contextValue = { user, setUser };
    return {
        <UserContext.Provider value={contextValue}>
        ...
        </UserContext.Provider>
    }
```

```jsx
    // 4. Create context consumers in Login.jsx etc
    // Here I am defining a contect Consumer; this uses the context provided somewhere above this in the component tree
    const { user, setUser } = useContext(UserContext);
```