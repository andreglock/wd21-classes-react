const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB915() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# BE - Database Advanced - 4

- (Very) basic schema validation
    - Enum : Enumeration
    - Traditionally enums were always numbers
    - It can mean just a set of allowed or valid values
    - There are many other validation options too!
        - like min, max for numbers
        - and minLength for strings

- (Vary) basic schema sanitization: Using the \`trim\` option
    - \`{ type: String, trim: true }\`
    - This makes Mongoose call the JavaScript built in \`String#trim()\` function when adding a property with a String value

- For all validation and sanitization options...
    - ...the documentation is your friend!
    - learning to research is super important for developers
    - https://mongoosejs.com/docs/api.html#SchemaStringOptions
    - https://mongoosejs.com/docs/schematypes.html

- We also learned that there when we have a (String) id as a variable, we can use either
    - \`await <modelName>.findOne({ _id: <idVariable> });\`
    - \`await <modelName>.findWithId(<idVariable>);\`
    - Here \`<modelName>\` is your Model and \`<idVariable>\` is your objectID as a string
    - Mongoose is smart enough to convert (often called "cast") your String ID into an ObjectID automatically

- We ALSO reviewed how to use Express route parameters with \`req.params\`
    - https://expressjs.com/en/guide/routing.html#route-parameters

- A whole lot of other methods and functions in the documentation too! :)`