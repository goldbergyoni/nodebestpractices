# Layer your app, keep Express within its boundaries

<br/><br/>

### Separate component code into 3 layers

The root of every component should hold 3 folders that represent common concerns and stages of every transaction:

```bash
my-system
├─ apps (components)
│  ├─ component-a
   │  ├─ entry-points
   │  │  ├─ api # controller comes here
   │  │  ├─ message-queue # message consumer comes here
   │  ├─ domain # features and flows: DTO, services, logic
   │  ├─ data-access # DB calls w/o ORM
```

**- Entry-points -** This is where requests and flows start, whether it's REST API, Graph, message queue, scheduled jobs or any other _door_ to the application. This layer's responsibility is quite minimal - adapt the payload (e.g., JSON) to the app format, including first validation, call the logic/domain layer and return a response. This is typically achieved with a few lines of code. Many use the term "controller" for this type of code also technically, its just an adapter

**- Domain -** This is where the app flows, logic and data live. This layer accepts protocol-agnostic payload, plain JavaScript object and returns one as well. Technically it contains common code objects like services, dto/entities, and clients that call external services. It also typically calls the data-access layer to retrieve or persist information

**- Data-access -** This is where the app holds code that interacts with DB. Ideally, it should externalize an interface that returns/gets plain JavaScript object that is DB agnostic (also known as the repository-pattern). This layer involves DB helper utilities like query builders, ORMs, DB drivers and other implementation libraries

**What is the merit? -** When having flexible infrastructure that allows adding more API calls and DB queries promptly, a developer can code a feature faster by focusing on the domain folder. In other words, less time is spent on technical activities and more on activities with added value. This is a ubiquitous trait that is at the heart of most software architectures like DDD, hexagonal, clean-architecture and others. On top of this, when the domain layer is not aware of any edge protocol, it can serve any client and not only HTTP calls

**Why not MVC or clean architecture? -** The 3-tier pattern strikes a great balance between achieving the separation goal while still keeping the structure simple. It also lacks abstractions - each tier represents real-world physical tier where every request will visit. On the other hand, MVC is a simplistic pattern where the letters VC represent a few lines of a code only and the letter M means anything else. Clean architecture is architecture with high level of abstractions that can achieve even greater separation but the price tag is unproportionally higher due to the increased complexity