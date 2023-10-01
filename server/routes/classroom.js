const express = require('express');
const router = express.Router();
const passport = require('passport');
const ClassroomController = require('../controllers/Classroom/classroomController'); // Import the classroomController

// Create a new classroom
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    ClassroomController.createClassroom(req, res);
});

// Get all classrooms for a teacher
router.get('/teacher/:teacherId', passport.authenticate('jwt', { session: false }), (req, res) => {
    ClassroomController.getAllClassroomsForTeacher(req, res);
});

// Manually add a student to a classroom
router.post('/add-student', passport.authenticate('jwt', { session: false }), (req, res) => {
    ClassroomController.addStudentToClassroom(req, res);
});

// Add a lesson to a classroom
router.post('/add-lesson', passport.authenticate('jwt', { session: false }), (req, res) => {
    ClassroomController.addLesson(req, res);
});

// Update a classroom's details
router.patch('/:classroomId', passport.authenticate('jwt', { session: false }), (req, res) => {
    ClassroomController.updateClassroom(req, res);
});

// Delete a classroom
router.delete('/:classroomId', passport.authenticate('jwt', { session: false }), (req, res) => {
    ClassroomController.deleteClassroom(req, res);
});

module.exports = router;
