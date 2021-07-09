# Garbitu NODE_MODULE cachea

<br/><br/>

### Azalpena

npm eta Yarn Node paketeen kudeatzaileek cachean gordetzen dituzte lokalean instalatutako paketeak, liburutegi horien beharra dituzten etorkizuneko proiektuek urruneko biltegi batetik eskuratu beharrik izan ez dezaten. Horrek paketeak bikoiztu eta biltegiratze gehiago kontsumitzen duen arren, normalean pakete berdinak instalatzen jarraitzen duen tokiko garapen ingurunean merezi egiten du hori egitea. Docker edukiontzian biltegiratzea handitzeak ez du ezertarako balio, menpekotasuna behin bakarrik instalatzen baitu. Cachea kenduta, MB asko ezabatzen dira iruditik kode lerro bakarra erabiliz. Hori egiten ari zaren bitartean, ziurtatu zero ez den kode batekin irteten ez dela eta IE eraikitzean huts egiten duela cachearen arazoengatik. Hori ekidin daiteke --force adierazlea erantsiz.

_Mesedez, kontutan hartu hau ez dela garrantzitsua etapa anitzeko konpilazioa  erabiltzen duzun kasuan, ez duzu-eta pakete berririk instalatzen azken etapan_

<br/><br/>

### Kode adibidea: cachea garbitu

<details>
<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm cache clean --force

# Gainontzeko guztia hemen dator
```

</details>
