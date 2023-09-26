const Teacher = require('../models/Teacher');
const Classroom = require('../models/Classroom');

// Teacher sign-up
exports.signupTeacher = async (req, res) => {
    try {
        const { name, age, username, password, school } = req.body;
        const teacher = new Teacher({
            name,
            age,
            role: 'teacher',
            credentials: { username, password },
            school,
        });
        await teacher.save();
        res.status(201).json({ message: 'Teacher registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Teacher creates a new class
exports.createClass = async (req, res) => {
    try {
        const { teacherId, className, subject } = req.body;
        const classroom = new Classroom({
            teacher: teacherId,
            className,
            subject,
        });
        await classroom.save();
        res.status(201).json({ message: 'Classroom created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Teacher uploads an assignment to a class
exports.uploadAssignment = async (req, res) => {
    try {
        const { classId, assignmentName, due, questions } = req.body;
        // Add logic to create and attach the assignment to the class
        res.status(200).json({ message: 'Assignment uploaded successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Teacher manages student requests to join their class
exports.manageStudentRequest = async (req, res) => {
    try {
        const { teacherId, studentId, accept } = req.body;
        // Add logic to accept or reject the student request
        res.status(200).json({ message: 'Student request managed successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
