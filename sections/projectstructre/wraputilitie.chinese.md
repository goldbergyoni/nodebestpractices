# 将公用实用工具封装成 NPM 包

<br/><br/>


### 段落解释
一旦你开始在不同的服务器上增加不同的组件并使用不同的服务器，这些服务器会消耗类似的工具，那么你应该开始管理依赖关系 - 你如何保留实用工具代码的一个副本，并让多个使用组件者使用和部署？ 好吧，有一个这样的框架，它被称为NPM ...首先用自己的代码包装第三方实用工具包，以便将来可以轻松替换，并发布自己的代码作为私人NPM包。 现在，您所有的代码库都可以导入该代码并受益于免费的依赖管理框架。 您可以发布NPM包供您自己的私人使用，而无需公开分享 [私人模块](https://docs.npmjs.com/private-modules/intro), [私人注册表](https://npme.npmjs.com/docs/tutorials/npm-enterprise-with-nexus.html) or [本地 NPM 包](https://medium.com/@arnaudrinquin/build-modular-application-with-npm-local-modules-dfc5ff047bcc)


<br/><br/>


 ### 在环境和组件中共享你自己的公用实用工具
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/Privatenpm.png "构建解决方案的组件")
