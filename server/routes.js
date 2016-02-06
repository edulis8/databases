var controllers = require('./controllers');
 // serving and receiving

var router = require('express').Router();


for (var route in controllers) {
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post);
}

module.exports = router;

