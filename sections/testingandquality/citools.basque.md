# Zure CI plataforma arretaz aukeratu

<br/><br/>

### Azalpen paragrafoa

CIaren munduak [Jenkins](https://jenkins.io/)en malgutasuna versus SaaS honitzaileen sinpletasunaren arteko lehia ohi izan zen. Egoera aldatzen ari da [CircleCI](https://circleci.com/) eta [Travis](https://travis-ci.org/) bezalako hornitzaileek prestatze-denbora minimodun Docker kontainerrak bezalako soluzio irmoak proposatzen dituztenetik, Jenkins 'sinpletasunean' ere lehiatzen den bitartean. Edozeinek hodeiean CI soluzio aberats bat prestatu ahal dezan arren, oraindik ere plataformaren erabakia da Jenkinsen xehetasun finenak kontrolatu behar izatea ala ez. Erabakia askotan CI prozesua pertsonalizatua izan beharrak zehazten du: hodeieko dohaineko hornitzaileek shell komando pertsonalizatuak exekutatzea ahalbidetzen dute, docker irudi pertsonalizatuak, lan fluxuaren doitzea, matrize eraikitzeak exekutatzea eta bestelako funtzionalitate aberatsak dituzte . Hala ere, infraestruktura edo Java bezalako programazio lengoaia formal bat erabiliaz CIaren logika programatzea nahi bada, Jenkins izan daiteke oraindik aukera hoberena. Bestela, aukeratu dohainekoa eta sinplea den hodeirako soluzio bat

<br/><br/>

### Kodearen adibidea: hodeieko CI ezarpen arrunta. .yml fitxategi bakar bat besterik ez

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

### Circle CI - ia zero prestakuntzadun hodeieko CIa

![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/circleci.png "API erroreen kudeaketa")

### Jenkins - CI sofistikatu eta sendoa 

![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/jenkins_dashboard.png "API erroreen kudeaketa")

<br/><br/>
