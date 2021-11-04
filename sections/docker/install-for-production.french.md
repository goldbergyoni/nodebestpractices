# Remove development dependencies

<br/><br/>

### One Paragraph Explainer

Dev dependencies greatly increase the container attack surface (i.e. potential security weakness) and the container size. As an example, some of the most impactful npm security breaches were originated from devDependencies like [eslint-scope](https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes) or affected dev packages like [event-stream that was used by nodemon](https://snyk.io/blog/a-post-mortem-of-the-malicious-event-stream-backdoor/). For those reasons the image that is finally shipped to production should be safe and minimal. Running npm install with a `--production` is a great start, however it gets even safer to run `npm ci` that ensures a fresh install and the existence of a lock file. Removing the local cache can shave additional tens of MB. Often there is a need to test or debug within a container using devDependencies - In that case, [multi stage builds](./multi_stage_builds.md) can help in having different sets of dependencies and finally only those for production.

<br/><br/>

### Code Example – Installing for production

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

<br/><br/>

### Code Example – Installing for production with multi-stage build

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:14.8.0-alpine AS build

COPY --chown=node:node package.json package-lock.json ./
# ✅ Safe install
RUN npm ci
COPY --chown=node:node src ./src
RUN npm run build


# Run-time stage
FROM node:14.8.0-alpine

COPY --chown=node:node --from=build package.json package-lock.json ./
COPY --chown=node:node --from=build node_modules ./node_modules
COPY --chown=node:node --from=build dist ./dist

# ✅ Clean dev packages
RUN npm prune --production

CMD [ "node", "dist/app.js" ]
```

</details>


<br/><br/>

### Code Example Anti-Pattern – Installing all dependencies in a single stage dockerfile

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
# Two mistakes below: Installing dev dependencies, not deleting the cache after npm install
RUN npm install

# The rest comes here
```

</details>

<br/><br/>

### Blog Quote: "npm ci is also more strict than a regular install"

From [npm documentation](https://docs.npmjs.com/cli/ci.html)

> This command is similar to npm-install, except it’s meant to be used in automated environments such as test platforms, continuous integration, and deployment – or any situation where you want to make sure you’re doing a clean install of your dependencies. It can be significantly faster than a regular npm install by skipping certain user-oriented features. It is also more strict than a regular install, which can help catch errors or inconsistencies caused by the incrementally-installed local environments of most npm users.