const User = require('../models/user');
const Teacher = require('../models/userTypes/teacher'); // Import Teacher model
const Parent = require('../models/userTypes/guardian'); // Import Parent model
const Student = require('../models/userTypes/student'); // Import Student model

// Get user profile
exports.getUserProfile = (req, res) => {
  const { userType } = req.user; // Assuming 'userType' identifies the user type (teacher, parent, student)

  // Depending on the user type, retrieve the appropriate profile information
    if (userType === 'teacher') {
    Teacher.findOne({ user: req.user.id })
        .then((teacher) => {
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher profile not found' });
        }
        res.json(teacher);
        })
        .catch((err) => console.log(err));
    } else if (userType === 'parent') {
    Parent.findOne({ user: req.user.id })
        .then((parent) => {
        if (!parent) {
            return res.status(404).json({ message: 'Parent profile not found' });
        }
        res.json(parent);
        })
        .catch((err) => console.log(err));
    } else if (userType === 'student') {
    Student.findOne({ user: req.user.id })
        .then((student) => {
        if (!student) {
            return res.status(404).json({ message: 'Student profile not found' });
        }
        res.json(student);
        })
        .catch((err) => console.log(err));
    }
  // You can add more cases for different user types as needed
};
