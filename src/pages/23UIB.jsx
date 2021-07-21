export default function UIB23() {
    return <div id="content"><h1>UI Basics - data - Tables are awesome!!</h1>
<h2>Organizing Data in Tables</h2>
<ul>
<li>Tables are only for tabular data, never for layout</li>
<li>This was done back in the bad old days, even before float layouts</li>
<li>Bad for accessibility, Not flexible</li>
<li>Elements</li>
<li><code>&lt;table&gt;</code> -&gt; element that has <code>display: table</code> and is semantically a table</li>
<li><code>&lt;tr&gt;</code> and <code>&lt;td&gt;</code></li>
<li><code>&lt;thead&gt;</code></li>
<li><code>&lt;tbody&gt;</code></li>
<li><code>&lt;tfoot&gt;</code></li>
<li><code>&lt;th scope=[...]&gt;</code><ul>
<li>scope used just for screen readers, but can be targeted with CSS attribute selectors</li>
</ul>
</li>
<li>Faker VSCode extension</li>
<li>Spanning rows and columns - <code>&lt;td rowspan=""...""&gt;</code>, <code>&lt;td colspan=""...""&gt;</code></li>
<li><code>&lt;caption&gt;</code> (optional)</li>
<li>Don't use the border="" attribute (or other deprecated attributes)</li>
</ul>
<h2>Styling Tables</h2>
<ul>
<li>Borders with css</li>
<li>border-collapse: collapse; OR border-spacing: 0.5rem; &lt;-- for the table</li>
<li>
<p>border: 1px solid #999; &lt;-------------------------------- for the cells</p>
</li>
<li>
<p>Zebra stripes using <code>pseudo child selectors</code></p>
</li>
<li>Pseudo child selectors (tr:first-child means that when the TR is the first child)</li>
<li><code>:first-child</code></li>
<li><code>:last-child</code></li>
<li>
<p><code>:nth-child() { ... }</code></p>
<ul>
<li>even, odd, 3, 3n, 3n+1</li>
<li>for example
    tr:nth-child(even) td {
        background-color: #ddd;
    }</li>
</ul>
</li>
<li>
<p>Easy (easier) layout with <code>table-layout: fixed</code></p>
</li>
<li>Additional info with <caption>
    <table style="caption-side: bottom;">
      <caption>Table 1.1 Customers</caption>
      <tr>
      ---</li>
<li>Caption placement with <code>caption-side</code> bottom/top</li>
</ul>
<p><strong>Further reading</strong>
  https://css-tricks.com/complete-guide-table-element/
  https://css-tricks.com/fixing-tables-long-strings/</p>
    </div>
}