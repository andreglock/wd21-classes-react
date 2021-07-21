export default function UIB26() {
    return <div id="content"><h1>UIB - responsive</h1>
<h2>Pre-smartphone</h2>
<pre><code>    - Few known resolutions to support
            - 800x600
            - 1024x768
            - ...
    - Limited width content websites
            - Websites only support from some known smallest res.
            - Min-width defined or a static width
    - With the 1st smartphones (iPhone =))
            - a LOT of zooming, bad UX
    - First response to smartphones was to create separate sites
            - www.example.org / m.example.org
            - Server identifies browser through User Agent Strings

    - The current approach *usually* is to create one website
            - Responds to the browser width
                    - --&gt; responsive website

    - Two approaches to responsivity:
            - Desktop first
                    - The "default" way
                    - You develop the website specifically for desktop use
                    - You add mobile support later (if you do!)
            - Mobile first
                    - You develop the website specifically for mobile use
                    - You add desktop support later
                    - Quickly gaining support
                    - Might be more popular today
                    - Concidered the easier approach when supporting both
            - Also, tablets exist
                    - But not as a design / implementation starting point

    - Mobile is the current and the future leader
            - Of course, depends on your users

    - Mobile first presentations!
</code></pre>
<h2>Code!</h2>
<h3>Viewport meta tag</h3>
<ul>
<li>First things first, ensure proper scale 
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    /></li>
<li>On mobile devices, the viewport is actually kind of virtual
        - Mobiles render pages inside a virtual window/viewport
        - Virtual window is usually wider than the screen
        - Users would pan and zoom too the different areas of the page
        - For example, a mobile could have a screen width of 640px
                - pages might be rendered with a vitual viewport of 980px
                - the 980px will be shrunk down to fit the 640px<pre><code>- This is done because many pages are not (yet) mobile optimized
- The virtual viewport makes non-optimized pages at least work somehow
- Devices use virtual pixels as well, complicating this further
</code></pre>
<ul>
<li>Our Viewport meta tag resets this.</li>
</ul>
</li>
</ul>
<h3>Support different screen sizes - Media queries</h3>
<ul>
<li>CSS at-rules</li>
<li>
<p>Media query structure <code>@media [media-type] ([media-features]) {}</code>
        - media-type: screen and print (and speech)
                - "Is the website rendered on a screen?"
                - "Is the website printed?"
                - "screen" is the default and you can leave this out.
        - media-features
                - Common features
                - Identifies features active in the current media
                - A lot of different ones to target
                - Two main ones for responsivity: min-width &amp; max-width
                - <em>Self-study</em> See more on MDN</p>
</li>
<li>
<p>Example 1:
        <code>@media (min-width: 600px) {}</code> &lt;-- Basic media query</p>
</li>
<li>
<p>Example 1 with CSS:</p>
<pre><code>.header {
        margin: 50px;
}

@media (min-width: 600px) {

        .header {
                margin: 10px;
        }

}
</code></pre>
</li>
<li>
<p>The 600px here is called a breakpoint
        - Often you will have multiple breakpoints in your CSS
        - There are many lists of good breakpoint values to use
        - For example, it's common to use the breakpoint list from Bootsrap
                - Google "Bootsrap breakpoints"
        - You don't always need to implement all breakpoint sizes
                - Choose what makes sense to you
        - Example breakpoints from Bootstrap
          @media (min-width: 576px) { ... } // phones
          @media (min-width: 768px) { ... } // tablets
          @media (min-width: 992px) { ... } // desktops
          @media (min-width: 1200px) { ... } // large desktops
          @media (min-width: 1400px) { ... } // xtra large desktops</p>
</li>
</ul>
<h2>Responsivity and text</h2>
<ul>
<li>The <code>vw</code> unit: don't use for text, overrides desktop zoom</li>
</ul>
    </div>
}