# Layer your app

Keep each part of your business logic in a seperate layer, e.g. Express handles web layer, Mongoose handles data access. 
You would end up with this flow in the application without dependencies:
*Client request -> Web layer -> Business layer -> Data layer (mongoose) -> Business layer -> Web layer -> Client request*
As we have already discussed breaking your app into [components rather than trying to modularize it](./breakintcomponents.md), you can now take this further and separate component code into layers: web, services, and DAL as you can see in the image:

![alt text](../../assets/images/structurebycomponents.PNG "Separate component code into layers")

### 1 min explainer: The downside of mixing layers

![alt text](../../assets/images/keepexpressinweb.gif "The downside of mixing layers")

### **Detailed Explanation using Express**

Expressjs is a web framework, you use it for the http handling of your application. The web server piece itself should serve solely as a layer to get data from the user, and pipe it into the application. The application shouldn't be dependent upon anything in the web server, and there shouldn't be anything tying them together, other than the point at which the data is transferred from the web server piece, into the application, and then returned to the web server client. The idea is to keep it doing that not involving into your business logic. That's why it is recommended that you "layer" your app. Once it deals with a request it passes it on to other layer that should know what to do with input data. And later on, the other layer send it back to return some information to the client who requested something (if this is the case).

Ultimately, you probably want all the functions of your node application, to be able to operate on data regardless of the actual source of it. You want to be able to use a test framework as the source of data, maybe you need to mock clients or servers that connect to it, or it connects to. Maybe you might even someday have a completely different layer of accessing it that doesn't even involve a web server.

Express has its own objects (req,res) which hold some of the request info like the user, his permissions, etc. You may get tempted to pass these objects to many of your application objects/classes. Everything works fine but then the product manager asks whether you can invoke your application not only through REST API but also using voice or using a nightly CRON job or as a desktop application - now you're in trouble since your entire app depends on Express objects (if you run CRON job or desktop app, where would you grab Express objects from...). The heart of your app, where your core logic is defined, should be coupled from the channel that invokes the logic. In other words, Express is just a gate to your app, not the app itself, and you want to keep the app flexible for any other gate. You may read more about ports and adapters here or about the DDD principle - 'isolate the domain'.

Credits:
[Bruno Sampaio Pinho](https://github.com/bpinhosilva "@bpinhosilva")
[Hafez](https://github.com/AbdelrahmanHafez "@AbdelrahmanHafez")
[Yoni Goldberg](https://github.com/i0natan "i0natan")