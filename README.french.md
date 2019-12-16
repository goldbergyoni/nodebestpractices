[✔]: assets/images/checkbox-small-blue.png

# Bonnes pratiques Node.js

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Bonnes pratiques Node.js">
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%2085%20Best%20Practices-blue.svg" alt="85 items"> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20November%2012%202019-green.svg" alt="Dernière mise à jour : 12 oct. 2019"> <img src="https://img.shields.io/badge/ %E2%9C%94%20Updated%20For%20Version%20-%20Node%2012.12.0-brightgreen.svg" alt="Mis à jour pour node 12.12.0">
</div>

<br/>

[![nodepractices](/assets/images/twitter-s.png)](https://twitter.com/nodepractices/) **Suivez nous sur Twitter !** [**@nodepractices**](https://twitter.com/nodepractices/)

<br/>

Lire dans une autre langue : [![CN](/assets/flags/CN.png)**CN**](/README.chinese.md), [![BR](/assets/flags/BR.png)**BR**](/README.brazilian-portuguese.md), [![RU](/assets/flags/RU.png)**RU**](/README.russian.md) [(![ES](/assets/flags/ES.png)**ES**, ![FR](/assets/flags/FR.png)**FR**, ![HE](/assets/flags/HE.png)**HE**, ![KR](/assets/flags/KR.png)**KR** et ![TR](/assets/flags/TR.png)**TR** en cours !)](#traductions)

<br/>

###### Construit et entretenu par notre [comité de pilotage](#comité-de-pilotage) et nos [collaborateurs](#collaborateurs)

# Dernières bonnes pratiques et nouveautés

- **✅ Nouvelle bonne pratique :** 7.1: [Ne bloquez pas la boucle d'événements](#7-brouillon--performance) par Keith Holliday

- **🇷🇺 Traduction russe :** L'incroyable Alex Ivanov vient de publier une [traduction russe](/README.russian.md)

- **Nous recherchons des contributeurs de Typescript :** vous voulez aider à fournir des exemples TypeScript ? Contactez-nous en ouvrant une issue

<br/><br/>

# Bienvenue ! 3 Choses à savoir avant tout

**1. Vous êtes, en fait, en train de lire un regroupement des meilleurs articles sur Node.js. -** ce référentiel est un résumé et il conserve le contenu le mieux classé sur les bonnes pratiques Node.js, ainsi que du contenu écrit ici par des collaborateurs

**2. Il s'agit du plus grand assemblage d'articles et il s'agrandit chaque semaine -** actuellement, plus de 80 bonnes pratiques, guides de style et astuces d'architecture sont présentés. Nous serions ravis de vous voir contribuer ici, qu'il s'agisse de corriger des erreurs de code, d'aider aux traductions ou de suggérer de nouvelles idées brillantes. Consultez nos [recommandations d'écriture](/.operations/writing-guidelines.french.md)

**3. La plupart des bonnes pratiques contiennent des informations supplémentaires -** la plupart des points ont un lien **🔗Plus d'infos** qui développe la bonne pratique avec des exemples de code, des citations venant de pages sélectionnées et plus encore.

<br/><br/>

## Table des matières

1. [Structure de projet (5)](#1-structure-de-projet)
2. [Gestion des erreurs (11) ](#2-gestion-des-erreurs)
3. [Style du code (12) ](#3-style-du-code)
4. [Test et qualité globale (12) ](#4-test-et-qualité-globale)
5. [Mise en production (18) ](#5-mise-en-production)
6. [Sécurité (25)](#6-sécurité)
7. [Performance (2) (Travail en cours ✍️)](#7-brouillon--performance)

<br/><br/>

# `1. Structure de projet`

## ![✔] 1.1 Organisez votre projet en composants

**TL;PL :** Le pire obstacle des énormes applications est la maintenance d'une base de code immense contenant des centaines de dépendances - un tel monolithe ralentit les développeurs tentant d'ajouter de nouvelles fonctionnalités. Pour éviter cela, répartissez votre code en composants, chacun dans son propre dossier avec son code dédié, et assurez vous que chaque unité soit courte et simple. Visitez le lien 'Plus d'infos' plus bas pour voir des exemples de structure de projet correcte.

**Autrement :** Lorsque les développeurs qui codent de nouvelles fonctionnalités ont du mal à réaliser l'impact de leur changement et craignent de casser d'autres composants dépendants - les déploiements deviennent plus lents et plus risqués. Il est aussi considéré plus difficile d'élargir un modèle d'application quand les unités opérationnelles ne sont pas séparées.

🔗 [**Plus d'infos : organisez en composants**](/sections/projectstructre/breakintcomponents.french.md)

<br/><br/>

## ![✔] 1.2 Organisez vos composants en strates, gardez Express à l'intérieur de son périmètre

**TL;PL :** Chaque composant devrait contenir des « strates » - un objet dédié pour le web, un pour la logique et un pour le code d'accès aux données. Cela permet non seulement de séparer clairement les responsabilités mais permet aussi de simuler et de tester le système de manière plus simple. Bien qu'il s'agisse d'un modèle très courant, les développeurs d'API ont tendance à mélanger les strates en passant l'objet dédié au web (Express req, res) à la logique opérationnelle et aux strates de données - cela rend l'application dépendante et accessible seulement par Express.

**Autrement :** Les tests, les jobs CRON et les autres middlewares non-Express ne peuvent pas accéder à une application qui mélange les objets web avec les autres strates.

🔗 [**Plus d'infos : organisez en strates votre app**](/sections/projectstructre/createlayers.french.md)

<br/><br/>

## ![✔] 1.3 Externalisez les utilitaires communs en paquets NPM

**TL;PL :** Dans une grande appli rassemblant de nombreuses lignes de codes, les utilitaires opérant sur toutes les strates comme un logger, l'encryption et autres, devraient être inclus dans le code et exposés en tant que paquets NPM privés. Cela permet leur partage au sein de plusieurs projets.

**Autrement :** Vous devrez inventer votre propre roue de déploiement et de dépendance

🔗 [**Plus d'infos : organisez par fonction**](/sections/projectstructre/wraputilities.french.md)

<br/><br/>

## ![✔] 1.4 Séparez Express 'app' et 'server'

**TL;PL :** Evitez la sale habitude de définir l'appli [Express](https://expressjs.com/) toute entière dans un seul fichier immense - séparez la définition de votre 'Express' en au moins deux fichiers : la déclaration de l'API (app.js) et les responsabilités de gestion de réseau (WWW). Pour une structure encore plus poussée, localisez la déclaration de l'API dans les composants.

**Autrement :** Votre API sera seulement accessible aux tests par le biais d'appels HTTP (plus lent et plus difficile de générer des rapports de couverture). Cela ne sera pas un réel plaisir de maintenir des centaines de lignes de code dans un fichier unique.

🔗 [**Plus d'infos : séparez Express 'app' et 'server'**](/sections/projectstructre/separateexpress.french.md)

<br/><br/>

## ![✔] 1.5 Utilisez une configuration respectueuse de l'environnement, sécurisée et hiérarchique

**TL;PL :** La mise en place d'une configuration parfaite et sans faille doit garantir que (a) les clés peuvent être lues depuis un fichier ET à partir de la variable d'environnement (b) les secrets sont conservés hors du code source (c) la configuration est hiérarchique pour une recherche plus simple. Certains paquets peuvent gérer la plupart de ces points comme [rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf) et [config](https://www.npmjs.com/package/config).

**Autrement :** Ne pas se soucier de ces exigences de configuration ne fera que ralentir l'équipe de développement ou l'équipe de devops. Probablement les deux.

🔗 [**Plus d'infos : bonnes pratiques de configuration**](/sections/projectstructre/configguide.french.md)

<br/><br/><br/>

<p align="right"><a href="#table-des-matières">⬆ Retourner en haut de la page</a></p>

# `2. Gestion des erreurs`

## ![✔] 2.1 Utilisez Async-Await ou les promesses pour le traitement des erreurs asynchrones

**TL;PL :** Gérer les erreurs asynchrone avec le style fonction de rappel est probablement le chemin le plus rapide vers l'enfer (ou la [pyramide condamnée](https://fr.wikipedia.org/wiki/Pyramide_condamn%C3%A9e)). Le meilleur cadeau que vous puissiez faire à votre code est d'utiliser une bibliothèque de promesses réputée ou async-await à la place, ceci permet une syntaxe de code beaucoup plus compacte et familière comme try-catch.

**Autrement :** Le style fonction de rappel de Node.js, function(err, response), constituent une autre manière d’obtenir une solution non maintenable mêlant gestion de l’erreur avec du code ordinaire, des imbrications excessives et une conception bancale.

🔗 [**Plus d'infos : évitez les fonctions de rappel**](/sections/errorhandling/asyncerrorhandling.french.md)

<br/><br/>

## ![✔] 2.2 Utilisez uniquement l'objet intégré Error

**TL;PL :** Beaucoup lèvent des erreurs sous forme de chaîne ou de type personnalisé - cela complique la logique de gestion des erreurs et l'interopérabilité entre les modules. Que vous rejetiez une promesse, leviez une exception ou émettiez une erreur - l'utilisation uniquement de l'objet intégré Error augmentera l'uniformité et empêchera la perte d'informations.

**Autrement :** Lorsque vous appelez un composant, le type d'erreurs en retour étant incertain - cela rend la gestion des erreurs beaucoup plus difficile. Pire encore, l'utilisation de types personnalisés pour décrire des erreurs peut entraîner la perte d'informations d'erreurs critiques comme la trace de la pile !

🔗 [**Plus d'infos : utilisez uniquement l'objet intégré Error**](/sections/errorhandling/useonlythebuiltinerror.french.md)

<br/><br/>

## ![✔] 2.3 Distinguez les erreurs opérationnelles des erreurs de programmation

**TL;PL :** Les erreurs opérationnelles (par exemple, l'API a reçu une entrée non valide) se rapportent à des cas connus où l'impact de l'erreur est entièrement compris et peut être géré de manière réfléchie. D'autre part, une erreur de programmation (par exemple, essayer de lire une variable non définie) fait référence à des échecs de code inconnus qui dictent de redémarrer l'application en douceur.

**Autrement :** Vous pouvez toujours redémarrer l'application lorsqu'une erreur apparaît, mais pourquoi lâcher environ 5000 utilisateurs en ligne en raison d'une erreur opérationnelle mineure prévue ? L'inverse n'est pas non plus idéal - laisser l'application en place lorsqu'un problème inconnu (erreur de programmation) s'est produit peut conduire à un comportement imprévu. Différencier les deux permet d'agir avec tact et d'appliquer une approche équilibrée en fonction du contexte donné.

🔗 [**Plus d'infos : erreur opérationnelle vs erreur de programmation**](/sections/errorhandling/operationalvsprogrammererror.french.md)

<br/><br/>

## ![✔] 2.4 Gérez les erreurs de manière centralisée, pas dans un middleware Express

**TL;PL :** Les logiques de gestion des erreurs telles que le mail à l'administrateur et la journalisation doivent être encapsulées dans un objet dédié et centralisé, pour que tous les points de terminaison (par exemple, middleware Express, tâches cron, tests unitaires) l'appellent lorsqu'une erreur survient.

**Autrement :** Ne pas traiter les erreurs dans un seul endroit entraînera une duplication de code et probablement des erreurs mal gérées

🔗 [**Plus d'infos : gestion des erreurs dans un lieu centralisé**](/sections/errorhandling/centralizedhandling.french.md)

<br/><br/>

## ![✔] 2.5 Documentez les erreurs de l'API à l'aide de Swagger ou GraphQL

**TL;PL :** Faites savoir à vos appelants de l'API quelles erreurs peuvent survenir en retour afin de pouvoir les traiter de manière réfléchie sans planter. Pour les API RESTful, cela se fait généralement avec des frameworks de documentation comme Swagger. Si vous utilisez GraphQL, vous pouvez également utiliser votre schéma et vos commentaires.

**Autrement :** Un client d'une API peut décider de planter et de redémarrer uniquement parce qu'il a reçu une erreur qu'il ne comprend pas. Remarque: l'appelant de votre API peut être vous (très typique dans un environnement de microservice)

🔗 [**Plus d'infos : documentez les erreurs de l'API à l'aide de Swagger ou GraphQL**](/sections/errorhandling/documentingusingswagger.french.md)

<br/><br/>

## ![✔] 2.6 Quittez le processus avec élégance lorsqu'un étranger arrive en ville

**TL;PL :** Lorsqu'une erreur inconnue se produit (une erreur de programmation, voir la bonne pratique 2.3) - il existe une incertitude sur la bonne santé de l'application. Une pratique courante suggère de redémarrer le processus avec précaution à l'aide d'un outil de gestion des processus comme [Forever](https://www.npmjs.com/package/forever) ou [PM2](http://pm2.keymetrics.io/).

**Autrement :** Lorsqu'une exception inconnue se produit, certains objets peuvent être dans un état défectueux (par exemple, un émetteur d'événements qui est utilisé globalement et qui ne déclenche plus d'événements en raison d'une défaillance interne) et toutes les demandes futures peuvent échouer ou se comporter de manière folle.

🔗 [**Plus d'infos : arrêtez le processus**](/sections/errorhandling/shuttingtheprocess.french.md)

<br/><br/>

## ![✔] 2.7 Utilisez un outil de journalisation mature pour augmenter la visibilité des erreurs

**TL;PL :** Un ensemble d'outils de journalisation matures comme [Winston](https://www.npmjs.com/package/winston), [Bunyan](https://github.com/trentm/node-bunyan), [Log4js](http://stritti.github.io/log4js/) ou [Pino](https://github.com/pinojs/pino), accélérera la découverte et la compréhension des erreurs. Alors oubliez console.log.

**Autrement :** En parcourant les console.logs ou manuellement par le biais d'un fichier texte désordonné sans outils d'interrogation ou d'une visionneuse de journaux décente, vous pourriez être occupé au travail jusqu'à tard dans la nuit.

🔗 [**Plus d'infos : utilisation d'un outil de journalisation mature**](/sections/errorhandling/usematurelogger.french.md)

<br/><br/>

## ![✔] 2.8 Testez les flux d'erreurs en utilisant votre framework de test préféré

**TL;PL :** Qu'il s'agisse d'un outil automatisée d'assurance qualité professionnelle ou de tests manuels simples pour les développeurs - Assurez-vous que votre code non seulement satisfait les scénarios positifs, mais gère et renvoie également les bonnes erreurs. Les frameworks de test comme Mocha & Chai peuvent gérer cela facilement (voir les exemples de code dans la "popup Gist")

**Autrement :** Sans test, que ce soit automatiquement ou manuellement, vous ne pouvez pas compter sur votre code pour renvoyer les bonnes erreurs. Sans erreurs significatives - il n'y a pas de gestion des erreurs.

🔗 [**Plus d'infos : test des flux d'erreurs**](/sections/errorhandling/testingerrorflows.french.md)

<br/><br/>

## ![✔] 2.9 Découvrez les erreurs et les indisponibilités à l'aide des produits de gestion de la performance applicative

**TL;PL :** Les produits de surveillance et de performance (alias GPA, APM en anglais : application performance management) évaluent de manière proactive votre base de code ou votre API afin qu'ils puissent mettre en évidence automatiquement les erreurs, les plantages et les parties lentes qui vous ont échappé.

**Autrement :** Vous pourriez consacrer beaucoup d'efforts à mesurer les performances et les indisponibilités de l'API, vous ne saurez probablement jamais quelles sont vos parties de code les plus lentes dans le scénario du monde réel et comment celles-ci affectent l'expérience utilisateur.

🔗 [**Plus d'infos : utilisation des produits GPA**](/sections/errorhandling/apmproducts.french.md)

<br/><br/>

## ![✔] 2.10 Capturez les rejets de promesses non gérés

**TL;PL :** Toute exception levée dans une promesse sera absorbée et écartée à moins qu'un développeur n'ait pas oublié de le traiter explicitement. Même si votre code est abonné à `process.uncaughtException` ! Surmontez cela en vous inscrivant à l'événement `process.unhandledRejection`.

**Autrement :** Vos erreurs seront absorbées et ne laisseront aucune trace. Il n'y a pas de quoi s'inquiéter.

🔗 [**Plus d'infos : capturez les rejets de promesses non gérés**](/sections/errorhandling/catchunhandledpromiserejection.french.md)

<br/><br/>

## ![✔] 2.11 Échouez rapidement, valider les arguments à l'aide d'une bibliothèque dédiée

**TL;PL :** Cela devrait faire partie de vos bonnes pratiques avec Express - Contrôlez les arguments de l'API pour éviter les bugs désagréables qui sont beaucoup plus difficiles à suivre plus tard. Le code de validation est généralement fastidieux, sauf si vous utilisez une bibliothèque d'aide très cool comme Joi.

**Autrement :** Considérez ceci - votre fonction attend un argument numérique « Discount » que l'appelant oublie de passer, plus loin dans le code, il vérifie si Discount!= 0 (le montant de la remise autorisée est supérieur à zéro), ensuite le code permet à l'utilisateur de profiter d'un remise. OMG, quel méchant bug. Le vois-tu ?

🔗 [**Plus d'infos : échec rapide**](/sections/errorhandling/failfast.french.md)

<br/><br/><br/>

<p align="right"><a href="#table-des-matières">⬆ Retourner en haut de la page</a></p>

# `3. Style du code`

## ![✔] 3.1 Utilisez ESLint

**TL;PL :** [ESLint](https://eslint.org) est la norme de facto pour vérifier d'éventuelles erreurs de code et pour corriger le style du code, ce n'est pas uniquement pour identifier les problèmes d'espacement mais aussi pour détecter les antipatterns préoccupants du code comme par exemple les développeurs levant des erreurs sans classification. Bien qu'ESLint puisse corriger automatiquement les styles du code, d'autres outils comme [prettier](https://www.npmjs.com/package/prettier) et [beautify](https://www.npmjs.com/package/js-beautify) sont plus puissants dans le formatage de la correction et fonctionnent en collaboration avec ESLint.

**Autrement :** Les développeurs se concentreront sur les problèmes fastidieux d'espacement et de largeur de ligne, ce qui pourrait faire perdre du temps à trop réfléchir sur le style de code du projet.

🔗 [**Plus d'infos : Utilisez ESLint et Prettier**](/sections/codestylepractices/eslint_prettier.french.md)

<br/><br/>

## ![✔] 3.2 Plugins spécifiques à Node.js

**TL;PL :** En plus des règles standard ESLint couvrant JavaScript vanilla, ajoutez des plugins spécifiques à Node.js comme [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) et [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security).

**Autrement :** De nombreux modèles de code Node.js défectueux peuvent s'échapper des radars. Par exemple, les développeurs pourrait exiger des fichiers avec une variable donnée comme chemin d'accès (`require(variableCommeChemin)`) qui permet aux attaquants d'exécuter n'importe quel script JS. Les linters de Node.js peuvent détecter de tels modèles et se plaindre en amont.

<br/><br/>

## ![✔] 3.3 Commencez les accolades d'un bloc de code sur la même ligne

**TL;PL :** Les accolades ouvrantes d'un bloc de code doivent être sur la même ligne que l'instruction d'ouverture.

### Code Example

```javascript
// À faire
function someFunction() {
  // bloc de code
}

// À éviter
function someFunction()
{
  // bloc de code
}
```

**Autrement :** Le non-respect de cette bonne pratique peut conduire à des résultats inattendus, comme le montre la discussion de StackOverflow ci-dessous :

🔗 [**Plus d'infos :** "Pourquoi les résultats varient-ils en fonction du placement des accolades ?" (StackOverflow)](https://stackoverflow.com/questions/3641519/why-does-a-results-vary-based-on-curly-brace-placement)

<br/><br/>

## ![✔] 3.4 Séparez correctement vos instructions

Peu importe si vous utilisez les points-virgules ou non pour séparer vos instructions, le fait de connaître les pièges courants des sauts de ligne incorrects ou de l'insertion automatique de points-virgules, vous aidera à éliminer les erreurs syntaxiques habituelles.

**TL;PL :** Utilisez ESLint pour vous sensibiliser aux problèmes de séparation. [Prettier](https://prettier.io/) ou [Standardjs](https://standardjs.com/) peuvent résoudre automatiquement ces problèmes.

**Autrement :** Comme vu dans la section précédente, l'interpréteur JavaScript ajoute automatiquement un point-virgule à la fin d'une instruction s'il n'y en a pas, ou considère une instruction comme non terminée là où elle devrait, ce qui pourrait conduire à des résultats indésirables. Vous pouvez utiliser des affectations et éviter d'utiliser des expressions de fonction invoquées immédiatement pour éviter la plupart des erreurs inattendues.

### Exemple de code

```javascript
// À faire
function doThing() {
    // ...
}

doThing()

// À faire

const items = [1, 2, 3]
items.forEach(console.log)

// À éviter — lève une exception
const m = new Map()
const a = [1,2,3]
[...m.values()].forEach(console.log)
> [...m.values()].forEach(console.log)
>  ^^^
> SyntaxError: Unexpected token ...

// À éviter — lève une exception
const count = 2 // il essaie d'exécuter 2(), mais 2 n'est pas une fonction
(function doSomething() {
  // faire quelque chose d'incroyable
}())
// placez un point-virgule avant la fonction immédiatement invoquée, après la définition de const, enregistrez la valeur de retour de la fonction anonyme dans une variable ou évitez tous les IIFE
```

🔗 [**Plus d'infos :** "Règle de ESLint : points-virgules"](https://eslint.org/docs/rules/semi)
🔗 [**Plus d'infos :** "Règle de ESLint : pas de multiligne inattendue"](https://eslint.org/docs/rules/no-unexpected-multiline)

<br/><br/>

## ![✔] 3.5 Nommez vos fonctions

**TL;PL :** Nommez toutes les fonctions, y compris les fermetures *(closures, NdT)* et les fonctions de rappel. Évitez les fonctions anonymes. Cela est particulièrement utile lors du profilage d'une application de Node. Nommer toutes les fonctions vous permettra de comprendre facilement ce que vous regardez lors de la vérification d'un instantané de mémoire *(snapshot memory, NdT)*.

**Autrement :** Le débogage des problèmes de production à l'aide d'un vidage de mémoire (instantané de mémoire) peut devenir difficile lorsque vous remarquez une consommation de mémoire importante de la part de fonctions anonymes.

<br/><br/>

## ![✔] 3.6 Utilisez des conventions de nommage pour les variables, les constantes, les fonctions et les classes

**TL;PL :** Utilisez **_LowerCamelCase_** lorsque vous nommez des constantes, des variables et des fonctions et **_UpperCamelCase_** (première lettre en majuscule également) lorsque vous nommez des classes. Cela vous aidera à distinguer facilement les simples variables/fonctions et les classes qui nécessitent une instanciation. Utilisez des noms évocateurs, mais efforcez-vous de les garder concis.

**Autrement :** Javascript est le seul langage au monde qui permet d'invoquer directement un constructeur (« Class ») sans l'instancier au préalable. Par conséquent, les classes et les fonctions-constructeurs sont différenciés en commençant par UpperCamelCase.

### 3.6 Exemple de code

```javascript
// pour le nom d'une classe, nous utilisons UpperCamelCase
class SomeClassExample {}

// pour les noms de constantes, nous utilisons le mot-clé const et lowerCamelCase
const config = {
  key: 'value'
};

// pour les noms de variables et de fonctions, nous utilisons lowerCamelCase
let someVariableExample = 'value';
function doSomething() {}
```

<br/><br/>

## ![✔] 3.7 Préférez const à let. Laissez tomber le var

**TL;PL :** L'utilisation de `const` signifie qu'une fois qu'une variable est affectée, elle ne peut pas être réaffectée. Préférer `const` vous aidera à ne pas être tenté d'utiliser la même variable pour différentes utilisations et rendra votre code plus clair. Si une variable doit être réaffectée, par exempledans une boucle for, utilisez `let` pour la déclarer. Un autre aspect important de `let` est qu'une variable déclarée l'utilisant n'est disponible que dans la portée du bloc dans laquelle elle a été définie. `var` est une portée de fonction, pas une portée de bloc, et [ne devrait pas être utilisé en ES6](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70) maintenant que vous avez `const` et `let` à votre disposition.

**Autrement :** Le débogage devient beaucoup plus lourd lorsque vous suivez une variable qui change fréquemment.

🔗 [**Plus d'infos : JavaScript ES6+ : var, let, ou const ?** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 Utilisez en premier require pour les modules, pas dans des fonctions internes

**TL;PL :** Utilisez au début de chaque fichier `require` pour les modules, avant et en dehors de toute fonction. Cette bonne pratique simple vous aidera non seulement à identifier facilement et rapidement les dépendances en haut d'un fichier, mais évite également quelques problèmes potentiels.

**Autrement :** Les `require` sont exécutées de manière synchrone par Node.js. S'ils sont appelés depuis une fonction, cela peut empêcher le traitement d'autres demandes à un moment plus critique. De plus, si un module requis ou l'une de ses dépendances lance une erreur et plante le serveur, il est préférable de le découvrir le plus tôt possible, ce qui pourrait ne pas être le cas si ce module est requis depuis une fonction.

<br/><br/>

## ![✔] 3.9 Exiger les modules par leurs dossiers, contrairement à l'appel direct aux fichiers

**TL;PL :** Lorsque vous développez un module/bibliothèque dans un dossier, placez un fichier index.js qui expose les composants internes du module afin que chaque utilisateur puisse y accéder. Cela sert d '« interface » à votre module et facilite les modifications futures sans rompre le contrat.

**Autrement :** La modification de la structure interne des fichiers ou de la signature peut rompre l'interface avec les clients.

### 3.9 Exemple de code

```javascript
// À faire
module.exports.SMSProvider = require('./SMSProvider');
module.exports.SMSNumberResolver = require('./SMSNumberResolver');

// À éviter
module.exports.SMSProvider = require('./SMSProvider/SMSProvider.js');
module.exports.SMSNumberResolver = require('./SMSNumberResolver/SMSNumberResolver.js');
```

<br/><br/>

## ![✔] 3.10 Utilisez l'opérateur `===`

**TL;PL :** Préférez l'opérateur d'égalité stricte `===` à l'opérateur d'égalité abstraite plus faible `==`. `==` comparera deux variables après les avoir converties en un type commun. Il n'y a pas de conversion de type dans `===`, et les deux variables doivent être du même type pour être égales.

**Autrement :** Les variables inégales peuvent renvoyer true avec l'opérateur `==`.

### 3.10 Exemple de code

```javascript
'' == '0'           // false
0 == ''             // true
0 == '0'            // true

false == 'false'    // false
false == '0'        // true

false == undefined  // false
false == null       // false
null == undefined   // true

' \t\r\n ' == 0     // true
```

Toutes les déclarations ci-dessus renverront false si elles sont utilisées avec `===`

<br/><br/>

## ![✔] 3.11 Utilisez Async Await, évitez les fonctions de rappel

**TL;PL :** Node 8 LTS prend désormais entièrement en charge Async-wait. Il s'agit d'une nouvelle façon de gérer le code asynchrone qui remplace les fonctions de rappel et les promesses. L'attente asynchrone n'est pas bloquante et rend le code asynchrone synchrone. Le meilleur cadeau que vous puissiez faire à votre code est d'utiliser async-wait qui fournit une syntaxe de code beaucoup plus compacte et familière comme try-catch.

**Autrement :** La gestion des erreurs asynchrones dans le style des fonctions de rappel est probablement le chemin le plus rapide vers l'enfer - ce style oblige de vérifier les erreurs partout, à gérer les imbrications de code gênantes et rend difficile la compréhension du flux du code.

🔗[**Plus d'infos :** guide pour async await 1.0](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 Utiliser les expressions de fonction fléchée (=>)

**TL;PL :** Bien qu'il soit recommandé d'utiliser async-wait et d'éviter les paramètres de fonction lorsque vous traitez avec des API plus anciennes qui acceptent des promesses ou des rappels - les fonctions fléchées rendent la structure de code plus compacte et gardent le contexte lexical de la fonction racine (c'est-à-dire `this`).

**Autrement :** Un code plus long (dans les fonctions ES5) est plus sujet aux bogues et lourd à lire.

🔗 [**Plus d'infos : il est temps d'adopter les fonctions fléchées**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)

<br/><br/><br/>

<p align="right"><a href="#table-des-matières">⬆ Retourner en haut de la page</a></p>

# `4. Testing And Overall Quality Practices`

## ![✔] 4.1 At the very least, write API (component) testing

**TL;DR:** Most projects just don't have any automated testing due to short timetables or often the 'testing project' ran out of control and was abandoned. For that reason, prioritize and start with API testing which is the easiest way to write and provides more coverage than unit testing (you may even craft API tests without code using tools like [Postman](https://www.getpostman.com/). Afterward, should you have more resources and time, continue with advanced test types like unit testing, DB testing, performance testing, etc

**Otherwise:** You may spend long days on writing unit tests to find out that you got only 20% system coverage

<br/><br/>

## ![✔] 4.2 Include 3 parts in each test name

**TL;DR:** Make the test speak at the requirements level so it's self explanatory also to QA engineers and developers who are not familiar with the code internals. State in the test name what is being tested (unit under test), under what circumstances and what is the expected result

**Otherwise:** A deployment just failed, a test named “Add product” failed. Does this tell you what exactly is malfunctioning?

🔗 [**Read More: Include 3 parts in each test name**](/sections/testingandquality/3-parts-in-name.md)

<br/><br/>

## ![✔] 4.3 Structure tests by the AAA pattern

**TL;DR:** Structure your tests with 3 well-separated sections: Arrange, Act & Assert (AAA). The first part includes the test setup, then the execution of the unit under test and finally the assertion phase. Following this structure guarantees that the reader spends no brain CPU on understanding the test plan

**Otherwise:** Not only you spend long daily hours on understanding the main code, now also what should have been the simple part of the day (testing) stretches your brain

🔗 [**Read More: Structure tests by the AAA pattern**](/sections/testingandquality/aaa.md)

<br/><br/>

## ![✔] 4.4 Detect code issues with a linter

**TL;DR:** Use a code linter to check basic quality and detect anti-patterns early. Run it before any test and add it as a pre-commit git-hook to minimize the time needed to review and correct any issue. Also check [Section 3](#3-code-style-practices) on Code Style Practices

**Otherwise:** You may let pass some anti-pattern and possible vulnerable code to your production environment.

<br/><br/>

## ![✔] 4.5 Avoid global test fixtures and seeds, add data per-test

**TL;DR:** To prevent tests coupling and easily reason about the test flow, each test should add and act on its own set of DB rows. Whenever a test needs to pull or assume the existence of some DB data - it must explicitly add that data and avoid mutating any other records

**Otherwise:** Consider a scenario where deployment is aborted due to failing tests, team is now going to spend precious investigation time that ends in a sad conclusion: the system works well, the tests however interfere with each other and break the build

🔗 [**Read More: Avoid global test fixtures**](/sections/testingandquality/avoid-global-test-fixture.md)

<br/><br/>

## ![✔] 4.6 Constantly inspect for vulnerable dependencies

**TL;DR:** Even the most reputable dependencies such as Express have known vulnerabilities. This can get easily tamed using community and commercial tools such as 🔗 [npm audit](https://docs.npmjs.com/cli/audit) and 🔗 [snyk.io](https://snyk.io) that can be invoked from your CI on every build

**Otherwise:** Keeping your code clean from vulnerabilities without dedicated tools will require to constantly follow online publications about new threats. Quite tedious

<br/><br/>

## ![✔] 4.7 Tag your tests

**TL;DR:** Different tests must run on different scenarios: quick smoke, IO-less, tests should run when a developer saves or commits a file, full end-to-end tests usually run when a new pull request is submitted, etc. This can be achieved by tagging tests with keywords like #cold #api #sanity so you can grep with your testing harness and invoke the desired subset. For example, this is how you would invoke only the sanity test group with [Mocha](https://mochajs.org/): mocha --grep 'sanity'

**Otherwise:** Running all the tests, including tests that perform dozens of DB queries, any time a developer makes a small change can be extremely slow and keeps developers away from running tests

<br/><br/>

## ![✔] 4.8 Check your test coverage, it helps to identify wrong test patterns

**TL;DR:** Code coverage tools like [Istanbul](https://github.com/istanbuljs/istanbuljs)/[NYC](https://github.com/istanbuljs/nyc) are great for 3 reasons: it comes for free (no effort is required to benefit this reports), it helps to identify a decrease in testing coverage, and last but not least it highlights testing mismatches: by looking at colored code coverage reports you may notice, for example, code areas that are never tested like catch clauses (meaning that tests only invoke the happy paths and not how the app behaves on errors). Set it to fail builds if the coverage falls under a certain threshold

**Otherwise:** There won't be any automated metric telling you when a large portion of your code is not covered by testing

<br/><br/>

## ![✔] 4.9 Inspect for outdated packages

**TL;DR:** Use your preferred tool (e.g. 'npm outdated' or [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) to detect installed packages which are outdated, inject this check into your CI pipeline and even make a build fail in a severe scenario. For example, a severe scenario might be when an installed package is 5 patch commits behind (e.g. local version is 1.3.1 and repository version is 1.3.8) or it is tagged as deprecated by its author - kill the build and prevent deploying this version

**Otherwise:** Your production will run packages that have been explicitly tagged by their author as risky

<br/><br/>

## ![✔] 4.10 Use production-like env for e2e testing

**TL;DR:** End to end (e2e) testing which includes live data used to be the weakest link of the CI process as it depends on multiple heavy services like DB. Use an environment which is as closed to your real production as possible like a-continue

**Otherwise:** Without docker-compose teams must maintain a testing DB for each testing environment including developers' machines, keep all those DBs in sync so test results won't vary across environments

<br/><br/>

## ![✔] 4.11 Refactor regularly using static analysis tools

**TL;DR:** Using static analysis tools helps by giving objective ways to improve code quality and keeps your code maintainable. You can add static analysis tools to your CI build to fail when it finds code smells. Its main selling points over plain linting are the ability to inspect quality in the context of multiple files (e.g. detect duplications), perform advanced analysis (e.g. code complexity) and follow the history and progress of code issues. Two examples of tools you can use are [Sonarqube](https://www.sonarqube.org/) (2,600+ [stars](https://github.com/SonarSource/sonarqube)) and [Code Climate](https://codeclimate.com/) (1,500+ [stars](https://github.com/codeclimate/codeclimate)).

**Otherwise:** With poor code quality, bugs and performance will always be an issue that no shiny new library or state of the art features can fix

🔗 [**Read More: Refactoring!**](/sections/testingandquality/refactoring.md)

<br/><br/>

## ![✔] 4.12 Carefully choose your CI platform (Jenkins vs CircleCI vs Travis vs Rest of the world)

**TL;DR:** Your continuous integration platform (CICD) will host all the quality tools (e.g test, lint) so it should come with a vibrant ecosystem of plugins. [Jenkins](https://jenkins.io/) used to be the default for many projects as it has the biggest community along with a very powerful platform at the price of complex setup that demands a steep learning curve. Nowadays, it has become much easier to set up a CI solution using SaaS tools like [CircleCI](https://circleci.com) and others. These tools allow crafting a flexible CI pipeline without the burden of managing the whole infrastructure. Eventually, it's a trade-off between robustness and speed - choose your side carefully

**Otherwise:** Choosing some niche vendor might get you blocked once you need some advanced customization. On the other hand, going with Jenkins might burn precious time on infrastructure setup

🔗 [**Read More: Choosing CI platform**](/sections/testingandquality/citools.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `5. Going To Production Practices`

## ![✔] 5.1. Monitoring

**TL;DR:** Monitoring is a game of finding out issues before customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that ticks all boxes. Click ‘The Gist’ below for an overview of the solutions

**Otherwise:** Failure === disappointed customers. Simple

🔗 [**Read More: Monitoring!**](/sections/production/monitoring.md)

<br/><br/>

## ![✔] 5.2. Increase transparency using smart logging

**TL;DR:** Logs can be a dumb warehouse of debug statements or the enabler of a beautiful dashboard that tells the story of your app. Plan your logging platform from day 1: how logs are collected, stored and analyzed to ensure that the desired information (e.g. error rate, following an entire transaction through services and servers, etc) can really be extracted

**Otherwise:** You end up with a black box that is hard to reason about, then you start re-writing all logging statements to add additional information

🔗 [**Read More: Increase transparency using smart logging**](/sections/production/smartlogging.md)

<br/><br/>

## ![✔] 5.3. Delegate anything possible (e.g. gzip, SSL) to a reverse proxy

**TL;DR:** Node is awfully bad at doing CPU intensive tasks like gzipping, SSL termination, etc. You should use ‘real’ middleware services like nginx, HAproxy or cloud vendor services instead

**Otherwise:** Your poor single thread will stay busy doing infrastructural tasks instead of dealing with your application core and performance will degrade accordingly

🔗 [**Read More: Delegate anything possible (e.g. gzip, SSL) to a reverse proxy**](/sections/production/delegatetoproxy.md)

<br/><br/>

## ![✔] 5.4. Lock dependencies

**TL;DR:** Your code must be identical across all environments, but amazingly npm lets dependencies drift across environments by default – when you install packages at various environments it tries to fetch packages’ latest patch version. Overcome this by using npm config files, .npmrc, that tell each environment to save the exact (not the latest) version of each package. Alternatively, for finer grained control use `npm shrinkwrap`. \*Update: as of NPM5, dependencies are locked by default. The new package manager in town, Yarn, also got us covered by default

**Otherwise:** QA will thoroughly test the code and approve a version that will behave differently in production. Even worse, different servers in the same production cluster might run different code

🔗 [**Read More: Lock dependencies**](/sections/production/lockdependencies.md)

<br/><br/>

## ![✔] 5.5. Guard process uptime using the right tool

**TL;DR:** The process must go on and get restarted upon failures. For simple scenarios, process management tools like PM2 might be enough but in today's ‘dockerized’ world, cluster management tools should be considered as well

**Otherwise:** Running dozens of instances without a clear strategy and too many tools together (cluster management, docker, PM2) might lead to DevOps chaos

🔗 [**Read More: Guard process uptime using the right tool**](/sections/production/guardprocess.md)

<br/><br/>

## ![✔] 5.6. Utilize all CPU cores

**TL;DR:** At its basic form, a Node app runs on a single CPU core while all others are left idling. It’s your duty to replicate the Node process and utilize all CPUs – For small-medium apps you may use Node Cluster or PM2. For a larger app consider replicating the process using some Docker cluster (e.g. K8S, ECS) or deployment scripts that are based on Linux init system (e.g. systemd)

**Otherwise:** Your app will likely utilize only 25% of its available resources(!) or even less. Note that a typical server has 4 CPU cores or more, naive deployment of Node.js utilizes only 1 (even using PaaS services like AWS beanstalk!)

🔗 [**Read More: Utilize all CPU cores**](/sections/production/utilizecpu.md)

<br/><br/>

## ![✔] 5.7. Create a ‘maintenance endpoint’

**TL;DR:** Expose a set of system-related information, like memory usage and REPL, etc in a secured API. Although it’s highly recommended to rely on standard and battle-tests tools, some valuable information and operations are easier done using code

**Otherwise:** You’ll find that you’re performing many “diagnostic deploys” – shipping code to production only to extract some information for diagnostic purposes

🔗 [**Read More: Create a ‘maintenance endpoint’**](/sections/production/createmaintenanceendpoint.md)

<br/><br/>

## ![✔] 5.8. Discover errors and downtime using APM products

**TL;DR:** Application monitoring and performance products (a.k.a APM) proactively gauge codebase and API so they can auto-magically go beyond traditional monitoring and measure the overall user-experience across services and tiers. For example, some APM products can highlight a transaction that loads too slow on the end-users side while suggesting the root cause

**Otherwise:** You might spend great effort on measuring API performance and downtimes, probably you’ll never be aware which is your slowest code parts under real-world scenario and how these affect the UX

🔗 [**Read More: Discover errors and downtime using APM products**](/sections/production/apmproducts.md)

<br/><br/>

## ![✔] 5.9. Make your code production-ready

**TL;DR:** Code with the end in mind, plan for production from day 1. This sounds a bit vague so I’ve compiled a few development tips that are closely related to production maintenance (click Gist below)

**Otherwise:** A world champion IT/DevOps guy won’t save a system that is badly written

🔗 [**Read More: Make your code production-ready**](/sections/production/productioncode.md)

<br/><br/>

## ![✔] 5.10. Measure and guard the memory usage

**TL;DR:** Node.js has controversial relationships with memory: the v8 engine has soft limits on memory usage (1.4GB) and there are known paths to leak memory in Node’s code – thus watching Node’s process memory is a must. In small apps, you may gauge memory periodically using shell commands but in medium-large apps consider baking your memory watch into a robust monitoring system

**Otherwise:** Your process memory might leak a hundred megabytes a day like how it happened at [Walmart](https://www.joyent.com/blog/walmart-node-js-memory-leak)

🔗 [**Read More: Measure and guard the memory usage**](/sections/production/measurememory.md)

<br/><br/>

## ![✔] 5.11. Get your frontend assets out of Node

**TL;DR:** Serve frontend content using dedicated middleware (nginx, S3, CDN) because Node performance really gets hurt when dealing with many static files due to its single-threaded model

**Otherwise:** Your single Node thread will be busy streaming hundreds of html/images/angular/react files instead of allocating all its resources for the task it was born for – serving dynamic content

🔗 [**Read More: Get your frontend assets out of Node**](/sections/production/frontendout.md)

<br/><br/>

## ![✔] 5.12. Be stateless, kill your servers almost every day

**TL;DR:** Store any type of data (e.g. user sessions, cache, uploaded files) within external data stores. Consider ‘killing’ your servers periodically or use ‘serverless’ platform (e.g. AWS Lambda) that explicitly enforces a stateless behavior

**Otherwise:** Failure at a given server will result in application downtime instead of just killing a faulty machine. Moreover, scaling-out elasticity will get more challenging due to the reliance on a specific server

🔗 [**Read More: Be stateless, kill your Servers almost every day**](/sections/production/bestateless.md)

<br/><br/>

## ![✔] 5.13. Use tools that automatically detect vulnerabilities

**TL;DR:** Even the most reputable dependencies such as Express have known vulnerabilities (from time to time) that can put a system at risk. This can be easily tamed using community and commercial tools that constantly check for vulnerabilities and warn (locally or at GitHub), some can even patch them immediately

**Otherwise:** Keeping your code clean from vulnerabilities without dedicated tools will require you to constantly follow online publications about new threats. Quite tedious

🔗 [**Read More: Use tools that automatically detect vulnerabilities**](/sections/production/detectvulnerabilities.md)

<br/><br/>

## ![✔] 5.14. Assign a transaction id to each log statement

**TL;DR:** Assign the same identifier, transaction-id: {some value}, to each log entry within a single request. Then when inspecting errors in logs, easily conclude what happened before and after. Unfortunately, this is not easy to achieve in Node due to its async nature, see code examples inside

**Otherwise:** Looking at a production error log without the context – what happened before – makes it much harder and slower to reason about the issue

🔗 [**Read More: Assign ‘TransactionId’ to each log statement**](/sections/production/assigntransactionid.md)

<br/><br/>

## ![✔] 5.15. Set NODE_ENV=production

**TL;DR:** Set the environment variable NODE_ENV to ‘production’ or ‘development’ to flag whether production optimizations should get activated – many npm packages determine the current environment and optimize their code for production

**Otherwise:** Omitting this simple property might greatly degrade performance. For example, when using Express for server-side rendering omitting `NODE_ENV` makes it slower by a factor of three!

🔗 [**Read More: Set NODE_ENV=production**](/sections/production/setnodeenv.md)

<br/><br/>

## ![✔] 5.16. Design automated, atomic and zero-downtime deployments

**TL;DR:** Research shows that teams who perform many deployments lower the probability of severe production issues. Fast and automated deployments that don’t require risky manual steps and service downtime significantly improve the deployment process. You should probably achieve this using Docker combined with CI tools as they became the industry standard for streamlined deployment

**Otherwise:** Long deployments -> production downtime & human-related error -> team unconfident in making deployment -> fewer deployments and features

<br/><br/>

## ![✔] 5.17. Use an LTS release of Node.js

**TL;DR:** Ensure you are using an LTS version of Node.js to receive critical bug fixes, security updates and performance improvements

**Otherwise:** Newly discovered bugs or vulnerabilities could be used to exploit an application running in production, and your application may become unsupported by various modules and harder to maintain

🔗 [**Read More: Use an LTS release of Node.js**](/sections/production/LTSrelease.md)

<br/><br/>

## ![✔] 5.18. Don't route logs within the app

**TL;DR:** Log destinations should not be hard-coded by developers within the application code, but instead should be defined by the execution environment the application runs in. Developers should write logs to `stdout` using a logger utility and then let the execution environment (container, server, etc.) pipe the `stdout` stream to the appropriate destination (i.e. Splunk, Graylog, ElasticSearch, etc.).

**Otherwise:** Application handling log routing === hard to scale, loss of logs, poor separation of concerns

🔗 [**Read More: Log Routing**](/sections/production/logrouting.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `6. Security Best Practices`

<div align="center">
<img src="https://img.shields.io/badge/OWASP%20Threats-Top%2010-green.svg" alt="54 items"/>
</div>

## ![✔] 6.1. Embrace linter security rules

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20XSS%20-green.svg" alt=""/></a>

**TL;DR:** Make use of security-related linter plugins such as [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) to catch security vulnerabilities and issues as early as possible, preferably while they're being coded. This can help catching security weaknesses like using eval, invoking a child process or importing a module with a string literal (e.g. user input). Click 'Read more' below to see code examples that will get caught by a security linter

**Otherwise:** What could have been a straightforward security weakness during development becomes a major issue in production. Also, the project may not follow consistent code security practices, leading to vulnerabilities being introduced, or sensitive secrets committed into remote repositories

🔗 [**Read More: Lint rules**](/sections/security/lintrules.md)

<br/><br/>

## ![✔] 6.2. Limit concurrent requests using a middleware

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** DOS attacks are very popular and relatively easy to conduct. Implement rate limiting using an external service such as cloud load balancers, cloud firewalls, nginx, [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) package, or (for smaller and less critical apps) a rate-limiting middleware (e.g. [express-rate-limit](https://www.npmjs.com/package/express-rate-limit))

**Otherwise:** An application could be subject to an attack resulting in a denial of service where real users receive a degraded or unavailable service.

🔗 [**Read More: Implement rate limiting**](/sections/security/limitrequests.md)

<br/><br/>

## ![✔] 6.3 Extract secrets from config files or use packages to encrypt them

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A3:Sensitive%20Data%20Exposure%20-green.svg" alt=""/></a>

**TL;DR:** Never store plain-text secrets in configuration files or source code. Instead, make use of secret-management systems like Vault products, Kubernetes/Docker Secrets, or using environment variables. As a last resort, secrets stored in source control must be encrypted and managed (rolling keys, expiring, auditing, etc). Make use of pre-commit/push hooks to prevent committing secrets accidentally

**Otherwise:** Source control, even for private repositories, can mistakenly be made public, at which point all secrets are exposed. Access to source control for an external party will inadvertently provide access to related systems (databases, apis, services, etc).

🔗 [**Read More: Secret management**](/sections/security/secretmanagement.md)

<br/><br/>

## ![✔] 6.4. Prevent query injection vulnerabilities with ORM/ODM libraries

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** To prevent SQL/NoSQL injection and other malicious attacks, always make use of an ORM/ODM or a database library that escapes data or supports named or indexed parameterized queries, and takes care of validating user input for expected types. Never just use JavaScript template strings or string concatenation to inject values into queries as this opens your application to a wide spectrum of vulnerabilities. All the reputable Node.js data access libraries (e.g. [Sequelize](https://github.com/sequelize/sequelize), [Knex](https://github.com/tgriesser/knex), [mongoose](https://github.com/Automattic/mongoose)) have built-in protection against injection attacks.

**Otherwise:** Unvalidated or unsanitized user input could lead to operator injection when working with MongoDB for NoSQL, and not using a proper sanitization system or ORM will easily allow SQL injection attacks, creating a giant vulnerability.

🔗 [**Read More: Query injection prevention using ORM/ODM libraries**](/sections/security/ormodmusage.md)

<br/><br/>

## ![✔] 6.5. Collection of generic security best practices

**TL;DR:** This is a collection of security advice that is not related directly to Node.js - the Node implementation is not much different than any other language. Click read more to skim through.

🔗 [**Read More: Common security best practices**](/sections/security/commonsecuritybestpractices.md)

<br/><br/>

## ![✔] 6.6. Adjust the HTTP response headers for enhanced security

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Your application should be using secure headers to prevent attackers from using common attacks like cross-site scripting (XSS), clickjacking and other malicious attacks. These can be configured easily using modules like [helmet](https://www.npmjs.com/package/helmet).

**Otherwise:** Attackers could perform direct attacks on your application's users, leading to huge security vulnerabilities

🔗 [**Read More: Using secure headers in your application**](/sections/security/secureheaders.md)

<br/><br/>

## ![✔] 6.7. Constantly and automatically inspect for vulnerable dependencies

<a href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Known%20Vulnerabilities%20-green.svg" alt=""/></a>

**TL;DR:** With the npm ecosystem it is common to have many dependencies for a project. Dependencies should always be kept in check as new vulnerabilities are found. Use tools like [npm audit](https://docs.npmjs.com/cli/audit) or [snyk](https://snyk.io/) to track, monitor and patch vulnerable dependencies. Integrate these tools with your CI setup so you catch a vulnerable dependency before it makes it to production.

**Otherwise:** An attacker could detect your web framework and attack all its known vulnerabilities.

🔗 [**Read More: Dependency security**](/sections/security/dependencysecurity.md)

<br/><br/>

## ![✔] 6.8. Avoid using the Node.js crypto library for handling passwords, use Bcrypt

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** Passwords or secrets (API keys) should be stored using a secure hash + salt function like `bcrypt`, that should be a preferred choice over its JavaScript implementation due to performance and security reasons.

**Otherwise:** Passwords or secrets that are persisted without using a secure function are vulnerable to brute forcing and dictionary attacks that will lead to their disclosure eventually.

🔗 [**Read More: Use Bcrypt**](/sections/security/bcryptpasswords.md)

<br/><br/>

## ![✔] 6.9. Escape HTML, JS and CSS output

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a>

**TL;DR:** Untrusted data that is sent down to the browser might get executed instead of just being displayed, this is commonly referred as a cross-site-scripting (XSS) attack. Mitigate this by using dedicated libraries that explicitly mark the data as pure content that should never get executed (i.e. encoding, escaping)

**Otherwise:** An attacker might store malicious JavaScript code in your DB which will then be sent as-is to the poor clients

🔗 [**Read More: Escape output**](/sections/security/escape-output.md)

<br/><br/>

## ![✔] 6.10. Validate incoming JSON schemas

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7: XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a>

**TL;DR:** Validate the incoming requests' body payload and ensure it meets expectations, fail fast if it doesn't. To avoid tedious validation coding within each route you may use lightweight JSON-based validation schemas such as [jsonschema](https://www.npmjs.com/package/jsonschema) or [joi](https://www.npmjs.com/package/joi)

**Otherwise:** Your generosity and permissive approach greatly increases the attack surface and encourages the attacker to try out many inputs until they find some combination to crash the application

🔗 [**Read More: Validate incoming JSON schemas**](/sections/security/validation.md)

<br/><br/>

## ![✔] 6.11. Support blacklisting JWTs

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** When using JSON Web Tokens (for example, with [Passport.js](https://github.com/jaredhanson/passport)), by default there's no mechanism to revoke access from issued tokens. Once you discover some malicious user activity, there's no way to stop them from accessing the system as long as they hold a valid token. Mitigate this by implementing a blacklist of untrusted tokens that are validated on each request.

**Otherwise:** Expired, or misplaced tokens could be used maliciously by a third party to access an application and impersonate the owner of the token.

🔗 [**Read More: Blacklist JSON Web Tokens**](/sections/security/expirejwt.md)

<br/><br/>

## ![✔] 6.12. Prevent brute-force attacks against authorization

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** A simple and powerful technique is to limit authorization attempts using two metrics:

1. The first is number of consecutive failed attempts by the same user unique ID/name and IP address.
2. The second is number of failed attempts from an IP address over some long period of time. For example, block an IP address if it makes 100 failed attempts in one day.

**Otherwise:** An attacker can issue unlimited automated password attempts to gain access to privileged accounts on an application

🔗 [**Read More: Login rate limiting**](/sections/security/login-rate-limit.md)

<br/><br/>

## ![✔] 6.13. Run Node.js as non-root user

<a href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A5:Broken%20Access%20Access%20Control-green.svg" alt=""/></a>

**TL;DR:** There is a common scenario where Node.js runs as a root user with unlimited permissions. For example, this is the default behaviour in Docker containers. It's recommended to create a non-root user and either bake it into the Docker image (examples given below) or run the process on this user's behalf by invoking the container with the flag "-u username"

**Otherwise:** An attacker who manages to run a script on the server gets unlimited power over the local machine (e.g. change iptable and re-route traffic to his server)

🔗 [**Read More: Run Node.js as non-root user**](/sections/security/non-root-user.md)

<br/><br/>

## ![✔] 6.14. Limit payload size using a reverse-proxy or a middleware

<a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** The bigger the body payload is, the harder your single thread works in processing it. This is an opportunity for attackers to bring servers to their knees without tremendous amount of requests (DOS/DDOS attacks). Mitigate this limiting the body size of incoming requests on the edge (e.g. firewall, ELB) or by configuring [express body parser](https://github.com/expressjs/body-parser) to accept only small-size payloads

**Otherwise:** Your application will have to deal with large requests, unable to process the other important work it has to accomplish, leading to performance implications and vulnerability towards DOS attacks

🔗 [**Read More: Limit payload size**](/sections/security/requestpayloadsizelimit.md)

<br/><br/>

## ![✔] 6.15. Avoid JavaScript eval statements

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** `eval` is evil as it allows executing custom JavaScript code during run time. This is not just a performance concern but also an important security concern due to malicious JavaScript code that may be sourced from user input. Another language feature that should be avoided is `new Function` constructor. `setTimeout` and `setInterval` should never be passed dynamic JavaScript code either.

**Otherwise:** Malicious JavaScript code finds a way into text passed into `eval` or other real-time evaluating JavaScript language functions, and will gain complete access to JavaScript permissions on the page. This vulnerability is often manifested as an XSS attack.

🔗 [**Read More: Avoid JavaScript eval statements**](/sections/security/avoideval.md)

<br/><br/>

## ![✔] 6.16. Prevent evil RegEx from overloading your single thread execution

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Regular Expressions, while being handy, pose a real threat to JavaScript applications at large, and the Node.js platform in particular. A user input for text to match might require an outstanding amount of CPU cycles to process. RegEx processing might be inefficient to an extent that a single request that validates 10 words can block the entire event loop for 6 seconds and set the CPU on 🔥. For that reason, prefer third-party validation packages like [validator.js](https://github.com/chriso/validator.js) instead of writing your own Regex patterns, or make use of [safe-regex](https://github.com/substack/safe-regex) to detect vulnerable regex patterns

**Otherwise:** Poorly written regexes could be susceptible to Regular Expression DoS attacks that will block the event loop completely. For example, the popular `moment` package was found vulnerable with malicious RegEx usage in November of 2017

🔗 [**Read More: Prevent malicious RegEx**](/sections/security/regex.md)

<br/><br/>

## ![✔] 6.17. Avoid module loading using a variable

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Avoid requiring/importing another file with a path that was given as parameter due to the concern that it could have originated from user input. This rule can be extended for accessing files in general (i.e. `fs.readFile()`) or other sensitive resource access with dynamic variables originating from user input. [Eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) linter can catch such patterns and warn early enough

**Otherwise:** Malicious user input could find its way to a parameter that is used to require tampered files, for example, a previously uploaded file on the filesystem, or access already existing system files.

🔗 [**Read More: Safe module loading**](/sections/security/safemoduleloading.md)

<br/><br/>

## ![✔] 6.18. Run unsafe code in a sandbox

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** When tasked to run external code that is given at run-time (e.g. plugin), use any sort of 'sandbox' execution environment that isolates and guards the main code against the plugin. This can be achieved using a dedicated process (e.g. `cluster.fork()`), serverless environment or dedicated npm packages that act as a sandbox

**Otherwise:** A plugin can attack through an endless variety of options like infinite loops, memory overloading, and access to sensitive process environment variables

🔗 [**Read More: Run unsafe code in a sandbox**](/sections/security/sandbox.md)

<br/><br/>

## ![✔] 6.19. Take extra care when working with child processes

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Avoid using child processes when possible and validate and sanitize input to mitigate shell injection attacks if you still have to. Prefer using `child_process.execFile` which by definition will only execute a single command with a set of attributes and will not allow shell parameter expansion.

**Otherwise:** Naive use of child processes could result in remote command execution or shell injection attacks due to malicious user input passed to an unsanitized system command.

🔗 [**Read More: Be cautious when working with child processes**](/sections/security/childprocesses.md)

<br/><br/>

## ![✔] 6.20. Hide error details from clients

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** An integrated express error handler hides the error details by default. However, great are the chances that you implement your own error handling logic with custom Error objects (considered by many as a best practice). If you do so, ensure not to return the entire Error object to the client, which might contain some sensitive application details

**Otherwise:** Sensitive application details such as server file paths, third party modules in use, and other internal workflows of the application which could be exploited by an attacker, could be leaked from information found in a stack trace

🔗 [**Read More: Hide error details from client**](/sections/security/hideerrors.md)

<br/><br/>

## ![✔] 6.21. Configure 2FA for npm or Yarn

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Any step in the development chain should be protected with MFA (multi-factor authentication), npm/Yarn are a sweet opportunity for attackers who can get their hands on some developer's password. Using developer credentials, attackers can inject malicious code into libraries that are widely installed across projects and services. Maybe even across the web if published in public. Enabling 2-factor-authentication in npm leaves almost zero chances for attackers to alter your package code.

**Otherwise:** [Have you heard about the eslint developer who's password was hijacked?](https://medium.com/@oprearocks/eslint-backdoor-what-it-is-and-how-to-fix-the-issue-221f58f1a8c8)

<br/><br/>

## ![✔] 6.22. Modify session middleware settings

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Each web framework and technology has its known weaknesses - telling an attacker which web framework we use is a great help for them. Using the default settings for session middlewares can expose your app to module- and framework-specific hijacking attacks in a similar way to the `X-Powered-By` header. Try hiding anything that identifies and reveals your tech stack (E.g. Node.js, express)

**Otherwise:** Cookies could be sent over insecure connections, and an attacker might use session identification to identify the underlying framework of the web application, as well as module-specific vulnerabilities

🔗 [**Read More: Cookie and session security**](/sections/security/sessions.md)

<br/><br/>

## ![✔] 6.23. Avoid DOS attacks by explicitly setting when a process should crash

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** The Node process will crash when errors are not handled. Many best practices even recommend to exit even though an error was caught and got handled. Express, for example, will crash on any asynchronous error - unless you wrap routes with a catch clause. This opens a very sweet attack spot for attackers who recognize what input makes the process crash and repeatedly send the same request. There's no instant remedy for this but a few techniques can mitigate the pain: Alert with critical severity anytime a process crashes due to an unhandled error, validate the input and avoid crashing the process due to invalid user input, wrap all routes with a catch and consider not to crash when an error originated within a request (as opposed to what happens globally)

**Otherwise:** This is just an educated guess: given many Node.js applications, if we try passing an empty JSON body to all POST requests - a handful of applications will crash. At that point, we can just repeat sending the same request to take down the applications with ease

<br/><br/>

## ![✔] 6.24. Prevent unsafe redirects

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** Redirects that do not validate user input can enable attackers to launch phishing scams, steal user credentials, and perform other malicious actions.

**Otherwise:** If an attacker discovers that you are not validating external, user-supplied input, they may exploit this vulnerability by posting specially-crafted links on forums, social media, and other public places to get users to click it.

🔗 [**Read More: Prevent unsafe redirects**](/sections/security/saferedirects.md)

<br/><br/>

## ![✔] 6.25. Avoid publishing secrets to the npm registry

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Precautions should be taken to avoid the risk of accidentally publishing secrets to public npm registries. An `.npmignore` file can be used to blacklist specific files or folders, or the `files` array in `package.json` can act as a whitelist.

**Otherwise:** Your project's API keys, passwords or other secrets are open to be abused by anyone who comes across them, which may result in financial loss, impersonation, and other risks.

🔗 [**Read More: Avoid publishing secrets**](/sections/security/avoid_publishing_secrets.md)
<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `7. Draft: Performance Best Practices`

## Our contributors are working on this section. [Would you like to join?](https://github.com/i0natan/nodebestpractices/issues/256)

<br/><br/>

## ![✔] 7.1. Don't block the event loop

**TL;DR:** Avoid CPU intensive tasks as they will block the mostly single-threaded Event Loop and offload those to a dedicated thread, process or even a different technology based on the context.

**Otherwise:** As the Event Loop is blocked, Node.js will be unable to handle other request thus causing delays for concurrent users. **3000 users are waiting for a response, the content is ready to be served, but one single request blocks the server from dispatching the results back**

🔗 [**Read More: Do not block the event loop**](/sections/performance/block-loop.md)

<br /><br /><br />


## ![✔] 7.2. Prefer native JS methods over user-land utils like Lodash

 **TL;DR:** It's often more penalising to use utility libraries like `lodash` and `underscore` over native methods as it leads to unneeded dependencies and slower performance.
 Bear in mind that with the introduction of the new V8 engine alongside the new ES standards, native methods were improved in such a way that it's now about 50% more performant than utility libraries.

**Otherwise:** You'll have to maintain less performant projects where you could have simply used what was **already** available or dealt with a few more lines in exchange of a few more files.

🔗 [**Read More: Native over user land utils**](/sections/performance/nativeoverutil.md)

<br/><br/><br/>


# Milestones

To maintain this guide and keep it up to date, we are constantly updating and improving the guidelines and best practices with the help of the community. You can follow our [milestones](https://github.com/i0natan/nodebestpractices/milestones) and join the working groups if you want to contribute to this project

<br/>

## Translations

All translations are contributed by the community. We will be happy to get any help with either completed, ongoing or new translations!

### Completed translations

- ![BR](/assets/flags/BR.png) [Brazilian Portuguese](./README.brazilian-portuguese.md) - Courtesy of [Marcelo Melo](https://github.com/marcelosdm)
- ![CN](/assets/flags/CN.png) [Chinese](./README.chinese.md) - Courtesy of [Matt Jin](https://github.com/mattjin)
- ![RU](/assets/flags/RU.png) [Russian](./README.russian.md) - Courtesy of [Alex Ivanov](https://github.com/contributorpw)

### Translations in progress

- ![FR](/assets/flags/FR.png) [French](https://github.com/gaspaonrocks/nodebestpractices/blob/french-translation/README.french.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/129))
- ![HE](/assets/flags/HE.png) Hebrew ([Discussion](https://github.com/i0natan/nodebestpractices/issues/156))
- ![KR](/assets/flags/KR.png) [Korean](README.korean.md) - Courtesy of [Sangbeom Han](https://github.com/uronly14me) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/94))
- ![ES](/assets/flags/ES.png) [Spanish](https://github.com/i0natan/nodebestpractices/blob/spanish-translation/README.spanish.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/95))
- ![TR](/assets/flags/TR.png) Turkish ([Discussion](https://github.com/i0natan/nodebestpractices/issues/139))

<br/><br/>

## Steering Committee

Meet the steering committee members - the people who work together to provide guidance and future direction to the project. In addition, each member of the committee leads a project tracked under our [Github projects](https://github.com/i0natan/nodebestpractices/projects).

<img align="left" width="100" height="100" src="assets/images/members/yoni.png">

[Yoni Goldberg](https://github.com/i0natan)
<a href="https://twitter.com/goldbergyoni"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://goldbergyoni.com"><img src="assets/images/www.png" width="16" height="16"></img></a>

Independent Node.js consultant who works with customers in the USA, Europe, and Israel on building large-scale Node.js applications. Many of the best practices above were first published at [goldbergyoni.com](https://goldbergyoni.com). Reach Yoni at [@goldbergyoni](https://github.com/goldbergyoni) or [me@goldbergyoni.com](mailto:me@goldbergyoni.com)

<br/>

<img align="left" width="100" height="100" src="assets/images/members/bruno.png">

[Bruno Scheufler](https://github.com/BrunoScheufler)
<a href="https://brunoscheufler.com/"><img src="assets/images/www.png" width="16" height="16"></img></a>

💻 full-stack web engineer, Node.js & GraphQL enthusiast

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kyle.png">

[Kyle Martin](https://github.com/js-kyle)
<a href="https://twitter.com/kylemartin_93"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://www.linkedin.com/in/kylemartinnz"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Full Stack Developer & Site Reliability Engineer based in New Zealand, interested in web application security, and architecting and building Node.js applications to perform at global scale.

<br/>

<img align="left" width="100" height="100" src="assets/images/members/sagir.png">

[Sagir Khan](https://github.com/sagirk)
<a href="https://twitter.com/sagir_k"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://sagirk.com"><img src="assets/images/www.png" width="16" height="16"></img></a>
<a href="https://linkedin.com/in/sagirk"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Deep specialist in JavaScript and its ecosystem — React, Node.js, MongoDB, pretty much anything that involves using JavaScript/JSON in any layer of the system — building products using the web platform for the world’s most recognized brands. Individual Member of the Node.js Foundation, collaborating on the Community Committee's Website Redesign Initiative.

<br/>

## Collaborators

Thank you to all our collaborators! 🙏

Our collaborators are members who are contributing to the repository on a regular basis, through suggesting new best practices, triaging issues, reviewing pull requests and more. If you are interested in helping us guide thousands of people to craft better Node.js applications, please read our [contributor guidelines](/.operations/CONTRIBUTING.md) 🎉

| <a href="https://github.com/idori" target="_blank"><img src="assets/images/members/ido.png" width="75" height="75"></a> | <a href="https://github.com/TheHollidayInn" target="_blank"><img src="assets/images/members/keith.png" width="75" height="75"></a> |
| :--: | :--: |
| [Ido Richter (Founder)](https://github.com/idori) | [Keith Holliday](https://github.com/TheHollidayInn) |

### Past collaborators

| <a href="https://github.com/refack" target="_blank"><img src="assets/images/members/refael.png" width="50" height="50"></a> |
| :--: |
| [Refael Ackermann](https://github.com/refack) |

<br/>

## Thank You Notes

We appreciate any contribution, from a single word fix to a new best practice. View our contributors and [contributing documentation here!](CONTRIBUTORS.md)

<br/><br/><br/>
