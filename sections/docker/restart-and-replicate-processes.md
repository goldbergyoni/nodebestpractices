# Let the Docker orchestrator restart and replicate processes

<br/><br/>

### One Paragraph Explainer

Docker runtime orchestrators like Kubernetes are really good at making containers health and placement decisions: They will take care to maximize the number of containers, balance them across zones, and take into account many cluster factors while making these decisions. Goes without words, they identify failing processes (i.e., containers) and restart them in the right place. Despite that some may be tempted to use custom code or tools to replicate the Node process for CPU utilization or restart the process upon failure (e.g., Cluster module, PM2). These local tools don't have the perspective and the data that is available on the cluster level. For example, when the instances resources can host 3 containers and given 2 regions or zones, Kubernetes will take care to spread the containers across zones. This way, in case of a zonal or regional failure, the app will stay alive. On the contrary side when using local tools for restarting the process the Docker orchestrator is not aware of the errors and can not make thoughtful decisions like relocating the container to a new instance or zone.

<br/><br/>

### Code Example – Invoking Node.js directly without intermediate tools

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim

# The build logic comes here

CMD ["node", "index.js"]
```

</details>

<br/><br/>

### Code Example Anti Pattern – Using a process manager

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim

# The build logic comes here

CMD ["pm2-runtime", "index.js"]
```

</details>
