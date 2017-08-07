// var controller = require('./controllers.js');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
// router.get('/sms', controller.sms.get);
// router.post('/sms', controller.sms.post);

// router.get('/users', controller.users.get);
// router.post('/users', controller.users.post);

module.exports = router;

// Map routes to controller functions - from Twilio
module.exports = function(router) {
  router.get('/error', function(req, resp) {
    throw new Error('Derp. An error occurred.');
  });
};