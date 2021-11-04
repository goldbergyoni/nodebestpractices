# Installez vos paquets avec npm ci en production

<br/><br/>

### Un paragraphe d'explication

Vous avez verrouillé vos dépendances en utilisant [**Verrouillez les dépendances**](./lockdependencies.french.md), mais maintenant, vous devez vous assurer que ces versions précises des paquets sont utilisées en production.

L'utilisation de `npm ci` pour installer des paquets fera exactement cela et plus encore.
* Il échouera si votre `package.json` et votre `package-lock.json` ne correspondent pas (ils devraient) ou si vous n'avez pas de fichier lock
* Si un dossier `node_modules` est présent, il sera automatiquement supprimé avant l'installation
* C'est plus rapide ! Près de deux fois plus rapide selon [l'article de version du blog](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)

### Quand cela peut-il être utile ?
Vous avez la garantie que votre environnement CI ou de qualité testera votre logiciel avec exactement la même version que celle que vous enverrez plus tard en production.
De plus, si pour une raison quelconque quelqu'un modifie manuellement le fichier package.json, sans utiliser une commande du cli mais plutôt en éditant directement le fichier package.json, un écart entre le package.json et le package-lock.json est engendré et une erreur sera levée.

### Ce que dit npm

Extrait de la [documentation npm ci](https://docs.npmjs.com/cli/ci.html)
> Cette commande est similaire à npm-install, sauf qu'elle est destinée à être utilisée dans des environnements automatisés tels que les plateformes de test, l'intégration continue et le déploiement, ou toute situation où vous voulez vous assurer que vous faites une installation propre de vos dépendances.

[Article du blog annonçant la sortie de la commande `ci`](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)
> La commande offre des améliorations considérables à la fois en termes de performance et de fiabilité des builds pour les intégrations continues/processus de déploiement continus, offrant une expérience cohérente et rapide aux développeurs qui utilisent les CI/CD dans leur flux de travail.

[npmjs: dependencies et devDepencies](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)
>    "dependencies": Paquets requis par votre application en production.
>    "devDependencies": Paquets qui ne sont nécessaires que pour le développement local et les tests.

<br/><br/>
