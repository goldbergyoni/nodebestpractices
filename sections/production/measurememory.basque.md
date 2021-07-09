# Neurtu eta zaindu memoriaren erabilera

<br/><br/>

### Azalpena

Mundu perfektu batean, web garatzaile batek ez luke memoria ihesei aurre egin beharko. Egia esan, memoria arazoak Nodek duen arazo ezaguna da eta ezagutu egin behar dena. Node erabiltzen denean, batez ere, memoriaren erabilera etengabe kontrolatu beharra dago. Garapen eta produkzio txikiko guneetan, neurketa eskuz egin dezakezu Linux komandoak edo npm tresnak eta liburutegiak erabiliz, nodo-inspector eta memwatch bezalakoak. Eskuzko jarduera horren eragozpen nagusia da eskatzen dutela jarraipena gizaki batek egitea modu aktiboan. Ekoizpen gune serioetarako, guztiz funtsezkoa da kontrol tresna sendoak erabiltzea, adibidez (AWS CloudWatch, DataDog edo antzeko edozein sistema proaktibo), iragazkia gertatzen denean ohartarazten duena. Badaude garapen praktika gutxi batzuk ere ihesak saihesteko: saihestu datuak gordetzea maila globalean, erabili tamaina dinamikoa duten datuentzako fluxuak, mugatu aldagaiak let eta const erabiliz.

<br/><br/>

### Beste blogari batzuek diotena

[Dyntrace](https://www.dynatrace.com/news/blog/understanding-garbage-collection-and-hunting-memory-leaks-in-node-js/) bloga:

> ... ”Dagoeneko badakigun bezala, Node.jsren V8k jatorrizko kodean konpilatzen du JavaScript. Sortzen diren jatorrizko datu egiturek ez dute zerikusi handirik jatorrizko irudikapenarekin, eta V8k kudeatzen ditu soilik. Horrek esan nahi du ezin dugula memoria aktiboki esleitu edo banatu JavaScripten. V8k zabor bilketa izeneko mekanismo ezaguna erabiltzen du arazo horri aurre egiteko".

[Dyntrace](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load) bloga:

> ... ... "Adibide honek ageriko emaitzak lortzen baditu ere, prozesua beti berdina da: sortu pila zabortegiak denbora pixka bat eta memoria asko esleituta. Konparatu zabortegi batzuk zer hazten ari den jakiteko"

[Rising Stack](https://blog.risingstack.com/finding-a-memory-leak-in-node-js/) bloga:

> ... “hutsegitea, Node.js 1,5 GB memoria inguru erabiltzen saiatuko da, eta hori mugatu egin behar da memoria gutxiago duten sistemetan exekutatzen denean. Hori da espero den jokabidea, zabor bilketa oso operazio garestia baita. Horren irtenbidea izan zen Node.js prozesuari beste parametro bat gehitzea: nodo –max_old_space_size = 400 server.js –production . "

“Zergatik da garestia zabor bilketa? V8 JavaScript motorrak zaborra biltzeko erabiltzen duen mekanismoa mundu osoa gelditzeko modukoa da. Praktikan, horrek esan nahi du programak exekuzioa gelditu egiten duela zabor bilketa martxan dagoen bitartean".
