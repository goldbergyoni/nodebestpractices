# Eraikitze garaiko sekretuak garbitu, argurioz pasatako sekretuak ekidin

<br/><br/>

### Azalpen paragrafoa

Docker irudi bat ez da soilik fitxategi pilo bat, ekaikitze garaian gertatutakoa kontatzen duten geruza anitzak baizik. Kasu arrunt batean, garatzaileek npm giltza behar dute eraikitze garaian (gehienetan erregistro pribatuetarako), hau modu faltsuan lortzen da giltza eraikitze garaiko argudio bezala pasata. Xalo eta segurua eman dezake, hala ere, giltza hau garaitzailearen ordenagailuko Docker historiatik, Docker erregistrotik eta CItik berreskuratua izan daiteke. Giltza hau berreskuratzen duen erasotzaile bat gai izango da enpresaren npm erregistro pribatuan idazteko. Bi aukera seguruago daude: bikainena Dockerren sekretuen funtzioalitatea (2020ko uztailetik esperimentala) erabiltzea, fitxategi bat muntatzea ahalbidetzen duena eraikitze garaian. Bigarrenak etapa anitzdun eraikizea argudioekin erabiltzen du, bakarrik beharrezko diren fitxategiak eraiki eta kopiatzen dituena ekoizpenerako. Azken teknika honek ez ditu sekretuak irudiekin igortzen, baina sekretuak Dockerren historian agertuko dira, hau enpresa gehienentzat nahikoa segurua kontsideratua dagoelarik

<br/><br/>

### Kodearen adibidea: Docker erabili sekretu muntatuentzat (esperimentala baina egonkorra)

<details>

<summary><strong>Dockerfile</strong></summary>

```
# syntax = docker/dockerfile:1.0-experimental

FROM node:12-slim
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN --mount=type=secret,id=npm,target=/root/.npmrc npm ci

# Gainerakoa hemen dator
```

</details>

<br/><br/>

### Kodearen adibidea: Modu seguruan eraiki etapa anitzdun eraikitzea erabiliz

<details>

<summary><strong>Dockerfile</strong></summary>

```

FROM node:12-slim AS build
ARG NPM_TOKEN
WORKDIR /usr/src/app
COPY . /dist
RUN echo "//registry.npmjs.org/:\_authToken=\$NPM_TOKEN" > .npmrc && \
 npm ci --production && \
 rm -f .npmrc

FROM build as prod
COPY --from=build /dist /dist
CMD ["node","index.js"]

# ARG eta .npmrc ez dira agertuko azken irudian baina Docker daemonen etiketatu gabeko irudien zerrendan ager daitezke, ziurtatu hauek ezabatu dituzula
```

</details>

<br/><br/>

### Anti-ereduaren kodearen adibidea: Eraikitze garaiko argudioak erabili

<details>

<summary><strong>Dockerfile</strong></summary>

```

FROM node:12-slim
ARG NPM_TOKEN
WORKDIR /usr/src/app
COPY . /dist
RUN echo "//registry.npmjs.org/:\_authToken=\$NPM_TOKEN" > .npmrc && \
 npm ci --production && \
 rm -f .npmrc

# .npmrc copy komando berean ezabatzeari esker ez du geruzan gordeko, hala ere, irudi historian aurki ahalko dugu

CMD ["node","index.js"]
```

</details>

<br/><br/>

### Blogeko aipua: "Sekretu hauek ez dira bukaerako Dockerrean gordeak"

[Alexandra Ulsh](https://www.alexandraulsh.com/2019/02/24/docker-build-secrets-and-npmrc/?fbclid=IwAR0EAr1nr4_QiGzlNQcQKkd9rem19an9atJRO_8-n7oOZXwprToFQ53Y0KQ) blogetik

> 2018ko azaroan, Docker 18.09k docker eraikuntzarentzat sekretu bandera berria gehitu zuen. Honek fitxategi batetik Docker eraikuntzara sekretuak pasatzea ahalbidetzen du. Sekretu hauek, edozein tarteko irudi edota argitarapenen historia irudiak ez dira bukaerako Docker irudian gordeak. Eraikitze sekretuei esker, npm pakete pribatudun Docker irudiak eraiki ditzakezu, eraikitze argudiorik gabe eta etapa anitzekin.

```

```
