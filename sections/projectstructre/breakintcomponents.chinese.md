# 组件式构建你的解决方案

<br/><br/>


### 一段解释

对于中等规模的应用程序及以上，一个代码库是非常糟糕的 - 一个包含很多依赖的大型软件很难理解，往往导致代码混乱。即使是那些擅长解决负责问题和 "模块化" 的聪明架构师 - 在设计上花费了很大的脑力, 每一个变化都需要仔细评估对其他依赖对象的影响。最终的解决方案是开发小型软件：将整个堆栈划分为独立的组件，这些组件不与其他组件共享文件，每个组件由很少的文件构成（例如API、服务、数据访问、测试等），因此很容易理解它。For medium sized apps and above, monoliths are really bad - a one big software with many dependencies is just hard to reason about and often lead to code spaghetti. Even those smart architects who are skilled to tame the beast and 'modularize' it - spend great mental effort on design and each change requires to carefully evaluate the impact on other dependant objects. The ultimate solution is to develop small software: divide the whole stack into self-contained components that don't share files with others, each constitute very few files (e.g. API, service, data access, test, etc) so that it's very easy to reason about it. Some may call this 'microservices' architecture - it's important to understand that microservices is not a spec which you must follow rather a set of principles. You may adopt many principles into a full-blown microservices architecture or adopt only few. Both are good as long as you keep the software complexity low. The very least you should do is create a basic borders between components, assign a folder in your project root for each business component and make it self contained - other components are allowed to consume its functionality only through its public interface or API. This is the foundation for keeping your components simple, avoid dependencies hell and pave the way to full-blown microservices in the future once your app grows.

<br/><br/>


### Blog Quote: "Scaling requires scaling of the entire application"
 From the blog MartinFowler.com
 
 > Monolithic applications can be successful, but increasingly people are feeling frustrations with them - especially as more applications are being deployed to the cloud . Change cycles are tied together - a change made to a small part of the application, requires the entire monolith to be rebuilt and deployed. Over time it's often hard to keep a good modular structure, making it harder to keep changes that ought to only affect one module within that module. Scaling requires scaling of the entire application rather than parts of it that require greater resource.

 <br/><br/>
 
 ### Good: Structure your solution by self-contained components
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/structurebycomponents.PNG "Structuring solution by components")

 <br/><br/> 

### Bad: Group your files by technical role
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/structurebyroles.PNG "Structuring solution by technical roles")
