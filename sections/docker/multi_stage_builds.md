# Use multi-stage builds

### One Paragraph Explainer

Multi-stage builds allow to separate build- and runtime-specific environment details, such as available binaries, exposed environment variables, and even the underlying operating system. Splitting up your Dockerfiles into multiple stages will help to reduce final image and container size as you'll only ship what you really need to run your application. Sometimes you'll need to include tools that are only needed during the build phase, for example development dependencies such as the TypeScript CLI. You can install it during the build stage and only use the final output in the run stage. This also means your image will shrink as some dependencies won't get copied over. You might also have to expose environment variables during build that should not be present at runtime (see [avoid build time secrets](./avoid-build-time-secrets.md)), such as API Keys and secrets used for communicating with specific services. In the final stage, you can copy in pre-built resources such as your build folder, or production-only dependencies (which you can also fetch in a subsequent step).

### Example

Let's imagine the following directory structure

```
- Dockerfile
- src/
    - index.ts
- package.json
- yarn.lock
- .dockerignore
- docs/
  - README.md
```

Your [.dockerignore](../docker/docker-ignore.md) will already filter out files that won't be needed for building and running your application.


sections/docker/docker-ignore.md
```
# Don't copy in existing node_modules, we'll fetch our own
node_modules

# Docs are large, we don't need them in our Docker image
docs
```

#### Dockerfile with multiple stages

Since Docker is often used in continuous integration environments it is recommended to use the `npm ci` command (instead of `npm install`). It is faster, stricter and reduces inconsistencies by using only the versions specified in the package-lock.json file. See [here](https://docs.npmjs.com/cli/ci.html#description) for more info. This example uses yarn as package manager for which the equivalent to `npm ci` is the `yarn install --frozen-lockfile` [command](https://classic.yarnpkg.com/en/docs/cli/install/).

```dockerfile
FROM node:14.4.0 AS build

COPY --chown=node:node . .
RUN yarn install --frozen-lockfile && yarn build


FROM node:14.4.0

USER node
EXPOSE 8080

# Copy results from previous stage
COPY --chown=node:node --from=build /home/node/app/dist /home/node/app/package.json /home/node/app/yarn.lock ./
RUN yarn install --frozen-lockfile --production

CMD [ "node", "dist/app.js" ]
```

#### Dockerfile with multiple stages and different base images

```dockerfile
FROM node:14.4.0 AS build

COPY --chown=node:node . .
RUN yarn install --frozen-lockfile && yarn build


# This will use a minimal base image for the runtime
FROM node:14.4.0-alpine

USER node
EXPOSE 8080

# Copy results from previous stage
COPY --chown=node:node --from=build /home/node/app/dist /home/node/app/package.json /home/node/app/yarn.lock ./
RUN yarn install --frozen-lockfile --production

CMD [ "node", "dist/app.js" ]
```

#### Full Dockerfile with multiple stages and different base images

Our Dockerfile will contain two phases: One for building the application using the fully-featured Node.js Docker image,
and a second phase for running the application, based on the minimal Alpine image. We'll only copy over the built files to our second stage,
and then install production dependencies.

```dockerfile
# Start with fully-featured Node.js base image
FROM node:14.4.0 AS build

USER node
WORKDIR /home/node/app

# Copy dependency information and install all dependencies
COPY --chown=node:node package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# Copy source code (and all other relevant files)
COPY --chown=node:node src ./src

# Build code
RUN yarn build


# Run-time stage
FROM node:14.4.0-alpine

# Set non-root user and expose port 8080
USER node
EXPOSE 8080

WORKDIR /home/node/app

# Copy dependency information and install production-only dependencies
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

# Copy results from previous stage
COPY --chown=node:node --from=build /home/node/app/dist ./dist

CMD [ "node", "dist/app.js" ]
```
