# Organisez votre projet en composants

<br/><br/>

### Un paragraphe d'explication

Pour les applications de taille moyenne et supérieure, les monolithes sont vraiment mauvais - avoir un gros logiciel avec de nombreuses dépendances est difficile à appréhender et mène souvent à du code spaghetti. Même les architectes intelligents - ceux qui sont suffisamment qualifiés pour apprivoiser la bête et la « modulariser » - consacrent un temps considérable à sa conception, et chaque changement nécessite d'évaluer soigneusement l'impact sur d'autres objets dépendants. La solution ultime est de développer de petits logiciels : divisez la pile entière en composants autonomes qui ne partagent pas de fichiers avec d'autres, chacun constituant très peu de fichiers (par exemple API, service, accès aux données, test, etc.) de sorte qu'il soit très facile à raisonner à ce sujet. Certains peuvent appeler cette architecture de « microservices » - il est important de comprendre que les microservices ne sont pas une spécification que vous devez suivre, mais plutôt un ensemble de principes. Vous pouvez adopter tous les principes dans une architecture de microservices ou en adopter seulement quelques-uns. Les deux sont bons tant que la complexité du logiciel est faible. Le moins que vous puissiez faire est de créer des frontières de base entre les composants, d'assigner un dossier à la racine de votre projet pour chaque composant métier et de le rendre autonome - les autres composants ne sont autorisés à utiliser ses fonctionnalités que via son interface publique ou son API. C'est la base pour garder vos composants simples, éviter l'enfer des dépendances et ouvrir à l'avenir la voie à des véritables microservices une fois que votre application se développera.

<br/><br/>

### Citation de blog : « La mise à l'échelle nécessite la mise à l'échelle de l'application entière »

 Extrait du blog de MartinFowler.com

 > Les applications monolithiques peuvent réussir, mais de plus en plus de personnes ressentent des frustrations à leur égard, d'autant plus que davantage d'applications sont déployées dans le cloud. Les cycles de changement sont liés les uns aux autres - une modification apportée à une petite partie de l'application nécessite la reconstruction et le déploiement du monolithe entier. Au fil du temps, il est souvent difficile de conserver une bonne structure modulaire, ce qui rend plus difficile la conservation des modifications qui ne devraient affecter qu'un module au sein de ce module. La mise à l'échelle nécessite la mise à l'échelle de l'application entière plutôt que les parties concernées, cela nécessitent donc plus de ressources.

 <br/><br/>

### Bon : Organisez votre solution avec des composants autonomes

![alt text](../../assets/images/structurebycomponents.PNG "Solution d'organisation par composants")

<br/><br/>

### Mauvais : Regroupez vos fichiers selon leur rôle technique

![alt text](../../assets/images/structurebyroles.PNG "Solution d'organisation par rôles techniques")
