# Erabili ingurunea errespetatzen duen konfigurazio seguru eta hierarkiko bat

<br/><br/>

### Azalpena

Konfigurazio datuekin jardutean, hainbat gauza gogaikarri eta moteltzaile aurki genitzake:

1. prozesuaren inguruneko aldagaiak erabiliz giltza guztiak ezartzea benetan gogaikarria bihurtzen da 100 giltza injektatu behar ditugunean (haiek soilik konfigurazio fitxategi batean argitaratu partez), hala ere, fitxategiekin jardutean, soilik DevOps administrariak dira gai jokaera aldatzeko, kodea aldatu gabe. Konfigurazio sistema fidagarriek konfigurazio fitxategiak eta prozesu aldagaien berridazketa konbinatu beharko lituzkete

2. giltza guztiak JSON batean zehaztean, balioak aurkitu eta aldatzea frustragarria da zerrenda handitzen doan heinean. Ataletan antolatuta dagoen JSON fitxategi hierarkiko batek arazo hori konpondu dezake. Gainera, konfigurazio liburutegi gutxi batzuek konfigurazioa hainbat fitxategitan gordetzea ahalbidetzen dute eta guztiak exekuzio garaian bateratzea. Begiratu beheko adibidea

3. jakina da ez dela gomendagarria datu baseko pasahitza bezalako informazio garrantzitsua gordetzea, baina ez da irtenbide azkar eta praktikorik existitzen erronka honetarako. Konfigurazio liburutegi batzuek fitxategiak enkriptatzeko aukera ematen dute, beste batzuek GIT argitarapen prozesuen bitartean enkriptatzen dituzte balio horiek edota ez dituzte balio errealak gordetzen, baizik eta ingurune aldagaien bidez zehazten dituzte inplementazio prozesuaren bitartean

4. konfigurazio egoera aurreratu batzuek konfigurazio giltzak komando sarrera bidez (vargs) injektatzea eskatzen dute, edota konfigurazio informazioa sinkronizatzea Redis bezalako cache memoria erabiliz, zerbitzari ugarik konfigurazio datu berak erabiltzea ahalbidetuz

5. aplikazioak ahalik eta azkarren huts egin behar du eta berehalako erantzuna eman aplikazioaren abiaraztean, beharrezko ingurune aldagaiak zehaztuta ez badaude. Konfigurazioa balioztatzeko [convict](https://www.npmjs.com/package/convict) erabiliz lor daiteke hori

Konfigurazio liburutegi batzuek aipatutako funtzionalitate gehienak dohainik eskaintzen dituzte. Eman begiratu bat [rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf), [config](https://www.npmjs.com/package/config), eta [convict](https://www.npmjs.com/package/convict) bezalako npm liburutegiei, non aipatutako ezaugarri gehienak betetzen dituzten

<br/><br/>

### Kode adibidea: konfigurazio hierarkikoak balioak aurkitzen eta konfigurazio fitxategi handiak mantentzen laguntzen du

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
      // Ezarri balio txikia garapenerako
      initialDays: 1,
    },
  },
}
```

<br/><br/>
