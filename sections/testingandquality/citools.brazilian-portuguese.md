# Escolha cuidadosamente sua plataforma de Integração Contínua

<br/><br/>

### Explicação em um Parágrafo

O mundo da CI costumava ser a flexibilidade de [Jenkins](https://jenkins.io/) versus a simplicidade dos fornecedores de SaaS. O jogo está mudando agora, já que os provedores de SaaS como [CircleCI](https://circleci.com/) e [Travis](https://travis-ci.org/) oferecem soluções robustas, incluindo contêineres Docker com tempo mínimo de configuração, enquanto Jenkins tenta competir no segmento de 'simplicidade' também. Embora seja possível configurar uma solução de CI avançada na nuvem, caso seja necessário controlar os detalhes mais precisos, a Jenkins ainda é a plataforma preferida. A escolha acaba por reduzir até que ponto o processo de CI deve ser personalizado: os fornecedores de nuvem gratuitos e sem configuração permitem executar comandos de shell personalizados, imagens docker personalizadas, ajustar o fluxo de trabalho, executar compilações de matriz e outros recursos avançados. No entanto, se for desejado controlar a infraestrutura ou programar a lógica de CI usando uma linguagem de programação formal, como Java, talvez ainda seja possível escolher Jenkins. Caso contrário, considere optar pela opção de nuvem simples e sem configuração.

<br/><br/>

### Exemplo de código - uma configuração típica de IC na nuvem. Único arquivo .yml e é isso

```javascript
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

### Circle CI - CI com quase zero configuração em nuvem

![alt text](../../assets/images/circleci.png "manipulador de erros do API")

### Jenkins - CI sofisticado e robusto 

![alt text](../../assets/images/jenkins_dashboard.png "manipulador de erros do API")

<br/><br/>
