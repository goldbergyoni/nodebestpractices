# Erabili PUZeko nukleo guztiak

<br/><br/>

### Azalpena

Agian ez da harritzekoa Nodek, bere oinarrizko forman, hari bakarra = prozesu bakarra = PUZ bakarra exekutatzea. 4 edo 8 PUZeko hardware sendoa ordaintzea eta bakarra erabiltzea zoragarria da, ezta? Node Cluster modulua da tamaina ertaineko aplikazioetara egokitzen den irtenbiderik azkarrena. 10 kode lerrotan nukleo logiko bakoitzerako prozesua sortzen du eta prozesuen arteko eskaerak biribilgune estiloan (round-robin) bideratzen ditu. Are hobe, erabili PM2, izan ere, monitoretzako erabiltzailearen interfaze soil eta ezin hobearekin biltzen baitu kluster modulua. Soluzio horrek ohiko aplikazioetan ondo funtzionatzen duen arren, gerta liteke eskas ibiltzea goi mailako errendimendua eta DevOps fluxu sendoa eskatzen duten aplikazioetan. Erabilera aurreratuetarako, aztertu ez ote zaizun komeni Node prozesua erreplikatzea pertsonalizatutako inplementazioko scripten baten bidez, eta orekatzea nginx bezalako tresna espezializatuak erabiliz; edo, bestela, erabili AWS ECS edo Kubernetees bezalako edukiontzi motorren bat prozesuak inplementatzeko eta erreplikatzeko, oso ezaugarri aurreratuak dituzte eta.

Erabilera aurreratuen kasuetarako, pentsa ezazu NODE prozesua errepikatzea pertsonalizatutako inplementazioko scriptaren bidez eta orekatu nginx bezalako tresna espezializatua erabiliz edo erabili edukiontzi motorra, hala nola AWS ECS edo Kubernetees, prozesuak inplementatzeko eta erreplikatzeko ezaugarri aurreratuak dituztenak.

<br/><br/>

### Alderaketa: Noderen klusterra versus nginx

![Noderen klusterra versus nginx](/assets/images/utilizecpucores1.png "Noderen klusterra versus nginx")

<br/><br/>

### Beste blogari batzuek diotena

- [Node.jsren dokumentazioa](https://nodejs.org/api/cluster.html#cluster_how_it_works):

> ... Bigarren planteamendua, teorian Node klusterrak eman beharko luke errendimendu onena. Praktikan, ordea, banaketa oso desorekatua izan ohi da sistema eragilearen antolatzaileen gorabeheren ondorioz. Atzeman da hainbat kasutan konexio guztien % 70a baino gehiago kargak bi prozesutan soilik egin direla, zortzitan egin beharrean...

- [StrongLoop](https://strongloop.com/strongblog/best-practices-for-express-in-production-part-two-performance-and-reliability/) bloga:

> ... Noderen kluster moduluarekin posible da klusterrak batzea. Horrek ahalbidetzen du prozesu maisu batek lan prozesuak sortzea eta sarrerako konexioak langileen artean banatzea. Hala ere, modulu hori zuzenean erabiltzea baino hobe da lan hori automatikoki egiten duten tresna ugarietako bat erabiltzea; adibidez, node-pm edo cluster-service ...

- Medium blogeko [Node.js process load balance performance: comparing cluster module, iptables, and Nginx](https://medium.com/@fermads/node-js-process-load-balancing-comparing-cluster-iptables-and-nginx-6746aaf38272) artikulua:

> ... Noderen klusterra erraza da inplementatzen eta konfiguratzen. Izan ere, osagaiak Noderen eremuan gordetzen dira beste software baten menpe egon gabe. Gogoratu zure prozesu nagusiak zure langile prozesuak bezainbeste funtzionatuko duela, eta bere eskaera tasa beste irtenbideena baino apur bat txikiagoa izango dela ...
