const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB914() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# Backend - Database Advanced - 3

# Schema options

- We will again continue with the **EXAMPLE APP** https://github.com/FbW-E01/BE-DB-Advanced-Mongoose
- Remember when we tried to insert data with the wrong type?
    - That's called validation; it ensures our data is valid and correct
    - We can have a lot more sophisticated validation too!

## Advanced Mongoose Schema data typing

- Specifying a type the long way: \`{ type: <field type> }\`
    > You can think of a Mongoose schema as the configuration object for a Mongoose model. A SchemaType is then a configuration object for an individual property. A SchemaType says what type a given path should have, whether it has any getters/setters, and what values are valid for that path.

## Sub Documents or Subdocuments

> Subdocuments are documents embedded in other documents. In Mongoose, this means you can nest schemas in other schemas. Mongoose has two distinct notions of subdocuments: arrays of subdocuments and single nested subdocuments.
> Subdocuments are similar to normal documents. Nested schemas can have middleware, custom validation logic, virtuals, and any other feature top-level schemas can use. The major difference is that subdocuments are not saved individually, they are saved whenever their top-level parent document is saved.
> https://mongoosejs.com/docs/subdocs.html


# TASKS
**TASK** Bloggy
    https://classroom.github.com/a/zr8vgYB5

`