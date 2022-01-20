const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB919() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Backend - Security - 2

# Sanitize

- Sanitize? Sanitization? Sanitation? Sanitizing
  - Validating will determine if the data is in proper form
  - Sanitizing will remove any illegal/bad/unwanted characters from the data

- Importance of sanitization
    - What would we want to remove from user inputs?
        - SQL injections!
        - JS/HTML injections!
        - Control characters; Text that is not actually text
    - Actually nowdays it's not _trival_ to break sites with HTML/JS injection, but it's still definitely possible
    - Let's look at an example
        - \`<img src="x.png" onerror="alert('hello')" />\`
        - Formatting / control character example: RTLO (Right-to-left override)

- The validator.js can Sanitize as well as validate, so let's have a look at that quickly
    - Blacklisting --- you are listing characters that are _NOT_ allowed: < \ / &
    - Whitelisting --- you are listing characters that _ARE_ allowed: a b c d A B C D

  - I will use https://github.com/FbW-E01/BE-DB-Advanced-Bloggyboi/tree/solution as an example
      - To follow along, clone this repo and make sure you use the "solution" branch

- Example app: https://github.com/FbW-E01/BE-DB-Advanced-Bloggyboi/tree/validate-sanitize`