const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/studentControllerV2');
const roleAuth = require('../middlewares/roleAuth');
const passport = require('passport');

const isAuthenticated = passport.authenticate('jwt', { session: false });

// Public Routes
router.post('/signup', StudentController.signupStudent);
router.post('/login', StudentController.signInStudent);

router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

// Student-only Protected Routes
router.patch('/:studentId/update', isAuthenticated, roleAuth(['student']), (req, res) => {
	StudentController.updateStudentProfile(req, res);
});

router.patch('/:studentId/update/password', isAuthenticated, roleAuth(['student']), (req, res) => {
	StudentController.updateStudentPassword(req, res);
});

module.exports = router;
