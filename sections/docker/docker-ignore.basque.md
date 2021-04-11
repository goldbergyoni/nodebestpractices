# Erabili .dockerignore sekretuak filtratzea ekiditeko

<br/><br/>

### Azalpena

Docker konpilazio komandoak tokian tokiko fitxategiak konpilazioaren testuinguruko ingurunean kopiatzen ditu sare birtual baten bidez. Kontuz ibili, garapen eta IE karpetek .npmrc, .aws, .env fitxategiak eta beste fitxategi garrantzitsu batzuk eduki ditzakete eta. Ondorioz, gertatu daiteke Dockereko irudiek sekretuak gordetzea eta lurralde arriskutsuetan agerian uztea (esaterako Docker bilgailua, kideen zerbitzariak). Mundu hobe batean Dockerfile fitxategiak zehaztu beharko luke zer ari den kopiatzen. Horretaz gainera, azken segurtasun sare gisa, gehitu .dockerignore fitxategia, beharrezkoak ez diren karpetak eta balizko sekretuak iragazten dituena. Hori egiteak abiadura azkartzen du gainera, ekoizpenean erabilerarik ez duten garapen karpeta arruntak alde batera utziz (adibidez .git, proben emaitzak, garatze programen konfigurazioak), eraikitzaileak cachea hobeto erabil dezake eta errendimendu hobea eskuratu

<br/><br/>

### Kode adibidea: .dockerignore fitxategi lehenetsi ona Node.jsrentzat

<details>
<summary><strong>.dockerignore</strong></summary>

```
**/node_modules/
**/.git
**/README.md
**/LICENSE
**/.vscode
**/npm-debug.log
**/coverage
**/.env
**/.editorconfig
**/.aws
**/dist
```

</details>

<br/><br/>

### Anti ereduaren kode adibidea: kopia errekurtsiboa fitxategi guztientzat

<details>
<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
# The next line copies everything
COPY . .

# Hemen duzu beste guztia

```

</details>
