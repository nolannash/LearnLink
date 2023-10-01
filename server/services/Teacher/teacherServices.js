const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Teacher = require('../../models/Teacher');

// Helper: Hash Password
const hashPassword = async (plainPassword) => {
	const saltRounds = 10;
	const salt = await bcrypt.genSalt(saltRounds);
	return bcrypt.hash(plainPassword, salt);
};

// Helper: Generate JWT Token
const generateToken = (teacherId) => {
	return jwt.sign({ id: teacherId }, process.env.JWT_SECRET_KEY, {
		expiresIn: '1h',
	});
};

// Service: Sign Up Teacher
const signupTeacher = async (data) => {
	const { name, age, email, password, school } = data;
	const existingTeacher = await Teacher.findOne({ 'credentials.email': email });

	if (existingTeacher) {
		throw new Error('An account with that email already exists');
	}

	const hashedPassword = await hashPassword(password);

	const teacher = new Teacher({
		name,
		age,
		credentials: { email, password: hashedPassword },
		school,
	});

	await teacher.save();
	return generateToken(teacher._id);
};

// Service: Sign In Teacher
const signInTeacher = async (email, password) => {
	const teacher = await Teacher.findOne({ 'credentials.email': email });

	if (!teacher) {
		throw new Error('Teacher not found');
	}

	const passwordMatch = await bcrypt.compare(password, teacher.credentials.password);

	if (!passwordMatch) {
		throw new Error('Invalid password');
	}

	return generateToken(teacher._id);
};

// Service: Update Teacher Profile
const updateTeacherProfile = async (teacherId, data) => {
	const { password, bio, subjects, school } = data;
	const teacher = await Teacher.findById(teacherId);

	if (!teacher) {
		throw new Error('Teacher not found');
	}

	if (password) {
		const hashedPassword = await hashPassword(password);
		teacher.credentials.password = hashedPassword;
	}
	if (bio) {
		teacher.bio = bio;
	}
	if (subjects) {
		teacher.subjects = subjects;
	}
	if (school) {
		teacher.school = school;
	}

	await teacher.save();
};

// Service: Update Teacher Password
const updateTeacherPassword = async (teacherId, currentPassword, newPassword) => {
	const teacher = await Teacher.findById(teacherId);

	if (!teacher) {
		throw new Error('Teacher not found');
	}

	const passwordMatch = await bcrypt.compare(currentPassword, teacher.credentials.password);

	if (!passwordMatch) {
		throw new Error('Current password is incorrect');
	}

	const hashedPassword = await hashPassword(newPassword);
	teacher.credentials.password = hashedPassword;
	await teacher.save();
};

module.exports = {
	signupTeacher,
	signInTeacher,
	updateTeacherProfile,
	updateTeacherPassword,
	// Add other services here as needed
};
