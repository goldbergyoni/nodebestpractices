# Use multi-stage builds

### One Paragraph Explainer

Multi-stage builds allow to separate build- and runtime-specific environment details, such as available binaries, exposed environment variables, and even the underlying operating system.
Splitting up your Dockerfiles into multiple stages will help to reduce final image and container size as you'll only ship what you really need to run your application. Sometimes, you'll need to
include tools that are only needed during the build phase, for example development dependencies such as the TypeScript CLI. You can install it during the build stage and only use the final output in the run stage.
This also means your image will shrink as some dependencies won't get copied over. You might also have to expose environment variables during build that should not be present at runtime, such as API Keys and secrets
used for communicating with specific services. In the final stage, you can copy in pre-built resources such as your build folder, or production-only dependencies (which you can also fetch in a subsequent step).

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

Your .dockerignore will already filter out files that won't be needed for building and running your application.

```
# Don't copy in existing node_modules, we'll fetch our own
node_modules

# Docs are large, we don't need them in our Docker image
docs
```

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

RUN yarn

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
RUN yarn install --production

# Copy results from previous stage
COPY --chown=node:node --from=build /home/node/app/dist ./dist

CMD [ "node", "dist/app.js" ]
```