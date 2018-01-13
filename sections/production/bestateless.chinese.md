# 保存无状态，几乎每天停掉服务器

<br/><br/>


### 一段解释

你曾经有没有遇到一类严重的线上问题，比如一个服务器丢失了一些配置或数据？这可能是由于对于不属于部署部分的本地资源的一些不必要的依赖。许多成功的产品对待服务器就像凤凰鸟–它周期性地死亡和重生不带来任何损伤。换句话说，服务器只是一个硬件，执行你的代码一段时间后，可以更换。
这个方法:
- 允许动态添加和删除服务器，无任何负面影响； 
- 简化了维护，因为它使我们不必费精力对每个服务器状态进行评估。

<br/><br/>


### 代码示例: 反模式

```javascript
//典型错误1: 保存上传文件在本地服务器上
var multer  = require('multer') // 处理multipart上传的express中间件
var upload = multer({ dest: 'uploads/' })

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {})

//典型错误2: 在本地文件或者内存中，保存授权会话（密码）
var FileStore = require('session-file-store')(session);
app.use(session({
    store: new FileStore(options),
    secret: 'keyboard cat'
}));

//典型错误3: 在全局对象中保存信息
Global.someCacheLike.result = {somedata}
```

<br/><br/>

### 其他博客作者说什么
摘自博客 [Martin Fowler](https://martinfowler.com/bliki/PhoenixServer.html):
> ...某天，我有了启动一个对操作的认证服务的幻想。认证评估将由我和一位同事出现在企业数据中心，并通过一个棒球棒，一个电锯和一把水枪设置关键生产服务器。评估将基于操作团队需要多长时间才能重新运行所有应用程序。这可能是一个愚蠢的幻想，但有一个真正的智慧在这里。而你应该放弃棒球棒，去定期的几乎烧毁你的服务器，这是一个好的做法。服务器应该像凤凰，经常从灰烬中升起...
 
<br/><br/>
