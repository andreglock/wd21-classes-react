# SPA-Async-3

Yesterday we did
        - Pyramid of doom
        - Async/await
        - Errors

Today we will
        - Debugging
        - do actual requests

# Debug

- This will be your VERY quick introduction to debugging
- Huge topic, this is just the VERY surface

- Debugging node scripts with vscode
- Debugging node scripts with chrome

- Shortly there are two main methods to debugging:
    1. Starting a program process specifically for some debugging
    2. Starting a program process normally and attaching a debugger to that process


# fetch()

- FINALLY we are actually getting data
- We will do this with the global browser function fetch()

> The Fetch API provides an interface for fetching resources

- We will be using the service https://jsonplaceholder.typicode.com/
- To experiment, create a new HTML file and a new JS file
    - So that we don't need to make our own server **yet**

# Getting data

- fetch(url)
- Parsing JSON: `.json()`
- Using data:
        `fetch(<url>).then(<callback>)`
        `await fetch(<url>)`

# Posting data

- When we "discuss" with servers, we have multiple different verbs to use
- The previous fetch used the verb "GET", which is the default
- We can control fetch with the 2nd argument ("init" or "options")

- The next verb we will learn is "POST"
- POST is used to SEND data to a server :o
- POST is also often used to send a `<form>` to a server

# 3rd Party APIs

- As developers, we use a lot of 3rd party APIs
    - 3rd party: not the browser, not our server

> Many large websites and services such as Google Maps, Twitter, Facebook, PayPal, etc. provide APIs allowing developers to make use of their data (e.g. displaying your twitter stream on your blog) or services (e.g. using Facebook login to log in your users).

- The reason why we are learning async stuff is that we don't want the website to freeze while we are downloading twitter posts, for example

