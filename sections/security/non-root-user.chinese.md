# 使用非Root用户运行Node.js

### 一段解释

根据'最小特权原则'，一个用户/进程必须只能够访问必要的信息和资源。授予攻击者root访问权限将打开一个充满恶意想法的全新世界, 例如将流量路由到其他服务器。实际上, 大多数Node.js应用程序不需root访问权限, 也不使用此类权限来运行。但是, 有两种常见的场景可能会需要root权限:

- 获得对特权端口的访问权限(例如，端口80)，Node.js必须运行在root下
- 默认情况下, docker容器以root身份运行(!)。建议让Node.js的web应用程序侦听非特权端口, 并依靠反向代理(如nginx)将传入流量从端口80重定向到您的Node.js应用程序。在构建Docker映像时, 高度安全的应用应使用可替代的非root用户运行容器。大多数的Docker集群(例如Swarm, Kubernetes)允许以声明方式设置安全上下文。

### 代码示例 - 使用非root用户构建Docker容器

```javascript
FROM node:latest
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
USER node
CMD ["node", "server.js"]
```

<br/><br/>

### 博客引用: "默认情况下, docker容器以root身份运行"

摘自仓库docker-node从[eyalzek](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user):
> 默认情况下, Docker将以root身份运行容器, 容器内部可能会构成安全问题。您可能希望以无特权用户的身份运行容器。node映像为了此目的提供给了node用户。然后, node用户可以通过以下方式运行Docker映像: "-u 'node'"。

<br/><br/>

### 博客引用: "The attacker will have total control over your machine"

From the blog Don't run Node.js as root by [Olivier Lalonde](http://syskall.com/dont-run-node-dot-js-as-root/):
> Indeed, if you are running your server as root and it gets hacked through a vulnerability in your code, the attacker will have total control over your machine. This means the attacker could potentially wipe out your whole disk or worse. On the other hand, if your server runs with the permissions of a regular user, the attacker will be limited by those permissions.

<br/><br/>

### 博客引用: "If you need to run your application on port 80 or 443, you can do port forwarding"

From the blog Developing Secure Node.js Applications — A Broad Guide by [Deepal Jayasekara](https://jsblog.insiderattack.net/developing-secure-node-js-applications-a-broad-guide-286afdec69ce):
> Never run Node.js as root. Running node.js as root will make it worse if an attacker somehow gains control over your application. In this scenario, attacker would also gain root privileges which could result in a catastrophe. If you need to run your application on port 80 or 443, you can do port forwarding using iptables or you can place a front-end proxy such as nginx or apache which routes request from port 80 or 443 to your application
