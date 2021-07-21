# Lessons - UI UX - Direction and stylish

## Text Direction

- Writing text from Left to Right and Right to Left
    - Hebrew or Arabic
    - HTML `dir="rtl"`
        - Inherited from parent to children!
    - CSS `direction: rtl;`
    - Default is `ltr`
    
## Text Alignment

- Align text with
    - `text-align: center;`
    - `text-align: justify;`
    - `text-align: right;`
    
## Stylish text

- `font-weight`
    - normal, bold
        - 100
        - 200
        - 300
        - 400 — "normal"
        - 500
        - 600
        - 700 — "bold"
        - 800
        - 900
    - Which ones work, depends on the font **family**
        - "Arial"
- `font-style`
    - italic, normal are the usual values
    - ~~"oblique" exists, rarely used~~
- `text-decoration`
    - `text-decoration: underline;` is a shorthand
        - `text-decoration-line`
        - `text-decoration-color`
        - `text-decoration-style`
    - `green wavy underline`
    - `underline overline blue`
    - `line-through`
- `text-transform`
    - uppercase, lowercase, capitalize
- `text-shadow`
    - `1px 2px 26px #ff0000`
        - 1px offset to the right
        - 2px offset to the bottom
        - 26px blur amount
        - #ff0000 color
- `::before` , `::after`, `content`
    - before and after are pseudo-elements
        - two colons for pseudo-elements
        - one colon for pseudo-classes
    - content defines some kind of content in relation to the selector