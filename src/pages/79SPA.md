# SPA - Component - 9

Yesterday we talked about the useEffect hook.
    - Hooks are hard and it's a really hard one
    - Don't feel bad if you didn't 100% understand it immediately!

Today we will
    - Quiz
    - High level review

# QUIZ

## What does `npm init -y` do?
> --> generates package.json without asking questions

## What does `npm install` do?
> --> Installs dependencies from package.json into node_modules

## How can I see what happens if I run `npm run potato`?
> --> You can see your package.json file; the "scripts" part

## How can I add a new dependency into our project, so that it is saved into package.json?
> --> Run a command `npm install --save <package name>` or edit package.json directly.

## What is *ReactDOM*?
> --> Node package that renders React applications to the DOM.

## Tell me how to make a mini functional component?
> --> `function SmallComponent(){ return (<div>Hello World</div>) }`

## Tell me how to make a mini class based component?
> --> 
> `class ClassComponent extends React.Component {`
> `   constructor() {  super(); }`
> `   render() {`
> `     return <div> Hello Lars? </div>  `
> `   }`
> `}`

## What does the "extends" above actually mean / what does it do?
> --> It causes our class to "extend" React.Component
> --> It makes it so that our class is inherited from React.Component
> --> It tells our class to use React.Component as the base class 

## What is "conditional rendering"; what is the first thing that comes to your mind from those words?
> --> Like in regular JS conditionals; we can render things depending on a condition.
> `// Conditional rendering using a ternary statement here:`
> `render() {`
> `   return <div> `
> `      { this.state.messageCount > 0 ? <MessagesList /> : <p>No messages</p> }`
> `   </div>;`
> `}`

## What is the difference between these two?
> `import React from 'react';`
> `import { useState } from 'react'`
> --> First one is for default exports
> --> Second one is for named exports

## What is the role of the "public" folder in our react apps? 🤔
> --> Used for assets; folder where we have every file that can be directly downloaded by the browser.

## What is the role of the "src" folder in our react apps?
> --> The "source" folder; everything relating to JS, React and CSS. Possibly images.
> --> Images in the source folder are usually imported into Components, then our build system copies them automatically into publically available versions.

## Tell me two ways of getting an empty repository on your machine when starting a new project :)
> --> 1. Create folder, then `git init`
> --> 2. Create repository in GitHub, then `git clone <address>`

## Assume that this is part of a React Component. How do I prevent the form from being submitted?
> `<form method="post" target="index.php" ?????> ... </form>`
> --> You can use `event.preventDefault()` inside `onSubmit`.
> --> `<form onSubmit={(event) => event.preventDefault()}> ... </form>`

## If I have an array in my state, what is the most common method we have seen of rendering out each thing in that list?
> --> `<ul>{arrayOfNumbers.map((number, index) => <li key={index}>{number}</li>)}</ul>`
> --> `<ul>{arrayOfUsers.map((user) => <li key={user.id}>{user.name}</li>)}</ul>`
> --> Key should be unique, it helps React manage the elements

## What is an API?
> --> Application Programming Interface, often used for getting data. Can also be used for doing logins and other operations.

## What are the differences between controlled and uncontrolled inputs? What makes an input into a controlled input?
> --> Controlled input is an input whose value depends on the State of a component. A controlled input has its value set by React AND it has an onChange handler as well.

## What are *some* different lifecycle methods in React?
> --> For class based components
> --> `added` --> `constructor`
> --> `render`
> --> `on mounting` --> `componentDidMount`
> --> `removed` --> `componentWillUnmount`
>
> --> For functional components
> --> `useEffect`; used differently to achieve componentDidMount, componentWillUnmount






# High level review

> React is a JavaScript library for building user interfaces

## Components

> React lets you compose complex User Interfaces from small and isolated pieces of code

- Meaning: React applications are built with Components
    - Your application will be made up of many components
    - You can make components yourself
    - You can use components from external npm packages, like React-Bootstrap
    - Examples: `<Header \>`, `<Button />`, `<Icon />`, `<Container />`
    - You can use one component once OR many times
        - You have one Header
        - You have many Buttons

## Props 

- Components can pass information to their children using props
    - kind of like you can give parameters to functions
- You can pass variables and (references to) functions

## State

Generally state is at the heart of what react does.

> The “state” is an object that (mostly) represents the parts of the app that can
> change how the app looks

So if your application/component can be in multiple states, the bits of information and possibilities that make up the different states make up the whole State of your application/component.

Examples of state:

- A `<Checkbox />` can be On or Off
- A `<Counter />` keeps track of some thing that it is counting
- A `<SearchBox />` can have text entered into it or not
- A `<LoginBox />`
    - can have an username and/or a password inputted
    - can be loading / actively checking credentials

- Example (don't code along, but follow and ask questions)
