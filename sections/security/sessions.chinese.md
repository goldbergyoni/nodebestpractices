# 修改session中间件设置

<br/><br/>


### 一段解释

许多流行的会话中间件并没有应用开箱即用的最佳实践/安全 cookie 设置。 通过减少会话劫持和会话识别等攻击的威胁，将默认设置中调整这些设置可为用户和应用程序提供更好的保护。

最常见的默认设置是会话`name` - 在`express-session` 中这是`connect.sid`。 攻击者可以使用此信息来识别 Web 应用程序的底层框架以及特定于模块的漏洞。 将此值更改为默认值以外的值将使确定正在使用的会话机制变得更加困难。

同样在 `express-session` 中，选项 `cookie.secure` 被设置为 false 作为默认值。 将此更改为 true 会将 cookie 的传输限制为仅 https ，从而提供免受中间人类型攻击的安全性
<br/><br/>


### 代码示例：设置安全 cookie 配置

```javascript
// 使用express会话中间件
app.use(session({
  secret: 'youruniquesecret', // 对存储在 cookie 中的会话 ID 进行签名的密码字符串
  name: 'youruniquename', // 设置一个唯一的名称以移除默认的connect.sid
  cookie: {
    httpOnly: true, // 通过限制客户端读取 cookie 来最小化 XSS 攻击的风险
    secure: true, // 只通过 https 发送 cookie
    maxAge: 60000*60*24 // 以毫秒为单位设置 cookie 过期时间
  }
}));
```

<br/><br/>


### 其他博主怎么说

来自 [NodeSource 博客](http://nodesource.com/blog/nine-security-tips-to-keep-express-from-getting-pwned/)：
> ...Express 的默认 cookie 设置不是很安全。它们可以手动收紧以增强安全性 - 对于应用程序及其用户。*

<br/><br/>
