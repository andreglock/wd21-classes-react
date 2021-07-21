# UIB Forms 2


## More styling

- Focusing an element; use tab
- Focused elements should have some kind of focus indicator, such as a box around them
- You can style focused elements with `:focus`
- You can add an additional border to help with focus tracking with
        - `outline` - very similar to borders
        - Do not remove the outline!

- placeholder text? There's a style for that!
        - `::placeholder` pseudo-element can be used for styling
        
- 3 new attributes for inputs!
        - value
                - Sets a default value for a form input
        - disabled
                - Sets a form input to be disabled
                - Disabled fields are not even focusable
                - By default, these are styled darker
        - readonly
                - Sets a form input to be read only
                - Readonly fields are enabled, you can focus them, but not edit

