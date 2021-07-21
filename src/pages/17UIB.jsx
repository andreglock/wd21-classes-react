export default function UIB17() {
    return <div id="content"><h1>UIB - The Box Model</h1>
<h2>Modeling boxes - the box model</h2>
<ul>
<li>What is the box model?
        - Everything is a box
        - Box model = how to calculate the size of a box
        - Calculated from
                - The content &amp; CSS
                - Padding
                - Border
                - Margin</li>
<li>Measuring box sizes is hard</li>
<li>Having a fluid / dynamic content area is better for the user</li>
<li>
<p>Two ways of calulating box sizes
        - box-sizing: content-box
                - width = content
        - box-sizing: border box
                - width = content + padding + border</p>
<p>&lt;main
  id="main"
  style="
        background-color: lightblue;
        width: 50%;
        padding: 10px;
        border: 10px solid;
        margin: 10px;
        box-sizing: border-box;
  "</p>
<blockquote>
<pre><code>      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus
      unde in sit ullam ut magnam dicta iusto, deleniti asperiores qui? Velit
      nam iure similique ab alias praesentium! Molestias, asperiores! Lorem
      ipsum dolor sit amet consectetur, adipisicing elit. Saepe perferendis, ad
      explicabo maiores magnam amet itaque quos, non ex iusto molestiae
      architecto nobis aliquam sunt incidunt at! Voluptatibus, quam porro.
</code></pre>
</main>
</blockquote>
</li>
</ul>
<h2>Reset CSS</h2>
<pre><code>    - A bit of CSS to reset browser defaults
    - One example:
    - `* { margin: 0; padding; 0; box-sizing: border-box; }`
    - More complex reset CSS definitions help with browser inconsistency
</code></pre>
<h2>CSS shorthand</h2>
<pre><code>    - example: `margin: 10px`
            - margin-top: 10px
            - margin-right: 10px
            - margin-bottom: 10px
            - margin-left: 10px
    - example2: `margin: 10px 5px 0 50%;` - remember: TRouBLe / clockwise
            - margin-top: 10px
            - margin-right: 5px
            - margin-bottom: 0
            - margin-left: 15%
    - example3: `padding: 10px 50px;` - Vertical - Horizontal
            - padding-top: 10px
            - padding-right: 50px
            - padding-bottom: 10px
            - padding-left: 50px
    - border: `border: 1px solid red`
            - border-width: 1px;
            - border-style: solid;
            - border-color: red;
    - other shorthands, such as font amd backgound exist as well
</code></pre>
<h2>Inline vs Block box model</h2>
<ul>
<li>The box model applies to inline elements too! Just a bit differently</li>
<li>Inline elements
        - don't respond to margin-top, margin-bottom, width or height
        - Top and bottom values do not push other elements or rows of text
        - Inline elements are contained vertically in a line of text</li>
<li>Inline vs Block
        - It's just the value of <code>display</code>
        - Inline elements are elements with a "display" value of "inline"
        - Block elements are just elements with a default "display" of "block"
        - You can control this!
        - <code>display: block;</code>
        - <code>display: inline;</code>
        - <code>display: none;</code>
        - <code>display: inline-block;</code>
                - Hybrid between the block and the inline elements</li>
</ul>
    </div>
}