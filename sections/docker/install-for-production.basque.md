# Ezabatu garapen menpekotasunak

<br/><br/>

### Azalpena

Garapen menpekotasunek asko handitzen dute edukiontziaren eraso azalera (esaterako, segurtasun ahulezia potentzialak) eta edukiontziaren tamaina. Adibide gisa, npm segurtasun zulo handienak [eslint-scope](https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes) bezakako garapen menpekotasunek sortuak izan ziren, edo [nodemonek erabilitako ebentu katea](https://snyk.io/blog/a-post-mortem-of-the-malicious-event-stream-backdoor/) bezalako garapenerako paketeek. Arrazoi horiek direla eta, ekoizpenerako bidaliko den irudiak segurua eta txikia izan behar du. Hasiera bikaina da npm install komandoa `--production`ekin abiatzea. Hala ere, `npm ci` erabiltzea oraindik seguruagoa da, hutsetik sortutako instalazioa eta sarrail filtxategiaren sorrera ziurtatzen ditu eta. Tokiko cachea ezabatzeak hamarkada MB gehiago berreskuratzen lagun dezake. Sarritan edukiontzi batean probatu edo araztu behar izaten da devDependencies erabiliz. Kasu horretan, [etapa anitzeko konpilazioek](./multi_stage_builds.basque.md) menpekotasun multzo zenbaita izaten lagun dezakete eta, azkenik, ekoizpenerako behar direnak soilik.

<br/><br/>

### Kode adibidea: ekoizpenerako instalazioa

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

# Gainontzeko guztia hemen dator
```

</details>

<br/><br/>

### Kode adibidea: ekoizpenerako instalazioa etapa anitzeko eraikuntzarekin

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
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

### Anti ereduaren kode adibidea: instalatu menpekotasun guztiak Dockerfile fitxategiko etapa bakarrean

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
# Bi akatz hemen: Garapen menpekotasunak instalatu eta cachea ez ezabatu npm install egin ondoren
RUN npm install

# Gainontzeko guztia hemen dator
```

</details>

<br/><br/>

### Blogeko aipua: "gainera, instalazio arrunta baino zorrotzagoa da npm ci"

[npmen dokumentazioa](https://docs.npmjs.com/cli/ci.html)

> Komando hau npm-installen antzekoa da, salbu eta ingurune automatizatuetan erabiltzeko sortua dela, hala nola, proben plataformak, integrazio eta inplementazio jarraituak, edo zure menpekotasunen instalazio garbi bat egiten ari zarela ziur zauden egoeretan. npm install askoz azkarragoa izan liteke komando arrunta baino, erabiltzaileentzako funtzionalitate batzuk alde batera uzten dituelako. Instalazio arrunt bat baino zorrotzagoa ere bada, npm erabiltzaile gehienek gutxinaka-gutxinaka instalatutako tokiko inguruneek sortzen dituzten erroreak edo kontraesanak identifikatzen lagungarri izan daitekeena.
