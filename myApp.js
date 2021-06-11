var express = require('express');
var app = express();


console.log('Hello World');

app.use('/public', express.static(__dirname + '/public'))

app.get('/', function (req, res) {
    const path = __dirname + '/views/index.html';
    res.sendFile(path);
})
































 module.exports = app;
