const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/studentControllerV2');
const passport = require('passport');
const { auth } = require('../middlewares/passport');

const isAuthenticated = passport.authenticate('jwt', { session: false });

// Public Routes
router.post('/signup', StudentController.signupStudent);
router.post('/login', StudentController.signInStudent);


router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

// Student-only Protected Routes
router.patch('/:studentId/update', auth(['student']), (req, res) => {
	StudentController.updateStudentProfile(req, res);
});

router.patch('/:studentId/update/password', auth(['student']), (req, res) => {
	StudentController.updateStudentPassword(req, res);
});

router.post('/question/:questionId/request-help', auth(['student']), (req, res) => {
    const { questionId } = req.params;
    const { studentInput, studentProfile, maxAttempts } = req.body;

    // Call the requestHelp function from questionController
    questionController.requestHelp(req, res, questionId, studentInput, studentProfile, maxAttempts);
});

module.exports = router;
