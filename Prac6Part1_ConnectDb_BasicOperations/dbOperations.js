

const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'mydb3', 
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Connected to MySQL');

  // Create the table
  con.query('USE mydb3', function (err) {
    if (err) throw err;
    const createTableSQL = 'CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))';
    con.query(createTableSQL, function (error, result) {
      if (error) {
        console.error('Error creating table:', error);
      } else {
        console.log('Table "customers" created');
      }
  });

  //Insert data into the table
  const insertSQL1 = 'INSERT INTO customers (name, address) VALUES ("Chandan", "Ratnagiri")';
  const insertSQL2 = 'INSERT INTO customers (name, address) VALUES ("Om", "Kuwarbav")';
  const insertSQL3 = 'INSERT INTO customers (name, address) VALUES ("Sumit", "Ratnagiri")';
  const insertSQL4 = 'INSERT INTO customers (name, address) VALUES ("Indranil", "Khedshi")';
  const insertSQL5 = 'INSERT INTO customers (name, address) VALUES ("Sahil", "Ratnagiri")';
  con.query(insertSQL1, function (err, result) {
    if (err) throw err;
    console.log('Record1 inserted');
  });
  con.query(insertSQL2, function (err, result) {
    if (err) throw err;
    console.log('Record2 inserted');
  });
  con.query(insertSQL3, function (err, result) {
    if (err) throw err;
    console.log('Record3 inserted');
  });
  con.query(insertSQL4, function (err, result) {
    if (err) throw err;
    console.log('Record4 inserted');
  });
  con.query(insertSQL5, function (err, result) {
    if (err) throw err;
    console.log('Record5 inserted');
  });

  //Insert multiple data into the table
  // var sql = 'INSERT INTO empinfo (id, fname, lname, address, salary) VALUES ?';
  // var records = [
  // [1, 'John', 'Doe', '123 Main Street', 50000], [2, 'Jane', 'Smith', '456 Elm Street', 60000], [3, 'Peter', 'Jones', '789 Oak Street', 70000]
  // ];
  // con.query(sql, [records], function(err, result) {
  // if (err) {
  // throw err;
  // }
  // console.log('Number of records inserted:', result.affectedRows);
  // });

  // Select data from the table
  const selectSQL = `SELECT * FROM customers`;
  con.query(selectSQL, function (err, result) {
    if (err) throw err;
    console.log('Selected data:');
    console.log(result);
  });

  // Select data with a filter
  const filterSQL = `SELECT * FROM customers WHERE address = 'Ratnagiri'`;
  con.query(filterSQL, function (err, result) {
    if (err) throw err;
    console.log('Filtered data:');
    console.log(result);
  });

  // Sort the result
  const sortSQL = `SELECT * FROM customers ORDER BY name`;
  con.query(sortSQL, function (err, result) {
    if (err) throw err;
    console.log('Sorted data:');
    console.log(result);
  });

  // Update data in the table
  const updateSQL = `UPDATE customers SET address = 'Kudal' WHERE address = 'Ratnagiri'`;
  con.query(updateSQL, function (err, result) {
    if (err) throw err;
    console.log('Record updated');
  });

  con.query(selectSQL, function (err, result) {
    if (err) throw err;
    console.log('Display Updated data:');
    console.log(result);
  });

  // // Delete the table (for cleanup)
  const deleteTableSQL = `DROP TABLE customers`;
  con.query(deleteTableSQL, function (err, result) {
    if (err) throw err;
    console.log('Table "customers" deleted');
   });

  con.end();
});
});