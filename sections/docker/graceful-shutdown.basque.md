# Itzalaldi dotorea

<br/><br/>

### Azalpen paragrafoa

Kubernetes bezalako exekuzio ingurune Dockerizatu batean, kontainerrak sarri jaio eta hiltzen dira. Hau erroreak jaurtitzen direnean gertatzen da, baina baita kontainerrak berrerabiltzea, kontainerrak bertsio berriago batekin ordezkatzea eta bestelako arrazoi onak direla eta. Prozesuari, 30 segunduko itxarote iraupen bat duen abisu bat (SIGTERM seinalea) bidalita lortzen da. Honek erronka bat gehitzen dio garatzaileari, applikazioak eskarien kuadeaketa eta baliabideen garbitzea denbora mugatu batean egitea inposatuz. Bestela, milaka erabiltzaile goibelek ez lukete erantzunik jasoko. Inplementazio jakintza da hauxe: itzaltze kodeak, egindako eskaera guztiak bukatuta egon arte itxaron eta ondoren baliabideak garbitu beharko lituzke. Errazagoa da esatea egitea baino, praktikan hainbat zati kudeatzea eskatzen du: LoadBalancerari esan aplikazioak ezin dituela eskaera gehiago onartu (health-checkaren bidez), itxaron egindako eskarian amaituta egon arte, eskari berriak kudeatzen ekiditu, baliabideak garbitu eta azkenik informazio baliagarria erregistratu hil aurretik. Bizirik-matentzeko konexioak erabileran badaude, konexio berriak sortu behar direla jakinarazi behar zaie erabiltzaileei, [Stoppable](https://github.com/hunterloftis/stoppable) bezalako liburutegia laguntza handia izan daiteke hau lortzeko.

<br/><br/>

### Kodearen adibidea: Node.js prozesu errotzat definitzeak kodeari seinaleak pasatzea ahalbidetzen du (ikusi [abiarazi node erabiliz](/sections/docker/bootstrap-using-node.basque.md))

<details>

<summary><strong>Dockerfile</strong></summary>

```

FROM node:12-slim

# Eraikitze logika hemen dago

CMD ["node", "index.js"]
#Hemengo ilarak Node.js prozesu erroa (PID1) bilakatuko du

```

</details>

<br/><br/>

### Kodearen adibidea: Erabili Tily prozesu kudeatzailea seinaleak Noderi berbidaltzeko

<details>

<summary><strong>Dockerfile</strong></summary>

```

FROM node:12-slim

# Eraikitze logika hemen dago

ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

CMD ["node", "index.js"]
#Hemendik aurrera Nodek PID1 bezala jokatuko duten TINIren azpi prozesuak abiatuko ditu

```

</details>

<br/><br/>

### Anti ereduaren kodearen adibidea: npm scriptak erabili prozesua hasieratzeko

<details>

<summary><strong>Dockerfile</strong></summary>

```

FROM node:12-slim

# Eraikitze logika hemen dator

CMD ["npm", "start"]
#Hemendik aurrera Nodek azpi prozesuak abiatuko ditu eta npmek ez ditu seinaleak jasoko

```

</details>

<br/><br/>

### Adibidea - Itzaltze faseak

[Rising Stack](https://blog.risingstack.com/graceful-shutdown-node-js-kubernetes/) blogetik

![alt text](/assets/images/Kubernetes-graceful-shutdown-flowchart.png "Itzaltze faseak")
