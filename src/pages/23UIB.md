# UI Basics - data - Tables are awesome!!

## Organizing Data in Tables

- Tables are only for tabular data, never for layout
  - This was done back in the bad old days, even before float layouts
  - Bad for accessibility, Not flexible
- Elements
  - `<table>` -> element that has `display: table` and is semantically a table
  - `<tr>` and `<td>`
  - `<thead>`
  - `<tbody>`
  - `<tfoot>`
  - `<th scope=[...]>`
    - scope used just for screen readers, but can be targeted with CSS attribute selectors
- Faker VSCode extension
- Spanning rows and columns - `<td rowspan=""..."">`, `<td colspan=""..."">`
- `<caption>` (optional)
- Don't use the border="" attribute (or other deprecated attributes)


## Styling Tables

- Borders with css
  -   border-collapse: collapse; OR border-spacing: 0.5rem; <-- for the table
  -   border: 1px solid #999; <-------------------------------- for the cells

- Zebra stripes using `pseudo child selectors`
- Pseudo child selectors (tr:first-child means that when the TR is the first child)
  - `:first-child`
  - `:last-child`
  - `:nth-child() { ... }`
    - even, odd, 3, 3n, 3n+1
    - for example
        tr:nth-child(even) td {
            background-color: #ddd;
        }

- Easy (easier) layout with `table-layout: fixed`
- Additional info with <caption>
    <table style="caption-side: bottom;">
      <caption>Table 1.1 Customers</caption>
      <tr>
      ---
- Caption placement with `caption-side` bottom/top

**Further reading**
  https://css-tricks.com/complete-guide-table-element/
  https://css-tricks.com/fixing-tables-long-strings/
