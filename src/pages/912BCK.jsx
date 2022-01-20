const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB912() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Backend - Database - Advanced - 1

- Now we know the basics of databases
    - What kind there are
    - How they generally work
    - How to find more info
    - How to insert and get data using the CLI
    - And such basics
- Now we will have 8 days of "Advanced" Database
    - Connecting to MongoDB from our app
    - Schemas in MongoDB
    - Mocking data
    - Properly connecting our application **logic** to MongoDB
    - Relations in MongoDB

# Introduction: ODM and ORM, abstracting the database

- These things
    - ORM: Object Relational Mapping
    - ODM: Object Document Mapping
- These are the reason why we as developers don't really write queries in our applications
- Usually they take care of the **actual** queries 
- They form a layer that exists between the database and our code

- Both of these are used so that our entire database and its data is _mapped_ to some kind of workable objects in our backend language
    - This mapping is the abstraction; it abstracts away or hides the details
    - Two examples:
        - SQL Table "Users" is mapped to object "User" in our backend code, so we can do
            - \`User.create({ ... });\` and that gets translated into \`INSERT INTO...\` by the ORM
        - MongoDB Collection "foods" is mapped to class "Food" in our backend so we can do
            - \`const f = new Food({....}); f.save();\` and that is transled to \`db.foods.insertOne(...)\`

- A good ORM/ODM does a lot of stuff
    - helps prevent injection attacks by making our queries safer by default
    - helps with data validation
    - helps with connecting to our database too!

# Adding \`mongoose\`

- Installing mongoose into our project
    - Who can guess? https://mongoosejs.com/docs/index.html
- Connecting to our database with \`mongoose.connect('mongodb://localhost:27017/test')\`
    - WTF is a connection string?
    - It defines exactly how we connect
    - \`mongodb://username:password@localhost:27017/test?connectTimeoutMS=1000&authSource=otherdb\`

- OK so it is connected. What can I do with it?

# Schema design principles I
- Everything in Mongoose starts with a Schema
    - They are used to connect our backend objects to the database collections
    - Schemas kind of represent the "form" of the collections
        - They define the data types
        - They also define functions! More on that later
    - They create the Model, which actually interacts with the collection
        - The model is actually a Class which constructs documents
        - What the objects creatd by our Model (Class) do, depends on the schema!

- So if you are starting an app, one place to start planning the data is just like with SQL
    - Planning our collection schema: Class diagrams instead of Table diagrams

# Model

- MVC Concepts: M is for Model
    - It's all coming together!

- Project organization IV: The \`models\` folder
    - One file contains both the Schema and the Model; usually just the Model is exported

- Creating a model: \`mongoose.model(<collection name>, <schema>);\`
- Using our models in scripts: \`new <model name>({<data>})\` --> \`new Rauli({ name: "R", age: 123 })\`;
- Saving documents to database: \`Model.prototype.save()\` -----> \`rauli.save()\`


> DEMO APP: https://github.com/FbW-E01/BE-DB-Advanced-Mongoose
`