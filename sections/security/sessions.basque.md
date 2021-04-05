# Aldatu lehenetsitako saioko middlewarearen ezarpenak

<br/><br/>

### Azalpena

middleware programa ezagun askok ez dituzte praktika egokienak/cookie ezarpenak segurtasunez ezartzen. Ezarpen lehenetsi horiek moldatzeak babes handiagoa eskaintzen die erabiltzaileari eta aplikazioari, saio bahiketa eta saioaren identifikazioa bezalako erasoen mehatxua murriztuz.

Lehenetsitako ezarpen ohikoena saioaren `izena` da; eta, `express-session`-ean, hori `connect.sid` da. Erasotzaileren batek informazio hori erabil dezake web aplikazioaren azpiko plataforma eta moduluen ahultasun espezifikoak identifikatzeko. Balio horren ordez lehenetsia ez den besteren bat aukeratzeak zaildu egingo du jakitea zein saio mekanismo erabiltzen ari den.

`express-session`en ere, `cookie.secure` aukera faltsua da lehenetsitako balio gisa. Ezarpen hori egia gisa konfiguratzeak cookiea httpsra soilik garraiatu ahal izatea ekarriko du, `man-in-the-middle`erako erasoetatik babesten duena.

<br/><br/>

### Kode adibidea: cookie ezarpen seguruak ezartzea

```javascript
// expressen sesio middlewarea erabiliz
app.use(
  session({
    secret: "youruniquesecret", // string sekretua erabili da cookiean gordeta dagoen sesioaren IDan konektatzeko
    name: "youruniquename", // izen bakarra zehaztu berezko connect.sid ezabatzeko
    cookie: {
      httpOnly: true, // XSS erasoen arriskua gutxitu bezeroari cookiea irakurtzen sahietsiz
      secure: true, // https eran bakarrik bidali cookiea
      maxAge: 60000 * 60 * 24, // zehaztu cookiearen bizi iraupena mili segundutan
    },
  })
);
```

<br/><br/>

### Beste blogari batzuek diotena

[NodeSource blog](http://nodesource.com/blog/nine-security-tips-to-keep-express-from-getting-pwned/) bloga:

> ...Expressek oso seguruak ez diren cookie ezarpen lehenetsiak ditu. Eskuz doi daitezke segurtasuna hobetzeko, bai aplikazio batentzat bai erabiltzaileentzat.\*

<br/><br/>
