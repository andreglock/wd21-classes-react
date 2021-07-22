# SPA - Async - 1

Last time we did
    - Babel basics - transpiling
    - Webpack basics - bundling
    - NPM - using external packages and ... problem solving

# Asynchronous programming

The web is built on consuming data.

## Non-Blocking Promises

- JavaScript programs are "single threaded"
    - A program can do one thing only at a time
    - never truly two things at the same time
- Blocking vs. Non-Blocking code: A brief example
    - Blocking operation
        > When a web app runs in a browser and it executes an intensive chunk of code without returning control to the browser, the browser can appear to be frozen. This is called blocking; the browser is blocked from continuing to handle user input and perform other tasks until the web app returns control of the processor.
        - Blocks all things on the page until is done
    - Non-blocking
        - When something is being done, allows other stuff to run
            - (kind of like simulating multiple threads)
        - Kind of similar to `window.setTimeout()`, not actually that
        > Features like Promises allow you to set an operation running (e.g. the fetching of an image from the server), and then wait until the result has returned before running another operation

## Race conditions: Reading non blocking code

- We want to have code that doesn't block anything else
- We also sometimes need to do operations that take some time
- Don't follow along

# Promises

- Awesome way to deal with asynchronous operations
- Synchronous: stop to wait for operation
    > Normally, a given program's code runs straight along, with only one thing happening at once. If a function relies on the result of another function, it has to wait for the other function to finish and return, and until that happens, the entire program is essentially stopped from the perspective of the user.

- Async: Do operation, run function after operation is done
    > "The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value."

- A promise is an object with a state:
    - pending: not fulfilled, not rejected
    - rejected: operation failed
    - fulfilled: operation was completed successfully

- You can create Promises!

# JSON: ""JSON is JS Objects in text""

- Converting objects and arrays to JSON
    ```js
        const users = [
            { name: "Joel", age: 17 },
            { name: "Abdul", age: 0 },
            { name: "Carsten", age: 0 },
            { name: "Kalaya", age: 0 },
            { name: "Kai", age: 0 },
            { name:"x", age: 0 }
        ];
        const usersJSON = JSON.stringify(users);
    ```
- Converting JSON to objects or arrays
    ```js
        const s = "[{\"name\":\"Joel\",\"age\":17},{\"name\":\"x\",\"age\":0}]"
        const result = JSON.parse(s);
    ```
- JSON pitfalls
    - JSON.parse('[1, 2, 3, 4, ]')
    - JSON.parse('{"foo": 1,}')
    - JSON.parse('{"foo": 01}')
    - JSON.parse('{"foo": .1}')

- Pretty JSON strings <3
    - JSON.stringify(users, null, 3)
    - the 3rd argument is key
        - how many spaces it will use to indent values

