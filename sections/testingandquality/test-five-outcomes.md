# Test the five potential outcomes

<br/><br/>

### One Paragraph Explainer

When planning your tests, consider covering the five typical flow's outputs. When your test is triggering some action (e.g., API call), a reaction is happening, something meaningful occurs and calls for testing. Note that we don't care about how things work. Our focus is on outcomes, things that are noticeable from the outside and might affect the user. These outcomes/reactions can be put in 5 categories:

• Response - the test invokes an action (e.g., via API) and gets a response. It's now concerned with checking the response data correctness, schema, and HTTP status.

• A new state - after invoking an action, some data is probably modified. For example, when updating a user, it may be that the new data was not saved. Commonly and mistakenly, testers check only the response and not whether the data is updated correctly. Testing data and databases raises multiple interesting challenges that are greatly covered below in the 📗 section 'Dealing with data'.

• External calls - after invoking an action, the app might call an external component via HTTP or any other transport. For example, a call to send SMS, email or charge a credit card. Anything that goes outside and might affect the user - should be tested. Testing integrations is a broad topic which is discussed in the 📗 section 'Testing integrations' below.

• Message queues - the outcome of a flow might be a message in a queue. In our example application, once a new order was saved, the app puts a message in some MQ product. Now other components can consume this message and continue the flow. This is very similar to testing integrations, only working with message queues is different technically and tricky. The 📗 section 'Message Queues' below delve into this topic.

• Observability - Some things must be monitored, like errors or remarkable business events. When a transaction fails, not only we expect the right response but also correct error handling and proper logging/metrics. This information goes directly to a very important user - The ops user (i.e., production SRE/admin). Testing error handler is not very straighforward - Many types of errors might get thrown, some errors should lead to process crash, and there are many other corners to cover. We plan to write the 📗 section on 'Observability and errors' soon

<br/><br/>

### Example: The backend testing checklist

![The backend testing checklist](../../assets/images/backend-testing-checklist.png "The backend testing checklist")
