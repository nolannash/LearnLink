const express = require('express');
const router = express.Router();
const ClassroomController = require('../controllers/Classroom/classroomController');
const passport = require('passport');

const isAuthenticated = passport.authenticate('jwt', { session: false });

// Teacher-only Protected Routes
router.post('/', isAuthenticated, (req, res) => {
	ClassroomController.createClassroom(req, res);
});

router.get('/teacher/:teacherId', isAuthenticated, (req, res) => {
	ClassroomController.getAllClassroomsForTeacher(req, res);
});

router.post('/add-student', isAuthenticated, (req, res) => {
	ClassroomController.addStudentToClassroom(req, res);
});

router.post('/add-lesson', isAuthenticated, (req, res) => {
	ClassroomController.addLesson(req, res);
});

router.patch('/:classroomId', isAuthenticated, (req, res) => {
	ClassroomController.updateClassroom(req, res);
});

router.delete('/:classroomId', isAuthenticated, (req, res) => {
	ClassroomController.deleteClassroom(req, res);
});

module.exports = router;
