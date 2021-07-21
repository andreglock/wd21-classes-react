export default function UIB13() {
    return <div id="content"><h1>UIB day 4</h1>
<h2>Updating a forked repository from the original</h2>
<ul>
<li>Automatic<ul>
<li>Create a new Pull Request in GitHub</li>
<li>Click on "Switch base", if it is available to you#</li>
<li>After merging the Pull Request, update your local repository using git pull</li>
</ul>
</li>
<li>Manual<ul>
<li>Copy the changes manually</li>
<li>use git commands (Search Google for assistance here)</li>
</ul>
</li>
</ul>
<h2>CSS Units</h2>
<ul>
<li>CSS has a lot of units to use</li>
<li>We will be looking at "px", "%", "em", "rem", "vw", "vh"</li>
<li>New CSS: <code>width</code>, <code>height</code>, <code>font-size</code></li>
<li>New HTML: <code>&lt;div&gt;</code><ul>
<li>No semantic meaning</li>
<li>Container element, wrapper</li>
<li>Often deeply nested</li>
<li>Very very common in the real world</li>
</ul>
</li>
<li>Pixels or <code>px</code><ul>
<li>Static length or static size</li>
<li>Basically, these are the unit of the web</li>
<li>Reference pixels, Not Device pixels<ul>
<li>Mobile phone with 4k</li>
<li>https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel</li>
<li>Affected by zoom!</li>
</ul>
</li>
<li>Values smaller than one pixel can exist and are fairly common<ul>
<li>For example <code>font-size: 15.2px;</code></li>
</ul>
</li>
</ul>
</li>
<li>Percentages or <code>%</code><ul>
<li>Dependant on the parent</li>
<li>Dynamic length or dynamic size</li>
<li>Affected by zoom levels</li>
<li>You can be more accurate than 1%, so "50.04%" is valid</li>
</ul>
</li>
<li>For most users, the default font size of a browser is "16px"<ul>
<li>The root font size of a page is defined by the <code>&lt;html&gt;</code> element</li>
<li>You can define this yourself with CSS</li>
<li>The font settings <em>cascade</em> down from the <code>&lt;html&gt;</code> element</li>
</ul>
</li>
<li>
<p>Font size with percentages</p>
<ul>
<li>Like widths, these are dependent on the parent!</li>
<li>Gets complicated with nesting!</li>
</ul>
</li>
<li>
<p><code>em</code> and the <code>rem</code> units</p>
<ul>
<li>Typography units</li>
<li>Often used in font sizing, very useful there</li>
<li>Not common for defining layouts<ul>
<li>Except for a few exceptions</li>
</ul>
</li>
<li>Units that come from typesetting originally</li>
<li>rem - "root em" units<ul>
<li>Relative to root font size</li>
<li>Can be tricky to design around if you don't have a set root font size<ul>
<li>Users might have different default font sizes</li>
</ul>
</li>
<li>A size that is relevant to the ROOT font size</li>
<li>Can be thought of as percentages relevant to the root font size<ul>
<li><code>1.2rem</code> is 120% of the root font size</li>
<li><code>0.5rem</code> is 50% of the root font size</li>
<li><code>.5rem</code>  is 50% of the root font size</li>
<li><code>1.337rem</code> is 133.7% of the root font size</li>
</ul>
</li>
<li>Common for especially font sites</li>
<li>Sometimes used for icon sizes as well</li>
</ul>
</li>
<li>em - "em" units<ul>
<li>Relative to parent font size</li>
<li>If the parent font size is "20px"<ul>
<li>0.1em == 2px (10% of 20px)</li>
<li>1em == 20px (100% of 20px)</li>
<li>2em == 40px (200% of 20px)</li>
</ul>
</li>
<li>Pretty much the same as percentages when it comes to font size<ul>
<li>1em works exactly like 100% <em>for text</em></li>
</ul>
</li>
<li>Originally from how wide the "M" character is for a font</li>
<li>Now in CSS it is just the font size</li>
<li>Good use case: Icon images inside text elements<ul>
<li>Relevant to the text size of the parent</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p><code>vw</code> -  <code>vh</code></p>
<ul>
<li>percentages of the viewport height and width in pixels</li>
<li>values from 0 to 100</li>
<li>viewport width<ul>
<li>sizing relative to the viewport width</li>
<li>the parent size does not matter</li>
</ul>
</li>
<li>viewport height<ul>
<li>sizing relative to the viewport height</li>
<li>the parent size does not matter</li>
</ul>
</li>
<li>Commonly used in creating full screen landing pages</li>
<li>Also commonly used in full screen elements, such as<ul>
<li>cookie warnings</li>
<li>overlay images</li>
<li>overlay dialogs</li>
</ul>
</li>
<li>Also commonly used in positioning</li>
</ul>
</li>
</ul>
<h2>Developer Tools! Devtools! Browser tools! Developer console!</h2>
<ul>
<li>Right click an element on the page and select "Inspect element" from the context menu</li>
<li>Alternatively, press F12 on your keyboard</li>
<li>Can be positioned in the bottom or the right of your browser</li>
<li>Can be detached and exist in a separate window from your browser</li>
<li>INSPECTOR tab<ul>
<li>HTML and CSS</li>
<li>Edit CSS values</li>
<li>Add new CSS rules and values</li>
<li>Add new CSS blocks</li>
<li>View the computed CSS values for an element</li>
<li>View the Font of an element</li>
<li>Edit HTML</li>
</ul>
</li>
<li>NETWORK tab - shows you what is being loaded</li>
</ul>
<p><em>Task time here</em></p>
<ul>
<li>Let us have a look at the CNN and the Immoscout24 websites</li>
</ul>
    </div>
}