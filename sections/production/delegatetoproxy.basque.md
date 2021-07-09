# Delegatu ahal den guztia (adibidez, eduki estatikoa, gzip) alderantzizko proxy batean

<br/><br/>

### Azalpena

Oso tentagarria da cargo-cult Express-a kargatzea, eta haren middleware eskaintza aberatsa erabiltzea sarearekin zerikusia duten zereginetarako, hala nola, fitxategi estatikoak zerbitzatzea, gzip kodetzea, eskaerak murriztea, SSL amaierak, etab. Hori denbora alperrik galtzea da, zeren eta, azpiprozesu bakarrekoa izanik, PUZa denbora luzez edukiko baitu lanean (Gogoan izan Noderen exekuzio eredua optimizatuta dagoela zeregin laburretarako edo E / S zeregin asinkronizatuetarako). Egokiagoa da sareko zereginetan erabili ohi den tresnaren bat erabiltzea. Ezagunenak nginx eta HAproxy dira, hodeiko saltzaile handienek Node.jsren prozesuetan sarrerako karga arintzeko ere erabiltzen dituztenak.

<br/><br/>

### Nginx konfigurazio adibidea: erabili nginx zerbitzariaren erantzunak konprimatzeko

```nginx
# konfiguratu gzip konprimatzea
gzip on;
gzip_comp_level 6;
gzip_vary on;

# konfiguratu upstream
upstream nireAplikazioa {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    keepalive 64;
}

# web zebitzaria zehaztu
server {
    # konfiguratu zerbitzaria ssl-arekin eta errore orriekin
    listen 80;
    listen 443 ssl;
    ssl_certificate /some/location/sillyfacesociety.com.bundle.crt;
    error_page 502 /errors/502.html;

    # eduki estatikoa kudeatu
    location ~ ^/(images/|img/|javascript/|js/|css/|stylesheets/|flash/|media/|static/|robots.txt|humans.txt|favicon.ico) {
    root /usr/local/silly_face_society/node/public;
    access_log off;
    expires max;
}
```

<br/><br/>

### Beste blogari batzuek diotena

- [Mubaloo](http://mubaloo.com/best-practices-deploying-node-js-applications) bloga

> …Oso erraza da tranpa honetan erortzea - ​​Express bezalako pakete bat ikusten duzu eta pentsatzen duzu "Ikaragarria! Has gaitezen ". Ekin diozu kodetzeari eta nahi duzuna egiten duen aplikazioa duzu. Hori bikaina da eta, egia esan, ia-ia irabazia duzu borroka . Hala ere, gerra galduko duzu zure aplikazioa zerbitzari batera igotzen baduzu eta zure HTTP atakan entzuten baduzu. Izan ere, oso gauza erabakigarria ahaztu duzu: Node ez da web zerbitzaria. **Zure aplikaziora trafiko bolumen handia iristen hasi bezain laster, ohartuko zara gauzak gaizki hasten direla: konexioak erori egin dira, aktiboak zerbitzurik gabe daude edo, okerrenean, zure zerbitzariak huts egin du. Izan ere, egiten ari zarena da Noderi eskatzea bere gain har ditzala web zerbitzari zaildu batek oso ondo egiten dituen gauza korapilatsu guztiak. Zergatik asmatu gurpila?** > **Node eskaera bakarrerako da, irudi bakarrerako. Zure aplikazioak datu basea irakurtzea edo logika korapilatsua kudeatzea bezalako gauza garrantzitsuetarako erabil lezakeen memoria alperrik xahutzen ari da ez dagokion zereginetan. Zergatik alboratu zure eskaera erosotasunagatik?**

- [Argteam](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load) bloga

> Express.jsk middleware konektatuen bidez fitxategi estatikoen kudeaketa integratua egiten duen arren, ez zenuke inoiz erabili beharko. **Nginx-ek askoz hobeto kudea ditzake fitxategi estatikoak eta ekidin dezake eduki ez dinamikoko eskaerek blokeatzea gure node prozesuak**…
