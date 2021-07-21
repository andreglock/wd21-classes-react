export default function BDL08() {
    return <div id="content"><h1>BDL 8 - Even MORE git stuff!</h1>
<ul>
<li><code>git init</code> - initializes the current working folder as a git repository</li>
<li>Init should just be run one time per repository</li>
<li><code>git</code> commands can be run in subfolders</li>
<li>Git <em>only</em> tracks files, not directories</li>
<li>The commit message of the first commit to a repo often is "Initial import", "Initial commit" or something similar</li>
<li>You can create a repository in GitHub before OR after creating your local project</li>
<li>To add an existing local git repository (new project for example) to a newly created GH repository, you need to add the GH repository as a <em>remote</em><ul>
<li><code>git remote add origin https://github.com/usernamehere/projectnamehere.git</code></li>
</ul>
</li>
<li>You can see the manual for git commands too! <code>man git branch</code></li>
</ul>
<p>git config --global init.defaultBranch main </p>
    </div>
}