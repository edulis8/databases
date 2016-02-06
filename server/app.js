var express = require('express');
var db = require('./db');

//// DB Connection
db.connect(function(err){
  if (err){
    console.log('Error connecting to db IN APP');
    return;
  }
  console.log('connection established IN APP');
});



// db.query("INSERT INTO messages (username) values ('TESTUSER')", function(err, res){
//         if(err){
//           console.log('ERROR in posting user to DB');
//         } else {
//           console.log('Data received from DB:\n');
//           console.log('res', res);
//         }
//       });


// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use("/classes", router);

// Serve the client files
app.use(express.static(__dirname + "/../client"));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}

