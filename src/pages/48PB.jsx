const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB48() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# PB - midway review

Yesterday we did
    - function parameter default values
    - variable number of arguments

This week we will
    - review
    - more practice + a 90 minute basics test (coding challenge really)
    - Objects

Today we will
    - review
    - practice (old tasks + mini project)

# TO KNOW

We need programming along with HTML + CSS to produce interactive, dynamic websites and applications.

JavaScript programs are made up of statements, which are instructions to the computer. They are made up of expressions, keywords, operators and values. Generally Semicolons separate JavaScript statements, but are mostly optional.

In JavaScript we have expressions, which are bits of code that evaluate to a value, such as string, number or boolean.

In JavaScript the data handled by your code is stored in variables. Variables are declared by the \`const\`, \`let\` or \`var\` keyword. The \`const\` values are constant, not allowing a new value to be assigned to the variable after initialization. You must initialize a const variable with some value when you declare them. \`let\` variables allow reassignment and can be declared without assigning a value. \`var\` is similar to \`let\`, but should be avoided due to scoping issues.

We had a look at many operators, such as 
    - Arithmetic operators such as \`- + * / %\`- often used used for mathematical statements
    - Assignment operators \`= += -= *=\` - often used to assign a value to a variable
    - Boolean operators \`&& ||\` - often used to check things in conditionals    
    - the Ternary operator \`?\`- often used to do one of two operations based on a boolean expression
    
JavaScript has a bunch of data types. We can check the type of a variable using \`typeof\`. We have mostly talked about the primitive data types Undefined, Boolean, Number and String. We have also talked about Functions and Arrays. Arrays are a special kind of Object - objects we will cover more in detail later.

JavaScript keywords identify JavaScript actions to be performed. Keywords are for example \`for, break, function, return, if\`.

JavaScript contains built in functionality for many common tasks, such as the Math built-in object for mathematical operations.

We run JavaScript with NodeJS (Node) using the \`node\` program. Node is usually good at reporting errors, giving us hints as to what went wrong and where.

JS programs flow from top down; left to right. Code execution takes different paths depending on conditional statements, loops and function calls.

Conditional statements make the computer execute different bits of code based on a boolean condition. Loops can execute the same bit of code multiple times.

JS programs often contain algorithms, and can even be thought of as algorithms. Algorithms are made of bits of code that solves a specific class of problems, such as calculating the average number or an array.

JS programs often contain many blocks of code, often deeply nested; creating levels for variables to live in. When a variable is not scoped (contained) in any specific block, it is considered a global variable.

Functions are like mini programs in JavaScript. Many already exist and we can create many more. Functions that are associated with an Object or Class are called methods.

Functions that don't have any side affects are called pure functions. Side affects is anything in the function that reads, writes or accesses data outside of the arguments given to a function.

A function can be called with zero, one or many arguments. The function definition defines parameters, which map the data provided to the function in arguments to variables (parameters) that can be accessed within the function.

Functions very often call other functions, so that there are multiple levels of functions being executed at any given time. This set of levels is called the \`call stack\`.

## Solving code issues

If you can't seem to find where to start, start anywhere. Write out the concepts, write pseudocode. If you get stuck on a task, see the other tasks and remember to read all text.

Your main tool, your text editor / VSCode helps us often, but cannot always be relied upon.MDN is a fantastic resource to use when facing specific technical questions.
For more general questions and help on algorithms, Google is your friend.
    - "javascript reverse array"
    - "javascript lowercase first letter"
    - "javascript how can I calculate average
    
Also, for many programming questions, the site StackOverflow is very useful if you are stuck on something alone and cannot solve it. Take care when writing questions; really think about what and how you are asking and when you give code examples, make sure your code is formatted well.

## Longer coding example
// TASK: calculates the average length of words in the given languages:
const sentences = [
    "en I like cats and dogs",
    "de Ich liebe Katzen und Hunde",
    "es Me gustan los gatos y los perros",
    "fr J'adore les chats et les chiens",
    "se Jag tykcer on katten och huden",
    "fi Minä pidän kirista ja kissoista", 
    "jp Boku wa neko ni mo inu ni mo daisuki des", 
    "he Ani oeve hatulim ve klavim",
];
for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i];
    const words = sentence.split(" ");    
    
    let sumOfWordLengths = 0;
    for (let j = 1; j < words.length; j++) {
        const word = words[j];
        sumOfWordLengths += word.length;
    }    
    
    console.log(\`\${words[0]} ----> \${Math.round(sumOfWordLengths / (words.length - 1))}\`);
}`