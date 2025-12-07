# Mesurez et protégez l'utilisation de la mémoire

<br/><br/>

### Un paragraphe d'explication

Dans un monde parfait, un développeur web ne devrait pas s'occuper des fuites de mémoire. En réalité, les problèmes de mémoire sont des phénomènes connus de Node dont il faut être conscient. Surtout, l'utilisation de la mémoire doit être constamment surveillée. Dans les sites de développement et les petits sites de production, vous pouvez mesurer manuellement en utilisant des commandes Linux ou des outils et des bibliothèques npm comme node-inspector et memwatch. Le principal inconvénient de ces activités manuelles est qu'elles nécessitent un être humain qui surveille activement - pour les sites de production sérieux, il est absolument vital d'utiliser des outils de surveillance robustes (AWS CloudWatch, DataDog ou tout autre système proactif similaire), par exemple qui alertent lorsqu'une fuite se produit. Il existe également peu de recommandations de développement pour anticiper des fuites : évitez de stocker les données au niveau global, utilisez des flux (NdT *streams*) pour les données de taille dynamique, limitez la portée des variables en utilisant des let et des const.

<br/><br/>

### Ce que disent les autres blogueurs

* Extrait du blog de [Dyntrace](https://www.dynatrace.com/news/blog/understanding-garbage-collection-and-hunting-memory-leaks-in-node-js/) :
> ... « Comme nous l'avons déjà appris, dans Node.js, JavaScript est compilé en code natif par V8. Les structures de données natives résultantes n'ont pas grand-chose à voir avec leur représentation d'origine et sont uniquement gérées par V8. Cela signifie que nous ne pouvons pas allouer ou désallouer activement de la mémoire en JavaScript. V8 utilise un mécanisme bien connu appelé le [ramasse-miettes](https://fr.wikipedia.org/wiki/Ramasse-miettes_(informatique)) (NdT *garbage collection*) pour résoudre ce problème. »

* Extrait du blog de [Dyntrace](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load) :
> ... « Bien que cet exemple mène à des résultats évidents, le processus est toujours le même :
Créez des copies de mémoires sur une certaine période avec une bonne quantité d'allocation de mémoire entre les deux
Comparez ces copies pour découvrir ce qui augmente »

* Extrait du blog de [Rising Stack](https://blog.risingstack.com/finding-a-memory-leak-in-node-js/) :
> ... « Par défaut, Node.js essaiera d'utiliser environ 1,5GB de mémoire, ce qui doit être plafonné lors de l'exécution sur des systèmes avec moins de mémoire. C'est le comportement attendu car la récupération de place est une opération très coûteuse.
La solution pour cela a été d'ajouter un paramètre supplémentaire au processus de Node.js :
node –max_old_space_size=400 server.js –production »
« Pourquoi le ramasse-miettes coûte-t-il aussi cher ? Le moteur JavaScript V8 utilise un mécanisme d'arrêt lors du ramasse-miettes. En pratique, cela signifie que le programme arrête son exécution pendant que la récupération du ramasse-miettes est en cours. »
