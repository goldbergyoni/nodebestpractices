# 修改默认会话中间件设置

<br/><br/>


### 一段解释

许多流行的会话中间件并没有应用最实用，最安全，开箱即用的cookie设置。通过调整默认的设置，可以减少受攻击（会话劫持和会话识别等）的威胁，从而为用户和应用程序提供了更大的保护。

最常见的默认设置是会话`名称`-在`express-session`中，它是`connect.sid`。攻击者可以使用此信息来标识web应用程序的基础框架以及模块特定的漏洞。将此值更改为默认以外的值将更难确定正在使用的会话机制。

同时在`express-session`中，选项`cookie.secure`设置为默认值false。将它更改为true将限制cookie的传输仅限于https, 从而提供了免于中间人（man-in-the-middle）这类攻击的安全性。

<br/><br/>


### 代码示例: 设置安全的cookie配置

 ```javascript
// 使用express会话中间件
app.use(session({  
  secret: 'youruniquesecret', // 存储在cookie中，并在签名的会话id中所使用的秘密字符串
  name: 'youruniquename', // 设置唯一的名称以删除默认的connect.sid
  cookie: {
    httpOnly: true, // minimize risk of XSS attacks by restricting the client from reading the cookie
    secure: true, // 尽通过https传送cookie
    maxAge: 60000*60*24 // 通过毫秒设置cookie超时时间
  }
}));
```

<br/><br/>


### 其他博主怎么说

摘自[NodeSource blog](http://nodesource.com/blog/nine-security-tips-to-keep-express-from-getting-pwned/): 
> ...Express的默认cookie设置不是高度安全。对于应用程序及其用户来说，可以对它们进行配置以增强安全性。*

<br/><br/>
