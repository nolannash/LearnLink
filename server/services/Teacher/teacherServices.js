const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Teacher = require('../../models/Teacher');

async function hashPassword(plainPassword) {
	const saltRounds = 10;
	const salt = await bcrypt.genSalt(saltRounds);
	const hash = await bcrypt.hash(plainPassword, salt);
	return hash;
}

function generateToken(teacherId) {
	const token = jwt.sign({ id: teacherId, role: 'teacher' }, process.env.JWT_SECRET_KEY, {
		expiresIn: '1h',
	});
	return token;
}

async function setJwtCookie(res, token) {
	res.cookie('jwt', token, {
		httpOnly: true,
		// secure: true, // Uncomment in production if using HTTPS
	});
}

async function signupTeacher(data, res) {
	const { email, password } = data;

	const existingTeacher = await Teacher.findOne({ 'credentials.email': email });

	if (existingTeacher) {
		throw new Error('An account with that email already exists');
	}

	const hashedPassword = await hashPassword(password);
	const teacher = new Teacher({
		...data,
		credentials: { email, password: hashedPassword },
	});

	await teacher.save();
	const token = generateToken(teacher._id);
	setJwtCookie(res, token);
	return 'Success';
}

async function signInTeacher(email, password, res) {
	const teacher = await Teacher.findOne({ 'credentials.email': email });

	if (!teacher) {
		throw new Error('Teacher not found');
	}

	const passwordMatch = await bcrypt.compare(password, teacher.credentials.password);

	if (!passwordMatch) {
		throw new Error('Invalid password');
	}

	const token = generateToken(teacher._id);
	setJwtCookie(res, token);
	return 'Success';
}

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
