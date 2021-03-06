const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB916() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# BE - Database Advanced - 5

# Introduction: Relational vs. Non Relational

## Non-relational data

- A document which exists isolation
- You have a public form and save submissions into a collection

\`\`\`js
// Not really relational data might look like this
{
    email: "joel@example.org",
    courses: [ "React Basics", "Advanced catfeeding", "Djazz basics" ],
},
{
    email: "fred@example.org",
    courses: [ "React Basics", "Djazz basics" ],
},
{
    email: "wilma@example.org",
    courses: [ "React Basics", "Advanced catfeeding" ],
}
\`\`\`

- What if you want to find all students on a course?
- Want to change the name of the react course?
    - You need to loop through _all_ users and then _all_ of their courses, updating
    - It works, but it sucks

## Relational data

- a relation is like a link or reference between two pieces of data (documents)
- this is super common
- not only for relational databases; MongoDB can do relations too

\`\`\`js
// Relational data
[
    {
        email: "joel@example.org",
        courses: [ id1, id2, id3 ]
    },
    {
        email: "fred@example.org",
        courses: [ id1, id3 ]
    },
    {
        email: "wilma@example.org",
        courses: [ id1, id2 ]
    }
]

[
    { id:1, name: "React Fundamentals" },
    { id:2, name: "Advanced catfeeding" },
    { id:3, name: "How to play the bagpipes" },
]
\`\`\`

- Now as the documents are _linked_ you can actually just change the course document to change the name
- As the users link to the courses, you don't need to look at them at all

- There are three main types of relationships

- \`Many to Many\` (our example was this!)
    - A "post" can have many "tags"
    - A "tag" can have many "posts"
- \`One to Many\`
    - A "customer" can have many "orders"
    - An "order" always belongs to a single "customer"
- \`One to One\`
    - A "student" always has one "contant info"
    - A "contant info" always belongs to one "student"
    - Somewhat more rare, maybe used for splitting up data to more manageable pieces

- Charting out relations: Entity relation diagrams
    - Many different types
        - Technical schematics generated from an existing database
        - Conceptual maps to help design the data in apps
    - Draw.io is really good for this purpose!
    - https://www.teach-ict.com/as_a2_ict_new/ocr/A2_G063/331_systems_cycle/analysis_tools/miniweb/images/er_one_to_one.gif
    - Search engine: "Entity relation diagrams"

- Let's jump into code and create a one-to-many setup!
    - https://github.com/FbW-E01/BE-DB-Advanced-OneToMany`