export default function UIB19() {
    return <div id="content"><h1>UIB10 - UI/UX - Intro to UI / UX Again!</h1>
<h2><em>Interface</em></h2>
<ul>
<li>Boundary between two separate concepts / components<ul>
<li>Person / Information about a company</li>
<li>Person / Computer —&gt; Mouse, Keyboard (Human Interface Device)</li>
</ul>
</li>
</ul>
<h2>User Interface (UI)- Human - Computer interaction</h2>
<ul>
<li>Human and a website<ul>
<li>Visual (to see, a Graphical User Interface [<em>GUI</em>])</li>
<li>Tactile (to touch, Phone tactile feedback and Braille displays)</li>
<li>Auditory (to hear)</li>
</ul>
</li>
<li>Websites are interfaces between people and information</li>
</ul>
<h2>User eXperience (UX)</h2>
<p>See link at <a href="https://userinyerface.com/game.html">https://userinyerface.com/game.html</a></p>
<h2>Fonts (continued)</h2>
<p>Different faces for different meanings, font styles:</p>
<ul>
<li>Serif<ul>
<li>Has serifs</li>
<li>"look authoritative, professional, suggest the weight of history or experience" - Adobe</li>
<li>Often used in the body of newspapers and articles</li>
<li>Can be more readable when there is very little room or the font is small</li>
</ul>
</li>
<li>Sans Serif<ul>
<li>Does not have serifs</li>
<li>Hard, minimalistic, modern feeling</li>
<li>"Maybe a bit overused" - Joel</li>
<li>Take up less space (narrower than serif)</li>
</ul>
</li>
<li>Monospace<ul>
<li>Code</li>
<li>ASCII art</li>
<li>Data tables and lists</li>
</ul>
</li>
<li>Cursive<ul>
<li>Real pretty</li>
<li>Soft</li>
<li>Modern or old looking</li>
<li>Visual selection</li>
</ul>
</li>
<li>Symbol<ul>
<li>Icons for example or emojis (windings for example)</li>
<li>Pictures or pictographs instead of letters<ul>
<li>Meaning that letters are rendered as little text-images</li>
</ul>
</li>
</ul>
</li>
<li>Emoticons / Emoji are just unicode symbols similar to "A" or "7"<ul>
<li>Some fonts support these, some dont</li>
<li>When a symbol is not supported by a font your browser tries to use some other font<ul>
<li>(Or fails miserably) - in the olden days Heikki Täkäläinen —&gt; Heikki T?k?l?inen</li>
</ul>
</li>
</ul>
</li>
<li>Choosing a font is a part of your UX / UI Design<ul>
<li>Mixing fonts is OK!<ul>
<li>For example: Sans-serif for headings, Serif for paragraphs</li>
</ul>
</li>
</ul>
</li>
<li><code>font-family</code><ul>
<li>Pre-installed system fonts: May not work for everybody, so use generics or fallbacks<ul>
<li>Fallback fonts; "font1", "banana revolution", "Arial"</li>
<li>Generics: sans-serif, serif, monospace</li>
</ul>
</li>
<li>Using your own fonts injected via link or @import - they will just work</li>
</ul>
</li>
<li>CSS <code>:root</code> pseudo-class<ul>
<li>Targets whatever the root element is</li>
<li>Often used to define the default font</li>
</ul>
</li>
<li>Getting more fonts: use @import or <link><ul>
<li>the @import(s) needs to be before anything else in your CSS</li>
<li><code>@import "common.css" screen;</code></li>
<li><code>@import "print.css" print;</code></li>
</ul>
</li>
</ul>
<h2>Icon font example - Fontawesome</h2>
<pre><code>*NOTE* We are looking at *version 4* of Fontawesome.
Icon font, often used in websites
Icon fonts are popular because they load quickly, they are vectors (scalable)
</code></pre>
    </div>
}