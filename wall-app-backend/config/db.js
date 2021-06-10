const mysql = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Batman748',
  database : 'wall-app',
  insecureAuth : true
});

module.exports= db

