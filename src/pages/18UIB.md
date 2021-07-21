# UIB - More backgrounds!

## Backgrounds yeah!

- `background-image` - for decoration, not content
        - You can have multiple background images and a background color!
        - background-color: lightcyan;
        - background-image: url("bg.png"), url("bg2.png");
- `background-repeat` - controls how our background image is repeated
        - background-repeat: no-repeat; - does not repeat
        - background-repeat: repeat-x; - repeats horizontally
        - background-repeat: repeat-y; - repeats vertically
        - background-repeat: round; - repeats, but rounds the image sizes
        - background-repeat: space; - repeats, images get spaced according to the available space
- `background-size`
        - background-size: 100px; - defines a width of 100px, height gets automatically calculated
                - maintains aspect ratio
        - background-size: 100px 100px; - width 100px, height 100px
                - does not maintain aspect ratio
        - background-size: cover - the background attempts to cover the containing box
        - background-size: contain - the background attempts to be shown completely in the containing box
- background-position
        - background-position: top; - centered, at the top of the containing box
        - background-position: center; - centered horizontally and vertically
        - background-position: left; - centerd vertically, to the left of the box
        - background-position: right; - centerd vertically, to the right of the box
        - background-position: 10px 100px; - 10 px from the left, 100px from the top        
- setting multiple attributes with the `background` shorthand
        - `background: no-repeat center url("bg.png"), 
                       no-repeat center url("bg2.png");`
        - background: green;
        - Check MDN when and if you want to use this

## Gradients!

- Remember, transparency works here too!

- linear gradient
        - background: linear-gradient(#000, #F00);
        - background: linear-gradient(#000, #F00, yellow);
- radial gradient
        - background: radial-gradient(red, #000, rgba(0,0,0,0));
- conic gradient
        - background: conic-gradient(#000, #f00, #00f, #000);
- When creating gradients, a CSS Gradient tool is really helpful!
        
        
## Positioning

- Coordinate positioning
        - Usually set with either "top" and "left" OR "bottom" and "right"
- CSS `position`
        - Often combined with coordinates
        - `position: static;` - default value, element follows normal document flow
        - `position: absolute;` - element is removed compltely from the normal flow 
                - is positioned with coordinates
                - the element takes no space in normal document flow
        - `position: relative;` - element is positioned relative to itself
                - the space taken up by the element is taken normally
        - `position: fixed;` - removed from normal document flow, relative to the viewport
                - is positioned with coordinates
                - ignores parent/ancestor scrolling
        - `position: sticky;`
                - not supported by *everything*
                - is positioned with coordinates
                - ignores parent/ancestor scrolling until it hits the viewport edge, then it kind of becomes fixed
        
## Z-index -- CSS layering
 
- Z-axis coordinates, higher is closer to the user, ontop of lower
- Numbered values starting from 0
- Default is actually (auto)
- Values can be negative
- Like layering
- For big sites, it's best to have a System:
        - auto for basic content
        - 100-999 for the overlays (backgrounds)
        - 1000-9999 for dialogs (cookie accept)
        - 10000-99999 for modals (alert, such as "you have signed out automatically")

## Positioning- Coordinate positioning
        - Usually set with either "top" and "left" OR "bottom" and "right"
- CSS `position`
        - Often combined with coordinates
        - `position: static;` - default value, element follows normal document flow
        - `position: absolute;` - element is removed compltely from the normal flow 
                - is positioned with coordinates
                - the element takes no space in normal document flow
        - `position: relative;` - element is positioned relative to itself
                - the space taken up by the element is taken normally
        - `position: fixed;` - removed from normal document flow, relative to the viewport
                - is positioned with coordinates
                - ignores parent/ancestor scrolling
        - `position: sticky;`
                - not supported by *everything*
                - is positioned with coordinates
                - ignores parent/ancestor scrolling until it hits the viewport edge, then it kind of becomes fixed