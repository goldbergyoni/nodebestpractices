# 对于密码，避免使用Node.js的Crypto库，使用Bcrypt

### 一段解释

当存储用户密码的时候，建议使用[bcrypt npm module](https://www.npmjs.com/package/bcrypt)提供的自适应哈希算法bcrypt，而不是使用Node.js的crypto模块。由于`Math.random()`的可预测性，它也不应该作为密码或者令牌生成的一部分。

相较于JavaScript实现，`bcrypt`或者类似的模块应该被使用。当使用`bcrypt`时，可以指定相应数量的回合数（rounds），以提供安全的哈希。这将设置work factor或者用于数据处理的回合次数，而更多的哈希回合次数导致更安全的哈希值（尽管这是CPU耗时的代价）。哈希回合（hashing rounds）的引入意味着蛮力因子会显著降低, 因此密码破解会减慢, 从而增加产生一次尝试所需的时间。

### 代码示例

```javascript
// 使用10个哈希回合异步生成安全密码
bcrypt.hash('myPassword', 10, function(err, hash) {
  // 在用户记录中存储安全哈希
});

// 将提供的密码输入与已保存的哈希进行比较
bcrypt.compare('somePassword', hash, function(err, match) {
  if(match) {
   // 密码匹配
  } else {
   // 密码不匹配
  } 
});
```

### 其他博客作者的说法

摘自博客[Max McCarty](https://dzone.com/articles/nodejs-and-password-storage-with-bcrypt):
> ... 它不只是使用正确的哈希算法。我已经广泛讨论了正确的工具，包括必要的成分"时间"，如何作为密码哈希算法的一部分, 以及它对于试图通过蛮力破解密码的攻击者，意味着什么。
