# Ez blokeatu gertaeren begizta

<br/><br/>

Nodek gertaeren begizta nagusiki hari bakarraren barruan kuadeatzen du, hainbat ilaren artean txandakatuz. Konplexutasun handiko ekintzak, json fitxategi handien sintaxi analisiak, logikaren erabilera array oso handietan, seguruak ez diren expresio erregularren kontsultak eta sarrera/irteera operazio garrantzitsuak gertaeren egintza geldiaraztea eragin dezakete. Sahiestu PUZarentzat zeregin intentsibo hauek zerbitzu kontsakratu batean (adibidez ataza zerbitzaria) egitea eta sahiatu Worker Pool erabiliaz zeregin luzeak pauso txikietan banatzea, hauexek, gertaeren begizta blokeatzea ekiditeko moduetako batzuk dira.

### Adibidea: gertaeren begiztan blokeatua izan

[Node Clinic](https://clinicjs.org/documentation/doctor/05-fixing-event-loop-problem)go adibide bat begira dezagun

```javascript
function lokartu(ms) {
  const etorkizuna = Date.now() + ms;
  while (Date.now() < etorkizuna);
}

server.get("/", (req, res, next) => {
  lokartu(30);
  res.send({});
  next();
});
```

Aplikazio honen frogak egitean, 'while' komandoak sortutako latentzia ikusiko dugu

### Exekutatu frogen segida

`clinic doctor --on-port 'autocannon localhost:$PORT' -- node slow-event-loop`

### Emaitzak

```
┌────────────┬────────┬────────┬────────┬────────┬────────────────┬──────────┬───────────┐
│ Statistika │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Baztazbestekoa │ Stdev    │ Max       │
├────────────┼────────┼────────┼────────┼────────┼────────────────┼──────────┼───────────┤
│ Latentzia  │ 270 ms │ 300 ms │ 328 ms │ 331 ms │    300.56 ms   │ 38.55 ms │ 577.05 ms │
└────────────┴────────┴────────┴────────┴────────┴────────────────┴──────────┴───────────┘
┌────────────┬────────┬────────┬────────┬────────┬────────────────┬──────────┬───────────┐
│ Statistika │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Baztazbestekoa │ Stdev    │ Min       │
├────────────┼────────┼────────┼────────┼────────┼────────────────┼──────────┼───────────┤
│ Req/Sec    │ 31     │ 31     │ 33     │ 34     │    32.71       │ 1.01     │ 31        │
├────────────┼────────┼────────┼────────┼────────┼────────────────┼──────────┼───────────┤
```

## Gertaeren begiztatzearen irudia

![Gertaeren begiztatzea](/assets/images/event-loop.png "Gertaeren begiztatzea")

> Hemen dago oinarrizko arau bat zure Node zerbitzaria azkarra izaten mantentzeko: Nore azkarra da edozein momentutan bezero bakoitzarekin duen elkarlana "txikia" denean.
> [Ez blokeatu gertaeren begiaztatzea (edota atazen begiaztatzea) | Node.js](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

> Gehiengo batek huts egiten du beren lehenengo NodeJS aplikazioak egiterako orduan, gertaeren begiaztatzea, erroreen kudeaketa eta asinkronoaren inguruko kontzeptuak ez ulertzeagatik.
> [Gertaeren begiaztatzearen jarraibide egokiak — NodeJS gertaeren begiaztatzea, 5.partea](https://jsblog.insiderattack.net/event-loop-best-practices-nodejs-event-loop-part-5-e29b2b50bfe2)
