# SPA-Async-2

This week we will

    - learn more about Promises
    - actually GET and POST some data with a server
    - learn about requests and saving data

Last time we looked at

    - Promise basics
    - JSON basics

Today we will look at

    - More promise stuff
    - Error handling
    - <script> async/defer
    - Possibly also Debugging

# Simplifying Asynchronous Code: Promises, level 2

- Why use promise when simple callback do job?
    - One reason is
        - ""Callback hell, pyramid of doom""
    - This sucks, let me show you what it means

- **NOTE!!!!!** This a demonstration only!!
    - In the real world this is bad code
    - Because each request is waiting for (blocking) the others
    - Even when they don't need to!

- With promises, our code gets nicer
    - DO CODE ALONG

- This works, because .then returns a Promise!
- If one of your promises fail
  - the promise chain stops
  - the .catch() is called
- You CAN also handle individual errors, but it's not a super common need
    - if you need to
      - mdn
      - research
      - experiment
      - stackoverflow

## Problems with promises

- A common issue is having scoping issues
- This is a kind pseudocode example
    - code along *if you* want
    - but it's just an example

  - we could use side effects;
    - manually "hoist" the connection variable
    - we could also nest the promise chains

- There are many many many other secenarios where promises can "feel" wrong
- Those are probably due to not realizing some aspect of promises
- If you feel like you are doing something "wrong", try to google your situation

- Another issue is actually the example above, which is still kind of difficult to read
  - this we can also improve a bit in the next section

# Using promises modernly:

- ❤️ async / await ❤️
- Makes your asynchronous code read like synchronous code

## `async` functions

- ""Async functions always return a promise""
- DO CODE ALONG
- Also `async` sets us up to be able to use the `await` keyword

## `await` keyword

- Await is  like saying
> "pause the execution of this function,
> until the promise is resolved to a value"

- we can "await" for the result of a promise
- only works inside async functions And *Some* top-level scopes depending on version and other stuff too

# Blocking parsing and rendering

- Speaking of asynchronous stuff and blocking

- We can use the `<script>` element attributes `async` and `defer` for increasing speed and performance

  - async
    - fairly rare
    - when the browser sees this script tag, it will fetch it immediately, but parse it later
    - runs after the HTML has been loaded
    - runs AFTER DOMContentLoaded event
  - defer
    - more common
    - when the browser sees this script tag, it will ignore it for now
    - downloads script and runs it after the HTML has been loaded
    - runs BEFORE DOMContentLoaded

- Dynamic scripts injection

# Runtime errors: try...catch

- Compile time errors
    - Happen when code is interpreted
    - For example syntax errors
- Runtime errors
    - Happen when code is actually run
    - For example when accessing an element that does not exist

- Catching errors
    - `try { ... } catch (e) { ... }`
- Throwing runtime errors
    - `throw <expression>;`
    - `throw new Error("Something went wrong!");
