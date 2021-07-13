# Itzalaldi dotorea

<br/><br/>

### Azalpena

Kubernetes bezalako exekuzio ingurune Dockerizatu batean, edukiontziak sarri jaio eta hiltzen dira. Erroreak jaurtitzen direnean gertatzen da hori, baina baita bestelako arrazoi onak direla eta, hala nola edukiontziak berrerabiltzeagatik edo kontainerrak bertsio berriago batekin ordezkatzeagatik. Eta hori lortzen da prozesuari 30 segunduko itxarote iraupena duen abisu bat (SIGTERM seinalea) bidaliz. Horrek erronka bat gehitzen dio garatzaileari bermatu behar baitu aplikazioa modu egokian ari dela kudeatzen une horretan bertan egikaritzen ari diren eskaerak eta garbiketako baliabideak. Bestela, milaka erabiltzaile goibelduko lirateke erantzunik jasoko ez luketelako. Inplementazioari dagokionez, itzaltze kodeak itxoin beharko du uneko eskaera guztiak bukatuta egon eta ondoren baliabideak garbituta egon arte. Errazagoa da esatea egitea baino, ordea, praktikan hainbat zati kudeatzea eskatzen du eta: esan LoadBalancerari aplikazioak ezin duela eskaera gehiago onartu (health-checkaren bidez), itxaron uneko eskariak amaituta egon arte, ekidin eskaera berriak kudeatzea, garbitu baliabideak eta, azkenik, erregistratu informazio baliagarria hil aurretik. Bizirik matentzeko konexioak (Keep-Alive) erabiliz gero, konexio berriak sortu behar direla jakinarazi behar zaie erabiltzaileei. [Stoppable](https://github.com/hunterloftis/stoppable) bezalako liburutegia laguntza handia izan daiteke hori lortzeko.

<br/><br/>

### Kode adibidea: Node.js prozesu errotzat definitzeak kodeari seinaleak pasatzea ahalbidetzen du ([ikusi abiarazi node erabiliz](./bootstrap-using-node.basque.md))

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim

# Eraikitze logika hemen dago

CMD ["node", "index.js"]
#Hemengo ilarak Node.js prozesu erroa (PID1) bilakatuko du

```

</details>

<br/><br/>

### Kode adibidea: erabili Tily prozesu kudeatzailea seinaleak Noderi berbidaltzeko

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
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

### Anti ereduaren kode adibidea: erabili npm scriptak prozesua hasieratzeko

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim

# Eraikitze logika hemen dator

CMD ["npm", "start"]
#Hemendik aurrera Nodek bigarren mailako prozesuak abiatuko ditu eta npmek ez ditu seinaleak jasoko

```

</details>

<br/><br/>

### Adibidea - Itzaltze faseak

[Rising Stack](https://blog.risingstack.com/graceful-shutdown-node-js-kubernetes/) blogetik

![alt text](../../assets/images/Kubernetes-graceful-shutdown-flowchart.png "Itzaltze faseak")
