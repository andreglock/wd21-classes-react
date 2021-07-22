# SPA-Boilerplate-1

Today we will
    - introduce React

# Framework

- MVC Concepts: V is for View (Brief Definition)
    - Model, View, Controller
    - MVC is an overused and abused term
    - This is a bit silly 
    - IMHO React doesn't really have anything to do with actual MVC
        - Or if it does, it's mostly just the "V"
        - Unless you use it in a funky kind of way or distort the meaning of MVC
    - This discussion is academic in nature

- Framework obsession: Overview of the JS Framework landscape
    - TONS of frameworks because:
        - JS is easy to start with, but hard to get perfect
        - MANY different problems to solve in development
        - MANY different approaches to those problems
        - MANY different opinions, no single source of truth on what is the "right way" of doing JS
    - Frameworks change and evolve over time

# React Intro

[React intro slides](./React-intro-slides.pdf)

- Why react? 
    - popular (lots of support and jobs)
        - https://trends.google.com/trends/explore?date=today%205-y&q=react%20framework,angular%20framework,vue%20framework,ember%20framework,backbone%20framework
    - nice to learn AND powerful
    - good platform for future growth in MANY directions

- React Ecosystem
    - React Native, Expo framework, Gatsby, Nextjs
    - LOTS of fantastic tools and components to use with React

- What about the Web Component Standard?
    > React and Web Components are built to solve different problems. Web Components provide strong encapsulation for reusable components, while React provides a declarative library that keeps the DOM in sync with your data. 

- React is a living framework, constantly updated
    - Modern React Development with Hooks
    - We will learn about Hooks, which is the latest modern way of using React
    - I don't like hooks
    - We will also learn about the older way of working with React

# Quickstart with Create React App

- Starting a react project

```js
    npx create-react-app my-first-react-app
```


- Project structure:
    - `.gitignore` - default gitignore
    - `REAMDE.md` - default readme
    - `package.json` review content
    - `src` folder - all of your source
    - `public` folder - these files can / will be downloadable by the browser directly
    - `build` folder - your production version, made by `npm run build`

- Render in React: `index.js`
    > StrictMode is a tool for highlighting potential problems in an application. StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.

# Component Anatomy: Dissecting `App.js`

- Entry Point: `App.js`, the boilerplate `App` component
- Including styles: `import <path to css>`
    - all of the imports are handled by webpack, hidden by create-react-app
- Importing images: `import <image name> from <path to image>`
- Using images: `<img src={imageName} alt=""..."" />`


# Templating with JSX: Slightly different html

- Multi-line templates: `const <component name> = () => (<JSX>)`
- One element per component: `React.Fragment` for multiple html tags
- Put the JS in JSX: Using `{}` for JS expression interpolation
- Comments in JSX
- You WILL see differences between HTML and JSX, luckily - the tools don't suck :) (show parsing error)
    - Because it's more XML than HTML, ALL tags need to close
    - We also need slightly different attribute names at times
        - class vs className

# Debugging React with "React Developer Tools"
