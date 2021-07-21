# UIB - Layouts - Flexbox 1

## Planning our layout

- You might start with a completely empty table, just an idea or a concept
- Infinite ways to start, here is one
        1. Draw a flowchart, how will the user accomplish things?
                - Analog or Digital
                - Figma, Draw.io
        2. Draw a rough pen-and paper wireframe of the key views
                - This could include mobile views and desktop views
                - Actual pen and paper, Mouse and Gimp or even Figma
        3. Draw a digital wireframe of the pages
                - Figma
                - Might show to clients, might help sales
        4. Draw a full design (or create a full design system)
                - Figma again, perhaps? Sketch?
        5. Implement that design etc

- As web professionals, the border between Designer and Developer
        is not super clear cut
- Wireframe
        - Like a rough sketch, no colors, no real content maybe etc.
        - Different kinds of wireframes from lofi to hifi

- In big projects, often you will continuously do parts 1-5 at the same time
- Digital wireframing with Figma for example
- Figma
        - Digital Wireframing, charts, websites, design systems and more
        - Needs registering
        - Very collaborative, many users can work on the same project
                - And share their work too!
        - A huge library of templates/toolkits that you can use and buy


                
## Flexbox
- "Flexible box model"
- Display value for boxes, often divs / sections etc
- "flex" is another value for `display`; `display: flex;`
        - The parent works like a block element
        - Automatically creates a "flex container"
        - All the child elements become its "flex items"
- The Flex container tries its best to keep its items in one line
        - Unless otherwise instructed!
- flex-wrap: wrap;
        - When the Flex items will not fit the container,
           they will wrap to the next line
        - Default is nowrap
- flex-direction: column;
        - Which direction do the items flow inside the flex container 
        - "row" is the default
- Shorthand for direction and wrap;
        - `flex-flow: column wrap;`

- justify-content -- for the main axis
        justify-content: center;
        justify-content: space-between;
        justify-content: space-around;
- align-items -- for the cross-axis
        align-items: center;
        align-items: flex-end;
        align-items: flex-start;   
        align-items: stretch; --- especially without height (row)

