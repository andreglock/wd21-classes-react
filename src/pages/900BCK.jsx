const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB900() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Backend - Server - 1

- **Backend** - where data and logic lives.
- CSS? Not here, buddy :D
- As a dev you can be full stack or specialize or something in between
- So let's talk about "full stack" and specialization
    - Wtf IS full stack?
    - Depends on who is speaking;
    - Front, Back and Database?
    - Front, Back, DB and Testing?
    - Specs, UI Design and Frontend implementation?
    - Specs, UI, UX, Front, Back, Database, Testing, Integrations, Servers and Operations?
    - Can be all of the above or something else too
- It's getting more and more hard to be a generalist doing _everything_ but it is still possible to a degree....
- ...BUT it's more common to specialize at least a little
- Whatever you do, it's beneficial to know the core ideas behind all sections of development
    - It will greatly expand your career options and also your understanding
    - If you want to pivot to some other area (front to back for example), you can!
- We will focus mostly on the Backend and the Database in this module

# Introduction

> Servers power the web, they are the backbone through which the information of the Internet flows.
> In this module, you will specifically learn how to utilize the Express framework to create your own simple JavaScript-based server.
> This will help you understand servers in general as well, so your knowledge will not be useful just for Express, it will be useful in other cases too!

- The term \`server\` is used for two things
    - 1. Virtual or physical computer that you connect to via a network
    - 2. Software running on a server machine that accepts and somehow handles incoming connections and/or requests
        - Request: the server receives your request such as "GET www.google.com" and handles that; once that request is handled the connection ends; like incoming letters that they respond to
        - Connections are a little different in that you make a stable connection that can be used for sending/receiving multiple messages back and forth; like a phone call for active discussion

- A server program is just a program where *mostly* these are true:
    - You start it manually or automatically
    - They run in the background with no UI
        - background running programs are called services (or sometimes daemons)
    - Servers just sit there actively listening
        - when they receive a connection or request, the start to do stuff
    - Servers listen to one or many \`ports\`
        - web servers often listen to for example :80 or :3000 :8080 :8881

- Let's revisit a common Request - Response cycle

- The role of the backend
    - The most important usage is to load, save, update and delete data
    - Specifically data that is shared
    - Use case: Sign up process for website

- Let's slowly start to move towards making a server

# Running JS on the OS

- Recap Node scripts & npm workflow with an example:
    - \`\$ mkdir test-backendstuff\`
    - \`\$ cd test-backendstuff\` 
    - \`\$ npm init -y\`
    - \`\$ echo "console.log(123)" > index.js\`
    - \`\$ node index.js\`
    - Create start script in package.json; \`node index.js\`

- Remember "Host Objects vs. Native Objects"?
    - Native Objects are standardized in JS, such as "Math" and "Date"
    - Host objects are supplied by the running environment, like \`window\` in the browser 
    - In NodeJS we have a bunch of Host objects too!
    - For example \`process\`

    > The process object provides information about, and control over, the current Node.js process. While it is available as a global, it is recommended to explicitly access it via require or import

- Example / Refershing our NodeJS skills:
- https://github.com/FbW-E01/BE-Example-Node



# Listening to requests

- Working with servers: Overview of \`http\` and \`https\` modules (Node docs)
    - NOTE: if you see something like \`require("http")\` that is the old way of doing this
    - Kinda like modules, this approach was called "CommonJS modules"
    - They still work, but the ones we have been using are better
    - We have been using "ESM" or "ES modules" or "ES6 modules" - ES === EcmaScript
        - \`import x from "x"\`
    - https://stackoverflow.com/questions/46677752/

- **Code along with me!**

- Automatic restarting with: \`nodemon\`
    - Nodemon "Node Monitor" is a tool that watches files.
    - Nodemon restarts your node process when it sees a file change.
    - \`npm install -g nodemon\` - often installed globally

- Automatic browser reloading exists too
    - This can be called hot reload or live reload
    - There's an NPM package for that called "livereload" :)
    - We will not use it for now, just know that it exists


`