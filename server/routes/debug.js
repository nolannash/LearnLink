const express = require('express');
const passport = require('passport');
const router = express.Router();
const { decodeJwt } = require('../services/authServices'); // Import decodeJwt service

// Initialize JWT authentication
const isAuthenticated = passport.authenticate('jwt', { session: false });

// Get all cookies for debugging
router.get('/cookies', (req, res) => {
	const cookies = req.cookies;
	console.log('Received cookies:', cookies);
	res.json({ cookies });
});

// Get and decode JWT from cookies
router.get('/jwt', (req, res) => {
	const token = req.cookies.jwt; // Get JWT from cookies

	if (!token) {
		return res.status(401).json({ message: 'No JWT cookie found' });
	}

	// Use decodeJwt service to verify and decode the token
	const { decoded, error } = decodeJwt(token);

	if (error) {
		return res.status(401).json({ message: 'Invalid token', error });
	}

	// If decoding successful, send the decoded information
	res.json({ token, ...decoded });
});

module.exports = router;
