# UIB - Fonts and boxes

## Quick tip

- Google Fonts for custom fonts

## Everything is a box!

- Easy to see with inspecting and setting Dev tools CSS
  - `* { border: 1px solid red !important; }`
  - `div { border: 1px solid blue !important; }`
  - `span { border: 1px solid green !important; }`

## Containing content

- Semantic elements, let's learn a few
- `<main>`
  - represents the main content of a page
  - often combined with "skipnav" technique
  - nav = your navigation menu
    - `<nav>` - semantic element used for wrapping your navigation section
  - used for wrapping your main content
  - "shrink wrapping" / wrapping
    - put all of your content inside the main
  - often you can have classes and/or ids for your main element
    - <main class="container"></main>
  - One (visible) main per page

## Stop content busting out of its box!

    width: 40vw;       /* Set box width */
    height: 40vh;      /* Set box height */
    margin: auto;      /* Center this box inside its parent box */
    overflow: hidden;  /* Prevent content from overflowing out of the box! */

## Elements

- Two types of elements
  - Block
    - Always start (on) a new line
    - Take up the full width available
      - stretch out to the left and to the right as much as they can
      - meaning it has a width of 100% by default
      - the height is defined by the content automatically OR by the developer
  - Inline
    - Start within an existing block-level element (they don't start a new line)

### BLOCKS

- main, nav, div, p, hr, lists(ul, ol, li), h1-h6, pre
- <section>
    - a section of the page which doesn't have a more specific semantic element to use
    - often these would have a heading
- <article>
    - a self-contained composition in a page, which is intended to be independently redistributable or reusable
- <aside>
    - a part of a document where the content is only indirectly related to the main content
- <header>
    - defines the top part of a page
    - often repeated in many pages
- <footer>
    - defines the bottom part of a page
    - often repeated in many pages

- SO SO SO MANY MORE!

### INLINE

- span, a, em, br, img
- strong, b
- sup and sub
- input

**You do not need to know all of these**

**Self-learning** Have a look at MDN to see what Block and Inline elements exist
