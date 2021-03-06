const express = require('express');
const bodyParser = require('body-parser');
const app = express();


console.log('Hello World');

app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get('/', (req, res) => {
    const path = __dirname + '/views/index.html';
    res.sendFile(path);
});



app.get('/json', (req, res) => {
  let response = 'Hello json';
  const secret = process.env.MESSAGE_STYLE;
  if(secret === "uppercase") response = response.toLocaleUpperCase();

  res.json({"message": response});
});
  

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({time: req.time});
});

app.get('/:word/echo', (req, res) => {
  res.json({"echo": req.params.word});
});

app.route('/name')
.get((req, res) => {
  res.json({'name': `${req.query.first} ${req.query.last}`});
})
.post((req, res) => {
  res.json({"name": `${req.body.first} ${req.body.last}`});
});































 module.exports = app;
