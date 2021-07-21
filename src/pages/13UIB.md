# UIB day 4

## Updating a forked repository from the original
 - Automatic
    - Create a new Pull Request in GitHub
    - Click on "Switch base", if it is available to you#
    - After merging the Pull Request, update your local repository using git pull
 - Manual
    - Copy the changes manually
    - use git commands (Search Google for assistance here)

## CSS Units
 - CSS has a lot of units to use
 - We will be looking at "px", "%", "em", "rem", "vw", "vh"
 - New CSS: `width`, `height`, `font-size`
 - New HTML: `<div>`
    - No semantic meaning
    - Container element, wrapper
    - Often deeply nested
    - Very very common in the real world
- Pixels or `px`
    - Static length or static size
    - Basically, these are the unit of the web
    - Reference pixels, Not Device pixels
        - Mobile phone with 4k
        - https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel
        - Affected by zoom!
    - Values smaller than one pixel can exist and are fairly common
        - For example `font-size: 15.2px;`
- Percentages or `%`
    - Dependant on the parent
    - Dynamic length or dynamic size
    - Affected by zoom levels
    - You can be more accurate than 1%, so "50.04%" is valid
- For most users, the default font size of a browser is "16px"
    - The root font size of a page is defined by the `<html>` element
    - You can define this yourself with CSS
    - The font settings _cascade_ down from the `<html>` element
- Font size with percentages
    - Like widths, these are dependent on the parent!
    - Gets complicated with nesting!

- `em` and the `rem` units
    - Typography units
    - Often used in font sizing, very useful there
    - Not common for defining layouts
        - Except for a few exceptions
    - Units that come from typesetting originally
    - rem - "root em" units
        - Relative to root font size
        - Can be tricky to design around if you don't have a set root font size
            - Users might have different default font sizes
        - A size that is relevant to the ROOT font size
        - Can be thought of as percentages relevant to the root font size
            - `1.2rem` is 120% of the root font size
            - `0.5rem` is 50% of the root font size
            - `.5rem`  is 50% of the root font size
            - `1.337rem` is 133.7% of the root font size
        - Common for especially font sites
        - Sometimes used for icon sizes as well
    - em - "em" units
        - Relative to parent font size
        - If the parent font size is "20px"
            - 0.1em == 2px (10% of 20px)
            - 1em == 20px (100% of 20px)
            - 2em == 40px (200% of 20px)
        - Pretty much the same as percentages when it comes to font size
            - 1em works exactly like 100% *for text*
        - Originally from how wide the "M" character is for a font
        - Now in CSS it is just the font size
        - Good use case: Icon images inside text elements
            - Relevant to the text size of the parent

- `vw` -  `vh`
    - percentages of the viewport height and width in pixels
    - values from 0 to 100
    - viewport width
        - sizing relative to the viewport width
        - the parent size does not matter
    - viewport height
        - sizing relative to the viewport height
        - the parent size does not matter
    - Commonly used in creating full screen landing pages
    - Also commonly used in full screen elements, such as
        - cookie warnings
        - overlay images
        - overlay dialogs
    - Also commonly used in positioning

## Developer Tools! Devtools! Browser tools! Developer console!
- Right click an element on the page and select "Inspect element" from the context menu
- Alternatively, press F12 on your keyboard
- Can be positioned in the bottom or the right of your browser
- Can be detached and exist in a separate window from your browser
- INSPECTOR tab
    - HTML and CSS
    - Edit CSS values
    - Add new CSS rules and values
    - Add new CSS blocks
    - View the computed CSS values for an element
    - View the Font of an element
    - Edit HTML
- NETWORK tab - shows you what is being loaded

*Task time here*

- Let us have a look at the CNN and the Immoscout24 websites