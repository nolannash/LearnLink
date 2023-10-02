const path = require('path');
const dotenv = require('dotenv');
const studentService = require('../services/Student/studentServices');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Student sign-up
exports.signupStudent = async (req, res) => {
	try {
		const message = await studentService.signupStudent(req.body, res);
		res.status(201).json({ message });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: err.message });
	}
};

// Student sign-in
exports.signInStudent = async (req, res) => {
	try {
		const { email, password } = req.body;
		const message = await studentService.signInStudent(email, password, res);
		res.status(200).json({ message });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: err.message });
	}
};

exports.updateStudentProfile = async (req, res) => {
	try {
		const { studentId } = req.params;
		const updatedStudent = await studentService.updateStudentProfile(studentId, req.body);
		res.status(200).json(updatedStudent);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: err.message });
	}
};

exports.updateStudentPassword = async (req, res) => {
	try {
		const { studentId } = req.params;
		const { currentPassword, newPassword } = req.body;
		await studentService.updateStudentPassword(studentId, currentPassword, newPassword);
		res.status(200).json({ message: 'Password updated successfully' });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: err.message });
	}
};
