# 锁定依赖版本

<br/><br/>


### 一段解释



您的代码依赖于许多外部包，假设它“需要”和使用momentjs-2.1.4，默认情况下，当布署到生产中时，npm可能会获得momentjs 2.1.5，但不幸的是，这将带来一些新的bug。使用npm配置文件和设置 ```–save-exact=true``` 指示npm去完成安装，以便下次运行 ```npm install```（在生产或在Docker容器中，您计划将其用于测试）时，将获取相同的依赖版本。另一种可选择受欢迎的方法是使用一个shrinkwrap文件（很容易使用npm生成）指出应该安装哪些包和版本，这样就不需要环境来获取新版本了。

* **更新:** 在npm5中，使用.shrinkwrap依赖项会被自动锁定。Yarn，一个新兴的包管理器，默认情况下也会锁定依赖项。

<br/><br/>


### 代码示例: .npmrc文件指示npm使用精确的版本

```
// 在项目目录上保存这个为.npmrc 文件
save-exact:true
```

<br/><br/>

### 代码示例: shirnkwrap.json文件获取准确的依赖关系树

```javascript
{
    "name": "A",
    "dependencies": {
        "B": {
            "version": "0.0.1",
            "dependencies": {
                "C": { 
                    "version": "0.1.0"
                }
            }
        }
    }
}
```

<br/><br/>

### 代码示例: npm5依赖锁文件 - package.json

```javascript
{
    "name": "package-name",
    "version": "1.0.0",
    "lockfileVersion": 1,
    "dependencies": {
        "cacache": {
            "version": "9.2.6",
            "resolved": "https://registry.npmjs.org/cacache/-/cacache-9.2.6.tgz",
            "integrity": "sha512-YK0Z5Np5t755edPL6gfdCeGxtU0rcW/DBhYhYVDckT+7AFkCCtedf2zru5NRbBLFk6e7Agi/RaqTOAfiaipUfg=="
        },
        "duplexify": {
            "version": "3.5.0",
            "resolved": "https://registry.npmjs.org/duplexify/-/duplexify-3.5.0.tgz",
            "integrity": "sha1-GqdzAC4VeEV+nZ1KULDMquvL1gQ=",
            "dependencies": {
                "end-of-stream": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.0.0.tgz",
                    "integrity": "sha1-1FlucCc0qT5A6a+GQxnqvZn/Lw4="
                }
            }
        }
    }
}
```
