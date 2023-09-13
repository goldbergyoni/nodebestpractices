# Clean NODE_MODULE cache

<br/><br/>

### One Paragraph Explainer

Node package managers, npm & Yarn, cache the installed packages locally so that future projects which need the same libraries won't need to fetch from a remote repository. Although this duplicates the packages and consumes more storage - it pays off in a local development environment that typically keeps installing the same packages. In a Docker container this storage increase is worthless since it installs the dependency only once. By removing this cache, using a single line of code, tens of MB are shaved from the image. While doing so, ensure that it doesn't exit with non-zero code and fail the CI build because of caching issues - This can be avoided by including the --force flag.

*Please note that this is not relevant if you are using a multi-stage build as long as you don't install new packages in the last stage*

<br/><br/>

### Code Example – Clean cache

<details>
<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm cache clean --force

# The rest comes here
```

</details>
