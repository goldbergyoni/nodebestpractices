# Testeatu erroreen fluxua zure test framework gustukoena erabiliz

### Azalpen paragrafoa

Bide ‘alaiak’ frogatzea ez da huts egiteak frogatzea baino hobea. Kode frogatze estaldura onak ezohiko bideak frogatzea eskatzen du. Bestela, ez dago exzepzioak modu zuzenean kudeatuta daudenaren inolako konfidantzarik. Unitate test framework guztiek, adibidez [Mocha](https://mochajs.org/) edo [Chai](http://chaijs.com/), exzepzio frogaketa sostengatzen dute (kode adibideak beherago). Gogaikarria iruditzen bazaizu funtzio eta exzepzio bakoitza frogatzea, soilik REST APIen HTTP erroreak frogatzea erabaki zenezake.

### Kodearen adibidea: Mocha eta Chai erabiliz ziurtatu exzepzio egokia jaurtitzen dela

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
