export default function UIB35() {
    return <div id="content"><h1>GH Pages</h1>
<h2>Repository first manual method</h2>
<ol>
<li>Create empty repo</li>
<li>Clone repo</li>
<li>Create content and push to master</li>
<li>Push to new branch called <code>gh-pages</code>
    <code>git push -u origin master:gh-pages</code></li>
<li>Go to repository settings in Github!
    Check the published address</li>
</ol>
<h2>Tool assisted method</h2>
<ul>
<li><code>gh-pages</code> -- <code>npm install -g gh-pages</code></li>
<li>After installing, just running <code>gh-pages</code> should work</li>
<li><em>HOWEVER</em><ul>
<li>Currently this will NOT ork without a package.json file!!</li>
<li>Bug in latest version https://github.com/tschaub/gh-pages/issues/354</li>
</ul>
</li>
</ul>
    </div>
}