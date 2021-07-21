export default function UIB21() {
    return <div id="content"><h1>UIB - FontAwesome &amp; Boxes revisited</h1>
<h2>Fontawesome revisited</h2>
<ul>
<li>Conveys meaning without text using icons</li>
<li>Register and sign in to use the easy method of injecting a script and FA "just works"<ul>
<li>OR: Download FA locally and use (link) it like any other CSS file (the fonts will be included automatically then too)</li>
</ul>
</li>
<li>Note! You have to use the correct code (like Joel did not, thanks Rudesh!)</li>
<li>FontAwesome is a Font icon library - fonts are vectors!</li>
<li>Not the only Icon Font Library<ul>
<li>Self-study: alternatives to FA; flaticon, thenounproject.com</li>
</ul>
</li>
</ul>
<h2>Everything is a Box!</h2>
<ul>
<li>The Box Model</li>
<li>Boxes are made up of a few different parts inside out:<ul>
<li>Content / Content area</li>
<li>Padding</li>
<li>Border</li>
<li>Margin</li>
</ul>
</li>
<li>When we define a CSS box width, it targets the content area (padding, border, margin are not counted as the width)</li>
<li>IF we use <code>box-sizing: border-box</code> - the padding and border are included in the width</li>
<li>Different types of boxes<ul>
<li>Block (Block-level elements)<ul>
<li>div, p, section, h1...</li>
</ul>
</li>
<li>Inline (elements)<ul>
<li>b, i, span, a, strong, em...</li>
<li>In line with text, like a part of text</li>
<li>Cannot have height, width</li>
<li>Padding and margin work, but top and bottom don't move other content away</li>
</ul>
</li>
<li>Inline blocks<ul>
<li>Mostly done ourselves with CSS</li>
<li>Can have height, width</li>
<li>Padding, margin work</li>
<li><code>vertical-align: middle</code><ul>
<li>Aligns the inline-block  element within its current line of text (often moves the line of text a bit too!)</li>
</ul>
</li>
</ul>
</li>
<li>(((( Some blocks behave like in between inline amd inline-blocks, like images ))))</li>
</ul>
</li>
</ul>
    </div>
}