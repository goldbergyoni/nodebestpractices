# Éviter les déclarations d'évaluation de JS

### Un paragraphe d'explication

`eval()`, `setTimeout()`, `setInterval()`, et `new Function()` sont des fonctions globales, souvent utilisées dans Node.js, qui acceptent comme paramètre une châine de caractères représentant une expression Javascript, une déclaration ou une suite de déclarations. Le problème de sécurité que pose ces fonctionnalités est la possibilité que les entrées d'un utilisateur non fiable se retrouvent dans le code exécuté, ce qui pourrait compromettre le serveur, l'évaluation du code permettant essentiellement à un attaquant d'effectuer toutes les actions possibles. Il est suggéré de refactoriser le code pour ne pas se fier à ces fonctions où les entrées de l'utilisateur pourraient y être passées et exécutées.

### Exemple de code

```javascript
// exemple d'un code malicieux qui permettait à un attaquant d'entrer
const userInput = "require('child_process').spawn('rm', ['-rf', '/'])";

// code malicieux exécuté
eval(userInput);
```

### Ce que disent les autres blogueurs

Extrait du livre « Essential Node.js Security » de [Liran Tal](https://leanpub.com/nodejssecurity):
> La fonction eval() est peut-être l'une des plus mal vues dans JavaScript du point de vue de la sécurité. Elle analyse une chaîne de caractère JavaScript comme du texte, et l'exécute comme si c'était du code JavaScript. En mélangeant cela avec des entrées d'utilisateurs non fiables qui pourraient trouver un moyen d'accéder à la fonction eval(), on obtient la recette d'un désastre qui peut finir par compromettre le serveur.
