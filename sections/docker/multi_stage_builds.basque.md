# Erabili etapa anitzeko eraikuntzak

### Azalpen paragrafoa

Etapa anitzeko eraikuntzek, eraikuntzarekin eta exekunzio-denborarekin erlazionatutako ingurune xehetasunetatik banantzea ahalbidetzen du, adibidez binario erabilgarriak, ageriko ingurune aldagaiak, eta baita azpian dagoen sistema eragilea ere. Dockerfileak etapa anitzetan banatzeak, bukaerako irudiaren eta kontainerraren tamainak murrizten lagunduko du, soilik zure aplikazioak funtzionatzeko behar duena igorriko duzu eta. Batzuetan eraikitze etapan soilik beharko dituzun tresnak gehitu beharko dituzu, adibidez TypeScript CLI bezalako garapen menpekotasunak. Berau eraikitze etapan instala zenezake eta azken irteera bakarrik exekuzio etapan erabili. Honek, zure irudia murriztuko dela esan nahi du, menpekotasun batzuk ez baitira bertan kopiatuak izango. Eraikitzearako orduan, ingurune aldagaiak agerian jarri beharko dituzu, ondoren exekuzio garaian agertuko ez direnak (ikusi [ekidin eraikitze faseko sekretuak](/sections/docker/avoid-build-time-secrets.basque.md)), esaterako, zerbitzu konkretu batzuekin komunikatzerako orduan erabilitako API Gakoak eta sekretuak. Azken etapan, eraikitze karpeta edota bakarrik ekoizpenerako menpekotasunak (ondorengo etapa batean ere berreskura ditzakezunak) bezalako baliabide aurre-eraikietan kopia zenitzake.

### Adibidea

Imajina dezagun ondorengo direktorio egitura

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

Zure [.dockerignore](../docker/docker-ignore.basque.md)k dagoeneko aplikazioaren eraikitze eta exekuzioan beharrezkoak ez diren fitxategiak filtratuko ditu.

```
# Ez kopiatu existitzen diren node_modules karpetan, gure node_modules propioa berreskuratuko dugu

# Docs are large, we don't need them in our Docker image
docs
```

#### Etapa anitzdun Dockerfilea

Docker etengabeko integrazioko inguruneetan sarri erabiltzen delako, `npm ci` komandoa erabiltzea gomendatzen da (`npm install` beharrean). Azkarragoa eta zorrotzagoa da, eta kontraesanak murrizten ditu soilik package-lock.json fitxategian zehaztutako bertsioak erabiliaz. Begiratu [hau](https://docs.npmjs.com/cli/ci.html#description) informazio gehiagorako. Adibide honek yarn pakete kudeatzailea erabiltzen du, non `npm ci`en baliokidea `yarn install --frozen-lockfile` [komandoa](https://classic.yarnpkg.com/en/docs/cli/install/) den.

```dockerfile
FROM node:14.4.0 AS build

COPY --chown=node:node . .
RUN yarn install --frozen-lockfile && yarn build

FROM node:14.4.0

USER node
EXPOSE 8080

# Aurreko etapatik emaitzak kopiatu
COPY --chown=node:node --from=build /home/node/app/dist /home/node/app/package.json /home/node/app/yarn.lock ./
RUN yarn install --frozen-lockfile --production

CMD [ "node", "dist/app.js" ]
```

#### Etapa anitzak eta oinarri-irudi ezberdinak dituen Dockerfilea

```dockerfile
FROM node:14.4.0 AS build

COPY --chown=node:node . .
RUN yarn install --frozen-lockfile && yarn build

# Honek exekuzio garairako oinarri-irudi minimoa erabiliko du
FROM node:14.4.0-alpine

USER node
EXPOSE 8080

# Kopiatu emaitzak aurreko etapatik
COPY --chown=node:node --from=build /home/node/app/dist /home/node/app/package.json /home/node/app/yarn.lock ./
RUN yarn install --frozen-lockfile --production

CMD [ "node", "dist/app.js" ]
```

#### Etapa anitzak eta oinarri-irudi ezberdinak dituen Dockerfile osoa

Gure Dockerfilek bi etapa edukiko ditu: Bata, funtzionalitate guztiak dituen Node.js Docker irudia erabiliz aplikazioa eraikitzeko, eta bigarrena aplikazioa exekutatzeko, Alpine irudi oso txikian oinarritua. Eraikitako fitxategiak gure bigarren etapan bakarrik kopiatuko ditugu, eta ondoren ekoizpeneko menpekotasunak instalatu.

```dockerfile
# Funtzionalitate guztiak dituen Node.js oinarri-irudiarekin hasi
FROM node:14.4.0 AS build

USER node
WORKDIR /home/node/app

# Menpekotasun informazioa kopiatu eta menpekotasun guztiak instalatu
COPY --chown=node:node package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# Iturburu kodea kopiatu (eta beste fitxategi garrantzitsu guztiak)
COPY --chown=node:node src ./src

# Kodea eraiki
RUN yarn build

# Exekuzio-garaiaren etapa
FROM node:14.4.0-alpine

# Zehaztu erro erabiltzailea ez dena eta agerian utzi 8080 portua
USER node
EXPOSE 8080

WORKDIR /home/node/app

# Menpekotasunen informazioa kopiatu eta soilik ekoizpenerako beharrezko dire menpekotasunak instalatu
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

# Aurreko etapatik emaitzak kopiatu
COPY --chown=node:node --from=build /home/node/app/dist ./dist

CMD [ "node", "dist/app.js" ]
```
