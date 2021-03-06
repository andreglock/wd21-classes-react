const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB902() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Backend - Server - 3

# The journey so far

- So we made a few servers using the NodeJS http module
    - It works, but it sucks
- Most Node servers don't use http, it gets very messy
- One super popular framework that can help us is \`Express\`

# Introducing Express

- \`Express\` is a framework
    - It gives you an API, methodology and conventions
    - It understands the web I think better more than the basic http does
        - static asset hosting
        - template systems
        - cookies
        - better data parsing
        - and much more
    - https://stackoverflow.com/a/32303730/694325

- \`Express\` vs. \`http.createServer\`: creating a simple express server

- **Express example project** https://github.com/FbW-E01/BE-Express-Test`