export default function BDL04() {
    return <div id="content"><h1>BDL 4 - Day 3</h1>
<h2>More commands</h2>
<p>Friends of cat</p>
<pre><code>$ tail output.log       # display the last lines of text in a file
$ tail -n 5 output.log  # display the last 5 lines of text in a file
</code></pre>
<p>Have a peek at a file</p>
<pre><code>$ head # display the first lines of text in a file
</code></pre>
<h2>Markdown</h2>
<p>Markdown syntax Documentation: <a href="https://www.markdownguide.org/basic-syntax">Markdown Guide</a></p>
<p>Super simple.
Is rendered.
Can be converted into HTML easily by renderers.
Halfway between visual and code.</p>
<p><img alt="Les Horribles Cernettes" src="https://musiclub.web.cern.ch/bands/cernettes/pictures/LHC5.jpg" title="Les Horribles Cernettes say hello" /></p>
<p>Syntax examples</p>
<ul>
<li>Images are done using this syntax: <code>![Image Text Version](relative/path/to/image.jpg "What the image is")</code></li>
<li>List<ul>
<li>Sublist 1<ul>
<li>SubSublist 1</li>
<li>SubSublist 2</li>
</ul>
</li>
<li>Sublist 2</li>
</ul>
</li>
<li>Text effect: <strong>Bold</strong> text</li>
<li>Text effect: <strong>Bold</strong> text</li>
<li>Text effect: <em>Italic</em> text</li>
<li>Text effect: <em>Italic</em> text</li>
<li>Text effects combo: <strong><em>Both</em> effects</strong></li>
<li>Text effect: <code>Inline code blocks</code> like so!</li>
<li>Linking to an address: <code>[Link Text Here](address here)</code></li>
<li>Headings<ul>
<li><code># Level 1</code></li>
<li><code>## Level 2</code></li>
<li><code>### Level 3 ... up until level 6</code></li>
</ul>
</li>
<li>Indented code blocks / preformatted text</li>
<li>Block quotes</li>
<li>Numbered lists:<ol>
<li>Example Banana</li>
<li>Example Beet</li>
<li>Example Cherry</li>
<li>Example Potato</li>
<li>Example Curry</li>
</ol>
</li>
</ul>
<p>Example of a Code Block:</p>
<pre><code>$ mkdir projects/newproject
$ cd projects/newproject
$ something_else_amazing
</code></pre>
<blockquote>
<p>Albert Einstein once said,</p>
<p>"HTML Rocks"</p>
<p>Something</p>
</blockquote>
<p>TASKS</p>
<ol>
<li>Open two consoles</li>
<li>Run "history" in one of them</li>
<li>In the other, create a new markdown file called "notes.md"</li>
<li>In the new file, write down all the commands you have used</li>
<li>Write down all the arguments you have used and a brief explanation of them</li>
<li>Also put in a section for general tips and knowledge you have learned</li>
<li>Use markdown examples and syntax</li>
<li>I recommend using BOTH nano and visual studio code.</li>
<li>When done, <code>cat</code> the file out in the console, copy it and send it to Joel as a private message in Slack.</li>
</ol>
<h2>Installing software</h2>
<p>MAC/OSX -- brew, cask (macports program)</p>
<p>A few commands</p>
<p>$ df -h # check how much space do I have lefts 
$ whoami
$ groups
$ sudo # do something as the "super user" or "root"</p>
<p>Root has all permissions, can do anything to the system.
Avoid using sudo or the root user as much as possible. Use only when necessary.</p>
<p>Package management systems: apt, snap, npm, brew, cask, yum, gem, emerge</p>
<p>$ sudo apt update   # updates the list of things that I can install
$ sudo apt install  # actually installs something
$ sudo apt remove   # uninstall something
$ sudo apt search google chrome # search for something to install
$ sudo apt autoremove # remove left over files from updating and installing</p>
<p>$ sudo snap search opera
$ sudo snap install opera
$ sudo snap remove</p>
<p>$ npm install -g "something" # node package manager installation
$ npm uninstall -g "something" </p>
<p>$ which  # show information about a program
$ whereis # show program location</p>
<h2>Browser Basics</h2>
<p>Big browsers: Google Chrome, Safari, Internet Explorer, Edge, Mozilla Firefox
Small browsers: Opera, Brave, Vivaldi, eLinks, DuckDuck, Midori....</p>
<p>Target browsers: Support latest version of chrome and Edge</p>
<p>Browser = Browser Engine + JavaScript engine + other stuff too, such as plugins and tools
Browser Engine = HTML to visual rendering
JavaSript Engine = Runs Javascript</p>
<p>If your site works with one Browser using the Blink engine, most likely other Blink engine Browsers will work too.
If your JS works with one browser that uses the V8 engine, it will most likely work with all of them.</p>
<p>Shortcuts</p>
<p>^T -- opens new tab
^N -- opens new window
^W -- closes a tab
^Shift-T -- reopens a closed tab
^Shift-N -- reopens a closed window
F11 -- view full screen
F12 -- open developer console -- the web developers best friend and toolkit</p>
    </div>
}