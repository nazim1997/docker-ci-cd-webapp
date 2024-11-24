const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'nazim', 
  database: 'pizza_shop',
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  }
  console.log('Connected to the database.');

  connection.query('SELECT * FROM pizzas;', (err, results) => {
    if (err) {
      console.error('Error running query:', err);
      process.exit(1);
    }

    console.log('Query Results:', results);
    connection.end();
  });
});
