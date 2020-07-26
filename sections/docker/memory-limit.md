# Set memory limits using Docker only

<br/><br/>

### One Paragraph Explainer

A memory limit tells the process/container the maximum allowed memory usage - a request or usage beyond this number will kill the process (OOMKill). Applying this is a great practice to ensure one citizen doesn't drink alone all the juice and leave other components to starve. Memory limits also allow the runtime to place a container in the right instance - placing a container that consumes 500MB in an instance with 300MB memory available will lead to failures. Two different options allow configuring this limit: V8 flags (--max-old-space-size) and the Docker runtime. There is confusion around which of those to set: Ensure to always configure the Docker runtime limits as is has a much wider perspective for making the right decisions. First, given this limit, the runtime knows how to scale and create more resources. It can also make a thoughtful decision on when to crash - if a container has a short burst in memory request and the hosting instance is capable of supporting this, Docker will let the container stay alive. Docker also measures the actually used memory and not the allocated part (unlike v8 --max-old-space-size) so it can get Killed only when really needed. Last, With Docker the Ops experts can set various production memory configurations that can be taken into account like memory swap.

<br/><br/>

### Code Example – Memory limit with Docker

<details>
<summary><strong>Bash</strong></summary>

```
docker run --memory 512m my-node-app
```

</details>

<br/><br/>

### Code Example – Memory limit with Kubernetes

<details>
<summary><strong>Kubernetes deployment yaml</strong></summary>

```
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
    command: ["node index.js"]
```

</details>

<br/><br/>

### Code Example Anti-Pattern – Setting memory limit using V8 flags

<details>

<summary><strong>Kubernetes deployment yaml</strong></summary>

```
apiVersion: v1
kind: Pod
metadata:
  name: my-node-app
spec:
  containers:
  - name: my-node-app
    image: my-node-app
    command: ["node index.js --max-old-space-size=400"]
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
