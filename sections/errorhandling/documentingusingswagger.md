# Document API errors using Swagger


### One Paragraph Explainer

REST APIs return results using HTTP status codes, it’s absolutely required for the API user to be aware not only about the API schema but also about potential errors – the caller may then catch an error and tactfully handle it. For example, your API documentation might state in advance that HTTP status 409 is returned when the customer name already exist (assuming the API register new users) so the caller can correspondingly render the best UX for the given situation. Swagger is a standard that defines the schema of API documentation offering an eco-system of tools that allow creating documentation easily online, see print screens below

### Blog Quote: "You have to tell your callers what errors can happen"
From the blog Joyent, ranked 1 for the keywords “Node.js logging”
 
 > We’ve talked about how to handle errors, but when you’re writing a new function, how do you deliver errors to the code that called your function? …If you don’t know what errors can happen or don’t know what they mean, then your program cannot be correct except by accident. So if you’re writing a new function, you have to tell your callers what errors can happen and what they mean…

 
 ### Useful Tool: Swagger Online Documentation Creator
![Swagger API Scheme](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/swaggerDoc.png "API error handling")
