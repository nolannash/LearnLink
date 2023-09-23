const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name: {
    type: String,
    // required: true,
    },
    password: {
    type: String,
    // required: true,
    },
    userType: {
    type: String, // 'teacher', 'parent', or 'student'
    // required: true,
    },
  // Add other user-related fields here
});

module.exports = mongoose.model('User', UserSchema);
