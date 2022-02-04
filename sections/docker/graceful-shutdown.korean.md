# Shutdown gracefully

<br/><br/>

### One Paragraph Explainer

쿠버네티스같은 도커화된 런타임 환경에서, 컨테이너의 생성과 종료는 아주 빈번하다. 이건 에러가 발생했을 때만이 아니라 컨테이너 재분배, 혹은 버전 업그레이드 등과 같은 나쁘지 않은 이유에서도 발생한다. 이는 요청(SIGTERM signal)을 보내면서 실행되는데 30초 동안의 안정적인 과정을 통해 진행된다. 개발자들이 일상적으로 계속되는 요청을 처리하면서 리소스들을 처리하는 것이 확실해질 수 있게 하는 과제를 갖게 된다. 그렇지 않는다면 수많은 유저들은 요청에 대한 응답을 얻지 못할 것이다. 실행하는 단계에서는 프로세스를 중단하는 코드가 반드시 진행중인 요청을 모두 처리한 이후, 신속하게 진행되어야 한다. 말하는건 쉽다. 실질적으로 여러 부분의 조율이 필요하다: 로드벨런서에 이후의 요청에 대한 준비가 되어있지 않음을 말한다. 현재의 요청이 모두 처리되기 전에 새로운 요청을 처리하지 않는다. 리소스를 정리하고 끄기 전에 유용한 정보를 로그로 남긴다. 만약 살아있는 연결이 남아있을 경우, 새로운 연결이 생성이 된 이후 클라이언트는 반드시 알림을 받아야 한다. [Stoppable](https://github.com/hunterloftis/stoppable)는 이 과정에 도움이 될 수 있다.

<br/><br/>

### Code Example – Placing Node.js as the root process allows passing signals to the code (see [bootstrap using node](./bootstrap-using-node.md))

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim

# Build logic comes here

CMD ["node", "index.js"]
#This line above will make Node.js the root process (PID1)

```

</details>

<br/><br/>

### Code Example – Using Tiny process manager to forward signals to Node

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim

# Build logic comes here

ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

CMD ["node", "index.js"]
#Now Node will run a sub-process of TINI which acts as PID1

```

</details>

<br/><br/>

### Code Example Anti Pattern – Using npm scripts to initialize the process

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim

# Build logic comes here

CMD ["npm", "start"]
#Now Node will run a sub-process of npm and won't receive signals
# 이런식으로 실행할 경우 노드는 프로세스의 신호를 받지 못한다. node -> sever.js / npm -> node -> server.js

```

</details>

<br/><br/>

### Example - The shutdown phases

From the blog, [Rising Stack](https://blog.risingstack.com/graceful-shutdown-node-js-kubernetes/)

![alt text](../../assets/images/Kubernetes-graceful-shutdown-flowchart.png "The shutdown phases")
