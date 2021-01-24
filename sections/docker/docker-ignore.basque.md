# Erabili .dockerignore sekretuak filtratzea ekiditeko

<br/><br/>

### Azalpen paragrafoa

Dockerren eraikitze komandoak lekuko fitxategiak sare birtual bateko eraikitze ingurune kontextuan kopiatzen ditu. Kontuz ibili, garapen eta CI karpetek .npmrc, .aws, .env fitxategiak eta beste fitxategi garrantzitsu batzuk eduki ditzakete eta. Ondorioz, Docker irudiek sekretuak gorde ditzakete eta hauek lurralde arriskutsuetan (esaterako Docker bilgailua, kideen zerbitzariak) agerian utz ditzakete. Mundu hobe batean, Dockerfilea argia izan beharko litzateke kopiatzen ari denari buruz. Honetaz gain, azken segustasun sare gisa, beharrezko ez diren karpetak eta sekretu pontentzialak irazkiko dituen .dockerignore fitxategi bat gehitu. Hau egiteak abiadura azkartzen du gainera, ekoizpenean erabilerarik ez duten garapen karpeta arruntak (adibidez .git, proben emaitzak, garatze programen konfigurazioak) alde batera utziz, eraikitzaileak cachea hobeto erabil dezake eta errendimendu hobea eskuratu

<br/><br/>

### Kodearen adibidea: .dockerignore fitxategi lehenetsi ona Node.jsentzat

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

### Anti ereduaren kode adibidea: Fitxategi guztientzat kopia errekurtsiboa

<details>
<summary><strong>Dockerfile</strong></summary>

```
FROM node:12-slim AS build
WORKDIR /usr/src/app
# The next line copies everything
COPY . .

# Beste guztia hemen dator

```

</details>
