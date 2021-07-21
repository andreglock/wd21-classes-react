# UIB - Layout - Grid 1

## CSS Grid on parent elements

- The grid is quite new, browser support added 2017
- Grid is similar to flexbox, but more powerful
- Easy to learn, maybe a bit difficult to master
- Both grid and flexbox are part of CSS
    - There is no need to abandon one for the other
    - Flexbox is one-dimensional
    - Grid is two-dimensional-  
    
- `display: grid;`
    - Defines an element to be a grid container
    - Its children become grid items
- `grid-template-columns: 1fr 2fr 1fr;`
    - Defines the width and number of columns
    - The column widths accept CSS units
    - The unit most used with grids is "fr" (fraction)
    - When using fr, the widths are automatically calculated
    - Fr is recommended over percentages due to margin/padding issues
- `gap: 1em;` - defines the space between elements
- `grid-auto-rows: 100px;` - defines row height, overflow danger!
- `grid-auto-rows: minmax(100px, auto);`
    - Defines the minimum and the maximum row height
    - "auto" is the default, means height grows with content
- You can use minmax with `grid-template-columns: ;` too!
    - `grid-template-columns: minmax(50px, 100px) 1fr 200px;`
- `background-attachment: fixed` looks super good!