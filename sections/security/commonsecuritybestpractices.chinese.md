[✔]: ../../assets/images/checkbox-small-blue.png

# Node.js常见的安全最佳实践

通用安全指南部分包含在许多框架和约定中标准化的最佳实践, 例如, 使用ssl/tls运行应用程序应该是每个设置中遵循的通用准则和约定, 以实现出色的安全性。

## ![✔] 使用SSL/TLS加密客户端-服务器连接

**TL;DR:** 在[免费SSL/TLS证书](https://letsencrypt.org/)和配置SSL/TLS方便的年代, 你不再需要权衡使用安全服务器的优点和缺点, 因为相较于纯http, 安全和对现代技术和信任的支持显然超过缺点(比如需要的最小开销)。

**否则:** 攻击者可以执行中间人攻击, 监视用户的行为, 并在未加密连接时执行更多恶意操作

🔗 [**更多: 运行一个安全的Node.js服务**](secureserver.chinese.md)

<br/><br/>

## ![✔] 安全地比较secret values和哈希

**TL;DR:** 当比较secret values和哈希(比如，HMAC digests), 您应该使用[`crypto.timingSafeEqual(a, b)`](https://nodejs.org/dist/latest-v9.x/docs/api/crypto.html#crypto_crypto_timingsafeequal_a_b), 这个方法Node自从v6.6.0就开始提供。此方法比较两个给定的对象, 假如数据不匹配，它会不断比较。默认相等的比较方法只需在字符不匹配后返回, 从而允许基于操作长度的计时攻击。

**否则:** 使用默认相等比较运算符, 您可能会由于比较两个对象所花费的时间而公开关键信息

<br/><br/>

## ![✔] 使用Node.js产生随机字符串

**TL;DR:** 使用自定义函数, 为令牌和其他安全敏感用例生成伪随机字符串, 实际上可能并不会产生像您想象的那样的随机数据, 从而使应用程序容易受到加密攻击。当您必须产生安全的随机字符串时，使用方法[`crypto.RandomBytes(size, [callback])`](https://nodejs.org/dist/latest-v9.x/docs/api/crypto.html#crypto_crypto_randombytes_size_callback), 它使用了系统提供的有效的一致性。

**否则:** 在没有安全的加密方法的情况下生成伪随机字符串时, 攻击者可能会预测并重现生成的结果, 从而使应用程序不安全

<br/><br/>

接着, 下面我们列出了OWASP项目中的一些重要建议。

## ![✔] OWASP A2: 脆弱的身份认证（Broken Authentication）

- 对重要的服务和账号要求MFA/2FA
- 频繁更换密码和access keys, 包含SSH keys
- 为ops和应用程序内用户管理应用强密码策略([🔗 OWASP password recommendation](https://www.owasp.org/index.php/Authentication_Cheat_Sheet#Implement_Proper_Password_Strength_Controls.22))
- 不要使用任何默认凭据(credentials)来交付或部署应用程序, 尤其是对于管理员用户或您所依赖的外部服务
- 仅使用标准的授权方法，比如OAuth, OpenID等等 - **avoid** basic authentication
- 验证频率限制: 不允许在区间_Y_内超过_X_次的登录请求(包括密码恢复, 等等)
- 当登录失败时，不要让用户知道是否用户名或者密码验证错误，仅返回一个通用鉴权失败错误
- 考虑使用集中式的用户管理系统, 以避免管理一个员工多个帐户 (例如,GitHub、AWS、Jenkins等), 并可以受益于经过严苛测试的用户管理系统

## ![✔] OWASP A5:  脆弱的访问控制（Broken access control）

- 遵守[principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege)  -  每个组件和DevOps人员只能访问必要的信息和资源
- **从不** 在console/root(全部权限)下工作, 除了用于账号管理
- 通过一个角色/服务账号运行所以实例/容器
- 将权限分配给组, 而不是用户。这将使权限管理在大多数情况下更容易和更透明

## ![✔] OWASP A6: 错误的安全配置（Security Misconfiguration）

- 对于生产环境内部的访问, 仅通过内部网络, 使用SSH或其他方式完成, 并_从不_暴露内部服务
- 限制内部网络访问 - 显式设置哪些资源可以访问其他资源 (例如, 网络策略或子网)
- 如果使用cookie, 请将其配置为仅通过SSL发送的"secured"模式
- 如果使用cookie, 则仅配置它为"same site", 因此只有来自同一域名的请求才会返回指定的cookie
- 如果使用cookie, 更倾向"http only"配置, 以防止浏览器端JavaScript代码访问cookie
- 通过严格和限制的访问规则保护每个VPC
- 使用某一个标准安全威胁建模(如STRIDE或DREAD)确定威胁的优先级
- 使用HTTP(S)和TCP负载平衡防止DDoS攻击
- 由专门机构定期进行渗透测试

## ![✔] OWASP A3: 暴露敏感数据

- 仅接受SSL/TLS连接, 使用headers加强Strict-Transport-Security
- 将网络划分为多个段 (即子网), 并确保每个节点具有非必要的网络访问权限
- 对所有不需要互联网访问的服务/实例进行分组, 并明确禁止任何传出连接(又名专用子网)
- 存储机密信息通过vault产品，比如AWS KMS, HashiCorp Vault或者Google Cloud KMS
- 使用metadata锁定敏感实例metadata
- 在数据离开物理边界时对传输中的数据进行加密
- 不在日志语句中包含机密信息
- 避免在前端显示密码, 在后端采取必要措施, 永远不要以明文形式存储敏感信息

## ![✔] OWASP A9: 使用具有已知安全漏洞的组件

- 扫描docker镜像中的已知漏洞(使用Docker和其他供应商提供的扫描服务)
- 启用实例(机器)的自动修补和升级, 以避免运行缺少安全修补程序的旧操作系统
- 为用户提供'id', 'access'和'refresh' token，以便access token是short-lived的，并通过refresh token进行更新
- 使用服务，比如AWS CloudTrail，记录和审核对云和管理服务的每个API调用(例如，谁删除了S3 bucket?)
- 运行云提供商的安全检查程序(例如AWS security trust advisor)

## ![✔] OWASP A10: 不充分的日志和监控

- 对异常的，或可疑的审核事件（如用户登录、新用户创建、权限更改等待）发出警报

- 对非正常数量的登录失败（或类似的操作，如忘记密码）发出警报

- 在每个数据库记录启动更新时，包含时间和用户名

## ![✔] OWASP A7: Cross-Site-Scripting (XSS)

- 通知浏览器仅仅从同一域名加载资源，并使用Content-Security-Policy的http请求头

<br/><br/><br/>
