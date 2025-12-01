# Bootstrap container using node command instead of npm

## One paragraph explainer

We are used to see code examples where folks start their app using `CMD 'npm start'`. This is a bad practice. The `npm` binary will not forward signals to your app which prevents graceful shutdown [see](/sections/docker/graceful-shutdown.md). If you are using child-processes they won’t be cleaned up correctly in case of unexpected shutdown, leaving zombie processes on your host. `npm start` also results in having an extra process for no benefit. To start you app use `CMD ['node','server.js']`. If your app spawns child-processes also use `TINI` as an entrypoint.

### Code example - Bootstrapping using Node

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

CMD ["node", "server.js"]
```


### Code example - Using Tiny as entrypoint

```dockerfile
FROM node:12-slim AS build

# Add Tini if using child-processes
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

ENTRYPOINT ["/tini", "--"]

CMD ["node", "server.js"]
```

### Antipatterns

Using npm start
```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm cache clean --force

# don’t do that!
CMD "npm start"
```

Using node in a single string will start a bash/ash shell process to execute your command. That is almost the same as using `npm`

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

# don’t do that, it will start bash
CMD "node server.js"
```

Starting with npm, here’s the process tree:
```console
$ ps falx
  UID   PID  PPID   COMMAND
    0     1     0   npm
    0    16     1   sh -c node server.js
    0    17    16    \_ node server.js
```
There is no advantage to those two extra processes.

Sources:


https://maximorlov.com/process-signals-inside-docker-containers/


https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#handling-kernel-signals
