# SPA-Component-1

- Yesterday we looked into creating React apps with create-react-app 
- We will review that today and talk more about components
- Before that, however - let's do the task from yesterday together
    - Talk about CSS scoping

# Introduction: Thinking in Components

> Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

- We already did very simple functional components
- Thinking in components
    - Components are used to create abstraction for any level of detail
        - A button, a form, a dialog, a screen, a section...
        - In React apps, all those are commonly expressed as components
    - Very commonly, components are either repeating parts of a page or self-contained parts of a page
    - Balance between components and HTML elements
    - Don’t be afraid to split components into smaller components
        - There is no rule as to which things are components or how big components should be

# Two types of components; Class and Functional

- Difference between Class & Functional component
- First of all, there are some really bad and outdated information on Google
    - Mainly: functional components _can_ have state and lifecycle methods in modern versions of React!!
- AFAICS, both can do the same things in modern versions of React
    - But the syntax differs greatly
    - Functional components are thought of as more modern
- The big syntax differences will come later
    - with event handlers and lifecycle methods

- EXAMPLE TIME!
    - `$ npx create-react-app coming-soon-page`

# Nesting Components

- Now as you can guess, projects start to have a lot of components _quickly_
- The organization of those components is important

> React doesn’t have opinions on how you put files into folders

- One common project organization method is having one `components` folder
- It might contain all components - often except for `<App>`
- Then you might order them with additional folders, such as grouping by features:

    components/
        common/
            Avatar.js
            Avatar.css
        feed/
            Feed.js
            Feed.css
            FeedStory.js
        profile/
            Profile.js
            ProfileHeader.js
            ProfileHeader.css

- Don't overthink it
    > If you’re just starting a project, don’t spend more than five minutes on choosing a file structure
    > Pick any -- (or come up with your own) and start writing code!
    > You’ll likely want to rethink it anyway after you’ve written some real code.

- So create a component when
    - You notice a repeating element
    - You notice a part of code (or your page) that makes sense on its own

- And remember, you can always change your mind later :)

