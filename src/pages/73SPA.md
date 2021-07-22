# DAY 3

Yesterday we started working on 
    - React event listeners 
    - React state

Today we will focus on
    - the SPA-Codelicious-todos as our example application
    - basic state in functional components
    - data flow
    - props / state

# State in functional components

- In class-based components we had
    - constructor with `this.state = { message: null }`
    - state changes with `this.setState({ message: "Hello React!" })`

- In functional components we must use React Hooks
    > Hooks are a new addition in React 16.8.
    > They let you use state and other React features without writing a class.

- The first hook we will learn is `useState()`:
    - `import { useState } from 'react';`
    - `const [fruit, setFruit] = useState('banana');`

## Full example of state in functional component

```jsx
function ClickCounter() {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>
            Button has been clicked {count} times
        </button>
    );
}
```

# Data flow / Props

> Conceptually, components are like JavaScript functions.
> They accept arbitrary inputs (called “props”) and return 
> React elements describing what should appear on the screen.

- Information flows from Component to Component mainly with props (properties)

- Props is the standard way of transferring information from one Component to another
    - Remember, State: Information that is stored in a component, relating to that component

- We can pass data *and functions* from parent component to child component

## Passing arguments to Child components
```jsx
    <ChildComponent propertyName={propertyValue} />
    <Greeting name="Joel" />
```

## Accepting props in Functional Child components

- The Props is accepted by child components as an object
```jsx
    function ChildComponent(props) {
        // do something
    }
```

## Accepting props in Class-based Child components
```jsx
    // EITHER
    class ChildComponent extends React.Component {
        constructor(props) {
            super(props);
            // do something
        }
        // do something
    }

    // OR IF YOU DON'T SPECIFICALLY NEED THE CONSTRUCTOR
    class ChildComponent extends React.Component {
        // do something
    }
```
