export default function UIB20() {
    return <div id="content"><h1>Lessons - UI UX - Direction and stylish</h1>
<h2>Text Direction</h2>
<ul>
<li>Writing text from Left to Right and Right to Left<ul>
<li>Hebrew or Arabic</li>
<li>HTML <code>dir="rtl"</code><ul>
<li>Inherited from parent to children!</li>
</ul>
</li>
<li>CSS <code>direction: rtl;</code></li>
<li>Default is <code>ltr</code></li>
</ul>
</li>
</ul>
<h2>Text Alignment</h2>
<ul>
<li>Align text with<ul>
<li><code>text-align: center;</code></li>
<li><code>text-align: justify;</code></li>
<li><code>text-align: right;</code></li>
</ul>
</li>
</ul>
<h2>Stylish text</h2>
<ul>
<li><code>font-weight</code><ul>
<li>normal, bold<ul>
<li>100</li>
<li>200</li>
<li>300</li>
<li>400 — "normal"</li>
<li>500</li>
<li>600</li>
<li>700 — "bold"</li>
<li>800</li>
<li>900</li>
</ul>
</li>
<li>Which ones work, depends on the font <strong>family</strong><ul>
<li>"Arial"</li>
</ul>
</li>
</ul>
</li>
<li><code>font-style</code><ul>
<li>italic, normal are the usual values</li>
<li>~~"oblique" exists, rarely used~~</li>
</ul>
</li>
<li><code>text-decoration</code><ul>
<li><code>text-decoration: underline;</code> is a shorthand<ul>
<li><code>text-decoration-line</code></li>
<li><code>text-decoration-color</code></li>
<li><code>text-decoration-style</code></li>
</ul>
</li>
<li><code>green wavy underline</code></li>
<li><code>underline overline blue</code></li>
<li><code>line-through</code></li>
</ul>
</li>
<li><code>text-transform</code><ul>
<li>uppercase, lowercase, capitalize</li>
</ul>
</li>
<li><code>text-shadow</code><ul>
<li><code>1px 2px 26px #ff0000</code><ul>
<li>1px offset to the right</li>
<li>2px offset to the bottom</li>
<li>26px blur amount</li>
<li>
<h1>ff0000 color</h1>
</li>
</ul>
</li>
</ul>
</li>
<li><code>::before</code> , <code>::after</code>, <code>content</code><ul>
<li>before and after are pseudo-elements<ul>
<li>two colons for pseudo-elements</li>
<li>one colon for pseudo-classes</li>
</ul>
</li>
<li>content defines some kind of content in relation to the selector</li>
</ul>
</li>
</ul>
    </div>
}