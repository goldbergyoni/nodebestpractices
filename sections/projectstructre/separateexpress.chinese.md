# Express的 '应用' 和 '服务' 分离

<br/><br/>


### 一段解释

最新的Express生成器有一个值得保留的伟大实践--API声明与网络相关配置（端口、协议等）是分开的。这样就可以在不执行网络调用的情况下对API进行在线测试，它所带来的好处是：快速执行测试操作和获取代码覆盖率。它还允许在灵活多样的网络条件下部署相同的API。额外好处：更好的关注点分离和更清晰的代码结构。

<br/><br/>

### 代码示例：API声明应该在 app.js 文件里面

```javascript
var app = express();
app.use(bodyParser.json());
app.use("/api/events", events.API);
app.use("/api/forms", forms);

```

<br/><br/>

### 代码示例: 服务器网络声明，应该在 /bin/www 文件里面

```javascript
var app = require('../app');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

```


### 示例代码: 使用超快的流行的测试包在线测试你的代码

```javascript
const app = express();

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'tobi' });
});

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
````
