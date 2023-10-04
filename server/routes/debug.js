const express = require('express');
const router = express.Router();
const passport = require('passport');
const { auth } = require('../middlewares/passport');
const loggedIn = passport.authenticate('jwt', { session: false });

// Get all cookies for debugging
router.get('/cookies', (req, res) => {
	const cookies = req.cookies;
	console.log('Received cookies:', cookies);
	res.json({ cookies });
});
// New /auth route to check authentication status
router.get('/loggedin', auth(), (req, res) => {
	if (req.user) {
		res.status(200).json({ message: 'You Are Logged In!' });
	} else {
		res.status(401).json({ message: 'You Are Not Logged In!' });
	}
});

router.get('/auth/teacher', auth(['teacher']), (req, res) => {
	res.status(200).json({ message: 'You Are A Teacher!' });
});

router.get('/auth/student', auth(['student']), (req, res) => {
	res.status(200).json({ message: 'You Are A Student!' });
});

module.exports = router;
