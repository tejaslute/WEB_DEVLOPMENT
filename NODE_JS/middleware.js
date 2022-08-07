const express = require('express');
const app = express();
app.get('/', (req, res) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    res.send("Home Page ");

})

app.get('/about', (req, res) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    res.send("About Page ");

})

app.listen(5000);