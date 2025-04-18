const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("hello world");
});

app.get('/contact', (req, res) => {
    res.send("contact us");
});

app.listen(2000, () => {
    console.log("Server is running");
});
