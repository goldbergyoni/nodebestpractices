# Aurkitu erroreak eta jardunik gabeko uneak APM produktuak erabiliz

### Azalpena

Salbuespena != Errorea. Erroreen kudeaketa tradizionalak kodearekin erlazionatutako arazotzat hartzen ditu salbuespenak, baina aplikazioen erroreak formularioko kode bide motelen, APIen jardunik gabeko uneen eta baliabide konputazionalen gabezien ondorio izan daitezke. Horra non APM produktuak oso erabilgarriak diren, "lurperatutako" askotariko gaiak modu proaktiboan detektatzeko aukera ematen baitute gutxieneko konfigurazioarekin. APM produktuen ohiko funtzionalitateen artean daude, adibidez, HTTP APIak erroreak bidaltzen dituenean alerta jotzea, APIaren erantzunaren denbora aurretik zehaztutako denbora muga baino luzeagoa denean antzematea, ‘kode usainak’ hautematea, monitorizazio zerbitzariaren baliabideentzako funtzionalitateak, operazio inteligentziadun panelak (dashboard) IT metrikekin eta beste funtzionalitate batzuk oso erabilgarriak direnak. Hornitzaile gehienek dohaineko plana eskaintzen dute

### Wikipedia APMri buruz

Informazioaren teknologien eta sistemen kudeaketaren alorretan, Application Performance Management (APM) software aplikazioen errendimendu eta erabilgarritasunaren monitorizazio eta kudeaketa da. APM aplikazioen errendimendu arazo konplexuak atzeman eta diagnostikatzen saiatzen da, esperotako zerbitzu maila mantentzeko. APM "IT metrikak negozioaren esanahira ([esaterako] balioa)" itzultzea da. Produktu eta segmentu nagusiak. APM "IT metrikak negozioaren esanahira ([esaterako] balioa)" itzultzea da. Produktu eta segmentu nagusiak

### APM merkatua ulertzen

APM produktuek 3 segmentu nagusi dituzte:

1. Webgune edo APIen monitorizazioa, martxan egondako denbora eta errendimuendua HTTP eskaeren bidez etengabe monitorizatzen dituzten kanpo zerbitzuak. Minutu gutxi batzuetan ezar daiteke. Hurrengo hauek dira aukeratutako lehiakide batzuk: [Pingdom](https://www.pingdom.com/), [Uptime Robot](https://uptimerobot.com/), eta [New Relic](https://newrelic.com/application-monitoring)

2. Kodearen instrumentazioa, kode motelaren atzematea, salbuespenen estatistikak, errendimenduaren monitorizazioa eta holako beste funtzionalitate batzuk erabiltzeko agente bat aplikazioan txertatzea eskatzen duen produktu familia da. Hurrengo hauek dira aukeratutako lehiakide batzuk: New Relic, App Dynamics

3. Adimen operatiboaren panela produktuen linea bat da,  operazio taldeari metrika eta eduki aukeratuak eskaintzen dizkiona eta aplikazioaren errendimendua zein den jakitera behartzen duena. Horrek informazio iturri anitz (aplikazioen erregistroak, DB erregistroak, zerbitzarien erregistroa, etab.) eta aurrez aurreko arbelaren diseinua batzea eskatzen du. Hurrengo hauek dira aukeratutako lehiakide batzuk: [Datadog](https://www.datadoghq.com/), [Splunk](https://www.splunk.com/), [Zabbix](https://www.zabbix.com/)

### Adibidea: UpTimeRobot.Com: webguneak monitorizatzeko panela

![alt text](../../assets/images/uptimerobot.jpg "Webgune monitorizazio aurreko panela")

### Adibidea: AppDynamics.Com: hasieratik amaierarainoko monitorizazioa kode instrumentazioarekin konbinatutakoa

![alt text](../../assets/images/app-dynamics-dashboard.png "kode instrumentazioarekin konbinatutako hasieratik amaierarainoko monitorizazioa")
