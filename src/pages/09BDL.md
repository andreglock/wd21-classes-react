# BDL The final countdown

- Pull Request Review / Code Review example
- New Project Example starting from GitHub
- `git branch` - show a listing of all the branches
- `git branch -v` - show a list of all the branches (verbose, show more information)
- `git commit -m "Improve README"` - create a new commit and give it a commit message at the same time!
- `git log` - Shows the commit history of a repository
- `git diff` - Show the differences between two states in git
    - For example, show the modifications you have done without committing
- `git checkout` - Can do many different things
    - `git checkout [Branchname]` - This one switches the currently active branch
    - `git checkout -b [Branchname]` - This one creates a new branch called "Branchname"
    - `git checkout -- [path_to_file]` - This one reverts the changes you have made to a file
- `git rm` - Remove a file from git
- Conflicts
    - Conflicts happen when a file is modified at the same time in two different places and those changes are merged
    - For example, Kai edits REAMDE.md in GitHub and Joel edits README.md in the local repository and tries to merge the changes
    - What needs to happen is we need to Resolve the Conflict
    - When a conflict happens, you need to:
        1. manually fix the conflicted files
        2. stage (git add) the fixed conflicted files
        3. make a new commit
        4. remember to use git status to help you along