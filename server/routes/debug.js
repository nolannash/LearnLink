const express = require('express');
const router = express.Router();
const passport = require('passport');
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

// New /auth route to check authentication status
router.get('/auth', isAuthenticated, (req, res) => {
	if (req.user) {
		// Check if user is attached to the request
		res.status(200).json({ message: 'Authorized' });
	} else {
		res.status(401).json({ message: 'Unauthorized' });
	}
});

module.exports = router;
