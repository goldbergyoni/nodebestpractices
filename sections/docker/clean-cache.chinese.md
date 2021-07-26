# 清除NODE_MODULE缓存

<br/><br/>

### 一段解释

node包管理器，npm和Yarn，会本地缓存安装过的包，以便在未来的项目中，如果需要同样的包，就不需要从远程仓库重新获取。尽管这会导致包的重复，消耗更多的存储 - 作为回报，它维持了一个安装相同包的本地开发环境。而在Docker容器中，这种存储是没什么价值的，因为它仅仅安装依赖一次。通过移除这类缓存，只需要使用一行代码，上十MB的存储会从image中移除。当这样做的时候，确保它不会通过非零（non-zero）码退出，因而由于缓存问题导致CI构建失败 - 这可以通过添加一个force标志位来避免。

*请注意如果您使用multi-stage构建，只要您在最后阶段不安装新的包，清除缓存是没意义的*

<br/><br/>

### 代码示例 - 清除缓存

<details>
<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm cache clean --force

# 剩余部分
```

</details>