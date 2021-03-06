const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB922() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Be - Security - 5

# Introduction: State and the server - Stateless HTTP

- HTTP by design is stateless
  - Once a response has been made to a request, the request is forgotten
    - The server does not keep track of the requests, each new request is processed completely separately
    - In general there is no state stored between requests
    - If you do six requests, the server in theory doesn't keep track that _you_ made the six requests
  - The client is responsible of keeping track of any identifying piece of information, like tokens / JWT OR cookies
    - ...except if the server uses sessions

# Cookies

- JWT is an example of Token Authorization
- Cookies are generally and often used for _Session_ Authorization

- Cookies are little pieces of information that are similar to headers
  - Cookies are automatically sent with each request
    - JWT tokens need to be added to the headers
  - Both the client and the server can set cookies (but usually it's the server)
  - Both the client and the server can read cookies (but usually it's the server)

- Cookies are basically used to store state across requests
  - For example, a cookie can tell who the current user is
  - Example: User "Rauli Cat" logs into website
    - The web server creates a "session" in its memory for Rauli
      - The web server just remembers some variable 
      - \`Session with id 72 is for user Rauli and contains variables x, y, z\`
    - The web server then makes a cookie containing a sessionID \`72\`
    - That session cookie is sent to the browser along with the response
    - The following requests that the browser will make will automatically include this session cookie
    - So the server knows based on cookies that a request is coming from the same user

- So just to be clear
  - Tokens like JWT are not stored on the server at all
  - Sessions are stored on the server, session cookies can just refer to a session

- Cookies have other functions too
  - There are multiple types of cookies as well
  - They can even be used to store JWTs

- Cookies can store only 4kb of data
  - Just don't add a lot of data in a cookie, there is no need for that

- Generally cookies are limited to a domain (actually I think limited to origin)
  - stackoverflow.com and github.com have their own cookies
  - Cookies generally also have an expiration

# Example app: https://github.com/FbW-E01/BE-Security-ExampleCookie

# Let's talk tracking cookies

- The idea is; you login to facebook.com
    - That creates a facebook.com cookie on your browser identifying you
- Then you open catfood.com
  - catfood.com contains an invisible image that is requested from facebook.com
  - that means facebook.com gets an image request from catfood.com
    - facebook pixel
  - now the facebooks knows **you** visited catfood.com
  - something something marketing I don't understand marketing
    -> maybe now catfood.com can buy targeted ads on facebook
    -> maybe now fb also knows you are interested in shopping, cats, food, catfood...

# Let's talk vulnerabilities

- Just like JWTs from localstorage (XSS), cookies might be stolen from the computer or abused as well
  - Insecure browser plugins/addons might do this
  - But a more common attack based on cookies would be CSRF

## CSRF - Cross Site Request Forgery

- Simplified
  - You login to mybank.com
  - mybank.com contains a badly written form

  \`\`\`html
      <form method="POST" action="https://mybank.com/sendMoney">
        Send money to: <input type="text" name="accountNumber">
        Amount: <input type="text" name="amount">
        <button type="submit">Send</button>
      </form>
    \`\`\`

  - You then go to badwebsite.org that contains this

  \`\`\`html
    <form id="hackerform" method="POST" action="https://mybank.com/sendMoney">
      Send money to: <input type="text" name="accountNumber" value="LV93DRLO3447239K8200N">
      Amount: <input type="text" name="amount" value="1000">
      <button type="submit">Send</button>
    </form>
    <script>
      document.getElementById("hackerform").submit();
    </script>
  \`\`\`

- This is a *VERY* primitive version of a CSRF
  - This kind of thing used to actually work
  - Now the browser has some things to stop it
  - Backends have some tricks too (cors for example)
  - But the *idea* still works; your browser contains a login cookie; malicious code gets your browser to do a request you did not ask it to do; your cookie identifies you to the vulnerable site and the malicious code can do things on your behalf

- One pretty good security solution to this CSRF Tokens
  - Every time your webpage loads, a new random token is generated (and saved to the server as a valid token!)
  - That token is valid for a single request or maybe for 1 minute or something
  - When the backend notices a request coming in it will check, is there a valid token along with the request

    \`\`\`htm
      <form method="POST" action="https://mybank.com/sendMoney">
        <input type="hidden" name="csrf" value="71381358135j531">
        Send money to: <input type="text" name="accountNumber">
        Amount: <input type="text" name="amount">
        <button type="submit">Send</button>
      </form>
    \`\`\`

# Finally

> I recommend you stick to JWTs stored in localstorage for now
> And sanitize _EVERY_ input
> Research cookies in general later
> Also Research secure authentication using JWTs stored inside cookies later

# Links

- JS Basics review: localstorage / sessionstorage / cookies https://www.youtube.com/watch?v=GihQAC1I39Q
- Session cookies simplified + Token stuff: https://www.youtube.com/watch?v=UBUNrFtufWo
- JWT simplified + Session cookie stuff: https://www.youtube.com/watch?v=7Q17ubqLfaM
- CSRF: https://www.youtube.com/watch?v=vRBihr41JTo 
- XSS (instead of escape or in addition to it you should sanitize): https://www.youtube.com/watch?v=L5l9lSnNMxg
`