// routes/classroom.js
const express = require('express');
const router = express.Router();
const classroomController = require('../controllers/classroomController');

// Create a new classroom
router.post('/create', classroomController.createClassroom);

// Add a student to a classroom
router.post('/addStudent', classroomController.addStudentToClassroom);

// Create an assignment in a classroom
router.post('/createAssignment', classroomController.createAssignment);

module.exports = router;
