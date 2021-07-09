# Babestu eta berrabiarazi zure prozesua huts egitean (tresna egokiak erabiliz)

<br/><br/>

### Azalpena

Oinarrizko mailan, Node prozesuak babestu eta berrabiarazi behar dira hutsegiteak gertatzen direnean. Hitz gutxitan, aplikazio txikientzat eta edukiontzirik erabiltzen ez dutenentzat, [PM2](https://www.npmjs.com/package/pm2-docker) bezalako tresnak ezin hobeak dira sinpletasuna, berrabiarazteko gaitasunak eta Noderekin integrazio aberatsa ere eskaintzen baitute. Linuxekin ondo moldatzen direnek systemd erabil dezakete eta Node zerbitzu gisa exekutatu. Askoz errazagoa da Docker edo edozein edukiontzi teknologia erabiltzen duten aplikazioen egoera, izan ere, eskuarki klusterrak antolatu eta kudeatzeko tresnak izaten dituzte (adibidez, [AWS ECS](http://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html), [Kubernetes](https://kubernetes.io/), etab.), edukiontziak inplementatu, kontrolatu eta konpontzen dituztenak. Klusterrak kudeatzeko tresna baliagarri horiek guztiak edukita (edukiontziak berrabiaraztekoak barne), zergatik korapilatu PM2 bezalako beste tresna batzuekin? Ez dago erabateko irtenbiderik eskaintzen duen erantzunik. Badira pisuzko arrazoiak PM2 edukiontzien barruan mantentzeko lehen mailako babesgarri gisa (batez ere bere [pm2-docker](https://www.npmjs.com/package/pm2-docker) bertsioa, berariaz edukiontzientzat prestatua): askoz ere bizkorragoa da prozesua berrabiaraztea, eta Noderen ezaugarri zehatzak eskaintzea, hala nola, kodea markatzea, ostatatzeko edukiontziak hala eskatzen duenean. Beste batzuek beharrezkoak ez diren geruzak ekiditea aukeratu dezakete. Amaitzeko, ez dago guztientzako moduko irtenbiderik, eta garrantzitsuena da zer aukera dauden jakitea.

<br/><br/>

### Beste blogari batzuek diotena

- [Express Produkzioaren Praktika Onak](https://expressjs.com/en/advanced/best-practice-performance.html): bloga:

> ... Garapenean, zure aplikazioa komando lerrotik hasi zenuen node server.js edo antzeko zerbait erabiliz. **Baina hori bera ekoizpenean egitea hondamendiaren errezeta da. Aplikazioak huts egiten badu, lineaz kanpo egongo da** berrabiarazi arte. Aplikazioak huts egiten badu berrabiarazten dela ziurtatzeko, erabili prozesu kudeatzailea. Prozesuen kudeatzailea inplementazioa errazten duen, erabilgarritasun handia eskaintzen duen eta aplikazioa exekuzio garaian kudeatzeko aukera ematen duen "edukiontzia" da.

- Medium blogeko [Noderen klusterrak ulertzea](https://medium.com/@CodeAndBiscuits/understanding-nodejs-clustering-in-docker-land-64ce2306afef#.cssigr5z3) artikulua:

> ... Oso garrantzitsua da Node.js Clustering Docker-Land ulertzea. “Docker edukiontziak ingurune birtual arinak eta errazak dira, prozesuak ahalik eta gehien sinplifikatzeko diseinatuak. Baliabide propioak kudeatu eta koordinatzen dituzten prozesuak jada ez dira hain baliotsuak. **Gaur egun, ordea, Kubernetes, Mesos eta Cattle bezalako kudeaketa pilek aldarrikatzen dute baliabide horiek guztiak azpiegitura osoan kudeatu behar direla**. "Antolatzaileek" esleitzen dituzte PUZeko eta memoriako baliabideak; eta sareko baliabideak, pilak emandako karga orekatzaileek.
