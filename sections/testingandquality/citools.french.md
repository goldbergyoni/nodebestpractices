# Choisissez soigneusement votre plateforme CI

<br/><br/>

### Un paragraphe d'explication

Le monde des CI était autrefois caractérisé par la flexibilité de [Jenkins](https://jenkins.io/) par opposition à la simplicité des fournisseurs de SaaS. Le jeu est en train de changer car les fournisseurs SaaS comme [CircleCI](https://circleci.com/) et [Travis](https://travis-ci.org/) offrent des solutions robustes incluant des conteneurs Docker avec un temps de configuration minimum tandis que Jenkins essaie également de rivaliser sur le segment de la « simplicité ». Bien qu'il soit possible de mettre en place une solution CI riche dans le cloud, Jenkins reste la plateforme de choix si elle doit contrôler des détails plus fins. Le choix se résume finalement à la capacité dans laquelle le processus CI doit être personnalisé : les fournisseurs gratuits du cloud et sans configuration permettent d'exécuter des commandes shell personnalisées, des images de docker personnalisées, d'ajuster le flux de travail, d'exécuter des matrices et d'autres fonctionnalités riches. Cependant, si l'on souhaite contrôler l'infrastructure ou programmer la logique du CI à l'aide d'un langage de programmation formel comme Java, Jenkins peut toujours être le bon choix. Sinon, envisagez d'opter pour l'option simple du cloud et sans configuration.

<br/><br/>

### Exemple de code - une configuration typique CI du cloud. Fichier .yml unique et c'est tout

```yaml
version: 2
jobs:
  build:
    docker:
      - image: circleci/node:4.8.2
      - image: mongo:3.4.4
    steps:
      - checkout
      - run:
          name: Installer npm
          command: npm install
  test:
    docker:
      - image: circleci/node:4.8.2
      - image: mongo:3.4.4
    steps:
      - checkout
      - run:
          name: Test
          command: npm test
      - run:
          name: Générer une couverture de code
          command: './node_modules/.bin/nyc report --reporter=text-lcov'      
      - store_artifacts:
          path: coverage
          prefix: coverage

```

### Circle CI - CI du cloud avec une configuration presque nul

![alt text](../../assets/images/circleci.png "Gestion des erreurs API")

### Jenkins - CI sophistiqué et robuste

![alt text](../../assets/images/jenkins_dashboard.png "Gestion des erreurs API")

<br/><br/>
