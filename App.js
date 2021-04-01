const express = require('express');
const Wit = require('node-wit');

const app = express();

// const client = new Wit({
//     accessToken: process.env.WIT_ACCESS_TOKEN,
// });

const port = process.env.PORT || 5000;

app.get('/home', (req, res) => {
    res.send("Hello world");
});
    
app.listen(port, () => {
    console.log(`Express running → PORT ${port}`);
});