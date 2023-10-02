const express = require('express');
const router = express.Router();
const TeacherController = require('../controllers/teacherControllerV2');
const roleAuth = require('../middlewares/roleAuth');
const passport = require('passport');

const isAuthenticated = passport.authenticate('jwt', { session: false });

// Public Routes
router.post('/signup', TeacherController.signupTeacher);
router.post('/login', TeacherController.signInTeacher);

router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

// Teacher-only Protected Routes
router.patch('/:teacherId/update', isAuthenticated, roleAuth(['teacher']), (req, res) => {
	TeacherController.updateTeacherProfile(req, res);
});

router.patch('/:teacherId/update/password', isAuthenticated, roleAuth(['teacher']), (req, res) => {
	TeacherController.updateTeacherPassword(req, res);
});

module.exports = router;
