const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();

const db = mysql.createConnection({
    host: 'webapp-backend',
    user: 'root',
    password: 'nazim',
    database: 'pizza_shop',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

app.use(express.static(path.join(__dirname, './')));

app.get('/pizzas', (req, res) => {
    db.query('SELECT * FROM pizzas', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});