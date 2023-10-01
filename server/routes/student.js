const express = require('express');
const router = express.Router();
const passport = require('passport');
const StudentController = require('../controllers/studentController');

// Student registration route
router.post('/signup', (req,res)=>{StudentController.signupStudent(req,res)});

// Student login route
router.post('/login', (req,res)=>{StudentController.signInStudent(req,res)});

router.get('/logout', (req, res) => {
    // Use passport's logout function to log the user out
    req.logout(); 
    // Redirect the user to the root URL ('/')
    res.redirect('/');
    });


//! Protected Routes:
//update student profle
router.patch('/:studentId/update', passport.authenticate('jwt', { session: false }),(req,res) => {StudentController.updateStudentProfile(req,res.status(200).json({ message: 'Profile updated successfully' }))})

//update student password
router.patch('/:studentId/update/password', passport.authenticate('jwt', { session: false }),(req,res)=>{StudentController.updateStudentPassword(req,res.status(200).json({ message: 'Password Updated Successfully' }))})

module.exports = router;
