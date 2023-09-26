const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const Student = require('../models/Student');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../.env') });
function generateToken(studentId) {
// sourcery skip: inline-immediately-returned-variable
    const token = jwt.sign({ id: studentId }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h', 
    });
    return token;
}

// Student sign-up
exports.signupStudent = async (req, res) => {
    try {
        const { name, age, email, password, grade, school } = req.body;

        // Check if a student with the same email already exists
        const existingStudent = await Student.findOne({ 'credentials.email': email });

        if (existingStudent) {
            return res.status(400).json({ error: 'An account with that email already exists' });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new student document
        const student = new Student({
            name,
            age,
            credentials: { email, password: hashedPassword },
            grade,
            school,
        });

        // Save the new student to the database
        await student.save();

        // Generate a JWT token for the newly registered student
        const token = generateToken(student._id);

        // Return the token to the client
        res.status(201).json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Student sign-in
exports.signInStudent = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the student exists
        const student = await Student.findOne({ 'credentials.email': email });

        if (!student) {
            return res.status(400).json({ error: 'Student not found' });
        }

        // Check if the provided password matches the hashed password
        const passwordMatch = await bcrypt.compare(password, student.credentials.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Generate a JWT token for the authenticated student
        const token = generateToken(student._id);

        // Return the token to the client
        res.status(200).json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
