export default function UIB30() {
    return <div id="content"><h1>UIB - Layouts - Grid 2</h1>
<h2>Recap of grid 1</h2>
<ul>
<li><code>display:grid;</code></li>
<li><code>grid-template-columns: 100px 1fr 2fr;</code></li>
<li>Defines How many and How wide columns does the grid have</li>
<li><code>grid-template-rows: 1fr 1fr 2fr 1fr 1fr:</code></li>
<li><code>grid-auto-rows: 100px;</code><ul>
<li>Defines row height</li>
</ul>
</li>
<li><code>grid-auto-rows: minmax(100px, auto);</code></li>
<li><code>gap: 1em;</code></li>
<li>Not related to grid <code>background-attachment: fixed;</code></li>
</ul>
<h2>CSS Grid on child elements (grid items)</h2>
<ul>
<li>
<p>Terminology</p>
<ul>
<li>grid cell</li>
<li>grid area</li>
<li>grid line !</li>
<li>grid track (row or a column; space between two lines)</li>
<li>grid row = horizontal track</li>
<li>grid column = vertical track</li>
<li>gutter = gap between tracks</li>
</ul>
</li>
<li>
<p>CSS targeting a specific child / grid item / grid cell</p>
<ul>
<li><code>grid-column: 1 / 3;</code><ul>
<li>Make this cell start from column line 1 and end in column line 3 (takes up two vertical tracks)</li>
<li>"span" keyword - these are exactly the same<ul>
<li>grid-column: 2 / 4;</li>
<li>grid-column: 2 / span 2;</li>
</ul>
</li>
</ul>
</li>
<li><code>grid-row: 1 / 3;</code><ul>
<li>Make this cell start from row line 1 and end in row line 3 (takes up two horizontal tracks)</li>
</ul>
</li>
<li>Named grid lines!<ul>
<li><code>grid-template-columns: [foo] 1fr 1fr 2fr [bar];</code></li>
<li><code>grid-column: foo / bar;</code></li>
</ul>
</li>
<li>Cell overlap<ul>
<li>Two cells can overlap:
        ```
        #box4 {
            grid-column: 1 / 3;
            grid-row: 2 / 4;
        }<pre><code>#box5 {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
}
```
    - If possible, grid tries to avoid overlaps automatically
- Note: Tetris shapes are not possible
</code></pre>
</li>
</ul>
</li>
</ul>
</li>
</ul>
    </div>
}