# At the very least, write API testing

<br/><br/>


### One Paragraph Explainer

Testing theory, fastest/isolated/tdd -> desired goal, however most expensive and exausting - mocking, 1by1. If you can afford - do it. However the most
critical layer are broader level testing that are realistic and coverage. For example, order service has few layers, cover all with single API request. In 
idyliic world, have both, practically should you choose one or have limited resource -> start with those that cover your system


<br/><br/>


### Code Example – API testing with supertest

```javascript
code here
```

<br/><br/>

### Code Example – unit test with Mocha, Chai and Sinon

```javascript
code here
```

<br/<br/>
 ### Image title
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/testingpyramid.png "The testing pyramid")

<br/><br/>

### Blog Quote: "Title"
 From the blog pouchdb.com, ranked 11 for the keywords “Node Promises”
 
 > …This testing pyramid is a combination of one I got from Martin Fowler’s blog and one I got from the Google Testing blog.
As indicated here, the pyramid shows from bottom to top: Unit, Integration, E2E. As you move up the pyramid the tests get slower to write/run and more expensive (in terms of time and resources) to run/maintain. It’s meant to indicate that you should spend more of your time on unit tests due to these factors.
One thing that it doesn’t show though is that as you move up the pyramid, the confidence quotient of each form of testing increases. You get more bang for your buck. So while E2E tests may be slower and more expensive than unit tests, they bring you much more confidence that your application is working as intended.

 <br/><br/>
 

 
<br/><br/>
