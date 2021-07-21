# Framework - SASS

## SASS Introduction

- SASS - Syntactically Awesome cSS
    - https://sass-lang.com/
    - Clever people wanted to make CSS more awesome
    - Took out ; and {}
    - New awesome features, such as NESTING
    - www.sassmeister.com
    - .sass files
    - https://sass-lang.com/documentation/style-rules
- SCSS
    - After the original SASS
    - "Sassy CSS"
    - More CSS-like
    - SASS Superpowers, like NESTING
    - Much more popular
    - Backwards compatible with CSS
    - We will be focusing on this!
    - .scss files
    - https://sass-lang.com/documentation/style-rules

- Now: Two file types, .scss and .sass
    - Different languages / markups
    - Both are referred to as SASS :facepalm:
    - Other options exist too, such as "Less"

- SASS/SCSS/LESS/etc...
    - CSS Preprocessors
    - We "transpile" SCSS code to get CSS
        - Transpile = Convert from *Langage A* to *Language B*
            --> Source-to-source translate
            --> Source-to-source compiling
            --> Transcompiling
            --> Transpiling
        - Transpiled languages are generally on the same "level" and of the same complexity
    - How do we transpile?

## Example Workflow for SCSS --> CSS

1. Install "sass" tool using NPM
- `npm install --global sass`
2. Run the "sass" tool
- `sass [inputfile] [outputfile]`
- `sass --watch style.scss banana.css`

## Build scripts: Using NPM as a build tool

- Example boilerplate project with a workflow developed by DCI
- https://github.com/FbW-E01/dci-boilerplate-I
- READ THE README.MD DOCUMENTATION
- Key commands
    - `npm install` - install dependencies
    - `npm start` - start development server
    - `npm run build` - build production version
    - `npm run deploy` - deploy to Github Pages

## SASS Variables

- What is a variable?
    - Box for storing a value
    - Referenced from many places in code (CSS or other code!)
- Defining a SASS variable
    - `$[name]: [value]`
- Using a SASS variable
    - `color: $[name]`

### OVERRIDING BOOTSTRAP COLORS IN THE DCI PROJECT BOILERPLATE

- Custom
    $red: #dd3d2d;
    $green: #33ff44;
    color: $red;
- To maps
    $colors: (
        "red": #dd3d2d,
        "green": #33ff44
    );

    p {
        color: map-get($colors, "red");
    }
- Bootsrap overrides
    $theme-colors: (
        "primary": orange
    );
    $border-radius:99999px;
    BEFORE THE IMPORT
- Look at Bootstrap source code