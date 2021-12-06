# 도커와 V8엔진을 사용하여 메모리를 제한해라

<br/><br/>

### One Paragraph Explainer

메모리 제한은 프로세스/컨테이너에 허용된 최대 메모리 사용량을 알려준다. 이를 초과하는 요청이나 사용이 발생하면 프로세스를 종료한다 이를 적용하면 하나의 프로세스/컨테이너만 독식하지 않고 다른 구성요소가 자원을 할당받지 못해 죽지 않도록 하는 방법이다. 또한 메로리 제한을 통해 런타임은 컨테이너를 올바른 인스턴스에 배치할 수 있다. 사용가능한 메모리가 300MB인 인스턴스에 500MB를 소비하는 컨테이너를 배치하면 오류가 발생한다. 두가지 옵션을 통해 이러한 제한을 구현할 수 있다: V8엔진의 --max-old-space-size 플래그와 도커 런타임은 둘다 절대적으로 필요하다. 올바른 헬스 결정을 내리는데 훨씬 넓은 관점을 갖기 위해 도커 런타임 제한을 항상 고려하는 것은 보장한다. 이러한 제한이 주어지면 런타임은 더 많은 리소스를 확장하고 생성하는 방법을 알고 있다.
또한 충돌 시기에 신중한 결정을 내릴 수 있다. 컨테이너에 짧은 메모리 요청이 있고 호스팅 인스턴스가 이를 지원할 수 있는 경우 오커 컨테이너를 활성 상태로 유지한다.
마지막으로 Ops 전문가는 도커를 사용하여 메모르 스왑과 같이 고려할 수 있는 다양한 프로덕션 메모리 구성을 설정할 수 있다. 호스트 환경에서 이것만으로는 충분하지 않다. V8엔진의 --max-old-space-size플래그를 설정해주지 않으면 JS 런타임은 한계에 가까워질 때 GC를 동작하지 않으며 50~60%의 자원만을 사용해도 충돌이 발생한다. 따라서 V8엔진의 메모리 제한을 도커 메모리 제한의 75~100%로 설정해라.

<br/><br/>

### 예시 코드 – 도커를 사용한 메모리 제한

<details>
<summary><strong>Bash</strong></summary>

```bash
docker run --memory 512m my-node-app
```

</details>

<br/><br/>

### 예시 코드 – 쿠버네티스와 V8엔진을 사용한 메모리 제한

<details>
<summary><strong>Kubernetes deployment yaml</strong></summary>

```yml
apiVersion: v1
kind: Pod
metadata:
  name: my-node-app
spec:
  containers:
  - name: my-node-app
    image: my-node-app
    resources:
      requests:
        memory: "400Mi"
      limits:
        memory: "500Mi"
    command: ["node index.js --max-old-space-size=350"]
```

</details>

<br/><br/>

### 쿠버네티스 공식문서: "당신이 구체적인 메모리 제한을 정하지 않는다면"

[쿠버네티스 공식문서](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/)로 부터

> 컨테이너에는 사용하는 메모리의 상한이 없다. 컨테이너는 실행 중인 노드에서 사용 가능한 모든 메모리를 사용할 수 있으며, 이는 차례로 OOM 킬러를 호출할 수 있다. 또한 리소스 제한이 없는 컨테이너가 OOM 킬러에 의해 죽을 확률이 높다.
<br/><br/>

### 도커 공식문서: "OOME를 발생시키고 종료하기 시작한다."

[도커 공식문서](https://docs.docker.com/config/containers/resource_constraints/)로 부터

> 실행중인 컨테이너가 호스트 시스템의 메모리를 너무 많이 사용하지 않도록 하는 것이 중요하다. 리눅스 호스트에서 커널이 중요한 시스템 기능을 수행하기에 메모리의 부족을 감지하면 OOME 또는 메모리 부족 예외가 발생하고 메모리를 확보하기 위해 프로세스를 종료한다.

<br/><br/>

### Node.js 공식문서: "V8엔진은 GC에 더 많은 시간을 사용할 것이다."

[Node.js 공식문서](https://nodejs.org/api/cli.html#cli_max_old_space_size_size_in_megabytes)로 부터

> V8엔진의 오래된 메모리 섹션의 최대 크기를 설정해라. 메모리 사용량이 한계에 가까워지면 V8엔진은 사용하지 않는 메모리를 해제하기 위해 GC에 더 많ㅇ느 시간을 사용한다. 2GB의 메모리가 있는 시스템에서 다른 용도를 위해 일부 메모리를 남겨두고 1.5GB로 메모리 사용량을 제한하는 것이 좋다.