# 使用.dockerignore防止泄漏机密

<br/><br/>

### 一段解释

Docker的build命令会通过一个虚拟网络（virtual network）拷贝本地文件到构建的上下文环境。注意 - 开发和CI文件夹会包含机密文件，比如.npmrc，.aws，.env，以及其他一些敏感文件。最终，Docker镜像可能会包含机密信息，并在不安全的区域暴露它们（例如，Docker repository，partners servers）。一个更好的方式是，Dockerfile应该明确地描述哪些文件需要被复制。除此之外，包含一个.dockerginore文件，还充当最后一个安全网，过滤掉不必要的文件夹和潜在的机密文件。这样做还可以加快构建速度 - 通过排除在生产环境并不会用到的通用开发文件夹（例如.git，测试结果，IDE配置），整个构建过程可以更好的使用缓存，并取得一个更佳的性能。

<br/><br/>

### 代码示例 – 对于Node.js，一个好的默认.dockerignore示例

<details>
<summary><strong>.dockerignore</strong></summary>

```
**/node_modules/
**/.git
**/README.md
**/LICENSE
**/.vscode
**/npm-debug.log
**/coverage
**/.env
**/.editorconfig
**/.aws
**/dist
```

</details>

<br/><br/>

### 代码示例 反模式 - 遍历拷贝所有文件

<details>
<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
# 下一行拷贝所有文件
COPY . .

# 剩余部分

```

</details>
