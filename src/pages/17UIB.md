# UIB - The Box Model

## Modeling boxes - the box model

- What is the box model?
        - Everything is a box
        - Box model = how to calculate the size of a box
        - Calculated from
                - The content & CSS
                - Padding
                - Border
                - Margin
- Measuring box sizes is hard
- Having a fluid / dynamic content area is better for the user
- Two ways of calulating box sizes
        - box-sizing: content-box
                - width = content
        - box-sizing: border box
                - width = content + padding + border
        
    <main
      id="main"
      style="
            background-color: lightblue;
            width: 50%;
            padding: 10px;
            border: 10px solid;
            margin: 10px;
            box-sizing: border-box;
      "
    >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus
              unde in sit ullam ut magnam dicta iusto, deleniti asperiores qui? Velit
              nam iure similique ab alias praesentium! Molestias, asperiores! Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Saepe perferendis, ad
              explicabo maiores magnam amet itaque quos, non ex iusto molestiae
              architecto nobis aliquam sunt incidunt at! Voluptatibus, quam porro.
    </main>

## Reset CSS
        - A bit of CSS to reset browser defaults
        - One example:
        - `* { margin: 0; padding; 0; box-sizing: border-box; }`
        - More complex reset CSS definitions help with browser inconsistency
        
## CSS shorthand
        - example: `margin: 10px`
                - margin-top: 10px
                - margin-right: 10px
                - margin-bottom: 10px
                - margin-left: 10px
        - example2: `margin: 10px 5px 0 50%;` - remember: TRouBLe / clockwise
                - margin-top: 10px
                - margin-right: 5px
                - margin-bottom: 0
                - margin-left: 15%
        - example3: `padding: 10px 50px;` - Vertical - Horizontal
                - padding-top: 10px
                - padding-right: 50px
                - padding-bottom: 10px
                - padding-left: 50px
        - border: `border: 1px solid red`
                - border-width: 1px;
                - border-style: solid;
                - border-color: red;
        - other shorthands, such as font amd backgound exist as well

## Inline vs Block box model
- The box model applies to inline elements too! Just a bit differently
- Inline elements
        - don't respond to margin-top, margin-bottom, width or height
        - Top and bottom values do not push other elements or rows of text
        - Inline elements are contained vertically in a line of text
- Inline vs Block
        - It's just the value of `display`
        - Inline elements are elements with a "display" value of "inline"
        - Block elements are just elements with a default "display" of "block"
        - You can control this!
        - `display: block;`
        - `display: inline;`
        - `display: none;`
        - `display: inline-block;`
                - Hybrid between the block and the inline elements
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
