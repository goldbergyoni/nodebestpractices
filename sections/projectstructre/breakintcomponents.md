# Structure your solution by components

<br/><br/>

### One Paragraph Explainer

For medium sized apps and above, *non-modular* monoliths are really bad - having one big software with 'spaghetti' of dependencies is just hard to reason about. The ultimate solution is to develop smaller software: divide the whole stack into self-contained components that don't share files with others, each is a standalone logical app (e.g. has its own API, service, data access, test, etc.) so that onboarding into it and changing the code is much easier than dealing with the whole system. Some may call this 'microservices' architecture — it's important to understand that microservices are not a spec which you must follow, but rather a set of principles. You may adopt many principles into a full-blown microservices architecture or adopt only a few. The very least you should do is create basic borders between components, assign a folder or repository in your system root for each business component and make it self-contained. Other components are allowed to consume its functionality only through its public interface or API. This is the foundation for keeping your components simple, avoid dependency hell and pave the way to full-blown microservices in the future once your app grows

<br/><br/>

### Blog Quote: "Scaling requires scaling of the entire application"

 From the blog [MartinFowler.com](https://martinfowler.com/articles/microservices.html)

> Monolithic applications can be successful, but increasingly people are feeling frustrations with them - especially as more applications are being deployed to the cloud. Change cycles are tied together - a change made to a small part of the application requires the entire monolith to be rebuilt and deployed. Over time it's often hard to keep a good modular structure, making it harder to keep changes that ought to only affect one module within that module. Scaling requires scaling of the entire application rather than parts of it that require greater resource.

<br/><br/>

### Blog Quote: "So what does the architecture of your application scream?"

 From the blog [uncle-bob](https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html) 

> ...if you were looking at the architecture of a library, you’d likely see a grand entrance, an area for check-in-out clerks, reading areas, small conference rooms, and gallery after gallery capable of holding bookshelves for all the books in the library. That architecture would scream: Library.<br/>

So what does the architecture of your application scream? When you look at the top level directory structure, and the source files in the highest level package; do they scream: Health Care System, or Accounting System, or Inventory Management System? Or do they scream: Rails, or Spring/Hibernate, or ASP?.

<br/><br/>

### Good: Structure your solution by self-contained components

```bash
my-system
├─ apps (components)
│  ├─ orders
│  │ ├─ package.json
│  │ ├─ api
│  │ ├─ domain
│  │ ├─ data-access
│  ├─ users
│  ├─ payments
├─ libraries (generic cross-component functionality)
│  ├─ logger
│  ├─ authenticator
```


<br/><br/>

### Bad: Group your files by technical role

```bash
my-system
├─ controllers
│  ├─ user-controller.js
│  ├─ order-controller.js
│  ├─ payment-controller.js
├─ services
│  ├─ user-service.js
│  ├─ order-service.js
│  ├─ payment-service.js
├─ models
│  ├─ user-model.js
│  ├─ order-model.js
│  ├─ payment-model.js
```