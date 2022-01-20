const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB913() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Backend - Database Advanced - 2

# Models 2.0

- Adding a method to our Schema and using it on the model
    \`\`\`js
    userSchema.methods.canEdit = function() {
      // Admins and Editors can edit
      return this.role === "Admin" || this.role === "Editor";
    };
    \`\`\`

- Adding a static methods to our Schema and using it on the model
    \`\`\`js
    userSchema.statics.findByName = function(name) {
      return this.findOne({ name }).exec();
    };
    userSchema.statics.findAdmins = function() {
      return this.find({ role: "Admin" }).exec();
    };

# Mocking data

## Seeds

- What are seed scripts?
    - In projects you often have to "Reset" and go back to a pure database with just basic logical data
    - Seed scripts "seed" or populate a database with some data
        - Contrary to that "Purge" scripts clear the database of all data
    - What we have been building here is effectively a mini seed script
    - Often seed scripts create some seed data from where you can continue developing your app more
    - For this, you need random fake data! MOCK data!

## Faker

- Generating fake data using \`faker\`: \`faker\` api docs  
    - https://www.npmjs.com/package/faker
    - http://marak.github.io/faker.js/

- Thanks I guess, how do I delete all of them?
    - Purging collections: \`await <model name>.deleteMany({});\``