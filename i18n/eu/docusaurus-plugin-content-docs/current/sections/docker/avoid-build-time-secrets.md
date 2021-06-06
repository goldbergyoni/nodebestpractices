# Garbitu eraikitze faseko sekretuak, saihestu sekretuak argudioetan

<br/><br/>

### Azalpena

Docker irudi bat ez da soilik fitxategi pilo bat, eraikitze garaian gertatutakoa kontatzen duten geruza anitz baizik. Oso ohikoa izaten da garatzaileek npm giltza (tokena) behar izatea eraikitze garaian (gehienetan erregistro pribatuetarako), eta horretarako sasibide bat erabiltzen dute giltza eraikitze garaiko argudio bezala pasatuz. Sinplea eta segurua eman dezake, baina giltza hori garatzailearen ordenagailuko Docker historiatik, Docker erregistrotik eta IEtik eskura daiteke. Giltza eskuratzea lortzen duen erasotzailea gai izango da erakunde horren npm erregistro pribatuan idazteko. Bi aukera daude, hori baino  seguruagoak direnak: bikainena, Docker --secret funtzioalitatea erabiltzea (2020ko uztailetik aurrera esperimentala), fitxategi bat antolatzea ahalbidetzen duena eraikitze garaian. Bigarrenak, lehenengo, etapa anitzeko konpilazioa argudioekin erabiltzen du; gero, konpilazioa egiten du; eta, azkenik, bakarrik beharrezkoak diren fitxategiak kopiatzen ditu ekoizpenean. Azken teknika horrek ez du sekreturik igortzen irudiekin, baina sekretuak Dockeren historian agertuko dira. Normalean, erakunde gehienenek nahikoa segurutzat jotzen dute.

<br/><br/>

### Kode adibidea: erabili Docker sekretu instalatuentzat (esperimentala, baina egonkorra)

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
# syntax = docker/dockerfile:1.0-experimental

FROM node:12-slim

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN --mount=type=secret,id=npm,target=/root/.npmrc npm ci

# Gainerakoa hemen dator
```

</details>

<br/><br/>

### Kode adibidea: modu seguruan eraiki etapa anitzeko konpilazioa erabiliz

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

ARG NPM_TOKEN

WORKDIR /usr/src/app
COPY . /dist
RUN echo "//registry.npmjs.org/:\_authToken=\$NPM_TOKEN" > .npmrc && \
 npm ci --production && \
 rm -f .npmrc


FROM build as prod

COPY --from=build /dist /dist

CMD ["node", "index.js"]

# ARG eta .npmrc ez dira agertuko azken irudian baina Docker daemonen etiketatu gabeko irudien zerrendan ager daitezke, ziurtatu hauek ezabatu dituzula
```

</details>

<br/><br/>

### Anti ereduaren kode adibidea: erabili eraikitze garaiko argudioak

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim

ARG NPM_TOKEN

WORKDIR /usr/src/app
COPY . /dist
RUN echo "//registry.npmjs.org/:\_authToken=\$NPM_TOKEN" > .npmrc && \
 npm ci --production && \
 rm -f .npmrc

# .npmrc copy komando berean ezabatzeari esker ez du geruzan gordeko, hala ere, irudi historian aurki ahalko dugu

CMD ["node", "index.js"]
```

</details>

<br/><br/>

### Blogeko aipua: "Sekretu hauek ez dira azken Dockerean gordetzen"

[Alexandra Ulsh](https://www.alexandraulsh.com/2019/02/24/docker-build-secrets-and-npmrc/?fbclid=IwAR0EAr1nr4_QiGzlNQcQKkd9rem19an9atJRO_8-n7oOZXwprToFQ53Y0KQ)en bloga

> 2018ko azaroan, Docker 18.09k sekretu bandera berria gehitu zuen docker eraikuntzarentzat. Horrek aukera ematen digu gure fitxategi baten sekretuak Docker eraikuntzara pasatzeko. Sekretu horiek ez dira ez Dokeren azken irudian gordetzen, ez tarteko irudietan, ez irudiaren balioztatze historian. Eraikitze sekretuei esker, npm pakete pribatudun Docker irudiak eraiki ditzakezu, eraikitze argudiorik gabe eta etapa anitzekin.

```

```
