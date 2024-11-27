const mysql = require('mysql2');
const fs = require('fs');

const connection = mysql.createConnection({
  host: 'webapp-backend',
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

    fs.writeFileSync('/usr/share/nginx/html/pizzas.json', JSON.stringify(results, null, 2));
    console.log('Query results saved to pizzas.json');
    console.log('Query Results:', results);
    connection.end();
  });
});
