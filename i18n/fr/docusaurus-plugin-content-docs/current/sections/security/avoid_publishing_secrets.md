# Éviter de publier les secrets dans le registre npm

### Un paragraphe d'explication
Des précautions doivent être prises pour éviter de publier accidentellement des secrets dans un registre public npm. Un fichier `.npmignore` peut être utilisé pour ignorer des fichiers ou dossiers spécifiques, ou le tableau `files` du `package.json` peut être utilisé comme une liste blanche.

Pour savoir ce que npm publish va vraiment publier sur le registre, l'option `--dry-run` peut être ajoutée à la commande npm publish pour obtenir un résultat verbeux du package crée. 

Il est important de noter que si un projet utilise à la fois des fichiers `.npmignore` et `.gitignore`, tout ce qui n'est pas dans `.npmignore` est publié dans le registre (c'est-à-dire que le fichier `.npmignore` écrase `.gitignore`). Cette condition est communément une source de confusion et un problème qui peut mener à la fuite de secrets. Les développeurs ont l'habitude de mettre à jour le fichier `.gitignore`, mais peuvent oublier de faire de même avec `.npmignore`, ce qui peut conduire à ce qu'un potentiel fichier sensible ne soit pas envoyé sur l'outil de gestion des versions, mais soit toujours inclus dans le package npm.

### Exemple de code
Fichier d'exemple .npmignore
```
# Tests
test
coverage

# Build tools
.travis.yml
.jenkins.yml

# Environment
.env
.config

```

Exemple d'usage du tableau files de package.json

```json
{ 
  "files" : [
    "dist/moment.js",
    "dist/moment.min.js"
  ]
}
```

### Ce que disent les autres blogueurs

Extrait du blog de [Liran Tal & Juan Picado sur Snyk](https://snyk.io/blog/ten-npm-security-best-practices/):
> ... Une autre bonne pratique à adopter est d'utiliser la propriété files du package.json, qui fonctionne comme une liste blanche et spécifie un tableau de fichiers à inclure dans le package qui sera créé et installé (tandis que le fichier .npmignore fonctionne comme une liste noire). La propriété files et le fichier .npmignore peuvent être utilisés ensemble pour déterminer explicitement quels fichiers doivent être inclus, et exclus, du package. Quand les deux sont utilisés, la propriété files du package.json a la priorité sur le fichier .npmignore.

Extrait du blog de [blog de npm](https://blog.npmjs.org/post/165769683050/publishing-what-you-mean-to-publish)
> ... Quand vous exécutez npm publish, npm met dans le package l'ensemble des fichiers du répertoire courant. Il prend quelques décisions pour vous à propos de ce qu'il faut inclure et de ce qu'il faut ignorer. Pour prendre ces décisions, il utilise le contenu de plusieurs fichiers dans le répertoire de votre projet. Ces fichiers incluent .gitignore, .npmignore, et le tableau files dans package.json. De plus, il inclut toujours certains fichiers et en ignore d'autres.