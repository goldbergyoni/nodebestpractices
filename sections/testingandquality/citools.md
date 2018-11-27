# Carefully choose your CI platform

<br/><br/>

### One Paragraph Explainer

The CI world used to be the flexibility of [Jenkins](https://jenkins.io/) vs the simplicity of SaaS vendors. The game is now changing as SaaS providers like [CircleCI](https://circleci.com/) and [Travis](https://travis-ci.org/) offer robust solutions including Docker containers with minimum setup time while Jenkins tries to compete on 'simplicity' segment as well. Though one can setup rich CI solution in the cloud, should it required to control the finest details Jenkins is still the platform of choice. The choice eventually boils down to which extent the CI process should be customized: free and setup free cloud vendors allow to run custom shell commands, custom docker images, adjust the workflow, run matrix builds and other rich features. However, if controlling the infrastructure or programming the CI logic using a formal programming language like Java is desired - Jenkins might still be the choice. Otherwise, consider opting for the simple and setup free cloud option

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
