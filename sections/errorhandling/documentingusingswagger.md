# Document API errors using Swagger or GraphQL

### One Paragraph Explainer

REST APIs return results using HTTP status codes, it’s absolutely required for the API user to be aware not only about the API schema but also about potential errors – the caller may then catch an error and tactfully handle it. For example, your API documentation might state in advance that HTTP status 409 is returned when the customer name already exists (assuming the API register new users) so the caller can correspondingly render the best UX for the given situation. Swagger is a standard that defines the schema of API documentation offering an eco-system of tools that allow creating documentation easily online, see print screens below

If you have already adopted GraphQL for your API endpoints, your schema already contains strict guarantees as to what errors should look like ([outlined in the spec](https://facebook.github.io/graphql/June2018/#sec-Errors)) and how they should be handled by your client-side tooling. In addition, you can also supplement them with comment-based documentation.

### GraphQL Error Example

> This example uses [SWAPI](https://graphql.org/swapi-graphql), the Star Wars API.

```graphql
# should fail because id is not valid
{
  film(id: "1ZmlsbXM6MQ==") {
    title
  }
}
```

```json
{
  "errors": [
    {
      "message": "No entry in local cache for https://swapi.co/api/films/.../",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "film"
      ]
    }
  ],
  "data": {
    "film": null
  }
}
```

### Blog Quote: "You have to tell your callers what errors can happen"

From the blog Joyent, ranked 1 for the keywords “Node.js logging”

 > We’ve talked about how to handle errors, but when you’re writing a new function, how do you deliver errors to the code that called your function? …If you don’t know what errors can happen or don’t know what they mean, then your program cannot be correct except by accident. So if you’re writing a new function, you have to tell your callers what errors can happen and what they mean…

### Useful Tool: Swagger Online Documentation Creator

![Swagger API Scheme](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/swaggerDoc.png "API error handling")
