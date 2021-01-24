# Edukiontzia abiarazi node komandoa erabiliz, sahiestu npm

## Azalpen paragrafoa

Aplikazioen hastea `CMD 'npm start'` erabiltzen duten kode adibideak ikusten ohituak gaude. Hau desegokia da.
`npm` binarioak ez ditu itzaltze dotorea galaraziko duen seinaleak zure aplikaziora bueltatuko (begiratu [/sections/docker/graceful-shutdown.md]). Azpi prozesuak erabiltzen ari bazara, hauek ez dira behar bezala garbituak izango ustekabeko itzaltze bat gertatzen bada, prozesu zonbiak utziaz. `npm start`ek ere onuragarria ez den prozesu estra bat du. Zure aplikazioa abiarazteko erabili `CMD ['node','server.js']`. Zure aplikazioak azpi prozesuak baditu erabili gainera `TINI` helmuga gisa.

### Kodearen adibidea: Abiarazi Node erabilita

```dockerfile

FROM node:12-slim AS build


WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

CMD ["node", "server.js"]
```

### Kodearen adibidea: Erabili Tiny helmuga gisa

```dockerfile

FROM node:12-slim AS build

# Gehitu Tini azpi prozesuak erabiliz gero
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

Using npm start

```dockerfile

FROM node:12-slim AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

# ez egin hau!
CMD "npm start"
```

Node erabilita string bakarrean bash/ash shell prozesu bat abiatuko du zure komandoa exekutatzeko. Hau ia `npm` erabiltzea moduan da

```dockerfile

FROM node:12-slim AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

# ez egin hau, bash abiatuko du eta
CMD "node server.js"
```

npmrekin abiatuz, hau da prozesuaren zuhaitza:

```
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
