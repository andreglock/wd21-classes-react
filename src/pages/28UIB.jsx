export default function UIB28() {
    return <div id="content"><h1>UIB - Layouts - Flexbox 2</h1>
<p>Yesterday we did flexbox, focusing on the parent (flex container)</p>
<ul>
<li>display: flex;</li>
<li>flex-direction: column; -- sets the main axis direction</li>
<li>flex-wrap: wrap;</li>
<li>flex-flow: column wrap; -- shorthand for direction and wrap</li>
<li>justify-content: space-around; -- control the main axis</li>
<li>align-items: center; --- control the cross axis</li>
</ul>
<p><em>Flexbox items are elastic</em></p>
<h2>Flexbox, the child elements (flex items)</h2>
<ul>
<li><code>order: 1;</code><ul>
<li>The default value is 0</li>
<li>Default: flex items are in the order that they appear in your HTML</li>
<li>Can have negative values too!</li>
<li>You can reverse the order with <code>flex-direction: row-reverse;</code></li>
<li>Also works with <code>flex-direction: column;</code></li>
</ul>
</li>
<li><code>flex-grow: 1</code>;<ul>
<li>The default value is 0</li>
<li>When applied to an item, the item will scale relative to the sum of the size of all other items on the same row</li>
<li>If none of the flex items have flex-grow, they don't grow</li>
</ul>
</li>
<li><code>flex-basis: 200px;</code><ul>
<li>The width or height (depends on flex-direction) of a flex item</li>
<li>If width and flex-basis are both set, width is ignored!</li>
<li>Normal CSS units, like "px" and "%"</li>
<li>More dynamic than width;<ul>
<li>IF the available space is less than required, automatically applies flex-shrink, fitting the items to the available space</li>
</ul>
</li>
<li>Recommended over width</li>
<li>Often used in combination with height</li>
</ul>
</li>
<li>
<ul>
<li><code>flex-shrink: 1;</code></li>
<li>The default value is 1</li>
<li>Used in combination with <code>flex-wrap: nowrap</code> (default)</li>
<li>Determines the rate at which an item will shrink in relation to all items in the container when there is not enough room for all of them</li>
<li>Defines the ability for a flex item to shrink, if necessary</li>
</ul>
</li>
<li>
<p><code>flex</code></p>
<ul>
<li>Shorthand for <code>[flex-grow] [flex-shrink] [flex-basis]</code></li>
<li>By default these are <code>flex: 0 1 auto;</code></li>
<li>Can be confusing!</li>
<li>Often just used for flex-grow OR all thee of them</li>
<li>Recommendation to use either 1 value or 3 values:<ul>
<li><code>flex: 1;</code></li>
<li><code>flex: 1 1 33%;</code></li>
</ul>
</li>
<li>Check MDN if you are unsure!</li>
</ul>
</li>
<li>
<p><code>align-self</code></p>
<ul>
<li>Works like <code>align-items: flex-end;</code>, but for the children</li>
<li>Can be set to just one child element</li>
<li>Overrides <code>align-items</code> from the parent</li>
</ul>
</li>
<li>
<p>The perfect center</p>
<ul>
<li><code>display: flex;</code> and <code>margin: auto;</code></li>
<li>might be useful for example in popover - overlays<ul>
<li>cookie acceptance</li>
<li>spam messages</li>
</ul>
</li>
</ul>
</li>
<li>Responsive website = media queries + flexbox<ul>
<li>Work as usual</li>
</ul>
</li>
</ul>
    </div>
}