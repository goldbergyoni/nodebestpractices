# Baliatu cachea konpilazio denborak murrizteko

## Azalpena

Docker irudiak geruzen konbinazioak dira. Izan ere, zure Dockerfile fitxategiko agindu bakoitzak geruza bat sortzen du. Dockeren daemonak konpilazioen arteko geruza horiek erabil ditzake, aginduak berdinak badira edo `COPY` edo `ADD` fitxategiak berdinak badira. ⚠️ Cachea ezin bada geruza jakin batean erabili, ondorengo geruza guztiak ere ezgaituak izango dira. Horrexegatik, ordena garrantzitsua da. Zure Dockerfile fitxategia zuzen diseinatzea ezinbestekoa da, zure konpilazioan atal mugikorren kopurua murrizteko; gutxien eguneratzen diren aginduak goialdean egon beharko lirateke, eta etengabe aldatzen ari diren aginduak (aplikazioaren kodea, esaterako), berriz, behe aldean.
Baita ere, garrantzitsua da jakitea operazio luzeak abiarazten dituzten aginduek puntu gorenaren inguruan egon beharko luketeela, horrela bermatuko delako bakarrik beharrezkoak direnean gertatzea (docker irudia eraikitzen duzun bakoitzean aldatzen ez badira behintzat). Cachetik Docker irudi bat berreraikitzea ia-ia berehalakoa izan daiteke era egokian eginez gero.

![Dockeren geruzak](../../assets/images/docker_layers_schema.png)

- [Digging into Docker layers](https://medium.com/@jessgreb01/digging-into-docker-layers-c22f948ed612)-etik hartutako irudia, jessgreb01-i esker\*

### Arauak

#### Ekidin une oro aldatzen den Avoid LABEL (etiketa)

Zure Dockerfile fitxategiaren hasieran konpilazio zenbakia duen etiketaren bat badaukazu, cachea baliogabetua izango da konpilazio bakoitzean

```Dockerfile
#Fitxategiaren hasiea
FROM node:10.22.0-alpine3.11 as builder

# Ez egin hau hemen!
LABEL build_number="483"

#... Dockerfile fitxategiaren gainontzeko guztia
```

#### Eduki .dockerignore fitxategi egokia

[**Begiratu: docker ignoreren garrantzia**](./docker-ignore.basque.md)

Cachearen logika hondatu dezaketen fitxategien kopia ekiditen dute Docker ignorek, adibidez proben emaitzen txostenak, erregistroak edota aldi baterako fitxategiak.

#### Instalatu lehenik "sistemaren" paketeak

Gomendagarria da erabiltzen dituzun sistema pakete guztiak dituen docker irudi base bat sortzea. **Benetan** `apt`,`yum`,`apk` edo antzerako komandoak erabiliz paketeak instalatzeko beharra baduzu, horiek izan beharko lirateke zure lehenengo aginduak. Ez duzu make, gcc edo g ++ berriro instalatu nahi izango zure node aplikazioa konpilatzen duzun bakoitzean. **Ez instalatu paketea erosoa delako soilik, ekoizpen aplikazio bat da.**

#### Lehendabizi,  GEHITU soilik zure package.json eta lockfile

```Dockerfile
COPY "package.json" "package-lock.json" "./"
RUN npm ci
```

lockfile eta package.json gutxiagotan aldatzen dira. Beraiek lehendabizi kopiatzeak `npm install` etapa cachean utziko du, horrek denbora baliotsua aurrezten du.

### Ondoren kopiatu zure fitxategiak eta exekutatu konpilazio etapa (beharrezkoa bada)

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

### Konpilazio etaparen adibidea (esaterako typescript erabiltzerakoan)

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

Dockeren dokumentazioa: https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#leverage-build-cache
