# Expose a healthcheck endpoint for dependent systems

<br/><br/>


### One Paragraph Explainer

In a distributed system, transparency regarding instance health is of utmost importance. If a customer action fails because one system in a chain of multiple is unhealthy, it can be very difficult to know where the problem is.

By exposing an endpoint that gives you a picture of the health of the system, a system monitoring application can query all involved systems to find out which ones are unhealthy and what dependent systems may be affected by an outage.

[Adopt a standard schema](https://www.npmjs.com/package/express-physical) for these endpoints across your applications to easily be able to monitor the system as a whole. 