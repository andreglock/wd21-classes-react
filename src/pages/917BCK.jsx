const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB917() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# BE - Database Advanced - 6

**Example repo used**: https://github.com/FbW-E01/BE-DB-Advanced-MognooseCRUD

- What if you want to delete a document and all of it's related documents? With Mongo+mongoose you can use middleware functions, similarly to express.

> Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions. Middleware is specified on the schema level and is useful for writing plugins.
> https://mongoosejs.com/docs/middleware.html

\`\`\`js
// A "pre" hook; a function that runs before the "remove" operations
// So if you try to remove a person, this function runs before the removal
personSchema.pre("remove", (next) => {
    console.log("Before a Person is removed. Person to remove is ", this);
    next();
});

// A "post" hook; a function that runs before the "remove" operations
// So if you try to remove a person, this function runs after the removal
personSchema.post("remove", async (doc, next) => {
    console.log("After a person is removed. Person removed is ", doc);
    
    // Delete all of the Scores of that person
    await Score.deleteMany({ person: doc._id });
    next();
});
\`\`\`

# Advanced querying

- For advanced queries, I highly recommend spending time looking at the documentation for reference, but let's do a few experiments!

\`\`\`js
// This one counts how many scores are there in the database
console.log(await Score.count());


// This one finds scores based on the defined rules
const query = Score.find({}); // start building query
query.gte('total', 5);        // only select scores >= 5
query.lte('total', 95);       // only select scores <= 95

// This would only select scores with either of the provided IDs
// query.in('_id', ['61640aba83b87271435e1d14', '61640ab983b87271435e1bec']); 

// sort results based on the "total" field (in descending order)
query.sort({ total: 'desc' }); 

// Pagination: "show 10 scores per "page", starting from page 3"
query.limit(10).skip(20); 

// I want to see only the "total" field in the results 
// the _id field is still added automatically
query.select("total");

// here we actually wait to perform the query and print the results
console.log(await query.exec()); 
\`\`\``