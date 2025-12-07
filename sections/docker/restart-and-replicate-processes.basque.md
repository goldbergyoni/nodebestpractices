# Utzi Dockeren exekuzio denborari erreplikatu eta jardueraren iraupena kudeatzen

<br/><br/>

### Azalpena

Dockeren exekuzio denboraren kudeatzaileak, Kubernetes bezala, benetan onak dira edukiontzien osasun eta ezarpen erabakiak hartzen: edukiontzi  kopurua maximizatzen, edukiontziak zonaldeen artean orekatzen eta klusterren faktore ugari kontuan hartzen dituzte erabaki horiek hartzen dituzten bitartean. Esan gabe doa: huts egiten duten prozesuak (hau da, edukiontziak) identifikatzen dituzte eta leku egokian berrabiarazten dituzte. Hala ere, batzuek kode pertsonalizatuak edo tresnak erabiltzeko tentazioa izan dezakete Node prozesua erreplikatuz PUZa erabili eta, huts eginez gero, prozesua berrabiarazte aldera (adibidez,PM2  kluster modulua, ). Tokiko tresna horiek ez dituzte kluster mailako  ikuspegia eta eskuragarri dauden datuak. Adibidez, instantzien baliabideek 3 edukiontzi eta 2 eskualde ostatatu ditzaketenean, edukiontziak hainbat eskualdetan hedatzen arduratuko da Kubernetes. Horrela, zonaldeak edo eskualdeak huts egitea gertatuz gero, aplikazioak bizirik jarraituko du. Aitzitik, tokiko tresnak erabiltzean prozesua berrekiteko, Dockeren kudeatzailea ez da erroreez jabetzen eta ezin du ondo pentsatutako erabakirik hartu, edukiontzia zonalde edo instantzia berri batean ipintzea bezala.

<br/><br/>

### Kode adibidea: deitu Node.js zuzenean, tarteko tresnarik gabe

<details>

<summary><strong>Dockerfile fitxategia</strong></summary>

```dockerfile
FROM node:12-slim

# Eraikitze logika hemen dago

CMD ["node", "index.js"]
```

</details>

<br/><br/>

### Anti ereduaren kode adibidea: erabili prozesu kudeatzailea

<details>

<summary><strong>Dockerfile fitxategia</strong></summary>

```dockerfile
FROM node:12-slim

# Eraikitze logika hemen dago

CMD ["pm2-runtime", "indes.js"]
```

</details>
