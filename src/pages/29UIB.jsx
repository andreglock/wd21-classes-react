export default function UIB29() {
    return <div id="content"><h1>UIB - Layout - Grid 1</h1>
<h2>CSS Grid on parent elements</h2>
<ul>
<li>The grid is quite new, browser support added 2017</li>
<li>Grid is similar to flexbox, but more powerful</li>
<li>Easy to learn, maybe a bit difficult to master</li>
<li>
<p>Both grid and flexbox are part of CSS</p>
<ul>
<li>There is no need to abandon one for the other</li>
<li>Flexbox is one-dimensional</li>
<li>Grid is two-dimensional-  </li>
</ul>
</li>
<li>
<p><code>display: grid;</code></p>
<ul>
<li>Defines an element to be a grid container</li>
<li>Its children become grid items</li>
</ul>
</li>
<li><code>grid-template-columns: 1fr 2fr 1fr;</code><ul>
<li>Defines the width and number of columns</li>
<li>The column widths accept CSS units</li>
<li>The unit most used with grids is "fr" (fraction)</li>
<li>When using fr, the widths are automatically calculated</li>
<li>Fr is recommended over percentages due to margin/padding issues</li>
</ul>
</li>
<li><code>gap: 1em;</code> - defines the space between elements</li>
<li><code>grid-auto-rows: 100px;</code> - defines row height, overflow danger!</li>
<li><code>grid-auto-rows: minmax(100px, auto);</code><ul>
<li>Defines the minimum and the maximum row height</li>
<li>"auto" is the default, means height grows with content</li>
</ul>
</li>
<li>You can use minmax with <code>grid-template-columns: ;</code> too!<ul>
<li><code>grid-template-columns: minmax(50px, 100px) 1fr 200px;</code></li>
</ul>
</li>
<li><code>background-attachment: fixed</code> looks super good!</li>
</ul>
    </div>
}