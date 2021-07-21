# UIB - Layouts - Flexbox 2

Yesterday we did flexbox, focusing on the parent (flex container)

- display: flex;
- flex-direction: column; -- sets the main axis direction
- flex-wrap: wrap;
- flex-flow: column wrap; -- shorthand for direction and wrap
- justify-content: space-around; -- control the main axis
- align-items: center; --- control the cross axis

*Flexbox items are elastic*

## Flexbox, the child elements (flex items)

- `order: 1;`
    - The default value is 0
    - Default: flex items are in the order that they appear in your HTML
    - Can have negative values too!
    - You can reverse the order with `flex-direction: row-reverse;`
    - Also works with `flex-direction: column;`
- `flex-grow: 1`;
    - The default value is 0
    - When applied to an item, the item will scale relative to the sum of the size of all other items on the same row
    - If none of the flex items have flex-grow, they don't grow
- `flex-basis: 200px;`
    - The width or height (depends on flex-direction) of a flex item
    - If width and flex-basis are both set, width is ignored!
    - Normal CSS units, like "px" and "%"
    - More dynamic than width;
        - IF the available space is less than required, automatically applies flex-shrink, fitting the items to the available space
    - Recommended over width
    - Often used in combination with height
- - `flex-shrink: 1;`
    - The default value is 1
    - Used in combination with `flex-wrap: nowrap` (default)
    - Determines the rate at which an item will shrink in relation to all items in the container when there is not enough room for all of them
    - Defines the ability for a flex item to shrink, if necessary
- `flex`
    - Shorthand for `[flex-grow] [flex-shrink] [flex-basis]`
    - By default these are `flex: 0 1 auto;`
    - Can be confusing!
    - Often just used for flex-grow OR all thee of them
    - Recommendation to use either 1 value or 3 values:
        - `flex: 1;`
        - `flex: 1 1 33%;`
    - Check MDN if you are unsure!

- `align-self`
    - Works like `align-items: flex-end;`, but for the children
    - Can be set to just one child element
    - Overrides `align-items` from the parent
    
- The perfect center
    - `display: flex;` and `margin: auto;`
    - might be useful for example in popover - overlays
        - cookie acceptance
        - spam messages
- Responsive website = media queries + flexbox
    - Work as usual