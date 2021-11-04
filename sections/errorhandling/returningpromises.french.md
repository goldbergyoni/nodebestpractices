# Le retour des promesses

<br/>

### Un paragraphe d'explication

Lorsqu'une erreur se produit, qu'elle provienne d'un flux synchrone ou asynchrone, il est impératif de disposer d'une trace de pile complète du flux d'erreurs. Étonnamment, lorsqu'une fonction `async` renvoie une promesse sans `await` (par exemple, elle appelle une autre fonction `async`), si une erreur se produit, la fonction appelante n'apparaîtra pas dans la trace de la pile. La personne qui diagnostiquera l'erreur ne disposera donc que d'une information partielle - d'autant plus si la cause de l'erreur se situe dans cette fonction d'appel. Il existe une fonctionnalité v8 appelée "zero-cost async stacktraces" qui permet de ne pas couper les traces de pile sur les `await` les plus récents. Mais sans certaines modalités de mise en œuvre non négligeables, elle ne fonctionnera pas si la valeur de retour d'une fonction (sync ou async) est une promesse. Donc, pour éviter les trous dans les traces de pile lorsque des promesses retournées sont rejetées, nous devons toujours résoudre explicitement les promesses avec `await` avant de les retourner à partir des fonctions.

<br/>

### Exemple de code incorrect : appel d'une fonction async sans await

<details><summary>Javascript</summary>
<p>

```javascript
async function throwAsync(msg) {
  await null // il faut attendre au moins quelque chose pour être vraiment asynchrone (voir note n° 2)
  throw Error(msg)
}

async function returnWithoutAwait () {
  return throwAsync('manque returnWithoutAwait dans la trace de pile')
}

// 👎 N'aura PAS la fonction returnWithoutAwait dans la trace de pile
returnWithoutAwait().catch(console.log)
```

log reçu

```
Error: manque returnWithoutAwait dans la trace de pile
    at throwAsync ([...])
```
</p>
</details>

### Exemple de code : appel d'une fonction async avec await approprié

<details><summary>Javascript</summary>
<p>

```javascript
async function throwAsync(msg) {
  await null // il faut attendre au moins quelque chose pour être vraiment asynchrone (voir note n° 2)
  throw Error(msg)
}

async function returnWithAwait() {
  return await throwAsync('avec toutes les instructions présentes')
}

// 👍 aura la fonction returnWithoutAwait dans la trace de pile
returnWithAwait().catch(console.log)
```

log reçu

```
Error: avec toutes les instructions présentes
    at throwAsync ([...])
    at async returnWithAwait ([...])
```

</p>
</details>

<br/>

### Exemple de code incorrect : retourner une promesse sans marquer la fonction comme async

<details><summary>Javascript</summary>
<p>

```javascript
async function throwAsync () {
  await null // il faut attendre au moins quelque chose pour être vraiment asynchrone (voir note n° 2)
  throw Error('manque syncFn dans la trace de pile')
}

function syncFn () {
  return throwAsync()
}

async function asyncFn () {
  return await syncFn()
}

// 👎 syncFn manquera dans la trace de pile parce qu'elle renverra une promesse alors qu'elle est sync
asyncFn().catch(console.log)
```

log reçu

```
Error: manque syncFn dans la trace de pile
    at throwAsync ([...])
    at async asyncFn ([...])
```

</p>
</details>

### Exemple de code : marquer la fonction comme async car elle renvoie une promesse

<details><summary>Javascript</summary>
<p>

```javascript
async function throwAsync () {
  await null // il faut attendre au moins quelque chose pour être vraiment asynchrone (voir note n° 2)
  throw Error('avec toutes les instructions présentes')
}

async function changedFromSyncToAsyncFn () {
  return await throwAsync()
}

async function asyncFn () {
  return await changedFromSyncToAsyncFn()
}

// 👍 maintenant changedFromSyncToAsyncFn sera présent dans la trace de la pile
asyncFn().catch(console.log)
```

log reçu

```
Error: avec toutes les instructions présentes
    at throwAsync ([...])
    at changedFromSyncToAsyncFn ([...])
    at async asyncFn ([...])
```

</p>
</details>

<br/>

### Exemple de code incorrect : utilisation directe du rappel async lorsque le rappel sync est attendu

<details><summary>Javascript</summary>
<p>

```javascript
async function getUser (id) {
  await null
  if (!id) throw Error('la trace de pile n\'indique pas l\'endroit où getUser a été appelé')
  return {id}
}

const userIds = [1, 2, 0, 3]

// 👎 la trace de pile aura la fonction getUser mais ne donnera aucune indication sur l'endroit où elle a été appelée
Promise.all(userIds.map(getUser)).catch(console.log)
```

log reçu

```
Error: la trace de pile n'indique pas l'endroit où getUser a été appelé
    at getUser ([...])
    at async Promise.all (index 2)
```

*Remarque complémentaire* : on pourrait croire que `Promise.all (index 2)` peut aider à comprendre l'endroit où `getUser` a été appelé,
mais en raison d'un [bogue complètement différent dans la v8](https://bugs.chromium.org/p/v8/issues/detail?id=9023), `(index 2)` est
une ligne interne de v8

</p>
</details>

### Exemple de code : envelopper le rappel async dans une fonction async factice avant de le passer en rappel sync

<details><summary>Javascript</summary>
<p>

*Remarque 1* : si vous contrôlez le code de la fonction qui appelle le rappel, changez simplement cette fonction
en async et ajoutez `await` avant l'appel du rappel. Ci-dessous, je suppose que vous n'êtes pas en charge du code qui appelle
le rappel (ou que son changement est inacceptable, par exemple en raison de la rétrocompatibilité)

