# Antolatu zure proiektua osagai txikiagotan

<br/><br/>

### Azalpen paragrafoa

Tamaina ertaineko nahiz handiko applikazioetarako, monolitoak benetan kaltegarriak dira. Menpekotasun asko dituen software handi bat edukitzea zaila da hausnartzeko eta maiz espageti kodea eragiten du. Arkitektu azkarrek ere, piztia mantsotzeko eta zatikatzeko haina gaitasun dituztenek, diseinuan esfortzu mental handiak egiten dituzte, eta aldaketa bakoitzak menpeko beste objektuekiko eragina arretaz aztertzen eskatzen du. Goreneko konponbideak software txikia garatzean datza: kode pila osoa fitxategiak beste inorekin partekatzen ez dituzten aparteko osagaietan banandu, bakoitza fitxategi gutxi batzuekin osatua egonik (APIa, zerbitzuak, datuen sartzea, egiaztatzeak, etab.) oso erraza da hausnartzeko. Askok 'mikrozerbitzu' egitura deitzen diote honi, garrantzitsua da mikrozerbitzuak oinarri sorta bat eta ez derrigorrez jarraitu beharreko zehaztapenak direla uletzea. Printzipio ugari erabil ditzakezu mikrozerbitzudun egitura handi batean edota gutxi batzuk soilik. Biak dira zuzenak zure softwarearen konplexutasuna baxua den bitartean. Egin zenezaken beste zerbait osagaien artean mugak sortzea da, zure proiektuaren erroan karpeta bat egokitu osagai logiko bakoitzarentzat eta aparteko bihurtu: beste osagaiek beronen funtzionalitatea erabil dezakete soilik bere interfaze publikotik edo APItik pasatuz. Hau da zure osagaiak sinple mantentzeko, menpekotasunen korapiloa ekiditeko eta zure aplikazioa mikrozerbitzu egitura handietarako prestatzeko zimendua.

<br/><br/>

### Blogeko Aipua: "Eskalatzeak aplikazio osoaren eskalatzea eskatzen du"

MartinFowler.com blogetik

> Aplikazio monolitikoak arrakastatsuak izan daitezke, baina jendeak gero eta frustrazio gehiago ditu hauekin, batez ere gero eta aplikazio gehiago lainoan inplementatzen direlako. Aldaketa zikloak lotuta daude, aplikazioaren zati txiki batean egindako aldaketak monolito osoa bersortzea eta inplementatzea eskatzen du. Askotan zaila da denbora aurrera joan ahala moduluzko egitura egokia mantentzea, modulu batean bakarrik eragina izango dituzten aldaketak mantentzea. Eskalatzeak aplikazio osoaren eskalatzea eskatzen du

<br/><br/>

### Blogeko Aipua: "Zergatik egiten du garrasi zure aplikazioaren egiturak?"

[uncle-bob](https://8thlight.com/blog/uncle-bob/2011/09/30/Screaming-Architecture.html) blogetik

> ...Liburutegi baten egitura begiratuko bazenu, ziurrenik sarrera handi batekin aurkituko zinake, erregistro-bulego lekuekin, irakurketa lekuekin, biltzar toki txikiekin, eta liburutegiko liburu guztiak edukitzeko beste apal dituzten galeria ugari. Egitura honek honakoa oihukatu beharko luke: Liburutegia.<br/>

Beraz, zer oihukatzen du zure aplikazioaren egiturak? Zure direktorio egituraren maila altuena eta maila altueneko paketeko iturburu-fitxategiak begiratzen dituzunean, zer oihukatzen dute: Osasun Sistema, Kontu Sistema edo Inbentario Kudeaketa Sistema? Edo zera oihukatzen al dute: Rails, Spring/Hibernate edo ASP?

<br/><br/>

### Zuzena: Antolatu zure proiektua aparteko osagaietan

![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/structurebycomponents.PNG "Antolatu proiektua osagaietan")

<br/><br/>

### Okerra: Taldekatu zure fitxategiak rol teknikoen arabera

![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/structurebyroles.PNG "Antolatu proiektua rol teknikoen arabera")
