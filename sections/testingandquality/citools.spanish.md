# Elige tu plataforma de CI con cuidado

<br/><br/>

### Párrafo de explicación

El mundo de la CI solía ser la flexibilidad de Jenkins vs la simplicidad de proveedores SaaS. El juego ahora cambia ya que proveedores SaaS como CircleCI y Travis ofrecen soluciones robustas, incluyendo contenedores Docker con instalación y configuración mínimas, mientras Jenkins también intenta competir en el segmento de la "simplicidad". Aunque uno puede instalar una solución de CI completa en cloud, si fuera necesario controlar hasta el más mínimo detalle, Jekins sigue siendo la plataforma recomendada. Llega un momento en el que la elección se reduce lo siguiente: ¿hasta qué punto tengo que personalizar mi CI? Los proveedores cloud permiten ejecutar comandos de shell personalizados, imágenes Docker personalizadas, ajustar el flujo de trabajo, ejecutar compilaciones en clúster y otras funciones avanzadas. Sin embargo, si se desea controlar la infraestructura o programar la lógica de CI utilizando un lenguaje formal de programación como Java, Jenkins aún podría ser la opción. De lo contrario, considera optar por la opción de cloud simple y libre de instalación.

<br/><br/>

### Code Example – a typical cloud CI configuration. Single .yml file and that's it

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

### Circle CI - almost zero setup cloud CI

![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/circleci.png "API error handling")

### Jenkins - sophisticated and robust CI 

![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/jenkins_dashboard.png "API error handling")

<br/><br/>
