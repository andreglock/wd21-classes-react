const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB921() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Be - Security - 4

https://dnn-centralsupport.zendesk.com/hc/article_attachments/360005772413/gra-jwtprocess.png

# JWT = JSON Web Tokens

- JWT is a standard: https://tools.ietf.org/html/rfc7519
- JSON WEB TOKEN - basically a string of text
    - The text is Base64URL encoded

- Secure transmission of data by signing data with a secret
    - Secret must be kept secret!
    - Token must be stored securely!

- Token will look like AAAAAAA.BBBBBB.CCCCCC
    - [Header].[Payload].[Signature]

- **Header**
> The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.
> \`{"alg": "HS256", "typ": "JWT" }\`

- **Payload**
> The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.
-  The details of the kind of claims in the payload is for self-study :) 

  \`\`\`json
  {
    "sub": "1234567890", // "Registered claim"; "sub" = "subject"
    "name": "Veera Cat", // "Public claim"
    "admin": true // "Public claim"
  }
  \`\`\`

- **Signature**
> The signature is used to verify the message wasn't changed along the way, -- it can also verify that the sender of the JWT is who it says it is.

## LINKS

- JWT introduction: https://jwt.io/introduction
- JWT standard: https://tools.ietf.org/html/rfc7519
- JWT debugger tool: https://jwt.io/#debugger-io
- (Advanced) JWT token storage in browser: https://stackoverflow.com/questions/27067251

# EXAMPLE APP https://github.com/FbW-E01/BE-Security-JWT/`