# Ezabatu garapen menpekotasunak

<br/><br/>

### Azalpen paragrafoa

Garapen menpekotasunek asko handitzen dute kontainerraren eraso azalera (esaterako segurtasun ahulezia potentzialak) eta kontainerraren tamaina. Adibide gisa, npm segurtasun zulo handienak [eslint-scope](https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes) bezakako garapen menpekotasunek sortuak izan ziren, edo [event-stream that was used by nodemon](https://snyk.io/blog/a-post-mortem-of-the-malicious-event-stream-backdoor/) bezalako garapenerako paketeek. Arrazoi hauek direla eta, ekoizpenerako bidaliko den irudia segurua eta txikia izan behar da. npm install komandoa `--production`ekin abiatzeak hasiera bikaina da, hala ere, `npm ci` erabiltzea oraindik seguruagoa da, zerotik sortutako instalazioa eta sarrail filtxategiaren sorrera ziurtatzen dituena. Lekuko cachea ezabatzeak gainerako hamarkada MB berreskuratzen lagun dezake. Askotan, kontainer baten barruan, garapen menpekotasunak erabiliaz probak egiteko edo debuggeatzeko beharra dago, kasu honetan [etapa anitzdun erakitzeek](/sections/docker/multi_stage_builds.md) menpekotasun sorta ezberdinak eta azkenik ekoizpenekoak bakarrik edukitzen lagun dezakete.

<br/><br/>

### Kodearen adibidea: ekoizpenerako instalazioa

<details>

<summary><strong>Dockerfile</strong></summary>

```
FROM node:12-slim AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

# Gainontzeko guztia hemen dator
```

</details>

<br/><br/>

### Kodearen adibidea: Ekoizpenerako instalazioa egin etapa anitzdun eraikitzearekin

<details>

<summary><strong>Dockerfile</strong></summary>

```
FROM node:14.8.0-alpine AS build
COPY --chown=node:node package.json package-lock.json ./
# ✅ Instalazio segurua
RUN npm ci
COPY --chown=node:node src ./src
RUN npm run build

# Run-time stage
FROM node:14.8.0-alpine
COPY --chown=node:node --from=build package.json package-lock.json ./
COPY --chown=node:node --from=build node_modules ./node_modules
COPY --chown=node:node --from=build dist ./dist

# ✅ Garapen paketeak garbitu
RUN npm prune --production

CMD [ "node", "dist/app.js" ]
```

</details>

<br/><br/>

### Anti ereduaren kodearen adibidea: Dockerfileko etapa bakarrean menpekotasun guztiak instalatu

<details>

<summary><strong>Dockerfile</strong></summary>

```

FROM node:12-slim AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
# Bi akatz hemen: Garapen menpekotasunak instalatu eta cachea ez ezabatu npm install egin ondoren
RUN npm install

# Gainontzeko guztia hemen dator
```

</details>

<br/><br/>

### Blogeko aipua: "npm ci instalazio arrunta baino zorrotzagoa da gainera"

[npmen dokumentaziotik](https://docs.npmjs.com/cli/ci.html)

> Komando hau npm-installen antzekoa da, baina proben plataformak, integrazio jarraitua eta inplementazioa bezalako ingurune automatizatuetan, edo zure menpekotasunen instalazio garbi bat egiten ari zarela ziur zauden egoeretan, erabiltzeko pentsatua dago. npm install komando arrunta baino askoz azkarragoa izan liteke, erabiltzaileentzako funtzionalitate batzuk alde batera uzten dituelako. Instalazio arrunt bat baino zorrotzagoa ere bada, npm erabiltzaile gehienen gutxinaka-gutxinaka instalatutako lekuko inguruneek sortutako erroreak edo kontraesanak identifikatzen laguntzen duena.
