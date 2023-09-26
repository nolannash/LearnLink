const bcrypt = require('bcrypt');
const Teacher = require('../models/Teacher');
const Classroom = require('../models/Classroom');

// Teacher sign-up
exports.signupTeacher = async (req, res) => {
    try {
        const { name, age, email, password, school } = req.body;
        // Check if a teacher with the same email already exists
        const existingTeacher = await Teacher.findOne({ 'credentials.email': email });
        if (existingTeacher) {
            // If a teacher with the same email exists, return an error response
            return res.status(400).json({ error: 'Email already registered' });
        }
        const saltRounds = 10; 
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        // Create a new teacher document
        const teacher = new Teacher({
            name,
            age,
            credentials: { email, hashedPasswordassword },
            school,
        });
        // Save the new teacher to the database
        await teacher.save();
        // Return a success response
        return res.status(201).json({ message: 'Teacher registered successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
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
