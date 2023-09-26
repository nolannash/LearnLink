const express = require('express');
const router = express.Router();
const passport = require('passport');
const StudentController = require('../controllers/studentController');

// Student registration route
router.post('/register', StudentController.register);

// Student login route
router.post('/login', StudentController.login);

// Protected route for students
router.get(
    '/dashboard',
    passport.authenticate('jwt', { session: false }),
    StudentController.dashboard
);

// Other student-specific routes can be added here

module.exports = router;
