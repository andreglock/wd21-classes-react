const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB906() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Backend - Server - 7

# Routing!!!

- We already know basic routing in Express
- \`app.<method>(<path>, <function>)\`
- \`app.get('/hi', (req, res) => res.send("Hello world!"));\`

- AND We already know route variables in Express
- \`app.get('/users/:username', (req,res) => res.send("Hi, " + req.params.username));\`

- AND we know these functions are actually middleware functions
- BUT did you know, you can specify multiple (middleware) functions for a route at the same time? :O

\`\`\`js
app.get('/users',
    (req,res,next) => { console.log("/users loading"); next(); },
    (req,res) => { res.send("Users here hello"); }
)
\`\`\`
- The routing is even more flexible than that! Read more: https://expressjs.com/en/guide/routing.html

- You can even have an route with multiple HTTP methods (verbs) attached to it:

\`\`\`js
app.route('/book')
    .get((req,res) => { res.send("Books LIST!"); })
    .post((req,res) => { res.send("Books CREATE!"); })
    .put((req,res) => { res.send("Books UPDATE!"); })
    .delete((req,res) => { res.send("Books REMOVE!"); });
\`\`\`

- So routing is super flexible, many options!

# Introducing express.Router

- One super cool feature of Express routing is \`express.Router\`
- When you have a big app, you can divide parts of your app into separate pieces with the Router
    - Useful for APIs!

 # Handling Errors

- What do you mean \`details\` is wrong?

\`\`\`js
// Global error handler; needs to be the last middleware!
app.use((err,req,res,next) => { 
    console.log(err);
    res.status(500);
    res.send({ message: err.message });
})
\`\`\`

- OK; cool - what if we actually want to do something about the specific error in the handler function itself???
    - Answer: we can add a "try...catch" block locally tp where we think the error might happen
    - See the example app for details :) 

- Example app: https://github.com/FbW-E01/BE-Example-Lowdb-And-Controller`