const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB910() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Backend - Database Basics - 3

# MongoDB in general

- NoSQL Document database
> MongoDB stores data records as BSON documents. BSON is a binary representation of JSON documents, though it contains more data types than JSON.
> https://docs.mongodb.com/manual/core/document/

- BSON Documents look like this
  \`\`\`
  {
    name: "Veera",     // field: value
    type: "Warrior",   // field: value
    age: 39            // field: value
  }
  \`\`\`

- More data types than JSON?!? 
    - https://docs.mongodb.com/manual/reference/bson-types/
    - ObjectID is the important one here
    - ObjectIDs are cool! They look like this: \`507f191e810c19729de860ea\`
    - \`507f191e___810c19729d___e860ea\`
    > a 4-byte timestamp value, representing the ObjectId's creation, measured in seconds since the Unix epoch
    > a 5-byte random value
    > a 3-byte incrementing counter, initialized to a random value

# Using MONGO

- We will use mongo similarly to using MariaDB.
- To open the mongo shell we use the \`mongo\` command
- **NOTE** There is a newer, MUCH BETTER shell for MongoDB called \`mongosh\` - install it if you are curious
- We will stick to the basic one for now

- The reference manual is great!
- https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/

## CRUD

- \`show databases\`
- \`use <db name>\`
  > There is no “create” command in the MongoDB shell. In order to create a database, you will first need to switch the context to a non-existing database using the \`use\` command
  > MongoDB only creates the database when you first store data in that database.
  > https://www.mongodb.com/basics/create-database

- \`db\` --> show currently active database

## Table --> Collection

- \`show collections;\` --> Lists all collections
- \`db.createCollection("products");\` --> Creates the collection
- \`db.products.drop()\` --> Deletes the collection
- Difference I: SQL requires structure, MongoDB does not

## Row --> Document, Column --> Field

- \`db.products.insertOne({ name: "iPhone 8", price: 312, qty: 1 });\`
    - By default, MongoDB creates an ObjectID for our inserted documents
    - The ObjectID will be stored in a field called \`_id\`
- Difference II: Mongo implicitly provides unique ids

- \`db.foods.insertOne({ name: "Potato", rating: 100 });\`
- Difference III: Mongo implicitly creates collections with \`.insertOne()\`

- \`db.products.find();\` --> This one gets all documents out
- \`db.products.find({ _id: ObjectId("6142f9cc74d1616b8929646a") });\`
- \`db.products.find({ name: "iPhone 8" });\`

- \`db.<collection>.updateOne(<filter>, <update>)\`
    \`\`\`js
    db.foods.updateOne(
        { "name": "Potato" }, 
        { \$set: { "name": "Tomato" } }
    );
    \`\`\`

    \`\`\`js
    db.foods.updateOne(
        { "_id": ObjectId("6142fe5074d1616b8929646d") }, 
        { \$set: { "rating": 100 } }
    );
    \`\`\`

## What is this magical shell?

- \`print("potato");\`
- \`let d = db.products.findOne();\`
- \`print(d.name);\`
- \`db.products.find().forEach(doc => print(doc.name));\`
- \`try { this.will.fail() } catch(e) { print(e); };\`

`