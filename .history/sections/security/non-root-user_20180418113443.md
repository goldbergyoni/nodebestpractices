# Run Node as Noon-Root User

### One Paragraph Explainer
According to the 'Principle of least privilege' a user/process must be able to access only the information and resources that are necessary. Granting root access to an attacker opens a whole new world of malicious ideas like routing traffic to other servers. In practice, most Node apps don't need a root access and don't run with such privilege. However, there are two common scenario that might push to root usage: (1) to gain access to privilege port (e.g. port 80) Nodejs must run as root (2) Docker containers by default run as root(!). It's recommended for Node webserver to listen to non-privilege ports and rely on a reverse-proxy like nginx redirect from port 80. When building a docker image, highly secured apps should run the container with an alternate non-root user. Most docker clusters (e.g. Swarm, Kubernetes) allow setting the security context declaratively 

### Code example - Building a Docker image as noon-root
```javascript
FROM node:some-version-here
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
USER node
CMD ["node", "server.js"]
```

### What other bloggers say
From the Repository docker-node by [eyalzek](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user):
> By default, Docker runs container as root which inside of the container can pose as a security issue. You would want to run the container as an unprivileged user wherever possible. The node images provide the node user for such purpose. The Docker Image can then be run with the node user in the following way:

-u "node"

<br/>
From the blog Don't run Node.js as root by [Olivier Lalonde](http://syskall.com/dont-run-node-dot-js-as-root/):
> Indeed, if you are running your server as root and it gets hacked through a vulnerability in your code, the attacker will have total control over your machine. This means the attacker could potentially wipe out your whole disk or worse. On the other hand, if your server runs with the permissions of a regular user, the attacker will be limited by those permissions.

<br/>
From the blog Developing Secure Node.js Applications — A Broad Guide by [Deepal Jayasekara](https://jsblog.insiderattack.net/developing-secure-node-js-applications-a-broad-guide-286afdec69ce):
> Never run Node.js as root. Running node.js as root will make it worse if an attacker somehow gains control over your application. In this scenario, attacker would also gain root privileges which could result in a catastrophe. If you need to run your application on port 80 or 443, you can do port forwarding using iptables or you can place a front-end proxy such as nginx or apache which routes request from port 80 or 443 to your application

