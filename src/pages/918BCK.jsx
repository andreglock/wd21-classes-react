const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB918() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Backend - Security - 1

# Introduction

- Everything starts with making data consistent and secure
- Consistent data means data we can analyze and rely on
    - The user email at least *could* be an email
    - The user role is one of recognized roles (we did this already with enums!)
    - Admin/User/Editor
- The easiest place to validate data is _before_ you save it
    - At that point, you can still complain to the client in a response

# Validate

- Validation generally is concidered a part of security
    - Responding with understandable error messages is important too!
    - But you also don't actually want to reveal details about your app
    - For example stack traces reveal a lot of information

    > A stack trace is an information leak, which reveals information about your implementation. Whilst not a serious vulnerability, it does allow an attacker to gain certain information about your system. It may also allow them to use a debugging-based approach to exploiting flaws in your site.
    > It can leak some information about the design of the software, which may be helpful to the attacker (e.g., revealing database versions, table names, code filenames, and so on)
    > https://security.stackexchange.com/a/19132

    - Horror scenario: stack trace reveals a connection string (or other connection details)

- Importance of server side validation
    - Never trust the browser
        - Always check everything coming in and assume it could be bad
    - The request coming in might even not be coming from a browser
        - There is simply no way of knowing
    - You can make \`curl\` request that looks _exactly_ like one from chrome
        - Or postman
        - Or even just the browser developer tools
        - Or Python or Java or PHP or whatevers
    - Even if you actually check the password strength in the frontend
      - That frontend check _can_ be bypassed

- The flip side of validation is testing
    - Remember to test your backend with really weird requests too!
    - Wrong types, broken body data, weird HTTP methods, wrong URLs, huge requests, bad headers...

\`\`\`js
// theoretical example
app.post('/users', (req,res) => {
    // how do we know if req.body isn't terrible?
    // the schema checks things, but not really _that_ well
    const user = await User.create(req.body); 
    req.json(user);
});
\`\`\`

- There are many validation methods out there
    - we will look at https://www.npmjs.com/package/express-validator
    - which is based on https://github.com/validatorjs/validator.js

**Example app** https://github.com/FbW-E01/BE-Security-Validate-Example
`