const mongoose = require('mongoose');

// Define the User schema here
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    userType: {
        type: String, // 'teacher', 'guardian', or 'student'
        required: true,
    }
})

module.exports = mongoose.model('User', userSchema);
