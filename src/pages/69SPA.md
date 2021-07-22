# SPA-Async-5

Yesterday we did
    - Cross-Origin Resource Sharing / CORS
    - Promise review

Today we will do
    - fetch review (Assistant test lesson!)
    - megashort async/await review
    - Saving data in the browser

# Saving data: use cases for saving data in the browser

- Browser technology
- Web Storage API

> - Web Storage API provides mechanisms by which browsers can securely store key/value pairs

- Two Methods of storing
    - `sessionStorage`
    - `localStorage`

- VERY SIMILAR
    - data is saved as key/value pairs```js
    sessionStorage.setItem("quokka", "cute")

    ```Storage.setItem(<key>, <value>)`
    - `Storage.getItem(<key>);`
    - `Storage.removeItem(<key>);`
    - `Storage.clear()`

## SessionStorage

- Page is loaded in tab; this creates a page "session" for that tab
- These page sessions last as long as the tab
    - Reloads do not remove this session
    - Session cleared / removed when the tab closes
- Opening multiple tabs with the same document (same address), opens new storage sessions
- Duplicating a tab duplicates the sessionstorage session of the tab as well

```js
sessionStorage.setItem("quokka", "cute") // save value
sessionStorage.getItem("quokka")         // get value
sessionStorage.clear()                   // remove all values
sessionStorage.getItem("quokka")         // get value
```

## LocalStorage

- like sessionStorage, but....
    - doesn't expire when the tab closes
    - shared between tabs (in the same origin)
    - saves data in the browser

```js
localStorage.setItem("quokka", "cute") // save value
localStorage.getItem("quokka")         // get value
localStorage.removeItem("quokka")      // remove single value
localStorage.getItem("quokka")         // get value
```
