# 仔细挑选您的 CI 平台

<br/><br/>


### 一段解释

曾经，CI世界就是易于扩展的[Jenkins](https://jenkins.io/) vs 简单方便的SaaS方案。游戏正在改变，比如SaaS提供者[CircleCI](https://circleci.com/)和[Travis](https://travis-ci.org/)提供了强大的解决方案，包含最小化设置时间的Docker容器，而Jenkins也尝试在简单易用性上做文章而提高竞争性。虽然您可以在云上设置丰富的CI解决方案, 如果它需要控制更多的细节Jenkins仍然是选择的平台。最终的选择归结为CI过程自定义的范围: 免安装，方便设置的云供应商允许运行自定义shell命令、自定义的docker image、调整工作流、运行matrix build和其他丰富的功能。但是, 如果使用像Java这样的正式编程语言来控制基础结构或编程CI逻辑 - Jenkins可能仍然是首选。否则, 考虑选择简单方便和设置自由的云选项。

<br/><br/>


### 代码示例 – 典型的云CI配置，一个yml文件就够了
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


 
 ### Circle CI - 几乎零设置的云CI
![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/circleci.png "API error handling")

### Jenkins - 完善和强大的CI
![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/jenkins_dashboard.png "API error handling")

 
<br/><br/>
