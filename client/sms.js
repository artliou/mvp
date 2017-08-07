var config = require('../config.js');
var twilio = require('twilio');

// Import Info
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
var receivingNum = process.env.MY_PHONE_NUMBER;
var sendingNum = process.env.TWILIO_NUMBER;

// console.log("Twilio Keys:", accountSid, authToken);

//require the Twilio module and create a REST client
var client = new twilio(accountSid, authToken);

// module.exports.sendSms = function(to, message) {
//   var client = require('twilio')(accountSid, authToken);
//   console.log("Client", client.messages.create());
//   return client.messages
//     .create({
//       body: message,
//       to: to,
//       from: sendingNum,
//     }).then(function(data) {
//       console.log('Mesage Sent');
//     }).catch(function(err) {
//       console.error('Error', err);
//     });
// };

// Tutorial Code
client.messages.create({
  from: process.env.MY_PHONE_NUMBER,
  to: process.env.TWILIO_NUMBER,
  body: 'Welcome to deliveryNotifications!'
  // url:
})
  .then((err, message) => {
    if (err) {
      console.log('Error', err);
    } else {
      console.log(message.sid);
    }
  });
