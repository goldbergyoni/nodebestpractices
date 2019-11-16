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

在package.json使用files数组的示例

```
{ 
  "files" : [
    "dist/moment.js",
    "dist/moment.min.js"
  ]
}
```

### 其他博客作者的说法

摘自博客[Liran Tal & Juan Picado at Snyk](https://snyk.io/blog/ten-npm-security-best-practices/):
> ... 另一个值得采纳的良好实践是是使用package.json的files属性，用它作为白名单，并指定要创建和安装的包中需要包含的文件数组（而忽略文件作为黑名单）。files属性和忽略文件都可以一起使用，以确定哪些文件应显式包含在包中，以及应排除哪些文件。同时使用这两个属性时，位于package.json的files属性位应优先于忽略文件。

摘自[npm blog](https://blog.npmjs.org/post/165769683050/publishing-what-you-mean-to-publish)
> ... 运行npm发布命令时，npm会捆绑当前目录中的所有文件。对于哪些内容应包括，哪些应忽略，它会为你做出一些决定。为了做出这些决策，它依赖项目目录中多个文件的内容。这些文件包括.gitignore和.npmignore及package.json中的files数组。它还始终包含某些文件并忽略其他文件。