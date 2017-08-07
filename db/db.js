var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.on('openUri', () => {
  console.log('mongoose connection successful');
});

// DB Schema
var smsSchema = mongoose.Schema({
  from: Number,
  to: Number,
  text: String,
  timestamp: {type: Date},
});

var SMS = mongoose.model('SMS', smsSchema);
// DB Model Creation
// Db Functions
// Export

module.exports = db;

// var selectAll = function(callback) {
//   SMS.find({}, function(err, messages) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, messages);
//     }
//   });
// };
//
// module.exports.selectAll = selectAll;
