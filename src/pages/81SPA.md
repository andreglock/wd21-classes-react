# SPA - Router - 2

# Router continued

## Theory

- The Router works by changing the URL without loading a new page. How?
- By using the **History API**, which can be used to modify the history of a browser
- MDN has good documentation about it :)

- `window.history.back()`
- `window.history.forward()`
- `history.pushState({page: 1}, "title 1", "/Potato")`
- Interested in details? Research.
- https://developer.mozilla.org/en-US/docs/Web/API/History

## Redirect

- Sometimes, like after a user has logged in, you want to redirect them to a new location
- In that case, just render a `<Redirect />` Component


    > Rendering a <Redirect> will navigate to a new location. The new location will override the current location in the history stack

## Alternative way of making routes

- Often you have a single component for a single route
- For this, there is a nice way to write shorter code
- `<Route path="/something" component={SomeComponent}/>`

## Route Parameters

- This is the advanced feature I was talking about earlier
- Sometimes you want dynamic routes; like these
    - /users/joel
    - /users/milad
    - /users/veera
- And you want to know in your code exactly what user should we display
- Here we will use **Route Parameters**
- They work with a special colon notation like this: `/users/:<param>`
    - Here `<param>` is your parameter variable name


## Complex Nested Route Example

See Example app at https://github.com/FbW-E01/SPA-React-Example