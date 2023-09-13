# Erabili etapa anitzeko konpilazioak

### Azalpena

Etapa anitzeko konpilazioek aukera ematen dute eraikuntzei eta exekuzio denborari dagozkion inguruneko xehetasunak bereizteko, hala nola eskuragarri dauden binarioak, agerian dauden inguruneko aldagaiak eta baita azpiko sistema eragilea ere. Zure Docker fitxategiak etapa anitzetan banatzeak azken irudia eta edukiontziaren tamaina murrizten lagunduko dizu, zure aplikazioa egikaritzeko behar duzuna bakarrik bidaliko baituzu. Batzuetan, konpilazio fasean soilik beharrezkoak diren tresnak sartu beharko dituzu, adibidez garapenerako menpekotasunak, hala nola TypeScripten CLI. Konpilazio fasean instalatu dezakezu, eta azken irteera exekuzio fasean bakarrik erabili. Horrek esan nahi du zure irudia txikitu egingo dela, menpekotasun batzuk ez baitira kopiatuko. Agian, egikaritze aldian egon behar ez luketen inguruneko aldagai batzuk agerian jarri beharko dituzu eraikuntzan (aztertu [nola saihestu konpilazio aldiko sekretuak](./avoid-build-time-secrets.basque.md)), hala nola API giltzak eta zerbitzu zehatzekin komunikatzeko erabiltzen diren sekretuak. Azken fasean, aurrez eraikitako baliabideak kopiatu ditzakezu, hala nola zure konpilazio karpeta edo soilik ekoizpenekoak diren menpekotasunak, hurrengo urratsean ere eskuratu ditzakezunak.

### Adibidea

Eman dezagun direktorio egitura hau

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
Dagoeneko zure aplikazioa eraikitzeko eta exekutatzeko beharrezkoak ez diren fitxategiak iragaziko ditu zure [.dockerignore](../docker/docker-ignore.basque.md)-k.

```
# Ez kopiatu existitzen diren node_modules karpetan, gure node_modules propioa berreskuratuko dugu

# Docs are large, we don't need them in our Docker image
docs
```

#### Etapa anitzeko Dockerfile fitxategia

Docker maiz etengabeko integrazio inguruneetan erabiltzen denez, `npm ci` komandoa erabiltzea gomendatzen da (`npm install` komandoa beharrean). Azkarragoa da, zorrotzagoa ere bai, eta inkoherentziak murrizten ditu package-lock.json fitxategian zehaztutako bertsioak soilik erabiliz gero. Begiratu [hau](https://docs.npmjs.com/cli/ci.html#description) informazio gehiago lortzeko. Adibide horrek yarn erabiltzen du pakete kudeatzaile gisa eta horretarako `yarn install --frozen-lockfile` [komandoa](https://classic.yarnpkg.com/en/docs/cli/install/) da `npm ci`-ren baliokidea.

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

#### Docker fitxategia etapa anitzekin eta oinarrizko irudiekin

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

#### Dockerfile osoa etapa anitzekin eta oinarrizko irudiekin

Gure Docker fitxategiak bi fase izango ditu: bata, aplikazioa eraikitzekoa, Node.js Docker irudia erabiliz funtzio guztietan; eta bigarren fasea, aplikazioa exekutatzeko, Alpine irudi minimoan oinarritutakoa. Bigarren fasean konpilatutako fitxategiak bakarrik kopiatuko ditugu, eta gero produkzioaren menpekotasunak instalatuko ditugu.

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
