# Exekutatu Node.js erabiltzaile ez-erro gisa

### Azalpena

"Pribilegiorik txikienaren printzipioa" aplikatuz, erabiltzaileek/prozesuek beharrezko informazioa eta baliabideak soilik eskuratu behar dituzte. Erasotzaileei erro sarbidea emateak ideia maltzurrez osatutako mundu berria irekitzen du, hala nola trafikoa beste zerbitzari batzuetara bideratzea. Praktikan, Node.js aplikazio gehienek ez dute erro sarbidea behar, eta ez dute horrelako pribilegioekin egikaritzen. Hala eta guztiz ere, erabilera arruntera bultzatu dezaketen bi agertoki komun daude:

- pribilegioen atarira sartzeko (adibidez, 80 portua), Node.js erro gisa egikaritu behar da
- Docker ontziak erro(!) gisa exekutatuak izateko lehenetsita daude. Gomendagarria da Node.js web aplikazioek pribilegiorik gabeko portuetan entzun (listen) dezatela eta nginx bezalako alderantzizko proxy batean oinarritu daitezela sarrerako trafikoa 80 portutik bere Node.js aplikaziora birbideratzeko. Docker irudiak eraikitzean, segurtasun handiko aplikazioek edukiontzia egikaritu beharko lukete erro ez den beste erabiltzaile batekin. Docker kluster gehienek (adibidez, Swarm, Kubernetes) segurtasun testuingurua modu deklaratiboan ezartzea ahalbidetzen dute

### Kode adibidea: Docker irudiak eraikitzea ez-erro gisa

```dockerfile
FROM node:latest

COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
USER node
CMD ["node", "server.js"]
```

<br/><br/>

### Blog aipua: "Docker lehenetsita dago edukiontzia erro gisa egikaritzeko"

[eyalzek](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user)-en Repository docker-nodetik hartua:

> Berez, Dockerek edukiontzia erro gisa egikaritzen du, edukiontziaren barruan segurtasun arazoa izan daitekeena. Pribilegiorik gabeko erabiltzaile gisa egikaritu nahiko duzu edukiontzia ahal duzun guztietan. Horretarako, noderen irudiek noderen erabiltzailea hornitzen dute. Dockerren irudia noderen erabiltzailearekin egikaritu ahal da, honela egikaritu ere: "-u 'node'"

<br/><br/>

### Blog aipua: "Erasotzaileak erabateko kontrola izango du zure makinaren gainean"

[Olivier Lalonde](http://syskall.com/dont-run-node-dot-js-as-root/)ren Ez egikaritu Node.js erro gisa bloga:

> Izan ere, zure zerbitzaria erro gisa egikaritzen baduzu eta zure kodearen ahultasun baten bidez hackeatzen badute, erasotzaileak zure makinaren gaineko kontrola izango du. Horrek esan nahi du erasotzaileak zure diskoa guztiz ezabatu edo zerbait okerrago egin ahal izango duela. Bestalde, zure zerbitzariak erabiltzaile arrunt baten baimenekin funtzionatzen badu, baimen horiek mugak jarriko dizkio erasotzaileari.

<br/><br/>

### Blog aipua: "Zure aplikazioa 80 edo 443 portuan egikaritu behar baduzu, portuen birbideraketa egin dezakezu"

[Deepal Jayasekara](https://jsblog.insiderattack.net/developing-secure-node-js-applications-a-broad-guide-286afdec69ce)-ren “Developing Secure Node.js Applications - gida zabala garatzen” bloga:

> Inoiz ez egikaritu Node.js erro gisa. Node.js erro gisa egikarituz gero, egoerak okerrera egingo du erasotzaileren batek nondik edo handik zure aplikazioaren gaineko kontrola lortzen badu. Eszenatoki horretan, erasotzaileak erro pribilegioak ere lortuko lituzke, hondamendia eragin lezakeena. Aplikazioa 80 edo 443 portuan egikaritu behar baduzu, iptables erabiliz birbideratu dezakezu portua edo frontend-endeko proxy bat jar dezakezu -hala nola nginx edo apache-, 80 edo 443 portuetatik zure aplikaziora bideratuko duena.
