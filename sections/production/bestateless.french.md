# Be stateless, kill your Servers almost every day

<br/><br/>

### One Paragraph Explainer

Have you ever encountered a severe production issue where one server was missing some piece of configuration or data? That is probably due to some unnecessary dependency on some local asset that is not part of the deployment. Many successful products treat servers like a phoenix bird – it dies and is reborn periodically without any damage. In other words, a server is just a piece of hardware that executes your code for some time and is replaced after that.
This approach

- allows scaling by adding and removing servers dynamically without any side-effects.
- simplifies the maintenance as it frees our mind from evaluating each server state.

<br/><br/>

### Code example: anti-patterns

```javascript
// Typical mistake 1: saving uploaded files locally on a server
const multer = require('multer'); // express middleware for handling multipart uploads
const upload = multer({ dest: 'uploads/' });

app.post('/photos/upload', upload.array('photos', 12), (req, res, next) => {});

// Typical mistake 2: storing authentication sessions (passport) in a local file or memory
const FileStore = require('session-file-store')(session);
app.use(session({
    store: new FileStore(options),
    secret: 'keyboard cat'
}));

// Typical mistake 3: storing information on the global object
Global.someCacheLike.result = { somedata };
```

<br/><br/>

### What Other Bloggers Say

From the blog [Martin Fowler](https://martinfowler.com/bliki/PhoenixServer.html):
> ...One day I had this fantasy of starting a certification service for operations. The certification assessment would consist of a colleague and I turning up at the corporate data center and setting about critical production servers with a baseball bat, a chainsaw, and a water pistol. The assessment would be based on how long it would take for the operations team to get all the applications up and running again. This may be a daft fantasy, but there’s a nugget of wisdom here. While you should forego the baseball bats, it is a good idea to virtually burn down your servers at regular intervals. A server should be like a phoenix, regularly rising from the ashes...

<br/><br/>
