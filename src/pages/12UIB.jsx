export default function UIB12() {
    return <div id="content"><h1>UIB content 2</h1>
<h2>New CSS Stuff!</h2>
<ul>
<li>Elements with an "id" attribute<ul>
<li>New HTML attribute called <code>id</code></li>
<li>One element can only have one ID</li>
<li><em>Unique</em>: One ID <em>SHOULD</em> only be used by one element in an HTML file</li>
<li>Values are alphanumeric (alphabet and numbers)</li>
<li>Avoid ü ö ä etc, keep them from a to z (american alphabet...)</li>
<li>Generally, these tend to be in english</li>
<li>It's good to keep them descriptive, even if they are a bit long</li>
<li>Getting more rare, still used but not super much</li>
<li>ID is more powerful than the class when it comes to CSS</li>
<li>ID CSS overrules class CSS</li>
</ul>
</li>
<li>Elements with "class"<ul>
<li>New HTML attribute called <code>class</code></li>
<li>You can have multiple elements in the same HTML file with the same class</li>
<li>You can have multiple classes in the same HTML element (tag)<ul>
<li>Different classes for one element are separated with a space<ul>
<li>For example: <code>class="important hilight"</code></li>
</ul>
</li>
</ul>
</li>
<li>Values are alphanumeric (alphabet and numbers)</li>
<li>Avoid ü ö ä etc, keep them from a to z (american alphabet)</li>
<li>Generally, these tend to be in english</li>
<li>It's good to keep them descriptive, even if they are a bit long</li>
<li>Much more popular</li>
</ul>
</li>
<li>CSS Selectors<ul>
<li>ID: <code>id="title"</code> --&gt; <code>#title</code></li>
<li>Class: <code>class="important"</code> --&gt; <code>.important</code></li>
</ul>
</li>
</ul>
<h2>New css selector type</h2>
<ul>
<li>"Descendent combinator" CSS selector</li>
<li>Looks like this: <code>ol li { color: blue; }</code><ul>
<li>Here "li" is descended from "ol"</li>
</ul>
</li>
</ul>
<h2>NEW CSS!</h2>
<ul>
<li><code>font-weight</code> -- defines the font weight<ul>
<li>Values are usually "bold" or "normal", but can be "bolder" for example</li>
</ul>
</li>
<li><code>background-color</code> -- defines the background color<ul>
<li>Used like "color"</li>
</ul>
</li>
<li><code>list-style-type</code> -- defines how the "bullet points" of a LIST look like<ul>
<li>Values like <code>circle</code> and <code>square</code></li>
<li>Also values like <code>"- "</code> work too!<ul>
<li>Any text characters</li>
<li>Emojis are normal text characters! (Unicode)</li>
<li>😺</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2>HTML - (hyper)links</h2>
<ul>
<li>Anchor element: <code>&lt;a&gt;</code><ul>
<li>"a" is the element</li>
<li>"<a>" is the tag</li>
</ul>
</li>
<li>The target of a link is defined in an attribute called <code>href</code><ul>
<li><code>&lt;a href="staff.html"&gt;Staff&lt;/a&gt;</code></li>
</ul>
</li>
<li>Originally used just for jumping around inside one file, kind of like bookmarks inside a PDF<ul>
<li>Still can be used in this way by referencing IDs!</li>
<li><code>&lt;a href="top"&gt;Click to go up&lt;/a&gt;</code></li>
</ul>
</li>
<li>Now, more commonly they link between files<ul>
<li><code>&lt;a href="staff.html"&gt;Staff&lt;/a&gt;</code></li>
</ul>
</li>
<li>Can be used to link between different websites! (External sites)<ul>
<li><code>&lt;a href="https://wwww.google.de/"&gt;Googl&lt;/a&gt;</code></li>
</ul>
</li>
<li>Can also be used to trigger different kinds of functionality, like sending an email<ul>
<li><code>&lt;a href="mailto:joel.peltonen@gmail.com"&gt;Email Joel&lt;/a&gt;</code><ul>
<li>mailto is a protocol!</li>
<li>the href here is a URI (Universal Resource Identifier)</li>
<li>Not a URL</li>
</ul>
</li>
<li>Other protocols (many!) exist as well, such as "tel"</li>
</ul>
</li>
</ul>
<h2>Color in CSS</h2>
<ul>
<li>Colors can be defined in many ways<ul>
<li>Named colors / keywords: pink, blue, purple, silver, palegoldenrod...</li>
<li>Hex colors / Hexadecimal colors: #FF   00     00
                                   255   00     00
                                   RED   GREEN  BLUE</li>
<li>rgb(255, 0, 0);</li>
</ul>
</li>
<li>Transparency<ul>
<li>CSS property<ul>
<li><code>opacity</code> -- "How opaque something is"</li>
<li>Ranges from 1.00 to 0.00, for example "0.50"</li>
</ul>
</li>
<li>CSS color<ul>
<li>rgba - Red,   Green,  Blue,   Alpha
         0-255, 0-255,  0-255,  0-1</li>
</ul>
</li>
</ul>
</li>
<li>Other color schemes<ul>
<li>Self study</li>
<li>CMYK</li>
<li>HSL</li>
<li>HSLA</li>
</ul>
</li>
</ul>
<h2>Important!</h2>
<pre><code>In CSS it matters in what order your declarations are in
</code></pre>
<h2>CSS Pseudo classes</h2>
<ul>
<li>link states are a great example of these!<ul>
<li>visited link<ul>
<li>CSS with pseudoclass: <code>a:visited { color: black; }</code></li>
</ul>
</li>
<li>active link<ul>
<li>CSS with pseudoclass: <code>a:active { color: black; }</code></li>
</ul>
</li>
<li>hovered link#<ul>
<li>CSS with pseudoclass: <code>a:hover { color: red; }</code>+</li>
</ul>
</li>
</ul>
</li>
<li>Try out link pseudoclass styles in different orders<ul>
<li>visited after active</li>
<li>active after visited</li>
<li>hover before either</li>
<li>hover after either </li>
<li>etc</li>
<li>the order matters!</li>
</ul>
</li>
</ul>
    </div>
}