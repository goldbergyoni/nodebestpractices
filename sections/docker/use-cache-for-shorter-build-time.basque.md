# Baliatu cachea eraikitze denborak murrizteko

## Azalpen paragrafoa

Docker irudiak geruzen konbinazioak dira, zuere Dockerfileko agindu bakoitzak geruza bat sortzen du. Dockerren daemonak eraikitzeen arteko geruza hauek erabil ditzake, aginduak berdinak badira edo `COPY` edo `ADD` fitxategiak berdinak badira. ⚠️ Cachea ezin bada geruza jakin batentzat erabili, ondorengo geruza guztiak ere ezgaituak izango dira. Honexegatik, ordena garrantzitsua da. Zure Dockerfilea zuzenki diseinatzea ezinbestekoa da, zure eraikitzean atal mugikor kopurua murrizteko; gutxien eguneratzen diren aginduak goialdean egon beharko lirateke eta etengabe aldatzen ari diren aginduak (aplikazioaren kodea esaterako) berriz behe aldean. Garrantzitsua da operazio luzeak abiarazten dituzten aginduak puntu gorenaren inguruan egon beharko liratekeela bakarrik beharrezkoak direnean gertatzen direla ziurtatzeko (docker irudia eraikitzen duzun bakoitzean aldatzen ez badira behintzat). Cachetik Docker irudi bat berreraikitzea ia-ia berehalakoa izan daiteke era egokian eginez gero.

![Dockerren geruzak](/assets/images/docker_layers_schema.png)

- [Dockerren geruzetan induskatzen](https://medium.com/@jessgreb01/digging-into-docker-layers-c22f948ed612)etik hartutako irudia, jessgreb01-i esker\*

### Arauak

#### Ekidin une oro aldatzen den Avoid LABEL (etiketa)

Zure Dockerfilearen hasieran eraikitze zenbakia duen etiketa bat badaukazu, cachea baliogabetua izango da eraikitze bakoitzean

```Dockerfile
#Fitxategiaren hasiea
FROM node:10.22.0-alpine3.11 as builder

# Ez egin hau hemen!
LABEL build_number="483"

#... Dockerfilearen gainontzeko guztia
```

#### Eduki .dockerignore fitxategi egokia

[**Begiratu: docker ignoreren garrantzia**](/sections/docker/docker-ignore.basque.md)

Docker ignorek, cachearen logika hondatu dezaketen fitxategien kopia ekiditen dute, adibidez proben emaitzen txostenak, erregistroak edota aldi baterako fitxategiak.

#### Instalatu lehenik "sistemaren" paketeak

Gomendagarria da erabiltzen dituzun sistema pakete guztiak dituen docker irudi base bat sortzea. **Benetan** `apt`,`yum`,`apk` edo antzerako komandoak erabiliz paketeak instalatzeko beharra baduzu, hauek zure lehenengo aginduak izan beharko lirateke. Ez duzu nahi make, gcc edo g++ berrinstalatzerik nahi zure node aplikazioa eraikitzen duzun bakoitzean.
**Ez instalatu pakete bat soilik komenentziagatik, ekoizpen aplikazio bat da hau.**

#### Lehendabizi, soilik zure package.json eta lockfile GEHITU

```Dockerfile
COPY "package.json" "package-lock.json" "./"
RUN npm ci
```

lockfile eta package.json gutxiagotan aldatzen dira. Berauek lehendabizi kopiatzeak `npm install` etapa cachean utziko du, honek denbora baliotsua aurrezten du.

### Ondoren zure fitxategiak kopiatu eta exekutatu eraikitze etapa (beharrezkoa bada)

```Dockerfile
COPY . .
RUN npm run build
```

## Adibideak

### Onarrizko adibidea sistema eragileko menpekotasunak behar dituzten node_modulesekin

```Dockerfile
#Sortu node irudi bertsioaren ezizena
FROM node:10.22.0-alpine3.11 as builder

RUN apk add --no-cache \
    build-base \
    gcc \
    g++ \
    make

USER node
WORKDIR /app
COPY "package.json" "package-lock.json" "./"
RUN npm ci --production
COPY . "./"

FROM node as app
USER node
WORKDIR /app
COPY --from=builder /app/ "./"
RUN npm prune --production

CMD ["node", "dist/server.js"]
```

### Eraikitze etaparekin adibidea (esaterako typescript erabiltzerakoan)

```Dockerfile
#Sortu node irudi bertsioaren ezizena
FROM node:10.22.0-alpine3.11 as builder

RUN apk add --no-cache \
    build-base \
    gcc \
    g++ \
    make

USER node
WORKDIR /app
COPY "package.json" "package-lock.json" "./"
RUN npm ci
COPY . .
RUN npm run build

FROM node as app
USER node
WORKDIR /app
# Behar ditugun fitxategiak bakarrik kopiatu
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json .
COPY --from=builder /app/dist dist
RUN npm prune --production

CMD ["node", "dist/server.js"]
```

## Esteka erabilgarriak

Dockerren dokumentazioa: https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#leverage-build-cache
