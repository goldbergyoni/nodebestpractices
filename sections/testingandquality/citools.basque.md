# Aukeratu arretaz zure IE plataforma

<br/><br/>

### Azalpena

IEaren mundua [Jenkins](https://jenkins.io/)en malgutasuna versus SaaS hornitzaileen sinpletasunaren arteko lehia izan ohi zen. Jokoa aldatzen ari da, [CircleCI](https://circleci.com/) eta [Travis](https://travis-ci.org/) bezalako SaaS hornitzaileek irtenbide sendoak eskaintzen baitituzte Docker edukiontziak barne, gutxieneko konfigurazio denborarekin Jenkins-ek "soiltasun" segmentuan ere lehiatzen saiatzen den bitartean. Hodeian edozeinek IE irtenbide aberatsa presta dezakeen arren, prozesua xehetasun handiz kontrolatu beharra izanez gero, Jenkins da oraindik ere aukeratutako plataforma. Erabakia askotan IE prozesua zenbateraino pertsonalizatu behar den zehazten du: hodeiko dohaineko hornitzaileek/ doako eta konfiguratutako doako hodei saltzaileek ahalbidetzen dute shell komando pertsonalizatuak, docker irudi pertsonalizatuak, lan fluxu doitua, matrizearen eraikuntzak exekutatzea, eta bestelako funtzionalitate aberats batzuk dituzte. Hala ere, Java bezalako programazio lengoaia formal bat erabiliz azpiegitura kontrolatu edo IE logika programatu nahi izanez gero, Jenkins izan daiteke oraindik aukera. Bestela, aukeratu dohainekoa eta sinplea den hodeiko soluzioren bat.

<br/><br/>

### Kode adibidea: hodeiko IE ezarpen arrunta. .yml fitxategi bakarra besterik ez

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
          name: Install npm wee
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
          name: Generate code coverage
          command: './node_modules/.bin/nyc report --reporter=text-lcov'
      - store_artifacts:
          path: coverage
          prefix: coverage

```

### Circle CI: ia zero prestakuntzadun hodeieko IEa

![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/circleci.png "API erroreen kudeaketa")

### Jenkins: IE sofistikatu eta sendoa

![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/jenkins_dashboard.png "API erroreen kudeaketa")

<br/><br/>
