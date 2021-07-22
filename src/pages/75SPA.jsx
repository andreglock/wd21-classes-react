const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB75() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# SPA - Component - 5

    20.09.2021 start of application phase
    10.01.2022 start of internship phase
    04.03.2022 start of graduate/alumni phase

Last time we looked at
    - handling forms / controlled components
    - review of \`fetch()\`
    - the \`useRef()\` hook for functional components
    - \`createRef()\` for class based components

This time we will practice

# Review!

- Customize VSCode

- What do you do when you are faced with a project?

        A. No package.json file --> use \`npx create-react-app <app name>\` and copy the files over
        B. No package.json file --> use \`npm init\`, manually add the dependencies
        C. The package.json exists, and contains stuff about react --> \`npm install\`
        D. The package.json exists, and does not contain stuff about react --> manually add dependencies
        E. New project, nothing exists yet --> \`npx create-react-app <app name>\`
        F. New project, nothing exists yet --> create folder, \`npm init\`, manually add the dependencies

# Mini login form example from scratch

1. Create project folder and change to that folder
2. Create initial package.json; \`npm init\`
2. Add dependencies; \`npm install --save react react-dom react-scripts\`
3. Create missing src and public folders
4. Create index.html into the public folder
5. Create index.js into the src folder
6. Test that it works :)
7. Intialize git; \`git init\`
8. ???
9. Victory!
`