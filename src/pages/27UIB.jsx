export default function UIB27() {
    return <div id="content"><h1>UIB - Layouts - Flexbox 1</h1>
<h2>Planning our layout</h2>
<ul>
<li>You might start with a completely empty table, just an idea or a concept</li>
<li>
<p>Infinite ways to start, here is one
        1. Draw a flowchart, how will the user accomplish things?
                - Analog or Digital
                - Figma, Draw.io
        2. Draw a rough pen-and paper wireframe of the key views
                - This could include mobile views and desktop views
                - Actual pen and paper, Mouse and Gimp or even Figma
        3. Draw a digital wireframe of the pages
                - Figma
                - Might show to clients, might help sales
        4. Draw a full design (or create a full design system)
                - Figma again, perhaps? Sketch?
        5. Implement that design etc</p>
</li>
<li>
<p>As web professionals, the border between Designer and Developer
        is not super clear cut</p>
</li>
<li>
<p>Wireframe
        - Like a rough sketch, no colors, no real content maybe etc.
        - Different kinds of wireframes from lofi to hifi</p>
</li>
<li>
<p>In big projects, often you will continuously do parts 1-5 at the same time</p>
</li>
<li>Digital wireframing with Figma for example</li>
<li>Figma
        - Digital Wireframing, charts, websites, design systems and more
        - Needs registering
        - Very collaborative, many users can work on the same project
                - And share their work too!
        - A huge library of templates/toolkits that you can use and buy</li>
</ul>
<h2>Flexbox</h2>
<ul>
<li>"Flexible box model"</li>
<li>Display value for boxes, often divs / sections etc</li>
<li>"flex" is another value for <code>display</code>; <code>display: flex;</code>
        - The parent works like a block element
        - Automatically creates a "flex container"
        - All the child elements become its "flex items"</li>
<li>The Flex container tries its best to keep its items in one line
        - Unless otherwise instructed!</li>
<li>flex-wrap: wrap;
        - When the Flex items will not fit the container,
           they will wrap to the next line
        - Default is nowrap</li>
<li>flex-direction: column;
        - Which direction do the items flow inside the flex container 
        - "row" is the default</li>
<li>
<p>Shorthand for direction and wrap;
        - <code>flex-flow: column wrap;</code></p>
</li>
<li>
<p>justify-content -- for the main axis
        justify-content: center;
        justify-content: space-between;
        justify-content: space-around;</p>
</li>
<li>align-items -- for the cross-axis
        align-items: center;
        align-items: flex-end;
        align-items: flex-start; <br />
        align-items: stretch; --- especially without height (row)</li>
</ul>
    </div>
}