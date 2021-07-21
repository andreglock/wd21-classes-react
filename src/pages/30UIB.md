# UIB - Layouts - Grid 2

## Recap of grid 1

- `display:grid;`
- `grid-template-columns: 100px 1fr 2fr;`
   - Defines How many and How wide columns does the grid have
- `grid-template-rows: 1fr 1fr 2fr 1fr 1fr:`
- `grid-auto-rows: 100px;`
    - Defines row height
- `grid-auto-rows: minmax(100px, auto);`
- `gap: 1em;`
- Not related to grid `background-attachment: fixed;`

## CSS Grid on child elements (grid items)

- Terminology
    - grid cell
    - grid area
    - grid line !
    - grid track (row or a column; space between two lines)
    - grid row = horizontal track
    - grid column = vertical track
    - gutter = gap between tracks

- CSS targeting a specific child / grid item / grid cell
    - `grid-column: 1 / 3;`
        - Make this cell start from column line 1 and end in column line 3 (takes up two vertical tracks)
        - "span" keyword - these are exactly the same
            - grid-column: 2 / 4;
            - grid-column: 2 / span 2;
    - `grid-row: 1 / 3;`
        - Make this cell start from row line 1 and end in row line 3 (takes up two horizontal tracks)
    - Named grid lines!
        - `grid-template-columns: [foo] 1fr 1fr 2fr [bar];`
        - `grid-column: foo / bar;`
    - Cell overlap
        - Two cells can overlap:
                ```
                #box4 {
                    grid-column: 1 / 3;
                    grid-row: 2 / 4;
                }

                #box5 {
                    grid-column: 2 / 4;
                    grid-row: 2 / 3;
                }
                ```
        - If possible, grid tries to avoid overlaps automatically
    - Note: Tetris shapes are not possible
