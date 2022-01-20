const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB901() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Backend - Server - 2

- Review task from yesterday

# Quick tooling overview

## Browser

- Works, but a little annoying sometimes to use
- No pretty print
- Simple
- Hard to do complex one-of requests

## cURL

- Simple for basic stuff, but can be made to do complex stuff too!
- Does not automatically follow redirects
- If the response (github.com or otto.de) tries to redirect the "browser"
- Curl does care and does not follow the redirect

- \`\$ curl\`
- \`\$ curl localhost:8081\`
- \`\$ curl <any-web-url-here>\`
- \`\$ curl 'https://www.otto.de/san-srch-suggest-api/completion?q=hammer'\`

## Postman

- Kind of simple for basic stuff, but can be made to do *VERY* complex stuff too!
- Useful in VERY large projects
- Can be used as a testing platform
- By default, follows redirects
- Very nice organization when you have many many requests
- Can be included in git but usually isn't

## VSCode extension humao.rest-client

- Can be a file in your project (included in git!)
- Simple basic usage, but can do everything that curl does
- Can be super flexible too
- https://github.com/Huachao/vscode-restclient

# Getting data from server to server

- Our server can make requests too, instead of just handling them!
- Calling external servers (GET only)

- **Do not code along with me!**
- **This is an informative example, nobody does this**
- **But it demonstrates some good principles**

## That sucks, what is less bad?

- Can we \`fetch\` like in the browser??
- \`ReferenceError: fetch is not defined\` D:
    - fetch is a _just_ browser thing, not built into Node
    - (fetch is a host object in the browser)
- So we will use 3rd party tools to do the same thing
- Let's compare \`node-fetch\` VS \`axios\`

    \`\`\`js
    import fetch from 'node-fetch';
    import axios from 'axios';

    // const url = 'https://potatoking/'; // Error handling is complicated!
    // const url = 'https://httpbin.org/post'; // Error handling is complicated!
    const url = 'https://jsonplaceholder.typicode.com/todos/1'; // This works!

    // node-fetch works :)
    fetch(url)
        .then(response => response.json())
        .then(result => console.log("RESULT IS :....", result))
        .catch(err => console.log("OH NOES AN ERROR", err));

    // axios works :)
    axios
        .get(url)
        .then(response => console.log(response.data))
        .catch(err => console.error("OH NOES", err));
    \`\`\`
`