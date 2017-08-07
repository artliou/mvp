var twilio = require('twilio');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
/**
* Controllers
* Hold all functions for our routes
***/

/***
Server Get HTTP Request w/Twilio API that receives a message from client phone
***/
// Use Promises to send message & save to DB
// app.post('/sms', function(req, res) {
//   var twilio = require('twilio');
//   var twiml = new MessagingResponse();
//   const body = 'One moment, we\'re processing your text';
//   twiml.message(body);
  // db.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  // console.log(data);
  //     res.json(data);
  // res.writeHead(200, { 'Content-Type': 'text/xml' })
  // res.end(twiml.toString());
  //   }
  // });
// });

// module.exports = {

//   sms: {
//     get: function(req, res) {
//       models.messages.get(function(err, results) {
//         if (err) { /* do something */ }
//         res.json(results);
//       });
//     },
//     post: function(req, res) {
//       var params = [req.body.message, req.body.username, req.body.roomname];
//       models.messages.post(params, function(err, results) {
//         if (err) { /* do something */ }
//         res.sendStatus(201);
//       });
//     }
//   },
// };

