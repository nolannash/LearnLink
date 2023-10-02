const express = require('express');
const router = express.Router();
const TeacherController = require('../controllers/teacherControllerV2');
const roleAuth = require('../middlewares/roleAuth');
const passport = require('passport');
const ClassroomController = require('../controllers/Classroom/classroomController')

const isAuthenticated = passport.authenticate('jwt', { session: false });

// Public Routes
router.post('/signup', TeacherController.signupTeacher);
router.post('/login', TeacherController.signInTeacher);

router.get('/logout', (req, res) => {
	const cookieName = 'token'; // Replace with the actual name of your JWT cookie
	res.clearCookie(cookieName);
	res.redirect('/');
});

// Teacher-only Protected Routes
router.patch('/:teacherId/update', isAuthenticated, roleAuth(['teacher']), (req, res) => {
	TeacherController.updateTeacherProfile(req, res);
});

router.patch('/:teacherId/update/password', isAuthenticated, roleAuth(['teacher']), (req, res) => {
	TeacherController.updateTeacherPassword(req, res);
});

router.post('/classroom/create/', isAuthenticated, roleAuth(['teacher']), (req, res) => {
	ClassroomController.createClassroom(req, res);
});

router.post('/classroom/:classroomId/add-student', isAuthenticated, roleAuth(['teacher']), (req, res) => {
	ClassroomController.addStudentToClassroom(req, res);
});

router.post('/classroom/:classroomId/add-lesson', isAuthenticated, roleAuth(['teacher']), (req, res) => {
	ClassroomController.addLesson(req, res);
});

router.delete('/teacher/classroom/:classroomId/delete', isAuthenticated, roleAuth(['teacher']), (req, res) => {
	ClassroomController.deleteClassroom(req, res);
});

module.exports = router;


