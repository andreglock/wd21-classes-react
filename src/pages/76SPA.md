# SPA - Component - 6

Today we will focus on

    - Styles in React
        - Inline styles
        - Bootstrap
        - SASS/SCSS
        - Styled Components

# Styling

- Start by cloning https://github.com/FbW-E01/SPA-Component-Minireact
- Who can remember how to create a new branch?
- Create branch with your github username as the name

    `git checkout -b Req`

- Then install the dependencies
    
    `npm install`

- I want everyone to push what they have done after the class!!

## Classes

- Still the primary way of using styles for elements
- Weather it's regular CSS or SCSS or LESS or SASS

## Inline styles

- Styling with classes + css is better!
- But you should know how this generally works
- The style attribute accepts a JavaScript object (not a string)
- The properties should be camelCased

- React will automatically append a “px” suffix to certain numeric inline style properties.

    ```jsx
        // Result style: '100px'
        <div style={{ height: 100 }}>
            Hello World!
        </div>

        // Who can tell me why we have two curly braces?

        // Result style: '100vh'
        <div style={{ height: '100vh' }}>
            Hello World!
        </div>
    ```

- Not all style properties are converted to pixel strings
- Certain ones remain unitless (eg zoom, order, flex)
- A complete list of unitless properties is in the documentation

##  Including Bootstrap in our project

- We have already used one way
    - Bootstrap CSS added directly in index.html

- There is also an npm package for that!
    - https://react-bootstrap.github.io/
    - `npm install --save react-bootstrap bootstrap@5.0.2`
    - `import 'bootstrap/dist/css/bootstrap.min.css';`
    - `import Alert from 'react-bootstrap/Alert';`
    - `<Alert variant="primary">Hi</Alert>`

## Adding support for sass/scss

- React/Web dev is constantly changing and evolving...
- The reason why we had so many versioning issues is because
    - https://github.com/facebook/create-react-app/issues/9628
    - So issues specifically related to node-sass (in many old repos that we have)
    - --> Try updating the dependencies so that you use sass (Dart sass / https://www.npmjs.com/package/sass) instead of node-sass - that seems to make most of the issues go away

- `npm install --save sass`
- Everything after that is automagical
- We can just import our .scss files and they just work


## Styled Components

- Another popular way of styling React Applications
- Yet Another npm package!
- You define mini components with template literals and CSS!
- These components often break the rule of "one component per file"
- But they should still have capitalized names!
- https://styled-components.com/
- Let's look at the basics of styled components
