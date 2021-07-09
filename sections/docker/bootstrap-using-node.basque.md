# Abiarazi edukiontzia node komandoa erabiliz npm erabili ordez

## Azalpena

Ohikoa da jendeak `CMD 'npm start'` erabiltzea bere aplikazioa abiarazteko kodea egitea. Praktika txarra da hori, ordea. `npm` bitarrak ez du seinalerik birbidaliko zure aplikaziora, aplikazioa behar bezala ixtea eragozten duena (ikus [/sections/docker/graceful-shutdown.basque.md]). Bigarren mailako prozesuak  erabiltzen badituzu, ez dira behar bezala garbituko ustekabeko itzaltzeren bat gertatzen bada, prozesu zonbiak utziko dituena. `npm start`ek ere onuragarria ez den prozesu bat gehiago egiten du. Erabili `CMD ['node','server.js']` zure aplikazioa abiarazteko. Zure aplikazioak bigarren mailako prozesuak baditu, erabili gainera `TINI`sarbide gisa.

### Kode adibidea: abiarazi aplikazioa Node erabiliz

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

CMD ["node", "server.js"]
```

### Kode adibidea: erabili Tiny sarbide gisa

```dockerfile
FROM node:12-slim AS build

# Gehitu Tini bigarren mailako prozesuak erabiltzen badituzu
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

ENTRYPOINT ["/tini", "--"]

CMD ["node", "server.js"]
```

### Anti ereduak

npm start erabiliz

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

# ez egin hau!
CMD "npm start"
```
Node string bakarrean erabiltzeak zure komandoa egikaritzeko bash/ash shell prozesu bat abiaraziko du. Hori ia `npm` erabiltzea modukoa da

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

# ez egin hau, bash abiatuko du eta
CMD "node server.js"
```

npmrekin abiatuz, hau da prozesuaren zuhaitza:

```console
$ ps falx
  UID   PID  PPID   COMMAND
    0     1     0   npm
    0    16     1   sh -c node server.js
    0    17    16    \_ node server.js
```

Bi prozesu estra hauek edukitzeak ez du inongo abantailarik ekartzen

Iturriak:

https://maximorlov.com/process-signals-inside-docker-containers/

https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#handling-kernel-signals
