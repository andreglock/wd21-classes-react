export default function UIB31() {
    return <div id="content"><h1>Interactions</h1>
<h2>Fancy shapes</h2>
<ul>
<li><em>Not super duper important, but good to know</em></li>
<li>Very cool looking shapes are possible</li>
<li>
<p>We already know a few shapes we can use</p>
<ul>
<li>https://css-tricks.com/the-shapes-of-css/</li>
<li>Simple width, height, border(s) and positioning</li>
<li>Box, rectangle, circle, ovals, pills</li>
<li>
<p>Triangle</p>
<pre><code>width: 0px;
height: 0px;
border-top: 0px solid transparent;
border-left: 50px solid transparent;
border-right: 50px solid transparent;
border-bottom: 100px solid blue;
</code></pre>
</li>
<li>
<p>Trapezoid</p>
<pre><code>width: 60px;
height: 0px;
border-top: 0px solid transparent;
border-left: 50px solid transparent;
border-right: 50px solid transparent;
border-bottom: 100px solid blue;
</code></pre>
</li>
<li>
<p>Star</p>
<pre><code>.box {
    width: 0px;
    height: 0px;
    margin: auto;

    border-top: 0px solid transparent;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid darkred;
}

.box::after {
    content: "";

    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 100px solid red;
    position: relative;
    left: -50px;
    top: 130px;
}
</code></pre>
</li>
</ul>
</li>
<li>
<p><code>clip-path</code></p>
<ul>
<li>https://bennettfeely.com/clippy/</li>
<li>Can be applied to regular old elements</li>
<li><code>clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);</code></li>
</ul>
</li>
<li>
<p><code>transform</code></p>
<ul>
<li>Allows you to transform an element in various ways</li>
<li><code>transform: rotate(33deg);</code> (turns and degrees)</li>
<li><code>transform: scale(0.9);</code>, <code>transform: scale(1.1)</code></li>
<li><code>transform: translateX(-10px)</code></li>
<li><code>transform: scale(0.5) rotate(10deg);</code> - two at a time!</li>
</ul>
</li>
<li>
<p><em>Self study</em> </p>
<ul>
<li>MDN transforms page for more advanced shapes</li>
<li>https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms</li>
</ul>
</li>
</ul>
    </div>
}