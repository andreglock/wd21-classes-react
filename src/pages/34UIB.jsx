export default function UIB34() {
    return <div id="content"><h1>UIB 30 - SASS continued</h1>
<h2>Mixins</h2>
<p>"Predefined reusable rulesets"
    @mixin coolbox {
        border: 2px solid double;
        border-radius: 10px;
        padding: 10px;
    }
    .card {
        background: lightblue;
        @include coolbox;
    }
    .example {
        background: palegreen;
        @include coolbox;
    }
    button {
        @include coolbox;
    }</p>
<h2>You can add parameters!</h2>
<pre><code>@mixin bordered($width, $color) {
    border: $width solid $color;
    border-radius: $width;
}
.card {
    background: lightblue;
    @include bordered(1px, red);
}
</code></pre>
<h2>One of the main uses for mixins</h2>
<p>Bootsrap has some mixins!</p>
<pre><code>// media-breakpoint-up
    // @media (min-width: ...) {}

// media-breakpoint-down
    // @media (max-width: ...) {}

// media-breakpoint-between
    // @media (min-width: ...) and (max-width: ...) {}

// For example:
@include media-breakpoint-up(md) {
    nav {
        background: red;
    }
}
</code></pre>
<h1>Importing stuff!</h1>
<p>Sometimes it makes sense to split your projects SCSS/SASS into multiple files. For example, you can move you variables into a separate file.</p>
<p>@use "card/variables";
@use "hero/variables";</p>
<h1>Vanilla CSS variables</h1>
<p>Actually, custom properties.
https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties</p>
<p>Common best practice    </p>
<pre><code>:root {
    --main-bg-color: brown;
}    
element {
    background-color: var(--main-bg-color);
}
</code></pre>
<p><em>Inheritance</em>
    <div class="box one">
        <div class="box two">
            <div class="box three"></div>
            <div class="box four"></div>
        </div>
    </div>
    .two {
        --test: 10px;
    }
    .three {
        --test: 2em; 
    }    </p>
<pre><code>For the class="two" element: 10px
For the class="three" element: 2em
For the class="four" element: 10px (inherited from its parent)
For the class="one" element: invalid value, which is the default value of any custom property
</code></pre>
    </div>
}