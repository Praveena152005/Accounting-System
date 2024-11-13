const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from the frontend

// JWT Secret Key
const JWT_SECRET = 'your_jwt_secret_key'; // Replace this with a more secure secret

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'signupdb', // Replace with your MySQL database
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

// Signup route to register a new user
app.post('/api/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user already exists
        db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
            if (results.length > 0) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // Hash the password before storing it
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Insert the new user into the database
            db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err, result) => {
                if (err) {
                    return res.status(500).json({ message: 'Server error' });
                }
                res.status(201).json({ message: 'User created successfully' });
            });
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Login route to authenticate a user
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
            if (results.length === 0) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            // Compare the password with the hashed password in the database
            const user = results[0];
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            // Generate a JWT token for the user
            const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

            res.status(200).json({ token, message: 'Login successful' });
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
