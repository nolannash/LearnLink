const Student = require('../models/Student');

// Student sign-up
exports.signupStudent = async (req, res) => {
    try {
        const { name, age, username, password, grade, school } = req.body;
        const student = new Student({
            name,
            age,
            role: 'student',
            credentials: { username, password },
            grade,
            school,
        });
        await student.save();
        res.status(201).json({ message: 'Student registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Student requests to join a class
exports.requestToJoinClass = async (req, res) => {
    try {
        const { studentId, classId } = req.body;
        // Add logic to handle the request and notify the teacher
        res.status(200).json({ message: 'Request sent to teacher' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
