const express = require('express');
const router = express.Router();
const passport = require('passport');
const TeacherController = require('../controllers/teacherController');

// Teacher registration route
router.post('/signup', TeacherController.signupTeacher);

// Teacher login route
router.post('/login', TeacherController.signInTeacher);

// Teacher logout route
router.get('/logout', (req, res) => {
    // Perform any necessary logout actions here (e.g., clearing tokens or session data)
    res.status(200).json({ message: 'Teacher logged out successfully' });
});

// Protected route for teachers (example: dashboard)
// router.get(
//     '/dashboard',
//     passport.authenticate('jwt', { session: false }),
//     TeacherController.dashboard
// );

// Other teacher-specific routes can be added here

module.exports = router;
