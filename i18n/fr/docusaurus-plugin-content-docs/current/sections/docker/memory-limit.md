# Set memory limits using both Docker and v8

<br/><br/>

### One Paragraph Explainer

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