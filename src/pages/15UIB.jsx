export default function UIB15() {
    return <div id="content"><h1>UIB Content - a11y</h1>
<h2>Accessibility</h2>
<ul>
<li>Goal: provide equal access and opportunity to people with disabilities</li>
<li>Goal: make the web accessible</li>
<li>Often shortened to a11y in text (A, 11 characters, Y)</li>
<li>Semantic elements have good a11y support already<ul>
<li>Content elements with a meaning</li>
<li>"h1" instead of "div"</li>
<li>"p" instead of "div"</li>
<li>"button" instead "div"</li>
<li>real inline elements instead of "span"</li>
</ul>
</li>
<li>Semantically important attributes<ul>
<li>"alt" for images</li>
<li>Good for screen readers</li>
<li>Also good for SEO!</li>
</ul>
</li>
<li>Screen reader example: ChromeVox extensions<ul>
<li>Operating systems have their own screen readers too</li>
<li>NVDA (windows)</li>
<li>Orca (linux)</li>
<li>Voiceover (osx)</li>
<li>WebAnywhere</li>
</ul>
</li>
<li>Websites should be usable with just the keyboard too!</li>
<li>Use ARIA attributes to help create an accessible webnsite</li>
</ul>
    </div>
}