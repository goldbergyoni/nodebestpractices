# Structure your solution by components
# 使用组件来构建你的解决方案

<br/><br/>

### One Paragraph Explainer
### 一段解释

For medium sized apps and above, monoliths are really bad - having one big software with many dependencies is just hard to reason about and often leads to spaghetti code. Even smart architects — those who are skilled enough to tame the beast and 'modularize' it — spend great mental effort on design, and each change requires carefully evaluating the impact on other dependent objects. The ultimate solution is to develop small software: divide the whole stack into self-contained components that don't share files with others, each constitutes very few files (e.g. API, service, data access, test, etc.) so that it's very easy to reason about it. Some may call this 'microservices' architecture — it's important to understand that microservices are not a spec which you must follow, but rather a set of principles. You may adopt many principles into a full-blown microservices architecture or adopt only a few. Both are good as long as you keep the software complexity low. The very least you should do is create basic borders between components, assign a folder in your project root for each business component and make it self-contained - other components are allowed to consume its functionality only through its public interface or API. This is the foundation for keeping your components simple, avoid dependency hell and pave the way to full-blown microservices in the future once your app grows.

一个拥有很多依赖的大型软件程序是很难理解清楚的，而且通常会导致面条代码（复杂、混乱、难以理解的代码），
这对于中型甚至更大的应用程序而言，这种庞然大物式的结构是非常糟糕的。
即使是那些能力强大到足以驯服野兽并且将其『模块化』的聪明的建筑师，也需要在设计上花费很大的力气，
每一次变更都要非常小心翼翼的评估对其他依赖事务的影响。
终极解决方案就是开发更小的软件程序：将整个应用程序拆分成自给自足的组件，这些组件不会共享文件，每个
组件由很少的几个文件构成（比如API，服务，数据访问，测试等组件）。如此一来，应用程序就非常容易理解了。
有些人可能把这叫做『微服务』架构，需要理解的很重要的一点就是：微服务不是你必须要遵循的规范，而是应该把它
当成一套原则。你可能使用很多也可能使用很少的原则在一个完完全全的微服务架构中。不管十多还是少，都是有助于降低
软件复杂度的。你至少应该做到划清组件间基本的界限，在项目根目录下为每一个业务组件创建一个文件夹，然后让每个
组件能够自给自足。所谓的自给自足是指：其他组件想要调用该组件的方法只能通过其暴露出来的公共接口或者API。
这就是保持组件简单、避免依赖地域、为程序将来成长为完完全全微服务架构铺平道路的基础。
<br/><br/>

### Blog Quote: "Scaling requires scaling of the entire application"
### 博客引用：『需要缩放整个应用程序的缩放』

 From the blog MartinFowler.com
 来自博客MartinFowler.com

> Monolithic applications can be successful, but increasingly people are feeling frustrations with them - especially as more applications are being deployed to the cloud. Change cycles are tied together - a change made to a small part of the application requires the entire monolith to be rebuilt and deployed. Over time it's often hard to keep a good modular structure, making it harder to keep changes that ought to only affect one module within that module. Scaling requires scaling of the entire application rather than parts of it that require greater resource.

> 虽然单体应用程序可以做得很成功，但是人们会日益对他们产生挫败感，特别是随着越来越多的应用程序被
> 部署到云端的时候。修改变更环环相扣：一个很小的改动需要把整个应用程序重新构建然后部署。久而久之，这样通常很难保持一个好的模块化结构，

<br/><br/>

### Blog Quote: "So what does the architecture of your application scream?"

 From the blog [uncle-bob](https://8thlight.com/blog/uncle-bob/2011/09/30/Screaming-Architecture.html) 

> ...if you were looking at the architecture of a library, you’d likely see a grand entrance, an area for check-in-out clerks, reading areas, small conference rooms, and gallery after gallery capable of holding bookshelves for all the books in the library. That architecture would scream: Library.<br/>

So what does the architecture of your application scream? When you look at the top level directory structure, and the source files in the highest level package; do they scream: Health Care System, or Accounting System, or Inventory Management System? Or do they scream: Rails, or Spring/Hibernate, or ASP?.

<br/><br/>

### Good: Structure your solution by self-contained components

![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/structurebycomponents.PNG "Structuring solution by components")

<br/><br/>

### Bad: Group your files by technical role

![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/structurebyroles.PNG "Structuring solution by technical roles")
