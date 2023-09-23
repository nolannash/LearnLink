const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');

// Private route for user profile
router.get(
    '/profile',
    passport.authenticate('jwt', { session: false }),
    userController.getUserProfile
);

// Other user-related routes can be added here as needed

module.exports = router;
