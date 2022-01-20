const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB905() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Backend - Server - 6

# Let's talk about REST a bit more

- But so what in general is REST even?

> REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server.
> https://www.codecademy.com/articles/what-is-rest

- More info: https://restfulapi.net/

- Client and Server are independent and separated
    - The Server doesn't know or care about the state of the Client
    - The Client doesn't know or care about the state of the Server

- With REST, these things (User, TODO, Post, Comment....) we are accessing and transferring are generally called resources

- With REST clients make requests to the server to get or modify data on the server
    - A request generally consists of:
        - HTTP verb, which defines what kind of operation to perform
            - GET — retrieve a specific resource (by id) or a collection of resources
            - POST — create a new resource
            - PUT — update a specific resource (by id)
            - DELETE — remove a specific resource (by id)
            - You can do pretty much anything with just these
            - You will probably run into OPTIONS too (and maybe PATCH)
        - a path to a resource (URL) /users or /posts or /users/15
        - optionally a request body containing data (POST and PUT)
        - optionally a header or headers that contain information about the request
- Generally, data is sent formatted as JSON
- Good RESTful APIs also make heavy usage of HTTP Status codes, like 200 and 
    - Most important HTTP status codes
        - 1xx -- Informational
        - 2xx -- Successful response
            - 200 "OK"
            - 201 "Created"
        - 3xx -- Redirects
            - 301 "Moved Permanently"
            - 302 "Found" ---> "Moved Temporarily"
        - 4xx - Client error
            - 401 "Unauthorized" -- generally when you are not logged in to something
            - 403 "Forbidden" ----- generally when you are not allowed to do something
            - 404 "Not found"
            - 418 "I am a teapot"
        - 5xx - Server error
            - 500 "Internal server error" --- something went wrong processing the request
    - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

- RESTful APIs generally have endpoints like this:
    - GET    /users                 - Gets all users
    - POST   /users                 - Creates a new user
    - GET    /users/:id             - Gets a single user
    - PUT    /users/:id             - Updates a single user
    - DELETE /users/:id             - Deletes a single user
    - GET    /users/:id/todos       - Gets the TODOs of a single user
    - POST   /users/:id/todos       - Creates a TODO for a single user
    - PUT    /users/:id/todos/:id   - Updates a single TODO for a single user
    - DELETE /users/:id/todos/:id   - Deletes a single TODO for a single user

- Alternatively, the last endpoints might just be this (if the TODO IDs are totally unique, which they should be)
    - POST   /todos       - Creates a TODO
    - PUT    /todos/:id   - Updates a single TODO
    - DELETE /todos/:id   - Deletes a single TODO

- Not all APIs are REST APIs
    - SOAP
        - Oldschool, corporate stuff
        - Communicate over HTTP
        - Requests tend to always just be POST requests
        - Requests contain a body of XML (SOAP XML)
        - Difficult for humans to read
        - Can be super easy for computers to read
    - GraphQL
        - Super modern and very cool
        - You have one single endpoint (URL)
            - www.joelsAPI.com/graphql
        - The operation you are doing is defined in the body of your request
        - The body describes what you want
        -   users:15 {
                    comments,
                    posts {
                        comments
                    }
                }
            }
        - DELETE users:15

# "Controllers"

- I don't really like to call these controllers, but it's common to see that term
- And its I guess not wrong, but feels weird to me
- MVC Concepts: C is for controller (brief definition, draw stupid image)

- View          - client (react app for example)
- Controller    - connection between view and data (endpoint handling functions in NodeJS)
- Model         - data (LowDB for example)

- MVC Theory discussion https://stackoverflow.com/questions/3109715/
`