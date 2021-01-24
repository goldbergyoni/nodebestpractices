# Utzi Dockerren exekuzio tresnak prozesuak berrekin eta erreplika ditzala

<br/><br/>

### Azalpen paragrafoa

Kubernetes bezalako Dockerren exekuzio denborako kudeatzaileak kontainerren osasun eta ezarpen erabakiak hartzen benetan onak dira: kontainer kopurua maximizatzeaz arduratuko dira, hauek zonalde ezberdinetara orekatu eta clusterren faktore ugari kontuan hartuko dituztelarik erabaki hauek hartzeku bitartean. Ez da hitzik behar hau azaltzeko, huts egindako prozesuak identifikatzen dituzte (adibidez kontainerrak) eta leku egokian berrabiatzen dituzte. Batzuk kode pertsonalizatua erabiltzeko edo PUZaren erabilerarako Node prozesuak erreplikatzeko edo huts egite batean prozesua berrabiatzeko (adibidez Cluster modulua, PM2) tentatuta egon arren. Lekuko tresna hauek ez dituzte clusterraren mailan erabilgarri dauden perspektiba eta datuak. Adibidez, instantzia baliabideek 3 kontainer eta 2 eskualde ostatatu ditzaketenean, Kubernetes kontainerrak zonalde ezberdinetan hedatzen arduratuko da. Honela, zonalde edo eskualde huts egitea gertatuz gero, aplikazioak bizirik jarraituko du. Alderantziz, lekuko tresnak erabiltzean prozesua berrekiteko, Dockerren kudeatzailea ez da erroreen jabe eta kontainerra zonalde edo instantzia berri batean ipintzea moduko erabaki pentsatu gabeak har ditzake.

<br/><br/>

### Kodearen adibidea: Node.js deitu zuzenean, tarteko tresnarik gabe

<details>

<summary><strong>Dockerfile</strong></summary>

```

FROM node:12-slim

# Eraikitze logika hemen dago

CMD ["node", "index.js"]
```

</details>

<br/><br/>

### Anti ereduaren kodearen adibidea: Prozesu kudeatzailea erabili

<details>

<summary><strong>Dockerfile</strong></summary>

```
FROM node:12-slim

# Eraikitze logika hemen dago

CMD ["pm2-runtime", "indes.js"]
```

</details>
