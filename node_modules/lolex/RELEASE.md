# Rolling Lolex releases

You'll need a working installation of [git-extras](https://github.com/tj/git-extras) for this.

## Update Changelog.txt

Compile interesting highlights from [`git changelog`](https://github.com/tj/git-extras/blob/master/Commands.md#git-changelog) into Changelog.md

    git changelog --no-merges

## Update AUTHORS

    git authors --list > AUTHORS

## Build a new bundle and commit changed files

    npm run bundle
    git add lolex.js AUTHORS History.md
    git commit -m "Prepare for new release"

## Create a new version

```
$ npm version x.y.z
```

Updates package.json and creates a new tag.

## Create a new PR
The `master` branch is protected.
You can merge it yourself.

## Push new commits and tags
> Assuming that `origin` points to `github.com/sinonjs/lolex`
```
git push --follow-tags origin
```

## Publish to NPM

```
$ npm publish
```

## Create a GitHub release
Create a GitHub release where you highlight
interesting additions from the changelog.
Just add a release notes to [the existing tag](https://github.com/sinonjs/lolex/tags).

