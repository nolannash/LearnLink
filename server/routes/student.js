const express = require('express');
const router = express.Router();
const passport = require('passport');
const StudentController = require('../controllers/studentController');

// Student registration route
router.post('/signup', (req,res)=>{StudentController.signupStudent(req,res);});

// Student login route
router.post('/login', StudentController.signInStudent);

// Student logout route
router.get('/logout', (req, res) => {
    // Perform any necessary logout actions here (e.g., clearing tokens or session data)
    res.status(200).json({ message: 'Student logged out successfully' });
});

// Protected route for students (example: dashboard)
// router.get(
//     '/dashboard',
//     passport.authenticate('jwt', { session: false }),
//     StudentController.dashboard
// );

// Other student-specific routes can be added here

module.exports = router;
