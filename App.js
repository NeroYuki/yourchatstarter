const express = require('express');
const Wit = require('node-wit');

const app = express();

// const client = new Wit({
//     accessToken: process.env.WIT_ACCESS_TOKEN,
// });

const port = process.env.PORT || 5000;

app.get('/home', (req, res) => {
    res.send("1a7b9e15a500a9752c55ead85bea1863");
});

app.get('/nganluong_d1bb2fac9ffe5e381d70ee797d5b07ad.html', (req, res) => {
    res.sendfile("./nganluong_d1bb2fac9ffe5e381d70ee797d5b07ad.html")
});
    
app.listen(port, () => {
    console.log(`Express running → PORT ${port}`);
});
