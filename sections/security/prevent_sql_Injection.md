# Prevent Sql Injection

SQL injection consists of injection of a partial or complete SQL query via user input. It can read sensitive information or be destructive as well.

Take the following example:
```
select title, author from books where id=$id
```
In this example $id is coming from the user - what if the user enters 2 or 1=1? The query becomes the following:
```
select title, author from books where id=2 or 1=1
```

The easiest way to defend against these kind of attacks is to use parameterized queries or prepared statements.

If you are using PostgreSQL from Node.js then you probably using the node-postgres module. To create a parameterized query all you need to do is"
```
var q = 'SELECT name FROM books WHERE id = $1';
client.query(q, ['3'], function(err, result) {});
```

Use the open-source [sqlmap](http://sqlmap.org/) tool to detect SQL injection vulnerabilities in your app.
