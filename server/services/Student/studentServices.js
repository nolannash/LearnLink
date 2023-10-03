const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Student = require('../../models/Student');

async function hashPassword(plainPassword) {
	const saltRounds = 10;
	const salt = await bcrypt.genSalt(saltRounds);
	const hash = await bcrypt.hash(plainPassword, salt);
	return hash;
}

function generateToken(studentId) {
	const token = jwt.sign({ id: studentId, role: 'student' }, process.env.JWT_SECRET_KEY, {
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

async function signupStudent(data, res) {
	const { email, password } = data;

	const existingStudent = await Student.findOne({ 'credentials.email': email });

	if (existingStudent) {
		throw new Error('An account with that email already exists');
	}

	const hashedPassword = await hashPassword(password);
	const student = new Student({
		...data,
		credentials: { email, password: hashedPassword },
	});

	await student.save();
	const token = generateToken(student._id);
	setJwtCookie(res, token);
	return 'Success';
}

async function signInStudent(email, password, res) {
	const student = await Student.findOne({ 'credentials.email': email });

	if (!student) {
		throw new Error('Student not found');
	}

	const passwordMatch = await bcrypt.compare(password, student.credentials.password);

	if (!passwordMatch) {
		throw new Error('Invalid password');
	}

	const token = generateToken(student._id);
	setJwtCookie(res, token);
	return 'Success';
}

async function updateStudentProfile(studentId, updatedProfile) {
	const updatedStudent = await Student.findByIdAndUpdate(studentId, { $set: updatedProfile }, { new: true });
	if (!updatedStudent) {
		throw new Error('Student not found');
	}
	return updatedStudent;
}

async function updateStudentPassword(studentId, currentPassword, newPassword) {
	const student = await Student.findById(studentId);

	if (!student) {
		throw new Error('Student not found');
	}

	const passwordMatch = await bcrypt.compare(currentPassword, student.credentials.password);

	if (!passwordMatch) {
		throw new Error('Current password is incorrect');
	}

	const hashedPassword = await hashPassword(newPassword);
	student.credentials.password = hashedPassword;
	await student.save();
}

module.exports = {
	signupStudent,
	signInStudent,
	updateStudentProfile,
	updateStudentPassword,
};
