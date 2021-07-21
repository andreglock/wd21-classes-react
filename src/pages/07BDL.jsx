export default function BDL07() {
    return <div id="content"><h1>BDL Day 7 :)</h1>
<h2>GIT</h2>
<ul>
<li>Git tracks the version history of files</li>
<li>The history of a project is a timeline containing sets of changes (commits)</li>
<li>Terminology<ul>
<li>Commit = Set of changes to files</li>
<li>Master branch = Main branch of your repository</li>
<li>Repository = The place where your project code exists</li>
<li>Branch = Your "copy" for working with the code</li>
<li>Workflow = Order of operations, a guideline on when and how to work</li>
</ul>
</li>
<li>The <code>git</code> command<ul>
<li>Has "subcommands" or arguments</li>
<li>The git command does things depending on where you are</li>
<li><code>git status</code> -- shows the status of git inside the current working directory</li>
<li><code>git clone [repository_address]</code> -- get a local copy of a repository, inside a new directory</li>
<li>Has tab completion!</li>
</ul>
</li>
<li>The .git folder defines that a folder is a git repository</li>
<li>The .gitignore file is a list of paths</li>
<li>The .gitignore paths --- yeah, git ignores them</li>
<li>To changes branches, run <code>git checkout [branchname]</code></li>
<li>To get a list of all the branches, run <code>git branch</code></li>
<li>Live coding example...<ul>
<li>Workflow:<ol>
<li>Clone the repository</li>
<li>Assign task to yourself</li>
<li>Create a branch for this new task <code>git checkout -b [branchname]</code></li>
<li>Made some changes (new file and edited a file)</li>
<li>We staged the file we added with <code>git add [newfile]</code></li>
<li>We staged the file we changed with <code>git add [oldfile]</code></li>
<li>You can stage many changes (files) at the same time, such as with <code>git add [foldername]</code></li>
<li>You can finalize a commit with <code>git commit</code><ul>
<li>If git asks you to, tell it who you are using the provided commands</li>
<li>You need to add some kind of commit message.</li>
<li>Commit messages are often imperative, such as "Update README"</li>
</ul>
</li>
<li>Update our changes to github using the command <code>git push</code><ul>
<li>Because we created the branch locally, we need to tell GitHub about it when pushing:</li>
<li><code>git push --set-upstream origin issue-11-add-dogs</code> - here "origin" refers to github</li>
</ul>
</li>
<li>After the push is done, create a new Pull Request in GitHub</li>
<li>Merge the pull request</li>
<li>Close the issue.</li>
</ol>
</li>
</ul>
</li>
<li>Live coding example 2: the same again, but twice!<ul>
<li>Remember to update your local repository using <code>git pull</code></li>
</ul>
</li>
</ul>
<h2>More git stuff</h2>
<ul>
<li>
<p>Git Remotes</p>
<ul>
<li>git works on repositories</li>
<li>you can have multiple repositories on your computer</li>
<li>you can have multiple repos in github</li>
<li>one repository can have relations to other repositories</li>
</ul>
</li>
<li>
<p><em>Fork</em> Forking a repository means to get your own copy of the repository where you are in control!</p>
<ul>
<li>This is often done to get your own <em>remote</em> of someone elses repository</li>
</ul>
</li>
</ul>
    </div>
}