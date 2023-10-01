const teacherService = require('../services/Teacher/teacherServices');

// Teacher sign-up
exports.signupTeacher = async (req, res) => {
	try {
		const token = await teacherService.signupTeacher(req.body);
		res.status(201).json({ token });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: err.message });
	}
};

// Teacher sign-in
exports.signInTeacher = async (req, res) => {
	try {
		const { email, password } = req.body;
		const token = await teacherService.signInTeacher(email, password);
		res.status(200).json({ token });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: err.message });
	}
};

// Update teacher profile
exports.updateTeacherProfile = async (req, res) => {
	try {
		const { teacherId } = req.params;
		await teacherService.updateTeacherProfile(teacherId, req.body);
		res.status(200).json({ message: 'Teacher profile updated successfully' });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: err.message });
	}
};

// Update teacher password
exports.updateTeacherPassword = async (req, res) => {
	try {
		const { teacherId } = req.params;
		const { currentPassword, newPassword } = req.body;
		await teacherService.updateTeacherPassword(teacherId, currentPassword, newPassword);
		res.status(200).json({ message: 'Password updated successfully' });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: err.message });
	}
};

// Add other controller methods as needed
