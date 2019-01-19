# 从配置文件中提取机密信息, 或使用npm包加密这些文件

### 一段解释

对密钥和机密信息的访问，提供给Node.js最常见和最安全的方法，是使用环境变量存储在运行它们的系统上。设置完成后, 可以从全局`process.env`中访问这些信息。
对于应用是否将所有配置正确地排除在代码之外, 一个试金石是通过判断代码库是否可以在不损害任何凭据的情况下随时可以开源。

在极少数情况下, 确实需要将机密信息存储在源代码管理中，使用包例如[cryptr](https://www.npmjs.com/package/cryptr)，它以加密的方式存储信息，而不是文本。

有多种可用的工具, 在使用git提交时，审核提交和提交消息意外添加的机密信息, 例如[git-secrets](https://github.com/awslabs/git-secrets).

### 代码示例

访问存储在环境变量中的API密钥:

```javascript
    const azure = require('azure');

    const apiKey = process.env.AZURE_STORAGE_KEY;
    const blobService = azure.createBlobService(apiKey);
```

使用`cryptr`存储加密秘钥:

```javascript
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET);
 
let accessToken = cryptr.decrypt('e74d7c0de21e72aaffc8f2eef2bdb7c1');
 
console.log(accessToken);  // outputs decrypted string which was not stored in source control
```

### 其他博主说了什么

> 环境变量在部署之间很容易更改, 而无需更改任何代码;与配置文件不同的是, 它们被意外签入代码存储库的可能性很小;与自定义配置文件或其他配置机制(如 java系统属性)不同, 它们是一种语言和OS无关的标准。[摘自: The 12 factor app](https://12factor.net/config)
