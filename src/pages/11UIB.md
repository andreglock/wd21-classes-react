# UIB Content - part 1

## Separation of concerns

- It is a good idea to keep structure (HTML) and visuals (CSS) separate
    - Separate people often work on these
    - Better organization
    - With external CSS; you only have to update one place
    - It is also faster to load websites when the files are separate (cache; caching)
    - It's clearer

- ! CONTENT IS KING !
    - With the exception of art websites, the content is what truly matters most
    - Generally, it is better to have fantastic content than fantastic visuals
    - However, visuals make the content better too!
    - The structure of content is important for Search engines and humans
    - HTML and CSS are *strongly* connected, and sometimes HTML needs to accommodate CSS

- Semantics
    - The art of using the right tag in the right place
    - This can be difficult, depends on the situation
    - Let us strive to do our best and select good elements!

- This is where as a developer you develop your own skills with experience a lot!

## HTML Continued
- `title` HTML attribute, can be used in Many different tags (such as `p`)
- `<br>` - Break row, mostly used inside paragraphs
- `<hr>` - Horizontal rule, it draws a line! Useful for separating content
- `<pre></pre>` - Preformatted text!
    - By default, uses a Monospaced font
    - Preserves whitespace
    - Often used for text art for example
- LISTS
    - `<ul>` Unorganized list
    - `<ol>` Organized list
    - `<li>` List item
    - Often nested within each other!
- Often projects or companies have their own style guide
    - For example https://google.github.io/styleguide/htmlcssguide.html
    - Personally, I just use my own judgement
    - HTML style varies a bit from developer to developer
    - Old project? Follow the style that is already there
- Indentation and nice code is important
- Especially when looking at the original source

## CSS - "Cascading Style Sheets"
- Three types
    - External (link tag)
    - Internal (style tag)
    - Inline (style attribute)
- Example: `p { color: red; }`
    - Here `p` is a selector
    - Here `{ color: red; }` is the declaration
    - Here `color` is the property
    - Here `red` is the value
- CSS can be applied in multiple different ways at the same time
    - (internal, external and inline)
    - example: dw.com has all three in use at the same time
- New thing: commenting out CSS code!
    - Use this style: /* CSS here */
    - VSCode shortcut: Ctrl + Shift + 7
- Reminder: "Cascading"
    - Styles cascade down from parent element to descendants
    - For example, the Body can have a red color
    - And then all of its descendents will also be red
