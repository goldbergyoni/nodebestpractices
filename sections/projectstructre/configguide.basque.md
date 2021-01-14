# Erabili ingurunea errespetatzen duen konfigurazio seguru eta hierarkiko bat

<br/><br/>

### Azalpen paragrafoa

Konfigurazio datuekin jardutean, hainbat gauza gogaikarri eta moteltzaile aurki genitzake:

1. prozesu ingurune aldagaiak erabiliz balio guztiak ezartzea benetan gogaikarria bihurtzen da 100 balio injektatu behar ditugunean (hauek soilik konfigurazio fitxategi batean argitaratu partez), hala ere, fitxategiekin jardutean, soilik DevOps administrariak dira gai jokaera aldatzeko kodea aldatu gabe. Konfigurazio sistema fidagarri batek konfigurazio fitxategiak eta prozesu aldagaien berridazketa konbinatu beharko lituzke.

2. balio guztiak JSON batean zehaztean, balioak aurkitu eta aldatzea frustragarri bihurtzen da zerrenda handitzen doan einean. Ataletan antolatuta dagoen JSON fitxategi hierarkiko batek arazo hau konpondu dezake. Gainera, konfigurazio liburutegi gutxi batzuek konfigurazioa hainbat fitxategietan gordetzea eta guztiak exekuzio garaian bateratzea ahalbidetzen dute. Begiratu beheko adibidea

3. Jakina da datu baseko pasahitza bezalako informazio garrantzitsua gordetzea ez dela gomendagarria, baina ez da konponbide azkar eta praktikorik existitzen erronka honetarako. Konfigurazio liburutegi batzuek fitxategiak enkriptatzeko aukera ematen dute, beste batzuek GIT argitarapen prozesuen bitartean enkriptatzen dituzte balio hauek edota ez dituzte balio errealak gordetzen, baizik eta ingurune aldagaien bidez zehazten dituzte inplementazio prozesuaren bitartean.

4. Konfigurazio egoera aurreratu batzuek konfigurazio balioak komando sarrera bidez (vargs) injektatzea eskatzen dute, edota konfigurazio informazioa sinkronizatzea Redis bezalako cache memoria erabiliaz, zerbitzari ugarik konfigurazio datu berak erabiltzea ahalbidetuz.

5. aplikazioak ahalik eta azkarren huts egin behar du eta berehalako erantzuna eman aplikazioaren hasieratzean beharrezko ingurune aldagaiak zehaztuta ez badaude, konfigurazioa balioztatzea [convict](https://www.npmjs.com/package/convict) erabiliz lor daiteke.

Konfigurazio liburutegi batzuek aipatutako funtzionalitate gehienak dohainik proposatzen dituzte, eman begirada bat [rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf), [config](https://www.npmjs.com/package/config), eta [convict](https://www.npmjs.com/package/convict) bezalako npm liburutegiei, non aipatutako ezaugarri gehienak betetzen dituzten

<br/><br/>

### Kodearen Adibidea – konfigurazio hierarkikoak balioak aurkitzen eta konfigurazio fitxategi handiak mantentzen laguntzen du

```json5
{
  // Bezeroen konfigurazio modulua
  Bezeroa: {
    dbConfig: {
      host: "localhost",
      port: 5984,
      dbName: "bezeroak",
    },
    credit: {
      initialLimit: 100,
      // Set low for development
      initialDays: 1,
    },
  },
}
```

<br/><br/>
