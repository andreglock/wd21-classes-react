export default function UIB32() {
    return <div id="content"><h1>Animations</h1>
<h2>Transition</h2>
<ul>
<li>"Transition: awesomer than fancy shapes" - Joel 2021</li>
<li>
<p><code>transition</code></p>
<ul>
<li>Shorthand property<ul>
<li>comma separated, like background</li>
</ul>
</li>
<li>
<p>CSS</p>
<pre><code>transition:
    [transition-property]
    [transition-duration]
    [transition-timing-function]
    [transition-delay]
</code></pre>
<ul>
<li><code>[transition-property]</code><ul>
<li>which property to animate</li>
<li>can be <code>all</code> (default)</li>
</ul>
</li>
<li><code>[transition-duration]</code><ul>
<li>for example 3s or 300ms</li>
</ul>
</li>
<li><code>[transition-timing-function]</code><ul>
<li>ease, linear, custom (bezier)</li>
</ul>
</li>
<li><code>[transition-delay]</code><ul>
<li>for example 3s or 300ms</li>
<li><code>transition: all 1s, background 3s ease 200ms;</code></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Best Design Practices</p>
<ul>
<li>When?<ul>
<li>Rarely</li>
<li>During actions (:focus)</li>
<li>As stylistic elements (background changes)</li>
</ul>
</li>
<li>How much?<ul>
<li>Subtle</li>
<li>Real fast (0.3s)</li>
<li>or Real slow (20s)</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2>Custom animations</h2>
<ul>
<li>
<p>Creation custom animations is based on two CSS things:</p>
<ul>
<li><code>@keyframes</code></li>
<li><code>animation</code></li>
</ul>
</li>
<li>
<p><code>@keyframes [name] { ... }</code></p>
<ul>
<li>Defines the name and the steps of an animation</li>
<li>Multiple steps in one animation</li>
</ul>
</li>
<li><code>animation</code><ul>
<li>Defines which animation play for which element</li>
<li>Defines how the animation plays</li>
<li>Shorthand<ul>
<li>Is good at understanding what you mean</li>
<li>Check the specific order in MDN</li>
</ul>
</li>
<li>Can be confusing<ul>
<li><code>animation: 3s ease-in 1s 2 reverse both paused slidein;</code></li>
</ul>
</li>
<li>Separated values<ul>
<li><code>animation-name</code>: Potato, MyAnimation</li>
<li><code>animation-duration</code>: 5s, 500ms</li>
<li><code>animation-iteration-count</code>: 5, infinite</li>
<li><code>animation-delay</code>: 2s, 900ms</li>
<li><code>animation-direction</code>: reverse, alternate</li>
<li><code>animation-timing-function</code>: linear, ease</li>
<li><code>animation-fill-mode</code>: forwards</li>
<li><code>animation-play-state</code>: paused</li>
</ul>
</li>
</ul>
</li>
</ul>
    </div>
}