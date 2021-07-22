# SPA-Async-4

## Review one OR two of the tasks

Yesterday we did
        - Debugging
        - fetch()

Today we will do
    - Cross Origin Requests
    - Review Promises

# Cross Origin Requests

- Go to https://www.google.com/
- Run await fetch("http://www.facebook.com")
- Blocked by CORS policy

##  CORS: Cross Origin Resource Sharing, Accepted CORS headers

- We are covering the basics quite well here
- You don't have to remember everything
- This is an introduction
- Documentation exists: when you need it, use it

> CORS is an HTTP-header based mechanism that allows a server to indicate any other origins than its own from which a browser should permit loading of resources.

- For security purposes, when on website X, CORS does not allow scripts to request data from website Y
    - A few other things are affect, but we are focusing on requests made by fetch() to API endpoints
    - This is called the same-origin policy

- So if you are on www.suspicious-site.com you cannot access www.facebook.com
    - This is so that the suspicious site cannot load facebook or bank using your browser
    - (You might be logged into facebook / bank and it would download all your data)

- Requests ARE allowed between the same origin, though
    - when on facebook.com, you can do requests to facebook.com/user

- The origin of the site consists of
    - the scheme (http / https)
    - the hostname / domain name (localhost / facebook.com / mybank.de)
    - the port (80, 3000, 8080, 5501, etc)

- However, servers can specifically allow you to request their data from any domain
    - This is usually done from public APIs, such as the API for getting twitter messages
    - Servers can also allow for example GET requests, but not POST requests

### Headers

- fetch("https://jsonplaceholder.typicode.com/users")
- When we do requests to servers, we are sending a bunch of metadata
    - for example information about the request
- These are called headers

- When you make a request, you are sending headers
    - You are sending for example an "Origin" header automatically, which contains what page are you on
    - Browsers add this header automatically
    - There is a way to disable it, but don't -- it's a critical security tool
        - (We won't go into why; I don't even fully understand it; something something CSRF attacks)
    - If that header is not present, it's not a browser that's requesting

- If the server notices an origin where it allows requests from, the request is accepted
        - When the server responds, it sends some headers too
        - The server response will contain a header called Access-Control-Allow-Origin with each request
        - this header defines that the request is allowed
        - This header actually instructs the Browser to allow the JavaScript to run

- In some cases, you might be even forced to do what is called a preflight request
    - this means, that you do an OPTIONS request, then when that is approved you do your actual request
    - this is mostly done by the browser automatically :)
    - the exact criteria when this is needed is complex (MDN)

- You can set headers during your request, but some of them are still automatic

```js
// no preflight
fetch("https://jsonplaceholder.typicode.com/users", {method:"POST", body:"x"});

// preflight
fetch(
    "https://jsonplaceholder.typicode.com/users", 
    {method:"POST", body:"x", headers: {"test": 12354}
});

// preflight, origin does not change
fetch(
    "https://jsonplaceholder.typicode.com/users",
    {method:"POST", body:"x", headers: {"test": 12354, "origin": "facebook.com"}
});

// no preflight, origin does not change
fetch(
    "https://jsonplaceholder.typicode.com/users",
    {method:"POST", body:"x", headers: {"origin": "facebook.com"}
});
```

## What about server - server communication?

- NO CORS IN Server to Server communication
- If you DO want to access an API that does NOT allow cross-origin requests
- You will need to have a server in between
- https://miro.medium.com/max/1400/1*Gr3T_pkgMBbZw4v6Mjcm0g.png
- If the only thing the server does is bounce request between your frontend and the server, it's called a Proxy server
- Can be NodeJS, but doesn't have to be
- The security on the server is up to you, the server can't read your facebook or bank stuff :)

- There are even ready made servers specifically for proxying, one of them is called cors-anywhere


# Review Promises in general

- Awesome way to deal with asynchronous operations

- Synchronous: stop to wait for operation

    > Normally, a program's code runs straight along, with only one thing happening at once.
    > If function X relies on the result of function Y, it has to wait for function Y to return.
    > Until that, the entire program is essentially stopped from the perspective of the user.
    > Dat not good.

- Async: Do operation, run function after operation is done

    > Asynchronous functions can be run in parallel.
    > Function X can be run after function Y has completed.
    > When function Y takes a long time complete, the program is not stopped.
    > The program can do other things and function X runs whenever Y is done.

- To help with async, we have Promises.

    > "The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value."

- So, like a promise in the real world

    > I promise to do the dishes.
    > When that Promise is successfully completed (resolved), we can get cake.
    > When that Promise is failed (rejected), I will buy you flowers.

    - We don't know how long the Promise will take, but eventually we will either get cake or flowers

- A Promise is an object with a state
    - The Promise is pending: not resolved, not rejected, just waiting...
    - The Promise is rejected: operation failed
    - The Promise is fulfilled: operation was completed successfully

- LOTS of functions return promises (like fetch())
- We can make promises manually too
