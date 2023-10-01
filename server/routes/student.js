const express = require('express');
const router = express.Router();
const passport = require('passport');
const StudentController = require('../controllers/studentControllerV2');

// Student registration and login routes
router.post('/signup', StudentController.signupStudent);
router.post('/login', StudentController.signInStudent);

// Logout route
router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

//! Protected Routes
router.patch(
	'/:studentId/update',
	passport.authenticate('jwt', { session: false }),
	StudentController.updateStudentProfile
);
router.patch(
	'/:studentId/update/password',
	passport.authenticate('jwt', { session: false }),
	StudentController.updateStudentPassword
);

module.exports = router;
