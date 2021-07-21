export default function UIB14() {
    return <div id="content"><h1>UIB - Images</h1>
<h2>Basic HTML, CSS with images</h2>
<ul>
<li>Downloading images<ul>
<li>Context menu depends on what thing you rightclicked</li>
<li>Normal images have a "Save image as" option</li>
</ul>
</li>
<li>Normal HTML images: <code>&lt;img src="image.jpg2" alt="Here!"&gt;</code><ul>
<li>The ALT attribute is important<ul>
<li>Provides a text alternative if the image doesn't work</li>
<li>Especially needed if the user has a screen reader</li>
<li>If the image is broken or loads very very slowly, this can provide context too</li>
</ul>
</li>
</ul>
</li>
<li>Width and height<ul>
<li>You can add width and height as attributes<ul>
<li><code>&lt;img src="image.jpg" alt="Here!" width="200" height="100"&gt;</code><ul>
<li>No units!</li>
</ul>
</li>
<li>Width/height when give as attributes (inline) they generally should be the real sizes of the image<ul>
<li>Often used when images are part of the content</li>
</ul>
</li>
<li>The space for the image is reserved</li>
</ul>
</li>
<li>You can also use CSS to size images<ul>
<li>Even when they have an inline size definition!</li>
<li>CSS overrules HTML width/height</li>
</ul>
</li>
<li>In the real world, in perfect examples, you have both defined<ul>
<li>This is optimal for making the site work in all cases</li>
</ul>
</li>
<li>Avoid having huge images squeezed into small spaces<ul>
<li>This makes websites load very slowly</li>
<li>Depending on the situation, you can have different sizes for the same images</li>
</ul>
</li>
</ul>
</li>
<li>Absolute and relative paths<ul>
<li>Absolute: Works from anywhere (on your own website)<ul>
<li>Full URL</li>
<li><code>&lt;img src="https://www.example.org/image.jpg" alt="Example images!" width="200" height="100"&gt;</code></li>
</ul>
</li>
<li>Relative:<ul>
<li>Relative to the current URL</li>
<li>Local URL</li>
<li><code>&lt;img src="./../pics/image.jpg" alt="Example images!" width="200" height="100"&gt;</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<h2>New CSS!</h2>
<ul>
<li>Borders!<ul>
<li>Rule: <code>border</code></li>
<li>Value: <code>[width] [style] [color]</code></li>
<li>Width can be defined with <code>px</code>, <code>rem</code>, <code>em</code> etc CSS units</li>
<li>Style is mandatory<ul>
<li>solid</li>
<li>dashed</li>
<li>dotted</li>
<li>double</li>
<li>groove</li>
<li>etc</li>
</ul>
</li>
<li>Color is optional, defaults to current font color<ul>
<li>Use the usual CSS color rules (named, hex, rgb, etc...)</li>
</ul>
</li>
<li>Can be defined separately as well<ul>
<li><code>border-color</code></li>
<li><code>border-width</code></li>
<li>etc</li>
</ul>
</li>
</ul>
</li>
<li>Border radius!<ul>
<li><code>border-radius: 15px;</code></li>
<li>most commonly done with pixels or with percentages<ul>
<li><code>border-radius: 50%</code> - very common with profile pictures</li>
</ul>
</li>
<li>Value can be defined separately for the corners</li>
<li><code>border-radius: 15px 5px 15px 5px;</code></li>
<li><code>border-radius: 40% 15%;</code></li>
</ul>
</li>
<li>Object-fit and Width AND height<ul>
<li>for example, an image within a parent div</li>
<li>makes the image fit in the specified way</li>
<li><code>object-fit</code>, <code>width</code> and <code>height</code> are used together</li>
<li>
<p>https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit</p>
<p><code>&lt;div style="border: 1px solid red; width: 90vw; height: 200px;"&gt;
    &lt;img
        src="https://placekitten.com/500/200"
        alt="Kitten"
        style="object-fit: cover; width: 100%; height: 100%;"
    &gt;
&lt;/div&gt;</code>
    - Can be used for other things than images too (videos)
- Image links
    - Just wrap an image with an <code>a</code> link tag
- Using float
    - CSS <code>float</code>
    - "float" is a thing that was designed to wrap text around an image
    - Mostly to be used when you control the image and the text
    - Avoid using float for <em>anything</em> else (design)</p>
</li>
</ul>
</li>
</ul>
<h2>Image formats</h2>
<p>Most common and important formats used in the web</p>
<pre><code>- JPG
    - Raster
    - Binary files
    - This compression works best for photos
- PNG
    - Raster
    - Binary files
    - This compression works best for logos/cartoons/screenshots/gradients etc (not photos)
    - Can be transparent
    - Can be animated (rare, sometimes .apng or .mpng etc)
- GIF
    - Raster
    - Binary files
    - Can be transparent
    - Can be animated
- SVG
    - Inline or Normally
    - Just text files (XML)
    - Vector
    - Can be transparent
    - Can be animated (with CSS or JavaScript)
</code></pre>
<h2>Quick into to GIMP</h2>
<ul>
<li>Basic image manipulation<ul>
<li>Crop</li>
<li>Draw</li>
<li>Export</li>
<li>Color picker</li>
<li>Add text</li>
<li>Work with layers</li>
<li>Resizing an image to create a thumbnail (scaling)</li>
</ul>
</li>
<li>Raster files!</li>
<li>No animation</li>
<li>In Ubuntu; the screenshot tool is nice!</li>
</ul>
<h2>Core CSS Basic awesome greatness</h2>
<ul>
<li>More specific selectors</li>
<li>Descendant selector example: <code>#mainpage p { color: red; }</code><ul>
<li>All paragraphs descended from the #mainpage element</li>
</ul>
</li>
<li>Comma separated selectors: <code>.fool, p { color: blue; }</code><ul>
<li>All elements with the class "fool" and all paragraphs</li>
</ul>
</li>
<li>To change the mouse cursor: <code>cursor: pointer;</code></li>
<li>To change the text style: <code>text-decoration: underline;</code> (or none)</li>
</ul>
    </div>
}