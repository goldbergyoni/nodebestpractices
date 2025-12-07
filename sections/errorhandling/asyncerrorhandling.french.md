# Utilisez Async-Await ou les promesses pour le traitement des erreurs asynchrones

### Un paragraphe d'explication

Les fonctions de rappels n'évoluent pas bien car la plupart des programmeurs ne les connaissent pas bien. Elles obligent à vérifier les erreurs partout, à gérer l'imbrication de code désagréable et à rendre difficile le raisonnement sur le flux du code. Les bibliothèques de promesse comme BlueBird, async et Q contiennent un style de code standard en utilisant RETURN et THROW pour contrôler le flux du programme. Plus précisément, elles prennent en charge le style de gestion des erreurs de try-catch qui permet de libérer le chemin du code principal de la gestion des erreurs dans chaque fonction.

### Exemple de code - utiliser des promesses pour détecter les erreurs

```javascript
return fonctionA()
  .then(fonctionB)
  .then(fonctionC)
  .then(fonctionD)
  .catch((err) => logger.error(err))
  .then(toujoursExecuterCetteFonction)
```


### Exemple de code - utiliser async/await pour détecter les erreurs

```javascript
async function executeAsyncTask () {
  try {
    const valueA = await fonctionA();
    const valueB = await fonctionB(valueA);
    const valueC = await fonctionC(valueB);
    return await fonctionD(valueC);
  }
  catch (err) {
    logger.error(err);
  } finally {
    await toujoursExecuterCetteFonction();
  }
}
```

### Contre exemple de code - gestion des erreurs avec des fonctions de rappel

<details>
<summary><strong>Javascript</strong></summary>

```javascript
getData(someParameter, function(err, result) {
    if(err !== null) {
        // faire quelque chose comme appeler la fonction de rappel donnée et passer l'erreur
        getMoreData(a, function(err, result) {
            if(err !== null) {
                // faire quelque chose comme appeler la fonction de rappel donnée et passer l'erreur
                getMoreData(b, function(c) {
                    getMoreData(d, function(e) {
                        if(err !== null ) {
                            // vous avez une idée ?
                        }
                    })
                });
            }
        });
    }
});
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
getData(someParameter, function(err: Error | null, resultA: ResultA) {
  if(err !== null) {
    // faire quelque chose comme appeler la fonction de rappel donnée et passer l'erreur
    getMoreData(resultA, function(err: Error | null, resultB: ResultB) {
      if(err !== null) {
        // faire quelque chose comme appeler la fonction de rappel donnée et passer l'erreur
        getMoreData(resultB, function(resultC: ResultC) {
          getMoreData(resultC, function(err: Error | null, d: ResultD) {
            if(err !== null) {
              // vous avez une idée ?
            }
          })
        });
      }
    });
  }
});
```
</details>

### Citation de blog : « Nous avons un problème avec les promesses »

 Extrait du blog de pouchdb.com

 > …. Et en fait, les fonctions de rappel font quelque chose d'encore plus sinistre : elles nous privent de la pile, ce que nous tenons généralement pour acquis en langage de programmation. Écrire du code sans pile, c'est un peu comme conduire une voiture sans pédale de frein : vous ne réalisez pas à quel point vous en avez besoin tant que vous ne l'avez pas atteint et qu'il n'est pas là. Le but des promesses est de nous rendre les bases linguistiques que nous avons perdues quand nous sommes devenus asynchrones : return, throw et la pile. Mais il faut savoir utiliser correctement les promesses pour en profiter.

### Citation de blog : « La méthode des promesses est beaucoup plus compacte »

 Extrait du blog de gosquared.com

 > …. La méthode des promesses est beaucoup plus compacte, plus claire et plus rapide à écrire. Si une erreur ou une exception se produit dans l'une des opérations, elle est gérée par l'unique gestionnaire .catch (). Avoir cet emplacement unique pour gérer toutes les erreurs signifie que vous n'avez pas besoin d'écrire la vérification des erreurs pour chaque étape du travail.

### Citation de blog : « Les promesses sont natives en ES6, elles peuvent être utilisées avec des générateurs »

 Extrait du blog de StrongLoop

> …. Les fonctions de rappel ont un mauvais historique de gestion des erreurs. Les promesses sont meilleures. Marier la gestion des erreurs intégrée dans Express avec des promesses permet de réduire considérablement les chances d'une exception non capturée. Les promesses sont natives en ES6, elles peuvent être utilisées avec des générateurs et des propositions ES7 comme async/await via des compilateurs comme Babel.

### Citation de blog : « Toutes ces constructions de contrôle de flux auxquelles vous êtes habitué sont complètement cassées »

Extrait du blog de Benno’s

 > …L'un des meilleurs atouts de l'asynchrone, pour la programmation basée sur des fonctions de rappel, c'est que fondamentalement toutes ces constructions de contrôle de flux auxquelles vous êtes habitué sont complètement cassées. Cependant, celle que je trouve la plus cassée, c'est la gestion des exceptions. Javascript fournit une construction try…catch assez familière pour gérer les exceptions. Le problème avec les exceptions, c'est qu'elles fournissent un excellent moyen de court-circuiter les erreurs dans une pile d'appels, mais finissent par être complètement inutiles si l'erreur se produit sur une autre pile…
