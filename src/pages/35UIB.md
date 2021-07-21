# GH Pages

## Repository first manual method

1. Create empty repo
2. Clone repo
3. Create content and push to master
4. Push to new branch called `gh-pages`
    `git push -u origin master:gh-pages`
5. Go to repository settings in Github!
    Check the published address

## Tool assisted method

- `gh-pages` -- `npm install -g gh-pages`
- After installing, just running `gh-pages` should work
- *HOWEVER*
    - Currently this will NOT ork without a package.json file!!
    - Bug in latest version https://github.com/tschaub/gh-pages/issues/354