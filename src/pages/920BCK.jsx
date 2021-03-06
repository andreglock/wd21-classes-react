const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB920() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Backend - Security - 3

# Introduction: Authentication and Authorization

- Also called Authentication and Access control
  - Authentication: identifying a person
  - Authorization: managing access to features/data based on the person using a service

- To authorize, we need to authenticate
- To authenticate, we need to somewhat reliably make sure a person is who they claim to be

- It's still common to have a simple username-password login, but that _is_ getting more and more rare
- Many web apps don't even have a password at all OR require some kind of two factor authentication
  - Two Factor authentication == 2FA
  > This requires at least two pieces of evidence to proceed with the procedure. It may ask about *who you are*, *what you have*, or *what you know*.
    - Who you are: fingerprint, iris sensor, facial recognition... (biometrics)
    - What you have: physical key, physical device
    - What you know: password, pin, swiping gesture

- Apps with No password?
  - They would just do "login with facebook" / "login with google"
  - In Finland it's common to see "Login with bank credentials"
  - So basically these services are "offloading" the authenticating to FB/Google/Bank/whatever
    - They trust those other ones to keep the identity checking secure so they don't have to :)

- Before we jump into logins directly, we need to know about....

# Encryption and Hashing

- Two different things
- Encryption
  - Making something unrecognizable 
  - Same input always gives same output
  - Many different algorithms (methods of encryption)
  - Can be reversed
- Hashing
  - Making something unrecognizable 
  - Same input always gives same output
  - Many different algorithms (methods of hashing)
  - Can NOT be reversed

- Example of extremely simple encryption: ROT-13
  - https://rot13.com/
- Example of good hashing: SHA-1
  - Use SHA-something or AES-something
  - If you see md5 used, just don't use that one anymore :)
  - https://passwordsgenerator.net/sha1-hash-generator/

- "Military grade encryption" === AES-256

- Hashing is often done with multiple inputs
  - This is called "Salting"
    > Salt is a randomly generated, fixed-length value that is designed to be unique with each user password. Salt is appended with the current password string and fed into the hashing system to produce a newly hashed result every time a user creates a password. This means that if you and I have the same password, our hashed strings would be different.
    > https://betterprogramming.pub/salting-and-hashing-explained-b76f5af83554

  - Sometimes for example the ObjectID or use email might be is used for the salt
  - Sometimes hashing or salting is even done multiple times to increase security
    - However doing hashing with a good algorithm many times can be a liiiiiitle heavy for the computer
    - Meaning it can take a long time, so too many times will cause performance issues

- Don't encrypt passwords. Hash passwords.
  - That way even administrators cannot actually see your password in any way
  - And we have to set a new password instead of the app telling us our old one

- Unless you are a math genious, avoid writing cryptographic algorithms yourself :)

# Let's create a tiny backend API with a mini login!

Example app: https://github.com/FbW-E01/BE-Security-ExampleLogin`