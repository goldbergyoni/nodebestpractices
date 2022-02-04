# Set memory limits using both Docker and v8

<br/><br/>

### One Paragraph Explainer

메모리 제한은 프로세스/컨테이너에 최대 메모리 사용량을 알려준다. 제한치 이상의 요청 혹은 사용량은 해당 프로세스의 종료로 이어진다. 이런 정책을 적용하는 것은 하나의 컨테이너가 모든 리소스를 소모하지 않게 한다. 메모리 제한은 또한 런타임이 올바른 컨테이너에 자리할 수 있게 한다. 300mb의 메모리를 소모하는 인스턴스에 500mb크기의 컨테이너를 배치하는 것은 문제를 일으킬 수 있다. 두개의 다른 옵션은 다음과 같은 설정상의 제한치를 이끌어 낸다: v8 플래그(max-old-space-size)와 도커 런타임 둘다 반드시 필요하다. 항상 도커 런타임 제한이 더 넉넉해야한다. 제한을 부여하고, 런타임이 어떻게 스케일링 해야 하는지 알아야 한다. 만약 컨테이너의 메모리가 순간적으로 요청이 많아지면 서포트 할 수 잇어야 한다. 도커는 컨테이너가 살아있을 수 있도록 할것이다. 마지막으로 도커 전문가는 다양한 프로덕션 메모리 설정을 할 수 있다. 이 자체로는 충분하지 않다 v8엔진의 max old space size설정 없이는. 로스트 환경의 사용량이 50%수준만 다가가도 자바 스크립트 런타임은 가비지 컬렉션의 기능을 하지 못할 수도 있다.

A memory limit tells the process/container the maximum allowed memory usage - a request or usage beyond this number will kill the process (OOMKill). Applying this is a great practice to ensure one citizen doesn't drink all the juice alone and leaves other components to starve. Memory limits also allow the runtime to place a container in the right instance - placing a container that consumes 500MB in an instance with 300MB memory available will lead to failures. Two different options allow configuring this limit: V8 flags (--max-old-space-size) and the Docker runtime, both are absolutely needed. Ensure to always configure the Docker runtime limits as it has a much wider perspective for making the right health decisions: Given this limit, the runtime knows how to scale and create more resources. It can also make a thoughtful decision on when to crash - if a container has a short burst in memory request and the hosting instance is capable of supporting this, Docker will let the container stay alive. Last, with Docker the Ops experts can set various production memory configurations that can be taken into account like memory swap. This by itself won't be enough - Without setting v8's --max-old-space-size, the JavaScript runtime won't push the garbage collection when getting close to the limits and will also crash when utilizing only 50-60% of the host environment. Consequently, set v8's limit to be 75-100% of Docker's memory limit.

<br/><br/>

### Code Example – Memory limit with Docker

<details>
<summary><strong>Bash</strong></summary>

```bash
docker run --memory 512m my-node-app
```

</details>

<br/><br/>

### Code Example – Memory limit with Kubernetes and v8

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

### Kubernetes documentation: "If you do not specify a memory limit"

From [K8S documentation](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/)

> The Container has no upper bound on the amount of memory it uses. The Container could use all of the memory available on the Node where it is running which in turn could invoke the OOM Killer. Further, in case of an OOM Kill, a container with no resource limits will have a greater chance of being killed.

<br/><br/>

### Docker documentation: "it throws an OOME and starts killing processes "

From [Docker official docs](https://docs.docker.com/config/containers/resource_constraints/)

> It is important not to allow a running container to consume too much of the host machine’s memory. On Linux hosts, if the kernel detects that there is not enough memory to perform important system functions, it throws an OOME, or Out Of Memory Exception, and starts killing processes to free up memory.

<br/><br/>

### Node.js documentation: "V8 will spend more time on garbage collection"

From [Node.js official docs](https://nodejs.org/api/cli.html#cli_max_old_space_size_size_in_megabytes)

> Sets the max memory size of V8's old memory section. As memory consumption approaches the limit, V8 will spend more time on garbage collection in an effort to free unused memory. On a machine with 2GB of memory, consider setting this to 1536 (1.5GB) to leave some memory for other uses and avoid swapping.
