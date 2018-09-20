# 仔细挑选您的 CI 平台

<br/><br/>


### 一段解释

CI世界曾经是[Jenkins](https://jenkins.io/) vs SaaS供应商的简单性。游戏正在改变，比如SaaS提供者 [CircleCI](https://circleci.com/) 和 [Travis](https://travis-ci.org/) 提供了强大的解决方案，包含最小化设置时间的Docker容器，而Jenkins也尝试在简单易用性上做文字而提高竞争性。虽然您可以在云上设置丰富的 CI 解决方案, 如果它需要控制更多的细节Jenkins仍然是选择的平台。最终的选择归结为 CI 过程应自定义的范围: 云供应商允许运行自定义 shell 命令、自定义的docker images、调整工作流、运行矩阵生成和其他丰富的功能的自由和设置自由。但是, 如果使用像 Java 这样的正式编程语言来控制基础结构或编程 CI 逻辑 - Jenkins可能仍然是首选。否则, 考虑选择简单和设置自由的云选项

<br/><br/>


### 代码示例 – 典型的云 CI 配置。一个.yml 文件就够了
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


 
 ### Circle CI - 几乎零设置云 CI
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/circleci.png "API error handling")

### Jenkins - 完善和强大的CI
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/jenkins_dashboard.png "API error handling")

 
<br/><br/>
