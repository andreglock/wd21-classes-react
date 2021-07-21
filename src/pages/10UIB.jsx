export default function UIB10() {
    return <div id="content"><h1>UIB - Boilerplate</h1>
<ul>
<li>Boilerplate?<ul>
<li>Repeated code that doesn't really do much, but is necessary</li>
</ul>
</li>
<li>The user of a website is Usually human, but not always<ul>
<li>Web Crawlers / Bots</li>
<li>For example, the Google Robot needs to understand your site</li>
<li>Screen scrapers user your website too, maybe</li>
</ul>
</li>
<li>Human users for websites vary a lot!<ul>
<li>Different levels of sightedness (completely blind, partially or...)</li>
<li>Colour blindness</li>
<li>Different size screens</li>
<li>Cultural differences matter too</li>
<li>Connections speeds</li>
</ul>
</li>
</ul>
<h2>HTML</h2>
<ul>
<li>Based on SGML</li>
<li>Really exploded after HTML 4</li>
<li>There used to be HTML 4 variants, such as<ul>
<li>Frameset</li>
<li>Transitional</li>
<li>Strict</li>
</ul>
</li>
<li>There used to be XHTML<ul>
<li>XML-compatible HTML</li>
<li>Normal HTML is NOT XML compatible</li>
<li>XHTML is pretty much dead</li>
</ul>
</li>
<li>Now we have HTML 5.2 (5.3 is coming!)</li>
<li>HTML is continuously developed<ul>
<li>New elements are being added</li>
</ul>
</li>
<li>HTML Elements<ul>
<li>Start tag, End tag, Content, Attributes</li>
<li>Paragraph: <p title="Hi!">Bananas are great!</p></li>
<li>Image: <img src=".." alt="" /></li>
<li>Empty elements, like img have no ending tag and no content</li>
<li>Some elements can be self-closing as well, meaning that ending tag is integrated into the starting<ul>
<li><p />   this is a self-closing element/tag</li>
<li>Especially for line breaks this is common: <br /> </li>
<li>Self closing tags work, but might not be the "correct" way</li>
<li>Self closing tags are common especially because of React</li>
<li>In React closing tags are <em>mandatory</em> and we are actually not writing HTML (its JSX)</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2>How the internet works (again!)</h2>
<ul>
<li>HTML documents are rendered by a web browser</li>
<li>The browser downloads the HTML file and processes it as it is downloaded</li>
<li>Browsers are super smart, erven if the HTML is a BIT broken, it might still work</li>
<li>HTML is "evaluated" or "interpreted" by the browser</li>
</ul>
<h2>Working with code - VSCode</h2>
<ul>
<li>We will be using Visual Studio Code</li>
<li>VSCode is an IDE - Integrated Development Environment</li>
<li>Alternatives include Atom and Sublime</li>
<li>HTML files are edited often by hand, even though visual editors exist</li>
<li>Setting up VSCode<ul>
<li>You have extensions (plugins)<ul>
<li>Live Server</li>
<li>Prettier</li>
<li>So, so many others</li>
</ul>
</li>
<li>You have user settings<ul>
<li>Color theme etc.</li>
</ul>
</li>
<li>You have workspace settings<ul>
<li>Workspace is basically just a folder</li>
<li>Here you can define per-project color themes for example</li>
<li>Lets set the workspace color!</li>
<li>The workspace directory (.vscode) is almost always ignored in git (.gitignore)</li>
</ul>
</li>
<li>You have keyboard shortcuts<ul>
<li>Ctrl + b -- Toggle (show or hide) the side bar</li>
<li>Ctrl + f -- Find stuff within a file</li>
<li>Ctrl + Shift + f -- Find in files</li>
<li>Ctrl + p -- Find files by name inside the current workspace</li>
<li>Ctrl + Shift + p -- <em>The Command Palette</em></li>
<li>Ctrl + Shift + ` -- Toggle VSCode integrated terminal</li>
<li>Ctrl + + -- Zoom in</li>
<li>Ctrl + - -- Zoom out</li>
<li>When working with code: Ctrl + Shift + 7</li>
</ul>
</li>
<li>Recommendation: Go through the settings of vscode at your own time sometimes!<ul>
<li>Repeat this every now and then</li>
<li>Find out what works for you</li>
</ul>
</li>
<li>Introducing Emmet!<ul>
<li>Built into vscode</li>
<li>Started life as a plugin (I think...)</li>
<li>Makes writing code (or markup like HTML) easier and faster</li>
<li>Use <code>p*5</code> to create 5 Paragraph elements quickly</li>
<li>Cheat sheet: https://docs.emmet.io/cheat-sheet/</li>
<li>For example, Create an empty html file and use the <code>!</code> emmet abbreviation<ul>
<li>This creates the common HTML 5 boilerplate</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2>Examining the HTML 5 Boilerplate!</h2>
<h2>Working with HTML</h2>
<ul>
<li>files can be named anything, but they usually have the ".html" ending<ul>
<li>"joel-file.html"</li>
</ul>
</li>
<li>index.html is a special name<ul>
<li>When an HTML file is called "index.html" the web server understands that it is the default html file to load from that folder</li>
<li>"index.html" might not be displayed in the URL (for convenience)</li>
</ul>
</li>
<li>You might run into historical files that end in .htm OR .htmlx or .xhtml</li>
<li>How to actually see a website you have done?<ul>
<li>Locally opening the file on a browser</li>
<li>Locally running a web server<ul>
<li>From within VSCode<ul>
<li>use the "live reload" extension</li>
</ul>
</li>
<li>From the command line<ul>
<li>Install the "live-server" program with NPM:<ul>
<li>npm install --global live-server</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>"Lorem ipsum" placeholder text</li>
<li>Placeholder images, services such as placekitten work well</li>
<li>Clean code is super important<ul>
<li>Well indented</li>
<li>Much easier to understand</li>
<li>Much easier to maintain</li>
<li>It really helps with finding errors too</li>
<li>Helps with consistency and</li>
<li>Helps with working with others as well</li>
</ul>
</li>
</ul>
<h2>CSS - Cascading Style Sheets</h2>
<ul>
<li>Version 3 is the current one and CSS is being actively developed</li>
<li>CSS describes how HTML elements are to be displayed</li>
<li>Three different ways of defining CSS<ul>
<li>External styles<ul>
<li>A separate file for CSS, such as "main.css"</li>
<li>Loaded into your webpage via the <code>&lt;link&gt;</code> element</li>
<li>The most common way in 2021</li>
</ul>
</li>
<li>Internal styles<ul>
<li>Defined directly inside HTML files</li>
<li>Inside <code>&lt;style&gt;</code></li>
</ul>
</li>
<li>Inline styles<ul>
<li>Written directly on the HTML element</li>
</ul>
</li>
</ul>
</li>
<li><code>p {String.fromCharCode(219)} color: crimson; {String.fromCharCode(221)}</code></li>
<li>The "p" is a selector, it selects which elements are targeted by the rule</li>
<li>The <code>{String.fromCharCode(219)} color: crimson; {String.fromCharCode(221)}</code> is the declaration block - it contains one or more declarations separated by semicolons.</li>
<li>Each declaration includes a CSS property name and a value, separated by a colon</li>
<li>Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.</li>
</ul>
    </div>
}