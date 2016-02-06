var db = require('../db');

// db.connect(function(err){
//   if (err){
//     console.log('Error connecting to db IN MODELS');
//     return;
//   }
//   console.log('connection established IN MODELS');
// });

////////DATABASE MANUPULATION////////////

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (messages) {

      console.log(messages); 
      
      db.query('INSERT INTO messages SET ?', messages, function(err, res){
        if(err){
          console.log('ERROR in posting user to DB');
        } else {
          console.log('Data received from DB:\n');
          console.log('res', res);
        }
     });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    //////*** a fn that can insert a user into the db
    ///// insert into messages (username) values (user)
    post: function (user) {
                                                    
// db.query('INSERT INTO employees SET ?', employee, function(err,res){
//   if(err) throw err;

      db.query('INSERT INTO users SET ?', user, function(err, res){
        if(err){
          console.log('ERROR in posting user to DB');
        } else {
          console.log('Data received from DB:\n');
          console.log('res', res);
        }
      });
    }
  }
};
// var dbString = "insert whateved"
// db.query('SELECT * FROM employees',function(err,rows){
//   if(err) throw err;

//   console.log('Data received from Db:\n');
//   console.log(rows);
// });


//   console.log('Last insert ID:', res.insertId);
// });