*Remarque 2* : très souvent, l'utilisation du rappel async dans les endroits où l'on s'attend à ce qu'il soit sync ne fonctionnerait pas du tout. Il ne s'agit pas
de savoir comment réparer le code qui ne fonctionne pas - il s'agit de savoir comment réparer la trace de pile au cas où le code fonctionne déjà
comme prévu

```javascript
async function getUser (id) {
  await null
  if (!id) throw Error('avec toutes les instructions présentes')
  return {id}
}

const userIds = [1, 2, 0, 3]

// 👍 maintenant la ligne ci-dessous est dans la trace de la pile
Promise.all(userIds.map(async id => await getUser(id))).catch(console.log)
```

log reçu

```
Error: avec toutes les instructions présentes
    at getUser ([...])
    at async ([...])
    at async Promise.all (index 2)
```

grâce au `await` explicite dans `map`, la fin de la ligne `at async ([...])` indique l'endroit exact où
`getUser` est appelé

*Remarque complémentaire* : si la fonction async qui enveloppe `getUser` n'a pas `await` avant le retour (exemple incorrect n°1 + exemple incorrect n°3)
alors il ne restera qu'une seule instruction dans la trace de la pile :

```javascript
[...]

// 👎 exemple incorrect n°1 + exemple incorrect n°3 - une seule instruction dans la trace de la pile
Promise.all(userIds.map(async id => getUser(id))).catch(console.log)
```

log reçu

```
Error: [...]
    at getUser ([...])
```

</p>
</details>

<br/>

## Explication approfondie

Les mécanismes des traces de piles des fonctions de sync et des fonctions async dans l'implémentation de la v8 sont très différents :
La trace de pile sync est basée sur la **pile** fournie par le système d'exploitation sur lequel tourne Node.js (comme dans la plupart des langages
de programmation). Lorsqu'une fonction async est en cours d'exécution, la **pile** du système d'exploitation l'a sort dès que la
fonction est arrivée à son premier `await`. Donc la trace de pile async est un mélange de la **pile** du système d'exploitation et d'une
**chaîne de résolution des promesses** rejetées. L'implémentation "zero-cost async stacktraces" étend la  **chaîne de résolution des promesses**
uniquement lorsque la promesse est `awaited` <span>[¹](#1)</span>. Parce que seules les fonctions `async` peuvent `await`,
la fonction sync sera toujours manquante dans la trace de la pile async si une opération async a été effectuée après que la fonction
a été appelé <span>[²](#2)</span>

### Le compromis

Chaque `await` crée une nouvelle micro-tâche dans la boucle d'événement, donc l'ajout d'autres `await` dans le code
introduit une certaine pénalité de performance. Néanmoins, la pénalité de performance introduite par le réseau ou
la base de données est [énormément plus grande](https://colin-scott.github.io/personal_website/research/interactive_latency.html)
donc la pénalité supplémentaire `await` n'est pas quelque chose qui devrait être considéré pendant le développement de serveurs web ou de CLI
sauf pour un code très chaud par requête ou commande. Donc, la suppression de `await` dans 
les `return await` devrait être l'un des derniers moyens pour améliorer sensiblement les performances
et ne doit absolument pas être fait en amont.


### Pourquoi return await était considéré comme incorrect dans le passé

Un certain nombre d'[excellents articles](https://jakearchibald.com/2017/await-vs-return-vs-return-await/) expliquent
pourquoi `return await` ne devrait jamais être utilisée en dehors du bloc `try` et même une
[règle ESLint](https://eslint.org/docs/rules/no-return-await) l'interdit. La raison, c'est que depuis que async/await
est disponible avec des transpileurs dans Node.js 0.10 (et a obtenu un support natif dans Node.js 7.6) et jusqu'à ce
que "zero-cost async stacktraces" a été introduit dans Node.js 10 et démarqué dans Node.js 12, `return await` était absolument
équivalent à `return` pour tout code en dehors du bloc `try`. Il se peut que ce soit encore le cas pour certains autres moteurs ES.
C'est pourquoi la résolution des promesses avant de les retourner est la meilleure pratique pour Node.js et non pour EcmaScript en général

### Remarques :

1. Une autre raison pour laquelle la trace de pile async a une implémentation aussi délicate, c'est que la trace de pile
doit toujours être construite de manière synchrone, sur le même rythme que la boucle d'événement <span id="a1">[¹](#1)</span>
2. Sans `await` dans `throwAsync`, le code serait exécuté dans la même phase de la boucle d'événements. C'est un cas
dégradé où la **pile** de l'OS ne serait pas vide et la trace de pile serait pleine même sans attendre
explicitement le résultat de la fonction. Habituellement, l'utilisation des promesses inclut des opérations asynchrones
et des parties de la trace de la pile sont perdues
3. Zero-cost async stacktraces ne fonctionnera toujours pas pour les usages compliqués de la promesse, par exemple la promesse unique
attendue à plusieurs reprises dans différents endroits

### Références :
  <span id="1">1. </span>[article de blog sur zero-cost async stacktraces en v8](https://v8.dev/blog/fast-async)
  <br/>

  <span id="2">2. </span>[Document sur zero-cost async stacktraces avec les détails de mise en œuvre mentionnés ici](
    https://docs.google.com/document/d/13Sy_kBIJGP0XT34V1CV3nkWya4TwYx9L3Yv45LdGB6Q/edit
  )
  <br/>
