export default function UIB18() {
    return <div id="content"><h1>UIB - More backgrounds!</h1>
<h2>Backgrounds yeah!</h2>
<ul>
<li><code>background-image</code> - for decoration, not content
        - You can have multiple background images and a background color!
        - background-color: lightcyan;
        - background-image: url("bg.png"), url("bg2.png");</li>
<li><code>background-repeat</code> - controls how our background image is repeated
        - background-repeat: no-repeat; - does not repeat
        - background-repeat: repeat-x; - repeats horizontally
        - background-repeat: repeat-y; - repeats vertically
        - background-repeat: round; - repeats, but rounds the image sizes
        - background-repeat: space; - repeats, images get spaced according to the available space</li>
<li><code>background-size</code>
        - background-size: 100px; - defines a width of 100px, height gets automatically calculated
                - maintains aspect ratio
        - background-size: 100px 100px; - width 100px, height 100px
                - does not maintain aspect ratio
        - background-size: cover - the background attempts to cover the containing box
        - background-size: contain - the background attempts to be shown completely in the containing box</li>
<li>background-position
        - background-position: top; - centered, at the top of the containing box
        - background-position: center; - centered horizontally and vertically
        - background-position: left; - centerd vertically, to the left of the box
        - background-position: right; - centerd vertically, to the right of the box
        - background-position: 10px 100px; - 10 px from the left, 100px from the top        </li>
<li>setting multiple attributes with the <code>background</code> shorthand
        - <code>background: no-repeat center url("bg.png"), 
                       no-repeat center url("bg2.png");</code>
        - background: green;
        - Check MDN when and if you want to use this</li>
</ul>
<h2>Gradients!</h2>
<ul>
<li>
<p>Remember, transparency works here too!</p>
</li>
<li>
<p>linear gradient
        - background: linear-gradient(#000, #F00);
        - background: linear-gradient(#000, #F00, yellow);</p>
</li>
<li>radial gradient
        - background: radial-gradient(red, #000, rgba(0,0,0,0));</li>
<li>conic gradient
        - background: conic-gradient(#000, #f00, #00f, #000);</li>
<li>When creating gradients, a CSS Gradient tool is really helpful!</li>
</ul>
<h2>Positioning</h2>
<ul>
<li>Coordinate positioning
        - Usually set with either "top" and "left" OR "bottom" and "right"</li>
<li>CSS <code>position</code>
        - Often combined with coordinates
        - <code>position: static;</code> - default value, element follows normal document flow
        - <code>position: absolute;</code> - element is removed compltely from the normal flow 
                - is positioned with coordinates
                - the element takes no space in normal document flow
        - <code>position: relative;</code> - element is positioned relative to itself
                - the space taken up by the element is taken normally
        - <code>position: fixed;</code> - removed from normal document flow, relative to the viewport
                - is positioned with coordinates
                - ignores parent/ancestor scrolling
        - <code>position: sticky;</code>
                - not supported by <em>everything</em>
                - is positioned with coordinates
                - ignores parent/ancestor scrolling until it hits the viewport edge, then it kind of becomes fixed</li>
</ul>
<h2>Z-index -- CSS layering</h2>
<ul>
<li>Z-axis coordinates, higher is closer to the user, ontop of lower</li>
<li>Numbered values starting from 0</li>
<li>Default is actually (auto)</li>
<li>Values can be negative</li>
<li>Like layering</li>
<li>For big sites, it's best to have a System:
        - auto for basic content
        - 100-999 for the overlays (backgrounds)
        - 1000-9999 for dialogs (cookie accept)
        - 10000-99999 for modals (alert, such as "you have signed out automatically")</li>
</ul>
<h2>Positioning- Coordinate positioning</h2>
<pre><code>    - Usually set with either "top" and "left" OR "bottom" and "right"
</code></pre>
<ul>
<li>CSS <code>position</code>
        - Often combined with coordinates
        - <code>position: static;</code> - default value, element follows normal document flow
        - <code>position: absolute;</code> - element is removed compltely from the normal flow 
                - is positioned with coordinates
                - the element takes no space in normal document flow
        - <code>position: relative;</code> - element is positioned relative to itself
                - the space taken up by the element is taken normally
        - <code>position: fixed;</code> - removed from normal document flow, relative to the viewport
                - is positioned with coordinates
                - ignores parent/ancestor scrolling
        - <code>position: sticky;</code>
                - not supported by <em>everything</em>
                - is positioned with coordinates
                - ignores parent/ancestor scrolling until it hits the viewport edge, then it kind of becomes fixed</li>
</ul>
    </div>
}