# Ezarri NODE_ENV = produkzioa

<br/><br/>

### Azalpena

Prozesuaren ingurune aldagaiak balio giltzen bikoteen multzo bat dira, eskuarki ezarpenetan erabiltzen direnak eta exekutatzen ari den edozein programatan eskuragarri daudenak.
Edozein aldagai erabil daitekeen arren, Nodek NODE_ENV izeneko aldagaia erabilera bultzatzen du, oraintxe bertan ekoizten ari garen ala ez adierazteko. Determinazio horri esker, osagaiek diagnostiko hobeak egin ditzakete garapenean zehar, adibidez cachea desgaituz edo hitz erregistroen adierazpenak igorriz. Edozein ezarpen tresna modernok (Chef, Puppet, CloudFormation, besteak) inguruneko aldagaiak ezartzea onartzen du hedapenean.

<br/><br/>

### Kode adibidea: NODE_ENV ingurumen aldagaia ezarri eta irakurtzea

```shell script
// Ingurumen aldagaiak bash-en ezarri node prozesua hasi aurretik
$ NODE_ENV=development
$ node
```

```javascript
// Kodea erabiliz ingurumen aldagaia irakurri
if (process.env.NODE_ENV === "production") useCaching = true;
```

<br/><br/>

### Beste blogari batzuek diotena

[Dynatrace](https://www.dynatrace.com/blog/the-drastic-effects-of-omitting-node_env-in-your-express-js-applications/) bloga:

> ...Node.jsk badu uneko modua ezartzean NODE_ENV izeneko aldagaia erabiltzeko konbentzioa. Izan ere, NODE_ENV irakurtzen du eta, konfiguratuta ez badago, 'garapena' ezarpena lehenesten dio. Argi ikusten dugu NODE_ENV ekoizpenean ezartzean, Node.jsk kudea dezakeen eskaera kopurua bi heren inguruko hazkundea duela PUZaren erabilera zertxobait jaisten den bitartean. _Azpimarratu beharra dago NODE_ENV ekoizpenean ezartzeak zure aplikazioa 3 aldiz azkarragoa bihurtzen duela._

![NODE_ENV=produkzioa](/assets/images/setnodeenv1.png "NODE_ENV=produkzioa")

<br/><br/>
