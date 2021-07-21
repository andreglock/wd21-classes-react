# Interactions 

## Fancy shapes

- *Not super duper important, but good to know*
- Very cool looking shapes are possible
- We already know a few shapes we can use
    - https://css-tricks.com/the-shapes-of-css/
    - Simple width, height, border(s) and positioning
    - Box, rectangle, circle, ovals, pills
    - Triangle

            width: 0px;
            height: 0px;
            border-top: 0px solid transparent;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
            border-bottom: 100px solid blue;

    - Trapezoid

            width: 60px;
            height: 0px;
            border-top: 0px solid transparent;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
            border-bottom: 100px solid blue;

    - Star

            .box {
                width: 0px;
                height: 0px;
                margin: auto;

                border-top: 0px solid transparent;
                border-left: 50px solid transparent;
                border-right: 50px solid transparent;
                border-bottom: 100px solid darkred;
            }

            .box::after {
                content: "";

                border-left: 50px solid transparent;
                border-right: 50px solid transparent;
                border-top: 100px solid red;
                position: relative;
                left: -50px;
                top: 130px;
            }

- `clip-path`
    - https://bennettfeely.com/clippy/
    - Can be applied to regular old elements
    - `clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);`

- `transform`
    - Allows you to transform an element in various ways
    - `transform: rotate(33deg);` (turns and degrees)
    - `transform: scale(0.9);`, `transform: scale(1.1)`
    - `transform: translateX(-10px)`
    - `transform: scale(0.5) rotate(10deg);` - two at a time!

- *Self study* 
    - MDN transforms page for more advanced shapes
    - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms