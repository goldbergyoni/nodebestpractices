# Install packages with npm ci in production

<br/><br/>

### One Paragraph Explainer

You locked your dependencies following [**Lock dependencies**](./lockdependencies.md) but you now need to make sure those exact package versions are used in production.

Using `npm ci` to install packages will do exactly that and more.
* It will fail if your `package.json` and your `package-lock.json` do not match (they should) or if you don't have a lock file
* If a `node_modules` folder is present it will automatically remove it before installing
* It is faster! Nearly twice as fast according to [the release blog post](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)

### When can this be useful?
You are guaranteed that you CI environment or QA will test your software with exactly the same package version that the one you will later send to production.
Also, if for some reason someone manually changes package.json, not through a cli command but rather by directly editing package.json, a gap between package.json & package-lock.json is created and an error will be thrown.

### What npm says

From [npm ci documentation](https://docs.npmjs.com/cli/ci.html)
> This command is similar to npm-install, except it’s meant to be used in automated environments such as test platforms, continuous integration, and deployment – or any situation where you want to make sure you’re doing a clean install of your dependencies.

[Blog post announcing the release of `ci` command](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)
>  The command offers massive improvements to both the performance and reliability of builds for continuous integration / continuous deployment processes, providing a consistent and fast experience for developers using CI/CD in their workflow.

[npmjs: dependencies and devDepencies](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)
>    "dependencies": Packages required by your application in production.
>    "devDependencies": Packages that are only needed for local development and testing.

<br/><br/>
