# Use .dockerignore to prevent leaking secrets

<br/><br/>

### One Paragraph Explainer

The Docker build command copies the local files into the build context environment over a virtual network. Be careful - development and CI folders contain secrets like .npmrc, .aws, .env files and other sensitive files. Consequently, Docker images might hold secrets and expose them in unsafe territories (e.g. Docker repository, partners servers). In a better world the Dockerfile should be explicit about what is being copied. On top of this include a .dockerignore file that acts as the last safety net that filters out unnecessary folders and potential secrets. Doing so also boosts the build speed - By leaving out common development folders that have no use in production (e.g. .git, test results, IDE configuration), the builder can better utilize the cache and achieve better performance

<br/><br/>

### Code Example – A good default .dockerignore for Node.js

<details>
<summary><strong>.dockerignore</strong></summary>

```
**/node_modules/
**/.git
**/README.md
**/LICENSE
**/.vscode
**/npm-debug.log
**/coverage
**/.env
**/.editorconfig
**/.aws
**/dist
```

</details>

<br/><br/>

### Code Example Anti-Pattern – Recursive copy of all files

<details>
<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
# The next line copies everything
COPY . .

# The rest comes here

```

</details>