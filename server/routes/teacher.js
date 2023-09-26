const express = require('express');
const router = express.Router();
const passport = require('passport');
const TeacherController = require('../controllers/teacherController');

// Teacher registration route
router.post('/register', TeacherController.register);

// Teacher login route
router.post('/login', TeacherController.login);

// Protected route for teachers
router.get(
    '/dashboard',
    passport.authenticate('jwt', { session: false }),
    TeacherController.dashboard
);

// Other teacher-specific routes can be added here

module.exports = router;
