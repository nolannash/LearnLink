const express = require('express');
const router = express.Router();
const passport = require('passport');
const TeacherController = require('../controllers/teacherControllerV2');

// Teacher registration and login routes
router.post('/signup', TeacherController.signupTeacher);
router.post('/login', TeacherController.signInTeacher);

// Teacher search route
// router.get('/search', TeacherController.searchTeachers);

// View individual teacher's profile
// router.get('/:teacherId/profile', TeacherController.viewTeacherProfile);

// Logout route
router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

//! Protected Routes
// router.get('/:teacherId/account', passport.authenticate('jwt', { session: false }), TeacherController.viewOwnAccount);

// Update Teacher profile
router.patch(
	'/:teacherId/update',
	passport.authenticate('jwt', { session: false }),
	TeacherController.updateTeacherProfile
);

// Update Teacher password
router.patch(
	'/:teacherId/update/password',
	passport.authenticate('jwt', { session: false }),
	TeacherController.updateTeacherPassword
);

module.exports = router;
