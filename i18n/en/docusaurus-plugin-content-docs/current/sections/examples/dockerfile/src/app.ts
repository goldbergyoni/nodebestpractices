import * as express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Navigate to http://localhost:3000');
});
