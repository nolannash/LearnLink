const express = require('express');
const router = express.Router();
const ClassroomController = require('../controllers/Classroom/classroomController');
const roleAuth = require('../middlewares/roleAuth');
const passport = require('passport');

const isAuthenticated = passport.authenticate('jwt', { session: false });

// Teacher-only Protected Routes
router.post('/', isAuthenticated, roleAuth(['teacher']), (req, res) => {
	ClassroomController.createClassroom(req, res);
});

router.get('/teacher/:teacherId', isAuthenticated, roleAuth(['teacher']), (req, res) => {
	ClassroomController.getAllClassroomsForTeacher(req, res);
});

router.post('/add-student', isAuthenticated, roleAuth(['teacher']), (req, res) => {
	ClassroomController.addStudentToClassroom(req, res);
});

router.post('/add-lesson', isAuthenticated, roleAuth(['teacher']), (req, res) => {
	ClassroomController.addLesson(req, res);
});

router.patch('/:classroomId', isAuthenticated, roleAuth(['teacher']), (req, res) => {
	ClassroomController.updateClassroom(req, res);
});

router.delete('/:classroomId', isAuthenticated, roleAuth(['teacher']), (req, res) => {
	ClassroomController.deleteClassroom(req, res);
});

module.exports = router;
