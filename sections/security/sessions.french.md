# Modify the default session middleware settings

<br/><br/>


### One Paragraph Explainer

Many popular session middlewares do not apply best practice/secure cookie settings out of the box. Tweaking these settings from the defaults offers greater protection for both the user and the application, by reducing the threat of attacks such as session hijacking and session identification.

The most common setting left to default is the session `name` - in `express-session` this is `connect.sid`. An attacker can use this information to identify the underlying framework of the web application as well as module specific vulnerabilities. Changing this value to something other than the default will make it harder to determine what session mechanism is being used.

Also in `express-session`, the option `cookie.secure` is set to false as the default value. Changing this to true will restrict transport of the cookie to https only which provides safety from man-in-the-middle type attacks

<br/><br/>


### Code example: Setting secure cookie settings

```javascript
// using the express session middleware
app.use(session({  
  secret: 'youruniquesecret', // secret string used in the signing of the session ID that is stored in the cookie
  name: 'youruniquename', // set a unique name to remove the default connect.sid
  cookie: {
    httpOnly: true, // minimize risk of XSS attacks by restricting the client from reading the cookie
    secure: true, // only send cookie over https
    maxAge: 60000*60*24 // set cookie expiry length in ms
  }
}));
```

<br/><br/>


### What Other Bloggers Say

From the [NodeSource blog](http://nodesource.com/blog/nine-security-tips-to-keep-express-from-getting-pwned/): 
> ...Express has default cookie settings that aren’t highly secure. They can be manually tightened to enhance security - for both an application and its user.*

<br/><br/>
