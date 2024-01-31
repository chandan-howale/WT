
const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Connected to MySQL');
  con.query('CREATE DATABASE mydb3', function (err, result) {
    if (err) throw err;
    console.log('Database "mydb3" created');
  });

  con.end();
});
