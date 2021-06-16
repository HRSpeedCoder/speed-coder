const mysql = require('mysql');


const db = mysql.createConnection({
  user: 'postgres',
  password: 'cookiez223',
  database: 'toy-problems'
});

db.connect();

module.exports = db;
