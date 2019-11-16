# 避免将秘钥发布到npm registry

### 一段解释
应采取预防措施，以避免向公共npm registre意外发布秘钥的风险。一个'.npmignore'文件可用于将特定文件或文件夹列入黑名单，或者把`package.json`中的`files`文件组充当白名单。

为了获得npm真正将发布到registry的视图，可以添加`--dry-run`标志到npm发布命令，以提供被创建的tarbell包的详细视图。

请务必注意，如果项目同时使用`.npmignore`和`.gitignore`文件，一切都不在`.npmignore`中的文件会被发布到registry（例如，`.npmignore`覆盖`.gitignore`）。这种情况是混淆的常见来源，是一个可能导致泄露秘钥的问题。开发人员最终可能会更新`.gitignore`文件，但忘记更新`.npmignore`，这可能导致一个潜在的秘钥文件没有推送到源代码管理应用中，但仍包含在npm包里。

### 代码示例
.npmignore示例文件
```
#tests
test
coverage

#build tools
.travis.yml
.jenkins.yml

#environment
.env
.config

```

Example use of files array in package.json

```
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