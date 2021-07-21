export default function UIB25() {
    return <div id="content"><h1>UIB Forms 2</h1>
<h2>More styling</h2>
<ul>
<li>Focusing an element; use tab</li>
<li>Focused elements should have some kind of focus indicator, such as a box around them</li>
<li>You can style focused elements with <code>:focus</code></li>
<li>
<p>You can add an additional border to help with focus tracking with
        - <code>outline</code> - very similar to borders
        - Do not remove the outline!</p>
</li>
<li>
<p>placeholder text? There's a style for that!
        - <code>::placeholder</code> pseudo-element can be used for styling</p>
</li>
<li>
<p>3 new attributes for inputs!
        - value
                - Sets a default value for a form input
        - disabled
                - Sets a form input to be disabled
                - Disabled fields are not even focusable
                - By default, these are styled darker
        - readonly
                - Sets a form input to be read only
                - Readonly fields are enabled, you can focus them, but not edit</p>
</li>
</ul>
    </div>
}