const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB923() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Be - Security - 5

- Before we start, if you want to code along, we will use these two repos from yesterday *set them up now*
    - Backend: https://github.com/FbW-E01/BE-Security-Fullstack-Back
    - Frontend: https://github.com/FbW-E01/BE-Security-Fullstack-Front

# File uploads: multipart requests

- Basic HTML forms where the \`method="POST"\` can be sent in 2 main ways
    - \`<form method="POST" ... enctype="application/x-www-form-urlencoded">\` 
        - Default, basically string of key-value pairs
    - \`<form method="POST" ... enctype="multipart/form-data">\` 
        - Used if the form contains file inputs

- But we will go directly to React instead of learning the basic HTML form stuff

## Frontend

- First... there is a thing called FormData
    - FormData is a tool built into browsers
    - It helps developers simulate the way a standard HTML-only form works with JS
    - Basically FormData bundles up data to be sent to a backend endpoint
- Next, let's straight up build a form with a file upload and send it with React :)

## Backend

- Now our backend needs to understand multipart requests  :/
    - Introducing... \`npm i multer\`

- **Security note**
    - Validate the files with multer (prevent anyone uploading multi-gigabyte garbage)
    - Add very good checking; is this a real human uploading a file (captcha, JWT or something)
    - For high security, it would be best to virus check the uploaded files
    - For example after upload and before download you could run
        - https://www.npmjs.com/package/clamscan
        - which requires https://www.clamav.net/
    - How to test if virus check works? \`EICAR test file\`
    - Docker

# Email Verification

- Let's see how far we get with this :)
- Why do we need email verification?
    - Fighting robots! (fighting spambot builders)
    - Making it harder to create fake accounts!
    - Ensuring so we can at least more effectively ban people
    - Making sure people can actually receive our messages (usage terms updated etc)!

- How does email verification work?
    - User details contains info: \`id: 7, verified: false\`
    - Backend generates single use token (\`j42yj24yj4y2uy42\`) and saves that somewhere with target user id
    - Backend sends email containing link including token to verification endpoint
        - http://my.fantastic.website.example.org/verify?token=j42yj24yj4y2uy42
    - Verification endpoint checks token that it's not too old or used yet
        - User connected with token will be updated to \`verified: true\`

- SendGrid, for quick email infrastructure
    - Why a service like SendGrid or MailGun or whatever?
    - Because email is hard to do right
        - Without getting banned 
        - Without emails put into spam
        - Without someone grabbing details while it is being sent
    - Basic email is not too hard to send yourself when you have access to a mail sending (SMTP) server
        - But those emails don't always end up in an inbox...
        - ...and SMTP is far from secure (I think modern "good" email uses maybe IMAP with encryption?)

- Implementing a token based verification email with SendGrid API

# Final note on security

- https://owasp.org/www-project-top-ten/

# Updated Example projects:

- Frontend: https://github.com/FbW-E01/BE-Security-Fullstack-Front/tree/upload
- Backend: https://github.com/FbW-E01/BE-Security-Fullstack-Back/tree/upload`