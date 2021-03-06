const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB47() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - Functions - 4

Yesterday we did
  - Returns
  - Side effects / Pure functions
  - Shorter arrow functions

Today we will do
  - function parameters with default values
  - variable number of arguments / parameters


# Function parameters with default values

- Default parameter values
    \`function (<parameterName> = <defaultValue>) {...}\`

- The same works for arrow functions too!
    const repeat = (word, times = 2) => {
      let words = "-";
      for (let counter = 0; counter < times; counter++) {
        words = words + word;
      }
      return words;
    };

    console.log(repeat("CAT", 6))


# Variable number of arguments

    // here, "data" is an array of arguments given to the function (after the "start" argument)
    const multilog = (start, ...data) => {
      for (let counter = 0; counter < data.length; counter++) {
        console.log(\`<<<\${start}>>>\`, data[counter])
      }
    };

    multilog("WARN", "User 1 not found", "User 91 not found");
    multilog("ERROR", "Page does not exist");
    multilog("LOG", false, 52.12345, true, 1, -61);
    multilog("CRITICAL", "Database connection timed out");
    multilog("FATAL", "CORRUPTED DATA DETECTED!!");`