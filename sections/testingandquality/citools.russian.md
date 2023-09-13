# Тщательно выбирайте платформу CI

<br/><br/>

### Объяснение в один абзац

Раньше мир CI был гибкостью [Jenkins](https://jenkins.io/) по сравнению с простотой поставщиков SaaS. Теперь игра меняется, так как провайдеры SaaS, такие как [CircleCI](https://circleci.com/) и [Travis](https://travis-ci.org/), предлагают надежные решения, включая контейнеры Docker, с минимальным временем установки, в то время как Jenkins пытается конкурировать и в сегменте «простота». Несмотря на то, что в облаке можно настроить полнофункциональное CI-решение, в случае необходимости контролировать мельчайшие детали Jenkins по-прежнему остается предпочтительной платформой. В конечном итоге выбор сводится к тому, в какой степени процесс CI должен быть настроен: поставщики бесплатных и настраиваемых облачных сред позволяют запускать пользовательские команды оболочки, настраиваемые образы докеров, настраивать рабочий процесс, запускать сборки матрицы и другие богатые функции. Однако, если управление инфраструктурой или программирование логики CI с использованием формального языка программирования, такого как Java, желательны - Дженкинс все еще может быть выбором. В противном случае рассмотрите вариант выбора простой и бесплатной настройки облака.

<br/><br/>

### Пример кода - типичная конфигурация облачного CI. Одиночный файл .yml и все

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

### Circle CI - почти нулевая настройка облака CI

![alt text](../../assets/images/circleci.png "API error handling")

### Дженкинс - сложный и надежный CI

![alt text](../../assets/images/jenkins_dashboard.png "API error handling")

<br/><br/>
