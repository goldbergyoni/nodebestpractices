# Monitorizazioa!

<br/><br/>

### Azalpena

Mailarik oinarrizkoenean, kontrolak esan nahi du produkzioan _erraz_ identifikatu ahal izango duzula gauza txarrak noiz gertatzen diren, posta elektronikoz edo Slack bidez jakinaraziz, adibidez. Zure eskakizunak aseko dituen tresna multzo egokia aukeratzea da erronka, zure ekonomia lur jota geratu gabe. Proposatzen dizut zehatz dezazun egoera osasuntsu bat bermatzeko ezarri beharreko metrika multzo nagusia: PUZa, zerbitzariaren RAMa, Nodo prozesuaren RAMa (1,4 GB baino gutxiago), azken minutuko errore kopurua, prozesuaren berrabiarazte kopurua eta batez besteko erantzun denbora. Ondoren, aukeratu zure gustuko ezaugarri aurreratuak eta gehitu zure nahien zerrendara. Luxuzko monitorizazio funtzioaren adibide batzuk: DB profilak, zerbitzu gurutzatuak neurtzea (hau da, negozio transakzioa neurtzea), front-end integrazioa, datu gordinak BI pertsonalizatutako bezeroen aurrean uztea, Slack jakinarazpenak eta beste hainbat.

Funtzio aurreratuak lortu nahi badituzu, konfigurazio luzea egin beharko duzu edo, bestela, Datadog, NewRelic eta antzeko produktu komertzialak erosi beharko dituzu. Zoritxarrez, oinarriak ere lortzea ez da parkean paseoan ibiltzea. Izan ere, metrika batzuk (PUZ) hardwarearekin lotuta daude eta beste batzuk nodoaren prozesuan bizi dira (barne erroreak), eta, beraz, tresna zuzen guztiek konfigurazio osagarria eskatzen dute. Adibidez, saltzaileen hodeiko kontrol irtenbideek (adibidez, [AWS CloudWatch](https://aws.amazon.com/cloudwatch/), [Google StackDriver](https://cloud.google.com/stackdriver/)) berehala emango dizute hardwarearen metrikaren berri, baina ez barneko aplikazioaren portaerarena. Beste aldetik, egunkarietan oinarritutako ElasticSearch bezalako irtenbideek ez dute lehenetsita hardwarearen ikuspegia. Irtenbidea zure aukera handitzea da falta diren metrikekin osatuz; adibidez, aukera ezagun bat aplikazioen erregistroak [Elastic stack](https://www.elastic.co/products)era bidaltzea da eta agente osagarri batzuk konfiguratzea (adibidez, [Beat](https://www.elastic.co/products)) hardwarearekin lotutako informazioa partekatuz argazki osoa lortzeko.

<br/><br/>

### Jarraipen adibidea: AWS cloudwatch panel lehenetsia. Zaila da aplikazioko metrika ateratzea

![AWS cloudwatch panel lehenetsia. Zaila da aplikazioko metrika ateratzea](/assets/images/monitoring1.png)

<br/><br/>

### Jarraipen adibidea: StackDriver panel lehenetsia. Zaila da aplikazioko metrika ateratzea

![StackDriver panel lehenetsia. Zaila da aplikazioko metrika ateratzea](/assets/images/monitoring2.jpg)

<br/><br/>

### Adibidea: Grafana datu gordinak bistaratzen dituen UI geruza gisa

![Grafana datu gordinak bistaratzen dituen UI geruza gisa](/assets/images/monitoring3.png)

<br/><br/>

### Beste blogari batzuek diotena

[Rising Stack](https://blog.risingstack.com/node-js-performance-monitoring-with-prometheus/) bloga :

> …Zure zerbitzu guztietako seinale horiek ikustea gomendatzen dizugu.
> Errorea: erroreek erabiltzaileei aurre egiten dietelako eta zure bezeroei berehala eragiten dietelako
> Erantzuteko denbora: latentziak zure bezeroei eta negozioari zuzenean eragiten dielako.
> Trafikoa: trafikoak errore tasaren hazkundearen testuingurua ulertzen laguntzen dizu, bai eta latentzia ere.
> Saturazioa: zure zerbitzua zeinen "betea" den adierazten du. PUZaren erabilera % 90 bada, zure sistemak trafiko gehiago kudeatu al dezake? …
