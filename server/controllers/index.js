var models = require('../models'); //db area
var express = require('express');
var bluebird = require('bluebird');
var parser = require('body-parser');

var app = express();
//module.exports.app = app;

////// DATA and ROUTE manipulation /////////////

module.exports = {
  // models.messages.get 
  // models.messages.post
  messages: {
    get: function (req, res) {
      console.log('hi');
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      app.use(parser.json()) 
      models.messages.post(req.body);
      res.end('user post received');
    } // a function which handles posting a message to the database
  },


// models.users.get
// models.users.post

  users: {
    // Ditto as above
    get: function (req, res) {
      
    },
    post: function (req, res) {
      // express way of parsing incoming POST data
      app.use(parser.json()) 
      models.users.post(req.body);

      
      res.end('user post received');
    }
  }
};

