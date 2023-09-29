const express = require('express');
const router = express.Router();
const passport = require('passport');
const TeacherController = require('../controllers/teacherController');

//*Public routes

// Teacher registration route
router.post('/signup', (req, res) => {
    TeacherController.signupTeacher(req, res);
});

// Teacher login route
router.post('/login', (req, res) => {
    TeacherController.signInTeacher(req, res);
});

// Search for teachers
router.get('/search', (req, res) => {
    TeacherController.searchTeachers(req, res);
});

// View an individual teacher's profile as a student
router.get('/:teacherId/profile', (req, res) => {
    TeacherController.viewTeacherProfile(req, res);
});

// Teacher logout route
router.get('/logout', (req, res) => {
    // Perform any necessary logout actions here (e.g., clearing tokens or session data)
    res.status(200).json({ message: 'Teacher logged out successfully' });
});

//! Protected route for teachers

//? View the teacher's own account
router.get('/:teacherId/account', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        TeacherController.viewOwnAccount(req, res);
});

//? Update teacher profile
router.patch('/:teacherId/update', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        TeacherController.updateTeacherProfile(req, res);
});

//? Update teacher password
router.patch('/:teacherId/update/password', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        TeacherController.updateTeacherPassword(req, res);
});


//todo ... (other routes)

module.exports = router;

//     passport.authenticate('jwt', { session: false }),


