# Préparez votre code pour la production

<br/><br/>

### Un paragraphe d'explication

Voici une liste de conseils de développement qui ont un impact important sur la maintenance et la stabilité de la production :

* Le guide douze facteurs – Familiarisez-vous avec le guide [Douze facteurs](https://12factor.net/fr/)
* Soyez sans état – N'enregistrez aucune donnée localement sur un serveur web spécifique (consultez le point – « Soyez sans état »)
* Mettez en cache – Utilisez beaucoup le cache, mais ne faites jamais échouer en raison de la non-concordance du cache
* Testez la mémoire – Mesurez l'utilisation de la mémoire et les fuites dans le cadre de votre flux de développement, des outils tels que « memwatch » peuvent grandement faciliter cette tâche
* Nommez les fonctions – Minimisez l'utilisation des fonctions anonymes (c'est à dire de fonction de rappel en ligne) car un profileur de mémoire classique fournit l'utilisation de la mémoire avec le nom de la méthode
* Utilisez les outils CI – Utilisez l'outil CI pour détecter les échecs avant d'envoyer en production. Par exemple, utilisez ESLint pour détecter les erreurs de référence et les variables non définies. Utilisez –trace-sync-io pour identifier le code qui utilise des API synchrones (au lieu de la version asynchrone)
* Journalisez à bon escient – Incluez dans le journal des informations contextuelles pour chaque instruction, si possible au format JSON, afin que les outils d'agrégation de journaux tels qu'Elastic puissent rechercher ces propriétés (consultez le point - « Augmentez la clarté à l'aide de la journalisation intelligente »). Incluez également l'ID de transaction qui identifie chaque requête et permet de corréler les lignes qui décrivent la même transaction (consultez le point - « Attribuez un ID de transaction à chaque relevé du journal »)
* Gérez les erreurs – La gestion des erreurs est le talon d'Achille des sites de production de Node.js - de nombreux processus Node se bloquent en raison d'erreurs mineures tandis que d'autres restent en vie dans un état défectueux au lieu de se bloquer. La définition de votre stratégie de traitement des erreurs est absolument essentielle, lisez ici mes [meilleures pratiques de gestion des erreurs](http://goldbergyoni.com/checklist-best-practices-of-node-js-error-handling/)
