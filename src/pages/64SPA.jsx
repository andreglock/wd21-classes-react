const ReactMarkdown = require('react-markdown');
 const gfm = require('remark-gfm');

export default function UIB64() {
return <div id='content'><ReactMarkdown remarkPlugins={[gfm]} children={markdown} /></div>
}
const markdown = `
# SPA - Modules - 2

Last time we talked about

    Modules
        named exports
        default export
        imports

Today we will over

    Transpiling / Bundling
    NPM projects

# Transpiling & Bundling

- Not all browsers support Modules
- Mainly IE11 doesn't
- I hope you never have to support IE11

- There might be other things too that maybe you want to use and that maybe only a few browser versions support

- In that case you can reach for Transpilation of JS code.
- Reminder: transpiling is basically taking code and changing it into different, but similar code
    - Like SCSS to CSS

## Babel

- There are many tools to transpile JS, one of the most popular ones is called Babel
- Babel says it's a compiler; transpliation is a type of compilation
- Depending on settings, Babel will compile your code down to different versions
- You kind of have to decide which target to support
- MANY ways of using
- For our example, you will need a NodeJS project

## NodeJS Refresh

- To have a proper NodeJS project, you need to run \`npm init\`
- This creates a \`package.json\` file that describes your project

## Babel example

- Follow https://babeljs.io/setup#installation
- In your settings, because we are using the preset-env, you could compile your cool code into different, very targeted versions
- https://babeljs.io/docs/en/babel-preset-env
- This gets complex fast, so we will just try out the basic options
- Try to run, Create src, Create a simple output and run with node

# Bundling

- https://webpack.js.org/
- Webpack is like a MEGA version of babel, capable of multiple languages and file formats.
- Can do much more than transpile
- Extremely flexible
- Can and does use Babel in the background
- Webpack can take our code, transpile it and bundle it up into neat little files
- These Bundled files load faster than our source files

- Webpack is run using node, but the output doesn't have to be run with node
- Example project from scratch again

# Npm workflow

- Adding modules to our project
`