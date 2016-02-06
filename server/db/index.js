var Sequelize = require('sequelize');
var sequelize = new Sequelize('chat', 'root', '');

//var mysql = require('mysql');

var User = sequelize.define('users', {username : Sequelize.STRING});

var Message = sequelize.define('messages', {
  userid: Sequelize.INTEGER,
  username: Sequelize.STRING,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
});

 // uid: {
 //    type: Sequelize.INTEGER,
 //    primaryKey: true,
 //    autoIncrement: true // Automatically gets converted to SERIAL for postgres
 //  }

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;



// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".



// var dbConnection = mysql.createConnection({
//       user: "root",
//       password: "",
//       database: "chat"
//     });

// //dbConnection.connect();

// module.exports = dbConnection;
