# Aurkitu erroreak eta jardunik gabeko uneak APM produktuak erabiliz

### Azalpen paragrafoa

Exzepzioa != Errorea. Errore kudeaketa tradizionalak kodearekin erlazionatutako arazotzat hartzen ditu exzepzioak, baina aplikazioaren erroreak, formularioko kode bide motelek, APIen jardunik gabeko uneek, konputazio baliabide faltak... ekar litzazke. Hementxe dira APM produktuak praktiko, askotariko 'ezkutatutako' arazoak instalazio minimo batekin proaktiboki antzematen laguntzen dute eta. APM produktuen ohizko funtzionalitateen artean, HTTP APIak erroreak bidaltzen dituenean alerta jotzea, API erantzunaren denbora aurretik zehaztutako denbora muga baino luzeagoa denean, ‘kode usainak’ atzeman, monitorizazio zerbitzariaren baliabideetzat funtzionalitateak, operazio inteligentziadun aurreko panelak (dashboard) IT metrikekin eta beste funtzionalitate erabilgarri ugari. Hornitzaile gehienek dohaineko plana eskeintzen dute

### Wikipedia APMri buruz

Informazioaren teknologien eta sistemen kudeaketaren alorretan, Application Performance Management (APM) software aplikazioen errendimendu eta erabilgarritasunaren monitorizazio eta kudeaketa da. APM, aplikazioen errendimendu arazo konplexuak antzeman eta diagnostikatzen saiatzen da, esperotako zerbitzu maila mantentzeko. APM “IT metriken itzulpena da negozio esanahi balioa duen zerbaitera“. Produktu nagusiak eta segmentuak.

### APM merkatua ulertzen

APM produktuek 3 segmentu nagusi dituzte:

1. Webgune edo API monitorizazioa, martxan egondako denbora eta errendimuendua HTTP eskaeren bidez etengabe monitorizatzen dituzten kanpo zerbitzuak. Minutu gutxi batzuetan ezarri daiteke. Hurrengo hauek dira aukeratutako lehiakide batzuk: [Pingdom](https://www.pingdom.com/), [Uptime Robot](https://uptimerobot.com/), eta [New Relic](https://newrelic.com/application-monitoring)

2. Kodearen instrumentazioa, kode motelaren antzematea, exzepzioen estadistikak, errendimenduaren monitorizazioa eta holako beste funtzionalitateak erabiltzeko agente bat aplikazioan txertatzea eskatzen duen produktu familia da. Hurrengo hauek dira aukeratutako lehiakide batzuk: New Relic, App Dynamics

3. Operazio inteligentziadun aurreko panelak (dashboard), Ops taldea metrikekin eta landutako edukiarekin laguntzean oinarritutako produktu familia da, aplikazioa errendimendu hoberenean modu errezean egon dadin. Honek sarri informazio iturri ezberdinak (aplikazioaren erregistroak, Datu-Basearen erregistroak, zerbitzarien erregistroak, etab.) gehitzea ekartzen du eta aurreko panelen diseinu lana aurreikusi. Hurrengo hauek dira aukeratutako lehiakide batzuk: [Datadog](https://www.datadoghq.com/), [Splunk](https://www.splunk.com/), [Zabbix](https://www.zabbix.com/)

### Adibidea: UpTimeRobot.Com: Webgune monitorizazio aurreko panela

![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/uptimerobot.jpg "Webgune monitorizazio aurreko panela")

### Adibidea: AppDynamics.Com: kode instrumentazioarekin konbinatutako hasieratik amaierarainoko monitorizazioa

![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/app-dynamics-dashboard.png "kode instrumentazioarekin konbinatutako hasieratik amaierarainoko monitorizazioa")
