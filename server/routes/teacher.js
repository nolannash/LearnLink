const express = require('express');
const passport = require('passport');
const router = express.Router();
const TeacherController = require('../controllers/teacherControllerV2');
const ClassroomController = require('../controllers/Classroom/classroomController');
const { auth } = require('../middlewares/passport');

// Public Routes
router.post('/signup', TeacherController.signupTeacher);
router.post('/login', TeacherController.signInTeacher);

router.get('/logout', (req, res) => {
	const cookieName = 'token'; // Replace with the actual name of your JWT cookie
	res.clearCookie(cookieName);
	res.redirect('/');
});

// Teacher-only Protected Routes
router.patch('/:teacherId/update', auth(['teacher']), (req, res) => {
	TeacherController.updateTeacherProfile(req, res);
});

router.patch('/:teacherId/update/password', auth(['teacher']), (req, res) => {
	TeacherController.updateTeacherPassword(req, res);
});

router.post('/classroom/create/', auth(['teacher']), (req, res) => {
	console.log('teacher routes:', req.user.role);
	ClassroomController.createClassroom(req, res);
});

router.post('/classroom/:classroomId/add-student', auth(['teacher']), (req, res) => {
	ClassroomController.addStudentToClassroom(req, res);
});

router.post('/classroom/:classroomId/add-lesson', auth(['teacher']), (req, res) => {
	ClassroomController.addLesson(req, res);
});

router.delete('/teacher/classroom/:classroomId/delete', auth(['teacher']), (req, res) => {
	ClassroomController.deleteClassroom(req, res);
});

router.get('/cookies', (req, res) => {
	// Get all available cookies
	const cookies = req.cookies;

	// Log the cookies for debugging
	console.log('Received cookies:', cookies);

	// Send back the cookies
	res.json({ cookies });
});

module.exports = router;
