const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv'); 

dotenv.config();

// Register a new user
exports.register = (req, res) => {
    const { username, password } = req.body;

  // Check if username already exists
    User.findOne({ username }).then((user) => {
    if (user) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user
    const newUser = new User({ username, password });

    // Hash the password before saving it to the database
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
            .save()
            .then((user) =>
            res.json({
                user: {
                id: user.id,
                username: user.username,
                },
            })
            )
            .catch((err) => console.log(err));
        });
    });
    });
};

// Login an existing user
exports.login = (req, res) => {
    const { username, password } = req.body;

  // Find the user by username
    User.findOne({ username }).then((user) => {
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
        // User matched, create JWT payload
        const payload = {
            id: user.id,
                username: user.username,
        };

        // Sign the token
        jwt.sign(
            payload,
          process.env.JWT_SECRET_KEY, // Use the environment variable directly
          { expiresIn: 3600 }, // Token expires in 1 hour
            (err, token) => {
            res.json({
                success: true,
                token: 'Bearer ' + token,
            });
            }
        );
        } else {
        return res.status(400).json({ message: 'Password incorrect' });
        }
    });
    });
};
