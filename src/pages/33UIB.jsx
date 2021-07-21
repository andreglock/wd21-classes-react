export default function UIB33() {
    return <div id="content"><h1>Framework - SASS</h1>
<h2>SASS Introduction</h2>
<ul>
<li>SASS - Syntactically Awesome cSS<ul>
<li>https://sass-lang.com/</li>
<li>Clever people wanted to make CSS more awesome</li>
<li>Took out ; and {}</li>
<li>New awesome features, such as NESTING</li>
<li>www.sassmeister.com</li>
<li>.sass files</li>
<li>https://sass-lang.com/documentation/style-rules</li>
</ul>
</li>
<li>
<p>SCSS</p>
<ul>
<li>After the original SASS</li>
<li>"Sassy CSS"</li>
<li>More CSS-like</li>
<li>SASS Superpowers, like NESTING</li>
<li>Much more popular</li>
<li>Backwards compatible with CSS</li>
<li>We will be focusing on this!</li>
<li>.scss files</li>
<li>https://sass-lang.com/documentation/style-rules</li>
</ul>
</li>
<li>
<p>Now: Two file types, .scss and .sass</p>
<ul>
<li>Different languages / markups</li>
<li>Both are referred to as SASS :facepalm:</li>
<li>Other options exist too, such as "Less"</li>
</ul>
</li>
<li>
<p>SASS/SCSS/LESS/etc...</p>
<ul>
<li>CSS Preprocessors</li>
<li>We "transpile" SCSS code to get CSS<ul>
<li>Transpile = Convert from <em>Langage A</em> to <em>Language B</em>
    --&gt; Source-to-source translate
    --&gt; Source-to-source compiling
    --&gt; Transcompiling
    --&gt; Transpiling</li>
<li>Transpiled languages are generally on the same "level" and of the same complexity</li>
</ul>
</li>
<li>How do we transpile?</li>
</ul>
</li>
</ul>
<h2>Example Workflow for SCSS --&gt; CSS</h2>
<ol>
<li>Install "sass" tool using NPM</li>
<li><code>npm install --global sass</code></li>
<li>Run the "sass" tool</li>
<li><code>sass [inputfile] [outputfile]</code></li>
<li><code>sass --watch style.scss banana.css</code></li>
</ol>
<h2>Build scripts: Using NPM as a build tool</h2>
<ul>
<li>Example boilerplate project with a workflow developed by DCI</li>
<li>https://github.com/FbW-E01/dci-boilerplate-I</li>
<li>READ THE README.MD DOCUMENTATION</li>
<li>Key commands<ul>
<li><code>npm install</code> - install dependencies</li>
<li><code>npm start</code> - start development server</li>
<li><code>npm run build</code> - build production version</li>
<li><code>npm run deploy</code> - deploy to Github Pages</li>
</ul>
</li>
</ul>
<h2>SASS Variables</h2>
<ul>
<li>What is a variable?<ul>
<li>Box for storing a value</li>
<li>Referenced from many places in code (CSS or other code!)</li>
</ul>
</li>
<li>Defining a SASS variable<ul>
<li><code>$[name]: [value]</code></li>
</ul>
</li>
<li>Using a SASS variable<ul>
<li><code>color: $[name]</code></li>
</ul>
</li>
</ul>
<h3>OVERRIDING BOOTSTRAP COLORS IN THE DCI PROJECT BOILERPLATE</h3>
<ul>
<li>Custom
    $red: #dd3d2d;
    $green: #33ff44;
    color: $red;</li>
<li>
<p>To maps
    $colors: (
        "red": #dd3d2d,
        "green": #33ff44
    );</p>
<p>p {
    color: map-get($colors, "red");
}
- Bootsrap overrides
$theme-colors: (
    "primary": orange
);
$border-radius:99999px;
BEFORE THE IMPORT
- Look at Bootstrap source code</p>
</li>
</ul>
    </div>
}