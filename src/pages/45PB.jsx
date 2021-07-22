const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB45() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - Functions - 2

Yesterday we did 
  - Function declarations
  - Function calling
  - Function parameters / arguments

Today we will do
  - A little bit of review
  - Function scope

# A little bit of review

# Function scope

- We already talked about
  - Block scope
  - Global scope

- Function scope is very, very similar!
  - Parameters in functions work like variables inside block scopes 
    - They are not available outside the function
  - Variables declared in functions
    - Are only available inside the function
    - Even \`var\` variables!!!
    - .... EXCEPT in some cases
    - \`Always use const and let\`

- You can access variables that exist in the scope(s) surrounding a function, inside the function
  - You can also assign new values to those varialbes, when the function runs
  
  let userCount = 41;

  function createUser(userName) {
    userCount++;
    console.log("Added new user " + userName);
  }

  createUser("Sting");
  createUser("Eminem");
  createUser("Bejoonce");


# Reading programs

- When you get or when you have a very long program
  - You often don't need to read all of it to work on it
  - Read functions only when you need to really understand them
  - When I read code, I skim it first, and then focus on the bits that stand out`