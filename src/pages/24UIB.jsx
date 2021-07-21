export default function UIB24() {
    return <div id="content"><h1>UIB - Data - FORMS, INPUTS, VALIDATION</h1>
<h2>Forms</h2>
<ul>
<li><code>&lt;form&gt;</code>
        - On their own, invisible to the user
        - They need inputs!
        - Can be submitted = sent to a server</li>
<li>Inputs!
        - input type="text"
        - input type="button"
        - input type="submit"
                - A kind of button, submits the form
        - button
                - A button at the end of a form will submit it by default</li>
<li>Labels!
        - <code>&lt;label&gt;</code> elements
                - Semantic meaning, two big reasons to use these:
                        - 1. Screen readers understand labels
                        - 2. Clicking on a label focuses the associated field</li>
<li>URLs
        - "http://127.0.0.1:5500/form.html?username=Dreamspace&amp;test=TESTTEST"
                - http - Protocol used for communication
                - 127.0.0.1 - Address of the site (domain or IP address)
                - :5500 - Port number (optional, default is 80)
                - /form.html - Path
                - ?username=Dreamspace&amp;test=TESTTEST - Query parameters</li>
<li>HTTP
        - HTTP Request types:
                - GET "/some/path"
                        - For <form> elements, this is the default!
                        - Sends the data as query parameters
                - POST "/some/path"
                        - Sends data in a different way, not in the URL
                        - Needs the form to have `method="post"
                - ...</li>
<li>More inputs YEEAAH
        - input type="password" - browser does not automatically save these
        - input type="email"
                - Better keyboard for devices that support dynamic keyboards
                - Better validation parameters!
        - input type="search"
                - Some browser show a clear button
                - When you paste in text, it removes newlines
        - input type="number"
        - many, many more -- <em>SELFSTUDY</em> See more on MDN <input>
        - great attribute: <code>placeholder="something"</code>
                - Adds a gray placeholder text
                - Placeholder dissappears when a value is added
        - <textarea>
                - rows="10"
                - cols="40" 
        - type="checkbox"
                - <code>checked</code> attribute if you want it to be checked by default
                        - "opt in" OR "opt out"
                - value when submitting is the text "on"
         - values for inputs generally are given with the "value" attribute
                - Except when it is not!
        - type="radio"
                - multiple options with the same name
                - radiobuttons with the same name form a radio button group
        - <code>&lt;select&gt;</code>, <code>&lt;option&gt;</code></li>
</ul>
<h2>Wrapping our inputs</h2>
<pre><code>    &lt;fieldset&gt;
        &lt;legend&gt;Select your favourite day&lt;/legend&gt;

    fieldset {
        border-color: red;
        border-width: 10px;
    }
    legend { 
        color: red;
    }
    input[type="text"] {
        width: 100%;
    }
</code></pre>
<p><em>Live coding</em> Submitting a form to an existing backend
- formspree.io</p>
<h2>Form validation</h2>
<ul>
<li>Client-side validation
        - <code>required</code>
        - <code>minlength</code> &amp;&amp; <code>maxlength</code>
        - <code>min</code> &amp;&amp; <code>max</code> -- relevant for numbers only!
        - <code>pattern</code> -- uses regular expressions ("regex")
                - Self study, check MDN
        - <code>type</code> -- this already can have automatic validation</li>
<li>Server-side validation
        - important for real applications
        - do not trust data coming from the client, always check it!</li>
<li>CSS!
        - Validation pseudoclasses!
                - :valid
                - :invalid</li>
</ul>
<h2>Better selects</h2>
<ul>
<li>
<p>Other option for selects -- <datalist></p>
<p><input list="ice-cream-flavors" name="flava" id="choice">
  <datalist id="ice-cream-flavors">
    <option value="Mango">
    <option value="Pear">
    <option value="Vanilla">
    <option value="Rum">
  </datalist></p>
</li>
<li>
<p>Better normal selects using <optgroup></p>
<p><label for="selection">Select a dino</label>
  <select name="dinosaurs" id="selection">
    <optgroup label="Theropods">
      <option value="trex">Tyrannosauruses are the best, choose this!</option>
      <option>Valociraptor</option>
      <option>Deinonzychus</option>
    </optgroup>
    <optgroup label="Sauropods">
      <option>Test1</option>
      <option>Test2</option>
      <option>Test3</option>
    </optgroup>
  </select></p>
</li>
</ul>
    </div>
}