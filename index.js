const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Running My TO-DO List')
});

app.listen(port, () => {
    console.log('CRUD Operation on the way!');
})