# Structurez vos tests avec le format AAA

<br/><br/>

### Un paragraphe d'explication
Notre plus grand défi en matière de tests est la gestion de notre temps - nous avons déjà le code de production qui nous occupe beaucoup. Pour cette raison, le code de test doit rester simple et facile à comprendre. Lors de la lecture d'un cas de test - cela ne devrait pas ressembler à de la lecture essentiellement de code (boucles, héritage) mais plutôt à du HTML - une expérience déclarative. Pour y parvenir, respectez la convention AAA afin que les lecteurs analysent le test sans effort. Il existe d'autres formats similaires à ce modèle, comme XUnit 'Configuration, exécution, vérification, déconstruction'. Ce sont les trois A :

Le 1er A - Arrange (Préparer) : Tout le code de configuration pour amener le système au scénario que le test a pour objectif de simuler. Cela peut inclure l'instanciation de l'unité avec le constructeur de test, l'ajout d'enregistrements dans la base de données, la simulation sur les objets et tout autre code de préparation

Le 2eme A - Act (Agir) : Exécute l'unité testée. Habituellement 1 ligne de code.

Le 3eme A - Assert (Vérifier) : Vérifie que la valeur reçue correspond à celle attendue. Habituellement 1 ligne de code


<br/><br/>

### Exemple de code : un test structuré avec le format AAA
```javascript
describe.skip('Classification des clients', () => {
    test('Lorsque le client a dépensé plus de 500 $, il doit être classé comme premium', () => {
        //Arrange (Préparer)
        const customerToClassify = {spent:505, joined: new Date(), id:1}
        const DBStub = sinon.stub(dataAccess, 'getCustomer')
            .reply({id:1, classification: 'ordinaire'});

        //Act (Agir)
        const receivedClassification = customerClassifier.classifyCustomer(customerToClassify);

        //Assert (Vérifier)
        expect(receivedClassification).toMatch('premium');
    });
});
```

<br/><br/>

### Contre exemple de code : aucune séparation, un seul bloc, plus difficile à interpréter
```javascript
test('Doit être classé comme premium', () => {
    const customerToClassify = {spent:505, joined: new Date(), id:1}
    const DBStub = sinon.stub(dataAccess, 'getCustomer')
        .reply({id:1, classification: 'regular'});
    const receivedClassification = customerClassifier.classifyCustomer(customerToClassify);
    expect(receivedClassification).toMatch('premium');
});
```

<br/><br/>

###  « Incluez 6 parties dans chaque test »

 [Extrait du blog « 30 bonnes pratiques de test avec Node.js » par Yoni Goldberg](https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347)

 ![Un exemple de rapport de test](/assets/images/6-parts-in-test.jpg "Un exemple de rapport de test")

<br/><br/>

### « Il est important que le lecteur du test soit capable de déterminer rapidement quel comportement le test vérifie »
Extrait du livre [XUnit Patterns](http://xunitpatterns.com/Four%20Phase%20Test.html):

> Il est important que le lecteur du test soit capable de déterminer rapidement quel comportement le test vérifie. Cela peut être très déroutant lorsque diverses portions du « système en test » (SUT : system under test) sont invoquées, certaines pour configurer l'état avant le test (fixture) du SUT, d'autres pour exécuter le SUT et d'autres pour vérifier l'état après le test du SUT. L'identification claire des quatre phases facilite la vision du test.
