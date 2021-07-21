# UIB - Images

## Basic HTML, CSS with images
- Downloading images
    - Context menu depends on what thing you rightclicked
    - Normal images have a "Save image as" option
- Normal HTML images: `<img src="image.jpg2" alt="Here!">`
    - The ALT attribute is important
        - Provides a text alternative if the image doesn't work
        - Especially needed if the user has a screen reader
        - If the image is broken or loads very very slowly, this can provide context too
- Width and height
    - You can add width and height as attributes
        - `<img src="image.jpg" alt="Here!" width="200" height="100">`
            - No units!
        - Width/height when give as attributes (inline) they generally should be the real sizes of the image
            - Often used when images are part of the content
        - The space for the image is reserved
    - You can also use CSS to size images
        - Even when they have an inline size definition!
        - CSS overrules HTML width/height
    - In the real world, in perfect examples, you have both defined
        - This is optimal for making the site work in all cases
    - Avoid having huge images squeezed into small spaces
        - This makes websites load very slowly
        - Depending on the situation, you can have different sizes for the same images
- Absolute and relative paths
    - Absolute: Works from anywhere (on your own website)
        - Full URL
        - `<img src="https://www.example.org/image.jpg" alt="Example images!" width="200" height="100">`
    - Relative:
        - Relative to the current URL
        - Local URL
        - `<img src="./../pics/image.jpg" alt="Example images!" width="200" height="100">`


## New CSS!
- Borders!
    - Rule: `border`
    - Value: `[width] [style] [color]`
    - Width can be defined with `px`, `rem`, `em` etc CSS units
    - Style is mandatory
        - solid
        - dashed
        - dotted
        - double
        - groove
        - etc
    - Color is optional, defaults to current font color
        - Use the usual CSS color rules (named, hex, rgb, etc...)
    - Can be defined separately as well
        - `border-color`
        - `border-width`
        - etc
- Border radius!
    - `border-radius: 15px;`
    - most commonly done with pixels or with percentages
        - `border-radius: 50%` - very common with profile pictures
    - Value can be defined separately for the corners
    - `border-radius: 15px 5px 15px 5px;`
    - `border-radius: 40% 15%;`
- Object-fit and Width AND height
    - for example, an image within a parent div
    - makes the image fit in the specified way
    - `object-fit`, `width` and `height` are used together
    - https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit

        ```
        <div style="border: 1px solid red; width: 90vw; height: 200px;">
            <img
                src="https://placekitten.com/500/200"
                alt="Kitten"
                style="object-fit: cover; width: 100%; height: 100%;"
            >
        </div>
        ```
    - Can be used for other things than images too (videos)
- Image links
    - Just wrap an image with an `a` link tag
- Using float
    - CSS `float`
    - "float" is a thing that was designed to wrap text around an image
    - Mostly to be used when you control the image and the text
    - Avoid using float for _anything_ else (design)

## Image formats

Most common and important formats used in the web

    - JPG
        - Raster
        - Binary files
        - This compression works best for photos
    - PNG
        - Raster
        - Binary files
        - This compression works best for logos/cartoons/screenshots/gradients etc (not photos)
        - Can be transparent
        - Can be animated (rare, sometimes .apng or .mpng etc)
    - GIF
        - Raster
        - Binary files
        - Can be transparent
        - Can be animated
    - SVG
        - Inline or Normally
        - Just text files (XML)
        - Vector
        - Can be transparent
        - Can be animated (with CSS or JavaScript)





## Quick into to GIMP
- Basic image manipulation
    - Crop
    - Draw
    - Export
    - Color picker
    - Add text
    - Work with layers
    - Resizing an image to create a thumbnail (scaling)
- Raster files!
- No animation
- In Ubuntu; the screenshot tool is nice!



## Core CSS Basic awesome greatness
- More specific selectors
- Descendant selector example: `#mainpage p { color: red; }`
    - All paragraphs descended from the #mainpage element
- Comma separated selectors: `.fool, p { color: blue; }`
    - All elements with the class "fool" and all paragraphs
- To change the mouse cursor: `cursor: pointer;`
- To change the text style: `text-decoration: underline;` (or none)






