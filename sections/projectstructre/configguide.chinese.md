# 使用环境感知，安全，分层的配置

<br/><br/>


### 一段解释

当我们处理配置参数时，常常会很慢并且很烦躁：（1）当需要注入100个keys(而不是只在配置文件中提交它们)时，使用进程环境变量设置所有的keys变得非常繁琐，但是当处理只有devops管理权限的文件时，不改变代码行为就不不会变。一个可靠的配置解决方案必须结合配置文件和进程变量覆盖。（2）枚举一个普通JSON的所有keys时，当目录变得非常庞杂的时候，查找修改条目困难。几乎没有配置库允许将配置存储在多个文件中，运行时将所有文件联合起来。分成几个部分的分层JSON文件能够克服这个问题。请参照下面示例。（3）不推荐存储像密码数据这样的敏感信息，但是又没有快速便捷的方法解决这个难题。一些配置库允许文件加密，其他库在Git提交时加密目录，或者不存储这些目录的真实值，在通过环境变量部署期间枚举真实值。（4）一些高级配置场景需要通过命令行（vargs）注入配置值，或者像Redis一样通过集中缓存同步配置信息，所以不同的服务器不会保存不同的数据。

一些配置库可以免费提供这些功能的大部分功能，请查看NPM库（[nconf](https://www.npmjs.com/package/nconf), [config](https://www.npmjs.com/package/config) 和 [convict](https://www.npmjs.com/package/convict)）这些库可以满足这些要求中的许多要求。

<br/><br/>

### 代码示例 – 分层配置有助于查找条目和维护庞大的配置文件

```javascript
{
  // Customer module configs 
  "Customer": {
    "dbConfig": {
      "host": "localhost",
      "port": 5984,
      "dbName": "customers"
    },
    "credit": {
      "initialLimit": 100,
      // Set low for development 
      "initialDays": 1
    }
  }
}
```

<br/><br/>
