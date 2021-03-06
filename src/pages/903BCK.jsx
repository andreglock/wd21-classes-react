const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB903() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Backend - Server - 4

# So last week

- We learnt about 
    - The NodeJS \`process\` host object
    - The NodeJS \`http\` module
    - Tools for testing APIs
        - the Browser
        - cURL
        - Postman
        - VSCode extension "Rest Client"
    - Making API Requests in Node apps
        - node-fetch
        - Axios
    - The Express framework for making custom web servers

- Now let's review - using the BE-Express-OverlyComplexCounter task
    - **EVEN THOUGH I SHOW IT, STILL SOLVE/WORK ON IT YOURSELF AFTERWARDS TOO**
    - **I WANT _EVERYONE_ TO FINISH _EVERY_ TASK**

# POST, JSON, Controller, Frontend-Backend

- Problem: We want to send a bunch of data from the Frontend to the Backend
    - And probably save that data or do something with it

- We have two main options
    - Submitting a form
    - Creating and sending JSON data

## Sending data via form

- Submitting a form actually sends data in a very specific format
    - Pure HTML -> your inputs get converted by the browser to this format
    - Generally you will always POST data from forms
    - Example: \`name=Joel+Peltonen&message=Hello+This+is+a+TEST%21%21%21%21%21\`
        - It looks very much like the way data looks like in the URL bar
        - In fact, the \`type\` of this kind of data is defined by this Header
            - \`Content-Type: application/x-www-form-urlencoded\`'
            - Headers describe the request and response

- **Sometimes** (especially when sending files) the data is actually sent as
    - \`Content-Type: multipart/form-data\`

## Sending data via JSON request

- For example, a \`fetch\` request
- This uses \`Content-Type: application/json\`

## EXAMPLES
\`\`\`html
    <!-- Sending data as application/x-www-form-urlencoded -->
    <form method="POST" action="/api/hello1">
        <input name="name" value="Joel"><br>
        <input name="message" value="Hello"><br>
        <button>Send</button>
    </form> 

    <!-- Sending data as multipart/form-data -->
    <form method="POST" action="/api/hello2" enctype="multipart/form-data">
        <input name="name" value="Joel"><br>
        <input name="message" value="Hello"><br>
        <input type="file" name="my-file"><br>
        <button>Send</button>
    </form>

    <!-- Sending data as plain text (JSON) -->
    <script>
        const url = 'http://localhost:3000/';
        const data = { name: "Joel", message: "Hi from JS" };
        const init = {
            method: "POST",
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(url, init)
            .then(response => response.json())
            .then(result => console.log(result));
    </script>
\`\`\`



# What do we actually need to do

1. Build a basic backend 
2. Enable Express to support the request type you need (we use JSON)
3. Requests from the frontend, for an example with a React app
    - For this, we needed to enable CORS support in our backend :)

## Moving that data!

- GET requests are for getting data
- POST requests are for creating data

- GET and POST are HTTP \`request methods\`, often referred to as \`HTTP verbs\`
- There are others too, let's talk about them later
- When we learn more about REST and REST APIs, we will learn more :)

# EXAMPLES

- Backend https://github.com/FbW-E01/BE-Example-POST-Backend
- Frontend https://github.com/FbW-E01/BE-Example-POST-Frontend`