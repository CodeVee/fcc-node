var express = require('express');
var app = express();


console.log('Hello World');

app.use('/public', express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get('/', function (req, res) {
    const path = __dirname + '/views/index.html';
    res.sendFile(path);
})



app.get('/json', function (req, res) {
  let response = "Hello json";
  const secret = process.env.MESSAGE_STYLE;
  if(secret === "uppercase") response = response.toLocaleUpperCase();

  res.json({"message": response});
})
  
































 module.exports = app;
