# UIB content 2

## New CSS Stuff!
- Elements with an "id" attribute
    - New HTML attribute called `id`
    - One element can only have one ID
    - *Unique*: One ID *SHOULD* only be used by one element in an HTML file
    - Values are alphanumeric (alphabet and numbers)
    - Avoid ü ö ä etc, keep them from a to z (american alphabet...)
    - Generally, these tend to be in english
    - It's good to keep them descriptive, even if they are a bit long
    - Getting more rare, still used but not super much
    - ID is more powerful than the class when it comes to CSS
    - ID CSS overrules class CSS
- Elements with "class"
    - New HTML attribute called `class`
    - You can have multiple elements in the same HTML file with the same class
    - You can have multiple classes in the same HTML element (tag)
        - Different classes for one element are separated with a space
            - For example: `class="important hilight"`
    - Values are alphanumeric (alphabet and numbers)
    - Avoid ü ö ä etc, keep them from a to z (american alphabet)
    - Generally, these tend to be in english
    - It's good to keep them descriptive, even if they are a bit long
    - Much more popular
- CSS Selectors
    - ID: `id="title"` --> `#title`
    - Class: `class="important"` --> `.important`

## New css selector type
- "Descendent combinator" CSS selector
- Looks like this: `ol li { color: blue; }`
    - Here "li" is descended from "ol"

## NEW CSS!
- `font-weight` -- defines the font weight
    - Values are usually "bold" or "normal", but can be "bolder" for example
- `background-color` -- defines the background color
    - Used like "color"
- `list-style-type` -- defines how the "bullet points" of a LIST look like
    - Values like `circle` and `square`
    - Also values like `"- "` work too!
        - Any text characters
        - Emojis are normal text characters! (Unicode)
        - 😺

## HTML - (hyper)links
- Anchor element: `<a>`
    - "a" is the element
    - "<a>" is the tag
- The target of a link is defined in an attribute called `href`
    - `<a href="staff.html">Staff</a>`
- Originally used just for jumping around inside one file, kind of like bookmarks inside a PDF
    - Still can be used in this way by referencing IDs!
    - `<a href="top">Click to go up</a>`
- Now, more commonly they link between files
    - `<a href="staff.html">Staff</a>`
- Can be used to link between different websites! (External sites)
    - `<a href="https://wwww.google.de/">Googl</a>`
- Can also be used to trigger different kinds of functionality, like sending an email
    - `<a href="mailto:joel.peltonen@gmail.com">Email Joel</a>`
        - mailto is a protocol!
        - the href here is a URI (Universal Resource Identifier)
        - Not a URL
    - Other protocols (many!) exist as well, such as "tel"



## Color in CSS
- Colors can be defined in many ways
    - Named colors / keywords: pink, blue, purple, silver, palegoldenrod...
    - Hex colors / Hexadecimal colors: #FF   00     00
                                       255   00     00
                                       RED   GREEN  BLUE
    - rgb(255, 0, 0);
- Transparency
    - CSS property
        - `opacity` -- "How opaque something is"
        - Ranges from 1.00 to 0.00, for example "0.50"
    - CSS color
        - rgba - Red,   Green,  Blue,   Alpha
                 0-255, 0-255,  0-255,  0-1
- Other color schemes
    - Self study
    - CMYK
    - HSL
    - HSLA

## Important! 
    In CSS it matters in what order your declarations are in

## CSS Pseudo classes
- link states are a great example of these!
    - visited link
        - CSS with pseudoclass: `a:visited { color: black; }`
    - active link
        - CSS with pseudoclass: `a:active { color: black; }`
    - hovered link#
        - CSS with pseudoclass: `a:hover { color: red; }`+
- Try out link pseudoclass styles in different orders
    - visited after active
    - active after visited
    - hover before either
    - hover after either 
    - etc
    - the order matters!
