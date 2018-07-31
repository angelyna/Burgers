// create the connection to mysql db titled 'burger_db' 
var mysql = require('mysql');

var connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'burger_db'
});

// make connection happen.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// export connection to use it with the ObjectRelationalMapping tool (orm.js)
module.exports = connection;

