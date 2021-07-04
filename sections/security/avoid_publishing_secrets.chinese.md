# 避免将机密信息发布到NPM仓库

### 一段解释
应采取预防措施以避免意外将机密发布到公共 npm 仓库的风险。`.npmignore`文件可用于将特定文件或文件夹列入黑名单，或者将`package.json` 中的 `files` 数组可以充当白名单。

要查看 npm publish 将真正发布到npm中的内容，可以在 npm publish 命令中添加 `--dry-run` 标志，以查看创建的 tarbell 包的详情。

需要注意的是，如果一个项目同时使用了`.npmignore`和`.gitignore`文件，那么不在`.npmignore`中的所有内容都会被发布到npm仓库中（即`.npmignore` 文件覆盖了`.gitignore` 文件)。 这种情况是混乱的源头，可能导致泄露机密的问题。开发人员可能最终会更新 `.gitignore` 文件，但忘记更新 `.npmignore`，这可能导致潜在的敏感文件未被推送到源代码控制，但仍包含在 npm 包中。

### 代码示例
.npmignore文件示例
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

package.json 中使用文件数组的示例

```json
{
  "files" : [
    "dist/moment.js",
    "dist/moment.min.js"
  ]
}
```

### 其他博主怎么说

来自 [Liran Tal & Juan Picado at Snyk] 的博客（https://snyk.io/blog/ten-npm-security-best-practices/）：
> ... 另一个好的体验是利用 package.json 中的 files 属性，它用作白名单并指定要包含在要创建和安装的包中的文件数组（而忽略文件起到黑名单的作用）。files 属性和忽略文件都可以一起使用来确定哪些文件应该明确地包含在包中，以及从包中排除。使用两者时，前者 package.json 中的 files 属性优先于忽略文件。

来自 [npm blog](https://blog.npmjs.org/post/165769683050/publishing-what-you-mean-to-publish)
> ... 当您运行 npm publish 时，npm 会打包当前目录中的所有文件。它会为您做出关于包含哪些内容和忽略哪些内容的一些决定。为了做出这些决定，它使用了项目目录中几个文件的内容。这些文件包括 .gitignore、.npmignore 和 package.json 中的 files 数组。它也总是包含某些文件而忽略其他文件。