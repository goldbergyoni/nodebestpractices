# 우아하게 종료해라

<br/><br/>

### 한문단 요약

쿠버네티스와 같은 도커화된 런타임에서 컨테이너는 자주 생성되고 삭제된다. 이것은 오류가 발생했을 때뿐만 아니라 컨테이너 재배치, 새 버전으로 업그레이드와 같은 합당한 이유로 발생한다. 30초의 유예 기간이 있는 프로세스에 알림(SIGTERM 신호)을 보내면 된다. 이로 인해 개발자는 앱이 진행 중인 요청을 적시에 처리하고 리소스를 정리해야 한다. 그렇게 하지 않으면 수천 명의 사용자가 응답을 받지 못할 것이다. 구현하는 측면에서, 종료 코드는 진행 중인 모든 요청이 응답하고 리소스를 정리할때까지 기다려야 한다.
말은 쉽지만 실제로 여러가지를 조율해야 한다: 헬스 체크를 통해서 앱이 더 많은 요청을 처리할 준비가 되지 않았다고 LoadBalancer에게 알린다, 기존 요청이 완료될 때까지 기다린다, 새로운 요청의 처리를 피한다, 리소스를 정리하고 최종적으로 종료하기 전에 중요정보를 기록한다.
계속 유지되는 연결을 사용 중인 경우, 클라이언트는 새로운 연결이 설정되어야 함을 알려야 한다. [Stoppable](https://github.com/hunterloftis/stoppable)과 같은 라이브러리는 이를 수행하는데 크게 도움이 될 수 있다.

<br/><br/>


### 예시 코드 – Node.js를 루트 프로세스로 배치하면 코드에 신호를 전달할 수 있다. ([node를 사용한 bootstrap](./bootstrap-using-node.md)를 참고해라)

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim

# 여기에 빌드 로직을 작성해라

CMD ["node", "index.js"]
#이것은 Node.js를 루트 프로세스(PID1)로 만든다.

```

</details>

<br/><br/>

### 예시 코드 – Tiny 프로세스 관리자를 사용하여 노드에 신호 전달

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim

# 여기에 빌드 로직을 작성해라

ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

CMD ["node", "index.js"]
#노드는 PID1 역할을 하는 TINI의 하위 프로세스를 실행한다.

```

</details>

<br/><br/>

### 안티 패턴 예시 코드 – npm 스크립트를 사용한 프로세스 초기화

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim

# 여기에 빌드 로직을 작성해라

CMD ["npm", "start"]
#노드는 npm의 하위 프로세스를 실행하고 신호를 수신하지 않는다.

```

</details>

<br/><br/>

### 예시 - 종료 단계

[Rising Stack](https://blog.risingstack.com/graceful-shutdown-node-js-kubernetes/)의 블로그 인용

![alt text](../../assets/images/Kubernetes-graceful-shutdown-flowchart.png "종료단계")
