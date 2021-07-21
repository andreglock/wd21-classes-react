export default function UIB11() {
    return <div id="content"><h1>UIB Content - part 1</h1>
<h2>Separation of concerns</h2>
<ul>
<li>
<p>It is a good idea to keep structure (HTML) and visuals (CSS) separate</p>
<ul>
<li>Separate people often work on these</li>
<li>Better organization</li>
<li>With external CSS; you only have to update one place</li>
<li>It is also faster to load websites when the files are separate (cache; caching)</li>
<li>It's clearer</li>
</ul>
</li>
<li>
<p>! CONTENT IS KING !</p>
<ul>
<li>With the exception of art websites, the content is what truly matters most</li>
<li>Generally, it is better to have fantastic content than fantastic visuals</li>
<li>However, visuals make the content better too!</li>
<li>The structure of content is important for Search engines and humans</li>
<li>HTML and CSS are <em>strongly</em> connected, and sometimes HTML needs to accommodate CSS</li>
</ul>
</li>
<li>
<p>Semantics</p>
<ul>
<li>The art of using the right tag in the right place</li>
<li>This can be difficult, depends on the situation</li>
<li>Let us strive to do our best and select good elements!</li>
</ul>
</li>
<li>
<p>This is where as a developer you develop your own skills with experience a lot!</p>
</li>
</ul>
<h2>HTML Continued</h2>
<ul>
<li><code>title</code> HTML attribute, can be used in Many different tags (such as <code>p</code>)</li>
<li><code>&lt;br&gt;</code> - Break row, mostly used inside paragraphs</li>
<li><code>&lt;hr&gt;</code> - Horizontal rule, it draws a line! Useful for separating content</li>
<li><code>&lt;pre&gt;&lt;/pre&gt;</code> - Preformatted text!<ul>
<li>By default, uses a Monospaced font</li>
<li>Preserves whitespace</li>
<li>Often used for text art for example</li>
</ul>
</li>
<li>LISTS<ul>
<li><code>&lt;ul&gt;</code> Unorganized list</li>
<li><code>&lt;ol&gt;</code> Organized list</li>
<li><code>&lt;li&gt;</code> List item</li>
<li>Often nested within each other!</li>
</ul>
</li>
<li>Often projects or companies have their own style guide<ul>
<li>For example https://google.github.io/styleguide/htmlcssguide.html</li>
<li>Personally, I just use my own judgement</li>
<li>HTML style varies a bit from developer to developer</li>
<li>Old project? Follow the style that is already there</li>
</ul>
</li>
<li>Indentation and nice code is important</li>
<li>Especially when looking at the original source</li>
</ul>
<h2>CSS - "Cascading Style Sheets"</h2>
<ul>
<li>Three types<ul>
<li>External (link tag)</li>
<li>Internal (style tag)</li>
<li>Inline (style attribute)</li>
</ul>
</li>
<li>Example: <code>p { color: red; }</code><ul>
<li>Here <code>p</code> is a selector</li>
<li>Here <code>{ color: red; }</code> is the declaration</li>
<li>Here <code>color</code> is the property</li>
<li>Here <code>red</code> is the value</li>
</ul>
</li>
<li>CSS can be applied in multiple different ways at the same time<ul>
<li>(internal, external and inline)</li>
<li>example: dw.com has all three in use at the same time</li>
</ul>
</li>
<li>New thing: commenting out CSS code!<ul>
<li>Use this style: /<em> CSS here </em>/</li>
<li>VSCode shortcut: Ctrl + Shift + 7</li>
</ul>
</li>
<li>Reminder: "Cascading"<ul>
<li>Styles cascade down from parent element to descendants</li>
<li>For example, the Body can have a red color</li>
<li>And then all of its descendents will also be red</li>
</ul>
</li>
</ul>
    </div>
}