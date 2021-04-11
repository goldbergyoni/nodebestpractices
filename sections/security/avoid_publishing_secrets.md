# Avoid publishing secrets to the npm registry

### One Paragraph Explainer
Precautions should be taken to avoid the risk of accidentally publishing secrets to public npm registries. An `.npmignore` file can be used to blacklist specific files or folders, or the `files` array in `package.json` can act as a whitelist.

To gain a view of what npm publish will really publish to the registry, the `--dry-run` flag can be added the npm publish command to provide a verbose view of the tarbell package created.

It is important to note that if a project is utilising both `.npmignore` and `.gitignore` files, everything which isn't in `.npmignore` is published to the registry(i.e. the `.npmignore` file overrides the `.gitignore`). This condition is a common source of confusion and is a problem that can lead to leaking secrets. Developers may end up updating the `.gitignore` file, but forget to update `.npmignore` as well, which can lead to a potentially sensitive file not being pushed to source control, but still being included in the npm package.

### Code example
Example .npmignore file
```
# Tests
test
coverage

# Build tools
.travis.yml
.jenkins.yml

# Environment
.env
.config

```

Example use of files array in package.json

```json
{ 
  "files" : [
    "dist/moment.js",
    "dist/moment.min.js"
  ]
}
```

### What other bloggers say

From the blog by [Liran Tal & Juan Picado at Snyk](https://snyk.io/blog/ten-npm-security-best-practices/):
> ... Another good practice to adopt is making use of the files property in package.json, which works as a whitelist and specifies the array of files to be included in the package that is to be created and installed (while the ignore file functions as a blacklist). The files property and an ignore file can both be used together to determine which files should explicitly be included, as well as excluded, from the package. When using both, the former the files property in package.json takes precedence over the ignore file.

From the [npm blog](https://blog.npmjs.org/post/165769683050/publishing-what-you-mean-to-publish)
> ... When you run npm publish, npm bundles up all the files in the current directory. It makes a few decisions for you about what to include and what to ignore. To make these decisions, it uses the contents of several files in your project directory. These files include .gitignore, .npmignore, and the files array in the package.json. It also always includes certain files and ignores others.