const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB41() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - Language - 6

Quiz questions and discussion

# Arrays

Arrays are ordered collections, where we have a 1st, a 2nd a 3rd element etc.
Arrays are mutable (as opposed to immutable).`