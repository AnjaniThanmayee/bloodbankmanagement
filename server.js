const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 5000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'new_password',
  database: 'blood_bank',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

app.use(cors());
app.use(bodyParser.json());

app.post('/save-data-donar', (req, res) => {
  const formData = req.body;
  const sql = 'INSERT INTO Donar SET ?';

  db.query(sql, formData, (err, result) => {
    if (err) {
      console.error('Error saving data to the database:', err);
      res.status(500).send('Error saving data to the database.');
    } else {
      console.log('Data saved to the database!');
      res.status(200).send('Data saved to the database.');
    }
  });
});

app.post('/save-data-recipient', (req, res) => {
  const formData = req.body;
  const sql = 'INSERT INTO Recipient SET ?';

  db.query(sql, formData, (err, result) => {
    if (err) {
      console.error('Error saving data to the database:', err);
      res.status(500).send('Error saving data to the database.');
    } else {
      console.log('Data saved to the database!');
      const selectSql = `SELECT * FROM Donar WHERE blood_group = ?`;
      db.query(selectSql, [formData.blood_group], (selectErr, selectResults) => {
        if (selectErr) {
          console.error('Error querying donor database:', selectErr);
          return res.status(500).json({ error: 'Error querying donor database' });
        }
        res.json({ recipientId: result.insertId, donors: selectResults });
      });
    }
  });
});

app.post('/save-data-hospitals', (req, res) => {
    const formData = req.body;
    const sql = 'INSERT INTO Hospitals SET ?';
  
    db.query(sql, formData, (err, result) => {
      if (err) {
        console.error('Error saving data to the database:', err);
        res.status(500).send('Error saving data to the database.');
      } else {
        console.log('Data saved to the database!');
        const selectSql = `SELECT * FROM Donar WHERE blood_group = ?`;
        db.query(selectSql, [formData.blood_group], (selectErr, selectResults) => {
          if (selectErr) {
            console.error('Error querying donor database:', selectErr);
            return res.status(500).json({ error: 'Error querying donor database' });
          }
          res.json({ recipientId: result.insertId, donors: selectResults });
        });
      }
    });
  });

  app.post('/signup', (req, res) => {
    const { username, password, firstName, lastName, email } = req.body;
  
    if (!username || !password || !firstName || !lastName || !email) {
      return res.status(400).json({ message: 'Please provide all the required information.' });
    }
  
    const sql = 'INSERT INTO users (username, password, first_name, last_name, email) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [username, password, firstName, lastName, email], (err) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ message: 'Username already exists. Please choose a different username.' });
        }
        console.error('Error executing MySQL query:', err);
        return res.status(500).json({ message: 'Something went wrong. Please try again later.' });
      }
      return res.status(201).json({ message: 'Signup successful!' });
    });
  });
  

  app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ message: 'Please provide both username and password.' });
    }
  
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        return res.status(500).json({ message: 'Something went wrong. Please try again later.' });
      }
  
      if (results.length === 0) {
        return res.status(401).json({ message: 'Invalid credentials. Please check your username and password.' });
      }
      return res.status(200).json({ message: 'Login successful!' });
    });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


