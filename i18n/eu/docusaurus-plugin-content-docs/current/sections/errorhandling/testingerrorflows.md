# Testeatu erroreen fluxua zure test framework gustukoena erabiliz

### Azalpena

Bide ‘alaiak’ probatzea ez da hutsegiteak probatzea baino hobea. Probako kodeen estaldura ona da salbuespenezko bideak probatzeko. Bestela, ez dago inolako konfidantzarik salbuespenak zuzen kudeatuta dauden. Unitateen azterketa esparru guztiek, [Mocha](https://mochajs.org/) eta [Chai](http://chaijs.com/)k bezala, onartzen dituzte salbuespen probak (kode adibideak beherago). Gogaikarria iruditzen bazaizu funtzio eta salbuespen bakoitza probatzea, REST APIen HTTP erroreak bakarrik probatzea erabaki zenezake


### Kode adibidea: ziurtatu salbuespen egokia jaurtitzen dela Mocha eta Chai erabiliz

<details>
<summary><strong>Javascript</strong></summary>

```javascript
describe("Facebooken txata", () => {
  it("Jakinarazi txateko mezu berria iristean", () => {
    const txatZerbitzua = new txatZerbitzua();
    txatZerbitzua.parteHartzaileak = eskuratuDeskonektatutakoParteHartzaileak();
    expect(txatZerbitzua.mezuaBidali.bind({ mezua: "Aupa" })).to.throw(
      KonexioErrorea
    );
  });
});
```

</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
describe("Facebooken txata", () => {
  it("Jakinarazi txateko mezu berria iristean", () => {
    const txatZerbitzua = new txatZerbitzua();
    txatZerbitzua.parteHartzaileak = eskuratuDeskonektatutakoParteHartzaileak();
    expect(txatZerbitzua.mezuaBidali.bind({ mezua: "Aupa" })).to.throw(
      KonexioErrorea
    );
  });
});
```

</details>

### Kodearen adibidea: APIak HTTP errore kode zuzena bueltatzen duela ziurtatu

<details>
<summary><strong>Javascript</strong></summary>

```javascript
it("Facebookeko talde berria sortu", () => {
  const taldeOkerrarenInformazioa = {};
  return httpRequest({
    method: "POST",
    uri: "facebook.com/api/groups",
    resolveWithFullResponse: true,
    body: taldeOkerrarenInformazioa,
    json: true,
  })
    .then((response) => {
      expect.fail(
        "kodea bloke honetan exekutatu nahi bagenu, goiko operazioan errorerik ez da izan"
      );
    })
    .catch((response) => {
      expect(400).to.equal(response.statusCode);
    });
});
```

</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
it("Facebookeko talde berria sortu", async () => {
  let taldeOkerrarenInformazioa = {};
  try {
    const response = await httpRequest({
      method: "POST",
      uri: "facebook.com/api/groups",
      resolveWithFullResponse: true,
      body: taldeOkerrarenInformazioa,
      json: true,
    });
    // kodea bloke honetan exekutatu nahi bagenu, goiko operazioan errorerik ez da izan
    expect.fail("Eskaerak huts egin behar izango luke");
  } catch (response) {
    expect(400).to.equal(response.statusCode);
  }
});
```

</details>
