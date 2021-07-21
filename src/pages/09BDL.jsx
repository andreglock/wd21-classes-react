export default function BDL09() {
    return <div id="content"><h1>BDL The final countdown</h1>
<ul>
<li>Pull Request Review / Code Review example</li>
<li>New Project Example starting from GitHub</li>
<li><code>git branch</code> - show a listing of all the branches</li>
<li><code>git branch -v</code> - show a list of all the branches (verbose, show more information)</li>
<li><code>git commit -m "Improve README"</code> - create a new commit and give it a commit message at the same time!</li>
<li><code>git log</code> - Shows the commit history of a repository</li>
<li><code>git diff</code> - Show the differences between two states in git<ul>
<li>For example, show the modifications you have done without committing</li>
</ul>
</li>
<li><code>git checkout</code> - Can do many different things<ul>
<li><code>git checkout [Branchname]</code> - This one switches the currently active branch</li>
<li><code>git checkout -b [Branchname]</code> - This one creates a new branch called "Branchname"</li>
<li><code>git checkout -- [path_to_file]</code> - This one reverts the changes you have made to a file</li>
</ul>
</li>
<li><code>git rm</code> - Remove a file from git</li>
<li>Conflicts<ul>
<li>Conflicts happen when a file is modified at the same time in two different places and those changes are merged</li>
<li>For example, Kai edits REAMDE.md in GitHub and Joel edits README.md in the local repository and tries to merge the changes</li>
<li>What needs to happen is we need to Resolve the Conflict</li>
<li>When a conflict happens, you need to:<ol>
<li>manually fix the conflicted files</li>
<li>stage (git add) the fixed conflicted files</li>
<li>make a new commit</li>
<li>remember to use git status to help you along</li>
</ol>
</li>
</ul>
</li>
</ul>
    </div>
}