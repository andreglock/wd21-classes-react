# UIB10 - UI/UX - Intro to UI / UX Again!

## *Interface*

- Boundary between two separate concepts / components
    - Person / Information about a company
    - Person / Computer —> Mouse, Keyboard (Human Interface Device)
    
## User Interface (UI)- Human - Computer interaction

- Human and a website
    - Visual (to see, a Graphical User Interface [*GUI*])
    - Tactile (to touch, Phone tactile feedback and Braille displays)
    - Auditory (to hear)
- Websites are interfaces between people and information

## User eXperience (UX)

See link at [https://userinyerface.com/game.html](https://userinyerface.com/game.html)

## Fonts (continued)

Different faces for different meanings, font styles:

- Serif
    - Has serifs
    - "look authoritative, professional, suggest the weight of history or experience" - Adobe
    - Often used in the body of newspapers and articles
    - Can be more readable when there is very little room or the font is small
- Sans Serif
    - Does not have serifs
    - Hard, minimalistic, modern feeling
    - "Maybe a bit overused" - Joel
    - Take up less space (narrower than serif)
- Monospace
    - Code
    - ASCII art
    - Data tables and lists
- Cursive
    - Real pretty
    - Soft
    - Modern or old looking
    - Visual selection
- Symbol
    - Icons for example or emojis (windings for example)
    - Pictures or pictographs instead of letters
        - Meaning that letters are rendered as little text-images
- Emoticons / Emoji are just unicode symbols similar to "A" or "7"
    - Some fonts support these, some dont
    - When a symbol is not supported by a font your browser tries to use some other font
        - (Or fails miserably) - in the olden days Heikki Täkäläinen —> Heikki T?k?l?inen
- Choosing a font is a part of your UX / UI Design
    - Mixing fonts is OK!
        - For example: Sans-serif for headings, Serif for paragraphs
- `font-family`
    - Pre-installed system fonts: May not work for everybody, so use generics or fallbacks
        - Fallback fonts; "font1", "banana revolution", "Arial"
        - Generics: sans-serif, serif, monospace
    - Using your own fonts injected via link or @import - they will just work
- CSS `:root` pseudo-class
    - Targets whatever the root element is
    - Often used to define the default font
- Getting more fonts: use @import or <link>
    - the @import(s) needs to be before anything else in your CSS
    - `@import "common.css" screen;`
    - `@import "print.css" print;`

## Icon font example - Fontawesome    

    *NOTE* We are looking at *version 4* of Fontawesome.
    Icon font, often used in websites
    Icon fonts are popular because they load quickly, they are vectors (scalable)