# Wrap common utilities as NPM packages

<br/><br/>


### One Paragraph Explainer
Once you start growing and have different components on different servers which consumes similar utilities, you should start managing the dependencies - how can you keep 1 copy of your utility code and let multiple consumer components use and deploy it? well, there is a framework for that, it's called NPM... Start by wrapping 3rd party utility packages with your own code to make it easily replaceable in the future and publish your own code as private NPM package. Now, all your code base can import that code and benefit free dependency management framework. It's possible to publish NPM packages for your own private use without sharing it publicly using private modules, private registey or [local NPM packages](https://medium.com/@arnaudrinquin/build-modular-application-with-npm-local-modules-dfc5ff047bcc)


<br/><br/>


 ### NPM as the engine for reusable components
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/structurebycomponents.PNG "Structuring solution by components")

 <br/><br/> 

### Example: wrapping your logger as NPM package
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/structurebyroles.PNG "Structuring solution by technical roles")
