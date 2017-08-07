// var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

// DB
var db = require('../db/db.js');

// Router
var router = require('./router.js');

// Twilio
var twilio = require('twilio');

var port = process.env.PORT || 3000;
var app = express();

// Set up our routes
app.use('/', router);

app.use(bodyParser.json());
// Parse incoming form-encoded HTTP bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../node_modules'));

// Initiali Tutorial Code
app.post('/sms', function(req, res) {
  var twilio = require('twilio');
  var twiml = new MessagingResponse();
  const body = 'One moment, we\'re processing your text';
  twiml.message(body);
  res.writeHead(200, { 'Content-Type': 'text/xml' })
  res.end(twiml.toString());
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});

// From Twilio Sample API Docs
// http.createServer(app).listen(port, function() {
//   console.log(`Express server listening on port ${port}`);
// });

module.exports = app;
