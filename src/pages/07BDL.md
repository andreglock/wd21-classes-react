# BDL Day 7 :)

## GIT

- Git tracks the version history of files
- The history of a project is a timeline containing sets of changes (commits)
- Terminology
    - Commit = Set of changes to files
    - Master branch = Main branch of your repository
    - Repository = The place where your project code exists
    - Branch = Your "copy" for working with the code
    - Workflow = Order of operations, a guideline on when and how to work
- The `git` command
    - Has "subcommands" or arguments
    - The git command does things depending on where you are
    - `git status` -- shows the status of git inside the current working directory
    - `git clone [repository_address]` -- get a local copy of a repository, inside a new directory
    - Has tab completion!
- The .git folder defines that a folder is a git repository
- The .gitignore file is a list of paths
- The .gitignore paths --- yeah, git ignores them
- To changes branches, run `git checkout [branchname]`
- To get a list of all the branches, run `git branch`
- Live coding example...
    - Workflow:
        1. Clone the repository
        1. Assign task to yourself
        2. Create a branch for this new task `git checkout -b [branchname]`
        3. Made some changes (new file and edited a file)
        4. We staged the file we added with `git add [newfile]`
        5. We staged the file we changed with `git add [oldfile]`
        6. You can stage many changes (files) at the same time, such as with `git add [foldername]`
        7. You can finalize a commit with `git commit`
            - If git asks you to, tell it who you are using the provided commands
            - You need to add some kind of commit message.
            - Commit messages are often imperative, such as "Update README"
        8. Update our changes to github using the command `git push`
            - Because we created the branch locally, we need to tell GitHub about it when pushing:
            - `git push --set-upstream origin issue-11-add-dogs` - here "origin" refers to github
        9. After the push is done, create a new Pull Request in GitHub
        10. Merge the pull request
        11. Close the issue.
- Live coding example 2: the same again, but twice!
    - Remember to update your local repository using `git pull`

## More git stuff

- Git Remotes
    - git works on repositories
    - you can have multiple repositories on your computer
    - you can have multiple repos in github
    - one repository can have relations to other repositories

- *Fork* Forking a repository means to get your own copy of the repository where you are in control!
    - This is often done to get your own *remote* of someone elses repository

