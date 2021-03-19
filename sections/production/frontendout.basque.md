# Atera frontend modulu eko aktiboak Nodetik

<br/><br/>

### Azalpena

Web aplikazio klasiko batean backend-ak elementu grafikoak helarazten dizkio
nabigatzaileari. Noderen munduan oso ohikoa da Express middleware estatikoa erabiltzea bezeroaren fitxategi estatikoak optimizatzeko. BAINA Node ez da web aplikazio tipikoa, fitxategi asko aldi berean hornitzeko optimizatuta ez dagoen hari bakarra erabiltzen baitu. Horren ordez, aztertu ez ote den hobe erabiltzea alderantzizko proxy bat (adibidez, nginx, HAProxy), hodeiko biltegiren bat edo CDN (adibidez, AWS S3, Azure Blob Storage, etab.), zeregin horretarako optimizazio asko erabiltzen dituen eta errendimendu askoz hobea lortzen duena. Adibidez, nginx bezalako middleware espezializatuak zuzeneko lotuneak dauzka fitxategi sistemaren eta sareko txartelaren artean, eta prozesu anitzeko antolaketa erabiltzen du eskaera anitzen arteko esku hartzea minimizatzeko.

Hauetako bat izan daiteke zure irtenbide egokiena:

1. Alderantzizko proxy bat erabiltzea: zure fitxategi estatikoak Node aplikazioaren ondoan kokatuko dira, eta Node aplikazioaren aurrean jartzen den proxy batek (adibidez, nginx) bideratuko ditu fitxategien karpeta estatikoari egindako eskaerak.
   Horrela, zure Node aplikazioa arduratzen da fitxategi estatikoak hedatzeaz, baina ez zerbitzatzeaz. Zure frontden/interfazeko lankideari asko gustatuko zaio antolaketa hau, frontden/interfazeko eskaerak galarazten baititu.

2. Hodeian biltegiratzea: zure fitxategi estatikoak EZ dira zure Node aplikazioaren edukiaren zati izango, eginkizun horretarako sortu diren AWS S3, Azure BlobStorage edo antzeko beste zerbitzu batzuetara igoko dira eta. Antolaketa hau erabiliz, zure Node aplikazioak ez du fitxategi estatikoak hedatzeko ardurarik izango, ezta horiek zerbitzatzeko ere; beraz, Node eta Frontenda/interfazea erabat banatuta egongo dira, edonola ere talde desberdinek kudeatuta baitaude.

<br/><br/>

### Ezarpen adibidea: nginxen ohiko ezarpena fitxategi estatikoak zerbitzatzeko

```nginx
# konfiguratu gzip konprimatzea
gzip on;
keepalive 64;

# web zerbitzaria zehaztu
server {
listen 80;
listen 443 ssl;

# eduki estatikoa kudeatu
location ~ ^/(images/|img/|javascript/|js/|css/|stylesheets/|flash/|media/|static/|robots.txt|humans.txt|favicon.ico) {
root /usr/local/silly_face_society/node/public;
access_log off;
expires max;
}
```

<br/><br/>

### Beste blogari batzuek diotena

[StrongLoop](https://strongloop.com/strongblog/best-practices-for-express-in-production-part-two-performance-and-reliability/) bloga:

> …Garapenean, [res.sendFile()](http://expressjs.com/4x/api.html#res.sendFile) erabil dezakezu fitxategi estatikoak hornitzeko. Baina ez egin hori ekoizpenean, funtzio horrek fitxategi sistematik irakurtzen baitu fitxategi eskaera bakoitza; beraz, denbora asko beharko erantzuteko, eta aplikazioaren errendimendu orokorrari eragingo dio. Kontuan izan res.sendFile () ez dela sendfile sistemaren deiarekin inplementatzen, eta hori askoz ere eraginkorragoa izango litzateke. Horren ordez, erabili zerbitzu estatikoa duen middlewareren bat (edo baliokidea den zerbait), hau da, Express aplikazioetarako fitxategiak hornitzeko optimizatuta dagoen tresnaren bat. Aukera hobea da alderantzizko proxy bat erabiltzea fitxategi estatikoak hornitzeko. Informazio gehiago nahi baduzu, ikusi “Erabili alderantzizko proxy bat”…

<br/><br/>
