# Garbitu NODE_MODULE cachea

<br/><br/>

### Azalpen paragrafoa

Noderen pakete kudeatzailean, npm eta Yarn, instalatutako paketeak lokalki cacheatzen dituzte liburutegi hauek behar dituzten etorkizuneko proiektuek urrutiko biltegitik berreskuratu behar ez ditzaten. Honek paketeak bikoiztu eta biltegiratze leku gehiago eskatu arren, merezi du pakete berak instalatzen jarraitzen duen lekuko garapen ingurue batean. Docker kontainer batean biltegiratze lekuaren hazkuntza honek ez du merezi, menpekotasuna behin bakarrik instalatzen baitu. Cache hau ezabatuz, kode ilara bakarra erabiliaz, hamarnaka MB aurrezten dira. Hau eginez, ez-zero kodearekin irteten ez dela ziurtatu, eta CI eraikitzearen huts egitea eragin cachearen arazoak direla eta, hau --flag komandoa gehituaz ekidin daiteke.

_Mesedez kontutan hartu hau ez dela garrantzitsua etapa anitzdun eraikitzea erabiltzen duzun kasuan, ez baidituzu pakete berriak instalatzen azken etapan_

<br/><br/>

### Kodearen adibidea: cachea garbitu

<details>
<summary><strong>Dockerfile</strong></summary>

```
FROM node:12-slim AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm cache clean --force

# Gainontzeko guztia hemen dator
```

</details>
