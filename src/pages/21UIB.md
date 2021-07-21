# UIB - FontAwesome & Boxes revisited

## Fontawesome revisited

- Conveys meaning without text using icons
- Register and sign in to use the easy method of injecting a script and FA "just works"
    - OR: Download FA locally and use (link) it like any other CSS file (the fonts will be included automatically then too)
- Note! You have to use the correct code (like Joel did not, thanks Rudesh!)
- FontAwesome is a Font icon library - fonts are vectors!
- Not the only Icon Font Library
    - Self-study: alternatives to FA; flaticon, thenounproject.com
    
## Everything is a Box!

- The Box Model
- Boxes are made up of a few different parts inside out:
    - Content / Content area
    - Padding
    - Border
    - Margin
- When we define a CSS box width, it targets the content area (padding, border, margin are not counted as the width)
- IF we use `box-sizing: border-box` - the padding and border are included in the width
- Different types of boxes
    - Block (Block-level elements)
        - div, p, section, h1...
    - Inline (elements)
        - b, i, span, a, strong, em...
        - In line with text, like a part of text
        - Cannot have height, width
        - Padding and margin work, but top and bottom don't move other content away
    - Inline blocks
        - Mostly done ourselves with CSS
        - Can have height, width
        - Padding, margin work
        - `vertical-align: middle`
            - Aligns the inline-block  element within its current line of text (often moves the line of text a bit too!)
    - (((( Some blocks behave like in between inline amd inline-blocks, like images ))))