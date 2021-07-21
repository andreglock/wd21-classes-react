export default function UIB16() {
    return <div id="content"><h1>UIB - Fonts and boxes</h1>
<h2>Quick tip</h2>
<ul>
<li>Google Fonts for custom fonts</li>
</ul>
<h2>Everything is a box!</h2>
<ul>
<li>Easy to see with inspecting and setting Dev tools CSS</li>
<li><code>* { border: 1px solid red !important; }</code></li>
<li><code>div { border: 1px solid blue !important; }</code></li>
<li><code>span { border: 1px solid green !important; }</code></li>
</ul>
<h2>Containing content</h2>
<ul>
<li>Semantic elements, let's learn a few</li>
<li><code>&lt;main&gt;</code></li>
<li>represents the main content of a page</li>
<li>often combined with "skipnav" technique</li>
<li>nav = your navigation menu<ul>
<li><code>&lt;nav&gt;</code> - semantic element used for wrapping your navigation section</li>
</ul>
</li>
<li>used for wrapping your main content</li>
<li>"shrink wrapping" / wrapping<ul>
<li>put all of your content inside the main</li>
</ul>
</li>
<li>often you can have classes and/or ids for your main element<ul>
<li><main class="container"></main></li>
</ul>
</li>
<li>One (visible) main per page</li>
</ul>
<h2>Stop content busting out of its box!</h2>
<pre><code>width: 40vw;       /* Set box width */
height: 40vh;      /* Set box height */
margin: auto;      /* Center this box inside its parent box */
overflow: hidden;  /* Prevent content from overflowing out of the box! */
</code></pre>
<h2>Elements</h2>
<ul>
<li>Two types of elements</li>
<li>Block<ul>
<li>Always start (on) a new line</li>
<li>Take up the full width available</li>
<li>stretch out to the left and to the right as much as they can</li>
<li>meaning it has a width of 100% by default</li>
<li>the height is defined by the content automatically OR by the developer</li>
</ul>
</li>
<li>Inline<ul>
<li>Start within an existing block-level element (they don't start a new line)</li>
</ul>
</li>
</ul>
<h3>BLOCKS</h3>
<ul>
<li>main, nav, div, p, hr, lists(ul, ol, li), h1-h6, pre</li>
<li><section><ul>
<li>a section of the page which doesn't have a more specific semantic element to use</li>
<li>often these would have a heading</li>
</ul>
</li>
<li><article><ul>
<li>a self-contained composition in a page, which is intended to be independently redistributable or reusable</li>
</ul>
</li>
<li><aside><ul>
<li>a part of a document where the content is only indirectly related to the main content</li>
</ul>
</li>
<li><header><ul>
<li>defines the top part of a page</li>
<li>often repeated in many pages</li>
</ul>
</li>
<li>
<footer>
<ul>
<li>defines the bottom part of a page</li>
<li>often repeated in many pages</li>
</ul>
</li>
<li>
<p>SO SO SO MANY MORE!</p>
</li>
</ul>
<h3>INLINE</h3>
<ul>
<li>span, a, em, br, img</li>
<li>strong, b</li>
<li>sup and sub</li>
<li>input</li>
</ul>
<p><strong>You do not need to know all of these</strong></p>
<p><strong>Self-learning</strong> Have a look at MDN to see what Block and Inline elements exist</p>
    </div>
}