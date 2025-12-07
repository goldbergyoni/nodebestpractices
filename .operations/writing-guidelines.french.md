# Notre manifeste de rédaction de contenu

Comment nous améliorons l'expérience de lecture et l'apprentissage pour nos visiteurs.

## 1. La simplicité vaut mieux que la perfection

Faciliter la lecture et l'absorption des connaissances est notre mission, nous en organisons son contenu. En tant que tels, nous nous concentrons sur la transformation des sujets complexes et difficiles en une liste simplifiée, nous traitons les informations trop volumineuses avec du contenu plus courts et moins précis, nous évitons les sujets ‘qui mettent de l'huile sur le feu’ ou controversés et nous évitons les idées subjectives au profit de pratiques généralement acceptées.

## 2. Se baser sur des faits probants et fiables

Nos lecteurs doivent être persuadés que le contenu qu'ils parcourent est fiable. Pour ce faire, nous incluons des données probantes comme des références, des données et d'autres ressources disponibles à ce sujet. Dans la pratique, nous essayons d'inclure des citations provenant de sources fiables, de montrer des benchmarks, des modèles de conception connexes ou toute autre mesure scientifique pour prouver les affirmations.

## 3. MECE (Mutuellement Exclusif Collectivement Exhaustif)

En plus d'être d'une grande fiabilité et d'une grande qualité rédactionnelle, le fait de parcourir le contenu devrait également permettre de couvrir l'ensemble du sujet. Aucun sous-thème important ne doit être laissé de côté.

## 4. Formatage cohérent

Le contenu est présenté à l'aide de modèles prédéfinis. Tout contenu futur doit être conforme au même modèle. Si vous souhaitez ajouter de nouveaux points, copiez le format d'un point existant et complétez-le selon vos besoins. Pour plus d'informations, veuillez consulter [ce modèle](../sections/template.md).

## 5. C'est à propos de Node.js

Chaque conseil doit être directement lié à Node.js et non au développement de logiciels en général. Lorsque nous conseillons d'implémenter un modèle/une règle générique dans Node.js, le contenu doit se concentrer sur l'implémentation dans Node. Par exemple, lorsque nous conseillons de nettoyer toutes les requêtes saisies pour des raisons de sécurité, il convient d'utiliser Node-lingo - ‘Utiliser un middleware pour nettoyer les requêtes saisies’. Si un élément n'a pas d'implémentation spécifique dans Node.js (par exemple, il est identique dans Python & Java) - incluez-le dans un élément de conteneur générique, voir l'article 6.5 par exemple.

## 6. Uniquement les fournisseurs majeurs

Il est parfois utile d'inclure des noms de fournisseurs qui peuvent répondre à certains défis et problèmes comme les paquets npm, les outils open source ou même les produits commerciaux. Afin d'éviter des listes trop longues ou de recommander des projets peu fiables et instables, nous avons élaboré les règles suivantes :

- Seuls les 3 premiers fournisseurs devraient être recommandés - un fournisseur qui apparaît dans les 3 premiers résultats d'un moteur de recherche (Google ou GitHub triés par popularité) pour un mot clé pertinent donné peut être inclus dans notre recommandation.
- S'il s'agit d'un paquet npm, il doit également être téléchargé au moins 750 fois par jour en moyenne.
- S'il s'agit d'un projet open-source, il doit avoir été mis à jour au moins une fois au cours des 6 derniers mois.
